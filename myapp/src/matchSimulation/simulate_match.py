"""
simulate_match.py
─────────────────
Simulates a live Bundesliga match by replaying a DFL XML feed in real time.

Files needed (place in the same folder as this script):
  lineup.xml     — the pre-match MatchInformation XML (sent once before kickoff)
  match_data.xml — the full AdvancedEvents XML with all match events

How it works:
  1. Sends lineup.xml to filterlivefeed immediately
  2. Reads all <Event> elements from match_data.xml
  3. Groups them into WINDOW_MINUTES-minute windows based on their GameTime attribute
     (GameTime format in the DFL feed: "045:30:12" = 45 min 30 sec 12 frames)
  4. Every window interval, sends the next window to filterlivefeed
  5. Finishes when all events have been sent

Speed multiplier:
  SPEED = 1.0  →  real time  (6 windows x 1 min = 6 min)
  SPEED = 6.0  →  1 min demo (6 windows x 10 sec)
"""

import requests
import time
import xml.etree.ElementTree as ET
from collections import defaultdict

# ── Config ────────────────────────────────────────────────────────────────────

FEED_URL              = 'https://20trt2erj1.execute-api.eu-central-1.amazonaws.com/Development/api/data'
LINEUP_FILE           = 'lineup.xml'
MATCH_DATA_FILE       = 'match_data.xml'
WINDOW_MINUTES        = 1      # group events into N-minute buckets
SPEED                 = 10.0   # 1.0 = real time, 6.0 = 10s per window
LINEUP_KICKOFF_DELAY  = 5    # seconds between lineup send and kickoff


# ── GameTime parser ───────────────────────────────────────────────────────────

def parse_game_minute(game_time: str) -> int:
    """
    Converts DFL GameTime string to a whole minute integer.

    Format: "045:30:12"  →  45
            "091:48:76"  →  91
            "000:00:00"  →  0

    Falls back to 0 if the attribute is missing or malformed.
    """
    try:
        return int(game_time.split(':')[0])
    except (IndexError, ValueError, AttributeError):
        return 0


def get_event_minute(event_elem) -> int:
    """
    Find the GameTime on the first child of an <Event> wrapper that has it.
    The GameTime attribute lives on the inner element (Play, ShotAtGoal, etc.),
    not on <Event> itself.
    """
    for child in event_elem:
        gt = child.get('GameTime')
        if gt:
            return parse_game_minute(gt)
    return 0


# ── XML builder ───────────────────────────────────────────────────────────────

def build_chunk_xml(match_id: str, event_elems: list) -> str:
    """
    Wraps a list of <Event> ElementTree elements into a valid
    PutDataRequest / AdvancedEvents envelope that filterlivefeed expects.
    """
    inner = ''.join(ET.tostring(e, encoding='unicode') for e in event_elems)
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<PutDataRequest>\n'
        f'  <AdvancedEvents MatchId="{match_id}">\n'
        f'    {inner}\n'
        '  </AdvancedEvents>\n'
        '</PutDataRequest>'
    )


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    # ── Load files ────────────────────────────────────────────────────────────
    print('Loading XML files...')

    with open(LINEUP_FILE, encoding='utf-8') as f:
        lineup_xml = f.read()

    match_tree = ET.parse(MATCH_DATA_FILE)
    match_root = match_tree.getroot()

    advanced = match_root.find('.//AdvancedEvents')
    if advanced is None:
        print('ERROR: No <AdvancedEvents> found in match_data.xml')
        return

    match_id = advanced.get('MatchId', 'UNKNOWN')
    print(f'Match ID: {match_id}')

    all_events = list(match_root.iter('Event'))
    print(f'Total events in file: {len(all_events)}')

    # ── Group events into WINDOW_MINUTES-minute buckets ───────────────────────
    buckets: dict[int, list] = defaultdict(list)
    for event in all_events:
        minute = get_event_minute(event)
        bucket = int(minute // WINDOW_MINUTES)
        buckets[bucket].append(event)

    sorted_buckets = sorted(buckets.keys())
    total_windows  = len(sorted_buckets)
    sleep_secs     = (WINDOW_MINUTES * 60) / SPEED

    print(f'Windows: {total_windows}  |  '
          f'Sleep between windows: {sleep_secs:.1f}s  |  '
          f'Estimated total time: {total_windows * sleep_secs / 60:.1f} min\n')

    # ── Step 1: send lineup ───────────────────────────────────────────────────
    print('Sending lineup...')
    try:
        res = requests.post(FEED_URL, json={'xml': lineup_xml}, timeout=15)
        print(f'  Lineup → {res.status_code} | {res.json()}')
        print(f'  Waiting {LINEUP_KICKOFF_DELAY}s before kickoff...')
        time.sleep(LINEUP_KICKOFF_DELAY)
        print()
    except Exception as e:
        print(f'  Lineup send failed: {e}')
        return

    # ── Step 2: send event windows ────────────────────────────────────────────
    for i, bucket_key in enumerate(sorted_buckets):
        events_in_window = buckets[bucket_key]
        window_start     = int(bucket_key * WINDOW_MINUTES)
        window_end       = int(window_start + WINDOW_MINUTES - 1)

        xml_chunk = build_chunk_xml(match_id, events_in_window)

        try:
            res  = requests.post(FEED_URL, json={'xml': xml_chunk}, timeout=15)
            data = res.json()

            whistle_info = ''
            if data.get('whistle'):
                w = data['whistle']
                whistle_info = f'  ⚽ {w["whistleType"].upper()} — {w["result"]}'

            print(
                f'[{i+1:02d}/{total_windows}] '
                f'min {window_start:02d}–{window_end:02d}  '
                f'({len(events_in_window)} events)  '
                f'→ {res.status_code}  '
                f'users updated: {data.get("usersUpdated", 0)}'
                f'{whistle_info}'
            )

        except requests.exceptions.Timeout:
            print(f'[{i+1:02d}/{total_windows}] min {window_start:02d}–{window_end:02d} → TIMEOUT, continuing')
        except Exception as e:
            print(f'[{i+1:02d}/{total_windows}] min {window_start:02d}–{window_end:02d} → ERROR: {e}')

        # Sleep until next window — skip sleep after the last window
        if i < total_windows - 1:
            print(f'  sleeping {sleep_secs:.1f}s...')
            time.sleep(sleep_secs)

    print('\nMatch simulation complete.')


if __name__ == '__main__':
    main()
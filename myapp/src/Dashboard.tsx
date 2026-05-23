import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import TeamBuilder from './TeamBuilder';
import MatchTab from './MatchTab';
import { ActionCard, allCards } from './data/cards';
import { Player } from './data/teams';
import Leaderboard from './Leaderboard';
import Dock from './Dock';

type Tab = 'builder' | 'match' | 'leaderboard';

type PlayedCard = {
  card: ActionCard;
  playerName: string;
  slot: string;
  confirmed?: boolean;
};

const API_BASE         = 'https://20trt2erj1.execute-api.eu-central-1.amazonaws.com/Development/api';
const POLL_INTERVAL_MS = 30_000;
const END_LINGER_MS    = 5 * 60 * 1000;

const TeamIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);

const MatchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a10 10 0 0 1 6.9 2.8M12 2a10 10 0 0 0-6.9 2.8"/>
    <path d="M4.9 7.5h14.2M2.5 12h19M4.9 16.5h14.2"/>
    <path d="M12 22a10 10 0 0 1-6.9-2.8M12 22a10 10 0 0 0 6.9-2.8"/>
  </svg>
);

const LeaderboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="14" width="5" height="8" rx="1"/>
    <rect x="9" y="8" width="5" height="14" rx="1"/>
    <rect x="16" y="2" width="5" height="20" rx="1"/>
  </svg>
);

function restorePlayedCardsFromSegment(): PlayedCard[] {
  try {
    const seg          = JSON.parse(localStorage.getItem('cardsSegment') || '{}');
    const savedCardIds = JSON.parse(localStorage.getItem('savedCards')   || '[]') as string[];
    const slotMap      = JSON.parse(localStorage.getItem('slotPlayers')  || '{}') as Record<string, number>;
    const savedCards   = allCards.filter((c) => savedCardIds.includes(c.id));

    // Reverse map: player id (as string) → slot key
    const playerIdToSlot: Record<string, string> = {};
    Object.entries(slotMap).forEach(([slot, playerId]) => {
      playerIdToSlot[String(playerId)] = slot;
    });

    const restored: PlayedCard[] = [];
    for (let i = 1; i <= 5; i++) {
      const cardId   = seg[`Card_${i}`];
      const isPlayed = seg[`Card_${i}_Played`] === true || seg[`Card_${i}_Played`] === 1;
      const playerId = seg[`Card_${i}_Player`];

      if (!cardId || !isPlayed) continue;

      const card = savedCards.find((c) => c.id === cardId);
      if (!card) continue;

      const slot = playerId === 'TEAM'
        ? 'TEAM'
        : (playerIdToSlot[String(playerId)] ?? 'UNKNOWN');

      const playerName = playerId === 'TEAM' ? 'Whole Team' : (playerId ?? 'Unknown');

      restored.push({ card, playerName, slot, confirmed: true });
    }
    return restored;
  } catch {
    return [];
  }
}

function Dashboard() {
  const location = useLocation();

  const favoriteTeam =
    location.state?.favoriteTeam ||
    localStorage.getItem('team') ||
    'Bayern Munich';

  const [activeTab, setActiveTab]           = useState<Tab>('builder');
  const [savedPlayers, setSavedPlayers]     = useState<{ [slotId: string]: Player | null }>({});
  const [savedFormation, setSavedFormation] = useState('2-2-1');
  const [cardsSaved, setCardsSaved]         = useState(false);

  const [selectedCards, setSelectedCards] = useState<ActionCard[]>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('savedCards') || '[]') as string[];
      return allCards.filter((card) => saved.includes(card.id));
    } catch {
      return [];
    }
  });

  const [matchId, setMatchId]                 = useState<string | null>(null);
  const [matchPoints, setMatchPoints]         = useState(0);
  const [matchEnded, setMatchEnded]           = useState(false);
  const [lingerCountdown, setLingerCountdown] = useState<number | null>(null);
  const [playedCards, setPlayedCards]         = useState<PlayedCard[]>(() => restorePlayedCardsFromSegment());

  const pollRef      = useRef<ReturnType<typeof setInterval> | null>(null);
  const lingerRef    = useRef<ReturnType<typeof setTimeout>  | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      stopPolling();
      if (lingerRef.current)    clearTimeout(lingerRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  const stopPolling = () => {
    if (pollRef.current) { clearInterval(pollRef.current); pollRef.current = null; }
  };

  const fetchDisplay = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const res = await fetch(`${API_BASE}/display`, {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok || !data.success) return;

      const { match_id, points_segment, cards_segment } = data.data;

      if (points_segment?.GamePoints != null) {
        setMatchPoints(points_segment.GamePoints);
      }

      // ── Sync confirmed card state from backend ───────────────────
      if (cards_segment) {
        // Also persist latest segment to localStorage so a refresh still works
        localStorage.setItem('cardsSegment', JSON.stringify(cards_segment));

        setPlayedCards((prev) =>
          prev.map((played) => {
            const cardSlotEntry = Object.entries(cards_segment).find(
              ([key, val]) => !key.endsWith('_Played') && !key.endsWith('_Player') && val === played.card.id
            );
            if (!cardSlotEntry) return played;

            const [cardKey]  = cardSlotEntry;
            const playedFlag = cards_segment[`${cardKey}_Played`];
            const confirmed  = playedFlag === true || playedFlag === 1;

            return { ...played, confirmed };
          })
        );
      }
      // ─────────────────────────────────────────────────────────────

      if (!match_id) {
        stopPolling();
        setMatchEnded(true);
        startLingerCountdown();
      }
    } catch (err) {
      console.error('fetchDisplay error:', err);
    }
  };

  const startPolling = () => {
    stopPolling();
    fetchDisplay();
    pollRef.current = setInterval(fetchDisplay, POLL_INTERVAL_MS);
  };

  const startLingerCountdown = () => {
    let secondsLeft = Math.floor(END_LINGER_MS / 1000);
    setLingerCountdown(secondsLeft);
    setCardsSaved(false);

    countdownRef.current = setInterval(() => {
      secondsLeft -= 1;
      setLingerCountdown(secondsLeft);
      if (secondsLeft <= 0 && countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    }, 1000);

    lingerRef.current = setTimeout(() => {
      setActiveTab('leaderboard');
    }, END_LINGER_MS);
  };

  const randomCards = useMemo(() => {
    return [...allCards].sort(() => Math.random() - 0.5).slice(0, 11);
  }, []);

  const dockItems = [
    {
      icon:      <TeamIcon />,
      label:     'Team',
      onClick:   () => setActiveTab('builder'),
      className: activeTab === 'builder' ? 'dock-item-active' : '',
    },
    {
      icon:      <MatchIcon />,
      label:     'Match',
      onClick:   () => setActiveTab('match'),
      className: activeTab === 'match' ? 'dock-item-active' : '',
    },
    {
      icon:      <LeaderboardIcon />,
      label:     'Leaderboard',
      onClick:   () => setActiveTab('leaderboard'),
      className: activeTab === 'leaderboard' ? 'dock-item-active' : '',
    },
  ];

  return (
    <div style={styles.screen}>
      <div style={styles.phone}>
        <div style={styles.content}>
          {activeTab === 'builder' && (
            <TeamBuilder
              favoriteTeam={favoriteTeam}
              selectedPlayers={savedPlayers}
              setSelectedPlayers={setSavedPlayers}
              formation={savedFormation}
              setFormation={setSavedFormation}
            />
          )}
          {activeTab === 'match' && (
            <MatchTab
              selectedPlayers={savedPlayers}
              formation={savedFormation}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              randomCards={randomCards}
              cardsSaved={cardsSaved}
              setCardsSaved={setCardsSaved}
              matchId={matchId}
              setMatchId={setMatchId}
              matchPoints={matchPoints}
              matchEnded={matchEnded}
              setMatchEnded={setMatchEnded}
              lingerCountdown={lingerCountdown}
              playedCards={playedCards}
              setPlayedCards={setPlayedCards}
              onEnterMatch={startPolling}
              onNavigateToLeaderboard={() => setActiveTab('leaderboard')}
            />
          )}
          {activeTab === 'leaderboard' && <Leaderboard />}
        </div>

        <div style={styles.dockWrapper}>
          <Dock
            items={dockItems}
            panelHeight={58}
            baseItemSize={44}
            magnification={62}
            distance={120}
          />
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  screen: {
    minHeight:       '100vh',
    backgroundColor: '#f0f0f0',
    display:         'flex',
    justifyContent:  'center',
    alignItems:      'center',
    padding:         '20px',
    boxSizing:       'border-box',
  },
  phone: {
    width:           '350px',
    height:          '760px',
    backgroundColor: '#fff',
    borderRadius:    '40px',
    boxSizing:       'border-box',
    boxShadow:       '0 20px 60px rgba(0,0,0,0.2)',
    display:         'flex',
    flexDirection:   'column',
    overflow:        'hidden',
    position:        'relative',
  },
  content: {
    flex:      1,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  dockWrapper: {
    position:        'relative',
    height:          '80px',
    flexShrink:      0,
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    backgroundColor: '#0b0b0b',
  },
};

export default Dashboard;
export {};
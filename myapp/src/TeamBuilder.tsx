import React, { useEffect, useMemo, useRef, useState } from 'react';
import { teams, Player, Position } from './data/teams';
import grainTexture from './assets/images/grain.png';
import matchBg from './assets/images/match.jpg';

type Formation =
  | '2-2-1'
  | '1-2-2'
  | '2-1-2'
  | '1-3-1'
  | '3-1-1'
  | 'GK-2-1-1'
  | 'GK-1-2-1'
  | 'GK-1-1-2'
  | 'GK-3-1'
  | 'GK-2-2';

type Props = {
  favoriteTeam: string;
  selectedPlayers: { [slotId: string]: Player | null };
  setSelectedPlayers: React.Dispatch<React.SetStateAction<{ [slotId: string]: Player | null }>>;
  formation: string;
  setFormation: React.Dispatch<React.SetStateAction<string>>;
};

function TeamBuilder({ favoriteTeam, selectedPlayers, setSelectedPlayers, formation, setFormation }: Props) {
  const selectedTeam = teams.find((team) => team.name === favoriteTeam) || teams[0];
  const players = selectedTeam.players;

  const [isFormationDropdownOpen, setIsFormationDropdownOpen] = useState(false);
  const formationDropdownRef = useRef<HTMLDivElement | null>(null);

  const formations: Record<Formation, string[]> = useMemo(() => ({
    '2-2-1':    ['DEF1', 'DEF2', 'MID1', 'MID2', 'ATT1'],
    '1-2-2':    ['DEF1', 'MID1', 'MID2', 'ATT1', 'ATT2'],
    '2-1-2':    ['DEF1', 'DEF2', 'MID1', 'ATT1', 'ATT2'],
    '1-3-1':    ['DEF1', 'MID1', 'MID2', 'MID3', 'ATT1'],
    '3-1-1':    ['DEF1', 'DEF2', 'DEF3', 'MID1', 'ATT1'],
    'GK-2-1-1': ['GK1', 'DEF1', 'DEF2', 'MID1', 'ATT1'],
    'GK-1-2-1': ['GK1', 'DEF1', 'MID1', 'MID2', 'ATT1'],
    'GK-1-1-2': ['GK1', 'DEF1', 'MID1', 'ATT1', 'ATT2'],
    'GK-3-1':   ['GK1', 'DEF1', 'DEF2', 'DEF3', 'ATT1'],
    'GK-2-2':   ['GK1', 'DEF1', 'DEF2', 'ATT1', 'ATT2'],
  }), []);

  const formationLabels: Record<Formation, string> = {
    '2-2-1':    '2-2-1',
    '1-2-2':    '1-2-2',
    '2-1-2':    '2-1-2',
    '1-3-1':    '1-3-1',
    '3-1-1':    '3-1-1',
    'GK-2-1-1': 'GK+2-1-1',
    'GK-1-2-1': 'GK+1-2-1',
    'GK-1-1-2': 'GK+1-1-2',
    'GK-3-1':   'GK+3-1',
    'GK-2-2':   'GK+2-2',
  };

  // Helper — must be defined before useEffect that uses it
  const getSlotPosition = (slot: string): Position => {
    if (slot.startsWith('GK'))  return 'GK';
    if (slot.startsWith('DEF')) return 'DEF';
    if (slot.startsWith('MID')) return 'MID';
    return 'ATT';
  };

  // ── Load saved squad ──────────────────────────────────────────────────────
  useEffect(() => {
    const savedFormation  = localStorage.getItem('formation');
    const savedSlotPlayers = localStorage.getItem('slotPlayers');
    const savedLegacy      = localStorage.getItem('players');

    if (!savedFormation) return;
    if (!formations[savedFormation as Formation]) return;

    try {
      setFormation(savedFormation);
      const loadedPlayers: { [slotId: string]: Player | null } = {};

      if (savedSlotPlayers) {
        const slotMap: { [slot: string]: number } = JSON.parse(savedSlotPlayers);
        Object.entries(slotMap).forEach(([slot, playerId]) => {
          const found = players.find((p) => p.id === playerId);
          if (found) loadedPlayers[slot] = found;
        });
      } else if (savedLegacy) {
        const ids: number[] = JSON.parse(savedLegacy);
        const slots = formations[savedFormation as Formation];
        ids.forEach((playerId) => {
          const found = players.find((p) => p.id === playerId);
          if (!found) return;
          const freeSlot = slots.find(
            (s) => getSlotPosition(s) === found.position && !loadedPlayers[s]
          );
          if (freeSlot) loadedPlayers[freeSlot] = found;
        });
      }

      setSelectedPlayers(loadedPlayers);
    } catch (err) {
      console.error('Failed to load saved squad:', err);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formations, players]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formationDropdownRef.current && !formationDropdownRef.current.contains(event.target as Node)) {
        setIsFormationDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const slotPositions: Record<Formation, Record<string, React.CSSProperties>> = {
    '2-2-1': {
      ATT1: { left: '50%', top: '15%' },
      MID1: { left: '30%', top: '43%' },
      MID2: { left: '70%', top: '43%' },
      DEF1: { left: '30%', top: '72%' },
      DEF2: { left: '70%', top: '72%' },
    },
    '1-2-2': {
      ATT1: { left: '30%', top: '18%' },
      ATT2: { left: '70%', top: '18%' },
      MID1: { left: '30%', top: '48%' },
      MID2: { left: '70%', top: '48%' },
      DEF1: { left: '50%', top: '75%' },
    },
    '2-1-2': {
      ATT1: { left: '30%', top: '18%' },
      ATT2: { left: '70%', top: '18%' },
      MID1: { left: '50%', top: '48%' },
      DEF1: { left: '30%', top: '75%' },
      DEF2: { left: '70%', top: '75%' },
    },
    '1-3-1': {
      ATT1: { left: '50%', top: '15%' },
      MID1: { left: '25%', top: '45%' },
      MID2: { left: '50%', top: '45%' },
      MID3: { left: '75%', top: '45%' },
      DEF1: { left: '50%', top: '75%' },
    },
    '3-1-1': {
      ATT1: { left: '50%', top: '15%' },
      MID1: { left: '50%', top: '45%' },
      DEF1: { left: '22%', top: '75%' },
      DEF2: { left: '50%', top: '75%' },
      DEF3: { left: '78%', top: '75%' },
    },
    'GK-2-1-1': {
      ATT1: { left: '50%', top: '12%' },
      MID1: { left: '50%', top: '35%' },
      DEF1: { left: '30%', top: '60%' },
      DEF2: { left: '70%', top: '60%' },
      GK1:  { left: '50%', top: '87%' },
    },
    'GK-1-2-1': {
      ATT1: { left: '50%', top: '12%' },
      MID1: { left: '30%', top: '42%' },
      MID2: { left: '70%', top: '42%' },
      DEF1: { left: '50%', top: '65%' },
      GK1:  { left: '50%', top: '87%' },
    },
    'GK-1-1-2': {
      ATT1: { left: '30%', top: '15%' },
      ATT2: { left: '70%', top: '15%' },
      MID1: { left: '50%', top: '42%' },
      DEF1: { left: '50%', top: '65%' },
      GK1:  { left: '50%', top: '87%' },
    },
    'GK-3-1': {
      ATT1: { left: '50%', top: '15%' },
      DEF1: { left: '22%', top: '58%' },
      DEF2: { left: '50%', top: '58%' },
      DEF3: { left: '78%', top: '58%' },
      GK1:  { left: '50%', top: '87%' },
    },
    'GK-2-2': {
      ATT1: { left: '30%', top: '18%' },
      ATT2: { left: '70%', top: '18%' },
      DEF1: { left: '30%', top: '62%' },
      DEF2: { left: '70%', top: '62%' },
      GK1:  { left: '50%', top: '87%' },
    },
  };

  const currentFormation = formation as Formation;

  const selectedPlayerIds = Object.values(selectedPlayers).filter(Boolean).map((p) => p!.id);
  const availablePlayers  = players.filter((p) => !selectedPlayerIds.includes(p.id));
  const getPlayersByPosition = (pos: Position) => availablePlayers.filter((p) => p.position === pos);

  const handleDrop = (e: React.DragEvent, slot: string) => {
    const player = JSON.parse(e.dataTransfer.getData('player')) as Player;
    const needed  = getSlotPosition(slot);
    if (player.position !== needed) { alert(`You need a ${needed} player here`); return; }
    setSelectedPlayers((prev) => ({ ...prev, [slot]: player }));
  };

  const handleRemovePlayer = (slot: string) => {
    setSelectedPlayers((prev) => ({ ...prev, [slot]: null }));
  };

  const handleFormationChange = (newFormation: Formation) => {
    const newSlots = formations[newFormation];
    const keptPlayers: { [slotId: string]: Player | null } = {};
    const usedIds: number[] = [];
    Object.values(selectedPlayers).forEach((player) => {
      if (!player || usedIds.includes(player.id)) return;
      const freeSlot = newSlots.find((s) => getSlotPosition(s) === player.position && !keptPlayers[s]);
      if (freeSlot) { keptPlayers[freeSlot] = player; usedIds.push(player.id); }
    });
    setFormation(newFormation);
    setSelectedPlayers(keptPlayers);
  };

  const saveTeam = async () => {
    const selectedCount = Object.values(selectedPlayers).filter(Boolean).length;
    if (selectedCount < 5) { alert('Please choose 5 players first'); return; }
    try {
      const API_URL = 'https://20trt2erj1.execute-api.eu-central-1.amazonaws.com/Development/api/squad';
      const token = localStorage.getItem('token');
      if (!token) { alert('You are not logged in'); return; }

      const slots = formations[currentFormation];
      const playerIds = slots.map((slot) => selectedPlayers[slot]?.id).filter((id): id is number => id != null);
      const requestBody = { formation, players: playerIds };
      console.log('Sending squad:', requestBody);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      console.log('API response:', data);
      if (!response.ok || !data.success) { alert(data.error || 'Failed to save squad'); return; }

      const slotMap: { [slot: string]: number } = {};
      Object.entries(selectedPlayers).forEach(([slot, player]) => {
        if (player) slotMap[slot] = player.id;
      });
      localStorage.setItem('formation', formation);
      localStorage.setItem('players', JSON.stringify(playerIds));
      localStorage.setItem('slotPlayers', JSON.stringify(slotMap));

      alert('Team saved successfully!');
    } catch (error) {
      console.error('Save squad error:', error);
      alert('Something went wrong while saving the squad');
    }
  };

  const positionAccentColor = (pos: Position) => {
    if (pos === 'GK')  return '#f5a623';
    if (pos === 'DEF') return '#4a90d9';
    if (pos === 'MID') return '#7ed321';
    return '#d7040f';
  };

  const renderPlayerCard = (player: Player) => (
    <div
      key={player.id}
      draggable
      onDragStart={(e) => e.dataTransfer.setData('player', JSON.stringify(player))}
      style={styles.playerCard}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ffb4aa'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#2a2a2a'; }}
    >
      {player.image
        ? <img src={player.image} alt={player.name} style={styles.playerImage} />
        : (
          <div style={styles.playerImagePlaceholder}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", color: positionAccentColor(player.position), fontSize: '18px' }}>
              {player.position}
            </span>
          </div>
        )
      }
      <div style={styles.playerCardFooter}>
        <span style={styles.playerCardName}>{player.name}</span>
        <span style={{ ...styles.playerCardPos, color: positionAccentColor(player.position) }}>
          {player.position}
        </span>
      </div>
    </div>
  );

  const renderSelectedPlayer = (player: Player) => (
    <div style={styles.selectedPlayerContainer}>
      {player.image
        ? <img src={player.image} alt={player.name} style={styles.selectedPlayerImage} />
        : <div style={styles.selectedPlayerPlaceholder} />
      }
      <span style={styles.selectedPlayerName}>{player.name}</span>
    </div>
  );

  const renderEmptySlot = (slot: string) => {
    const pos = getSlotPosition(slot);
    return (
      <div style={{ ...styles.emptySlot, borderColor: positionAccentColor(pos) }}>
        <span style={{ ...styles.emptySlotLabel, color: positionAccentColor(pos) }}>{pos}</span>
      </div>
    );
  };

  return (
    <div style={{
      ...styles.wrapper,
      backgroundImage: `url(${matchBg})`,
    }}>
      <div style={{ ...styles.grain, backgroundImage: `url(${grainTexture})` }} />

      {/* ── Header ── */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <img src={selectedTeam.logo} alt={selectedTeam.name} style={styles.teamLogo} />
          <div>
            <p style={styles.headerEyebrow}>SQUAD BUILDER</p>
            <h1 style={styles.headerTitle}>{selectedTeam.name.toUpperCase()}</h1>
          </div>
        </div>

        {/* ── Custom Formation Dropdown ── */}
        <div style={styles.formationWrapper} ref={formationDropdownRef}>
          <div
            style={{
              ...styles.formationDropdownHeader,
              borderColor: isFormationDropdownOpen ? '#d7040f' : '#554240',
            }}
            onClick={() => setIsFormationDropdownOpen(!isFormationDropdownOpen)}
          >
            <span style={styles.formationDropdownLabel}>
              {formationLabels[currentFormation] ?? formation}
            </span>
            <span style={styles.formationArrow}>{isFormationDropdownOpen ? '▲' : '▼'}</span>
          </div>

          {isFormationDropdownOpen && (
            <div style={styles.formationDropdownList}>
              {(Object.keys(formationLabels) as Formation[]).map((f) => (
                <div
                  key={f}
                  style={{
                    ...styles.formationDropdownItem,
                    ...(formation === f ? styles.formationDropdownItemSelected : {}),
                  }}
                  onClick={() => {
                    handleFormationChange(f);
                    setIsFormationDropdownOpen(false);
                  }}
                >
                  {formationLabels[f]}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── Pitch ── */}
      <div style={styles.pitch}>
        <div style={styles.halfwayLine} />
        <div style={styles.centerCircle} />

        {formations[currentFormation].map((slot) => (
          <div
            key={slot}
            style={{ ...styles.slot, ...slotPositions[currentFormation][slot] }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, slot)}
            onDoubleClick={() => handleRemovePlayer(slot)}
          >
            {selectedPlayers[slot] ? renderSelectedPlayer(selectedPlayers[slot]!) : renderEmptySlot(slot)}
          </div>
        ))}
      </div>

      {/* ── Helper + Save ── */}
      <div style={styles.actionRow}>
        <p style={styles.helperText}>‎ ‎ Double tap to remove</p>
        <button
          onClick={saveTeam}
          style={styles.saveButton}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d7040f'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = 'none'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#1a1c1c'; e.currentTarget.style.boxShadow = '3px 3px 0 0 rgba(0,0,0,1)'; }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          SAVE SQUAD
        </button>
      </div>

      {/* ── Player Bench ── */}
      <div style={styles.bench}>
        {(['GK', 'DEF', 'MID', 'ATT'] as Position[]).map((pos) => {
          const posPlayers = getPlayersByPosition(pos);
          if (!posPlayers.length) return null;
          return (
            <React.Fragment key={pos}>
              <div style={{ ...styles.positionDivider, borderColor: positionAccentColor(pos) }}>
                <span style={{ ...styles.positionDividerText, color: positionAccentColor(pos) }}>{pos}</span>
              </div>
              {posPlayers.map(renderPlayerCard)}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    backgroundColor: '#121414',
    padding: '14px',
    height: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Lexend', sans-serif",
  },

  grain: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%', height: '100%',
    opacity: 0.12,
    pointerEvents: 'none',
    zIndex: 9999,
    backgroundRepeat: 'repeat',
  },

  // ── Header ────────────────────────────────────
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #2a2a2a',
    paddingBottom: '10px',
    flexShrink: 0,
    marginTop: '18px',
  },

  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },

  teamLogo: {
    width: '36px',
    height: '36px',
    objectFit: 'contain',
  },

  headerEyebrow: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '9px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    color: '#ffb4aa',
    margin: 0,
    textTransform: 'uppercase' as const,
  },

  headerTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '20px',
    color: '#e2e2e2',
    margin: 0,
    letterSpacing: '0.04em',
    fontWeight: 400,
    lineHeight: 1,
  },

  // ── Formation custom dropdown ──────────────────
  formationWrapper: {
    position: 'relative' as const,
    flexShrink: 0,
  },

  formationDropdownHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#0c0f0f',
    border: '2px solid #554240',
    padding: '5px 10px',
    cursor: 'pointer',
    transition: 'border-color 0.15s',
    minWidth: '90px',
    justifyContent: 'space-between',
  },

  formationDropdownLabel: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '16px',
    letterSpacing: '0.05em',
    color: '#ffb4aa',
  },

  formationArrow: {
    fontSize: '9px',
    color: '#ffb4aa',
    flexShrink: 0,
  },

  formationDropdownList: {
    position: 'absolute' as const,
    top: '100%',
    right: 0,
    width: '100%',
    backgroundColor: '#1a1c1c',
    border: '2px solid #554240',
    borderTop: 'none',
    zIndex: 100,
    boxSizing: 'border-box' as const,
  },

  formationDropdownItem: {
    padding: '8px 10px',
    cursor: 'pointer',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '15px',
    letterSpacing: '0.05em',
    color: '#dcc0bd',
    borderBottom: '1px solid #2a2c2c',
  },

  formationDropdownItemSelected: {
    backgroundColor: '#2a1c1c',
    color: '#ffb4aa',
  },

  // ── Pitch ─────────────────────────────────────
  pitch: {
    position: 'relative',
    flex: '1 1 0',
    minHeight: 0,
    borderRadius: '20px',
    overflow: 'hidden',
    background: 'linear-gradient(90deg, #168a3a 0%, #168a3a 50%, #0f7a32 50%, #0f7a32 100%)',
    border: '3px solid white',
  },

  halfwayLine: {
    position: 'absolute',
    left: 0, top: '50%',
    width: '100%', height: '2px',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },

  centerCircle: {
    position: 'absolute',
    left: '50%', top: '50%',
    width: '90px', height: '90px',
    border: '2px solid rgba(255,255,255,0.6)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
  },

  slot: {
    position: 'absolute',
    width: '72px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  },

  emptySlot: {
    width: '52px',
    height: '52px',
    border: '2px dashed #aaa',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
    backdropFilter: 'blur(4px)',
  },

  emptySlotLabel: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '13px',
    letterSpacing: '0.05em',
  },

  selectedPlayerContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2px',
    width: '100%',
  },

  selectedPlayerImage: {
    width: '58px',
    height: '58px',
    objectFit: 'contain' as const,
    filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.9))',
  },

  selectedPlayerPlaceholder: {
    width: '52px',
    height: '52px',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '4px',
  },

  selectedPlayerName: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '9px',
    fontWeight: 700,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: '1px 5px',
    letterSpacing: '0.02em',
    textAlign: 'center' as const,
    whiteSpace: 'nowrap' as const,
    maxWidth: '70px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    backdropFilter: 'blur(4px)',
  },

  // ── Action row ────────────────────────────────
  actionRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
  },

  helperText: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '9px',
    fontWeight: 700,
    color: '#959595',
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    margin: 0,
  },

  saveButton: {
    backgroundColor: '#fff',
    color: '#1a1c1c',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '16px',
    letterSpacing: '0.08em',
    border: 'none',
    padding: '7px 18px',
    cursor: 'pointer',
    boxShadow: '3px 3px 0 0 rgba(0,0,0,1)',
    transition: 'background-color 0.15s, color 0.15s, box-shadow 0.15s, transform 0.1s',
  },

  // ── Bench ─────────────────────────────────────
  bench: {
    display: 'flex',
    flexDirection: 'row' as const,
    gap: '6px',
    overflowX: 'auto' as const,
    paddingBottom: '2px',
    alignItems: 'center',
    flexShrink: 0,
    scrollbarWidth: 'none' as const,
    msOverflowStyle: 'none' as const,
  },

  positionDivider: {
    minWidth: '28px',
    height: '90px',
    borderLeft: '2px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    paddingLeft: '6px',
  },

  positionDividerText: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '13px',
    letterSpacing: '0.08em',
    writingMode: 'vertical-rl' as const,
    textOrientation: 'mixed' as const,
  },

  playerCard: {
    minWidth: '62px',
    height: '90px',
    backgroundColor: '#0e0e0e',
    border: '1px solid #2a2a2a',
    cursor: 'grab',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'hidden',
    transition: 'border-color 0.15s',
    position: 'relative' as const,
  },

  playerImage: {
    width: '62px',
    height: '68px',
    objectFit: 'contain' as const,
    objectPosition: 'center bottom' as const,
    display: 'block',
    flexShrink: 0,
    backgroundColor: '#0e0e0e',
  },

  playerImagePlaceholder: {
    width: '100%',
    height: '68px',
    backgroundColor: '#181818',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  playerCardFooter: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
    padding: '2px 3px',
    gap: '1px',
    borderTop: '1px solid #222',
  },

  playerCardName: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '7px',
    fontWeight: 700,
    color: '#e2e2e2',
    textAlign: 'center' as const,
    letterSpacing: '0.01em',
    lineHeight: 1.2,
    maxWidth: '58px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },

  playerCardPos: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '10px',
    letterSpacing: '0.06em',
  },
};

export default TeamBuilder;
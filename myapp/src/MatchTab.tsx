import React, { useState } from 'react';
import { ActionCard } from './data/cards';
import { Player, Position } from './data/teams';
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

type PlayedCard = {
  card: ActionCard;
  playerName: string;
  slot: string;
};

type Props = {
  selectedPlayers: {
    [slotId: string]: Player | null;
  };
  formation: string;
  selectedCards: ActionCard[];
  setSelectedCards: React.Dispatch<React.SetStateAction<ActionCard[]>>;
  randomCards: ActionCard[];
  cardsSaved: boolean;
  setCardsSaved: React.Dispatch<React.SetStateAction<boolean>>;
};

function MatchTab({
  selectedPlayers,
  formation,
  selectedCards,
  setSelectedCards,
  randomCards,
  cardsSaved,
  setCardsSaved,
}: Props) {

  const [playedCards, setPlayedCards] = useState<PlayedCard[]>([]);

  const formations: Record<Formation, string[]> = {
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
  };

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

  const getSlotPosition = (slot: string): Position => {
    if (slot.startsWith('GK'))  return 'GK';
    if (slot.startsWith('DEF')) return 'DEF';
    if (slot.startsWith('MID')) return 'MID';
    return 'ATT';
  };

  const toggleCard = (card: ActionCard) => {
    const exists = selectedCards.some((c) => c.id === card.id);
    if (exists) {
      setSelectedCards(selectedCards.filter((c) => c.id !== card.id));
      return;
    }
    if (selectedCards.length >= 5) {
      alert('You can only choose 5 cards');
      return;
    }
    setSelectedCards([...selectedCards, card]);
  };

  const saveCards = () => {
    if (selectedCards.length !== 5) {
      alert('Please choose exactly 5 cards');
      return;
    }
    setCardsSaved(true);
  };

  const editCards = () => {
    setCardsSaved(false);
    setPlayedCards([]);
  };

  const handleCardDropOnPlayer = (e: React.DragEvent, slot: string) => {
    const card = JSON.parse(e.dataTransfer.getData('card')) as ActionCard;
    const player = selectedPlayers[slot];
    if (!player) { alert('Drop the card on a selected player'); return; }
    if (card.appliesTo === 'TEAM') { alert('This card is for the whole team, not one player'); return; }
    const alreadyPlayed = playedCards.some((played) => played.card.id === card.id);
    if (alreadyPlayed) { alert('This card was already played'); return; }
    setPlayedCards([...playedCards, { card, playerName: player.name, slot }]);
  };

  const removePlayedCard = (cardId: number) => {
    setPlayedCards(playedCards.filter((played) => played.card.id !== cardId));
  };

  const playTeamCard = (card: ActionCard) => {
    const alreadyPlayed = playedCards.some((played) => played.card.id === card.id);
    if (alreadyPlayed) { alert('This card was already played'); return; }
    setPlayedCards([...playedCards, { card, playerName: 'Whole Team', slot: 'TEAM' }]);
  };

  const isCardPlayed = (cardId: number) => playedCards.some((played) => played.card.id === cardId);
  const getCardPlayedOnSlot = (slot: string) => playedCards.filter((played) => played.slot === slot);

  const positionAccentColor = (pos: Position) => {
    if (pos === 'GK')  return '#f5a623';
    if (pos === 'DEF') return '#4a90d9';
    if (pos === 'MID') return '#7ed321';
    return '#d7040f';
  };

  const cardTypeColor = (card: ActionCard) => card.appliesTo === 'TEAM' ? '#7ed321' : '#ffb4aa';

  const renderPlayer = (slot: string, player: Player) => {
    const cardsOnThisPlayer = getCardPlayedOnSlot(slot);
    return (
      <div style={styles.selectedPlayerContainer}>
        {player.image && (
          <img src={player.image} alt={player.name} style={styles.selectedPlayerImage} />
        )}
        <span style={styles.selectedPlayerName}>{player.name}</span>
        {cardsOnThisPlayer.length > 0 && (
          <span style={styles.cardBadge}>{cardsOnThisPlayer.length} card</span>
        )}
      </div>
    );
  };

  // ── Card selection screen ──────────────────────────────────────────────────
  if (!cardsSaved) {
    return (
      <div style={styles.wrapper}>
        <div style={{ ...styles.grain, backgroundImage: `url(${grainTexture})` }} />

        <div style={styles.selectionInner}>
          <p style={styles.eyebrow}></p>
          <h2 style={styles.pageTitle}>CHOOSE YOUR CARDS</h2>
          <p style={styles.subtitle}>Pick 5 cards to play this match.</p>

          <div style={styles.counterRow}>
            <span style={styles.counter}>{selectedCards.length}</span>
            <span style={styles.counterDivider}>/</span>
            <span style={styles.counterTotal}>5</span>
            <span style={styles.counterLabel}>SELECTED</span>
          </div>

          <div style={styles.cardGrid}>
            {randomCards.map((card) => {
              const selected = selectedCards.some((c) => c.id === card.id);
              return (
                <div
                  key={card.id}
                  onClick={() => toggleCard(card)}
                  style={{
                    ...styles.card,
                    ...(selected ? styles.cardSelected : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (!selected) e.currentTarget.style.borderColor = '#554240';
                  }}
                  onMouseLeave={(e) => {
                    if (!selected) e.currentTarget.style.borderColor = '#2a2a2a';
                  }}
                >
                  <div style={styles.cardHeader}>
                    <span style={{ ...styles.cardTypePill, color: cardTypeColor(card), borderColor: cardTypeColor(card) }}>
                      {card.appliesTo === 'TEAM' ? 'TEAM' : 'PLAYER'}
                    </span>
                    <span style={styles.cardTiming}>
                      {card.timing === 'BEFORE_MATCH' ? 'PRE-MATCH' : 'IN-PLAY'}
                    </span>
                  </div>
                  <p style={styles.cardName}>{card.name}</p>
                  <p style={styles.cardDesc}>{card.description}</p>
                  {selected && <div style={styles.selectedTick}>✓</div>}
                </div>
              );
            })}
          </div>

          <div style={styles.buttonRow}>
            <button
              style={styles.saveButton}
              onClick={saveCards}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d7040f'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#1a1c1c'; e.currentTarget.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)'; }}
              onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              LOCK IN CARDS
            </button>

            <button
              style={styles.enterMatchButton}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d7040f'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ffb4aa'; e.currentTarget.style.boxShadow = '4px 4px 0 0 rgba(215,4,15,0.4)'; }}
              onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              ENTER MATCH →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Match preview screen ───────────────────────────────────────────────────
  return (
    <div style={{
      ...styles.wrapper,
      backgroundImage: `url(${matchBg})`,
    }}>
      <div style={{ ...styles.grain, backgroundImage: `url(${grainTexture})` }} />

      {/* Header */}
      <header style={styles.header}>
        <div>
          <p style={styles.eyebrow}>MATCH DAY</p>
          <h2 style={styles.headerTitle}>MATCH PREVIEW</h2>
        </div>
        <button
          style={styles.editButton}
          onClick={editCards}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#d7040f'; e.currentTarget.style.color = '#ffb4aa'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#554240'; e.currentTarget.style.color = '#dcc0bd'; }}
        >
          SAVE
        </button>
      </header>

      <p style={styles.helperText}>TAP TEAM CARDS TO PLAY</p>

      {/* Pitch */}
      <div style={styles.pitch}>
        <div style={styles.halfwayLine} />
        <div style={styles.centerCircle} />

        {formations[currentFormation].map((slot) => (
          <div
            key={slot}
            style={{ ...styles.slot, ...slotPositions[currentFormation][slot] }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleCardDropOnPlayer(e, slot)}
          >
            {selectedPlayers[slot]
              ? renderPlayer(slot, selectedPlayers[slot]!)
              : (
                <div style={{ ...styles.emptySlot, borderColor: positionAccentColor(getSlotPosition(slot)) }}>
                  <span style={{ ...styles.emptySlotLabel, color: positionAccentColor(getSlotPosition(slot)) }}>
                    {getSlotPosition(slot)}
                  </span>
                </div>
              )
            }
          </div>
        ))}
      </div>

      {/* Cards bench */}
      <p style={styles.sectionLabel}>YOUR CARDS</p>
      <div style={styles.cardBench}>
        {selectedCards.map((card) => {
          const played = isCardPlayed(card.id);
          const playedEntry = playedCards.find((p) => p.card.id === card.id);
          return (
            <div
              key={card.id}
              draggable={!played && card.appliesTo === 'ONE_PLAYER'}
              onDragStart={(e) => e.dataTransfer.setData('card', JSON.stringify(card))}
              onClick={() => { if (card.appliesTo === 'TEAM') playTeamCard(card); }}
              style={{
                ...styles.benchCard,
                ...(played ? styles.benchCardPlayed : {}),
                cursor: card.appliesTo === 'TEAM' ? 'pointer' : played ? 'not-allowed' : 'grab',
                borderColor: played ? '#2a2a2a' : cardTypeColor(card),
              }}
              onMouseEnter={(e) => {
                if (!played) e.currentTarget.style.borderColor = card.appliesTo === 'TEAM' ? '#7ed321' : '#d7040f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = played ? '#2a2a2a' : cardTypeColor(card);
              }}
            >
              <span style={{ ...styles.benchCardType, color: cardTypeColor(card) }}>
                {card.appliesTo === 'TEAM' ? 'TEAM' : 'PLAYER'}
              </span>
              <p style={styles.benchCardName}>{card.name}</p>

              {played && (
                <>
                  <p style={styles.playedOn}>→ {playedEntry?.playerName}</p>
                  <button
                    style={styles.changeButton}
                    onClick={(e) => { e.stopPropagation(); removePlayedCard(card.id); }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#ffb4aa'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#dcc0bd'; }}
                  >
                    CHANGE
                  </button>
                </>
              )}
            </div>
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

  // ── Card selection ────────────────────────────
  selectionInner: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '5px',
    height: '100%',
    overflow: 'hidden' as const,
  },

  eyebrow: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: 'px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    color: '#ffb4aa',
    margin: '14px 0 0',
    textTransform: 'uppercase' as const,
  },

  pageTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '28px',
    color: '#e2e2e2',
    margin: 0,
    letterSpacing: '0.04em',
    fontWeight: 400,
  },

  subtitle: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '11px',
    color: '#959595',
    margin: 0,
    letterSpacing: '0.04em',
  },

  counterRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
  },

  counter: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '28px',
    color: '#ffb4aa',
    letterSpacing: '0.04em',
  },

  counterDivider: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '20px',
    color: '#554240',
  },

  counterTotal: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '20px',
    color: '#554240',
  },

  counterLabel: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    color: '#554240',
    marginLeft: '4px',
  },

  cardGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    overflowY: 'auto' as const,
    paddingBottom: '4px',
    scrollbarWidth: 'none' as const,
    flex: '1 1 0',
    minHeight: 0,
  },

  card: {
    flexShrink: 0,
    backgroundColor: '#0e0e0e',
    border: '2px solid #2a2a2a',
    padding: '10px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '6px',
    position: 'relative' as const,
    transition: 'border-color 0.15s',
    boxSizing: 'border-box' as const,
  },

  cardSelected: {
    border: '2px solid #d7040f',
    backgroundColor: '#1a0a0a',
  },

  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTypePill: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '10px',
    letterSpacing: '0.08em',
    border: '1px solid',
    padding: '1px 5px',
  },

  cardTiming: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '8px',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: '#554240',
    textTransform: 'uppercase' as const,
  },

  cardName: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '15px',
    letterSpacing: '0.04em',
    color: '#e2e2e2',
    margin: 0,
    lineHeight: 1.1,
  },

  cardDesc: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '9px',
    color: '#959595',
    margin: 0,
    lineHeight: 1.4,
  },

  selectedTick: {
    position: 'absolute' as const,
    top: '8px',
    right: '8px',
    width: '16px',
    height: '16px',
    backgroundColor: '#d7040f',
    color: '#fff',
    fontSize: '10px',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonRow: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    flexShrink: 0,
  },

  saveButton: {
    width: '100%',
    backgroundColor: '#fff',
    color: '#1a1c1c',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '20px',
    letterSpacing: '0.05em',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
    transition: 'background-color 0.15s, color 0.15s, box-shadow 0.15s',
  },

  enterMatchButton: {
    width: '100%',
    backgroundColor: 'transparent',
    color: '#ffb4aa',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '20px',
    letterSpacing: '0.05em',
    border: '2px solid #d7040f',
    padding: '10px',
    cursor: 'pointer',
    boxShadow: '4px 4px 0 0 rgba(215,4,15,0.4)',
    transition: 'background-color 0.15s, color 0.15s, box-shadow 0.15s',
  },

  // ── Match preview ─────────────────────────────
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '10px',
    borderBottom: '1px solid #2a2a2a',
    paddingBottom: '5px',
    flexShrink: 0,
    marginTop: '5px',
    position: 'relative' as const,
    zIndex: 1,
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

  editButton: {
    backgroundColor: 'transparent',
    border: '2px solid #554240',
    color: '#dcc0bd',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '14px',
    letterSpacing: '0.08em',
    padding: '5px 12px',
    cursor: 'pointer',
    transition: 'border-color 0.15s, color 0.15s',
  },

  helperText: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '8px',
    fontWeight: 700,
    color: '#554240',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    margin: 0,
    position: 'relative' as const,
    zIndex: 1,
    flexShrink: 0,
  },

  pitch: {
    position: 'relative' as const,
    flex: '1 1 0',
    minHeight: 0,
    borderRadius: '20px',
    overflow: 'hidden',
    background: 'linear-gradient(90deg, #168a3a 0%, #168a3a 50%, #0f7a32 50%, #0f7a32 100%)',
    border: '3px solid white',
    zIndex: 1,
  },

  halfwayLine: {
    position: 'absolute' as const,
    left: 0, top: '50%',
    width: '100%', height: '2px',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },

  centerCircle: {
    position: 'absolute' as const,
    left: '50%', top: '50%',
    width: '90px', height: '90px',
    border: '2px solid rgba(255,255,255,0.6)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
  },

  slot: {
    position: 'absolute' as const,
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
    border: '2px dashed',
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
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2px',
  },

  selectedPlayerImage: {
    width: '54px',
    height: '54px',
    objectFit: 'contain' as const,
    filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.9))',
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

  cardBadge: {
    fontSize: '8px',
    fontFamily: "'Bebas Neue', sans-serif",
    letterSpacing: '0.06em',
    backgroundColor: '#d7040f',
    color: '#fff',
    padding: '1px 5px',
  },

  sectionLabel: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '9px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    color: '#ffb4aa',
    margin: 0,
    textTransform: 'uppercase' as const,
    position: 'relative' as const,
    zIndex: 1,
    flexShrink: 0,
  },

  cardBench: {
    display: 'flex',
    flexDirection: 'row' as const,
    gap: '6px',
    overflowX: 'auto' as const,
    paddingBottom: '2px',
    flexShrink: 0,
    position: 'relative' as const,
    zIndex: 1,
    scrollbarWidth: 'none' as const,
  },

  benchCard: {
    minWidth: '90px',
    backgroundColor: '#0e0e0e',
    border: '2px solid',
    padding: '8px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box' as const,
  },

  benchCardPlayed: {
    opacity: 0.55,
    backgroundColor: '#0a0a0a',
  },

  benchCardType: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '9px',
    letterSpacing: '0.1em',
  },

  benchCardName: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '13px',
    letterSpacing: '0.04em',
    color: '#e2e2e2',
    margin: 0,
    lineHeight: 1.1,
  },

  playedOn: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '8px',
    fontWeight: 700,
    color: '#ffb4aa',
    margin: 0,
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  changeButton: {
    background: 'none',
    border: 'none',
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '11px',
    letterSpacing: '0.06em',
    color: '#dcc0bd',
    cursor: 'pointer',
    padding: 0,
    textAlign: 'left' as const,
    transition: 'color 0.15s',
  },
};

export default MatchTab;
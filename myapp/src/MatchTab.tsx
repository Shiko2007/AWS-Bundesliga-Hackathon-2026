import React, { useState } from 'react';
import { ActionCard } from './data/cards';
import { Player, Position } from './data/teams';

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
    '2-2-1': ['DEF1', 'DEF2', 'MID1', 'MID2', 'ATT1'],
    '1-2-2': ['DEF1', 'MID1', 'MID2', 'ATT1', 'ATT2'],
    '2-1-2': ['DEF1', 'DEF2', 'MID1', 'ATT1', 'ATT2'],
    '1-3-1': ['DEF1', 'MID1', 'MID2', 'MID3', 'ATT1'],
    '3-1-1': ['DEF1', 'DEF2', 'DEF3', 'MID1', 'ATT1'],

    'GK-2-1-1': ['GK1', 'DEF1', 'DEF2', 'MID1', 'ATT1'],
    'GK-1-2-1': ['GK1', 'DEF1', 'MID1', 'MID2', 'ATT1'],
    'GK-1-1-2': ['GK1', 'DEF1', 'MID1', 'ATT1', 'ATT2'],
    'GK-3-1': ['GK1', 'DEF1', 'DEF2', 'DEF3', 'ATT1'],
    'GK-2-2': ['GK1', 'DEF1', 'DEF2', 'ATT1', 'ATT2'],
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
      GK1: { left: '50%', top: '87%' },
    },
    'GK-1-2-1': {
      ATT1: { left: '50%', top: '12%' },
      MID1: { left: '30%', top: '42%' },
      MID2: { left: '70%', top: '42%' },
      DEF1: { left: '50%', top: '65%' },
      GK1: { left: '50%', top: '87%' },
    },
    'GK-1-1-2': {
      ATT1: { left: '30%', top: '15%' },
      ATT2: { left: '70%', top: '15%' },
      MID1: { left: '50%', top: '42%' },
      DEF1: { left: '50%', top: '65%' },
      GK1: { left: '50%', top: '87%' },
    },
    'GK-3-1': {
      ATT1: { left: '50%', top: '15%' },
      DEF1: { left: '22%', top: '58%' },
      DEF2: { left: '50%', top: '58%' },
      DEF3: { left: '78%', top: '58%' },
      GK1: { left: '50%', top: '87%' },
    },
    'GK-2-2': {
      ATT1: { left: '30%', top: '18%' },
      ATT2: { left: '70%', top: '18%' },
      DEF1: { left: '30%', top: '62%' },
      DEF2: { left: '70%', top: '62%' },
      GK1: { left: '50%', top: '87%' },
    },
  };

  const currentFormation = formation as Formation;

  const getSlotPosition = (slot: string): Position => {
    if (slot.startsWith('GK')) return 'GK';
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

  if (!player) {
    alert('Drop the card on a selected player');
    return;
  }

  

  if (card.appliesTo === 'TEAM') {
    alert('This card is for the whole team, not one player');
    return;
  }

  const alreadyPlayed = playedCards.some(
    (played) => played.card.id === card.id
  );

  if (alreadyPlayed) {
    alert('This card was already played');
    return;
  }

  setPlayedCards([
    ...playedCards,
    {
      card,
      playerName: player.name,
      slot,
    },
  ]);
};

  const removePlayedCard = (cardId: number) => {
  const playedCard = playedCards.find((played) => played.card.id === cardId);

  if (!playedCard) return;

  const removePlayedCard = (cardId: number) => {
  setPlayedCards(playedCards.filter((played) => played.card.id !== cardId));
};

  setPlayedCards(playedCards.filter((played) => played.card.id !== cardId));
};

  const playTeamCard = (card: ActionCard) => {
    const alreadyPlayed = playedCards.some((played) => played.card.id === card.id);
    
    if (alreadyPlayed) {
      alert('This card was already played');
      return;
    }

    setPlayedCards([
      ...playedCards,
      {
        card,
        playerName: 'Whole Team',
        slot: 'TEAM',
      },
    ]);
  };
  
  const isCardPlayed = (cardId: number) => {
    return playedCards.some((played) => played.card.id === cardId);
  };

  const getCardPlayedOnSlot = (slot: string) => {
    return playedCards.filter((played) => played.slot === slot);
  };

  const renderPlayer = (slot: string, player: Player) => {
    const cardsOnThisPlayer = getCardPlayedOnSlot(slot);

    return (
      <div style={styles.selectedPlayerContainer}>
        {player.image && (
          <img src={player.image} alt={player.name} style={styles.selectedPlayerImage} />
        )}

        <span style={styles.selectedPlayerName}>{player.name}</span>

        {cardsOnThisPlayer.length > 0 && (
          <span style={styles.cardBadge}>
            {cardsOnThisPlayer.length} card
          </span>
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {!cardsSaved ? (
        <>
          <h2 style={styles.title}>Choose your cards</h2>

          <p style={styles.subtitle}>
            You got 7 cards. Choose 5 cards to play this match.
          </p>

          <p style={styles.counter}>{selectedCards.length}/5 selected</p>

          <div style={styles.cardRow}>
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
                >
                  <strong>{card.name}</strong>
                  <p>{card.description}</p>
                  <small>
                    {card.appliesTo === 'TEAM' ? 'Team' : 'Player'} |{' '}
                    {card.timing === 'BEFORE_MATCH' ? 'Before' : 'During'}
                  </small>
                </div>
              );
            })}
          </div>

          <button style={styles.saveButton} onClick={saveCards}>
            Save Cards
          </button>
        </>
      ) : (
        <>
          <div style={styles.previewHeader}>
            <h2 style={styles.title}>Match Preview</h2>

            <button style={styles.editButton} onClick={editCards}>
              Edit Cards
            </button>
          </div>

          <p style={styles.subtitle}>
            Drag player cards onto a player. Click team cards to play them.
          </p>

          <div style={styles.pitch}>
            <div style={styles.centerCircle}></div>
            <div style={styles.halfwayLine}></div>

            {formations[currentFormation].map((slot) => (
              <div
                key={slot}
                style={{
                  ...styles.slot,
                  ...slotPositions[currentFormation][slot],
                }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleCardDropOnPlayer(e, slot)}
              >
                {selectedPlayers[slot]
                  ? renderPlayer(slot, selectedPlayers[slot]!)
                  : getSlotPosition(slot)}
              </div>
            ))}
          </div>

          <h3 style={styles.sectionTitle}>Your Cards</h3>

          <div style={styles.selectedCardRow}>
            {selectedCards.map((card) => {
              const played = isCardPlayed(card.id);

              return (
                <div
                  key={card.id}
                  draggable={!played && card.appliesTo === 'ONE_PLAYER'}
                  onDragStart={(e) =>
                    e.dataTransfer.setData('card', JSON.stringify(card))
                  }
                  onClick={() => {
                    if (card.appliesTo === 'TEAM') {
                      playTeamCard(card);
                    }
                  }}
                  style={{
                    ...styles.smallCard,
                    ...(played ? styles.playedCard : {}),
                    cursor:
                      card.appliesTo === 'TEAM'
                        ? 'pointer'
                        : played
                        ? 'not-allowed'
                        : 'grab',
                  }}
                >
                  <strong>{card.name}</strong>
                  <small>{card.appliesTo === 'TEAM' ? 'Team card' : 'Player card'}</small>

                  {played && (
  <>
    <span style={styles.playedText}>
      Played on:{' '}
      {
        playedCards.find((playedCard) => playedCard.card.id === card.id)
          ?.playerName
      }
    </span>

    <button
      style={styles.removeCardButton}
      onClick={(e) => {
        e.stopPropagation();
        removePlayedCard(card.id);
      }}
    >
      Change
    </button>
  </>
)}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#fff',
    borderRadius: '30px',
    padding: '20px',
  },

  title: {
    margin: 0,
    fontSize: '22px',
  },

  subtitle: {
    fontSize: '13px',
    color: '#777',
  },

  counter: {
    fontWeight: '700',
  },

  cardRow: {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    paddingBottom: '10px',
  },

  card: {
    minWidth: '135px',
    minHeight: '145px',
    borderRadius: '16px',
    padding: '12px',
    backgroundColor: '#f7f7f7',
    border: '1px solid #ddd',
    cursor: 'pointer',
    fontSize: '11px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  removeCardButton: {
  border: 'none',
  borderRadius: '8px',
  padding: '4px 6px',
  fontSize: '10px',
  fontWeight: '700',
  cursor: 'pointer',
  backgroundColor: '#ddd',
},

  cardSelected: {
    border: '3px solid #E32219',
    backgroundColor: '#fdecea',
  },

  saveButton: {
    width: '100%',
    padding: '12px',
    borderRadius: '14px',
    border: 'none',
    backgroundColor: '#E32219',
    color: '#fff',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '14px',
  },

  previewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '14px',
  },

  editButton: {
    padding: '8px 10px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#ddd',
    fontWeight: '700',
    cursor: 'pointer',
  },

  pitch: {
    position: 'relative',
    height: '390px',
    borderRadius: '20px',
    overflow: 'hidden',
    background:
      'linear-gradient(90deg, #168a3a 0%, #168a3a 50%, #0f7a32 50%, #0f7a32 100%)',
    border: '3px solid white',
  },

  halfwayLine: {
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '100%',
    height: '2px',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },

  centerCircle: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '90px',
    height: '90px',
    border: '2px solid rgba(255,255,255,0.6)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
  },

  slot: {
    position: 'absolute',
    width: '86px',
    height: '100px',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontWeight: '700',
    fontSize: '11px',
    textAlign: 'center',
  },

  selectedPlayerContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedPlayerImage: {
    width: '54px',
    height: '54px',
    objectFit: 'contain',
  },

  selectedPlayerName: {
    marginTop: '2px',
    fontSize: '10px',
    fontWeight: '700',
    backgroundColor: '#E32219',
    color: '#fff',
    padding: '2px 6px',
    borderRadius: '8px',
    whiteSpace: 'nowrap',
  },

  cardBadge: {
    marginTop: '2px',
    fontSize: '9px',
    backgroundColor: '#fff',
    color: '#E32219',
    borderRadius: '8px',
    padding: '1px 5px',
    fontWeight: '700',
  },

  sectionTitle: {
    margin: '16px 0 10px',
  },

  selectedCardRow: {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
  },

  smallCard: {
    minWidth: '120px',
    minHeight: '90px',
    borderRadius: '14px',
    padding: '10px',
    backgroundColor: '#f7f7f7',
    border: '1px solid #ddd',
    fontSize: '11px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flexShrink: 0,
  },

  playedCard: {
    opacity: 0.65,
    backgroundColor: '#eee',
  },

  playedText: {
    fontSize: '10px',
    color: '#E32219',
    fontWeight: '700',
  },
};

export default MatchTab;
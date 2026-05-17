import React from 'react';
import { teams, Player, Position } from './data/teams';

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
  selectedPlayers: {
    [slotId: string]: Player | null;
  };
  setSelectedPlayers: React.Dispatch<
    React.SetStateAction<{
      [slotId: string]: Player | null;
    }>
  >;
  formation: string;
  setFormation: React.Dispatch<React.SetStateAction<string>>;
};

function TeamBuilder({
  favoriteTeam,
  selectedPlayers,
  setSelectedPlayers,
  formation,
  setFormation,
}: Props) {
  const selectedTeam =
    teams.find((team) => team.name === favoriteTeam) || teams[0];

  const players = selectedTeam.players;

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

  const selectedPlayerIds = Object.values(selectedPlayers)
    .filter(Boolean)
    .map((player) => player!.id);

  const availablePlayers = players.filter(
    (player) => !selectedPlayerIds.includes(player.id)
  );

  const getPlayersByPosition = (position: Position) => {
    return availablePlayers.filter((player) => player.position === position);
  };

  const handleDrop = (e: React.DragEvent, slot: string) => {
    const player = JSON.parse(e.dataTransfer.getData('player')) as Player;
    const neededPosition = getSlotPosition(slot);

    if (player.position !== neededPosition) {
      alert(`You need a ${neededPosition} player here`);
      return;
    }

    setSelectedPlayers((prev) => ({
      ...prev,
      [slot]: player,
    }));
  };

  const handleRemovePlayer = (slot: string) => {
    setSelectedPlayers((prev) => ({
      ...prev,
      [slot]: null,
    }));
  };

  const handleFormationChange = (newFormation: Formation) => {
    const newSlots = formations[newFormation];

    const keptPlayers: { [slotId: string]: Player | null } = {};
    const usedPlayerIds: number[] = [];

    Object.values(selectedPlayers).forEach((player) => {
      if (!player || usedPlayerIds.includes(player.id)) return;

      const freeSlot = newSlots.find(
        (slot) =>
          getSlotPosition(slot) === player.position && !keptPlayers[slot]
      );

      if (freeSlot) {
        keptPlayers[freeSlot] = player;
        usedPlayerIds.push(player.id);
      }
    });

    setFormation(newFormation);
    setSelectedPlayers(keptPlayers);
  };

  const saveTeam = () => {
    const selectedCount = Object.values(selectedPlayers).filter(Boolean).length;

    if (selectedCount < 5) {
      alert('Please choose 5 players first');
      return;
    }

    alert('Team saved!');
  };

  const renderPlayerCard = (player: Player) => (
    <div
      key={player.id}
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData('player', JSON.stringify(player))
      }
      style={styles.playerCard}
    >
      {player.image && (
        <img src={player.image} alt={player.name} style={styles.playerImage} />
      )}

      <strong>{player.name}</strong>
      <span>{player.position}</span>
    </div>
  );

  const renderSelectedPlayer = (player: Player) => (
    <div style={styles.selectedPlayerContainer}>
      {player.image && (
        <img
          src={player.image}
          alt={player.name}
          style={styles.selectedPlayerImage}
        />
      )}

      <span
        style={{
          ...styles.selectedPlayerName,
          backgroundColor: selectedTeam.primaryColor,
          color: selectedTeam.secondaryColor,
        }}
      >
        {player.name}
      </span>
    </div>
  );

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.header,
          background: `linear-gradient(135deg, ${selectedTeam.primaryColor}, #111)`,
        }}
      >
        <img src={selectedTeam.logo} alt={selectedTeam.name} style={styles.logo} />

        <div>
          <h1 style={styles.title}>Choose your team</h1>
          <p style={styles.teamName}>{selectedTeam.name}</p>
        </div>
      </div>

      <select
        value={formation}
        onChange={(e) => handleFormationChange(e.target.value as Formation)}
        style={styles.select}
      >
        <option value="2-2-1">2-2-1</option>
        <option value="1-2-2">1-2-2</option>
        <option value="2-1-2">2-1-2</option>
        <option value="1-3-1">1-3-1</option>
        <option value="3-1-1">3-1-1</option>
        <option value="GK-2-1-1">GK + 2-1-1</option>
        <option value="GK-1-2-1">GK + 1-2-1</option>
        <option value="GK-1-1-2">GK + 1-1-2</option>
        <option value="GK-3-1">GK + 3-1</option>
        <option value="GK-2-2">GK + 2-2</option>
      </select>

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
            onDrop={(e) => handleDrop(e, slot)}
            onDoubleClick={() => handleRemovePlayer(slot)}
          >
            {selectedPlayers[slot]
              ? renderSelectedPlayer(selectedPlayers[slot]!)
              : getSlotPosition(slot)}
          </div>
        ))}
      </div>

      <p style={styles.helperText}>
        Double click a selected player to remove him.
      </p>

      <button
        onClick={saveTeam}
        style={{
          ...styles.saveButton,
          backgroundColor: selectedTeam.primaryColor,
          color: selectedTeam.secondaryColor,
        }}
      >
        Save Team
      </button>

      <div style={styles.allPlayersRow}>
        <div
          style={{
            ...styles.positionDivider,
            backgroundColor: selectedTeam.primaryColor,
            color: selectedTeam.secondaryColor,
          }}
        >
          GK
        </div>
        {getPlayersByPosition('GK').map(renderPlayerCard)}

        <div
          style={{
            ...styles.positionDivider,
            backgroundColor: selectedTeam.primaryColor,
            color: selectedTeam.secondaryColor,
          }}
        >
          DEF
        </div>
        {getPlayersByPosition('DEF').map(renderPlayerCard)}

        <div
          style={{
            ...styles.positionDivider,
            backgroundColor: selectedTeam.primaryColor,
            color: selectedTeam.secondaryColor,
          }}
        >
          MID
        </div>
        {getPlayersByPosition('MID').map(renderPlayerCard)}

        <div
          style={{
            ...styles.positionDivider,
            backgroundColor: selectedTeam.primaryColor,
            color: selectedTeam.secondaryColor,
          }}
        >
          ATT
        </div>
        {getPlayersByPosition('ATT').map(renderPlayerCard)}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#fff',
    borderRadius: '30px',
    padding: '22px',
    boxSizing: 'border-box',
    overflowY: 'auto',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px',
    borderRadius: '22px',
  },

  logo: {
    width: '54px',
    height: '54px',
    objectFit: 'contain',
  },

  title: {
    fontSize: '22px',
    margin: 0,
    color: '#fff',
  },

  teamName: {
    fontSize: '13px',
    color: '#fff',
    margin: '4px 0 0',
    fontWeight: '600',
  },

  select: {
    width: '100%',
    padding: '12px',
    margin: '16px 0',
    borderRadius: '12px',
    border: '1px solid #ddd',
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
    height: '90px',
    backgroundColor: 'transparent',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '11px',
    textAlign: 'center',
    padding: '0',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    color: '#fff',
    fontWeight: '700',
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
    width: '58px',
    height: '58px',
    objectFit: 'contain',
  },

  selectedPlayerName: {
    marginTop: '2px',
    fontSize: '10px',
    fontWeight: '700',
    padding: '2px 6px',
    borderRadius: '8px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  helperText: {
    fontSize: '11px',
    color: '#777',
    margin: '8px 0 10px',
    textAlign: 'center',
  },

  saveButton: {
    width: '100%',
    padding: '12px',
    borderRadius: '14px',
    border: 'none',
    fontWeight: '700',
    cursor: 'pointer',
    marginBottom: '14px',
  },

  allPlayersRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    overflowX: 'auto',
    paddingBottom: '10px',
    alignItems: 'center',
  },

  positionDivider: {
    minWidth: '60px',
    height: '70px',
    borderRadius: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    flexShrink: 0,
  },

  playerCard: {
    minWidth: '115px',
    height: '90px',
    padding: '8px',
    borderRadius: '14px',
    backgroundColor: '#f5f5f5',
    cursor: 'grab',
    fontSize: '12px',
    textAlign: 'center',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },

  playerImage: {
    width: '45px',
    height: '45px',
    objectFit: 'contain',
    margin: '0 auto',
  },
};

export default TeamBuilder;
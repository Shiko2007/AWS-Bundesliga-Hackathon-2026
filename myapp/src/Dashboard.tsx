import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TeamBuilder from './TeamBuilder';
import MatchTab from './MatchTab';
import { ActionCard, allCards } from './data/cards';
import { Player } from './data/teams';

function Dashboard() {
  const location = useLocation();

  const favoriteTeam =
    location.state?.favoriteTeam ||
    localStorage.getItem('team') ||
    'Bayern Munich';

  const [activeTab, setActiveTab] = useState('builder');

  const [savedPlayers, setSavedPlayers] = useState<{
    [slotId: string]: Player | null;
  }>({});

  const [savedFormation, setSavedFormation] = useState('2-2-1');
  const [cardsSaved, setCardsSaved] = useState(false);
  const [selectedCards, setSelectedCards] = useState<ActionCard[]>([]);

  const randomCards = useMemo(() => {
    return [...allCards]
      .sort(() => Math.random() - 0.5)
      .slice(0, 7);
  }, []);

  return (
    <div style={styles.screen}>
      <div style={styles.phone}>
        <div style={styles.tabs}>
            <button
            style={{
                ...styles.tabButton,
                ...(activeTab === 'builder' ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab('builder')}
            >
            Team
            </button>

            <button
            style={{
                ...styles.tabButton,
                ...(activeTab === 'match' ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab('match')}
            >
            Match
            </button>

            <button
            style={{
                ...styles.tabButton,
                ...(activeTab === 'leaderboard' ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab('leaderboard')}
            >
            Leaderboard
            </button>
        </div>

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
            />
            )}

            {activeTab === 'leaderboard' && (
            <div style={styles.placeholder}>
                <h2>Leaderboard</h2>
                <p>Coming soon...</p>
            </div>
            )}
        </div>
        </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  screen: {
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },

  phone: {
    width: '390px',
    height: '760px',
    backgroundColor: '#fff',
    borderRadius: '40px',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },

  tabs: {
    display: 'flex',
    gap: '10px',
    marginBottom: '14px',
    flexShrink: 0,
  },
  content: {
    flex: 1,
    overflowY: 'auto',
  },

  tabButton: {
    flex: 1,
    padding: '12px',
    borderRadius: '14px',
    border: 'none',
    backgroundColor: '#ddd',
    cursor: 'pointer',
    fontWeight: '700',
  },

  activeTab: {
    backgroundColor: '#E32219',
    color: '#fff',
  },

  placeholder: {
    backgroundColor: '#fff',
    borderRadius: '30px',
    padding: '40px',
    textAlign: 'center',
  },
};

export default Dashboard;
export {};
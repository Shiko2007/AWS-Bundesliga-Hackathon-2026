import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TeamBuilder from './TeamBuilder';
import MatchTab from './MatchTab';
import { ActionCard, allCards } from './data/cards';
import { Player } from './data/teams';
import Leaderboard from './Leaderboard';
import Dock from './Dock';
 
type Tab = 'builder' | 'match' | 'leaderboard';
 
// Simple SVG icons — no extra icon library needed
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
 
function Dashboard() {
  const location = useLocation();
 
  const favoriteTeam =
    location.state?.favoriteTeam ||
    localStorage.getItem('team') ||
    'Bayern Munich';
 
  const [activeTab, setActiveTab] = useState<Tab>('builder');
 
  const [savedPlayers, setSavedPlayers] = useState<{ [slotId: string]: Player | null }>({});
  const [savedFormation, setSavedFormation] = useState('2-2-1');
  const [cardsSaved, setCardsSaved] = useState(false);
  const [selectedCards, setSelectedCards] = useState<ActionCard[]>([]);
 
  const randomCards = useMemo(() => {
    return [...allCards].sort(() => Math.random() - 0.5).slice(0, 10); // number of cards xddd
  }, []);
 
  const dockItems = [
    {
      icon: <TeamIcon />,
      label: 'Team',
      onClick: () => setActiveTab('builder'),
      className: activeTab === 'builder' ? 'dock-item-active' : '',
    },
    {
      icon: <MatchIcon />,
      label: 'Match',
      onClick: () => setActiveTab('match'),
      className: activeTab === 'match' ? 'dock-item-active' : '',
    },
    {
      icon: <LeaderboardIcon />,
      label: 'Leaderboard',
      onClick: () => setActiveTab('leaderboard'),
      className: activeTab === 'leaderboard' ? 'dock-item-active' : '',
    },
  ];
 
  return (
    <div style={styles.screen}>
      <div style={styles.phone}>
 
        {/* Content */}
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
          {activeTab === 'leaderboard' && <Leaderboard />}
        </div>
 
        {/* Dock — sits at the bottom inside the phone frame */}
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
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
 
  phone: {
    width: '350px',
    height: '760px',
    backgroundColor: '#fff',
    borderRadius: '40px',
    boxSizing: 'border-box',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative',
  },
 
  content: {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
 
  dockWrapper: {
    position: 'relative',
    height: '80px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0b0b0b',
  },
};
 
export default Dashboard;
export {};
 
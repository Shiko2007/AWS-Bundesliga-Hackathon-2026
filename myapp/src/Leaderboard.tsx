import React, { useEffect, useState } from 'react';
import grainTexture from './assets/images/grain.png';
import leaderboardBg from './assets/images/leaderboard-bg.jpg';

type Category = 'worldwide' | 'team';

type LeaderboardEntry = {
  Email: string;
  Team: string;
  Points: number;
  GamePoints: number;
};

const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32', '#aaaaaa'];

function Leaderboard() {
  const [activeCategory, setActiveCategory] = useState<Category>('worldwide');
  const [loading, setLoading] = useState(true);

  const [globalTop3, setGlobalTop3] = useState<LeaderboardEntry[]>([]);
  const [teamTop3, setTeamTop3] = useState<LeaderboardEntry[]>([]);

  const [globalUserRank, setGlobalUserRank] = useState<number | null>(null);
  const [teamUserRank, setTeamUserRank] = useState<number | null>(null);

  const [globalUserEntry, setGlobalUserEntry] =
    useState<LeaderboardEntry | null>(null);
  const [teamUserEntry, setTeamUserEntry] =
    useState<LeaderboardEntry | null>(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const email = localStorage.getItem('email') || '';
        const team = localStorage.getItem('team') || '';

        const response = await fetch(
  'https://20trt2erj1.execute-api.eu-central-1.amazonaws.com/Development/api/LeaderBoard',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      team,
    }),
  }
);

        const data = await response.json();
      console.log('Leaderboard data:', data);
        if (data.success) {
          setGlobalTop3(data.globalTop3 || []);
          setTeamTop3(data.teamTop3 || []);
          setGlobalUserRank(data.globalUserRank || null);
          setTeamUserRank(data.teamUserRank || null);
          setGlobalUserEntry(data.globalUserEntry || null);
          setTeamUserEntry(data.teamUserEntry || null);
        }
      } catch (error) {
        console.error('Leaderboard error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  const entries: LeaderboardEntry[] =
    activeCategory === 'worldwide'
      ? [
          ...globalTop3,
          ...(globalUserEntry &&
          !globalTop3.some((user) => user.Email === globalUserEntry.Email)
            ? [globalUserEntry]
            : []),
        ]
      : [
          ...teamTop3,
          ...(teamUserEntry &&
          !teamTop3.some((user) => user.Email === teamUserEntry.Email)
            ? [teamUserEntry]
            : []),
        ];

  const getDisplayedRank = (entry: LeaderboardEntry, index: number) => {
    if (
      activeCategory === 'worldwide' &&
      globalUserEntry &&
      entry.Email === globalUserEntry.Email
    ) {
      return globalUserRank || index + 1;
    }

    if (
      activeCategory === 'team' &&
      teamUserEntry &&
      entry.Email === teamUserEntry.Email
    ) {
      return teamUserRank || index + 1;
    }

    return index + 1;
  };

  const isCurrentUser = (entry: LeaderboardEntry) => {
    const currentEmail = localStorage.getItem('email');
    return entry.Email === currentEmail;
  };

  if (loading) {
    return (
      <div
        style={{
          ...styles.wrapper,
          backgroundImage: `url(${leaderboardBg})`,
          color: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Loading leaderboard...
      </div>
    );
  }

  return (
    <div
      style={{
        ...styles.wrapper,
        backgroundImage: `url(${leaderboardBg})`,
      }}
    >
      <div style={{ ...styles.grain, backgroundImage: `url(${grainTexture})` }} />

      <div style={styles.titleBlock}>
        <h2 style={styles.title}>LEADERBOARDS</h2>
        <div style={styles.titleUnderline} />
      </div>

      <div style={styles.polaroidRow}>
        <div style={styles.polaroid}>
          <div style={styles.polaroidInner}>
            <span style={styles.polaroidLabel}>YOUR POINTS</span>
            <span style={styles.polaroidPoints}>
              {(globalUserEntry?.Points || 0).toLocaleString()}
            </span>
          </div>
        </div>

        <div style={styles.polaroid}>
          <div style={styles.polaroidInner}>
            <span style={styles.polaroidLabel}>GAME POINTS</span>
            <span style={styles.polaroidPoints}>
              {(globalUserEntry?.GamePoints || 0).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <nav style={styles.nav}>
        {(['worldwide', 'team'] as Category[]).map((cat) => (
          <button
            key={cat}
            style={{
              ...styles.categoryBtn,
              ...(activeCategory === cat ? styles.categoryBtnActive : {}),
            }}
            onClick={() => setActiveCategory(cat)}
          >
            <span style={styles.categoryLabel}>
              {cat === 'worldwide' ? 'WORLDWIDE' : 'MY TEAM'}
            </span>

            <div style={styles.categoryRight}>
              <span style={styles.rankLabel}>RANK</span>
              <span style={styles.rankValue}>
                {cat === 'worldwide'
                  ? `#${globalUserRank || '-'}`
                  : `#${teamUserRank || '-'}`}
              </span>
            </div>
          </button>
        ))}
      </nav>

      <div style={styles.listWrapper}>
        {entries.map((entry, i) => {
          const displayedRank = getDisplayedRank(entry, i);
          const colorIndex = Math.min(displayedRank - 1, 3);
          const isTop4 = displayedRank <= 4;
          const currentUser = isCurrentUser(entry);

          return (
            <div
              key={`${entry.Email}-${i}`}
              style={{
                ...styles.listRow,
                ...(currentUser ? styles.listRowHighlight : {}),
              }}
            >
              <span
                style={{
                  ...styles.listRank,
                  color: isTop4 ? medalColors[colorIndex] : '#ffb4aa',
                }}
              >
                #{displayedRank.toLocaleString()}
              </span>

              <span
                style={{
                  ...styles.listName,
                  ...(currentUser ? styles.listNameHighlight : {}),
                }}
              >
                {currentUser ? 'You' : entry.Email}
              </span>

              <span style={styles.listPoints}>
                {entry.Points.toLocaleString()}
                <span style={styles.listPtsSuffix}> pts</span>
              </span>
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
    gap: '10px',
    backgroundColor: '#0a0a0a',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '16px',
    height: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  },

  grain: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 9999,
    opacity: 0.06,
    backgroundRepeat: 'repeat',
  },

  titleBlock: {
    flexShrink: 0,
    marginTop: '18px',
  },

  title: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '28px',
    lineHeight: 1,
    letterSpacing: '0.02em',
    color: '#e2e2e2',
    margin: 0,
    fontWeight: 400,
  },

  titleUnderline: {
    height: '3px',
    width: '56px',
    backgroundColor: '#d7040f',
    marginTop: '3px',
  },

  polaroidRow: {
    display: 'flex',
    gap: '8px',
    flexShrink: 0,
  },

  polaroid: {
    flex: 1,
    background: '#e2e2e2',
    padding: '10px 4px 12px 8px',
    boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
    border: '1px solid rgba(0,0,0,0.1)',
  },

  polaroidInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 0 2px',
  },

  polaroidLabel: {
    fontFamily: "'Lexend', sans-serif",
    fontWeight: 700,
    fontSize: '10px',
    letterSpacing: '0.1em',
    color: '#121414',
    textTransform: 'uppercase',
  },

  polaroidPoints: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '40px',
    color: '#121414',
    lineHeight: 1,
    letterSpacing: '0.02em',
  },

  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    flexShrink: 0,
  },

  categoryBtn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px',
    backgroundColor: 'rgba(30,30,30,0.75)',
    backdropFilter: 'blur(4px)',
    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'border-color 0.2s, transform 0.1s',
    width: '100%',
    boxSizing: 'border-box',
  },

  categoryBtnActive: {
    borderColor: '#ffb4aa',
  },

  categoryLabel: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '18px',
    letterSpacing: '0.05em',
    color: '#e2e2e2',
    lineHeight: 1.2,
  },

  categoryRight: {
    textAlign: 'right',
  },

  rankLabel: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '9px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    color: '#888',
    textTransform: 'uppercase',
    display: 'block',
    lineHeight: 1.2,
  },

  rankValue: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '18px',
    color: '#ffb4aa',
    letterSpacing: '0.05em',
    lineHeight: 1.2,
    display: 'block',
  },

  listWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    flex: 1,
    minHeight: 0,
  },

  listRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    backgroundColor: 'rgba(20,20,20,0.7)',
    backdropFilter: 'blur(4px)',
    gap: '8px',
    flex: 1,
    minHeight: '42px',
  },

  listRowHighlight: {
    backgroundColor: 'rgba(74,4,4,0.85)',
    borderLeft: '3px solid #d7040f',
  },

  listRank: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '15px',
    minWidth: '46px',
    letterSpacing: '0.05em',
  },

  listName: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '11px',
    fontWeight: 700,
    color: '#e2e2e2',
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  listNameHighlight: {
    color: '#ffb4aa',
  },

  listPoints: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '14px',
    color: '#e2e2e2',
    letterSpacing: '0.03em',
  },

  listPtsSuffix: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '9px',
    fontWeight: 400,
    color: '#888',
  },
};

export default Leaderboard;
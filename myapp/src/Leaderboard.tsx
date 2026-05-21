import React, { useState } from 'react';
import grainTexture from './assets/images/grain.png';
import leaderboardBg from './assets/images/leaderboard-bg.jpg';

type Category = 'worldwide' | 'team';

const categoryData: Record<Category, { rank: number; name: string; points: number; isCurrentUser?: boolean }[]> = {
  worldwide: [
    { rank: 1,    name: 'Müller_Fan99', points: 18200 },
    { rank: 2,    name: 'BVBlegend',    points: 17850 },
    { rank: 3,    name: 'LevyKing',     points: 16400 },
    { rank: 4,    name: 'KaiserFranz',  points: 14900 },
    { rank: 1250, name: 'You',          points: 12450, isCurrentUser: true },
  ],
  team: [
    { rank: 1, name: 'FC_Max',        points: 15300 },
    { rank: 2, name: 'AllianzArena1', points: 14900 },
    { rank: 3, name: 'MiaSanMia',     points: 14100 },
    { rank: 4, name: 'BavarianKing',  points: 13200 },
    { rank: 5, name: 'You',           points: 12450, isCurrentUser: true },
  ],
};

const categoryRanks: Record<Category, string> = {
  worldwide: '#1,250',
  team: '#5',
};

const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32', '#aaaaaa'];

const weeklyPoints = 1340;

function Leaderboard() {
  const [activeCategory, setActiveCategory] = useState<Category>('worldwide');
  const entries = categoryData[activeCategory];

  return (
    <div style={{
      ...styles.wrapper,
      backgroundImage: `url(${leaderboardBg})`,
    }}>
      {/* Grain overlay */}
      <div style={{ ...styles.grain, backgroundImage: `url(${grainTexture})` }} />

      {/* Title */}
      <div style={styles.titleBlock}>
        <h2 style={styles.title}>LEADERBOARDS</h2>
        <div style={styles.titleUnderline} />
      </div>

      {/* Polaroids row */}
      <div style={styles.polaroidRow}>
        {/* Total points */}
        <div style={styles.polaroid}>
          <div style={styles.polaroidInner}>
            <span style={styles.polaroidLabel}>YOUR POINTS</span>
            <span style={styles.polaroidPoints}>12,450</span>
          </div>
        </div>

        {/* Weekly points */}
        <div style={styles.polaroid}>
          <div style={styles.polaroidInner}>
            <span style={styles.polaroidLabel}>WEEKLY POINTS</span>
            <span style={styles.polaroidPoints}>{weeklyPoints.toLocaleString()}</span>
            <span style={styles.polaroidDelta}>
            </span>
          </div>
        </div>
      </div>

      {/* Category buttons */}
      <nav style={styles.nav}>
        {(['worldwide', 'team'] as Category[]).map((cat) => (
          <button
            key={cat}
            style={{
              ...styles.categoryBtn,
              ...(activeCategory === cat ? styles.categoryBtnActive : {}),
            }}
            onMouseEnter={(e) => { if (activeCategory !== cat) e.currentTarget.style.borderColor = '#ffb4aa'; }}
            onMouseLeave={(e) => { if (activeCategory !== cat) e.currentTarget.style.borderColor = 'transparent'; }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => setActiveCategory(cat)}
          >
            <span style={styles.categoryLabel}>{cat.toUpperCase()}</span>
            <div style={styles.categoryRight}>
              <span style={styles.rankLabel}>RANK</span>
              <span style={styles.rankValue}>{categoryRanks[cat]}</span>
            </div>
          </button>
        ))}
      </nav>

      {/* Leaderboard rows */}
      <div style={styles.listWrapper}>
        {entries.map((entry, i) => {
          const colorIndex = Math.min(entry.rank - 1, 3);
          const isTop4 = entry.rank <= 4;
          return (
            <div
              key={i}
              style={{
                ...styles.listRow,
                ...(entry.isCurrentUser ? styles.listRowHighlight : {}),
              }}
            >
              <span style={{
                ...styles.listRank,
                color: isTop4 ? medalColors[colorIndex] : '#ffb4aa',
              }}>
                #{entry.rank.toLocaleString()}
              </span>
              <span style={{
                ...styles.listName,
                ...(entry.isCurrentUser ? styles.listNameHighlight : {}),
              }}>
                {entry.name}
              </span>
              <span style={styles.listPoints}>
                {entry.points.toLocaleString()}
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
    top: 0, left: 0,
    width: '100%', height: '100%',
    pointerEvents: 'none',
    zIndex: 9999,
    opacity: 0.06,
    backgroundRepeat: 'repeat',
  },

  // ── Title ─────────────────────────────────────
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

  // ── Polaroids ─────────────────────────────────
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
    flexDirection: 'column' as const,
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
    textTransform: 'uppercase' as const,
  },

  polaroidPoints: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '40px',
    color: '#121414',
    lineHeight: 1,
    letterSpacing: '0.02em',
  },

  polaroidDelta: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '9px',
    fontWeight: 400,
    color: '#555',
    marginTop: '2px',
  },

  // ── Nav ───────────────────────────────────────
  nav: {
    display: 'flex',
    flexDirection: 'column' as const,
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
    boxSizing: 'border-box' as const,
  },

  categoryBtnActive: { borderColor: '#ffb4aa' },

  categoryLabel: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '18px',
    letterSpacing: '0.05em',
    color: '#e2e2e2',
    lineHeight: 1.2,
  },

  categoryRight: { textAlign: 'right' as const },

  rankLabel: {
    fontFamily: "'Lexend', sans-serif",
    fontSize: '9px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    color: '#888',
    textTransform: 'uppercase' as const,
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

  // ── Rows ──────────────────────────────────────
  listWrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
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
    minHeight: 0,
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
  },

  listNameHighlight: { color: '#ffb4aa' },

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
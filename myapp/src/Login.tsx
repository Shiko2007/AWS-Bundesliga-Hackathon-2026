import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bicycleKick from './assets/images/bicycle-kick.png';
import grainTexture from './assets/images/grain.png';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogin() {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        'https://20trt2erj1.execute-api.eu-central-1.amazonaws.com/Development/api/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (data.success) {
        console.log('Logged in!', data);

        localStorage.setItem('userId', data.userId);
        localStorage.setItem('team', data.team);
        localStorage.setItem('email', data.email);
        localStorage.setItem('token', data.token);
        
        const formationSlots: Record<string, string[]> = {
          '2-2-1':    ['DEF1','DEF2','MID1','MID2','ATT1'],
          '1-2-2':    ['DEF1','MID1','MID2','ATT1','ATT2'],
          '2-1-2':    ['DEF1','DEF2','MID1','ATT1','ATT2'],
          '1-3-1':    ['DEF1','MID1','MID2','MID3','ATT1'],
          '3-1-1':    ['DEF1','DEF2','DEF3','MID1','ATT1'],
          'GK-2-1-1': ['GK1','DEF1','DEF2','MID1','ATT1'],
          'GK-1-2-1': ['GK1','DEF1','MID1','MID2','ATT1'],
          'GK-1-1-2': ['GK1','DEF1','MID1','ATT1','ATT2'],
          'GK-3-1':   ['GK1','DEF1','DEF2','DEF3','ATT1'],
          'GK-2-2':   ['GK1','DEF1','DEF2','ATT1','ATT2'],
        };

        localStorage.setItem('formation', data.formation);
        localStorage.setItem('players', JSON.stringify(data.players));

        // Build and save the slot map so TeamBuilder loads players into the right slots
        const slots = formationSlots[data.formation] ?? [];
        const slotMap: Record<string, number> = {};
        data.players.forEach((id: number, i: number) => {
          if (id != null && id !== 0 && slots[i]) slotMap[slots[i]] = id;
        });
        localStorage.setItem('slotPlayers', JSON.stringify(slotMap));

        console.log('Saved formation:', data.formation);
        console.log('Saved players:', data.players);

        navigate('/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Could not connect to server');
    } finally {
      setLoading(false);
    }
  }

  return (
    // Outer screen — plain white
    <div style={styles.screen}>

      {/* Phone frame — dark theme inside */}
      <div style={styles.phone}>

        {/* Grain overlay — inside phone only */}
        <div style={styles.grain} />

        {/* Top app bar */}
        <header style={styles.header}>
          <div style={styles.headerInner}>
            <span style={styles.headerIcon}></span>
            <h1 style={styles.headerTitle}>THE PITCH</h1>
          </div>
        </header>

        <main style={styles.main}>
          {/* Polaroid card */}
          <div style={styles.polaroid}>
            <div style={styles.polaroidImageWrapper}>
              <img
                src={bicycleKick}
                alt="Bicycle kick silhouette"
                style={styles.polaroidImage}
              />
              <div style={styles.numberTag}>
                <span style={styles.numberTagText}>#09</span>
              </div>
              <div style={styles.filmOverlay} />
            </div>
            <div style={styles.polaroidCaption}>
              <p style={styles.polaroidCaptionLine}>&nbsp;</p>
              <p style={styles.polaroidCaptionSub}>&nbsp;</p>
            </div>
          </div>

          {/* Login form */}
          <div style={styles.formWrapper}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>PLAYER EMAIL</label>
              <input
                type="email"
                placeholder="STRIKER@MAIL.COM"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                style={styles.input}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#d7040f')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#554240')}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>SECURITY CLEARANCE</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                style={styles.input}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#d7040f')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#554240')}
              />
            </div>

            {error && <p style={styles.errorText}>{error}</p>}

            <button
              onClick={handleLogin}
              disabled={loading}
              style={loading ? { ...styles.signInButton, ...styles.signInButtonDisabled } : styles.signInButton}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.backgroundColor = '#d7040f';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#1a1c1c';
                  e.currentTarget.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
                }
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {loading ? 'SIGNING IN...' : 'SIGN IN'}
            </button>

            <div style={styles.divider}>
              <p style={styles.dividerText}>New to the squad?</p>
              <Link to="/signup" style={styles.joinLink}>
                JOIN THE SQUAD
              </Link>
            </div>
          </div>
        </main>

        {/* Phone bottom bar */}
        <div style={styles.phoneBottomBar}>
          <div style={styles.phoneHomeIndicator} />
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {

  // ── Outer screen — plain white ─────────────────
  screen: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Lexend', sans-serif",
    padding: '20px',
  },

  // ── Phone shell — dark inside ──────────────────
  phone: {
    width: '350px',
    minHeight: '760px',
    backgroundColor: '#121414',
    borderRadius: '40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'hidden',
    position: 'relative' as const,
    boxSizing: 'border-box' as const,
  },

  // ── Grain — clipped inside phone ───────────────
  grain: {
    position: 'absolute' as const,
    inset: 0,
    backgroundImage:
      `url(${grainTexture})`,
    opacity: 0.2,
    pointerEvents: 'none' as const,
    zIndex: 0,
  },

  header: {
    width: '100%',
    borderBottom: '1px solid #554240',
    backgroundColor: '#121414',
    padding: '20px 20px 10px',
    boxSizing: 'border-box' as const,
    flexShrink: 0,
    position: 'relative' as const,
    zIndex: 1,
  },

  headerInner: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  headerIcon: {
    fontSize: '24px',
    lineHeight: 1,
  },

  headerTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    color: '#ffb4aa',
    letterSpacing: '0.15em',
    fontSize: '24px',
    margin: 0,
    fontWeight: 400,
  },

  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 24px',
    gap: '16px',
    overflowY: 'auto' as const,
    position: 'relative' as const,
    zIndex: 1,
  },

  // ── Polaroid ───────────────────────────────────
  polaroid: {
    backgroundColor: '#fff',
    padding: '10px',
    paddingBottom: '18px',
    boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
    border: '1px solid rgba(163,139,136,0.2)',
    width: '200px',
    flexShrink: 0,
  },

  polaroidImageWrapper: {
    position: 'relative' as const,
    width: '100%',
    aspectRatio: '4/5',
    overflow: 'hidden',
    backgroundColor: '#0c0f0f',
  },

  polaroidImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
    filter: 'grayscale(50%) contrast(1.25) brightness(0.75)',
  },

  numberTag: {
    position: 'absolute' as const,
    top: '6px',
    right: '6px',
    backgroundColor: '#d7040f',
    padding: '2px 8px',
  },

  numberTagText: {
    fontFamily: "'Bebas Neue', sans-serif",
    color: '#fff',
    fontSize: '14px',
    letterSpacing: '0.15em',
  },

  filmOverlay: {
    position: 'absolute' as const,
    inset: 0,
    opacity: 0.1,
    pointerEvents: 'none' as const,
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
  },

  polaroidCaption: {
    marginTop: '10px',
    padding: '0 2px',
  },

  polaroidCaptionLine: {
    fontFamily: "'Bebas Neue', sans-serif",
    color: '#1a1c1c',
    fontSize: '16px',
    margin: 0,
    lineHeight: 1.2,
  },

  polaroidCaptionSub: {
    color: '#1a1c1c',
    opacity: 0.6,
    fontSize: '9px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    margin: 0,
  },

  // ── Form ───────────────────────────────────────
  formWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },

  fieldGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },

  label: {
    fontFamily: "'Lexend', sans-serif",
    color: '#ffb4aa',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    padding: '0 2px',
  },

  input: {
    width: '100%',
    backgroundColor: '#0c0f0f',
    border: '2px solid #554240',
    color: '#fff',
    fontFamily: "'Lexend', sans-serif",
    fontWeight: 700,
    fontSize: '13px',
    letterSpacing: '0.08em',
    padding: '10px 12px',
    outline: 'none',
    boxSizing: 'border-box' as const,
    transition: 'border-color 0.15s',
  },

  errorText: {
    color: '#ffb4ab',
    fontSize: '12px',
    margin: 0,
    fontWeight: 700,
    letterSpacing: '0.05em',
  },

  signInButton: {
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
    textTransform: 'uppercase' as const,
  },

  signInButtonDisabled: {
    backgroundColor: '#554240',
    color: '#a38b88',
    boxShadow: 'none',
    cursor: 'not-allowed',
  },

  divider: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '8px',
    borderTop: '1px solid #554240',
    paddingTop: '10px',
    paddingBottom: '4px',
  },

  dividerText: {
    fontFamily: "'Lexend', sans-serif",
    color: '#dcc0bd',
    fontSize: '14px',
    margin: 0,
  },

  joinLink: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '24px',
    color: '#ffb4aa',
    textDecoration: 'none',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    transition: 'color 0.15s',
  },

  // ── Phone bottom bar ───────────────────────────
  phoneBottomBar: {
    padding: '12px 0 20px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#121414',
    flexShrink: 0,
    position: 'relative' as const,
    zIndex: 1,
  },

  phoneHomeIndicator: {
    width: '120px',
    height: '4px',
    backgroundColor: '#554240',
    borderRadius: '2px',
  },
};

export default Login;
export {};
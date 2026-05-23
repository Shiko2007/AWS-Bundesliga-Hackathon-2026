import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bayernLogo from './assets/logos/Bayern.png';
import dortmundLogo from './assets/logos/Dortmund.png';
import leverkusenLogo from './assets/logos/Leverkusen.png';
import leipzigLogo from './assets/logos/Leipzig.png';
import frankfurtLogo from './assets/logos/Frankfurt.png';
import stuttgartLogo from './assets/logos/Stuttgart.png';
import freiburgLogo from './assets/logos/Freiburg.png';
import unionLogo from './assets/logos/UnionBerlin.png';
import bremenLogo from './assets/logos/Bremen.png';
import gladbachLogo from './assets/logos/Gladbach.png';
import wolfsburgLogo from './assets/logos/Wolfsburg.png';
import mainzLogo from './assets/logos/Mainz.png';
import augsburgLogo from './assets/logos/Augsberg.png';
import hoffenheimLogo from './assets/logos/Hoffenheim.png';
import heidenheimLogo from './assets/logos/Heidenheim.png';
import stpauliLogo from './assets/logos/St.Pauli.png';
import hsvLogo from './assets/logos/Hamburg.png';
import kolnLogo from './assets/logos/Koln.png';
import grainTexture from './assets/images/grain.png';

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const teams = [
    { name: 'Bayern Munich', logo: bayernLogo },
    { name: 'Borussia Dortmund', logo: dortmundLogo },
    { name: 'Bayer Leverkusen', logo: leverkusenLogo },
    { name: 'RB Leipzig', logo: leipzigLogo },
    { name: 'Eintracht Frankfurt', logo: frankfurtLogo },
    { name: 'VfB Stuttgart', logo: stuttgartLogo },
    { name: 'SC Freiburg', logo: freiburgLogo },
    { name: 'Union Berlin', logo: unionLogo },
    { name: 'Werder Bremen', logo: bremenLogo },
    { name: 'Borussia Mönchengladbach', logo: gladbachLogo },
    { name: 'Wolfsburg', logo: wolfsburgLogo },
    { name: 'Mainz 05', logo: mainzLogo },
    { name: 'FC Augsburg', logo: augsburgLogo },
    { name: 'TSG Hoffenheim', logo: hoffenheimLogo },
    { name: 'Heidenheim', logo: heidenheimLogo },
    { name: 'FC St. Pauli', logo: stpauliLogo },
    { name: 'Hamburger SV', logo: hsvLogo },
    { name: '1. FC Köln', logo: kolnLogo },
  ];

  const selectedTeamObject = teams.find((team) => team.name === favoriteTeam);

  const handleTeamSelect = (team: string) => {
    setFavoriteTeam(team);
    setIsDropdownOpen(false);
  };

  async function handleSignup() {
    if (!firstName || !lastName || !email || !password || !confirmationPassword || !favoriteTeam) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmationPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        'https://20trt2erj1.execute-api.eu-central-1.amazonaws.com/Development/api/signup',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstName, lastName, email, password, favoriteTeam }),
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('team', data.team);
        localStorage.setItem('email', data.email);
        localStorage.setItem('token', data.token);
        localStorage.setItem('formation', data.formation || '');
        localStorage.setItem('players', JSON.stringify(data.players || []));

        navigate('/dashboard', { state: { favoriteTeam } });
      } else {
        setError(data.error || 'Signup failed');
      }
    } catch (err) {
      setError('Could not connect to server');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div style={styles.screen}>
      <div style={styles.phone}>

        {/* Grain overlay */}
        <div
          style={{
            ...styles.grain,
            backgroundImage: `url(${grainTexture})`,
          }}
        />

        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerInner}>
            <h1 style={styles.headerTitle}>‎ THE PITCH</h1>
          </div>
        </header>

        <main style={styles.main}>
          <p style={styles.pageTitle}>SIGN UP</p>

          {/* First Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>FIRST NAME</label>
            <input
              type="text"
              placeholder="HARRY"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={styles.input}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#d7040f')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#554240')}
            />
          </div>

          {/* Last Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>LAST NAME</label>
            <input
              type="text"
              placeholder="KANE"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={styles.input}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#d7040f')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#554240')}
            />
          </div>

          {/* Email */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>PLAYER EMAIL</label>
            <input
              type="email"
              placeholder="STRIKER@MAIL.COM"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#d7040f')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#554240')}
            />
          </div>

          {/* Password */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>SECURITY CLEARANCE</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#d7040f')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#554240')}
            />
          </div>

          {/* Confirm Password */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>CONFIRM CLEARANCE</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmationPassword}
              onChange={(e) => setConfirmationPassword(e.target.value)}
              style={styles.input}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#d7040f')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#554240')}
            />
          </div>

          {/* Team Dropdown */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>FAVORITE CLUB</label>
            <div style={styles.dropdownWrapper} ref={dropdownRef}>
              <div
                style={styles.dropdownHeader}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#d7040f')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#554240')}
                tabIndex={0}
              >
                <div style={styles.dropdownHeaderContent}>
                  {selectedTeamObject ? (
                    <>
                      <img
                        src={selectedTeamObject.logo}
                        alt={selectedTeamObject.name}
                        style={styles.teamLogo}
                      />
                      <span style={styles.dropdownSelectedText}>
                        {selectedTeamObject.name.toUpperCase()}
                      </span>
                    </>
                  ) : (
                    <span style={styles.dropdownPlaceholder}>SELECT YOUR SQUAD</span>
                  )}
                </div>
                <span style={styles.arrow}>{isDropdownOpen ? '▲' : '▼'}</span>
              </div>

              {isDropdownOpen && (
                <div style={styles.dropdownList}>
                  {teams.map((team) => (
                    <div
                      key={team.name}
                      style={{
                        ...styles.dropdownItem,
                        ...(favoriteTeam === team.name ? styles.dropdownItemSelected : {}),
                      }}
                      onClick={() => handleTeamSelect(team.name)}
                    >
                      <img src={team.logo} alt={team.name} style={styles.teamLogo} />
                      <span>{team.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {error && <p style={styles.errorText}>{error}</p>}

          <button
            onClick={handleSignup}
            disabled={loading}
            style={loading ? { ...styles.signUpButton, ...styles.signUpButtonDisabled } : styles.signUpButton}
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
            {loading ? 'SIGNING UP...' : 'SIGN UP'}
          </button>

          <div style={styles.divider}>
            <p style={styles.dividerText}>Already on the squad?</p>
            <Link to="/" style={styles.loginLink}>LOG IN</Link>
          </div>
        </main>

        <div style={styles.phoneBottomBar}>
          <div style={styles.phoneHomeIndicator} />
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  screen: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Lexend', sans-serif",
    padding: '20px',
  },
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
  grain: {
    position: 'absolute' as const,
    inset: 0,
    opacity: 0.2,
    pointerEvents: 'none' as const,
    zIndex: 0,
    backgroundSize: '200px 200px',
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
    padding: '16px 24px 8px',
    gap: '10px',
    overflowY: 'auto' as const,
    position: 'relative' as const,
    zIndex: 1,
  },
  pageTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    color: '#ffb4aa',
    fontSize: '32px',
    letterSpacing: '0.1em',
    margin: '30px 0 0',
    alignSelf: 'flex-start',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
    width: '100%',
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
  dropdownWrapper: {
    width: '100%',
    position: 'relative' as const,
  },
  dropdownHeader: {
    width: '100%',
    backgroundColor: '#0c0f0f',
    border: '2px solid #554240',
    color: '#fff',
    fontFamily: "'Lexend', sans-serif",
    fontWeight: 700,
    fontSize: '13px',
    letterSpacing: '0.08em',
    padding: '10px 12px',
    boxSizing: 'border-box' as const,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '44px',
    transition: 'border-color 0.15s',
  },
  dropdownHeaderContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  dropdownPlaceholder: {
    color: '#554240',
    fontWeight: 400,
  },
  dropdownSelectedText: {
    color: '#fff',
  },
  arrow: {
    fontSize: '10px',
    color: '#ffb4aa',
    marginLeft: '8px',
    flexShrink: 0,
  },
  dropdownList: {
    position: 'absolute' as const,
    top: '100%',
    left: 0,
    width: '100%',
    maxHeight: '160px',
    overflowY: 'auto' as const,
    backgroundColor: '#1a1c1c',
    border: '2px solid #554240',
    borderTop: 'none',
    zIndex: 20,
    boxSizing: 'border-box' as const,
  },
  dropdownItem: {
    padding: '10px 12px',
    cursor: 'pointer',
    fontSize: '13px',
    fontFamily: "'Lexend', sans-serif",
    borderBottom: '1px solid #2a2c2c',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#dcc0bd',
    letterSpacing: '0.04em',
  },
  dropdownItemSelected: {
    backgroundColor: '#2a1c1c',
    color: '#ffb4aa',
  },
  teamLogo: {
    width: '18px',
    height: '18px',
    objectFit: 'contain' as const,
    flexShrink: 0,
  },
  errorText: {
    color: '#ffb4ab',
    fontSize: '12px',
    margin: 0,
    fontWeight: 700,
    letterSpacing: '0.05em',
    textAlign: 'center',
  },
  signUpButton: {
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
    marginTop: '4px',
  },
  signUpButtonDisabled: {
    backgroundColor: '#554240',
    color: '#a38b88',
    boxShadow: 'none',
    cursor: 'not-allowed',
  },
  divider: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '6px',
    borderTop: '1px solid #554240',
    paddingTop: '10px',
    paddingBottom: '2px',
    width: '100%',
  },
  dividerText: {
    fontFamily: "'Lexend', sans-serif",
    color: '#dcc0bd',
    fontSize: '14px',
    margin: 0,
  },
  loginLink: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '22px',
    color: '#ffb4aa',
    textDecoration: 'none',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  },
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

export default Signup;
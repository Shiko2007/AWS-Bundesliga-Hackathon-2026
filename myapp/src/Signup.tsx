import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bundesligaLogo from './assets/logos/Bundesliga.png';
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

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const [hovered, setHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState('');         // stores error messages
  const [loading, setLoading] = useState(false);  // tracks if request is in progress

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
    // Check all fields are filled
    if (!firstName || !lastName || !email || !password || !confirmationPassword || !favoriteTeam) {
      setError('Please fill in all fields')
      return
    }

    // Check passwords match
    if (password !== confirmationPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      setLoading(true)
      setError('')

      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password, favoriteTeam })
      });

      const data = await response.json();

      if (data.success) {
        console.log("Registered successfully!", data)
        navigate('/team-builder', { state: { favoriteTeam } });
        // e.g. redirect to login: navigate("/")
      } else {
        setError(data.error || "Signup failed")
        console.log("Signup failed:", data.error)
      }

    } catch (err) {
      setError("Could not connect to server")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={styles.screen}>
      <div style={styles.phone}>
        <div style={styles.topBar}>
          <img
            src={bundesligaLogo}
            alt="Bundesliga logo"
            style={styles.logo}
          />
        </div>

        <h1 style={styles.title}>Sign Up</h1>

        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmationPassword}
          onChange={(e) => setConfirmationPassword(e.target.value)}
          style={styles.input}
        />

        <div style={styles.dropdownWrapper} ref={dropdownRef}>
          <div
            style={styles.dropdownHeader}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
                    {selectedTeamObject.name}
                  </span>
                </>
              ) : (
                <span style={styles.dropdownPlaceholder}>
                  Select your favorite team
                </span>
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
                  <div style={styles.teamRow}>
                    <img src={team.logo} alt={team.name} style={styles.teamLogo} />
                    <span>{team.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Shows error message if something goes wrong */}
        {error && <p style={styles.error}>{error}</p>}

        <button
  onClick={handleSignup}
  disabled={loading}
  style={{
    ...styles.button,
    ...(hovered ? styles.buttonHover : {}),
    ...(loading ? styles.buttonDisabled : {}),
  }}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  {loading ? "Signing up..." : "Sign Up"}
</button>

        <p style={styles.footer}>
          Already have an account?{' '}
          <Link to="/" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  screen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'sans-serif',
    padding: '20px',
  },
  phone: {
    width: '350px',
    minHeight: '760px',
    backgroundColor: '#ffffff',
    borderRadius: '40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
    padding: '36px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '16px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  logo: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    marginBottom: '4px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#111',
    margin: '0 0 10px 0',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    fontSize: '14px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    outline: 'none',
    boxSizing: 'border-box',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  },
  dropdownWrapper: {
    width: '100%',
    position: 'relative',
  },
  dropdownHeader: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '48px',
  },
  dropdownHeaderContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  dropdownPlaceholder: {
    color: '#999',
  },
  dropdownSelectedText: {
    color: '#111',
  },
  arrow: {
    fontSize: '12px',
    color: '#555',
    marginLeft: '12px',
  },
  dropdownList: {
    position: 'absolute',
    top: '110%',
    left: 0,
    width: '100%',
    maxHeight: '180px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
    zIndex: 10,
  },
  dropdownItem: {
    padding: '12px 14px',
    cursor: 'pointer',
    fontSize: '14px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #f3f3f3',
  },
  dropdownItemSelected: {
    backgroundColor: '#fdecea',
    color: '#E32219',
    fontWeight: '600',
  },
  teamRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  teamLogo: {
    width: '20px',
    height: '20px',
    objectFit: 'contain',
    flexShrink: 0,
  },
  button: {
    width: '100%',
    padding: '13px',
    fontSize: '15px',
    fontWeight: '600',
    backgroundColor: '#E32219',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    marginTop: '4px',
    transition: 'background-color 0.2s ease',
    boxSizing: 'border-box',
  },
  buttonHover: {
    backgroundColor: '#b81a13',
  },
  buttonDisabled: {
    backgroundColor: '#aaa',
    cursor: 'not-allowed',
  },
  error: {
    color: '#E32219',
    fontSize: '13px',
    margin: '0',
    textAlign: 'center',
  },
  footer: {
    fontSize: '13px',
    color: '#777',
    marginTop: '8px',
    textAlign: 'center',
  },
  link: {
    color: '#E32219',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  topBar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export default Signup;
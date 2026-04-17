import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bundesligaLogo from './assets/logos/Bundesliga.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hovered, setHovered] = useState(false);

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
        <h1 style={styles.title}>Login</h1>

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

        <button
          style={{ ...styles.button, ...(hovered ? styles.buttonHover : {}) }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Login
        </button>

        <p style={styles.footer}>
          Don't have an account?{' '}
          <Link to="/signup" style={styles.link}>Sign up</Link>
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
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'sans-serif',
  },
  phone: {
    width: '350px',
    height: '620px',
    backgroundColor: '#ffffff',
    borderRadius: '40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
    padding: '48px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#111',
    margin: '0 0 8px 0',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    fontSize: '14px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    outline: 'none',
    boxSizing: 'border-box',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  },
  button: {
    width: '100%',
    padding: '13px',
    fontSize: '15px',
    fontWeight: '600',
    backgroundColor: '#E32219',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '4px',
    transition: 'background-color 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#b81a13',
  },
  footer: {
    fontSize: '13px',
    color: '#777',
    marginTop: '8px',
  },
  link: {
    color: '#E32219',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  logo: {
    width: '170px',
    height: '170px',
    objectFit: 'contain',
    
    marginBottom: '4px',
  },
  
};

export default Login;
export {};
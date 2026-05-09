import React, { useState } from 'react';
import bundesligaLogo from './assets/logos/Bundesliga.png';

function Players() {
  const [selectedPlayers, setSelectedPlayers] = useState<any[]>([])  // now an array
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const players = [
    { id: "DFL-OBJ-0001", firstName: "Manuel", lastName: "Neuer", number: 1, position: "goalkeeper" },
    { id: "DFL-OBJ-0002", firstName: "Sven", lastName: "Ulreich", number: 26, position: "goalkeeper" },
    { id: "DFL-OBJ-0003", firstName: "Daniel", lastName: "Peretz", number: 37, position: "goalkeeper" },
    { id: "DFL-OBJ-0004", firstName: "Alphonso", lastName: "Davies", number: 19, position: "defender" },
    { id: "DFL-OBJ-0005", firstName: "Noussair", lastName: "Mazraoui", number: 40, position: "defender" },
    { id: "DFL-OBJ-0006", firstName: "Matthijs", lastName: "de Ligt", number: 4, position: "defender" },
    { id: "DFL-OBJ-0007", firstName: "Dayot", lastName: "Upamecano", number: 5, position: "defender" },
    { id: "DFL-OBJ-0008", firstName: "Min-jae", lastName: "Kim", number: 3, position: "defender" },
    { id: "DFL-OBJ-0009", firstName: "Konrad", lastName: "Laimer", number: 27, position: "defender" },
    { id: "DFL-OBJ-0010", firstName: "Raphael", lastName: "Guerreiro", number: 22, position: "defender" },
    { id: "DFL-OBJ-0011", firstName: "Joshua", lastName: "Kimmich", number: 6, position: "midfielder" },
    { id: "DFL-OBJ-0012", firstName: "Leon", lastName: "Goretzka", number: 8, position: "midfielder" },
    { id: "DFL-OBJ-0013", firstName: "Jamal", lastName: "Musiala", number: 42, position: "midfielder" },
    { id: "DFL-OBJ-0014", firstName: "Aleksandar", lastName: "Pavlovic", number: 45, position: "midfielder" },
    { id: "DFL-OBJ-0015", firstName: "João", lastName: "Palhinha", number: 24, position: "midfielder" },
    { id: "DFL-OBJ-0016", firstName: "Harry", lastName: "Kane", number: 9, position: "attacker" },
    { id: "DFL-OBJ-0017", firstName: "Leroy", lastName: "Sane", number: 10, position: "attacker" },
    { id: "DFL-OBJ-0018", firstName: "Serge", lastName: "Gnabry", number: 7, position: "attacker" },
    { id: "DFL-OBJ-0019", firstName: "Thomas", lastName: "Muller", number: 25, position: "attacker" },
    { id: "DFL-OBJ-0020", firstName: "Michael", lastName: "Olise", number: 2, position: "attacker" },
    { id: "DFL-OBJ-0021", firstName: "Kingsley", lastName: "Coman", number: 11, position: "attacker" },
    { id: "DFL-OBJ-0022", firstName: "Mathys", lastName: "Tel", number: 39, position: "attacker" },
  ]

  const goalkeepers = players.filter(p => p.position === "goalkeeper")
  const defenders = players.filter(p => p.position === "defender")
  const midfielders = players.filter(p => p.position === "midfielder")
  const attackers = players.filter(p => p.position === "attacker")

  function handlePlayerClick(player: any) {
    const alreadySelected = selectedPlayers.find(p => p.id === player.id)

    if (alreadySelected) {
      // clicking again deselects the player
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id))
    } else {
      // only allow up to 5 selections
      if (selectedPlayers.length >= 5) {
        setMessage("❌ You can only select 5 players!")
        return
      }
      setSelectedPlayers([...selectedPlayers, player])
    }
    setMessage('')
  }

  async function handleSubmit() {
    if (selectedPlayers.length !== 5) {
      setMessage("❌ Please select exactly 5 players")
      return
    }

    try {
      const response = await fetch("http://localhost:4000/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ players: selectedPlayers })
      })
      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setMessage("✅ Team submitted successfully!")
        console.log("✅ Submitted players:", selectedPlayers)
      } else {
        setMessage("❌ Something went wrong")
      }
    } catch (err) {
      setMessage("❌ Could not connect to server")
    }
  }

  const renderGroup = (title: string, group: any[]) => (
    <div style={styles.group}>
      <h2 style={styles.groupTitle}>{title}</h2>
      <div style={styles.buttonGrid}>
        {group.map(player => {
          const isSelected = selectedPlayers.find(p => p.id === player.id)
          return (
            <button
              key={player.id}
              onClick={() => handlePlayerClick(player)}
              style={{
                ...styles.playerButton,
                ...(isSelected ? styles.playerButtonSelected : {})
              }}
            >
              <span style={styles.playerNumber}>#{player.number}</span>
              <span style={styles.playerName}>{player.firstName} {player.lastName}</span>
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <div style={styles.screen}>
      <div style={styles.container}>
        <div style={styles.topBar}>
          <img src={bundesligaLogo} alt="Bundesliga logo" style={styles.logo} />
        </div>

        <h1 style={styles.title}>Bayern Munich Squad</h1>
        <p style={styles.subtitle}>Select 5 players ({selectedPlayers.length}/5 selected)</p>

        {message && <p style={styles.message}>{message}</p>}

        {/* Shows selected players at the top */}
        {selectedPlayers.length > 0 && (
          <div style={styles.selectedList}>
            <p style={styles.selectedTitle}>Your selection:</p>
            {selectedPlayers.map(p => (
              <span key={p.id} style={styles.selectedTag}>
                #{p.number} {p.firstName} {p.lastName}
              </span>
            ))}
          </div>
        )}

        {renderGroup("Goalkeepers", goalkeepers)}
        {renderGroup("Defenders", defenders)}
        {renderGroup("Midfielders", midfielders)}
        {renderGroup("Attackers", attackers)}

        <button
          onClick={handleSubmit}
          disabled={selectedPlayers.length !== 5 || submitted}
          style={{
            ...styles.submitButton,
            ...(selectedPlayers.length !== 5 || submitted ? styles.submitButtonDisabled : {})
          }}
        >
          {submitted ? "✅ Submitted!" : `Submit Team (${selectedPlayers.length}/5)`}
        </button>

      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  screen: {
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'sans-serif',
    padding: '20px',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  logo: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    marginBottom: '4px',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#777',
    marginBottom: '16px',
  },
  message: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#E32219',
    marginBottom: '10px',
  },
  selectedList: {
    backgroundColor: '#fdecea',
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    alignItems: 'center',
  },
  selectedTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#E32219',
    margin: '0',
    width: '100%',
  },
  selectedTag: {
    backgroundColor: '#E32219',
    color: '#fff',
    borderRadius: '20px',
    padding: '4px 10px',
    fontSize: '12px',
    fontWeight: '600',
  },
  group: {
    marginBottom: '24px',
  },
  groupTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#E32219',
    marginBottom: '10px',
    borderBottom: '2px solid #E32219',
    paddingBottom: '4px',
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  playerButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    transition: 'all 0.2s ease',
  },
  playerButtonSelected: {
    backgroundColor: '#E32219',
    color: '#fff',
    border: '1px solid #E32219',
  },
  playerNumber: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '4px',
  },
  playerName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#111',
    textAlign: 'center',
  },
  submitButton: {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    fontWeight: '700',
    backgroundColor: '#E32219',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.2s ease',
  },
  submitButtonDisabled: {
    backgroundColor: '#aaa',
    cursor: 'not-allowed',
  },
}

export default Players
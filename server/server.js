const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const users = []   // stores registered users

//Sign Up
app.post("/api/register", (req, res) => {
  const { firstName, lastName, email, password, favoriteTeam } = req.body

  // Check if email already exists
  const existingUser = users.find(user => user.email === email)
  if (existingUser) {
    console.log(`Registration failed — email already exists: ${email}`)
    return res.json({ success: false, error: "Email already registered" })
  }

  // Save the new user
  const newUser = { firstName, lastName, email, password, favoriteTeam }
  users.push(newUser)

  console.log(`New user registered: ${firstName} ${lastName} (${email}) — Team: ${favoriteTeam}`)
  console.log("All users:", users)

  res.json({ success: true, message: "Account created!" })
})

//Log in
app.post("/api/login", (req, res) => {
  const { email, password } = req.body

  if (email === "test@test.com" && password === "1234") {
    console.log(`Successful login for: ${email}`)
    res.json({ success: true, message: "Logged in!" })
  } else {
    console.log(`Failed login attempt for: ${email}`)
    res.json({ success: false, error: "Invalid email or password" })
  }
})

app.post("/api/players", (req, res) => {
  const { players } = req.body

  console.log("Team submitted:")
  players.forEach(p => console.log(`  - #${p.number} ${p.firstName} ${p.lastName} (${p.position})`))

  res.json({ success: true, players })
})

app.listen(4000, () => console.log("Server started on port 4000"))
const express = require('express')
const cors = require('cors')        // add this
const app = express()

app.use(cors())                     // add this — allows React to talk to Express
app.use(express.json())

const messages = []

app.post("/api/login", (req, res) => {
  const { email, password } = req.body

  if (email === "test@test.com" && password === "1234") {
    console.log(`Successful login for: ${email}`)   // prints in server terminal
    res.json({ success: true, message: "Logged in!" })
  } else {
    console.log(`Failed login attempt for: ${email}`)  // prints in server terminal
    res.json({ success: false, error: "Invalid email or password" })
  }
})

app.listen(4000, () => console.log("Server started on port 4000"))

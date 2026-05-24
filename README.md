# AWS-Bundesliga-Hackathon-2026

### Real-Time Multiplayer Fan Engagement Ecosystem for Football Matches

> *Not a distraction from the match an elevation of it.*

Pick your squad. Play your cards. Outsmart the game.

**The Connected Arena** is a gamified fan experience where you predict live match outcomes and earn points in real time. Build your team at the start of the season, draft your squad before kick-off, and play strategic cards during the match. When your predicted events happen on the pitch you score. Climb the leaderboard. Beat your rivals. Feel every minute.


## 🎮 How It Works

1. **Sign up & pick your club** choose the team you'll support for the season
2. **Before the match** select your squad, set your formation by dragging players into position, and choose 5 cards to play
3. **During the match** play your cards on specific players; if the card's event occurs in the match, you earn points
4. **Leaderboard** compete against other fans in real time and see who predicted the match best

### 🃏 Card & Points Reference

Based on `GameTime` values in `match_data.xml`:

| Time  | Event             | Player                        | Points Awarded                                        |
|-------|-------------------|-------------------------------|-------------------------------------------------------|
| Min 0 | Through ball pass | Dayot Upamecano               | 5pt  `passing_accuracy` or `key_passes` card         |
| Min 1 | 22m carry         | Alphonso Davies               | 5pt  `distance_covered` card                         |
| Min 2 | Hits woodwork     | Harry Kane                    | 5pt  `crossbar` card                                 |
| Min 3 | Shot saved        | Joshua Kimmich                | 3pt  `shots_on_target` card                          |
| Min 4 | Cross + Goal      | Jonathan Tah / Jamal Musiala  | 17pt (Tah card holders) / 10pt (Musiala card holders) |
| Min 5 | VAR review        |                              | 4pt  `var_called` card                               |
| Min 6 | Final whistle     |                              | Half time triggered, `GamePoints` banked              |


## ⚙️ Prerequisites

Make sure you have the following installed:

- Node.js & npm
- Python 3
- React


## 🚀 How to Run

### 1. Start the app

In the `myapp` folder, run:

```bash
npm start
```

Then open your browser the app will be running at `http://localhost:3000`.

### 2. Sign up or log in

Create an account or log in with existing credentials.

> ⚠️ **Important:** Select **Bayern Munich** as your team to be able to run the simulated match.

### 3. Enter match data & pick your squad

- Drag players into position to set your formation
- Save your squad
- Pick your **5 cards** and save

### 4. Run the match simulation

The match events are hardcoded in:

```
myapp/matchSimulation/match_data.xml
```

To start the data feed simulation, run:

```bash
cd myapp/matchSimulation
python3 simulate_match.py
```

> You can adjust simulation speed and settings in the `# config` section at the top of `simulate_match.py`.

### 5. Enter the match

Go back to your browser and click **"Enter Match"**.

- Drag and drop your cards onto your desired players
- Watch the match events unfold in real time
- When the final whistle blows, check the **leaderboard** to see how you ranked 🏆


> Built with ❤️ for the AWS Hackathon
> by Sherif Fawzy, Youssef Ibrahim, Ahmed Hazem

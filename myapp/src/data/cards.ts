export type ActionCard = {
  id: string;
  name: string;
  description: string;
  appliesTo: 'TEAM' | 'ONE_PLAYER';
  timing: 'BEFORE_MATCH' | 'DURING_MATCH';
  duration: number;
};

export const allCards: ActionCard[] = [
  {
    id: 'goal',
    name: 'Goal in Next 45',
    description: 'Scores in next 45m. (10 pts)',
    appliesTo: 'ONE_PLAYER',
    timing: 'DURING_MATCH',
    duration: 2700,
  },
  {
    id: 'assist',
    name: 'Assist in Next 45',
    description: 'Assists in next 45m. (8 pts)',
    appliesTo: 'ONE_PLAYER',
    timing: 'DURING_MATCH',
    duration: 2700,
  },
  {
    id: 'counter_attack_goal',
    name: 'Counter Attack Goal',
    description: 'Counter-attack goal. (12 pts)',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
    duration: 5400,
  },
  {
    id: 'passing_accuracy',
    name: '80% Pass Accuracy',
    description: '>80% pass accuracy. (1 pt/pass)',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
    duration: 5400,
  },
  {
    id: 'shots_on_target',
    name: '5 Shots on Target',
    description: '≥5 shots on target. (3 pts/shot)',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
    duration: 5400,
  },
  {
    id: 'crossbar',
    name: 'Crossbar',
    description: 'Player hits the crossbar. (5 pts)',
    appliesTo: 'ONE_PLAYER',
    timing: 'DURING_MATCH',
    duration: 5400,
  },
  {
    id: 'var_called',
    name: 'VAR Called',
    description: 'Any VAR event occurs. (4 pts)',
    appliesTo: 'TEAM',
    timing: 'BEFORE_MATCH',
    duration: 5400,
  },
  {
    id: 'key_passes',
    name: 'Key Passes',
    description: 'Through balls/key passes. (4 pts/pass)',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
    duration: 5400,
  },
  {
    id: 'blocked_shots',
    name: '3 Blocked Shots',
    description: 'Blocks ≥3 shots. (4 pts/block)',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
    duration: 5400,
  },
  {
    id: 'distance_covered',
    name: 'Distance Covered',
    description: 'Ball carries over 20m. (5 pts/carry)',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
    duration: 5400,
  },
  {
    id: 'assist_cross',
    name: 'Cross Assist',
    description: 'Assist via cross. (9 pts)',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
    duration: 5400,
  }
];

export {};
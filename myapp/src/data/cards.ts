export type ActionCard = {
  id: number;
  name: string;
  description: string;
  appliesTo: 'TEAM' | 'ONE_PLAYER';
  timing: 'BEFORE_MATCH' | 'DURING_MATCH';
};

export const allCards: ActionCard[] = [
  {
    id: 1,
    name: 'Goal in Next 45',
    description: 'Selected player scores in the next 45 minutes.',
    appliesTo: 'ONE_PLAYER',
    timing: 'DURING_MATCH',
  },
  {
    id: 2,
    name: 'Assist in Next 45',
    description: 'Selected player gets an assist in the next 45 minutes.',
    appliesTo: 'ONE_PLAYER',
    timing: 'DURING_MATCH',
  },
  {
    id: 3,
    name: '80% Pass Accuracy',
    description: 'Selected player finishes with more than 80% pass accuracy.',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
  },
  {
    id: 4,
    name: '5 Shots on Target',
    description: 'Selected player gets 5 or more shots on target.',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
  },
  {
    id: 5,
    name: '5 Saves',
    description: 'Selected goalkeeper makes 5 or more saves.',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
  },
  {
    id: 6,
    name: '3 Blocked Shots',
    description: 'Selected player blocks 3 or more shots.',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
  },
  {
    id: 7,
    name: 'Goal in Next 30',
    description: 'Selected player scores in the next 30 minutes.',
    appliesTo: 'ONE_PLAYER',
    timing: 'DURING_MATCH',
  },
  {
    id: 8,
    name: 'Assist in Next 30',
    description: 'Selected player gets an assist in the next 30 minutes.',
    appliesTo: 'ONE_PLAYER',
    timing: 'DURING_MATCH',
  },
  {
    id: 9,
    name: 'Cross Assist',
    description: 'Selected player gives an assist from a cross.',
    appliesTo: 'ONE_PLAYER',
    timing: 'BEFORE_MATCH',
  },
  {
    id: 10,
    name: 'Counter Attack Goal',
    description: 'Your team scores from a counter attack.',
    appliesTo: 'TEAM',
    timing: 'BEFORE_MATCH',
  },
];
export {};
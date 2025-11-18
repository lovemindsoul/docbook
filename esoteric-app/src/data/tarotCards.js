export const tarotCards = [
  // Major Arcana
  { id: 0, name: 'The Fool', suit: 'Major Arcana', meaning: 'New beginnings, spontaneity, innocence', reversed: 'Recklessness, fearlessness, risk' },
  { id: 1, name: 'The Magician', suit: 'Major Arcana', meaning: 'Manifestation, resourcefulness, power', reversed: 'Manipulation, poor planning, untapped talents' },
  { id: 2, name: 'The High Priestess', suit: 'Major Arcana', meaning: 'Intuition, sacred knowledge, divine feminine', reversed: 'Secrets, disconnected from intuition, withdrawal' },
  { id: 3, name: 'The Empress', suit: 'Major Arcana', meaning: 'Femininity, beauty, nature, abundance', reversed: 'Creative block, dependence on others' },
  { id: 4, name: 'The Emperor', suit: 'Major Arcana', meaning: 'Authority, establishment, structure, father figure', reversed: 'Domination, excessive control, rigidity' },
  { id: 5, name: 'The Hierophant', suit: 'Major Arcana', meaning: 'Spiritual wisdom, religious beliefs, tradition', reversed: 'Personal beliefs, freedom, challenging the status quo' },
  { id: 6, name: 'The Lovers', suit: 'Major Arcana', meaning: 'Love, harmony, relationships, values alignment', reversed: 'Self-love, disharmony, imbalance' },
  { id: 7, name: 'The Chariot', suit: 'Major Arcana', meaning: 'Control, willpower, success, determination', reversed: 'Self-discipline, opposition, lack of direction' },
  { id: 8, name: 'Strength', suit: 'Major Arcana', meaning: 'Courage, persuasion, influence, compassion', reversed: 'Inner strength, self-doubt, low energy' },
  { id: 9, name: 'The Hermit', suit: 'Major Arcana', meaning: 'Soul searching, introspection, inner guidance', reversed: 'Isolation, loneliness, withdrawal' },
  { id: 10, name: 'Wheel of Fortune', suit: 'Major Arcana', meaning: 'Good luck, karma, life cycles, destiny', reversed: 'Bad luck, resistance to change, breaking cycles' },
  { id: 11, name: 'Justice', suit: 'Major Arcana', meaning: 'Justice, fairness, truth, cause and effect', reversed: 'Unfairness, lack of accountability, dishonesty' },
  { id: 12, name: 'The Hanged Man', suit: 'Major Arcana', meaning: 'Pause, surrender, letting go, new perspectives', reversed: 'Delays, resistance, stalling' },
  { id: 13, name: 'Death', suit: 'Major Arcana', meaning: 'Endings, change, transformation, transition', reversed: 'Resistance to change, personal transformation' },
  { id: 14, name: 'Temperance', suit: 'Major Arcana', meaning: 'Balance, moderation, patience, purpose', reversed: 'Imbalance, excess, self-healing' },
  { id: 15, name: 'The Devil', suit: 'Major Arcana', meaning: 'Shadow self, attachment, addiction, restriction', reversed: 'Releasing limiting beliefs, exploring dark thoughts' },
  { id: 16, name: 'The Tower', suit: 'Major Arcana', meaning: 'Sudden change, upheaval, chaos, revelation', reversed: 'Personal transformation, fear of change, averting disaster' },
  { id: 17, name: 'The Star', suit: 'Major Arcana', meaning: 'Hope, faith, purpose, renewal, spirituality', reversed: 'Lack of faith, despair, self-trust' },
  { id: 18, name: 'The Moon', suit: 'Major Arcana', meaning: 'Illusion, fear, anxiety, subconscious, intuition', reversed: 'Release of fear, repressed emotion, inner confusion' },
  { id: 19, name: 'The Sun', suit: 'Major Arcana', meaning: 'Positivity, fun, warmth, success, vitality', reversed: 'Inner child, feeling down, overly optimistic' },
  { id: 20, name: 'Judgement', suit: 'Major Arcana', meaning: 'Judgement, rebirth, inner calling, absolution', reversed: 'Self-doubt, inner critic, ignoring the call' },
  { id: 21, name: 'The World', suit: 'Major Arcana', meaning: 'Completion, integration, accomplishment, travel', reversed: 'Seeking personal closure, short-cuts, delays' },
];

export const tarotSpreads = [
  {
    name: 'Single Card',
    description: 'Draw one card for quick insight',
    positions: ['Current Energy']
  },
  {
    name: 'Three Card',
    description: 'Past, Present, Future',
    positions: ['Past', 'Present', 'Future']
  },
  {
    name: 'Celtic Cross',
    description: 'Comprehensive 10-card spread',
    positions: [
      'Present Situation',
      'Challenge',
      'Past',
      'Future',
      'Above',
      'Below',
      'Advice',
      'External Influences',
      'Hopes and Fears',
      'Outcome'
    ]
  }
];

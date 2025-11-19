export const angelNumbers = {
  '111': {
    meaning: 'Manifestation and New Beginnings',
    description: 'Your thoughts are manifesting rapidly. Focus on your desires, not your fears. The universe is supporting your new ventures.',
    action: 'Pay attention to your thoughts and maintain a positive mindset.'
  },
  '222': {
    meaning: 'Balance and Harmony',
    description: 'Trust the process. Everything is working out for your highest good. Keep faith and maintain balance in all areas of your life.',
    action: 'Practice patience and trust in divine timing.'
  },
  '333': {
    meaning: 'Divine Protection and Guidance',
    description: 'The ascended masters are near, offering guidance and support. You are being protected and encouraged to express yourself.',
    action: 'Embrace your creativity and spiritual gifts.'
  },
  '444': {
    meaning: 'Angels Are With You',
    description: 'You are surrounded by angels who are helping you. Your foundation is solid and you are on the right path.',
    action: 'Continue your current path with confidence.'
  },
  '555': {
    meaning: 'Major Change is Coming',
    description: 'Significant life changes are on the horizon. Release the old to make way for the new. Embrace transformation.',
    action: 'Be open to change and new opportunities.'
  },
  '666': {
    meaning: 'Refocus on Spiritual Growth',
    description: 'Release material worries and focus on your spiritual journey. Balance your thoughts between material and spiritual realms.',
    action: 'Realign your priorities and practice gratitude.'
  },
  '777': {
    meaning: 'Spiritual Awakening',
    description: 'You are on the right spiritual path. Miracles are manifesting. Your spiritual growth is being acknowledged.',
    action: 'Continue your spiritual practices and meditation.'
  },
  '888': {
    meaning: 'Abundance and Prosperity',
    description: 'Financial abundance is flowing to you. The universe is rewarding your hard work. Prosperity in all forms is coming.',
    action: 'Be grateful and share your abundance with others.'
  },
  '999': {
    meaning: 'Completion and Endings',
    description: 'A chapter is closing. Release what no longer serves you. Prepare for new beginnings and opportunities.',
    action: 'Let go of the past and embrace new phases in your life.'
  },
  '000': {
    meaning: 'Divine Guidance and Oneness',
    description: 'You are one with the universe. God is speaking directly to you. You are in alignment with your divine purpose.',
    action: 'Trust in divine guidance and remain open to signs.'
  },
  '1111': {
    meaning: 'Spiritual Awakening and Alignment',
    description: 'A powerful portal is opening. Your thoughts are rapidly manifesting. You are aligned with your highest self.',
    action: 'Make a wish and stay focused on your intentions.'
  },
  '1234': {
    meaning: 'Step-by-Step Progress',
    description: 'You are making steady progress. Keep taking one step at a time. Your journey is unfolding perfectly.',
    action: 'Continue moving forward with consistent effort.'
  },
  '1212': {
    meaning: 'Stay Positive and Focused',
    description: 'Your prayers have been heard. Stay positive and keep your thoughts focused on your desired outcome.',
    action: 'Maintain unwavering faith in your manifestations.'
  },
  '1010': {
    meaning: 'Personal Development and Growth',
    description: 'Trust your intuition and inner wisdom. You are being guided to develop your spiritual gifts and personal power.',
    action: 'Follow your inner guidance and embrace personal growth.'
  },
  '717': {
    meaning: 'Spiritual Path and Wisdom',
    description: 'You are on the right spiritual path. Continue seeking knowledge and wisdom. Your spiritual journey is supported.',
    action: 'Trust your spiritual insights and continue learning.'
  }
};

export const getAngelNumberMeaning = (number) => {
  const numStr = number.toString();
  
  // Check for exact match
  if (angelNumbers[numStr]) {
    return { number: numStr, ...angelNumbers[numStr] };
  }
  
  // Check for repeating patterns
  const repeatingPattern = numStr.split('').every(digit => digit === numStr[0]);
  if (repeatingPattern && angelNumbers[numStr[0].repeat(3)]) {
    return { number: numStr[0].repeat(3), ...angelNumbers[numStr[0].repeat(3)] };
  }
  
  // Check for sequences
  if (angelNumbers[numStr.slice(0, 4)]) {
    return { number: numStr.slice(0, 4), ...angelNumbers[numStr.slice(0, 4)] };
  }
  
  if (angelNumbers[numStr.slice(0, 3)]) {
    return { number: numStr.slice(0, 3), ...angelNumbers[numStr.slice(0, 3)] };
  }
  
  return null;
};

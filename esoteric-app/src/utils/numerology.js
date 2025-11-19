export const calculateLifePath = (birthDate) => {
  // birthDate format: YYYY-MM-DD
  const digits = birthDate.replace(/-/g, '').split('').map(Number);
  let sum = digits.reduce((acc, digit) => acc + digit, 0);
  
  // Reduce to single digit unless it's a master number
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
  }
  
  return sum;
};

export const calculateDestinyNumber = (fullName) => {
  const letterValues = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
    'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
  };
  
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  
  for (let char of cleanName) {
    sum += letterValues[char] || 0;
  }
  
  // Reduce to single digit unless it's a master number
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
  }
  
  return sum;
};

export const numerologyMeanings = {
  1: {
    title: 'The Leader',
    traits: 'Independent, ambitious, strong-willed, pioneering',
    description: 'You are a natural-born leader with strong determination and creativity. You forge your own path and inspire others to follow.'
  },
  2: {
    title: 'The Peacemaker',
    traits: 'Diplomatic, cooperative, sensitive, intuitive',
    description: 'You seek harmony and balance. Your natural empathy makes you an excellent mediator and friend.'
  },
  3: {
    title: 'The Creative',
    traits: 'Expressive, optimistic, artistic, social',
    description: 'You possess natural creativity and joy. Your enthusiasm is contagious and you inspire others through artistic expression.'
  },
  4: {
    title: 'The Builder',
    traits: 'Practical, disciplined, reliable, hardworking',
    description: 'You are grounded and methodical. Your dedication to building solid foundations makes you dependable and trustworthy.'
  },
  5: {
    title: 'The Freedom Seeker',
    traits: 'Adventurous, versatile, curious, energetic',
    description: 'You crave freedom and change. Your adaptability and enthusiasm for life lead you to diverse experiences.'
  },
  6: {
    title: 'The Nurturer',
    traits: 'Caring, responsible, protective, loving',
    description: 'You are devoted to family and community. Your nurturing nature draws people seeking comfort and guidance.'
  },
  7: {
    title: 'The Seeker',
    traits: 'Analytical, spiritual, introspective, wise',
    description: 'You seek deeper truths and understanding. Your analytical mind and spiritual nature lead you to profound insights.'
  },
  8: {
    title: 'The Powerhouse',
    traits: 'Ambitious, authoritative, material success, organized',
    description: 'You possess natural business acumen and leadership. Material success comes through your determination and vision.'
  },
  9: {
    title: 'The Humanitarian',
    traits: 'Compassionate, generous, idealistic, philanthropic',
    description: 'You are driven by compassion and a desire to make the world better. Your selfless nature inspires positive change.'
  },
  11: {
    title: 'The Illuminator (Master Number)',
    traits: 'Intuitive, inspirational, idealistic, visionary',
    description: 'As a master number, you possess heightened intuition and spiritual insight. You are meant to inspire and enlighten others.'
  },
  22: {
    title: 'The Master Builder (Master Number)',
    traits: 'Visionary, practical, powerful, disciplined',
    description: 'You have the power to turn dreams into reality on a grand scale. Your practical idealism can create lasting change.'
  },
  33: {
    title: 'The Master Teacher (Master Number)',
    traits: 'Nurturing, compassionate, healing, selfless',
    description: 'You are a spiritual teacher and healer. Your life purpose centers on uplifting humanity through love and wisdom.'
  }
};

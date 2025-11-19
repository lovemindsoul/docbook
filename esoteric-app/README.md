# Esoteric App - Mobile Application for Spiritual Practices

A comprehensive mobile application for exploring tarot, numerology, astrology, angel numbers, and other esoteric practices.

## Features

### 🔮 Tarot Reading
- Multiple tarot spreads (Single Card, Three Card, Celtic Cross)
- Complete Major Arcana deck
- Card meanings and interpretations
- Interactive card drawing experience

### 🔢 Numerology Calculator
- Life Path Number calculation
- Destiny Number calculation
- Detailed meanings for each number
- Master numbers (11, 22, 33) support

### ♈ Astrology
- Complete zodiac sign information
- Detailed traits and characteristics
- Element and ruling planet information
- Comprehensive descriptions

### 👼 Angel Numbers
- Common angel number meanings
- Number search functionality
- Divine messages and guidance
- Actionable advice for each number

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional but recommended)

### Setup
```bash
cd esoteric-app
npm install
```

### Running the App

#### Development Mode
```bash
npm start
```

This will start the Expo development server. You can then:
- Press `a` to run on Android emulator
- Press `i` to run on iOS simulator (macOS only)
- Press `w` to run on web browser
- Scan the QR code with Expo Go app on your mobile device

#### Platform-Specific Commands
```bash
npm run android  # Run on Android
npm run ios      # Run on iOS (macOS only)
npm run web      # Run in web browser
```

## Project Structure

```
esoteric-app/
├── App.js                          # Main app component with navigation
├── src/
│   ├── screens/                    # Screen components
│   │   ├── Home/                   # Home screen
│   │   ├── Tarot/                  # Tarot reading screen
│   │   ├── Numerology/             # Numerology calculator screen
│   │   ├── Astrology/              # Astrology screen
│   │   └── AngelNumbers/           # Angel numbers screen
│   ├── data/                       # Data files
│   │   ├── tarotCards.js          # Tarot card definitions
│   │   ├── astrology.js           # Zodiac sign information
│   │   └── angelNumbers.js        # Angel number meanings
│   ├── utils/                      # Utility functions
│   │   └── numerology.js          # Numerology calculations
│   └── components/                 # Reusable components (future)
├── assets/                         # Images and assets
└── package.json                    # Dependencies and scripts
```

## Technologies Used

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tooling
- **React Navigation** - Navigation and routing
- **React Native Bottom Tabs** - Tab-based navigation

## Features in Detail

### Tarot Reading
The tarot feature provides an authentic tarot reading experience with:
- Major Arcana cards with traditional meanings
- Multiple spread options for different types of questions
- Interactive card reveal system
- Clean, mystical UI design

### Numerology
Calculate and understand your personal numbers:
- Birth date-based Life Path Number
- Name-based Destiny Number
- Comprehensive interpretations
- Master number recognition

### Astrology
Explore zodiac wisdom:
- All 12 zodiac signs
- Detailed personality traits
- Element associations
- Ruling planet information

### Angel Numbers
Decode divine messages:
- Extensive database of angel numbers
- Search any number sequence
- Detailed meanings and guidance
- Practical advice for each number

## Customization

You can customize the app by:
- Adding more tarot cards to `src/data/tarotCards.js`
- Extending angel numbers in `src/data/angelNumbers.js`
- Adding more zodiac information to `src/data/astrology.js`
- Creating new numerology calculations in `src/utils/numerology.js`

## Contributing

This is an open spiritual tool. Feel free to:
- Add more esoteric practices
- Improve calculations and interpretations
- Enhance UI/UX
- Add more features

## License

This project is open source and available for spiritual growth and learning.

## Acknowledgments

Built with love and light for those seeking spiritual guidance and self-discovery.

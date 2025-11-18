# Installation & Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

### For Mobile Testing:
- **Expo Go app** on your iOS or Android device - [iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

### For Emulator Testing (Optional):
- **Android Studio** with Android Emulator - [Download](https://developer.android.com/studio)
- **Xcode** with iOS Simulator (macOS only) - [Download](https://developer.apple.com/xcode/)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/lovemindsoul/docbook.git
cd docbook/esoteric-app
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React Native
- Expo
- React Navigation
- All navigation dependencies

### 3. Start the Development Server

```bash
npm start
```

This will:
- Start the Metro bundler
- Open Expo DevTools in your browser
- Display a QR code for mobile testing

## Running the App

### Option 1: On Your Physical Device (Recommended)

1. Install **Expo Go** app on your iOS or Android device
2. Make sure your device is on the same WiFi network as your computer
3. Scan the QR code displayed in the terminal or browser with:
   - **iOS**: Use the Camera app
   - **Android**: Use the Expo Go app

The app will load on your device within seconds!

### Option 2: On iOS Simulator (macOS only)

```bash
npm run ios
```

This will:
- Open Xcode Simulator
- Build and run the app

### Option 3: On Android Emulator

1. Start Android Studio and launch an emulator
2. Run:

```bash
npm run android
```

The app will build and launch on the emulator.

### Option 4: In Web Browser

```bash
npm run web
```

**Note**: Web support requires additional dependencies. Install them with:

```bash
npx expo install react-dom react-native-web
```

## Troubleshooting

### Issue: "Cannot find module" errors

**Solution**: Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
```

### Issue: Metro bundler errors

**Solution**: Clear the cache and restart:
```bash
npx expo start -c
```

### Issue: App won't load on device

**Solution**: 
- Ensure your computer and device are on the same WiFi network
- Check if firewall is blocking connections
- Try restarting the development server

### Issue: iOS Simulator not opening

**Solution** (macOS only):
- Ensure Xcode is installed
- Run: `sudo xcode-select --switch /Applications/Xcode.app`
- Accept Xcode license: `sudo xcodebuild -license accept`

### Issue: Android emulator errors

**Solution**:
- Ensure Android Studio is properly installed
- Verify ANDROID_HOME environment variable is set
- Start emulator from Android Studio first

## Development Tips

### Hot Reload
- The app automatically reloads when you save changes
- Shake your device (or press Cmd+D on iOS / Cmd+M on Android) to access the dev menu

### Debugging
- Use React Developer Tools in Chrome
- Access logs via the Expo DevTools console
- Use `console.log()` for debugging

### Making Changes

The main files you might want to modify:

- **App.js** - Main app structure and navigation
- **src/screens/** - Individual screen components
- **src/data/** - Tarot cards, zodiac signs, angel numbers data
- **src/utils/** - Utility functions for calculations

After making changes, the app will automatically reload.

## Building for Production

### Expo Build Service (Recommended)

1. Create an Expo account at [expo.dev](https://expo.dev)
2. Login:
```bash
npx expo login
```

3. Build for Android:
```bash
npx expo build:android
```

4. Build for iOS (requires Apple Developer account):
```bash
npx expo build:ios
```

### EAS Build (Modern Approach)

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Configure EAS:
```bash
eas build:configure
```

3. Build:
```bash
eas build --platform android
eas build --platform ios
```

## Testing on Different Screen Sizes

The app is designed to be responsive. Test on:
- Small phones (iPhone SE, 4.7")
- Medium phones (iPhone 12, 6.1")
- Large phones (iPhone 12 Pro Max, 6.7")
- Tablets (iPad, 10.2")

## Next Steps

After successful installation:

1. ✅ Explore the Home screen
2. ✅ Try a Tarot reading with different spreads
3. ✅ Calculate your numerology numbers
4. ✅ Browse zodiac signs in Astrology
5. ✅ Look up angel numbers
6. ✅ Customize the app (colors, content, features)

## Getting Help

- **Expo Documentation**: [docs.expo.dev](https://docs.expo.dev)
- **React Native Documentation**: [reactnative.dev](https://reactnative.dev)
- **React Navigation**: [reactnavigation.org](https://reactnavigation.org)

## Additional Resources

### Learn More About:
- **Tarot**: Understanding card meanings and spreads
- **Numerology**: Pythagorean numerology system
- **Astrology**: Zodiac signs and birth charts
- **Angel Numbers**: Divine number sequences

### Recommended Reading:
- "The Complete Guide to Tarot" for card interpretations
- "The Complete Book of Numerology" by David Phillips
- "The Only Astrology Book You'll Ever Need" by Joanna Martine Woolfolk
- "Angel Numbers" by Kyle Gray

Enjoy your spiritual journey! 🔮✨

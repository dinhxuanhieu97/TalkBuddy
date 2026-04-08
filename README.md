# Talk Buddy App

A React Native + Expo application for English language learning, powered by AI conversation practice and structured lessons.

## 🚀 Tech Stack

- **React Native** - Cross-platform mobile framework
- **Expo SDK 52** - Development platform (compatible with SDK 54)
- **Expo Router** - File-based routing
- **TypeScript** - Type safety
- **EAS** - Expo Application Services for builds and submissions

## 📱 Features

- 🤖 **AI Chat Practice** - Talk with your AI language buddy
- 📚 **Structured Lessons** - Learn grammar, vocabulary, and phrases
- 🎯 **Practice Mode** - Test your knowledge with quizzes
- 📊 **Progress Tracking** - Track your learning journey
- 🏆 **Achievements** - Earn badges as you learn

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- iOS Simulator (macOS) or Android Emulator
- Expo Go app (for physical device testing)

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure environment:**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   Or platform-specific:

   ```bash
   npm run ios      # iOS simulator
   npm run android  # Android emulator
   npm run web      # Web browser
   ```

## 📦 EAS Build & Deployment

### Setup EAS

1. **Login to Expo:**

   ```bash
   npx eas login
   ```

2. **Configure your project:**
   ```bash
   npx eas build:configure
   ```

### Build Commands

```bash
# Development builds
npm run build:android    # Android APK/AAB
npm run build:ios        # iOS IPA

# Preview builds (for testing)
eas build --profile preview --platform ios
eas build --profile preview --platform android

# Production builds
eas build --profile production --platform ios
eas build --profile production --platform android
```

### Submit to App Stores

```bash
# Submit to Play Store
npm run submit:android

# Submit to App Store
npm run submit:ios
```

## 🏗️ Project Structure

```
Talk-Buddy-App/
├── app/                    # Expo Router screens
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Home screen
│   │   ├── learn.tsx      # Lessons screen
│   │   ├── talk.tsx       # AI chat screen
│   │   ├── profile.tsx    # User profile
│   │   └── _layout.tsx    # Tab layout
│   ├── onboarding.tsx     # Onboarding flow
│   ├── practice.tsx       # Practice quiz screen
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 page
├── expo/                  # Expo entry point
│   └── App.tsx
├── components/            # Reusable components
├── constants/             # App constants
├── hooks/                 # Custom React hooks
├── assets/                # Images, audio, fonts
│   ├── images/
│   └── audio/
├── package.json
├── app.json              # Expo configuration
├── eas.json              # EAS build configuration
├── metro.config.js        # Metro bundler config
└── tsconfig.json          # TypeScript configuration
```

## 📝 Configuration Files

### app.json

Expo app configuration including bundle identifiers, plugins, and asset patterns.

### eas.json

EAS build profiles for development, preview, and production environments.

### metro.config.js

Metro bundler configuration for handling additional asset types (SVG, audio).

## 🎨 Customization

### Adding Custom Fonts

1. Place font files in `assets/fonts/`
2. Load fonts in `app/_layout.tsx`:
   ```typescript
   const [loaded] = useFonts({
     "Inter-Regular": require("../assets/fonts/Inter-Regular.otf"),
   });
   ```

### Adding Assets

Place images in `assets/images/` and audio in `assets/audio/`. Reference them using:

```typescript
<Image source={require('../assets/images/icon.png')} />
```

## 🧪 Testing

```bash
# Run tests
npm test

# Lint code
npm run lint
```

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using React Native and Expo.

Lưu ý: Khi deploy production, cần comment out server.url trong capacitor.config.ts và fix Vite build. Hiện tại config này chỉ dùng cho development.

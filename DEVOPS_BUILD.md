# H\u01b0\u1edbng d\u1eabn Build cho DevOps

## T\u1ed5ng quan

D\u1ef1 \u00e1n TalkBuddy l\u00e0 mobile app s\u1eed d\u1ee5ng Expo/EAS \u0111\u1ec3 build cho CH Play v\u00e0 App Store.

## Y\u00eau c\u1ea7u tr\u01b0\u1edbc khi build

### 1. Chu\u1ea9n b\u1ecb Expo Account
- \u0110\u0103ng k\u00fd t\u00e0i kho\u1ea3n Expo: https://expo.dev
- T\u1ea1o organization ho\u1eb7c project
- C\u1eadp nh\u1eadt `app.json`:
  - `extra.eas.projectId`: ID t\u1eeb Expo project
  - `ios.bundleIdentifier`: \u0111\u1ed5i th\u00e0nh bundle ID th\u1ef1c t\u1ebf
  - `android.package`: \u0111\u1ed5i th\u00e0nh package name th\u1ef1c t\u1ebf

### 2. C\u1ea5u h\u00ecnh App Store Connect (iOS)
- Apple Developer Account
- T\u1ea1o App Record tr\u00ean App Store Connect
- C\u1eadp nh\u1eadt `eas.json`:
  - `submit.production.ios.ascAppId`: App Store Connect App ID

### 3. C\u1ea5u h\u00ecnh Google Play (Android)
- Google Play Console account
- T\u1ea1o app tr\u00ean Google Play Console
- T\u1ea1o Service Account v\u00e0 download JSON key
- C\u1eadp nh\u1eadt `eas.json`:
  - `submit.production.android.serviceAccountKeyPath`: \u0111\u01b0\u1eddng d\u1eabn \u0111\u1ebfn JSON key

### 4. Environment Variables
T\u1ea1o file `.env.production` ho\u1eb7c c\u1ea5u h\u00ecnh tr\u00ean EAS:
```
EXPO_PUBLIC_API_URL=your_api_url
EXPO_PUBLIC_TTS_URL=your_tts_url
```

## C\u00e1ch build

### C\u00e1ch 1: S\u1eed d\u1ee5ng EAS Cloud (khuy\u00ean d\u00f9ng)

```bash
# Login v\u00e0o Expo
eas login

# Build Android (APK test)
eas build -p android --profile preview

# Build Android (Production - App Bundle)
eas build -p android --profile production

# Build iOS (Production)
eas build -p ios --profile production
```

### C\u00e1ch 2: S\u1eed d\u1ee5ng Docker (n\u1ebfu server c\u1ea7n build local)

```bash
# Build Docker image
docker build -t talkbuddy-builder ./Talk-Buddy-App

# Ch\u1ea1y container v\u00e0 build
docker run -it -v $(pwd):/app talkbuddy-builder sh
# Trong container:
eas login
eas build -p android --profile production
```

### C\u00e1ch 3: CI/CD GitHub Actions

T\u1ea1o `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Login to Expo
        run: npx expo login -u ${{ secrets.EXPO_USERNAME }} -p ${{ secrets.EXPO_PASSWORD }}

      - name: Build Android
        run: npx eas build -p android --profile production --non-interactive

      - name: Build iOS
        run: npx eas build -p ios --profile production --non-interactive
```

C\u1ea7n c\u1ea5u h\u00ecnh secrets trong GitHub:
- `EXPO_USERNAME`: Email Expo account
- `EXPO_PASSWORD`: Password Expo account
- `EXPO_TOKEN`: EAS access token (t\u1ea1o trong https://expo.dev/settings/access-tokens)

## C\u00e1ch submit l\u00ean store

### Android (Google Play)
```bash
eas submit -p android --profile production
```

### iOS (App Store)
```bash
eas submit -p ios --profile production
```

## Troubleshooting

### L\u1ed7i th\u01b0\u1eddng g\u1eb7p

1. **Bundle ID/ Package name \u0111\u00e3 t\u1ed3n t\u1ea1i**: \u0110\u1ed5i t\u00ean kh\u00e1c trong `app.json`

2. **Thi\u1ebfu credentials**: Ki\u1ec3m tra \u0111\u00e3 login \u0111\u00fang t\u00e0i kho\u1ea3n Expo, Apple, Google ch\u01b0a

3. **Build fail do dependencies**: Ch\u1ea1y `npm ci` thay v\u00ec `npm install`

4. **iOS code signing**: C\u1ea7n c\u1ea5u h\u00ecnh provisioning profile v\u00e0 certificates

## Files c\u1ea7n commit

```
Talk-Buddy-App/
\u251c\u2500\u2500 app.json          # C\u1ea5u h\u00ecnh app
\u251c\u2500\u2500 eas.json          # C\u1ea5u h\u00ecnh EAS build
\u251c\u2500\u2500 package.json      # Dependencies
\u251c\u2500\u2500 package-lock.json # Lock file
\u251c\u2500\u2500 Dockerfile        # Docker build environment
\u251c\u2500\u2500 src/               # Source code
\u251c\u2500\u2500 assets/            # Images, icons
\u251c\u2500\u2500 app/               # Expo Router pages
\u2514\u2500\u2500 .env.example       # Template env variables
```

## Li\u00ean h\u1ec7 h\u1ed7 tr\u1ee3

- Expo Documentation: https://docs.expo.dev
- EAS Build: https://docs.expo.dev/build/introduction

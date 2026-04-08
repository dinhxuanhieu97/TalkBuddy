# TTS Implementation Summary

## Overview
Implemented "Listen to Full Dialogue" feature for mobile app, synchronized with web app architecture using backend TTS API with Expo AV playback.

## Changes Made

### 1. Backend (.NET) - Talk-Buddy-BE

#### New Files
- `Services/TtsService.cs` - Google Cloud TTS synthesis service
- `Controllers/TtsController.cs` - REST API endpoint

#### Modified Files
- `Program.cs` - Registered ITtsService in DI container
- `appsettings.json` - Added GoogleTts config section

#### API Endpoint
```
POST /api/tts/speak
Authorization: Bearer <jwt_token>
Body: { "text": "Hello", "accent": "en-US", "speed": "normal" }
Response: { "success": true, "data": { "audio": "<base64>", "format": "mp3" } }
```

### 2. Mobile App - Talk-Buddy-App

#### Modified Files
- `src/services/TTSService.ts` - Complete rewrite with 3-tier fallback:
  1. **L1 Cache**: AsyncStorage (cached base64 audio)
  2. **L2 Backend**: Call `/api/tts/speak` → Expo AV playback
  3. **L3 Fallback**: expo-speech (device built-in)

- `src/app/components/LearnScreen.tsx`:
  - Added `isPlayingAll`, `playingTurnIndex` state
  - Added `handlePlayAll()` function for sequential playback
  - Added "Listen to Full Dialogue" button
  - Fixed `stopSpeaking()` async calls

- `src/app/components/PracticeMode.tsx` - Fixed async stopSpeaking
- `src/app/components/DictationMode.tsx` - Fixed async stopSpeaking
- `src/app/components/ShadowMode.tsx` - Fixed async stopSpeaking
- `src/app/index.tsx` - Added `configureAudio()` at startup

#### New Dependencies
- `expo-av` - Audio playback

## Configuration Required

### 1. Backend - Google TTS API Key
Add to `Talk-Buddy-BE/appsettings.json`:
```json
"GoogleTts": {
  "ApiKey": "YOUR_GOOGLE_CLOUD_TTS_API_KEY"
}
```
Get key at: Google Cloud Console → APIs → Text-to-Speech API → Credentials

### 2. Mobile - API URL
Ensure `.env` has correct backend URL:
```
VITE_API_URL=http://localhost:5277/api   # Development
# OR
VITE_API_URL=https://your-backend.com/api  # Production
```

## How It Works

### Listen to Full Dialogue Flow
1. User taps "Listen to Full Dialogue" button
2. For each phrase in the context:
   - Check AsyncStorage cache first
   - If not cached, call backend TTS API
   - Play audio using Expo AV
   - Wait for completion
   - 500ms delay between phrases
3. Button shows progress: "Stop 3/15"

### TTS Service Architecture
```
speak(text, options)
  ├── Check cache (AsyncStorage)
  │   └── Return cached audio if found
  ├── Call backend API
  │   ├── Get JWT token
  │   ├── POST /api/tts/speak
  │   ├── Cache response
  │   └── Play with Expo AV
  └── Fallback: expo-speech (offline)
```

## Testing Checklist

- [ ] Backend running on port 5277
- [ ] Google TTS API key configured
- [ ] Mobile app can authenticate (JWT token)
- [ ] "Listen to Full Dialogue" button plays audio
- [ ] Stop button works during playback
- [ ] Fallback to expo-speech works when API unavailable

## Notes

- TTS API requires authentication (JWT token)
- Audio is cached in AsyncStorage for reuse
- expo-speech is fallback for offline mode
- expo-av handles audio playback with proper iOS audio session
- All `stopSpeaking()` calls updated to async/await pattern

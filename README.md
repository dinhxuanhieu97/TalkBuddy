# Talk Buddy App

Ứng dụng di động học tiếng Anh giao tiếp theo tình huống (scene-based), xây dựng bằng **React Native + Expo**. Người học luyện hội thoại theo từng bối cảnh thực tế (sân bay, khách sạn, ngân hàng…), nghe phát âm bằng TTS, luyện nói đuổi (Shadow), nghe – chép (Dictation) và ôn tập theo SRS.

- **iOS bundle ID:** `com.wayjet.talkbuddy`
- **Android package:** `com.talkbuddy.scenario`
- **Phiên bản hiện tại:** xem `expo.version` trong [app.json](app.json)

## Tech stack

| Hạng mục | Thư viện |
| --- | --- |
| Framework | Expo SDK 54, React Native 0.81 (New Architecture), React 19 |
| Routing | Expo Router 6 (thư mục gốc `src/app`) |
| State / data | Zustand, TanStack Query, Axios, Zod |
| Audio | `expo-audio`, `expo-av`, `expo-speech`, `react-native-zip-archive` (gói audio offline) |
| Auth | Email/OTP, Google Sign-In, Apple Sign-In |
| Thanh toán | RevenueCat (có thể tắt bằng `EXPO_PUBLIC_DISABLE_PAYMENTS`) |
| Giám sát | Sentry |
| Đa ngôn ngữ | `src/locales`: en, vi, ja, ko, zh, th, ms |
| Build / phát hành | EAS Build, EAS Submit, EAS Update |
| Test | Jest (`jest-expo`), Playwright (e2e web + API) |

## Tính năng chính

- **Learn** – danh sách chủ đề/scene, tìm kiếm, banner freemium.
- **Practice Mode** – luyện hội thoại theo từng câu trong scene.
- **Shadow Mode** – nghe và nói đuổi, cần quyền micro.
- **Dictation Mode** – nghe và chép lại câu.
- **SOS** – các câu khẩn cấp dùng nhanh.
- **Voice Settings** – chọn giọng (giới tính, accent), tốc độ đọc.
- **Me** – hồ sơ, streak, heatmap luyện tập, mục tiêu hằng ngày, thông báo, gói gia đình, mời bạn bè.
- **Offline** – cache nội dung và audio, đồng bộ lại khi có mạng.

## Bắt đầu

### Yêu cầu

- Node.js 18+ và **Yarn 1.x** (dự án dùng `yarn.lock`, `packageManager: yarn@1.22.22`)
- Xcode (build iOS) và/hoặc Android Studio + JDK 17 (build Android)
- Tài khoản Expo nếu cần build bằng EAS

> App dùng **development build** (`expo-dev-client`) vì có native module (Google Sign-In, RevenueCat, zip archive…), nên **không chạy được trên Expo Go**.

### Cài đặt

```bash
yarn install
cp .env.example .env   # rồi điền các giá trị cần thiết
```

### Chạy app

```bash
yarn ios        # build + chạy trên iOS simulator (expo run:ios)
yarn android    # build + chạy trên Android emulator (expo run:android)
yarn start      # chỉ khởi động Metro cho dev client đã cài sẵn
yarn web        # chạy bản web (dùng cho e2e Playwright)
```

Lần đầu chạy `yarn ios` / `yarn android` sẽ build native, các lần sau chỉ cần `yarn start` nếu không đổi native code. Sau khi sửa `app.json` hoặc thêm native module, chạy lại `yarn prebuild`.

## Biến môi trường

Chỉ các biến có tiền tố `EXPO_PUBLIC_` được nhúng vào bundle. Danh sách đầy đủ nằm trong [.env.example](.env.example); các biến đang được code sử dụng:

| Biến | Mô tả |
| --- | --- |
| `EXPO_PUBLIC_API_URL` | URL backend chính (`talkbuddy_be`) |
| `EXPO_PUBLIC_WEB_API_URL` / `EXPO_PUBLIC_WEB_API_KEY` | API web dùng cho export nội dung, voice match |
| `EXPO_PUBLIC_TTS_URL` / `EXPO_PUBLIC_TTS_API_KEY` | Service TTS (`talkbuddy_tts`) |
| `EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID`, `..._ANDROID_CLIENT_ID`, `..._WEB_CLIENT_ID` | OAuth client cho Google Sign-In |
| `EXPO_PUBLIC_REVENUECAT_IOS_KEY` / `..._ANDROID_KEY` | Khóa RevenueCat |
| `EXPO_PUBLIC_SENTRY_DSN` | DSN Sentry |
| `EXPO_PUBLIC_DEBUG` | Bật log / banner dev |
| `EXPO_PUBLIC_DISABLE_PAYMENTS` | Ẩn toàn bộ tính năng thanh toán (dùng khi review store) |
| `EXPO_PUBLIC_UNLOCK_ALL_SCENES` | Mở khóa toàn bộ scene premium |
| `EXPO_PUBLIC_LOCAL_AUDIO_FIRST` | Ưu tiên audio đóng gói sẵn trước khi gọi TTS |
| `EXPO_PUBLIC_PRIVACY_URL` / `EXPO_PUBLIC_TERMS_URL` | Link chính sách & điều khoản |

Với build EAS, biến môi trường được khai báo theo từng profile trong [eas.json](eas.json) — file `.env` local không được dùng khi build trên cloud.

> Không commit `.env`, keystore hay service account key. Nếu cần chia sẻ, dùng EAS Secrets.

## Cấu trúc thư mục

```
Talk-Buddy-App/
├── src/
│   ├── app/                  # Expo Router: màn hình & layout
│   │   ├── _layout.tsx       # Root layout (providers, Sentry, fonts)
│   │   ├── index.tsx         # Điểm vào: splash → onboarding / login / MainApp
│   │   ├── (tabs)/           # Layout tab
│   │   ├── login.tsx, register.tsx, verify-otp.tsx, forgot-password.tsx, reset-password*.tsx
│   │   └── components/       # Màn hình chính: MainApp, LearnScreen, PracticeMode,
│   │                         # ShadowMode, DictationMode, SosScreen, ProfileScreen, VoiceSettings…
│   ├── components/           # Component dùng chung (Paywall, Streak, Heatmap, Settings…)
│   ├── services/             # Auth, API, TTS, audio cache, offline, sync, SRS
│   ├── stores/               # Zustand stores (user, network, saved phrases)
│   ├── hooks/                # Hook: audio state, voice settings, content sync…
│   ├── lib/                  # api client, i18n, RevenueCat, notifications, logger
│   ├── data/                 # Nội dung scene tích hợp sẵn (fallback offline)
│   ├── data-en-en/           # Bộ scene tiếng Anh – tiếng Anh
│   ├── locales/              # Bản dịch giao diện
│   ├── types/                # Kiểu dữ liệu dùng chung
│   └── __tests__/            # Unit test Jest
├── assets/                   # Icon, splash, ảnh, audio
├── e2e/                      # Test Playwright (auth, api, voice-match)
├── scripts/                  # Seed nội dung, sync từ export, build AAB
├── translation/              # Glossary & báo cáo dịch
├── docs/                     # Tài liệu chi tiết (xem bên dưới)
├── android/, ios/            # Native project (sinh bởi `expo prebuild`)
├── app.json                  # Cấu hình Expo
└── eas.json                  # Profile build/submit EAS
```

Alias import: `@/` trỏ tới `src/` (cấu hình trong [babel.config.js](babel.config.js) và [tsconfig.json](tsconfig.json)).

## Kiểm thử

```bash
yarn test       # Jest (watch mode)
yarn lint       # ESLint (eslint-config-expo)

# E2E trên bản web – tự khởi động `expo start --web` ở cổng 8081
npx playwright test

# Test API voice match – cần mạng và WEB_API_KEY
npx playwright test --config playwright.voice.config.ts
```

## Nội dung (scene)

Các script trong `scripts/` dùng để đẩy nội dung lên backend:

```bash
yarn seed:airport                   # seed riêng scene sân bay
yarn seed:all                       # seed toàn bộ scene trong src/data
npx tsx scripts/sync-from-export.ts [category...]   # sync từ web export API sang backend
```

Các script đọc `API_URL` (mặc định `http://localhost:5277`) và `SEED_KEY` từ biến môi trường — đặt giá trị phù hợp trước khi chạy với môi trường khác local.

## Build & phát hành

Profile trong [eas.json](eas.json):

| Profile | Mục đích |
| --- | --- |
| `development` | Dev client, phân phối nội bộ |
| `development-simulator` | Dev client cho iOS simulator |
| `preview` | Bản test nội bộ (Android APK) |
| `preview-play-store` | AAB lên Play Store, mở khóa scene, tắt thanh toán |
| `preview-app-store` | Bản store cho TestFlight |
| `production` | Bản phát hành, tự tăng build number |

```bash
eas build --profile production --platform ios
eas build --profile production --platform android

yarn submit:ios
yarn submit:android
```

`appVersionSource` là `remote`, nên build number/versionCode do EAS quản lý. Quy trình build chi tiết (kể cả build local bằng Xcode / Gradle) xem trong [DEVOPS_BUILD.md](DEVOPS_BUILD.md) và [docs/XCODE_BUILD.md](docs/XCODE_BUILD.md).

## Tài liệu liên quan

- [DEVOPS_BUILD.md](DEVOPS_BUILD.md) – hướng dẫn build & submit
- [docs/XCODE_BUILD.md](docs/XCODE_BUILD.md) – build iOS bằng Xcode
- [REVIEWER_NOTES.md](REVIEWER_NOTES.md) – ghi chú cho App Store reviewer
- [SUBSCRIPTION_GUIDE.md](SUBSCRIPTION_GUIDE.md) – gói đăng ký & RevenueCat
- [TTS_IMPLEMENTATION.md](TTS_IMPLEMENTATION.md) – tích hợp TTS
- [ADMIN_SETUP.md](ADMIN_SETUP.md) – thiết lập admin
- [docs/MOBILE_SYNC_API_GUIDE.md](docs/MOBILE_SYNC_API_GUIDE.md) – API đồng bộ nội dung
- [docs/Flow-reset-password.md](docs/Flow-reset-password.md) – luồng quên mật khẩu
- [docs/ME_TAB_DEVELOPMENT.md](docs/ME_TAB_DEVELOPMENT.md) – tab Me
- [design-system.md](design-system.md) – design system
- [Monorepo-Setup-Workflow.md](Monorepo-Setup-Workflow.md) – thiết lập cùng các repo khác (`talkbuddy_be`, `talkbuddy_tts`)

## License

Private & proprietary.

# 🎯 Subscription & Credit System - User Guide

## ✅ Đã triển khai thành công

### 1. Zustand Store với AsyncStorage Persistence
**File:** `src/stores/userStore.ts`

**Features:**
- ✅ User state management (user, subscription, credits, stats, preferences)
- ✅ AsyncStorage auto-persistence
- ✅ TypeScript fully typed
- ✅ Family plan support

**Usage:**
```typescript
import { useUserStore } from '../stores/userStore';

// Get data
const credits = useUserStore((state) => state.credits);
const subscription = useUserStore((state) => state.subscription);

// Update data
const addCredits = useUserStore((state) => state.addCredits);
addCredits(100); // Add 100 credits
```

---

### 2. Credit System UI
**Files:**
- `src/components/CreditBalance.tsx` - Credit balance card
- `src/components/CreditShop.tsx` - Credit shop with 4 packs

**Features:**
- ✅ Display current credit balance
- ✅ Subscription tier badge (FREE/PRO/FAMILY)
- ✅ 4 credit packs:
  - Starter: 50 credits - $0.99
  - Standard: 200 credits - $3.59 (Save 10%)
  - Value: 500 credits - $7.99 (Save 20%)
  - Premium: 1000 credits - $14.99 (Save 25%)

**How to use:**
1. Open ProfileScreen
2. Click on "Credit Balance" card
3. Select a credit pack
4. Confirm purchase
5. Credits added to your account

---

### 3. Subscription Plans
**File:** `src/components/SubscriptionPlans.tsx`

**Plans:**

| Feature | Free | Pro ($2.99/mo) | Family ($6.99/mo) |
|---------|------|----------------|-------------------|
| Phrases | First 3 per category | All 650+ | All 650+ |
| Difficulty | Basic only | Basic + Intermediate | All levels |
| AI Features | ❌ | ✅ (with credits) | ✅ (with credits) |
| Cloud Sync | ❌ | ✅ | ✅ |
| Saved Phrases | 30 | 500 | Unlimited |
| Family Members | 1 | 1 | Up to 5 |
| Shared Credits | ❌ | ❌ | ✅ |
| Ad-free | ❌ | ✅ | ✅ |

**How to use:**
1. Open ProfileScreen
2. Click on "Subscription" setting
3. View all plans
4. Select Monthly or Yearly
5. Confirm subscription

---

## 🧪 Testing Guide

### Test 1: Credit Balance Display
1. Open app → Go to Profile tab
2. ✅ Should see "Credit Balance" card showing:
   - Current credits (default: 0)
   - Subscription badge (default: FREE)
   - Click to open shop

### Test 2: Buy Credits
1. Click on Credit Balance card
2. Credit Shop modal opens
3. Select any pack (e.g., Standard - 200 credits)
4. Confirm purchase
5. ✅ Credits should be added
6. Close modal
7. ✅ Balance should update on Profile screen

### Test 3: Change Subscription
1. Click on "Subscription" in Account section
2. Subscription Plans modal opens
3. Current plan should be highlighted
4. Select "Pro" → Click "Monthly"
5. Confirm subscription
6. ✅ Subscription badge should change to "PRO"
7. ✅ "Subscription" value should show "Pro Plan"

### Test 4: Data Persistence
1. Make changes (add credits, change subscription)
2. Close app completely
3. Reopen app
4. ✅ All data should be preserved (AsyncStorage)

---

## 🔧 Configuration

### RevenueCat Setup (Required for real purchases)

1. **Create RevenueCat Account:**
   - Go to https://app.revenuecat.com
   - Create new project

2. **Get API Keys:**
   - iOS: Project Settings → API Keys → iOS
   - Android: Project Settings → API Keys → Android

3. **Update .env file:**
```bash
VITE_REVENUECAT_IOS_KEY=your-ios-api-key-here
VITE_REVENUECAT_ANDROID_KEY=your-android-api-key-here
```

4. **Configure Products in RevenueCat:**
   - Create entitlements: `pro`, `family`
   - Create packages:
     - `pro_monthly` - $2.99/month
     - `pro_yearly` - $22.99/year
     - `family_monthly` - $6.99/month
     - `family_yearly` - $52.99/year

5. **Initialize in app:**
```typescript
import { initRevenueCat } from './lib/revenuecat';

// In App.tsx or index.tsx
useEffect(() => {
  initRevenueCat();
}, []);
```

---

## 📱 ProfileScreen Integration

**Current Features:**
- ✅ Credit Balance card (clickable)
- ✅ Subscription setting (clickable)
- ✅ Stats from Zustand store
- ✅ Credit Shop modal
- ✅ Subscription Plans modal

**User Flow:**
```
ProfileScreen
├── Credit Balance Card → Click → Credit Shop Modal
├── Stats (from Zustand)
├── Account Settings
│   ├── Edit Profile (TODO)
│   └── Subscription → Click → Subscription Plans Modal
├── Preferences
│   ├── Notifications (toggle)
│   ├── Dark Mode (toggle)
│   └── Auto-play Audio (toggle)
└── Upgrade Banner (TODO: Link to Subscription)
```

---

## 🎨 UI Components

### CreditBalance
```typescript
<CreditBalance onPress={() => setShowCreditShop(true)} />
```

### CreditShop
```typescript
<Modal visible={showCreditShop}>
  <CreditShop />
</Modal>
```

### SubscriptionPlans
```typescript
<Modal visible={showSubscriptionPlans}>
  <SubscriptionPlans />
</Modal>
```

---

## 🚀 Next Steps

### Phase 2 - Premium Features (Recommended)
1. **Family Plan Manager**
   - Invite members by email
   - View member usage
   - Manage family credits pool

2. **Analytics Dashboard**
   - Learning progress charts
   - Streak calendar
   - Time spent analytics

3. **Push Notifications**
   - Daily reminders
   - Streak alerts
   - Credit low warnings

4. **Biometric Auth**
   - Face ID / Touch ID
   - Secure app access

### Phase 3 - Advanced Features
1. **Offline Mode**
   - Download phrases for offline use
   - Sync when online

2. **Achievement System**
   - Badges and rewards
   - Gamification

3. **Social Features**
   - Share progress
   - Leaderboards

---

## 📊 Credit Usage (from PRD)

| Action | Credits | Description |
|--------|---------|-------------|
| Speak for Me | 1 | AI translation |
| Pronunciation Check | 2 | Speech evaluation |
| Word Lookup | 2 | AI dictionary |
| AI Conversation | 4 | Chat with AI (per turn) |
| Scene Generate | 7 | Custom scenario |

**Free Actions (No credits):**
- Browse phrases
- Read text
- Play pre-recorded audio
- SRS review
- Daily streak
- Save phrases

---

## ✅ Checklist

- [x] Zustand store setup
- [x] AsyncStorage persistence
- [x] Credit Balance UI
- [x] Credit Shop UI
- [x] Subscription Plans UI
- [x] ProfileScreen integration
- [x] RevenueCat integration
- [x] Modal navigation
- [x] State management
- [ ] RevenueCat API keys configuration (User action required)
- [ ] Test on real device
- [ ] Test real purchases (Sandbox)

---

## 🐛 Troubleshooting

**Issue: Credits not persisting**
- Check AsyncStorage permissions
- Clear app data and restart

**Issue: Subscription not updating**
- Check RevenueCat configuration
- Verify API keys in .env

**Issue: Modal not opening**
- Check state management
- Verify imports

**Issue: TypeScript errors**
- Run `npm install`
- Check import paths

---

## 📝 Notes

- All prices are in USD (can be configured for other currencies)
- Credits never expire
- Subscriptions auto-renew unless canceled
- Family plan shares credits among all members
- Free plan has limited features but no time limit

---

**Last Updated:** 2026-03-25
**Version:** 1.0.0

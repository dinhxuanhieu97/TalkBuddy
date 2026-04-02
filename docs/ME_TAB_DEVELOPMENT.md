# Phân tích & Đề xuất phát triển Tab "Me" cho Mobile App

## 📊 Phân tích Tab "Me" từ Web App

### Các tính năng hiện có trên Web App:

| # | Tính năng | Mô tả | Mức độ ưu tiên |
|---|-----------|-------|----------------|
| 1 | **User Menu** | Account/login với inline edit, member badge | Cao |
| 2 | **Subscription & Pricing** | Hiển thị gói subscription | Cao |
| 3 | **Usage Dashboard** | Dashboard sử dụng AI hàng ngày | Cao |
| 4 | **Daily Goal Ring** | Vòng tròn mục tiêu hàng ngày | Cao |
| 5 | **Stats Overview** | Streak, ngày học, câu đã thuộc, tổng từ | Cao |
| 6 | **Mastery Overview** | Thanh trạng thái mastery | Cao |
| 7 | **Achievement Badges** | Huy hiệu hoàn thành scenes | Trung bình |
| 8 | **SRS Buckets** | Visualize Spaced Repetition | Trung bình |
| 9 | **Practice Heatmap** | Lịch sử luyện tập | Cao |
| 10 | **Quick Access** | Saved, Vocabulary, Learning Plan | Cao |
| 11 | **Referral Card** | Mời bạn bè | Thấp |
| 12 | **Travel Countdown** | Đếm ngày đến chuyến đi | Thấp |
| 13 | **Emergency Cards** | Thẻ cứu hộ | Thấp |
| 14 | **Settings** | Voice settings, Language, Reminders | Cao |
| 15 | **Support Tickets** | Hỗ trợ | Trung bình |
| 16 | **About** | Thông tin app | Thấp |
| 17 | **Logout** | Đăng xuất | Cao |

---

## 📱 Mobile App - Tab "Me" (Profile) hiện tại

### Tính năng đã có:

| # | Tính năng | Trạng thái |
|---|-----------|------------|
| 1 | **User Info** | ✅ Có |
| 2 | **Stats** | ✅ Có (Phrases, Streak, Time) |
| 3 | **Subscription** | ✅ Có |
| 4 | **Family Plan** | ✅ Có |
| 5 | **Settings** | ✅ Có (Notifications, Dark Mode, Auto-play, Language) |
| 6 | **My Saved** | ✅ Có |
| 7 | **Learning History** | ⚠️ Cần cải thiện |
| 8 | **Daily Goals** | ⚠️ Cần cải thiện |
| 9 | **Credit Shop** | ✅ Có |
| 10 | **Analytics** | ✅ Có |
| 11 | **Edit Profile** | ✅ Có |
| 12 | **Support/Help** | ⚠️ Cần thêm |

---

## 🎯 Đề xuất phát triển cho Mobile App "Me" Tab

### 🔴 Ưu tiên cao (MVP - Phase 1)

#### 1. Daily Goal Ring - Vòng tròn mục tiêu hàng ngày
- **Layout:** Card ngang với ring bên trái, text bên phải
- **Thiết kế:** 
  - Ring progress arc (track + fill)
  - Hiển thị phút đã học / mục tiêu 10 phút
  - Badge pills cho streak & phrases
  - ✅ icon khi hoàn thành mục tiêu
- **Thao tác:** Tap để xem chi tiết mục tiêu
- **Tông báo:** Toast khi đạt mục tiêu

#### 2. Streak Display - Hiển thị streak nổi bật
- **Layout:** Card đôi với divider giữa
- **Thiết kế:**
  - Left: Streak số + emoji (⚡ → 🔥 → 🔥🔥)
  - Right: Stats grid (Phrases, Total Time)
  - Milestone progress bar (3 → 7 → 14 → 30 → 60 ngày)
  - Dot indicators cho các mốc đã đạt
- **Thao tác:** Tap milestone để xem phần thưởng
- **Thông báo:** Badge khi đạt mốc mới

#### 3. Mastery Progress - Thanh tiến độ mastery
- **Layout:** Card dọc với progress bar
- **Thiết kế:**
  - Score circle với màu theo level (Beginner → Mastered)
  - Stacked bar chart phân bổ 5 levels
  - Legend rõ ràng với màu sắc
- **Levels:**
  - Beginner (0-24%) - Đỏ
  - Learning (25-49%) - Cam
  - Familiar (50-74%) - Vàng
  - Proficient (75-89%) - Xanh lá
  - Mastered (90-100%) - Tím
- **Thao tác:** Tap vào level để xem phrases tương ứng

#### 4. Practice Heatmap - Lịch luyện tập theo ngày
- **Layout:** Card calendar grid
- **Thiết kế:**
  - 10 tuần × 7 ngày calendar grid
  - 4 levels màu vàng (trắng → vàng đậm)
  - Month labels + day-of-week labels
  - Legend "Less / More"
- **Thao tác:** Tap vào ô để xem chi tiết ngày đó
- **Thông báo:** Hiển thị "X of Y days active"

#### 5. Quick Access Cards - Saved, Vocabulary, Plan
- **Layout:** List cards dọc
- **Thiết kế:**
  - 3 cards: Saved Phrases, Vocabulary, Learning Plan
  - Badge count vàng hiển thị số lượng
  - Icon riêng cho mỗi card
  - Chevron indicator
- **Thao tác:** 
  - Tap → mở đúng modal/screen
  - Swipe để xóa (Saved phrases)

---

### 🟡 Ưu tiên trung bình (Phase 2)

#### 6. Achievement Badges - Huy hiệu thành tựu
- Badge system cho các milestone:
  - First Phrase
  - 7-Day Streak
  - 50 Phrases Mastered
  - Scene Completion badges
- Grid layout 3×3

#### 7. Travel Countdown - Đếm ngày đi
- Card ngang với:
  - Ngày đếm ngược
  - Destination name
  - Emergency phrases quick access

#### 8. Emergency Cards - Thẻ cứu hộ
- Grid 2×2 các thẻ:
  - Airport
  - Hotel
  - Hospital
  - Restaurant
- Tap để mở nhanh phrases

#### 9. Referral System - Mời bạn bè
- Card ngang với:
  - Share button
  - Referral code
  - Rewards display

#### 10. Support Tickets - Hỗ trợ
- List các ticket đã tạo
- Create new ticket button
- Status indicators

---

### 🟢 Ưu tiên thấp (Phase 3)

#### 11. SRS Buckets - Spaced Repetition
- Visualize 4 buckets: New, Learning, Review, Mastered
- Bar chart hoặc pie chart

#### 12. Voice Settings
- Accent selection (US/UK/AU)
- Speed control (Slow/Normal/Fast)
- Voice gender (Male/Female)

#### 13. Reminder Settings
- Daily reminder time picker
- Push notification toggle
- Weekend skip option

#### 14. About Section
- App version
- Terms of Service
- Privacy Policy
- Credits

---

## 🎨 Design System nhất quán

### Colors
```
Accent:       #FFD600 (vàng chính)
Dark:         #1C1C1E (text chính)
Background:   #F9F9F9 (nền)
Card:         #FFFFFF (cards)
Border:       #E0E0E0 (viền)
Muted:        #9E9E9E (text phụ)
```

### Typography
```
Title:        15-18px, font-weight: 700
Subtitle:     13-14px, font-weight: 600
Body:         14px, font-weight: 400
Caption:      11-12px, font-weight: 500
```

### Spacing & Radius
```
Card radius:  20px
Small radius: 12px
Padding:      16-20px horizontal
Gap:          12-16px giữa các elements
```

### Shadows
```
Card shadow:  shadowOpacity: 0.06, shadowRadius: 8
Small shadow: shadowOpacity: 0.04, shadowRadius: 4
```

### Touch Feedback
```
Active opacity: 0.7
Scale feedback: active:scale-95
Ripple effect:  React Native ripple
```

---

## 📋 Action Plan

### Phase 1: Core Stats (1-2 tuần)
- [x] Daily Goal Ring
- [x] Streak Display
- [x] Mastery Progress
- [x] Practice Heatmap
- [x] Quick Access Cards

### Phase 2: Engagement (2-3 tuần)
- [ ] Achievement Badges
- [ ] Travel Countdown
- [ ] Emergency Cards
- [ ] Referral System
- [ ] Support Tickets

### Phase 3: Advanced (3-5 tuần)
- [ ] SRS Buckets
- [ ] Voice Settings
- [ ] Reminder Settings
- [ ] About Section

---

## 📱 Luồng người dùng (User Flow)

```
User mở Tab "Me"
    ↓
Xem Daily Goal Ring → Tap để cài đặt mục tiêu
    ↓
Xem Streak Display → Tap milestone để xem phần thưởng
    ↓
Xem Mastery Progress → Tap level để lọc phrases
    ↓
Xem Practice Heatmap → Tap ngày để xem chi tiết
    ↓
Quick Access Cards → Tap để mở Saved/Vocabulary/Plan
    ↓
Settings/Logout ở cuối
```

---

## 🔧 Các files đã tạo

| File | Path | Mô tả |
|------|------|-------|
| DailyGoalRing.tsx | `src/components/DailyGoalRing.tsx` | Vòng tròn mục tiêu hàng ngày |
| StreakDisplay.tsx | `src/components/StreakDisplay.tsx` | Hiển thị streak với milestones |
| MasteryProgress.tsx | `src/components/MasteryProgress.tsx` | Thanh tiến độ mastery |
| PracticeHeatmap.tsx | `src/components/PracticeHeatmap.tsx` | Lịch luyện tập |
| QuickAccessCards.tsx | `src/components/QuickAccessCards.tsx` | Quick access cards |

---

## 📝 Các files đã cập nhật

| File | Path | Thay đổi |
|------|------|----------|
| ProfileScreen.tsx | `src/app/components/ProfileScreen.tsx` | Thêm 5 components mới |
| MainApp.tsx | `src/app/components/MainApp.tsx` | Đổi tab "Profile" → "Me" |

---

## ✅ Kết quả

Tab "Me" mới đã được tích hợp với:
- ✅ 5 components chính với đầy đủ UI/UX
- ✅ Design system nhất quán
- ✅ Touch interactions tốt
- ✅ Responsive và smooth animations
- ✅ Đổi tên tab phù hợp với web app

---

*Ngày cập nhật: 31/03/2026*
*Dự án: TalkBuddy Mobile App*

# Tài Khoản Test - Development Mode

## App Store Review - Tài Khoản Test

| Field        | Value             |
| ------------ | ----------------- |
| **Email**    | `test1@gmail.com` |
| **Password** | `testt1@123`      |

---

## 🎯 Tài Khoản Sẵn Sàng Sử Dụng

Vì app đang chạy ở **Development Mode** (không cần Supabase), bạn có thể đăng nhập với **BẤT KỲ** email và password nào!

### **Cách Sử Dụng:**

#### **Option 1: Tài Khoản Test Đề Xuất**

| Field        | Value                |
| ------------ | -------------------- |
| **Email**    | `test@talkbuddy.app` |
| **Password** | `123456`             |
| **Name**     | `Test User`          |

#### **Option 2: Tài Khoản Admin (Khi Có Supabase)**

| Field        | Value                 |
| ------------ | --------------------- |
| **Email**    | `admin@talkbuddy.app` |
| **Password** | `talkbuddy@123`       |
| **Tier**     | Max (full access)     |

#### **Option 3: Tạo Tài Khoản Bất Kỳ**

Bạn có thể nhập **BẤT KỲ** email/password nào:

- Email: `anything@example.com`
- Password: `anything`

App sẽ tự động tạo mock user và cho phép bạn đăng nhập!

---

## 🚀 Hướng Dẫn Đăng Nhập

### **Bước 1: Mở App**

- App đang chạy trên Expo
- Mở trên simulator hoặc điện thoại

### **Bước 2: Nhập Thông Tin**

```
Email: test@talkbuddy.app
Password: 123456
```

### **Bước 3: Nhấn "Sign In"**

- App sẽ tạo mock user
- Tự động đăng nhập
- Chuyển đến màn hình chính

---

## 📱 Tính Năng Hoạt Động

### **✅ Đã Hoạt Động:**

- Login/Register screens
- Email/Password authentication (mock)
- Navigation giữa các screens
- UI/UX đầy đủ
- Development status indicator

### **⏳ Cần Supabase Để Hoạt Động:**

- Google OAuth login
- Real-time data sync
- User profile persistence
- Learning progress tracking
- Streak system

---

## 🔧 Development Mode Features

### **Mock Authentication:**

- Tự động tạo user khi login
- Không cần database
- Không cần backend
- Perfect cho UI testing

### **User Data:**

```javascript
{
  id: "dev-user-1234567890",
  email: "test@talkbuddy.app",
  name: "test",
  provider: "email"
}
```

---

## 💡 Tips

1. **Bất kỳ email/password nào cũng work** trong dev mode
2. **Không cần nhớ password** - chỉ cần nhập bất kỳ gì
3. **Data không persist** - refresh app sẽ mất data
4. **Perfect cho testing UI** và user flows

---

## 🎯 Quick Start

**Cách nhanh nhất:**

1. Mở app
2. Nhập: `test@talkbuddy.app` / `123456`
3. Nhấn "Sign In"
4. ✅ Done!

**Hoặc đơn giản hơn:**

1. Nhập bất kỳ email nào
2. Nhập bất kỳ password nào
3. Nhấn "Sign In"
4. ✅ Done!

---

**App sẵn sàng sử dụng ngay! 🎉**

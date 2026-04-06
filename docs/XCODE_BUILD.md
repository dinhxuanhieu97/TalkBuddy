# Hướng Dẫn Chạy TalkBuddy App

## Mục Lục
1. [Chạy Development (Live Reload)](#1-chạy-development-live-reload)
2. [Chạy Production Build](#2-chạy-production-build)
3. [Xử Lý Lỗi Thường Gặp](#3-xử-lý-lỗi-thường-gặp)

---

## 1. Chạy Development (Live Reload)

### Bước 1: Kiểm tra IP máy
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}'
```
Lưu lại IP (ví dụ: `192.168.1.126`)

### Bước 2: Cấu hình Capacitor
Kiểm tra file `capacitor.config.ts` có cấu hình đúng:
```typescript
server: {
  androidScheme: "https",
  url: "http://<YOUR_IP>:5173",
  cleartext: true,
},
```
Thay `<YOUR_IP>` bằng IP máy của bạn.

### Bước 3: Sync Capacitor
```bash
npx cap sync ios
```

### Bước 4: Khởi động Vite dev server
```bash
npm run dev
```
Server sẽ chạy tại `http://localhost:5173`

### Bước 5: Chạy trên Xcode
1. Mở Xcode
2. File → Open → `ios/App/App.xcworkspace`
3. Chọn thiết bị (iPhone simulator hoặc device)
4. Bấm Run (⌘R)

**Kết quả:** App sẽ load từ Vite dev server với hot reload - mượt như Expo!

---

## 2. Chạy Production Build

### Bước 1: Tắt live reload
Sửa `capacitor.config.ts`:
```typescript
server: {
  androidScheme: "https",
  // URL và cleartext đã được comment/remove
},
```

### Bước 2: Build web assets
```bash
npm run build
```

### Bước 3: Sync Capacitor
```bash
npx cap sync ios
```

### Bước 4: Build trên Xcode
1. Mở `ios/App/App.xcworkspace` trong Xcode
2. Chọn thiết bị (iPhone simulator hoặc device)
3. Product → Build (⌘B)
4. Sau khi build thành công, chạy Run (⌘R)

**Lưu ý:** Production build sẽ load từ thư mục `dist/`, không có live reload.

---

## 3. Xử Lý Lỗi Thường Gặp

### Lỗi: WebView không load được
- Đảm bảo Vite dev server đang chạy (`npm run dev`)
- Kiểm tra IP trong `capacitor.config.ts` đúng với máy
- Đảm bảo máy tính và iPhone cùng mạng WiFi

### Lỗi: "Supabase not configured"
- Kiểm tra file `.env` có `VITE_SUPABASE_URL` và `VITE_SUPABASE_ANON_KEY`
- Khởi động lại Vite server sau khi thay đổi .env

### Lỗi: Module resolution error
- Xóa thư mục `node_modules/.vite/`
- Chạy lại `npm run dev`

### Lỗi: Xcode không mở được workspace
- Đảm bảo đang mở file `.xcworkspace` (không phải `.xcodeproj`)

### Lỗi: Build thất bại với JSX errors
- Đảm bảo `vite.config.ts` có cấu hình:
```typescript
rollupOptions: {
  moduleTypes: {
    ".js": "jsx",
  },
},
```

---

## Lệnh Tắt

| Mục đích | Lệnh |
|----------|------|
| Chạy dev server | `npm run dev` |
| Sync iOS | `npx cap sync ios` |
| Build production | `npm run build && npx cap sync ios` |
| Mở Xcode | `open ios/App/App.xcworkspace` |

---

## Cấu Hình Môi Trường

Tạo file `.env` trong thư mục gốc:
```env
# Supabase (bắt buộc để login hoạt động)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Các biến khác (tùy chọn)
VITE_API_URL=https://talkbuddy.wayjet.io
VITE_TTS_URL=http://localhost:8001
```

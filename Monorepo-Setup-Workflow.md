# Role: Senior Full-stack Architect & Mobile Expert

# Context:

Dự án TalkBuddy - Ứng dụng học tiếng Anh cho người đi nước ngoài.
Cấu trúc Monorepo hiện tại:

1. `/talkbuddy-team`: Web App Next.js 15 (Đã Go-live, chạy localhost:3000).
2. `/Talk-Buddy-BE`: Backend API .NET/C# (Cung cấp dữ liệu, Auth, Credits).
3. `/Talk-Buddy-App`: Mobile App Expo/React Native (Đang phát triển, dùng Capacitor bridge).

# Goal:

Hợp nhất (Merge) logic từ Web sang Mobile App, đảm bảo dùng chung Backend và Database PostgreSQL.

# Task Sequence (Thứ tự thực hiện):

## Bước 1: Thông luồng Backend (Folder: /Talk-Buddy-BE)

- Kiểm tra và cấu hình CORS trong `Program.cs` để cho phép `http://localhost:5173` (Mobile dev) và `capacitor://localhost`.
- Xác minh các API Endpoint cho Auth, 13 nhóm tình huống và hệ thống Credit.

## Bước 2: Thiết lập Môi trường App (Folder: /Talk-Buddy-App)

- Cấu hình file `.env` trỏ `VITE_API_URL` về Backend API Hub.
- Đồng bộ hóa các Type/Interface từ bản Web sang App để nhất quán dữ liệu.

## Bước 3: Đóng gói Native (Folder: /Talk-Buddy-App)

- Chạy `npx cap sync` để đồng bộ code UI vào folder `/android` và `/ios`.
- Cấu hình Safe Area và LinearGradient background cho Root Layout (đã thảo luận).

## Bước 4: Logic Học tập & Đồng bộ

- Đấu nối hệ thống lặp lại ngắt quãng SM-2 và đồng bộ tiến trình học tập lên Backend.
- Tích hợp tính năng SOS và AI Conversation dùng chung logic với bản Web.

# Execution Rules:

1. KHÔNG được thay đổi mã nguồn trong `/talkbuddy-team` (Web đã Go-live) trừ khi cần lấy mẫu code.
2. Luôn ưu tiên tính ổn định của Database hiện tại.
3. Tự động chạy `npx cap sync` sau mỗi lần thay đổi UI quan trọng trong App.
4. Tuân thủ file PRD-vi.md để đặt tên biến và tính năng.

Hãy xác nhận bạn đã hiểu cấu trúc 3 folder này và sẵn sàng bắt đầu với Bước 1.

# Flow-reset-password.md

## Mục tiêu hiện tại (Simplified)

Chỉ triển khai luồng **Forgot Password** đơn giản:

1. User nhập email đã đăng ký
2. Backend gửi mã xác minh (OTP) qua email
3. User nhập OTP để xác minh
4. User đặt lại mật khẩu mới

---

## Luồng hiện tại (Phase 1 - Đang triển khai)

```
Login → ForgotPasswordScreen → (Backend gửi OTP) → VerifyOTP → ResetPassword → Success → Login
```

### Chi tiết:

1. **ForgotPasswordScreen**: Nhập email → Gửi request OTP
2. **VerifyOTP**: Nhập mã OTP từ email → Xác minh
3. **ResetPassword**: Nhập mật khẩu mới → Đặt lại
4. **Success**: Thông báo thành công → Quay về Login

---

## Backend API Requirements

### Endpoint 1: Gửi mã OTP
```
POST /api/auth/forgot-password/request
Body: { "email": "user@example.com" }
Response: { "success": true, "message": "Đã gửi mã xác minh" }
```

### Endpoint 2: Xác minh OTP
```
POST /api/auth/forgot-password/verify
Body: { "email": "user@example.com", "otp": "123456" }
Response: { "success": true, "resetToken": "xxx" }
```

### Endpoint 3: Đặt lại mật khẩu
```
POST /api/auth/forgot-password/reset
Body: { "resetToken": "xxx", "newPassword": "NewPass@123" }
Response: { "success": true, "message": "Đặt lại mật khẩu thành công" }
```

---

## Frontend Screens cần tạo

1. `ForgotPasswordScreen.tsx` - Đã có, cần cập nhật
2. `VerifyOtpScreen.tsx` - Cần tạo mới
3. `ResetPasswordScreen.tsx` - Cần tạo mới
4. `ResetPasswordSuccessScreen.tsx` - Cần tạo mới

---

## Ghi chú

- Hiện tại backend chưa có các endpoints trên (trả về 404)
- Cần implement backend trước khi frontend hoàn chỉnh
- Sử dụng design system hiện có của app

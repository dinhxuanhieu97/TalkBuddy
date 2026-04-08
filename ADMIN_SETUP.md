# Admin Account Setup Guide

## 📋 Admin Account Details

| Field             | Value                   |
| ----------------- | ----------------------- |
| **Email**         | `admin@talkbuddy.app`   |
| **Password**      | `talkbuddy@123`         |
| **Name**          | `TalkBuddy Admin`       |
| **Subscription**  | `max` (full access)     |
| **Referral Code** | `ADMIN2024`             |
| **User ID**       | `admin-user-uuid-12345` |

## 🚀 Setup Instructions

### 1. Create Admin Account in Supabase

1. **Go to Supabase Dashboard** → **SQL Editor**
2. **Copy & paste** contents of `create-admin-account.sql`
3. **Run the SQL** to create admin account
4. **Verify creation** with the verification queries at the bottom

### 2. Set Admin Password

**Password:** `talkbuddy@123`

**Option A: SQL Script (Recommended)**

1. **Run** `set-admin-password.sql` in Supabase SQL Editor
2. **Verify** password was set with the verification query

**Option B: Supabase Dashboard**

1. Go to **Authentication** → **Users**
2. Find `admin@talkbuddy.app`
3. Click **Reset Password**
4. Enter: `talkbuddy@123`
5. **Save**

### 3. Test Admin Login

1. **Open the mobile app**
2. **Login with:**
   - Email: `admin@talkbuddy.app`
   - Password: `talkbuddy@123`
3. **Verify admin features:**
   - Max subscription tier
   - All phrases unlocked
   - High mastery levels
   - Admin referral code

## 🔧 Admin Features

### **Subscription Benefits:**

- ✅ **Max tier** access to all features
- ✅ **Unlimited AI conversations**
- ✅ **All phrase packs unlocked**
- ✅ **Premium voice options**
- ✅ **Advanced analytics**

### **Pre-loaded Data:**

- **1000 total phrases** with high mastery
- **365-day streak** for testing
- **Sample learning progress** across categories
- **Saved phrases** for quick access
- **Daily usage stats** for analytics

### **Test Scenarios:**

1. **Learning Progress:** Test SRS algorithm
2. **Streak System:** Test daily streak logic
3. **Analytics:** Verify stats calculation
4. **Sync:** Test real-time data sync
5. **Premium Features:** Test max-tier benefits

## 🛡️ Security Notes

### **Important:**

- **Change default password** immediately
- **Use strong password** (12+ chars, mixed case, symbols)
- **Enable 2FA** if available
- **Limit admin access** to development/testing

### **Production Considerations:**

- Remove admin account before production
- Or change to real admin email
- Update referral code if needed
- Review admin permissions

## 📊 Admin Dashboard (Future)

When ready, you can extend this admin account with:

```sql
-- Add admin role flag
ALTER TABLE users ADD COLUMN is_admin BOOLEAN DEFAULT false;
UPDATE users SET is_admin = true WHERE email = 'admin@talkbuddy.app';

-- Add admin permissions table
CREATE TABLE admin_permissions (
  user_id UUID REFERENCES users(id),
  permission TEXT NOT NULL,
  granted_at TIMESTAMP DEFAULT NOW()
);

-- Grant permissions
INSERT INTO admin_permissions (user_id, permission)
VALUES ('admin-user-uuid-12345', 'all_access');
```

## 🧪 Testing Checklist

- [ ] Login with admin credentials
- [ ] Verify max subscription tier
- [ ] Check phrase access (1000 phrases)
- [ ] Test streak system (365 days)
- [ ] Verify saved phrases (5 items)
- [ ] Check daily usage stats
- [ ] Test real-time sync
- [ ] Verify referral code works
- [ ] Test all premium features

## 🔍 Troubleshooting

### **Login Issues:**

- Check password reset in Supabase Auth
- Verify user exists in users table
- Check email verification status

### **Data Issues:**

- Run verification queries in SQL
- Check user ID consistency
- Verify foreign key relationships

### **Performance:**

- Monitor query performance
- Check indexes are properly created
- Verify RLS policies don't block admin

---

**Admin account ready for testing! 🎉**

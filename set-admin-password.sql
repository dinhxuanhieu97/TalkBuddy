-- ============================================================
-- Set Admin Password for TalkBuddy App
-- ============================================================

-- Update admin user password in Supabase Auth
-- Password: talkbuddy@123
-- This will hash the password securely using bcrypt

-- Method 1: Direct password update (recommended)
UPDATE auth.users 
SET encrypted_password = crypt('talkbuddy@123', gen_salt('bf'))
WHERE email = 'admin@talkbuddy.app';

-- Method 2: Using Supabase reset token (alternative)
-- First, generate a reset token for the admin user
-- Then use it to set the password via the client

-- Verify the password was set
SELECT 
  id,
  email,
  created_at,
  updated_at,
  -- Note: We can't see the actual password hash for security
  CASE 
    WHEN encrypted_password IS NOT NULL THEN 'Password Set ✓'
    ELSE 'Password Not Set ✗'
  END as password_status
FROM auth.users 
WHERE email = 'admin@talkbuddy.app';

-- ============================================================
-- Alternative: Use Supabase Dashboard Method
-- ============================================================

/*
If the SQL method doesn't work, use the Supabase Dashboard:

1. Go to Supabase Dashboard
2. Navigate to Authentication → Users
3. Find user: admin@talkbuddy.app
4. Click "Reset Password"
5. Enter: talkbuddy@123
6. Save

This is the most reliable method for setting passwords.
*/

-- ============================================================
-- Test Login Verification
-- ============================================================

-- After setting the password, you can test login with:
-- Email: admin@talkbuddy.app
-- Password: talkbuddy@123

-- The login should work in the mobile app once Supabase is configured

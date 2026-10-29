-- ============================================================
-- Create Admin Account for TalkBuddy App
-- ============================================================

-- Insert admin user with elevated permissions
INSERT INTO users (
  id,
  email,
  name,
  locale,
  accent,
  speed,
  subscription_tier,
  referral_code,
  created_at,
  updated_at
) VALUES (
  'admin-user-uuid-12345',
  'admin@talkbuddy.app',
  'TalkBuddy Admin',
  'en',
  'en-US',
  'normal',
  'max', -- Admin gets max subscription tier
  'ADMIN2024', -- Admin referral code
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  subscription_tier = 'max',
  referral_code = 'ADMIN2024',
  updated_at = NOW();

-- Initialize admin user stats
INSERT INTO user_stats (
  user_id,
  total_phrases,
  mastered_phrases,
  avg_mastery,
  updated_at
) VALUES (
  'admin-user-uuid-12345',
  1000, -- Admin has access to all phrases
  800,  -- High mastery level
  85.0, -- Average mastery percentage
  NOW()
) ON CONFLICT (user_id) DO UPDATE SET
  total_phrases = 1000,
  mastered_phrases = 800,
  avg_mastery = 85.0,
  updated_at = NOW();

-- Initialize admin user streak
INSERT INTO user_streaks (
  user_id,
  current_streak,
  longest_streak,
  total_days,
  today_phrase_count,
  last_active_date
) VALUES (
  'admin-user-uuid-12345',
  365,  -- 1 year streak
  365,  -- Longest streak = current
  365,  -- Total active days
  10,   -- Phrases practiced today
  TO_CHAR(NOW(), 'YYYY-MM-DD')
) ON CONFLICT (user_id) DO UPDATE SET
  current_streak = 365,
  longest_streak = 365,
  total_days = 365,
  today_phrase_count = 10,
  last_active_date = TO_CHAR(NOW(), 'YYYY-MM-DD');

-- Create some sample learning progress for admin
INSERT INTO learning_progress (
  user_id,
  phrase_key,
  mastery,
  read_count,
  dictation_score,
  shadowing_score,
  listening_score,
  srs_interval,
  srs_ease_factor,
  srs_next_review,
  srs_repetitions,
  last_practiced,
  created_at,
  updated_at
) 
SELECT 
  'admin-user-uuid-12345',
  phrase_key,
  95, -- High mastery for admin
  10, -- Multiple reads
  90, -- High scores
  92,
  88,
  30, -- Long SRS interval
  2.8, -- High ease factor
  NOW() + INTERVAL '30 days', -- Next review far in future
  5, -- Multiple repetitions
  NOW() - INTERVAL '1 hour', -- Recently practiced
  NOW(),
  NOW()
FROM (SELECT 
  unnest(ARRAY[
    'airport-checkin-0',
    'airport-security-0', 
    'airport-gate-0',
    'hotel-checkin-0',
    'hotel-room-service-0',
    'restaurant-order-0',
    'restaurant-payment-0',
    'taxi-destination-0',
    'emergency-hospital-0',
    'shopping-clothes-0'
  ]) as phrase_key
) sample_phrases
ON CONFLICT (user_id, phrase_key) DO UPDATE SET
  mastery = 95,
  read_count = 10,
  dictation_score = 90,
  shadowing_score = 92,
  listening_score = 88,
  srs_interval = 30,
  srs_ease_factor = 2.8,
  srs_repetitions = 5,
  last_practiced = NOW() - INTERVAL '1 hour',
  updated_at = NOW();

-- Create some saved phrases for admin
INSERT INTO saved_phrases (
  user_id,
  phrase_key,
  created_at
) 
SELECT 
  'admin-user-uuid-12345',
  phrase_key,
  NOW()
FROM (SELECT 
  unnest(ARRAY[
    'airport-checkin-0',
    'emergency-hospital-0', 
    'restaurant-order-0',
    'taxi-destination-0',
    'hotel-checkin-0'
  ]) as phrase_key
) saved_phrases
ON CONFLICT (user_id, phrase_key) DO NOTHING;

-- Create sample daily usage for admin
INSERT INTO daily_usage (
  user_id,
  date,
  pronunciation_count,
  ai_conversation_count,
  speak_for_me_count,
  word_lookup_count,
  scene_generate_count
) VALUES (
  'admin-user-uuid-12345',
  TO_CHAR(NOW(), 'YYYY-MM-DD'),
  50,  -- High usage
  25,
  15,
  30,
  10
) ON CONFLICT (user_id, date) DO UPDATE SET
  pronunciation_count = 50,
  ai_conversation_count = 25,
  speak_for_me_count = 15,
  word_lookup_count = 30,
  scene_generate_count = 10;

-- ============================================================
-- Verification Queries (Run these to verify admin account)
-- ============================================================

-- Check admin user
SELECT id, email, name, subscription_tier, referral_code, created_at 
FROM users 
WHERE email = 'admin@talkbuddy.app';

-- Check admin stats
SELECT * FROM user_stats WHERE user_id = 'admin-user-uuid-12345';

-- Check admin streak
SELECT * FROM user_streaks WHERE user_id = 'admin-user-uuid-12345';

-- Check sample learning progress
SELECT phrase_key, mastery, read_count, last_practiced 
FROM learning_progress 
WHERE user_id = 'admin-user-uuid-12345' 
LIMIT 10;

-- Check saved phrases
SELECT phrase_key, created_at 
FROM saved_phrases 
WHERE user_id = 'admin-user-uuid-12345';

-- Check daily usage
SELECT date, pronunciation_count, ai_conversation_count 
FROM daily_usage 
WHERE user_id = 'admin-user-uuid-12345'
ORDER BY date DESC
LIMIT 7;

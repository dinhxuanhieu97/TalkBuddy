-- ============================================================
-- TalkBuddy Database Schema for Supabase
-- Based on web app Prisma schema
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- User & Auth Tables
-- ============================================================

-- Users table (matches web app schema)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE,
  email_verified TIMESTAMP WITH TIME ZONE,
  name TEXT,
  image TEXT,
  password_hash TEXT,

  -- Settings
  locale TEXT DEFAULT 'zh',
  accent TEXT DEFAULT 'en-US',
  speed TEXT DEFAULT 'normal',
  my_voice_gender TEXT, -- male | female (Max tier only)

  -- Subscription
  subscription_tier TEXT DEFAULT 'free', -- free | pro | max
  stripe_customer_id TEXT UNIQUE,
  stripe_sub_id TEXT UNIQUE,
  subscription_ends_at TIMESTAMP WITH TIME ZONE,
  trip_boost_ends_at TIMESTAMP WITH TIME ZONE, -- one-time 7-day Max trial

  -- IAP (In-App Purchase) — Apple / Google
  iap_store TEXT, -- APP_STORE | PLAY_STORE
  iap_product_id TEXT, -- RevenueCat product ID

  -- Referral
  referral_code TEXT UNIQUE,
  referred_by TEXT, -- referral code of inviter

  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Accounts table (for OAuth providers)
CREATE TABLE IF NOT EXISTS accounts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  provider TEXT NOT NULL,
  provider_account_id TEXT NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at INTEGER,
  token_type TEXT,
  scope TEXT,
  id_token TEXT,
  session_state TEXT,

  UNIQUE(provider, provider_account_id)
);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_token TEXT UNIQUE NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Verification tokens
CREATE TABLE IF NOT EXISTS verification_tokens (
  identifier TEXT NOT NULL,
  token TEXT NOT NULL,
  expires TIMESTAMP WITH TIME ZONE NOT NULL,

  UNIQUE(identifier, token)
);

-- ============================================================
-- Learning Data Tables
-- ============================================================

-- Learning Progress
CREATE TABLE IF NOT EXISTS learning_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  phrase_key TEXT NOT NULL, -- e.g., "airport-checkin-0"

  -- Mastery tracking
  mastery INTEGER DEFAULT 0, -- 0-100
  read_count INTEGER DEFAULT 0,

  -- Exercise scores
  dictation_score INTEGER,
  shadowing_score INTEGER,
  listening_score INTEGER,

  -- SRS fields
  srs_interval INTEGER DEFAULT 1,
  srs_ease_factor REAL DEFAULT 2.5,
  srs_next_review TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  srs_repetitions INTEGER DEFAULT 0,

  -- Timestamps
  last_practiced TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  UNIQUE(user_id, phrase_key)
);

-- Saved Phrases
CREATE TABLE IF NOT EXISTS saved_phrases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  phrase_key TEXT NOT NULL, -- e.g., "airport-checkin-0"

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  UNIQUE(user_id, phrase_key)
);

-- User Streaks
CREATE TABLE IF NOT EXISTS user_streaks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  total_days INTEGER DEFAULT 0,
  today_phrase_count INTEGER DEFAULT 0,
  last_active_date TEXT -- "YYYY-MM-DD"
);

-- User Stats (Computed fields for fast profile queries)
CREATE TABLE IF NOT EXISTS user_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,

  -- Progress stats (computed from LearningProgress)
  total_phrases INTEGER DEFAULT 0,
  mastered_phrases INTEGER DEFAULT 0,
  avg_mastery REAL DEFAULT 0,

  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================
-- Usage Tracking Tables
-- ============================================================

-- Daily Usage
CREATE TABLE IF NOT EXISTS daily_usage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date TEXT NOT NULL, -- "YYYY-MM-DD"

  -- Daily counters
  pronunciation_count INTEGER DEFAULT 0,
  ai_conversation_count INTEGER DEFAULT 0,
  speak_for_me_count INTEGER DEFAULT 0,
  word_lookup_count INTEGER DEFAULT 0,
  scene_generate_count INTEGER DEFAULT 0,

  UNIQUE(user_id, date)
);

-- Referrals
CREATE TABLE IF NOT EXISTS referrals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  referrer_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  referred_email TEXT NOT NULL,
  referred_user_id UUID REFERENCES users(id),
  status TEXT DEFAULT 'pending', -- pending | activated | paid
  bonus_days_granted INTEGER DEFAULT 0, -- days rewarded to referrer
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  activated_at TIMESTAMP WITH TIME ZONE, -- when invitee hit learning threshold
  referrer_ip TEXT, -- anti-abuse: track signup IP
  referred_ip TEXT, -- anti-abuse: track invitee IP

  UNIQUE(referrer_user_id, referred_email)
);

-- ============================================================
-- Cache Tables (for TTS and word lookups)
-- ============================================================

-- TTS Cache
CREATE TABLE IF NOT EXISTS tts_cache (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cache_key TEXT UNIQUE NOT NULL, -- hash of text+accent+speed
  audio_data BYTEA NOT NULL, -- binary audio
  metadata JSONB, -- word timestamps etc

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Word Cache
CREATE TABLE IF NOT EXISTS word_cache (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  word TEXT UNIQUE NOT NULL,
  response JSONB NOT NULL, -- full word lookup response

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- ============================================================
-- Indexes for Performance
-- ============================================================

-- Users
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_subscription_tier ON users(subscription_tier);
CREATE INDEX IF NOT EXISTS idx_users_referral_code ON users(referral_code);

-- Learning Progress
CREATE INDEX IF NOT EXISTS idx_learning_progress_user_id ON learning_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_learning_progress_phrase_key ON learning_progress(phrase_key);
CREATE INDEX IF NOT EXISTS idx_learning_progress_user_next_review ON learning_progress(user_id, srs_next_review);
CREATE INDEX IF NOT EXISTS idx_learning_progress_user_mastery ON learning_progress(user_id, mastery);

-- Saved Phrases
CREATE INDEX IF NOT EXISTS idx_saved_phrases_user_id ON saved_phrases(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_phrases_phrase_key ON saved_phrases(phrase_key);

-- Daily Usage
CREATE INDEX IF NOT EXISTS idx_daily_usage_user_id ON daily_usage(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_usage_date ON daily_usage(date);

-- Referrals
CREATE INDEX IF NOT EXISTS idx_referrals_referrer_user_id ON referrals(referrer_user_id);
CREATE INDEX IF NOT EXISTS idx_referrals_status ON referrals(status);

-- Cache
CREATE INDEX IF NOT EXISTS idx_tts_cache_expires_at ON tts_cache(expires_at);
CREATE INDEX IF NOT EXISTS idx_word_cache_expires_at ON word_cache(expires_at);

-- ============================================================
-- Row Level Security (RLS) Policies
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_phrases ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (auth.uid()::text = id::text);
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid()::text = id::text);
CREATE POLICY "Users can insert own profile" ON users FOR INSERT WITH CHECK (auth.uid()::text = id::text);

-- Learning progress policies
CREATE POLICY "Users can view own progress" ON learning_progress FOR SELECT USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can update own progress" ON learning_progress FOR UPDATE USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can insert own progress" ON learning_progress FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Saved phrases policies
CREATE POLICY "Users can view own saved phrases" ON saved_phrases FOR SELECT USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can manage own saved phrases" ON saved_phrases FOR ALL USING (auth.uid()::text = user_id::text);

-- User streaks policies
CREATE POLICY "Users can view own streaks" ON user_streaks FOR SELECT USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can update own streaks" ON user_streaks FOR UPDATE USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can insert own streaks" ON user_streaks FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- User stats policies
CREATE POLICY "Users can view own stats" ON user_stats FOR SELECT USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can update own stats" ON user_stats FOR UPDATE USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can insert own stats" ON user_stats FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Daily usage policies
CREATE POLICY "Users can view own usage" ON daily_usage FOR SELECT USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can update own usage" ON daily_usage FOR UPDATE USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can insert own usage" ON daily_usage FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Referrals policies (users can view referrals they created)
CREATE POLICY "Users can view own referrals" ON referrals FOR SELECT USING (auth.uid()::text = referrer_user_id::text);
CREATE POLICY "Users can create referrals" ON referrals FOR INSERT WITH CHECK (auth.uid()::text = referrer_user_id::text);

-- ============================================================
-- Triggers and Functions
-- ============================================================

-- Update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_learning_progress_updated_at BEFORE UPDATE ON learning_progress FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_user_stats_updated_at BEFORE UPDATE ON user_stats FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update user stats when learning progress changes
CREATE OR REPLACE FUNCTION update_user_stats_on_progress_change()
RETURNS TRIGGER AS $$
BEGIN
    -- Update user stats based on learning progress
    UPDATE user_stats SET
        total_phrases = (SELECT COUNT(*) FROM learning_progress WHERE user_id = NEW.user_id),
        mastered_phrases = (SELECT COUNT(*) FROM learning_progress WHERE user_id = NEW.user_id AND mastery >= 80),
        avg_mastery = (SELECT COALESCE(AVG(mastery), 0) FROM learning_progress WHERE user_id = NEW.user_id),
        updated_at = NOW()
    WHERE user_id = NEW.user_id;
    
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply stats update trigger
CREATE TRIGGER update_user_stats_on_progress_change_trigger
    AFTER INSERT OR UPDATE OR DELETE ON learning_progress
    FOR EACH ROW EXECUTE FUNCTION update_user_stats_on_progress_change();

-- ============================================================
-- Initial Data (Optional)
-- ============================================================

-- Create a function to initialize user stats when a new user is created
CREATE OR REPLACE FUNCTION initialize_user_stats()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO user_stats (user_id, total_phrases, mastered_phrases, avg_mastery)
    VALUES (NEW.id, 0, 0, 0);
    
    INSERT INTO user_streaks (user_id, current_streak, longest_streak, total_days, today_phrase_count)
    VALUES (NEW.id, 0, 0, 0, 0);
    
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply initialization trigger
CREATE TRIGGER initialize_user_stats_trigger
    AFTER INSERT ON users
    FOR EACH ROW EXECUTE FUNCTION initialize_user_stats();

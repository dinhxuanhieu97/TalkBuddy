# Supabase Database Setup Guide

## 📋 Prerequisites
- Supabase account (https://supabase.com)
- TalkBuddy project created in Supabase

## 🚀 Quick Setup Steps

### 1. Create Supabase Project
1. Go to https://supabase.com
2. Click "New Project"
3. Choose organization
4. Name project: `talkbuddy-mobile`
5. Set database password (save it!)
6. Choose region (closest to your users)
7. Click "Create new project"

### 2. Get Credentials
1. Go to Project Settings > API
2. Copy these values:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** → `VITE_SUPABASE_ANON_KEY`

### 3. Run SQL Schema
1. Go to SQL Editor in Supabase dashboard
2. Copy contents of `supabase-schema.sql`
3. Paste and run the SQL
4. Wait for completion (should take < 30 seconds)

### 4. Configure Environment Variables
Add to your `.env` file:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 5. Enable Authentication
1. Go to Authentication > Settings
2. Enable "Enable email confirm"
3. Set site URL: `exp://192.168.1.34:8081` (for development)
4. Add redirect URLs:
   - `exp://192.168.1.34:8081`
   - `talkbuddy://` (for production)

### 6. Configure Google OAuth (Optional)
1. Go to Authentication > Providers
2. Enable Google provider
3. Add Google Client ID and Secret
4. Save configuration

## 🧪 Test the Setup

### Test Database Connection
Run the sync test screen:
1. Open app
2. Navigate to `/sync-test` (if accessible)
3. Click "Run All Tests"
4. Check results for ✅ success messages

### Test Tables Created
In Supabase SQL Editor, run:
```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
```

Expected tables:
- users
- accounts
- sessions
- learning_progress
- saved_phrases
- user_streaks
- user_stats
- daily_usage
- referrals
- tts_cache
- word_cache

## 🔧 Common Issues & Solutions

### Issue: "Relation does not exist"
**Solution:** Make sure you ran the complete schema SQL

### Issue: "Permission denied"
**Solution:** Check RLS policies are correctly set

### Issue: "Connection timeout"
**Solution:** Verify your Supabase URL and keys are correct

### Issue: "Row Level Security violation"
**Solution:** Make sure user is authenticated before accessing data

## 📱 Mobile App Integration

### Real-time Subscriptions
The schema includes real-time subscriptions for:
- Learning progress updates
- User streak changes
- Profile updates

### Offline Support
Supabase automatically handles:
- Offline caching
- Sync when connection restored
- Conflict resolution

## 🔄 Sync with Web App

The schema matches exactly with the web app's Prisma schema, ensuring:
- Perfect data compatibility
- No sync conflicts
- Real-time updates across platforms

## 🚀 Next Steps

1. **Test basic CRUD operations**
2. **Implement authentication flow**
3. **Add real-time features**
4. **Test offline behavior**
5. **Deploy to production**

## 📞 Support

If you encounter issues:
1. Check Supabase logs
2. Verify environment variables
3. Test with SQL Editor first
4. Check network connectivity

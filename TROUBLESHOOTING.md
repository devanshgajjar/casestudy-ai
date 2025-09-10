# 🔧 Deployment Troubleshooting Guide

## 🚨 Getting 404 Errors? Here's How to Fix Them

### Step 1: Check Your Environment Variables

In your deployment platform (Vercel/Netlify/Railway), ensure you have:

```env
DATABASE_URL=postgresql://postgres:password@host:5432/database
NEXTAUTH_URL=https://your-app-domain.com
NEXTAUTH_SECRET=generate-32-random-characters
OPENAI_API_KEY=your-openai-api-key
```

### Step 2: Set Up Database (If Not Done)

**Using Supabase (Free):**
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Settings → Database → Connection String
4. Copy the PostgreSQL URL

**Using Neon (Free):**
1. Go to [neon.tech](https://neon.tech)
2. Create project
3. Copy connection string

### Step 3: Run Database Migrations

In your deployment platform's terminal/console:
```bash
npx prisma migrate deploy
```

### Step 4: Common Error Fixes

**❌ Error: "Module not found"**
- Solution: Make sure `npm install` ran successfully
- Check: Deployment logs for any failed installations

**❌ Error: "Database connection failed"**
- Solution: Verify DATABASE_URL is correct
- Check: Database is accessible from your deployment region

**❌ Error: "NextAuth configuration error"**
- Solution: Ensure NEXTAUTH_URL matches your deployed domain
- Check: NEXTAUTH_SECRET is set and is 32+ characters

**❌ Error: "404 on all routes"**
- Solution: Check your deployment platform is set to Next.js
- Check: Build command is `npm run build`
- Check: Start command is `npm start`

### Step 5: Vercel Specific Fixes

If using Vercel:
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add all required variables
4. Redeploy (Deployments tab → Redeploy)

### Step 6: Test Locally First

Before deploying, test locally with production database:
```bash
# Set your production DATABASE_URL in .env.local
npm run build
npm start
```

## 🆘 Still Having Issues?

1. Check deployment logs for specific error messages
2. Verify your domain/URL is correctly set
3. Make sure your GitHub repository has the latest code
4. Try a fresh deployment from scratch

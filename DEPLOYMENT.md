# 🚀 Deployment Guide for CaseStudy.AI

## 📋 Prerequisites

1. **GitHub Account**: For hosting your code
2. **Cloud Database**: PostgreSQL (Supabase, Neon, or Railway)
3. **Deployment Platform**: Vercel, Netlify, or Railway
4. **Domain**: Your GoDaddy domain

## 🗄️ Step 1: Set Up Cloud Database

### Option A: Supabase (Recommended - Free tier available)

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string (starts with `postgresql://`)

### Option B: Neon (Great performance)

1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string

### Option C: Railway (Easy setup)

1. Go to [railway.app](https://railway.app)
2. Create a PostgreSQL database
3. Copy the connection string

## 🔧 Step 2: Environment Variables

Create these environment variables in your deployment platform:

```env
DATABASE_URL="postgresql://your-connection-string"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="generate-a-random-32-character-string"
OPENAI_API_KEY="your-openai-api-key"
```

## 🌐 Step 3: Deploy to Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy!

## 🔗 Step 4: Connect to GoDaddy Domain

1. In GoDaddy DNS settings, add a CNAME record:
   - Name: `@` or `www`
   - Value: Your Vercel deployment URL
2. In Vercel, add your custom domain

## 🛠️ Database Migration

After deployment, run this command to set up your database:

```bash
npx prisma migrate deploy
```

## 🔐 Security Notes

- Never commit `.env` files to GitHub
- Use strong, random secrets for NEXTAUTH_SECRET
- Enable HTTPS for production

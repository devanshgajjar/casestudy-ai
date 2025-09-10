# 🎨 CaseStudy.AI

**AI-Powered Case Studies That Win Jobs**

Transform simple answers into professional case studies. Get hired faster with AI-generated portfolios that showcase your impact.

## ✨ Features

### 🤖 AI Case Study Generator
- **Simple Q&A interface** - No design expertise needed
- **AI-powered narrative generation** - Professional storytelling
- **Professional markdown output** - Industry-standard format
- **Industry templates** - UI/UX/Social specializations

### 🌟 Curated Portfolio Showcase
- **AI-generated marketing headlines** - Personal branding
- **Personalized value propositions** - Tailored messaging
- **Shareable portfolio links** - Easy client/employer sharing
- **Professional case study gallery** - Polished presentation

### 🔐 User Authentication
- **Secure email/password authentication**
- **User-specific case studies**
- **Protected dashboard and case study routes**
- **Session management with NextAuth.js**

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI GPT-4
- **Deployment**: Vercel-ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/casestudy-ai.git
   cd casestudy-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   DATABASE_URL="postgresql://username:password@hostname:port/database"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   OPENAI_API_KEY="your-openai-api-key"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see your app!

## 📱 Usage

1. **Sign up** for a new account
2. **Choose a template** (UI Design, UX Research, Social Media)
3. **Answer simple questions** about your project
4. **Generate AI content** with one click
5. **Publish and share** your professional case study

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📄 API Routes

- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/signin` - Sign in user
- `GET /api/case-studies` - Get user's case studies
- `POST /api/case-studies` - Create new case study
- `GET /api/case-studies/[id]` - Get specific case study
- `PATCH /api/case-studies/[id]` - Update case study
- `POST /api/case-studies/[id]/ai-draft` - Generate AI content
- `GET /api/public/case-studies` - Get published case studies
- `GET /api/public/marketing/[designer]` - Get personalized marketing content

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for GPT-4 API
- **Vercel** for hosting platform
- **Prisma** for database toolkit
- **NextAuth.js** for authentication

---

**Built with ❤️ for designers who want to showcase their impact**
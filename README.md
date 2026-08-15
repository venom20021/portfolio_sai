# Sai Prabhat - Portfolio Website

A modern, responsive portfolio website showcasing the professional journey and technical expertise of Sai Prabhat, a product-driven software engineer. Includes an **AI Code Mentor** — an in-site chat assistant powered by Groq's Llama 3.3 70B.

**Live site:** [sai-prabhat.vercel.app](https://sai-prabhat.vercel.app)

## 🚀 Features

- **AI Code Mentor** — Real-time AI chat assistant (Llama 3.3 70B via Groq) for code questions and project walkthroughs, with streaming responses and suggested prompts
- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS v4, Framer Motion
- **Beautiful UI/UX**: Elegant design with smooth scroll animations, tilt cards, click particles, and a custom cursor
- **Responsive**: Optimized for all device sizes, with expensive visual effects disabled on touch devices for performance
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **SEO Optimized**: Includes sitemap, robots.txt, and OpenGraph tags
- **Performance**: Optimized loading, image optimization via `next/image`, and code splitting

## 📁 Projects

- **BARQ — Voice-Controlled AI Desktop Assistant** — Voice-first AI desktop assistant combining wake word detection, local LLM inference (Ollama), Deepgram voice pipeline, knowledge graphs, and job search automation. ([GitHub](https://github.com/venom20021/B.A.R.Q-AI))
- **Real-time Collaborative Whiteboard** — Multi-user whiteboard with conflict-free sync via Yjs CRDTs and Socket.io, persisted to PostgreSQL/SQLite. ([Live demo](https://real-time-collaborative-whiteboard.vercel.app) · [GitHub](https://github.com/venom20021/real_time_collaborative_whiteboard))
- **ML Predictive Pipeline**, **High-Throughput Analytics Platform**, **Scalable E-Commerce Architecture** — Cloud architecture and data engineering showcases.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **AI**: AI SDK 6.0 + Groq (Llama 3.3 70B) for the AI Code Mentor
- **UI**: Custom components with Radix UI primitives, Lucide icons, Framer Motion animations
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner
- **Theme**: Next Themes
- **Resume**: react-pdf / pdfjs-dist viewer
- **Testing**: Vitest
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx / page.tsx
│   ├── about/
│   ├── ai-mentor/
│   ├── contact/
│   ├── experience/
│   ├── projects/
│   │   └── [id]/          # Project detail pages
│   ├── skills/
│   ├── api/
│   │   ├── ai-mentor/     # Groq streaming endpoint
│   │   └── contact/       # Resend email endpoint
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ai-mentor-chat.tsx # AI Code Mentor UI
│   ├── hero.tsx, navbar.tsx, footer.tsx, stats.tsx, skills.tsx
│   ├── project-card.tsx, projects-grid.tsx, tilt-card.tsx
│   ├── scroll-reveal.tsx, mouse-beam.tsx, custom-cursor.tsx
│   ├── click-particles.tsx, animated-gradient.tsx
│   └── resume-viewer.tsx
├── lib/
│   ├── projects-data.ts   # Project data (BARQ, whiteboard, etc.)
│   └── convert-messages.ts
├── public/
│   ├── projects/          # Project screenshots
│   └── sai-prabhat-resume.pdf
├── middleware.ts
├── vitest.config.ts
└── .eslintrc.json
```

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/venom20021/Personal_Portfolio.git
cd Personal_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see `.env.example`):
```bash
cp .env.example .env.local
```

## ▶️ Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Building for Production

```bash
npm run build      # production build
npm run start      # preview the production build
npm run lint       # ESLint (next/core-web-vitals)
npm test           # Vitest
```

## 🚀 Deployment

Deployed on the [Vercel Platform](https://vercel.com) from the creators of Next.js.

1. Push your code to a Git repository (GitHub)
2. Import the project into Vercel
3. Vercel automatically detects Next.js and configures the build
4. Deploy!

Or deploy manually with the Vercel CLI:

```bash
vercel --prod
```

## 📄 Environment Variables

| Variable | Purpose |
|---|---|
| `GROQ_API_KEY` | API key for the AI Code Mentor (Llama 3.3 70B via Groq). Get a free key at [console.groq.com/keys](https://console.groq.com/keys) |
| `RESEND_API_KEY` | API key for the contact form email delivery via [Resend](https://resend.com) |

## 🎨 Design Decisions

- **Color Scheme**: Professional blue primary color with gray neutrals
- **Typography**: Clean, modern sans-serif for excellent readability
- **Spacing**: Consistent 8px grid system
- **Animations**: Subtle, purposeful motions that enhance rather than distract
- **Performance**: Lazy loading of images, code splitting, optimized bundles, and reduced effects on mobile

## 🔧 Development Guidelines

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Configured with `next/core-web-vitals`
- **Component Architecture**: Server Components by default, Client Components only when needed
- **Styling**: Utility-first with Tailwind CSS, using CSS variables for theming

## 👏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [AI SDK](https://ai-sdk.dev/)
- [Groq](https://groq.com/)
- [Lucide Icons](https://lucide.dev/)
- [Resend](https://resend.com/)
- [Vercel](https://vercel.com/)

---

**Built with ❤️ by Sai Prabhat - Product-driven Software Engineer**

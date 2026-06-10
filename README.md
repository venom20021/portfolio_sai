# Sai Prabhat - Portfolio Website

A modern, responsive portfolio website showcasing the professional journey and technical expertise of Sai Prabhat, a product-driven software engineer.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, Tailwind CSS v4, and shadcn/ui
- **Beautiful UI/UX**: Elegant design with smooth animations using Framer Motion
- **Responsive**: Optimized for all device sizes
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Accessible**: Follows WCAG guidelines
- **SEO Optimized**: Includes sitemap, robots.txt, and OpenGraph tags
- **Performance**: Optimized loading and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner
- **Theme**: Next Themes
- **Deployment**: Vercel

## 📁 Project Structure

```
personal-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── experience/
│   ├── projects/
│   ├── skills/
│   └── contact/
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── project-card.tsx
│   ├── skills.tsx
│   ├── stats.tsx
│   ├── timeline.tsx
│   ├── skill-category.tsx
│   └── cta-section.tsx
├── public/
│   ├── favicon.ico
│   ├── og.png
│   ├── sai-prabhat-resume.pdf
│   └── projects/
├── styles/
│   └── globals.css
├── middleware.ts
├── sitemap.ts
└── robots.ts
```

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sai-prabhat-portfolio.git
cd sai-prabhat-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

## ▶️ Running Locally

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

To preview the production build locally:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project into Vercel
3. Vercel will automatically detect it's a Next.js project and configure the build settings
4. Deploy!

Alternatively, you can deploy manually:

```bash
npm run build
vercel deploy
```

## 📄 Environment Variables

This project doesn't require any special environment variables for basic functionality. However, if you want to add email functionality to the contact form in the future, you might need:

- `EMAIL_SERVICE_PROVIDER` (e.g., SendGrid, Mailgun, etc.)
- `EMAIL_API_KEY`
- `FROM_EMAIL_ADDRESS`

## 🎨 Design Decisions

- **Color Scheme**: Professional blue primary color with gray neutrals
- **Typography**: Clean, modern sans-serif for excellent readability
- **Spacing**: Consistent 8px grid system
- **Animations**: Subtle, purposeful motions that enhance rather than distract
- **Components**: Reusable, accessible components from shadcn/ui
- **Performance**: Lazy loading of images, code splitting, optimized bundles

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: ≥ 640px
- Desktop: ≥ 1024px
- Large Desktop: ≥ 1280px

## 🔧 Development Guidelines

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Configured with Next.js recommended rules
- **Component Architecture**: Server Components by default, Client Components only when needed
- **Styling**: Utility-first with Tailwind CSS, using CSS variables for theming
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/)

---

**Built with ❤️ by Sai Prabhat - Product-driven Software Engineer**
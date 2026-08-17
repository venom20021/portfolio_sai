import './global.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AnimatedLayout from '@/components/animated-layout';
import Starfield from '@/components/starfield';
import MouseBeam from '@/components/mouse-beam';
import CustomCursor from '@/components/custom-cursor';
import ClickParticles from '@/components/click-particles';
import AIMentorButton from '@/components/ai-mentor-button';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://saiprabhat.vercel.app';
const siteTitle =
  'Sai Prabhat — Full-Stack Software Engineer | .NET, AWS & Scalable Systems';
const siteDescription =
  'Sai Prabhat is a full-stack software engineer specializing in .NET, AWS cloud architecture, and building scalable systems that drive real impact — bringing a teacher\u2019s clarity from instructing at National Public Inter College.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Sai Prabhat',
  },
  description: siteDescription,
  keywords: [
    'Sai Prabhat',
    'full-stack software engineer',
    '.NET developer',
    'AWS cloud architect',
    'scalable systems',
    'React developer',
    'TypeScript',
    'portfolio',
    'software engineer portfolio',
    'cloud certification',
  ],
  authors: [{ name: 'Sai Prabhat', url: siteUrl }],
  creator: 'Sai Prabhat',
  publisher: 'Sai Prabhat',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Sai Prabhat Portfolio',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Sai Prabhat — Full-Stack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og.png'],
    creator: '@saiprabhat',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Sai Prabhat',
      url: siteUrl,
      image: `${siteUrl}/profile.png`,
      jobTitle: 'Full-Stack Software Engineer',
      description: siteDescription,
      knowsAbout: ['.NET', 'AWS', 'React', 'TypeScript', 'Cloud Architecture', 'Scalable Systems'],
      sameAs: [
        'https://github.com/venom20021',
        'https://www.linkedin.com/in/saiprabhat',
        'https://x.com/saiprabhat',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'National Public Inter College',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Sai Prabhat Portfolio',
      publisher: { '@id': `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Starfield />
          <ClickParticles />
          <CustomCursor />
          <MouseBeam />
          <Navbar />
          <main>
            <AnimatedLayout>{children}</AnimatedLayout>
          </main>
          <Footer />
          <AIMentorButton />
          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

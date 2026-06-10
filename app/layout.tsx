import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AnimatedLayout from '@/components/animated-layout';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://saiprabhat.vercel.app'),
  title: 'Sai Prabhat - Product-driven Software Engineer',
  description:
    'Portfolio of Sai Prabhat, showcasing expertise in full-stack development, scalable systems, and cloud architecture.',
  openGraph: {
    title: 'Sai Prabhat - Product-driven Software Engineer',
    description:
      'Portfolio of Sai Prabhat, showcasing expertise in full-stack development, scalable systems, and cloud architecture.',
    url: 'https://saiprabhat.vercel.app',
    siteName: 'Sai Prabhat Portfolio',
    images: [
      {
        url: 'https://saiprabhat.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: 'Sai Prabhat Portfolio',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>
            <AnimatedLayout>{children}</AnimatedLayout>
          </main>
          <Footer />
          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

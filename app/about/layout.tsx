import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Sai Prabhat — a full-stack software engineer and computer science instructor. Learn about his journey from shipping production full-stack applications to teaching 150+ students at National Public Inter College.',
  openGraph: {
    title: 'About | Sai Prabhat',
    description:
      'Meet Sai Prabhat — a full-stack software engineer and computer science instructor building scalable, impactful systems.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

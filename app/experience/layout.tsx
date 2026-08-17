import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Sai Prabhat\u2019s professional experience: freelance full-stack engineering, distributed microservices at Tech Verse Solutions, fullstack development at SpotLine and Coinmint, and teaching computer science at National Public Inter College.',
  openGraph: {
    title: 'Experience | Sai Prabhat',
    description:
      'A track record of delivering impactful software solutions — from distributed microservices and real-time analytics to teaching the next generation of engineers.',
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

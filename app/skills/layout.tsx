import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Sai Prabhat\u2019s technical skills — frontend (React, Next.js, TypeScript), backend (.NET, Node.js), AWS cloud architecture, databases, AI/ML, and DevOps — for building production-grade software systems.',
  openGraph: {
    title: 'Skills | Sai Prabhat',
    description:
      'A comprehensive overview of the technologies, tools, and methodologies used to build production-grade software systems.',
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

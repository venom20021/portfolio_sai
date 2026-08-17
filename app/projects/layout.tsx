import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Sai Prabhat\u2019s projects — real-time collaborative whiteboards, voice-controlled AI desktop assistants, AI resume builders, multiplayer platforms, and high-throughput analytics systems built with React, .NET, AWS, and more.',
  openGraph: {
    title: 'Projects | Sai Prabhat',
    description:
      'Real-world applications and open-source work demonstrating expertise in full-stack development, distributed systems, and cloud architecture.',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

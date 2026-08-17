import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Mentor',
  description:
    'Chat with Sai Prabhat\u2019s AI Code Mentor — an AI-powered assistant for project deep-dives, code generation, and code reviews, built with the AI SDK and Groq.',
  openGraph: {
    title: 'AI Mentor | Sai Prabhat',
    description:
      'A live AI productization demo — an AI code mentor for project deep-dives, code generation, and code review tips.',
  },
};

export default function AIMentorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

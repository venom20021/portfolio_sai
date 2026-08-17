import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Sai Prabhat — full-stack software engineer specializing in .NET, AWS, and scalable systems. Open to opportunities, collaborations, and consulting.',
  openGraph: {
    title: 'Contact | Sai Prabhat',
    description:
      'Have a question, want to collaborate, or just say hello? Reach out to Sai Prabhat.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

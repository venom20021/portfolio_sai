import type { Metadata } from 'next';
import { projects } from '@/lib/projects-data';

type Props = { params: { id: string } };

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'This project could not be found.',
    };
  }

  const url = `https://saiprabhat.vercel.app/projects/${project.id}`;

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | Sai Prabhat`,
      description: project.description,
      url,
      type: 'article',
      images: [
        {
          url: `https://saiprabhat.vercel.app${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Sai Prabhat`,
      description: project.description,
      images: [`https://saiprabhat.vercel.app${project.image}`],
    },
  };
}

export default function ProjectDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

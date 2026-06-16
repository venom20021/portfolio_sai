'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/project-card';

const projects = [
  {
    id: 5,
    title: 'Real-time Collaborative Whiteboard',
    description: 'A real-time collaborative drawing application that allows multiple users to sketch, brainstorm, and visualize ideas together on a shared canvas with zero setup required.',
    impact: 'Delivered a frictionless real-time collaboration experience with instant room creation, sub-second drawing sync, and open-source accessibility.',
    technologies: ['Next.js', 'TypeScript', 'Yjs', 'Socket.io', 'Tailwind CSS'],
    image: '/projects/whiteboard.jpg',
    github: 'https://github.com/venom20021/real_time_collaborative_whiteboard',
    live: 'https://whiteboard-app-rose-two.vercel.app/',
  },
  {
    id: 4,
    title: 'Personal Portfolio 2026',
    description: 'A modern, animated portfolio featuring an AI Code Mentor powered by Groq (Llama 3.3 70B), custom cursor, tilt cards, mouse-reactive effects, and dark/light theme.',
    impact: 'Live showcase of AI productization: an AI Code Mentor integrated directly into the site using AI SDK 6.0 with streaming chat, floating widget, and tool-call-free architecture.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'AI SDK 6.0', 'Groq (Llama 3.3 70B)'],
    image: '/projects/portfolio.jpg',
    github: '#',
  },
  {
    id: 1,
    title: 'ML Predictive Pipeline',
    description: 'Built a machine learning pipeline for predictive analytics, reducing forecasting errors by 35% and processing time by 60%.',
    impact: 'Improved prediction accuracy and operational efficiency for business forecasting.',
    technologies: ['Python', 'TensorFlow', 'AWS Lambda', 'S3', 'Step Functions'],
    image: '/projects/ml-pipeline.jpg',
    github: 'https://github.com/venom20021',
  },
  {
    id: 2,
    title: 'High-Throughput Analytics Platform',
    description: 'Designed a scalable data processing platform handling 100K+ events per second with sub-second latency.',
    impact: 'Enabled real-time insights for business intelligence, supporting data-driven decision making.',
    technologies: ['Go', 'Kafka', 'Kubernetes', 'PostgreSQL', 'Grafana'],
    image: '/projects/analytics-platform.jpg',
    github: 'https://github.com/venom20021',
  },
  {
    id: 3,
    title: 'Scalable E-Commerce Architecture',
    description: 'Architected a micro-services based e-commerce platform supporting 1M+ users with 99.9% uptime.',
    impact: 'Reduced infrastructure costs by 40% while improving scalability and fault tolerance.',
    technologies: ['Node.js', 'React', 'Docker', 'AWS', 'Terraform', 'MongoDB'],
    image: '/projects/ecommerce-architecture.jpg',
    github: 'https://github.com/venom20021',
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected projects showcasing expertise in machine learning, data engineering, and scalable system architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <div key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

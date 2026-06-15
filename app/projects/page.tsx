'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/project-card';

const projects = [
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
  {
    id: 4,
    title: 'Personal Portfolio 2025',
    description: 'Designed and built a modern, animated portfolio with Next.js 14, TypeScript, and Framer Motion — featuring custom cursor, tilt cards, mouse-reactive effects, and dark/light theme.',
    impact: 'Live showcase of modern frontend engineering: animation architecture, state management, responsive design, and performance optimization.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'React'],
    image: '/projects/portfolio.jpg',
    github: '#',
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

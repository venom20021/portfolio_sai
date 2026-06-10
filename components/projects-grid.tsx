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
];

export default function ProjectsGrid() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-foreground">
          Featured Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

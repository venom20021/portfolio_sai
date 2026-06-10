'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ArrowLeft, CheckCircle2, Lightbulb } from 'lucide-react';

export const dynamic = 'force-dynamic';

const projects = [
  {
    id: 1,
    title: 'ML Predictive Pipeline',
    description: 'Built a machine learning pipeline for predictive analytics, reducing forecasting errors by 35% and processing time by 60%.',
    impact: 'Improved prediction accuracy and operational efficiency for business forecasting.',
    technologies: ['Python', 'TensorFlow', 'AWS Lambda', 'S3', 'Step Functions'],
    image: '/projects/ml-pipeline.jpg',
    github: 'https://github.com/venom20021',
    details: [
      'Designed end-to-end ML workflow from data ingestion to model deployment',
      'Implemented feature engineering pipelines using Apache Spark on AWS EMR',
      'Created REST API for model predictions serving 10K+ requests/day',
      'Established monitoring and alerting for model performance drift',
    ],
    challenges: [
      'Handling imbalanced datasets in financial forecasting',
      'Optimizing model inference latency for real-time predictions',
      'Ensuring data privacy and compliance with regulatory requirements',
    ],
  },
  {
    id: 2,
    title: 'High-Throughput Analytics Platform',
    description: 'Designed a scalable data processing platform handling 100K+ events per second with sub-second latency.',
    impact: 'Enabled real-time insights for business intelligence, supporting data-driven decision making.',
    technologies: ['Go', 'Kafka', 'Kubernetes', 'PostgreSQL', 'Grafana'],
    image: '/projects/analytics-platform.jpg',
    github: 'https://github.com/venom20021',
    details: [
      'Built microservices architecture using Go and gRPC for inter-service communication',
      'Implemented event streaming platform with Apache Kafka for reliable message queuing',
      'Deployed on Kubernetes with auto-scaling based on traffic patterns',
      'Created real-time dashboards using Grafana and TimescaleDB',
    ],
    challenges: [
      'Managing data consistency across distributed services',
      'Optimizing database queries for high-volume write operations',
      'Ensuring fault tolerance and disaster recovery mechanisms',
    ],
  },
  {
    id: 3,
    title: 'Scalable E-Commerce Architecture',
    description: 'Architected a micro-services based e-commerce platform supporting 1M+ users with 99.9% uptime.',
    impact: 'Reduced infrastructure costs by 40% while improving scalability and fault tolerance.',
    technologies: ['Node.js', 'React', 'Docker', 'AWS', 'Terraform', 'MongoDB'],
    image: '/projects/ecommerce-architecture.jpg',
    github: 'https://github.com/venom20021',
    details: [
      'Designed microservices for user management, product catalog, order processing, and payment',
      'Implemented event-driven architecture using AWS SNS/SQS for service communication',
      'Utilized Infrastructure as Code with Terraform for reproducible deployments',
      'Optimized database performance with read replicas and caching layers',
    ],
    challenges: [
      'Handling eventual consistency in distributed transactions',
      'Managing peak traffic during sales events and holiday seasons',
      'Ensuring PCI compliance for payment processing systems',
    ],
  },
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id));
  if (!project) notFound();

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group mb-8"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mb-12"
        >
          {/* Project image */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-muted to-background border border-border/50 mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

          {/* GitHub button */}
          {project.github && project.github !== '#' ? (
            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 hover:border-primary/30 transition-all duration-200"
              >
                <Github className="h-4 w-4" />
                View Source Code
              </a>
            </div>
          ) : null}
        </motion.div>

        {/* Content grid */}
        <div className="grid gap-8">
          {/* Technologies */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="p-6 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Impact */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
            className="p-6 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Lightbulb className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">Impact</h2>
                <p className="text-muted-foreground">{project.impact}</p>
              </div>
            </div>
          </motion.div>

          {/* Implementation Details */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="p-6 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">Implementation Details</h2>
            <ul className="space-y-3">
              {project.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            className="p-6 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">Challenges Overcome</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <div className="h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import AIMentorChat from '@/components/ai-mentor-chat';

export default function AIMentorPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6"
        >
          <AIMentorChat variant="page" />
        </motion.div>

        {/* Features section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {[
            {
              title: 'Project Deep-Dives',
              description:
                'Ask detailed questions about any project — architecture decisions, tech choices, challenges faced, and impact delivered.',
            },
            {
              title: 'Code Generation',
              description:
                'Get production-ready boilerplate for Next.js, FastAPI, AWS Lambda, Docker Compose, Terraform, and more.',
            },
            {
              title: 'Code Review & Tips',
              description:
                'Share your code patterns and get actionable suggestions for improvement using best practices.',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-5 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="font-semibold text-foreground mb-2 text-sm">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted-foreground mb-3">Built with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Next.js 14',
              'AI SDK 6.0',
              'Gemini 2.0 Flash',
              'Tailwind CSS',
              'Framer Motion',
              'TypeScript',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary/80 rounded-full border border-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/50 mt-4">
            This is a live AI productization demo — the AI mentor itself is a showcase of integrating AI into real applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

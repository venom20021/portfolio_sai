'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Wrench, Sparkles } from 'lucide-react';
import Timeline from '@/components/timeline';

const values = [
  {
    icon: Target,
    title: 'Impact-driven',
    description:
      'I focus on solutions that deliver measurable business value and improve user experiences.',
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description:
      'My teaching background enhances my ability to work effectively with cross-functional teams and stakeholders.',
    color: 'from-emerald-500/20 to-emerald-600/10',
  },
  {
    icon: Wrench,
    title: 'Craftsmanship',
    description:
      'I believe in writing clean, maintainable code and following best practices in software engineering.',
    color: 'from-amber-500/20 to-amber-600/10',
  },
];

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Engineer. Teacher. Builder.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My path from shipping full-stack applications to teaching the next generation of
            developers has given me an uncommon blend of technical depth and clear communication.
            I build production systems that scale — and I can explain them to anyone.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Professional Journey */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <h3 className="mb-6 text-2xl font-semibold text-foreground">Professional Journey</h3>
            <Timeline
              items={[
                {
                  title: 'Freelance Full-Stack Engineer',
                  period: '2024 - Present',
                  description:
                    'Delivering end-to-end full-stack solutions for clients — from REST APIs and cloud infrastructure to responsive frontends. Built this portfolio (Next.js, Tailwind CSS, Framer Motion) to showcase modern React and TypeScript expertise. Continuously expanding cloud architecture skills and earning certifications.',
                  icon: '🚀',
                },
                {
                  title: 'Computer Science Instructor',
                  period: 'Feb 2025 - Present',
                  description:
                    'Teaching 150+ students at National Public Inter College, breaking down complex CS concepts into accessible lessons. This experience sharpened my communication, mentorship, and leadership abilities — skills that make me a stronger collaborator and technical contributor on any engineering team.',
                  icon: '🎓',
                },
                {
                  title: 'Software Engineer Intern',
                  period: 'Jun 2024 - Dec 2024',
                  description:
                    'Architected distributed microservices and scalable RESTful APIs at Tech Verse Solutions, delivering real-time analytics for 50,000+ monthly users. Reduced system latency by 25% and compute costs by 18% using AWS cloud platforms.',
                  icon: '💻',
                },
                {
                  title: 'Fullstack Developer',
                  period: 'Dec 2021 - Jul 2023',
                  description:
                    'Delivered end-to-end development of high-traffic web applications at SpotLine and Coinmint. Engineered robust backend APIs, optimized performance, built responsive UIs — driving significant improvements in user engagement and development velocity.',
                  icon: '⚡',
                },
              ]}
            />
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="mb-6 text-2xl font-semibold text-foreground">Core Values</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="p-6 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${value.color} border border-border/50 shrink-0`}
                      >
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

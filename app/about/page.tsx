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
            Product-driven Engineer with a Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey from computer teacher to full-stack developer has equipped me with unique
            abilities to bridge technical depth with clear communication. I build systems that solve
            real problems.
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
                  title: 'Computer Teacher',
                  period: '2020 - Present',
                  description:
                    'Taught computer science fundamentals to students, developing strong communication skills and the ability to explain complex technical concepts in accessible ways.',
                  icon: '🎓',
                },
                {
                  title: 'Software Engineer Intern',
                  period: '2021 - 2022',
                  description:
                    'Developed full-stack web applications using React and Node.js, gaining hands-on experience in agile development and collaborative coding practices.',
                  icon: '💻',
                },
                {
                  title: 'Fullstack Developer',
                  period: '2022 - Present',
                  description:
                    'Architected and implemented scalable systems including ML pipelines, analytics platforms, and e-commerce architectures, focusing on performance, reliability, and business impact.',
                  icon: '🚀',
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

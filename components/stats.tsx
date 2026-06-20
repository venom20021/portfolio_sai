"use client";

import { motion } from 'framer-motion';
import { Briefcase, Award, Layers, Activity } from 'lucide-react';
import TiltCard from '@/components/tilt-card';
import ScrollReveal, { ScrollRevealItem } from '@/components/scroll-reveal';

const stats = [
  {
    icon: Briefcase,
    value: '3+',
    label: 'Years Experience',
    description: 'Full-stack development & cloud engineering',
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: Award,
    value: '5',
    label: 'Certifications',
    description: 'AWS & Google Cloud Platform',
    color: 'from-amber-500/20 to-amber-600/10',
  },
  {
    icon: Layers,
    value: '10+',
    label: 'Tech Stack',
    description: 'Backend, Frontend, Cloud, DevOps',
    color: 'from-emerald-500/20 to-emerald-600/10',
  },
  {
    icon: Activity,
    value: '99.9%',
    label: 'System Uptime',
    description: 'Achieved in production systems',
    color: 'from-violet-500/20 to-violet-600/10',
  },
];

export default function Stats() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          stagger
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <ScrollRevealItem key={stat.label}>
                <TiltCard tiltDegree={5} scaleOnHover={1.02} glareOpacity={0.25}>
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                    <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} border border-border/50`}>
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="mb-1">
                      <motion.span
                        className="text-3xl font-bold text-foreground"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
                      >
                        {stat.value}
                      </motion.span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </TiltCard>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { motion } from 'framer-motion';
import { Briefcase, Award, Layers, Activity } from 'lucide-react';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  {/* Icon */}
                  <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} border border-border/50`}>
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>

                  {/* Value */}
                  <div className="mb-1">
                    <span className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </span>
                  </div>

                  {/* Label & Description */}
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

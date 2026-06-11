'use client';

import { motion } from 'framer-motion';
import { Code2, Monitor, Cloud, Building2, Circle } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const skillCategories = [
  {
    title: 'Backend',
    icon: Code2,
    color: 'from-blue-500/20 to-blue-600/10',
    skills: ['Python', 'Node.js', 'Go', 'Java'],
    proficiencies: [
      { name: 'Python', level: '90%' },
      { name: 'Node.js', level: '85%' },
      { name: 'Go', level: '70%' },
      { name: 'Java', level: '75%' },
    ],
  },
  {
    title: 'Frontend',
    icon: Monitor,
    color: 'from-emerald-500/20 to-emerald-600/10',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
    proficiencies: [
      { name: 'React', level: '88%' },
      { name: 'TypeScript', level: '82%' },
      { name: 'Tailwind CSS', level: '80%' },
      { name: 'HTML5/CSS3', level: '85%' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-amber-500/20 to-amber-600/10',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    proficiencies: [
      { name: 'AWS', level: '85%' },
      { name: 'Google Cloud', level: '75%' },
      { name: 'Docker', level: '85%' },
      { name: 'Kubernetes', level: '70%' },
      { name: 'Terraform', level: '65%' },
    ],
  },
  {
    title: 'Architecture',
    icon: Building2,
    color: 'from-violet-500/20 to-violet-600/10',
    skills: ['Micro-services', 'Event-driven', 'RESTful APIs', 'System Design', 'CI/CD Pipelines'],
    proficiencies: [
      { name: 'Micro-services', level: '85%' },
      { name: 'Event-driven', level: '80%' },
      { name: 'RESTful APIs', level: '90%' },
      { name: 'System Design', level: '85%' },
      { name: 'CI/CD Pipelines', level: '80%' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across the full stack
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="group"
              >
                <TiltCard tiltDegree={5} scaleOnHover={1.01} glareOpacity={0.2}>
                  <div className="h-full p-5 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} border border-border/50`}>
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-1.5 mb-4">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Circle className="h-2 w-2 text-primary flex-shrink-0 fill-primary" />
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Proficiency bars */}
                  <div className="space-y-2 pt-3 border-t border-border/30">
                    {category.proficiencies.map((proficiency) => (
                      <div key={proficiency.name} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{proficiency.name}</span>
                          <span className="text-xs text-muted-foreground/60">{proficiency.level}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: proficiency.level }}
                            transition={{ duration: 1, delay: index * 0.15, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

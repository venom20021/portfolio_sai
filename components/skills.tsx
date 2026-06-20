'use client';

import { motion } from 'framer-motion';
import {
  Server,
  Monitor,
  Cloud,
  GitBranch,
  Circle,
  type LucideIcon,
} from 'lucide-react';
import TiltCard from '@/components/tilt-card';
import ScrollReveal, { ScrollRevealItem } from '@/components/scroll-reveal';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
  proficiencies: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    icon: Server,
    color: 'from-blue-500/20 to-blue-600/10',
    skills: [
      { name: 'Python', proficiency: 95 },
      { name: 'Node.js', proficiency: 90 },
      { name: 'Go', proficiency: 75 },
      { name: 'Java', proficiency: 70 },
    ],
    proficiencies: [
      { name: 'Python', proficiency: 95 },
      { name: 'Node.js', proficiency: 90 },
      { name: 'Go', proficiency: 75 },
      { name: 'Java', proficiency: 70 },
    ],
  },
  {
    title: 'Frontend',
    icon: Monitor,
    color: 'from-emerald-500/20 to-emerald-600/10',
    skills: [
      { name: 'React', proficiency: 92 },
      { name: 'TypeScript', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 88 },
      { name: 'HTML5/CSS3', proficiency: 95 },
    ],
    proficiencies: [
      { name: 'React', proficiency: 92 },
      { name: 'TypeScript', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 88 },
      { name: 'HTML5/CSS3', proficiency: 95 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-amber-500/20 to-amber-600/10',
    skills: [
      { name: 'AWS', proficiency: 88 },
      { name: 'Google Cloud', proficiency: 75 },
      { name: 'Docker', proficiency: 85 },
      { name: 'Kubernetes', proficiency: 78 },
      { name: 'Terraform', proficiency: 72 },
    ],
    proficiencies: [
      { name: 'AWS', proficiency: 88 },
      { name: 'Google Cloud', proficiency: 75 },
      { name: 'Docker', proficiency: 85 },
      { name: 'Kubernetes', proficiency: 78 },
      { name: 'Terraform', proficiency: 72 },
    ],
  },
  {
    title: 'Architecture',
    icon: GitBranch,
    color: 'from-violet-500/20 to-violet-600/10',
    skills: [
      { name: 'Micro-services', proficiency: 90 },
      { name: 'Event-driven', proficiency: 85 },
      { name: 'RESTful APIs', proficiency: 92 },
      { name: 'System Design', proficiency: 80 },
      { name: 'CI/CD Pipelines', proficiency: 85 },
    ],
    proficiencies: [
      { name: 'Micro-services', proficiency: 90 },
      { name: 'Event-driven', proficiency: 85 },
      { name: 'RESTful APIs', proficiency: 92 },
      { name: 'System Design', proficiency: 80 },
      { name: 'CI/CD Pipelines', proficiency: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1} direction="up" distance={20} className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I work with daily
          </p>
        </ScrollReveal>

        <ScrollReveal
          stagger
          staggerDelay={0.12}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <ScrollRevealItem key={category.title}>
                <TiltCard tiltDegree={5} scaleOnHover={1.02} glareOpacity={0.25}>
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 h-full">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} border border-border/50 mb-4`}
                    >
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {category.title}
                    </h3>

                    <ul className="space-y-2 mb-4">
                      {category.skills.map((skill) => (
                        <li key={skill.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Circle className="h-1.5 w-1.5 fill-muted-foreground/50 text-muted-foreground/50" />
                          {skill.name}
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-2.5">
                      {category.proficiencies.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">{skill.name}</span>
                            <span className="text-muted-foreground/60">{skill.proficiency}%</span>
                          </div>
                          <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: 'easeOut',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
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

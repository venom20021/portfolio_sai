'use client';

import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';
import TiltCard from '@/components/tilt-card';
import type { SkillCategoryData } from '@/lib/portfolio-data';

export default function SkillCategoryCard({ category }: { category: SkillCategoryData }) {
  const Icon = category.icon;

  return (
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
          {category.skills.map((skill) => (
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
  );
}

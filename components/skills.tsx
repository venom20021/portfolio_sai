'use client';

import ScrollReveal, { ScrollRevealItem } from '@/components/scroll-reveal';
import SkillCategoryCard from '@/components/skill-category-card';
import { skillCategories } from '@/lib/portfolio-data';

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
          {skillCategories.map((category) => (
            <ScrollRevealItem key={category.title}>
              <SkillCategoryCard category={category} />
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

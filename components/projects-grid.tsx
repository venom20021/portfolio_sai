'use client';

import Link from 'next/link';
import ProjectCard from '@/components/project-card';
import ScrollReveal, { ScrollRevealItem } from '@/components/scroll-reveal';
import { projects } from '@/lib/projects-data';

export default function ProjectsGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1} direction="up" distance={20} className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real-world applications and open-source work
          </p>
        </ScrollReveal>

        <ScrollReveal
          stagger
          staggerDelay={0.1}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ScrollRevealItem key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                className="block h-full group"
              >
                <ProjectCard project={project} />
              </Link>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

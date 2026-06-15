'use client';

import { useState } from 'react';
import { Github } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    impact: string;
    technologies: string[];
    image: string;
    github: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <TiltCard tiltDegree={6} scaleOnHover={1.02} glareOpacity={0.3} className="group h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-muted/20 shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:border-primary/20">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted/30">
          {imgError ? (
            <div className="h-full w-full bg-gradient-to-br from-primary/10 via-muted/30 to-background flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary/60">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground/60">{project.technologies.length} technologies</span>
              </div>
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-1">
            {project.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub button */}
          <div className="pt-2">
            {project.github && project.github !== '#' ? (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.github, '_blank', 'noopener,noreferrer');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.github, '_blank', 'noopener,noreferrer');
                  }
                }}
                role="link"
                tabIndex={0}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-muted/30 transition-all duration-200 cursor-pointer"
              >
                <Github className="h-3.5 w-3.5" />
                View Code
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

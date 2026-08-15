'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  Zap,
  SquareStack,
  ChevronLeft,
  ChevronRight,
  Layers,
  FolderGit2,
  Globe,
  ListChecks,
  Server,
  Monitor,
  Cloud,
  GitBranch,
  Cpu,
  type LucideIcon,
} from 'lucide-react';
import { projects } from '@/lib/projects-data';

/** Split text into bullet points by sentence or clause endings */
function toBullets(text: string): string[] {
  return text
    .split(/(?<=[.!;])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Categorize technologies into groups for visualization */
interface TechCategory {
  label: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  techs: string[];
}

const techCategories: { label: string; icon: LucideIcon; color: string; bgColor: string; keywords: string[] }[] = [
  { label: 'Frontend', icon: Monitor, color: 'text-emerald-600 dark:text-emerald-400', bgColor: 'bg-emerald-500/10 border-emerald-500/20', keywords: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Framer Motion', 'shadcn', 'HTML5', 'CSS3', 'Lucide', 'Zustand', 'React Query', 'Redux'] },
  { label: 'Backend', icon: Server, color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-500/10 border-blue-500/20', keywords: ['Node.js', 'NestJS', 'Express', 'Python', 'Go', 'Java', 'Spring Boot', 'Django', 'Flask', 'FastAPI', 'GraphQL', 'REST', 'Socket.IO'] },
  { label: 'Cloud & DevOps', icon: Cloud, color: 'text-amber-600 dark:text-amber-400', bgColor: 'bg-amber-500/10 border-amber-500/20', keywords: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Nginx', 'Prometheus', 'Grafana', 'GitHub Actions', 'CI/CD', 'Vercel'] },
  { label: 'Database', icon: FolderGit2, color: 'text-violet-600 dark:text-violet-400', bgColor: 'bg-violet-500/10 border-violet-500/20', keywords: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'DynamoDB', 'RDS', 'ElastiCache'] },
  { label: 'AI & ML', icon: Cpu, color: 'text-rose-600 dark:text-rose-400', bgColor: 'bg-rose-500/10 border-rose-500/20', keywords: ['TensorFlow', 'Gemini', 'Groq', 'AI SDK', 'LLM', 'OpenAI', 'Lambda'] },
  { label: 'Tools & Testing', icon: GitBranch, color: 'text-slate-600 dark:text-slate-400', bgColor: 'bg-slate-500/10 border-slate-500/20', keywords: ['Vitest', 'Yjs', 'Sonner', 'Git', 'Zod', 'OAuth', 'JWT', 'bcrypt'] },
];

function categorizeTechs(techs: string[]): TechCategory[] {
  return techCategories.map((cat) => {
    const found = techs.filter((t) =>
      cat.keywords.some((kw) => t.toLowerCase().includes(kw.toLowerCase()))
    );
    return {
      label: cat.label,
      icon: cat.icon,
      color: cat.color,
      bgColor: cat.bgColor,
      techs: found,
    };
  }).filter((c) => c.techs.length > 0);
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const currentIndex = projects.findIndex((p) => p.id === params.id);
  const project = projects[currentIndex];
  const [imgError, setImgError] = useState(false);

  if (!project) {
    notFound();
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const detailBullets = project.details ? toBullets(project.details) : [];
  const challengeBullets = project.challenges
    ? toBullets(project.challenges)
    : [];

  const techGroups = categorizeTechs(project.technologies);

  const metrics = [
    { icon: Layers, label: 'Technologies', value: project.technologies.length, suffix: 'used' },
    { icon: ListChecks, label: 'Features', value: detailBullets.length, suffix: 'implemented' },
    { icon: Zap, label: 'Challenges', value: challengeBullets.length, suffix: 'solved' },
    { icon: project.live ? Globe : Github, label: 'Status', value: project.live ? 'Live Demo' : 'Open Source', suffix: '' },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Hero Image */}
          <div className="relative w-full h-56 sm:h-72 lg:h-96 rounded-2xl overflow-hidden bg-muted/30 mb-10 border border-border/30 shadow-md">
            {imgError ? (
              <div className="h-full w-full bg-gradient-to-br from-primary/5 via-muted/10 to-background flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <SquareStack className="h-8 w-8 text-primary/60" />
                  </div>
                  <p className="text-sm text-muted-foreground/60">
                    {project.title}
                  </p>
                </div>
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-center"
                onError={() => setImgError(true)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground drop-shadow-lg">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl bg-gradient-to-br from-background to-muted/20 border border-border/40 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200"
                  >
                    <Icon className="h-4 w-4 text-primary mb-2" />
                    <p className="text-lg sm:text-xl font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className="text-[11px] text-muted-foreground/60 mt-0.5">
                      {metric.label}
                      {metric.suffix ? ` ${metric.suffix}` : ''}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Tech Stack - Categorized */}
            {techGroups.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  Tech Stack
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {techGroups.map((group) => {
                    const Icon = group.icon;
                    return (
                      <div
                        key={group.label}
                        className={`p-4 rounded-xl border ${group.bgColor} shadow-sm`}
                      >
                        <div className="flex items-center gap-2 mb-2.5">
                          <Icon className={`h-4 w-4 ${group.color}`} />
                          <span className={`text-xs font-semibold uppercase tracking-wider ${group.color}`}>
                            {group.label}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {group.techs.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-background/80 text-muted-foreground border border-border/40"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Impact */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Impact</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation Details as Bullet Points */}
            {detailBullets.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  Implementation Details
                </h2>
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/40 shadow-sm">
                  <ul className="space-y-3">
                    {detailBullets.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Challenges & Solutions as Bullet Points */}
            {challengeBullets.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Challenges & Solutions
                </h2>
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/40 shadow-sm">
                  <ul className="space-y-3">
                    {challengeBullets.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500/60 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border/40">
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/30 border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Previous / Next Navigation */}
          <nav
            className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
            aria-label="Project navigation"
          >
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-border/40 hover:border-primary/30 hover:bg-muted/20 transition-all duration-200"
              >
                <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
                    Previous
                  </span>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-border/40 hover:border-primary/30 hover:bg-muted/20 transition-all duration-200 sm:text-right"
              >
                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
                    Next
                  </span>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {nextProject.title}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}

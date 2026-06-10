"use client";

import { motion } from 'framer-motion';
import { Code2, Monitor, Cloud, Building2, SquareCode, Database, Cog, GitBranch } from 'lucide-react';
import SkillCategory from '@/components/skill-category';

const skillCategories = [
  {
    title: "Backend Development",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      'Python (Django, Flask, FastAPI)',
      'Node.js (Express, NestJS)',
      'Go (Gin, Echo)',
      'Java (Spring Boot)',
      'RESTful API Design',
      'GraphQL',
      'Microservices Architecture',
      'Database Design (SQL & NoSQL)',
    ],
  },
  {
    title: "Frontend Development",
    icon: <Monitor className="h-5 w-5" />,
    skills: [
      'React (Hooks, Context, Redux)',
      'TypeScript',
      'Tailwind CSS',
      'HTML5/CSS3',
      'JavaScript ES6+',
      'Responsive Design',
      'State Management',
      'Performance Optimization',
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      'AWS (EC2, S3, Lambda, RDS, DynamoDB)',
      'Google Cloud Platform',
      'Docker & Containerization',
      'Kubernetes Orchestration',
      'Terraform (IaC)',
      'CI/CD Pipelines (GitHub Actions, GitLab CI)',
      'Monitoring & Logging (Prometheus, Grafana, ELK)',
      'Serverless Architecture',
    ],
  },
  {
    title: "Architecture & Design",
    icon: <Building2 className="h-5 w-5" />,
    skills: [
      'System Design & Scalability',
      'Event-Driven Architecture',
      'Micro-services Patterns',
      'API Design & Documentation',
      'Data Modeling & Optimization',
      'Security Best Practices',
      'Performance Tuning',
      'Technical Leadership',
    ],
  },
];

const proficiencies = [
  {
    title: "Backend",
    icon: <Database className="h-5 w-5" />,
    color: "from-blue-500/20 to-blue-600/10",
    skills: [
      { name: "Python", level: "90%" },
      { name: "Node.js", level: "85%" },
      { name: "Go", level: "70%" },
      { name: "Java", level: "75%" },
    ],
  },
  {
    title: "Frontend",
    icon: <Monitor className="h-5 w-5" />,
    color: "from-emerald-500/20 to-emerald-600/10",
    skills: [
      { name: "React", level: "88%" },
      { name: "TypeScript", level: "82%" },
      { name: "Tailwind CSS", level: "80%" },
      { name: "JavaScript", level: "85%" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cog className="h-5 w-5" />,
    color: "from-amber-500/20 to-amber-600/10",
    skills: [
      { name: "AWS", level: "85%" },
      { name: "Docker", level: "85%" },
      { name: "Kubernetes", level: "70%" },
      { name: "Terraform", level: "65%" },
    ],
  },
  {
    title: "Architecture",
    icon: <GitBranch className="h-5 w-5" />,
    color: "from-violet-500/20 to-violet-600/10",
    skills: [
      { name: "System Design", level: "85%" },
      { name: "Micro-services", level: "80%" },
      { name: "API Design", level: "90%" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full stack, cloud infrastructure, and system architecture.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key="skills-grid"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </motion.div>

        {/* Proficiency Visualization */}
        <motion.div
          key="proficiency"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="mt-16"
        >
          <h3 className="mb-8 text-2xl font-semibold text-center text-foreground">
            Skill Proficiency
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proficiencies.map((group) => (
              <div
                key={group.title}
                className="p-5 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${group.color} border border-border/50`}>
                    {group.icon}
                  </div>
                  <h4 className="font-semibold text-foreground">{group.title}</h4>
                </div>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground/60">{skill.level}</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

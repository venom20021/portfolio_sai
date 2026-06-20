'use client';

import Timeline from '@/components/timeline';
import ScrollReveal from '@/components/scroll-reveal';

export default function ExperiencePage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1} direction="up" distance={20} className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A track record of delivering impactful software solutions across startups and
            enterprises, from architecting distributed systems to teaching the next generation of
            engineers.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up" distance={30}>
          <Timeline
            items={[
              {
                title: 'Freelance Full-Stack Engineer',
                period: '2024 - Present',
                description:
                  '• Delivering end-to-end full-stack solutions for clients — from REST APIs and cloud infrastructure to responsive frontends\n• Built this portfolio (Next.js, Tailwind CSS, Framer Motion) to showcase modern React and TypeScript expertise\n• Continuously expanding cloud architecture skills and earning certifications',
                icon: '🚀',
              },
              {
                title: 'Computer Science Instructor',
                period: 'Feb 2025 - Present',
                description:
                  '• Teaching 150+ students at National Public Inter College\n• Breaking down complex CS concepts into accessible lessons\n• Strengthened communication, mentorship, and leadership abilities',
                icon: '🎓',
              },
              {
                title: 'Software Engineer Intern',
                period: 'Jun 2024 - Dec 2024',
                description:
                  '• Architected distributed microservices and scalable RESTful APIs at Tech Verse Solutions\n• Delivered real-time analytics for 50,000+ monthly users\n• Reduced system latency by 25% and compute costs by 18% using AWS',
                icon: '💻',
              },
              {
                title: 'Fullstack Developer',
                period: 'Jun 2022 - Jul 2023',
                description:
                  '• Delivered end-to-end development of high-traffic web applications at Coinmint and SpotLine\n• Engineered robust backend APIs and optimized performance\n• Drove significant improvements in user engagement and development velocity',
                icon: '⚡',
              },
            ]}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

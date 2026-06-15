'use client';

import { motion } from 'framer-motion';
import Timeline from '@/components/timeline';

export default function ExperiencePage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey highlighting key roles, responsibilities, and measurable achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <Timeline
            items={[
              {
                title: 'Freelance Full-Stack Engineer',
                period: '2024 - Present',
                description:
                  '• Building modern full-stack applications with Next.js, React, TypeScript, and Tailwind CSS\n• Designing and implementing RESTful APIs with Node.js and cloud infrastructure on AWS\n• Active cloud learning — earning certifications and applying modern DevOps practices\n• Continuously shipping, learning, and growing as an engineer',
                icon: '🚀',
              },
              {
                title: 'Computer Science Instructor',
                period: 'Feb 2025 - Present',
                description:
                  '• Instructing 150+ students in Computer Science at National Public Inter College\n• Translating complex technical concepts into clear, accessible lessons — the same skill I use to communicate with stakeholders and cross-functional teams\n• Building mentorship and leadership capabilities that strengthen every engineering team I join',
                icon: '👨‍🏫',
              },
              {
                title: 'Software Engineer Intern',
                period: 'Jun 2024 - Dec 2024',
                description:
                  '• Architected and deployed distributed microservices, delivering real-time analytics for 50,000+ monthly users at Tech Verse Solutions\n• Engineered highly scalable RESTful APIs using Python and Node.js, reducing average system latency by 25%\n• Designed cost-efficient batch processing data pipelines on AWS (EC2, S3, DynamoDB), reducing compute costs by 18%',
                icon: '💼',
              },
              {
                title: 'Fullstack Developer @ Coinmint',
                period: 'Jun 2022 - Jul 2023',
                description:
                  '• Engineered robust backend APIs and optimized server-side data retrieval, significantly improving core platform performance\n• Spearheaded integration of critical third-party services through cross-functional collaboration with product and QA teams\n• Accelerated development speed by 20% by building responsive dynamic UIs with React and connecting to complex backend architectures',
                icon: '🚀',
              },
              {
                title: 'Fullstack Developer @ SpotLine',
                period: 'Dec 2021 - Sep 2022',
                description:
                  '• Directed end-to-end development of 5+ large-scale, high-traffic web applications, driving a 20% increase in user engagement\n• Executed complete redesigns for 10+ websites, improving system performance by 25% and mobile responsiveness by 30%\n• Conducted deep-dive performance tuning on Core Web Vitals, reducing initial page load times by 30% across multiple platforms',
                icon: '💻',
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}

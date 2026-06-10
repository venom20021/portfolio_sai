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
                title: 'Fullstack Developer',
                period: 'Current',
                description:
                  '• Architected a machine learning pipeline that improved prediction accuracy by 35% and reduced processing time by 60%\n• Designed a high-throughput analytics platform handling 100K+ events per second with sub-second latency\n• Built a scalable e-commerce architecture supporting 1M+ users with 99.9% uptime, reducing infrastructure costs by 40%\n• Led cross-functional teams of 5-8 engineers in agile environments\n• Implemented CI/CD pipelines using GitHub Actions and AWS CodePipeline, increasing deployment frequency by 3x',
                icon: '💼',
              },
              {
                title: 'Software Engineer Intern',
                period: '2021 - 2022',
                description:
                  '• Developed responsive web applications using React, TypeScript, and Node.js\n• Collaborated with senior engineers to implement RESTful APIs and database schemas\n• Participated in code reviews, contributing to improved code quality and team knowledge sharing\n• Automated testing workflows, reducing manual QA effort by 25%\n• Gained exposure to cloud platforms (AWS) and containerization technologies (Docker)',
                icon: '🎓',
              },
              {
                title: 'Computer Teacher',
                period: '2020 - Present',
                description:
                  '• Taught computer science concepts to diverse student groups, adapting complex topics for different learning levels\n• Created engaging curriculum materials that improved student engagement and comprehension\n• Provided individualized support to students, helping them overcome technical challenges\n• Organized coding workshops and hackathons, fostering interest in software development\n• Developed strong communication and presentation skills through regular instruction and feedback sessions',
                icon: '👨‍🏫',
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}

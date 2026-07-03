import { type LucideIcon } from 'lucide-react';
import { Server, Monitor, Cloud, GitBranch } from 'lucide-react';

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategoryData {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategoryData[] = [
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-blue-500/20 to-blue-600/10',
    skills: [
      { name: 'Python', proficiency: 95 },
      { name: 'Node.js', proficiency: 90 },
      { name: 'Go', proficiency: 75 },
      { name: 'Java', proficiency: 70 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: 'from-emerald-500/20 to-emerald-600/10',
    skills: [
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
  },
  {
    title: 'Architecture & Design',
    icon: GitBranch,
    color: 'from-violet-500/20 to-violet-600/10',
    skills: [
      { name: 'Micro-services', proficiency: 90 },
      { name: 'Event-driven', proficiency: 85 },
      { name: 'RESTful APIs', proficiency: 92 },
      { name: 'System Design', proficiency: 80 },
      { name: 'CI/CD Pipelines', proficiency: 85 },
    ],
  },
];

export const portfolioData = {
  owner: {
    name: 'Sai Prabhat',
    title: 'Product-driven Software Engineer',
    tagline:
      'Full-stack engineer who combines production experience, cloud certification, and a teacher\'s clarity to build products that solve real problems.',
    email: 'prabhatsai047@gmail.com',
    github: 'https://github.com/venom20021',
    linkedin: 'https://linkedin.com/in/saiprabhat',
    location: 'India',
    resumeUrl: '/sai-prabhat-resume.pdf',
  },
  skills: {
    backend: [
      'Python (Django, Flask, FastAPI)',
      'Node.js (Express, NestJS)',
      'Go (Gin, Echo)',
      'Java (Spring Boot)',
      'RESTful API Design',
      'GraphQL',
      'Microservices Architecture',
      'Database Design (SQL & NoSQL)',
    ],
    frontend: [
      'React (Hooks, Context, Redux)',
      'TypeScript',
      'Next.js (App Router)',
      'Tailwind CSS',
      'Framer Motion',
      'HTML5/CSS3',
      'JavaScript ES6+',
      'Responsive Design',
    ],
    cloudDevops: [
      'AWS (EC2, S3, Lambda, RDS, DynamoDB)',
      'Google Cloud Platform',
      'Docker & Containerization',
      'Kubernetes Orchestration',
      'Terraform (IaC)',
      'CI/CD (GitHub Actions, GitLab CI)',
      'Monitoring (Prometheus, Grafana, ELK)',
      'Serverless Architecture',
    ],
    architecture: [
      'System Design & Scalability',
      'Event-Driven Architecture',
      'Microservices Patterns',
      'API Design & Documentation',
      'Data Modeling & Optimization',
      'Security Best Practices',
      'Performance Tuning',
      'Technical Leadership',
    ],
  },
  experience: [
    {
      role: 'Freelance Full-Stack Engineer',
      period: '2024 - Present',
      highlights: [
        'Building modern full-stack applications with Next.js, React, TypeScript, and Tailwind CSS',
        'Designing and implementing RESTful APIs with Node.js and cloud infrastructure on AWS',
        'Continuously shipping, learning, and growing as an engineer',
      ],
    },
    {
      role: 'Computer Science Instructor',
      company: 'National Public Inter College',
      period: 'Feb 2025 - Present',
      highlights: [
        'Instructing 150+ students in Computer Science',
        'Translating complex technical concepts into clear, accessible lessons',
        'Building mentorship and leadership capabilities',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Tech Verse Solutions',
      period: 'Jun 2024 - Dec 2024',
      highlights: [
        'Architected and deployed distributed microservices, delivering real-time analytics for 50,000+ monthly users',
        'Engineered scalable RESTful APIs using Python and Node.js, reducing average system latency by 25%',
        'Designed cost-efficient batch processing data pipelines on AWS (EC2, S3, DynamoDB), reducing compute costs by 18%',
      ],
    },
    {
      role: 'Fullstack Developer',
      company: 'Coinmint',
      period: 'Jun 2022 - Jul 2023',
      highlights: [
        'Engineered robust backend APIs and optimized server-side data retrieval',
        'Spearheaded integration of critical third-party services through cross-functional collaboration',
        'Accelerated development speed by 20% by building responsive dynamic UIs with React',
      ],
    },
    {
      role: 'Fullstack Developer',
      company: 'SpotLine',
      period: 'Dec 2021 - Sep 2022',
      highlights: [
        'Directed end-to-end development of 5+ large-scale, high-traffic web applications, driving a 20% increase in user engagement',
        'Executed complete redesigns for 10+ websites, improving system performance by 25% and mobile responsiveness by 30%',
        'Conducted deep-dive performance tuning on Core Web Vitals, reducing initial page load times by 30%',
      ],
    },
  ],
  values: [
    {
      title: 'Impact-driven',
      description:
        'Focus on solutions that deliver measurable business value and improve user experiences.',
    },
    {
      title: 'Collaborative',
      description:
        'Teaching background enhances ability to work effectively with cross-functional teams and stakeholders.',
    },
    {
      title: 'Craftsmanship',
      description:
        'Belief in writing clean, maintainable code and following best practices in software engineering.',
    },
  ],
  projects: [
    {
      id: 5,
      title: 'Real-time Collaborative Whiteboard',
      description:
        'A real-time collaborative drawing application that allows multiple users to sketch, brainstorm, and visualize ideas together on a shared canvas with zero setup required.',
      impact:
        'Delivered a frictionless real-time collaboration experience with instant room creation, sub-second drawing sync, and open-source accessibility.',
      technologies: ['Next.js', 'TypeScript', 'Yjs', 'Socket.io', 'Tailwind CSS'],
      details: [
        'Built real-time bi-directional synchronization using Yjs CRDT for conflict-free collaborative editing',
        'Implemented WebSocket-based communication layer with Socket.io for low-latency room management',
        'Designed intuitive UI with room creation/joining flow and zero authentication requirement',
        'Deployed on Vercel with serverless WebSocket support for scalable real-time connections',
      ],
      challenges: [
        'Handling concurrent drawing operations from multiple users without conflicts or data loss',
        'Optimizing canvas rendering performance for smooth real-time drawing synchronization',
        'Managing WebSocket connections efficiently to minimize latency across distributed users',
      ],
      github: 'https://github.com/venom20021/real_time_collaborative_whiteboard',
      live: 'https://whiteboard-app-rose-two.vercel.app/',
    },
    {
      id: 4,
      title: 'Personal Portfolio 2026',
      description:
        'A modern, animated portfolio built with Next.js 14, TypeScript, and Framer Motion — featuring an AI Code Mentor powered by Groq (Llama 3.3 70B) for real-time coding assistance, plus custom cursor, tilt cards, mouse-reactive effects, and dark/light theme.',
      impact:
        'Live showcase of AI productization: an AI Code Mentor integrated directly into the site using AI SDK 6.0 with streaming chat, floating widget, and tool-call-free architecture. Demonstrates frontend engineering, LLM integration, and modern animation architecture.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Framer Motion',
        'Tailwind CSS',
        'AI SDK 6.0',
        'Groq (Llama 3.3 70B)',
      ],
      details: [
        'Built an AI Code Mentor with streaming chat responses using AI SDK 6.0 (useChat + streamText)',
        'Integrated Groq API (Llama 3.3 70B) via @ai-sdk/openai for fast, free inference',
        'Designed a floating chat widget with AnimatePresence slide-in animation and backdrop blur',
        'Built a dedicated /ai-mentor page with full-height chat, feature cards, and tech stack badges',
        'Implemented message format conversion (UIMessage → CoreMessage) for AI SDK 6.0 compatibility',
        'Added unit test suite with vitest covering message conversion edge cases (11 tests)',
        'Built a custom cursor system with spring physics for smooth, responsive pointer tracking',
        'Implemented mouse-reactive tilt cards with configurable glare, rotation, and spring damping',
        'Created click particle burst effects that emit from click position with framer-motion animations',
        'Designed a mouse-beam gradient that follows the cursor for immersive visual feedback',
        'Architected full dark/light theme with CSS custom properties and next-themes integration',
        'Built a contact form with Zod validation, React Hook Form, and Resend email API',
        'Added page transition animations with AnimatePresence for smooth navigation',
      ],
      challenges: [
        'Managing AI SDK 6.0 API quirks — tool calling format issues with Groq, Responses API vs Chat Completions',
        'Adapting the provider stack from @ai-sdk/google to @ai-sdk/openai (Groq endpoint) due to quota and compatibility issues',
        'Optimizing animation performance — using spring configs, will-change-transform, and disabling heavy effects on touch devices',
        'Building a cohesive design system with consistent spacing, colors, and component patterns',
        'Ensuring accessibility alongside custom cursor and visual effects',
      ],
      github: '#',
    },
    {
      id: 6,
      title: 'AI-Powered Resume Builder',
      description:
        'A modern resume builder that creates polished, ATS-friendly resumes with AI-powered wording suggestions, multiple professional templates, job description matching, and PDF generation.',
      impact:
        'Delivered a full-featured resume builder with Gemini-powered AI writing assistance, 3 professional templates with matching PDF styles, and 58 passing unit tests.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Google Gemini',
        'shadcn/ui',
        'React',
        'Lucide',
        'Vitest',
      ],
      details: [
        'Built a guided 5-step resume builder with AI-powered improvements for summaries and bullet points via Google Gemini',
        'Implemented 3 professional resume templates (Classic, Minimal, Modern) with server-side PDF generation',
        'Added job description matching that rewrites resumes to target specific roles with relevant keywords',
        'Designed JSON import/export for data portability and scored 58 passing unit tests with Vitest',
      ],
      challenges: [
        'Implementing AI-powered content generation that produces natural, professional phrasing across multiple resume sections',
        'Building server-side PDF generation that perfectly matches the on-screen template previews',
        'Designing a responsive multi-step form with complex state management across education, experience, and skill entries',
      ],
      github: 'https://github.com/venom20021/AI_Resume_Generator',
      live: 'https://ai-resume-generator-swart-gamma.vercel.app/',
    },
    {
      id: 7,
      title: 'Ludo Royale',
      description:
        'A cloud-native, production-ready real-time multiplayer Ludo platform with server-authoritative game logic, secure authentication, matchmaking, player profiles, leaderboards, and WebSocket-based real-time communication.',
      impact:
        'Built a scalable cloud-native multiplayer gaming platform with a server-authoritative game engine ensuring fair play through deterministic dice generation and server-side rule validation.',
      technologies: [
        'TypeScript',
        'React',
        'Next.js',
        'NestJS',
        'Socket.IO',
        'PostgreSQL',
        'Redis',
        'Docker',
        'AWS',
        'Tailwind CSS',
      ],
      details: [
        'Built server-authoritative game engine with deterministic dice generation and move validation on the backend to prevent cheating',
        'Implemented real-time WebSocket communication with Socket.io for matchmaking, game state sync, and live chat',
        'Designed public matchmaking with Elo-based leaderboards and private rooms with invite codes',
        'Deployed on AWS (EC2, RDS, ElastiCache) with Docker containerization and GitHub Actions CI/CD',
      ],
      challenges: [
        'Building a scalable WebSocket architecture for multiple concurrent game sessions with minimal latency',
        'Designing fault-tolerant game state recovery using Redis and PostgreSQL to handle server disconnects',
        'Optimizing Redis caching and database queries for high traffic performance',
      ],
      github: 'https://github.com/venom20021/Ludo_royale',
    },
    {
      id: 1,
      title: 'ML Predictive Pipeline',
      description:
        'Built a machine learning pipeline for predictive analytics, reducing forecasting errors by 35% and processing time by 60%.',
      impact: 'Improved prediction accuracy and operational efficiency for business forecasting.',
      technologies: ['Python', 'TensorFlow', 'AWS Lambda', 'S3', 'Step Functions'],
      details: [
        'Designed end-to-end ML workflow from data ingestion to model deployment',
        'Implemented feature engineering pipelines using Apache Spark on AWS EMR',
        'Created REST API for model predictions serving 10K+ requests/day',
        'Established monitoring and alerting for model performance drift',
      ],
      challenges: [
        'Handling imbalanced datasets in financial forecasting',
        'Optimizing model inference latency for real-time predictions',
        'Ensuring data privacy and compliance with regulatory requirements',
      ],
      github: 'https://github.com/venom20021',
    },
    {
      id: 2,
      title: 'High-Throughput Analytics Platform',
      description:
        'Designed a scalable data processing platform handling 100K+ events per second with sub-second latency.',
      impact: 'Enabled real-time insights for business intelligence, supporting data-driven decision making.',
      technologies: ['Go', 'Kafka', 'Kubernetes', 'PostgreSQL', 'Grafana'],
      details: [
        'Built microservices architecture using Go and gRPC for inter-service communication',
        'Implemented event streaming platform with Apache Kafka for reliable message queuing',
        'Deployed on Kubernetes with auto-scaling based on traffic patterns',
        'Created real-time dashboards using Grafana and TimescaleDB',
      ],
      challenges: [
        'Managing data consistency across distributed services',
        'Optimizing database queries for high-volume write operations',
        'Ensuring fault tolerance and disaster recovery mechanisms',
      ],
      github: 'https://github.com/venom20021',
    },
    {
      id: 3,
      title: 'Scalable E-Commerce Architecture',
      description:
        'Architected a micro-services based e-commerce platform supporting 1M+ users with 99.9% uptime.',
      impact: 'Reduced infrastructure costs by 40% while improving scalability and fault tolerance.',
      technologies: ['Node.js', 'React', 'Docker', 'AWS', 'Terraform', 'MongoDB'],
      details: [
        'Designed microservices for user management, product catalog, order processing, and payment',
        'Implemented event-driven architecture using AWS SNS/SQS for service communication',
        'Utilized Infrastructure as Code with Terraform for reproducible deployments',
        'Optimized database performance with read replicas and caching layers',
      ],
      challenges: [
        'Handling eventual consistency in distributed transactions',
        'Managing peak traffic during sales events and holiday seasons',
        'Ensuring PCI compliance for payment processing systems',
      ],
      github: 'https://github.com/venom20021',
    },
  ],
  portfolioTechStack: [
    'Next.js 14 (App Router)',
    'TypeScript',
    'Tailwind CSS 4',
    'Framer Motion',
    'shadcn/ui (Radix primitives)',
    'Lucide Icons',
    'next-themes (dark/light mode)',
    'React Hook Form + Zod (contact form)',
    'Resend (email API)',
    'AI SDK 6.0 (useChat + streamText)',
    '@ai-sdk/openai (Groq endpoint)',
    'Groq API (Llama 3.3 70B)',
    'vitest (unit testing)',
    'Vercel (hosting)',
  ],
  currentPortfolioFeatures: [
    'Custom cursor with spring physics',
    'Mouse-reactive tilt cards with configurable glare',
    'Click particle burst effects',
    'Mouse-beam gradient that follows cursor',
    'Full dark/light theme with next-themes',
    'Contact form with Zod validation and Resend',
    'Page transition animations',
    'Project showcase with detailed case studies',
    'Skill proficiency visualization',
    'Professional timeline',
    'AI Code Mentor with streaming chat',
    'Boilerplate code generation via AI',
    'Unit tests (vitest, 11 passing)',
  ],
};

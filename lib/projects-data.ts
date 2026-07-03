export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  image: string;
  github: string;
  live?: string;
  details?: string;
  challenges?: string;
}

export const projects: Project[] = [
  {
    id: 'collaborative-whiteboard',
    title: 'Real-time Collaborative Whiteboard',
    description:
      'A multi-user whiteboard application with real-time synchronization, drawing tools, and persistence. Built with Yjs for conflict-free replication and Socket.io for low-latency communication.',
    impact: 'Serves as a production-grade showcase of real-time collaboration architecture.',
    technologies: ['Next.js', 'TypeScript', 'Yjs', 'Socket.io', 'Tailwind CSS'],
    image: '/projects/whiteboard.jpg',
    github: 'https://github.com/venom20021/real_time_collaborative_whiteboard',
    details:
      'This project implements a full-featured collaborative whiteboard with real-time cursor tracking, shape management, and persistent storage. It uses Yjs for conflict-free replicated data types (CRDTs) and Socket.io for WebSocket-based communication.',
    challenges:
      'Handling concurrent edits from multiple users required careful conflict resolution. The solution uses Yjs\'s built-in CRDT algorithm which ensures all clients converge to the same state without a central authority.',
  },
  {
    id: 'portfolio-2026',
    title: 'Personal Portfolio 2026',
    description:
      'A polished, interactive portfolio designed to showcase full-stack expertise. Features an integrated AI Code Mentor, animated UI, and a modern tech stack.',
    impact: 'Live production demo of AI integration with Groq Llama 3.3 70B.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'AI SDK 6.0', 'Groq'],
    image: '/projects/portfolio.jpg',
    github: 'https://github.com/venom20021/Personal_Portfolio',
    live: 'https://sai-prabhat.vercel.app',
    details:
      'This portfolio site showcases modern React patterns including server components, client components, and streaming SSR. The AI Code Mentor uses Groq\'s Llama 3.3 70B model for real-time code generation and Q&A.',
    challenges:
      'Integrating AI streaming responses with a smooth UI required careful state management and skeleton loading states.',
  },
  {
    id: 'ai-resume-builder',
    title: 'AI-Powered Resume Builder',
    description:
      'A modern resume builder that creates polished, ATS-friendly resumes with AI-powered wording suggestions, multiple professional templates, job description matching, and PDF generation — all powered by Google Gemini.',
    impact:
      'Delivered a full-featured resume builder with Gemini-powered AI writing assistance, 3 professional templates with matching PDF styles, and 58 passing unit tests.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Google Gemini',
      'React',
      'shadcn/ui',
      'Lucide',
      'Sonner',
      'Vitest',
    ],
    image: '/projects/ai-resume-builder.svg',
    github: 'https://github.com/venom20021/AI_Resume_Generator',
    live: 'https://ai-resume-generator-swart-gamma.vercel.app/',
    details:
      'Features a guided 5-step resume builder (Personal Info, Education, Experience, Skills, Job Match), AI-powered improvements for summaries and bullet points, skill suggestions from role descriptions, job description matching to optimize resumes for specific roles, 3 professional templates (Modern, Classic, Minimal), server-side PDF generation via @react-pdf/renderer, and JSON import/export for data portability.',
    challenges:
      'Implementing AI-powered content generation that produces natural, professional phrasing across multiple resume sections. Building server-side PDF generation that perfectly matches the on-screen template previews. Designing a responsive multi-step form with complex state management across education, experience, and skill entries.',
  },
  {
    id: 'ludo-royale',
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
    image: '/projects/ludo-royale.svg',
    github: 'https://github.com/venom20021/Ludo_royale',
    details:
      'Ludo Royale implements a server-authoritative architecture where all game logic, dice generation, and move validation are processed on the backend to prevent cheating. It features real-time WebSocket communication, public matchmaking with Elo-based leaderboards, private rooms with invite codes, and comprehensive player profiles with match history and achievements.',
    challenges:
      'Building a scalable WebSocket architecture capable of handling multiple concurrent game sessions with minimal latency. Designing a fault-tolerant game state recovery mechanism using Redis and PostgreSQL to handle unexpected server disconnects. Optimizing AWS infrastructure, Redis caching, and database queries for high traffic performance.',
  },
  {
    id: 'ml-pipeline',
    title: 'ML Predictive Pipeline',
    description:
      'End-to-end machine learning pipeline for predictive analytics. Features automated data ingestion, model training, and real-time inference endpoints on AWS infrastructure.',
    impact: 'Reduced prediction latency by 40% through optimized model serving.',
    technologies: ['Python', 'TensorFlow', 'AWS Lambda', 'S3', 'Step Functions'],
    image: '/projects/ml-pipeline.jpg',
    github: 'https://github.com/venom20021',
    details:
      'The pipeline automates the complete ML lifecycle from data collection to model deployment. AWS Step Functions orchestrate the workflow, while Lambda handles serverless inference.',
    challenges:
      'Optimizing cold-start times for Lambda-based inference required careful model quantization and layer caching strategies.',
  },
  {
    id: 'analytics-platform',
    title: 'High-Throughput Analytics Platform',
    description:
      'A real-time analytics pipeline processing 50,000+ events per minute using stream processing and in-memory data stores.',
    impact: 'Processes 50,000+ events/minute with sub-100ms query latency.',
    technologies: ['Go', 'Kafka', 'Kubernetes', 'PostgreSQL', 'Grafana'],
    image: '/projects/analytics.jpg',
    github: 'https://github.com/venom20021',
    details:
      'Built with Go for high-throughput stream processing, Kafka for event buffering, and Kubernetes for orchestration. Grafana dashboards provide real-time visibility into system health.',
    challenges:
      'Ensuring exactly-once processing semantics in a distributed streaming system required careful coordination between Kafka offsets and database transactions.',
  },
  // {
  //   id: 'ecommerce-architecture',
  //   title: 'Scalable E-Commerce Architecture',
  //   description:
  //     'Designed and deployed a cloud-native e-commerce platform with microservices, event-driven communication, and Infrastructure as Code.',
  //   impact: 'Architected for 99.9% uptime with auto-scaling across 3 availability zones.',
  //   technologies: ['Node.js', 'React', 'Docker', 'AWS', 'Terraform', 'MongoDB'],
  //   image: '/projects/ecommerce.jpg',
  //   github: 'https://github.com/venom20021',
  //   details:
  //     'The platform uses a microservices architecture with event-driven communication via message queues. Terraform manages all infrastructure as code across staging and production environments.',
  //   challenges:
  //     'Designing a consistent data model across distributed services required implementing the Saga pattern for distributed transactions and eventual consistency.',
  // },
];

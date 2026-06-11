'use client';

import Link from 'next/link';
import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TiltCard from '@/components/tilt-card';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const photoY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const photoRotate = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-gradient-x bg-[length:200%_200%]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--grid)/0.04)_1px,transparent_1px)] bg-[size:32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Product-driven Software Engineer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance">
              Building{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Scalable Systems
              </span>
              <br />
              That Drive Impact
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Full-stack engineer bridging deep technical expertise with product thinking to build
              solutions that make a difference.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="/sai-prabhat-resume.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted/50 hover:border-primary/30 transition-all duration-200 cursor-pointer"
              >
                Download Resume
                <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted-foreground font-medium hover:bg-muted/50 hover:text-foreground hover:border-primary/30 transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </div>
          </div>

          {/* Right: Photo with scroll animation */}
          <div className="relative flex justify-center lg:justify-end">
            <TiltCard tiltDegree={4} scaleOnHover={1.0} glareOpacity={0.35}>
            <motion.div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center"
              style={{
                scale: photoScale,
                y: photoY,
                rotate: photoRotate,
              }}
            >
              {/* Outermost decorative ring - animated rotation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Middle decorative ring */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-primary/10 animate-float" />

              {/* Glow behind photo */}
              <div className="absolute inset-8 rounded-full bg-primary/15 blur-2xl animate-pulse-slow" />

              {/* Main photo container - circular */}
              <motion.div
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
                whileInView={{ scale: [0.8, 1] }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Gradient border ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/30 p-[3px] shadow-2xl shadow-primary/20">
                  <div className="h-full w-full rounded-full bg-background" />
                </div>

                {/* The photo */}
                <div className="h-full w-full rounded-full overflow-hidden bg-gradient-to-br from-muted to-background">
                  <img
                    src="/profile.png"
                    alt="Sai Prabhat"
                    className="h-full w-full object-cover object-center scale-110"
                  />
                </div>

                {/* Name badge below photo */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-lg">
                    <span className="text-sm font-semibold text-foreground">Sai Prabhat</span>
                    <span className="mx-1.5 text-muted-foreground/30">·</span>
                    <span className="text-xs text-muted-foreground">Full-stack</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 animate-float">
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </section>
  );
}

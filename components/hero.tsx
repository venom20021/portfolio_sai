'use client';

import Link from 'next/link';
import { ArrowRight, Download, Mail, ChevronDown, Sparkles, Code2, Zap } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedGradient from '@/components/animated-gradient';
import HologramAvatar from '@/components/hologram-avatar';
import { useIsTouchDevice } from '@/hooks/use-is-touch-device';

const floatingIcons = [
  { Icon: Code2, x: '10%', y: '15%', size: 20 },
  { Icon: Zap, x: '85%', y: '20%', size: 18 },
  { Icon: Sparkles, x: '90%', y: '75%', size: 16 },
];

export default function Hero() {
  const isTouchDevice = useIsTouchDevice();
  const reduceMotion = useReducedMotion();
  const entranceY = reduceMotion ? 0 : 20;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Shader background */}
      <AnimatedGradient variant="hero" className="-z-10" />

      {/* Floating icons - only on desktop */}
      {!isTouchDevice && floatingIcons.map(({ Icon, x, y, size }) => (
        <motion.div
          key={Icon.name}
          className="absolute pointer-events-none text-primary/15 dark:text-primary/10 will-change-transform"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: reduceMotion ? 0 : [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left space-y-6">
            <motion.div
              initial={{ y: entranceY, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Product-driven Software Engineer
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: entranceY, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance"
            >
              Building{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Scalable Systems
              </span>
              <br />
              That Drive Impact
            </motion.h1>

            <motion.p
              initial={{ y: entranceY, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.36, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Full-stack engineer who combines production experience, cloud certification, and
              a teacher&apos;s clarity to build products that solve real problems.
            </motion.p>

            <motion.div
              initial={{ y: entranceY, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.44, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2"
            >
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
            </motion.div>
          </div>

          {/* Right: Holographic avatar visualization */}
          <motion.div
            initial={{ y: entranceY, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.52, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <HologramAvatar />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/40"
      >
        <span className="text-[10px] font-medium">Scroll</span>
        <ChevronDown className="h-3.5 w-3.5" />
      </motion.div>
    </section>
  );
}

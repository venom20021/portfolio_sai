'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedGradientProps {
  className?: string;
  variant?: 'hero' | 'section' | 'subtle';
}

export default function AnimatedGradient({
  className = '',
  variant = 'section',
}: AnimatedGradientProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Static gradient orbs - reduced from 3 to 2, slower animation, less blur */}
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2">
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 via-purple-500/8 to-transparent blur-2xl will-change-transform"
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2">
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-br from-primary/8 via-cyan-500/5 to-transparent blur-2xl will-change-transform"
          animate={{
            x: [0, -15, 20, 0],
            y: [0, 15, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </div>

      {variant === 'hero' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-br from-primary/5 via-blue-500/5 to-transparent blur-2xl will-change-transform"
            animate={{
              scale: [1, 1.08, 0.95, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 5,
            }}
          />
        </div>
      )}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
    </motion.div>
  );
}

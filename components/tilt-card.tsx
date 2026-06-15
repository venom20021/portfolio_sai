'use client';

import { useRef, useState, useEffect, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type SpringOptions } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltDegree?: number;
  scaleOnHover?: number;
  glareColor?: string;
  glareOpacity?: number;
}

const SPRING_CONFIG: SpringOptions = {
  stiffness: 300,
  damping: 25,
  mass: 0.5,
};

export default function TiltCard({
  children,
  className = '',
  tiltDegree = 8,
  scaleOnHover = 1.015,
  glareColor = 'hsl(var(--primary) / 0.08)',
  glareOpacity = 0.4,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, SPRING_CONFIG);
  const smoothY = useSpring(y, SPRING_CONFIG);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [tiltDegree, -tiltDegree]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-tiltDegree, tiltDegree]);

  const glareX = useTransform(smoothX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], [0, 100]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / rect.width;
    const normY = (e.clientY - centerY) / rect.height;

    x.set(normX);
    y.set(normY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // On touch devices, render a static card without tilt animations
  if (isTouchDevice) {
    return (
      <div className={`relative ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective: 800,
        transformStyle: 'preserve-3d',
      }}
      animate={{ scale: 1 }}
      whileHover={{ scale: scaleOnHover }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}

        {/* Glare overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor}, transparent 70%)`,
            opacity: glareOpacity,
            transform: 'translateZ(20px)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

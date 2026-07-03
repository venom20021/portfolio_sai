'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsTouchDevice } from '@/hooks/use-is-touch-device';

interface Particle {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
}

const PARTICLE_COUNT = 8;
const PARTICLE_LIFETIME = 600;

let particleId = 0;

export default function ClickParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const isTouchDevice = useIsTouchDevice();

  const handleClick = useCallback((e: MouseEvent) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = (Math.PI * 2 * i) / PARTICLE_COUNT;
      const speed = 50 + Math.random() * 60;
      newParticles.push({
        id: ++particleId,
        x: e.clientX,
        y: e.clientY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 3,
      });
    }
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, PARTICLE_LIFETIME);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [isTouchDevice, handleClick]);

  if (isTouchDevice) return null;

  return (
    <AnimatePresence>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: p.x - p.size / 2,
            y: p.y - p.size / 2,
            width: p.size,
            height: p.size,
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            x: p.x + p.dx - p.size / 2,
            y: p.y + p.dy - p.size / 2,
            opacity: 0,
            scale: 0,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed rounded-full bg-primary pointer-events-none"
          style={{ zIndex: 9997 }}
        />
      ))}
    </AnimatePresence>
  );
}

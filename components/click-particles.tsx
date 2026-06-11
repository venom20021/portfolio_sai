'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  velocity: number;
  size: number;
}

const PARTICLE_COUNT = 12;
const PARTICLE_LIFETIME = 700;

export default function ClickParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const idRef = useRef(0);

  const spawnParticles = useCallback((e: MouseEvent) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = (Math.PI * 2 * i) / PARTICLE_COUNT + (Math.random() - 0.5) * 0.5;
      newParticles.push({
        id: idRef.current++,
        x: e.clientX,
        y: e.clientY,
        angle,
        velocity: 60 + Math.random() * 80,
        size: 3 + Math.random() * 4,
      });
    }
    setParticles((prev) => [...prev, ...newParticles]);

    // Clean up after animation
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.find((np) => np.id === p.id)),
      );
    }, PARTICLE_LIFETIME);
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', spawnParticles);
    return () => window.removeEventListener('mousedown', spawnParticles);
  }, [spawnParticles]);

  return (
    <AnimatePresence>
      {particles.map((p) => {
        const dx = Math.cos(p.angle) * p.velocity;
        const dy = Math.sin(p.angle) * p.velocity;

        return (
          <motion.div
            key={p.id}
            className="fixed pointer-events-none z-[9997] rounded-full bg-primary"
            style={{
              width: p.size,
              height: p.size,
            }}
            initial={{
              x: p.x,
              y: p.y,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: p.x + dx,
              y: p.y + dy,
              opacity: 0,
              scale: 0,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: PARTICLE_LIFETIME / 1000,
              ease: 'easeOut',
            }}
          />
        );
      })}
    </AnimatePresence>
  );
}

'use client';

import { useEffect, useRef } from 'react';

export default function MouseBeam() {
  const beamRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!('ontouchstart' in window) && navigator.maxTouchPoints === 0) {
      const handleMouseMove = (e: MouseEvent) => {
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          if (beamRef.current) {
            beamRef.current.style.setProperty('--beam-x', `${e.clientX}px`);
            beamRef.current.style.setProperty('--beam-y', `${e.clientY}px`);
          }
        });
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }
  }, []);

  return (
    <div
      ref={beamRef}
      className="pointer-events-none fixed inset-0 z-30 opacity-30"
      style={{
        background:
          'radial-gradient(600px at var(--beam-x, 50%) var(--beam-y, 50%), hsl(var(--primary) / 0.08), transparent 80%)',
      }}
    />
  );
}

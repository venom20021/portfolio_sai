'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function MouseBeam() {
  const beamRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!beamRef.current) return;
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    beamRef.current.style.setProperty('--beam-x', `${x}%`);
    beamRef.current.style.setProperty('--beam-y', `${y}%`);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    // Set initial position to center
    if (beamRef.current) {
      beamRef.current.style.setProperty('--beam-x', '50%');
      beamRef.current.style.setProperty('--beam-y', '50%');
    }
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);

  return (
    <div
      ref={beamRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background:
          'radial-gradient(600px circle at var(--beam-x, 50%) var(--beam-y, 50%), hsl(var(--primary) / var(--beam-opacity, 0.08)), transparent 50%)',
      }}
    />
  );
}

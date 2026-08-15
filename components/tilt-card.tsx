'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { useIsTouchDevice } from '@/hooks/use-is-touch-device';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltDegree?: number;
  scaleOnHover?: number;
  glareOpacity?: number;
  glareColor?: string;
}

export default function TiltCard({
  children,
  className = '',
  tiltDegree = 5,
  scaleOnHover = 1.02,
  glareOpacity = 0.25,
  glareColor = '255, 255, 255',
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isTouchDevice = useIsTouchDevice();
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);

  // Cleanup rafRef on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!ref.current || isTouchDevice) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (y - 0.5) * -tiltDegree;
      const rotateY = (x - 0.5) * tiltDegree;

      setStyle({
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? scaleOnHover : 1}, ${isHovered ? scaleOnHover : 1}, 1)`,
        transition: 'transform 0.05s ease-out',
        willChange: 'transform',
      });

      setGlareStyle({
        background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(${glareColor}, ${glareOpacity}) 0%, transparent 60%)`,
      });
    });
  }, [isTouchDevice, tiltDegree, scaleOnHover, isHovered, glareColor, glareOpacity]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s ease-out',
    });
    setGlareStyle({});
  }, []);

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={glareStyle}
      />
    </div>
  );
}

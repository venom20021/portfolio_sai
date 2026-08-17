'use client';

import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';
import { useRef, useCallback } from 'react';
import { useIsTouchDevice } from '@/hooks/use-is-touch-device';

const PRIMARY = 'hsl(var(--primary))';

export default function HologramAvatar() {
  const isTouchDevice = useIsTouchDevice();
  const reduceMotion = useReducedMotion();
  const interactive = !isTouchDevice && !reduceMotion;

  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Springs give the tilt momentum instead of snapping to the cursor.
  const smx = useSpring(mx, { stiffness: 110, damping: 15 });
  const smy = useSpring(my, { stiffness: 110, damping: 15 });

  const rotateX = useTransform(smy, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-14, 14]);
  const transform = useMotionTemplate`translateZ(0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // Specular highlight follows the cursor, selling the sphere's curvature.
  const hx = useTransform(smx, (v) => `${(v + 0.5) * 100}%`);
  const hy = useTransform(smy, (v) => `${(v + 0.5) * 100}%`);
  const highlightBg = useMotionTemplate`radial-gradient(circle at ${hx} ${hy}, rgba(255,255,255,0.22), transparent 50%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mx, my]
  );

  const handleMouseLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <div className="relative mx-auto w-full max-w-[28rem]">
      {/* Ground shadow — stays put while the sphere tilts */}
      <div className="absolute bottom-[2%] left-1/2 h-8 w-[72%] -translate-x-1/2 rounded-[50%] bg-primary/15 blur-2xl" />

      <div
        ref={ref}
        onMouseMove={interactive ? handleMouseMove : undefined}
        onMouseLeave={interactive ? handleMouseLeave : undefined}
        className="relative aspect-square w-full"
        style={{ perspective: '900px' }}
      >
        {/* Soft ambient glow */}
        <div className="absolute inset-10 rounded-full bg-primary/20 blur-3xl" />

        {/* Tilting sphere */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center will-change-transform"
          style={interactive ? { transform } : undefined}
        >
          <div className="relative aspect-square w-[84%]">
            {/* Translucent sphere: shaded fill, faint wireframe, rim */}
            <svg viewBox="0 0 400 400" className="pointer-events-none absolute inset-0 h-full w-full">
              <defs>
                <radialGradient id="holo-sphere-fill" cx="32%" cy="28%" r="80%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="35%" stopColor="hsl(var(--primary) / 0.14)" />
                  <stop offset="72%" stopColor="hsl(var(--primary) / 0.05)" />
                  <stop offset="100%" stopColor="rgba(5,5,5,0.4)" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="150" fill="url(#holo-sphere-fill)" />
              <circle cx="200" cy="200" r="150" fill="none" stroke={PRIMARY} strokeOpacity="0.4" strokeWidth="1" />
            </svg>

            {/* Wireframe face */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative aspect-square w-[74%] overflow-hidden rounded-full bg-muted shadow-[inset_0_0_60px_rgba(0,0,0,0.55)]">
                <Image
                  src="/profile.png"
                  alt="Sai Prabhat"
                  width={1088}
                  height={1088}
                  priority
                  className="h-full w-full object-cover object-center grayscale contrast-140 brightness-85"
                />
                {/* Red duotone */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/20 to-transparent mix-blend-screen" />
                <div className="pointer-events-none absolute inset-0 bg-primary/20 mix-blend-multiply" />
                {/* Cursor-follow specular */}
                {interactive && (
                  <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: highlightBg }}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

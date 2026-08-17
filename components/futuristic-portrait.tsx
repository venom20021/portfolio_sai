'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

/** Deterministic code-snippet pattern behind the portrait. */
const CODE_SNIPPETS = [
  { text: 'const ship = () => deploy()', left: '6%', top: '16%' },
  { text: '{ latency: 12ms }', left: '64%', top: '10%' },
  { text: '→ production', left: '10%', top: '62%' },
  { text: '// systems online', left: '58%', top: '74%' },
  { text: 'git push origin main', left: '28%', top: '88%' },
  { text: 'await integrate()', left: '72%', top: '42%' },
  { text: 'refactor(build): scale', left: '38%', top: '4%' },
  { text: 'pipeline: green ✓', left: '2%', top: '40%' },
];

/** Deterministic particle dots. */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: `${((i * 37 + 9) % 96) + 2}%`,
  top: `${((i * 59 + 5) % 96) + 2}%`,
  size: 1 + ((i * 13) % 2),
}));

const HUD_LABELS = [
  { text: 'TARGET: ACQUIRED', className: 'left-0 top-3' },
  { text: 'SYSTEM: INTEGRATED', className: 'right-0 top-3' },
  { text: 'LINK: SECURE', className: 'bottom-3 left-0' },
  { text: 'SIGNAL: STABLE', className: 'bottom-3 right-0' },
];

export default function FuturisticPortrait() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="group relative mx-auto w-full max-w-[26rem] select-none">
      {/* Code pattern + particles, fading into the dark background */}
      <div className="pointer-events-none absolute -inset-8 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle, hsl(var(--primary) / 0.25) 1px, transparent 1.2px)',
            backgroundSize: '18px 18px',
          }}
        />
        {/* Code snippets */}
        {CODE_SNIPPETS.map((s, i) => (
          <span
            key={i}
            className="absolute whitespace-nowrap font-mono text-[9px] tracking-wider text-zinc-500/60 dark:text-zinc-500/50"
            style={{ left: s.left, top: s.top }}
          >
            {s.text}
          </span>
        ))}
        {/* Particle dots */}
        {PARTICLES.map((p, i) => (
          <span
            key={`p${i}`}
            className="absolute rounded-full bg-primary/50"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          />
        ))}
      </div>

      {/* Portrait + rings */}
      <div className="relative mx-auto aspect-square w-64 sm:w-72 lg:w-80">
        {/* Soft ambient glow */}
        <div className="absolute inset-8 rounded-full bg-primary/20 blur-3xl" />

        {/* Rotating dashed SVG ring */}
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeOpacity="0.5"
              strokeWidth="0.75"
              strokeDasharray="3 6"
            />
          </svg>
        </motion.div>
        {/* Faint static ring */}
        <div className="absolute inset-[4%] rounded-full border border-primary/15" />

        {/* Core portrait */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="relative aspect-square w-[88%] overflow-hidden rounded-full border border-primary/40 shadow-[0_0_24px_hsl(var(--primary)/0.35),0_0_70px_hsl(var(--primary)/0.18),inset_0_0_24px_hsl(var(--primary)/0.15)] transition-shadow duration-300 group-hover:shadow-[0_0_38px_hsl(var(--primary)/0.55),0_0_90px_hsl(var(--primary)/0.3),inset_0_0_24px_hsl(var(--primary)/0.2)]"
          >
            <Image
              src="/profile.png"
              alt="Sai Prabhat"
              width={1088}
              height={1088}
              priority
              className="h-full w-full object-cover object-center saturate-[0.75] contrast-125 brightness-90"
            />
            {/* Subtle duotone tint */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-primary/10 mix-blend-screen" />
          </motion.div>
        </div>

        {/* Corner brackets */}
        <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-primary/40" />
        <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-primary/40" />
        <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-primary/40" />
        <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-primary/40" />
      </div>

      {/* HUD micro-labels */}
      {HUD_LABELS.map((l) => (
        <span
          key={l.text}
          className={`absolute font-mono text-[10px] tracking-widest text-zinc-500 ${l.className}`}
        >
          {l.text}
        </span>
      ))}
    </div>
  );
}

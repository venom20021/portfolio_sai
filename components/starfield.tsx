/** Deterministic star positions — no Math.random, stable across renders. */
const STARS = Array.from({ length: 140 }, (_, i) => ({
  left: `${((i * 37 + 11) % 100)}%`,
  top: `${((i * 61 + 7) % 100)}%`,
  size: 1 + ((i * 17) % 2),
  dur: `${2.5 + ((i * 7) % 35) / 10}s`,
  delay: `${(i % 16) * 0.35}s`,
  driftX: `${((i * 7) % 24) - 12}px`,
  driftY: `${((i * 11) % 24) - 12}px`,
  driftDur: `${40 + ((i * 13) % 40)}s`,
}));

/** Shooting stars — long pauses between passes, staggered. */
const SHOOTING_STARS = [
  { left: '78%', top: '12%', dur: 9, delay: 3 },
  { left: '62%', top: '6%', dur: 11, delay: 7 },
  { left: '88%', top: '22%', dur: 8, delay: 11 },
];

/** A handful of larger, glowing stars for depth. */
const BRIGHT_STARS = Array.from({ length: 8 }, (_, i) => ({
  left: `${((i * 53 + 19) % 100)}%`,
  top: `${((i * 29 + 41) % 100)}%`,
  size: 2.5 + ((i * 3) % 1),
  dur: `${3 + ((i * 5) % 20) / 10}s`,
  delay: `${(i % 8) * 0.6}s`,
  driftX: `${((i * 7) % 20) - 10}px`,
  driftY: `${((i * 11) % 20) - 10}px`,
  driftDur: `${50 + ((i * 13) % 30)}s`,
}));

export default function Starfield() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-50 transition-opacity duration-700 dark:opacity-100"
    >
      {/* Accent-tinted nebula orbs (desktop only — expensive blur) */}
      <div className="hidden md:block">
        <div className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-primary/15 blur-[130px]" />
        <div className="absolute -bottom-32 -right-32 h-[38rem] w-[38rem] rounded-full bg-primary/8 blur-[130px]" />
        <div className="absolute left-[55%] top-[15%] h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-[110px]" />
      </div>

      {/* Twinkling, drifting stars */}
      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-foreground/45 dark:bg-white"
          style={
            {
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              '--drift-x': s.driftX,
              '--drift-y': s.driftY,
              animation: `twinkle ${s.dur} ease-in-out infinite, star-drift ${s.driftDur} linear infinite`,
              animationDelay: `${s.delay}, 0s`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Shooting stars */}
      {SHOOTING_STARS.map((s, i) => (
        <span
          key={`s${i}`}
          className="absolute h-px w-28 bg-gradient-to-r from-white via-white/70 to-transparent"
          style={{
            left: s.left,
            top: s.top,
            animation: `shoot ${s.dur}s linear infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Bright glowing stars */}
      {BRIGHT_STARS.map((s, i) => (
        <span
          key={`b${i}`}
          className="absolute rounded-full bg-foreground/45 shadow-[0_0_6px_1px_rgba(0,0,0,0.2)] dark:bg-white dark:shadow-[0_0_6px_1px_rgba(255,255,255,0.6)]"
          style={
            {
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              '--drift-x': s.driftX,
              '--drift-y': s.driftY,
              animation: `twinkle-bright ${s.dur} ease-in-out infinite, star-drift ${s.driftDur} linear infinite`,
              animationDelay: `${s.delay}, 0s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

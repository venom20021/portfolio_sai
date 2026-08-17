'use client';

import Image from 'next/image';
import { useIsTouchDevice } from '@/hooks/use-is-touch-device';

const PRIMARY = 'hsl(var(--primary))';

/** Deterministic particle field — no Math.random, so SSR/hydration match. */
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  left: `${((i * 37 + 11) % 96) + 2}%`,
  top: `${((i * 61 + 5) % 96) + 2}%`,
  size: 1 + ((i * 13) % 3),
  delay: `${(i % 12) * 0.35}s`,
}));

function StatusLabel({
  children,
  dotClass,
}: {
  children: React.ReactNode;
  dotClass: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1 font-mono text-[9px] tracking-[0.14em] text-primary/90 backdrop-blur-sm sm:text-[10px]">
      <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      {children}
    </div>
  );
}

function OptionBox({
  title,
  className = '',
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-lg border border-primary/25 bg-background/70 p-1.5 backdrop-blur-sm sm:p-2 ${className}`}
    >
      <div className="relative h-10 overflow-hidden rounded bg-black/50">{children}</div>
      <div className="mt-1 text-center font-mono text-[7px] uppercase leading-tight tracking-wide text-primary/90 sm:text-[8px]">
        {title}
      </div>
    </div>
  );
}

export default function HologramAvatar() {
  const isTouchDevice = useIsTouchDevice();
  const heavy = !isTouchDevice; // expensive layers: particles, blur, rotating rings

  return (
    <div className="relative mx-auto w-full max-w-[26rem]">
      {/* Sphere stage */}
      <div className="relative aspect-square w-full">
        {/* Ambient red glow */}
        <div className="absolute inset-6 rounded-full bg-primary/25 blur-3xl" />

        {/* Concentric rings around the wireframe face */}
        <div className="absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30" />
        <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15" />
        <div
          className="absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/35"
          style={{ animation: heavy ? 'holo-orbit-reverse 30s linear infinite' : undefined }}
        />

        {/* Coordinate markers */}
        <div className="absolute left-1/2 top-[5%] -translate-x-1/2 font-mono text-[8px] text-primary/80">
          +Y
        </div>
        <div className="absolute left-1/2 top-[13%] h-2 w-px -translate-x-1/2 bg-primary/50" />
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 font-mono text-[8px] text-primary/80">
          −Y
        </div>
        <div className="absolute bottom-[13%] left-1/2 h-2 w-px -translate-x-1/2 bg-primary/50" />
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 font-mono text-[8px] text-primary/80">
          −X
        </div>
        <div className="absolute left-[13%] top-1/2 h-px w-2 bg-primary/50" />
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 font-mono text-[8px] text-primary/80">
          +X
        </div>
        <div className="absolute right-[13%] top-1/2 h-px w-2 bg-primary/50" />

        {/* Coordinate readout chips */}
        <div className="absolute left-[2%] top-[12%] rounded border border-primary/20 bg-background/70 px-1.5 py-0.5 font-mono text-[8px] text-primary/80 backdrop-blur-sm">
          X:+0.42 · Y:−0.18
        </div>
        <div className="absolute right-[2%] top-[12%] rounded border border-primary/20 bg-background/70 px-1.5 py-0.5 font-mono text-[8px] text-primary/80 backdrop-blur-sm">
          Z:+0.87
        </div>

        {/* Wireframe-model face: likeness formed from a red mesh */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative aspect-square w-[70%] overflow-hidden rounded-full bg-muted shadow-[0_0_90px_rgba(220,38,38,0.4)]">
            <Image
              src="/profile.png"
              alt="Sai Prabhat"
              width={1088}
              height={1088}
              priority
              className="h-full w-full object-cover object-center grayscale contrast-150 brightness-75"
            />
            {/* Red wireframe mesh grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(220,38,38,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.45) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />
            {/* Red duotone */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/25 to-transparent mix-blend-screen" />
            <div className="pointer-events-none absolute inset-0 bg-primary/25 mix-blend-multiply" />
            {/* Scanlines */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0 1px, transparent 1px 3px)',
                animation: heavy ? 'holo-scan 7s linear infinite' : undefined,
              }}
            />
            {/* Red particle field */}
            {heavy &&
              PARTICLES.map((p, i) => (
                <span
                  key={i}
                  className="absolute rounded-full bg-primary/80"
                  style={{
                    left: p.left,
                    top: p.top,
                    width: p.size,
                    height: p.size,
                    animation: 'holo-pulse 2.5s ease-in-out infinite',
                    animationDelay: p.delay,
                  }}
                />
              ))}
            {/* Inner ring */}
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-primary/40" />
          </div>
        </div>

        {/* Flanking integrated option boxes (desktop) */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 hidden -translate-y-1/2 justify-between lg:flex">
          <OptionBox title="Original Option 1: Volumetric (Integrated)" className="w-32 xl:w-36">
            <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)', backgroundSize: '7px 7px' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full border border-primary/80" />
              <div className="absolute h-3.5 w-3.5 rounded-full border border-primary/50" />
              <div className="absolute h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
          </OptionBox>
          <OptionBox title="Original Option 3: Generative Data (Integrated)" className="w-32 xl:w-36">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(220,38,38,0.75) 1px, transparent 1.5px)', backgroundSize: '5px 5px' }} />
          </OptionBox>
        </div>
      </div>

      {/* Integrated option boxes (small screens, below hologram) */}
      <div className="mt-3 grid grid-cols-2 gap-2 lg:hidden">
        <OptionBox title="Original Option 1: Volumetric (Integrated)">
          <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)', backgroundSize: '7px 7px' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 rounded-full border border-primary/80" />
            <div className="absolute h-3.5 w-3.5 rounded-full border border-primary/50" />
            <div className="absolute h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
        </OptionBox>
        <OptionBox title="Original Option 3: Generative Data (Integrated)">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(220,38,38,0.75) 1px, transparent 1.5px)', backgroundSize: '5px 5px' }} />
        </OptionBox>
      </div>

      {/* Red status text below the hologram */}
      <div className="mt-3 flex flex-col items-center gap-1.5 text-center">
        <StatusLabel dotClass="bg-primary animate-[holo-pulse_2s_ease-in-out_infinite]">
          COMPARATIVE HYBRID VISUAL: ACTIVATED
        </StatusLabel>
        <StatusLabel dotClass="bg-primary/70">MODE: VOLUMETRIC-DATA-AVATAR</StatusLabel>
        <StatusLabel dotClass="bg-primary animate-[holo-pulse_2.5s_ease-in-out_infinite]">
          STATUS: INTEGRATED AND EVALUATING
        </StatusLabel>
      </div>

      {/* Red decision progress bar */}
      <div className="mt-3">
        <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary/80 sm:text-[10px]">
          Unified portrait decision in progress...
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 shadow-[0_0_12px_rgba(220,38,38,0.6)]"
            style={{ animation: 'holo-progress 5s ease-in-out infinite alternate' }}
          />
        </div>
      </div>
    </div>
  );
}

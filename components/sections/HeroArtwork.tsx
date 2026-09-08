'use client';

import Image from 'next/image';
import { howIWork } from '@/data/site';

const ORB_LABELS = [
  { title: 'AI', sub: 'Intelligence', detail: 'LLMs · Vision · Automation', x: 68.5, y: 30 },
  { title: 'Product', sub: 'Structure', detail: 'UX · Systems · Roadmapping', x: 58, y: 55 },
  { title: 'Operations', sub: 'Execution', detail: 'Field ops · Process · Scale', x: 79, y: 55 },
];

const AMBIENT_MARKS = [
  { x: 48, y: 29 },
  { x: 92, y: 26 },
  { x: 88, y: 63 },
  { x: 43, y: 68 },
];

export function HeroArtwork() {
  return (
    <div
      className="pointer-events-none relative mx-auto mb-8 h-64 w-full max-w-[19rem] overflow-hidden sm:h-80 sm:max-w-sm lg:absolute lg:inset-0 lg:mx-0 lg:mb-0 lg:h-auto lg:max-w-none lg:overflow-visible"
      aria-hidden
    >
      <div className="animate-ambient-drift absolute inset-0 z-10 opacity-[0.15] mix-blend-screen [background:radial-gradient(38%_30%_at_58%_45%,rgba(242,240,234,0.2),transparent_72%)]" />

      <Image
        src="/hero/artwork.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 55vw, 90vw"
        className="object-contain object-[65%_60%] lg:object-[82%_center]"
      />

      <div className="absolute inset-0 z-20 hidden lg:block">
        <span
          className="absolute rounded-full border border-border"
          style={{ left: '68%', top: '43%', width: '30rem', height: '30rem', transform: 'translate(-50%,-50%)' }}
        />
        <span
          className="absolute rounded-full border border-border"
          style={{ left: '68%', top: '43%', width: '23rem', height: '23rem', transform: 'translate(-50%,-50%)' }}
        />

        {AMBIENT_MARKS.map((m, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-faint opacity-50"
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
          />
        ))}

        {ORB_LABELS.map((orb) => (
          <div
            key={orb.title}
            className="absolute text-center"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              transform: 'translate(-50%,-50%)',
              textShadow: '0 1px 2px rgba(8,9,10,0.9), 0 0 14px rgba(8,9,10,0.85), 0 0 28px rgba(8,9,10,0.6)',
            }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink">{orb.title}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink/80">{orb.sub}</p>
            <p className="mt-1 whitespace-nowrap font-mono text-[10px] text-ink/60">{orb.detail}</p>
          </div>
        ))}

        <div className="absolute" style={{ left: '95%', top: '20%', transform: 'translate(-100%,0)' }}>
          <p className="whitespace-nowrap text-right font-mono text-[10px] uppercase leading-relaxed tracking-wider text-faint">
            Ideas
            <br />
            Systems
            <br />
            People
            <br />
            Real-world impact
          </p>
        </div>

        <div className="absolute" style={{ left: '97%', top: '68%', transform: 'translate(-100%,0)' }}>
          <p className="whitespace-nowrap text-right font-mono text-[10px] uppercase leading-relaxed tracking-wider text-faint">
            A more
            <br />
            intelligent
            <br />
            tomorrow
          </p>
        </div>

        <div className="absolute" style={{ left: '75%', top: '62%' }}>
          <div className="relative flex flex-col gap-8">
            <span className="absolute bottom-2 left-[3px] top-2 w-px bg-border" aria-hidden />
            {howIWork.map((step) => (
              <div key={step.index} className="relative flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-faint" />
                <p className="whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-faint">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

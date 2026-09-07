'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectData } from '@/lib/types';
import { MetricStrip } from '@/components/ui/Metric';
import { experience } from '@/data/experience';

const ZONE_A = { points: [
  [172, 268], [198, 252], [232, 258], [252, 288], [238, 332], [204, 342], [176, 322], [158, 296], [190, 300],
] };
const ZONE_B = { points: [
  [522, 128], [548, 108], [578, 114], [600, 138], [588, 168], [558, 180], [530, 164], [512, 148], [546, 144],
] };
const ZONE_C = { points: [
  [562, 378], [584, 360], [612, 366], [636, 388], [644, 414], [618, 432], [590, 420], [570, 398], [604, 404],
] };
const BRIDGE_POINTS = [
  [350, 224], [420, 336], [478, 258], [322, 398], [462, 200], [340, 300],
];
const ROUTE_TRACE = [ZONE_A.points[8], ZONE_A.points[0], ZONE_A.points[2], ZONE_A.points[5]];
const ACTIVE_MARK = ZONE_A.points[5];

function FieldCoverage() {
  return (
    <div className="relative">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Field coverage — conceptual visualization</p>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
        Businesses sourced and validated across South India, organized into clusters and assigned across two-shift
        field plans.
      </p>

      <div className="bg-noise relative mt-6 aspect-[800/520] w-full overflow-hidden">
        <motion.svg
          viewBox="0 0 800 520"
          className="h-full w-full"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <defs>
            <filter id="zoneBlur" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="22" />
            </filter>
          </defs>

          <g filter="url(#zoneBlur)" fill="rgba(242,240,234,0.07)">
            <ellipse cx="205" cy="292" rx="105" ry="72" transform="rotate(-10 205 292)" />
            <ellipse cx="230" cy="312" rx="85" ry="60" transform="rotate(16 230 312)" />
            <ellipse cx="558" cy="148" rx="92" ry="58" transform="rotate(8 558 148)" />
            <ellipse cx="576" cy="140" rx="72" ry="48" transform="rotate(-14 576 140)" />
            <ellipse cx="602" cy="398" rx="88" ry="58" transform="rotate(-9 602 398)" />
            <ellipse cx="616" cy="412" rx="68" ry="46" transform="rotate(12 616 412)" />
          </g>

          <line x1="60" y1="470" x2="740" y2="470" stroke="#2e3234" strokeWidth="1" opacity="0.5" />
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={i}
              x1={60 + i * 40}
              y1="466"
              x2={60 + i * 40}
              y2="474"
              stroke="#2e3234"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}

          <motion.path
            d={`M ${ROUTE_TRACE.map((p) => p.join(',')).join(' L ')}`}
            fill="none"
            stroke="#4a4e51"
            strokeWidth="1"
            strokeDasharray="3 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {BRIDGE_POINTS.map(([x, y], i) => (
            <circle key={`bridge-${i}`} cx={x} cy={y} r="2" className="fill-faint" opacity="0.55" />
          ))}

          {[ZONE_A, ZONE_B, ZONE_C].map((zone, zi) =>
            zone.points.map(([x, y], i) => {
              const isActive = x === ACTIVE_MARK[0] && y === ACTIVE_MARK[1];
              const isAnchor = i === 0;
              if (isActive) return null;
              return (
                <circle
                  key={`p-${zi}-${i}`}
                  cx={x}
                  cy={y}
                  r={isAnchor ? 3.2 : 2.2}
                  className={isAnchor ? 'fill-muted' : 'fill-border-strong'}
                />
              );
            })
          )}

          <circle cx={ACTIVE_MARK[0]} cy={ACTIVE_MARK[1]} r="3" className="fill-accent" />
        </motion.svg>
      </div>

      <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-faint">116 businesses · 19 categories</p>
    </div>
  );
}

export function InstaworkFeature({ project }: { project: ProjectData }) {
  const href = project.caseStudyRoute ?? '#';
  const period = experience.find((e) => e.org === project.title)?.period;

  return (
    <div className="border-t border-border pt-8 sm:pt-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-4xl leading-none text-faint opacity-50 sm:text-5xl">{project.index}</span>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-faint">
          <span>{project.category}</span>
          <span>{project.status}</span>
        </div>
      </div>

      {project.tagline && (
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-faint">{project.tagline}</p>
      )}

      <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-4xl">{project.title}</h3>
          <p className="mt-3 text-lg text-muted">{project.subtitle}</p>
          <p className="mt-2 text-sm text-faint">
            {project.role}
            {period ? ` · ${period}` : ''}
          </p>
        </div>
        <Link
          href={href}
          className="group flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:text-muted"
        >
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>

      <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Field officers → Data captains → Data collectors → Reporting (SOD / MOD / EOD) → Command center
          </p>

          <ul className="mt-8 space-y-3">
            {project.whatIOwned.slice(0, 5).map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <FieldCoverage />
      </div>

      <MetricStrip metrics={project.metrics} className="mt-14 border-t border-border pt-8" />
    </div>
  );
}

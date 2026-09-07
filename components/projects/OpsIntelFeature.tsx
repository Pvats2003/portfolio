'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectData } from '@/lib/types';

const FRAGMENT_COUNT = 7;
const FRAGMENTS = Array.from({ length: FRAGMENT_COUNT }, (_, i) => {
  const t = i / (FRAGMENT_COUNT - 1);
  const sign = i % 2 === 0 ? -1 : 1;
  return {
    x: 3 + t * 33,
    y: 46 + sign * 30 * (1 - t),
    w: 24 - 6 * t,
    h: 8,
    rot: sign * (20 * (1 - t) + 1),
  };
});

const FIELDS = ['Location update', 'Blocker', 'Completion count'];

function InformationTransformation() {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        Information transformation — conceptual visualization
      </p>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
        The same field update — a location, a blocker, a completion count — arrives in a dozen phrasings. OpsIntel
        resolves it into one structured record.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="bg-noise relative mt-6 aspect-[16/10] w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          {FRAGMENTS.map((f, i) => (
            <span
              key={i}
              className="absolute border border-border-strong bg-ink/[0.04]"
              style={{
                left: `${f.x}%`,
                top: `${f.y}%`,
                width: `${f.w}%`,
                height: `${f.h}%`,
                transform: `rotate(${f.rot}deg)`,
              }}
            />
          ))}
        </div>

        <span className="absolute left-1/2 top-3 h-[calc(100%-1.5rem)] w-px bg-border" aria-hidden />
        <span className="absolute left-1/2 top-3 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" aria-hidden />

        <div className="absolute right-[6%] top-1/2 w-[38%] -translate-y-1/2 space-y-5">
          {FIELDS.map((field) => (
            <div key={field} className="border-t border-border-strong pt-2">
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink">{field}</p>
            </div>
          ))}
        </div>

        <span className="absolute left-[6%] top-[6%] h-2 w-2 border-l border-t border-faint opacity-60" aria-hidden />
        <span className="absolute right-[6%] bottom-[6%] h-2 w-2 border-b border-r border-faint opacity-60" aria-hidden />
      </motion.div>
    </div>
  );
}

export function OpsIntelFeature({ project }: { project: ProjectData }) {
  const href = project.caseStudyRoute ?? '#';
  const transformStages = project.sections.find((s) => s.id === 'approach')?.diagram?.stages ?? [];

  return (
    <div className="border-t border-border pt-8 sm:pt-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-4xl leading-none text-faint opacity-50 sm:text-5xl">{project.index}</span>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-faint">
          <span>{project.category}</span>
          <span>{project.status}</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-4xl">{project.title}</h3>
          <p className="mt-3 text-lg text-muted">{project.subtitle}</p>
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

      <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          {transformStages.length > 0 && (
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {transformStages.map((s) => s.label).join(' → ')}
            </p>
          )}

          <ul className="mt-8 space-y-3">
            {project.whatIOwned.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <InformationTransformation />
      </div>
    </div>
  );
}

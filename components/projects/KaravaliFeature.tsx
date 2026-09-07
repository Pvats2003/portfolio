'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectData } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { MetricStrip } from '@/components/ui/Metric';

const COAST_MARKS = [
  { x: 150, y: 142 },
  { x: 280, y: 162 },
  { x: 400, y: 196 },
  { x: 520, y: 226 },
];
const SELECTED_MARK = { x: 340, y: 178 };

function CoastalContext() {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        Coastal Karnataka — conceptual place context
      </p>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
        Hyper-local recommendations surfaced by region and category, across Udupi and Dakshina Kannada.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="bg-noise relative mt-6 aspect-[700/460] w-full overflow-hidden"
      >
        <svg viewBox="0 0 700 460" className="h-full w-full">
          <defs>
            <filter id="coastBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>

          <path
            d="M -10,150 C 90,105 190,205 280,170 C 370,145 390,235 470,220 C 560,205 590,285 710,260 L 710,470 L -10,470 Z"
            fill="rgba(232,222,204,0.09)"
            filter="url(#coastBlur)"
          />

          <motion.path
            d="M -10,150 C 90,105 190,205 280,170 C 370,145 390,235 470,220 C 560,205 590,285 710,260"
            fill="none"
            stroke="#4a4e51"
            strokeWidth="1.25"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          />

          {COAST_MARKS.map((m, i) => (
            <circle key={i} cx={m.x} cy={m.y} r="2.4" className="fill-border-strong" />
          ))}
          <circle cx={SELECTED_MARK.x} cy={SELECTED_MARK.y} r="3" className="fill-accent" />
        </svg>
      </motion.div>
    </div>
  );
}

export function KaravaliFeature({ project }: { project: ProjectData }) {
  const href = project.caseStudyRoute ?? '#';
  const approach = project.sections.find((s) => s.id === 'approach');
  const stages = approach?.diagram?.stages ?? [];

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
          <p className="mt-2 text-sm text-faint">{project.role}</p>
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
          {stages.length > 0 && (
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {stages.map((s) => s.label).join(' → ')}
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

          {project.liveUrl && (
            <Button href={project.liveUrl} variant="secondary" external showArrow className="mt-8">
              Live product
            </Button>
          )}
        </div>

        <CoastalContext />
      </div>

      <MetricStrip metrics={project.metrics} className="mt-14 border-t border-border pt-8" />
    </div>
  );
}

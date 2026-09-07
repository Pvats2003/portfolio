'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectData } from '@/lib/types';
import { MetricStrip } from '@/components/ui/Metric';

function TrustGate({ project }: { project: ProjectData }) {
  const trustSection = project.sections.find((s) => s.id === 'human-in-the-loop');
  const hardStops = trustSection?.bullets ?? [];
  if (hardStops.length === 0) return null;

  const rows = hardStops.map((line) => {
    const [field, status] = line.split(' — ');
    return { field, status: status ?? '' };
  });

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Trust gate — conceptual visualization</p>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
        Every candidate fact carries a source, a confidence label, and a verified flag — unknown is never guessed.
        These conditions always route to a human, regardless of score:
      </p>

      <div className="relative mt-8 pl-6">
        <div className="absolute left-[3px] top-1 bottom-[38px] w-px bg-border-strong" aria-hidden />
        <ul className="space-y-6">
          {rows.map((row, i) => (
            <motion.li
              key={row.field}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="absolute -left-6 top-1.5 h-1.5 w-1.5 rounded-full bg-border-strong" aria-hidden />
              <p className="font-mono text-xs uppercase tracking-wider text-ink">{row.field}</p>
              <p className="mt-0.5 text-sm text-faint">{row.status}</p>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: rows.length * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-8 flex items-center gap-2"
        >
          <span className="absolute -left-6 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent" aria-hidden />
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-ink">Human review</p>
        </motion.div>
      </div>
    </div>
  );
}

export function CareerOSFeature({ project }: { project: ProjectData }) {
  const href = project.caseStudyRoute ?? '#';

  return (
    <div className="border-t-2 border-border-strong pt-10 sm:pt-14">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-5xl leading-none text-faint opacity-60 sm:text-6xl">{project.index}</span>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-faint">
          <span>{project.category}</span>
          <span>{project.status}</span>
          <span className="text-ink">Flagship</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{project.title}</h3>
          <p className="mt-3 text-lg text-muted sm:text-xl">{project.subtitle}</p>
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

      <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          {project.pipeline && (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted">
              {project.pipeline.map((stage, i) => (
                <span key={stage} className="flex items-center gap-2">
                  <span>{stage}</span>
                  {i < project.pipeline!.length - 1 && <ArrowRight className="h-3 w-3 text-faint" aria-hidden />}
                </span>
              ))}
            </div>
          )}

          {project.principle && (
            <p className="mt-8 border-l-2 border-border-strong pl-4 font-mono text-sm uppercase tracking-wide text-ink sm:text-base">
              {project.principle}
            </p>
          )}

          <ul className="mt-10 space-y-3">
            {project.whatIOwned.slice(0, 4).map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <TrustGate project={project} />
      </div>

      <MetricStrip metrics={project.metrics} className="mt-16 border-t border-border pt-10" />
    </div>
  );
}

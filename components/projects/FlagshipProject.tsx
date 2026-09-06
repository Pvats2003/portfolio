import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ProjectData } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { MetricStrip } from '@/components/ui/Metric';

export function FlagshipProject({ project }: { project: ProjectData }) {
  const href = project.caseStudyRoute ?? '#';

  return (
    <Link
      href={href}
      className="group block rounded-lg border border-accent/25 bg-surface p-8 transition-colors duration-300 ease-editorial hover:border-accent/50 sm:p-12"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs text-accent">{project.index}</span>
        <Tag>{project.category}</Tag>
        <Tag>{project.status}</Tag>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Flagship</span>
      </div>

      <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{project.title}</h3>
          <p className="mt-3 text-lg text-muted sm:text-xl">{project.subtitle}</p>
        </div>
        <span className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors group-hover:text-accent">
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>

      {project.pipeline && (
        <div className="mt-8 flex flex-wrap items-center gap-x-1.5 gap-y-2">
          {project.pipeline.map((stage, i) => (
            <span key={stage} className="flex items-center gap-1.5">
              <span className="rounded border border-border bg-bg px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                {stage}
              </span>
              {i < project.pipeline!.length - 1 && <ArrowRight className="h-3 w-3 text-faint" aria-hidden />}
            </span>
          ))}
        </div>
      )}

      {project.principle && (
        <p className="mt-8 border-l-2 border-accent pl-4 font-mono text-sm uppercase tracking-wide text-ink sm:text-base">
          {project.principle}
        </p>
      )}

      <MetricStrip metrics={project.metrics} className="mt-10" />
    </Link>
  );
}

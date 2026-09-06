import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ProjectData } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { MetricStrip } from '@/components/ui/Metric';
import { RoleBlock } from '@/components/case-studies/RoleBlock';
import { Button } from '@/components/ui/Button';

const MOTIF_CLASS: Record<'system' | 'grid', string> = {
  system: 'bg-dot-pattern opacity-50',
  grid: 'bg-grid-pattern opacity-40',
};

export function CaseStudyHero({ project }: { project: ProjectData }) {
  return (
    <header className="relative overflow-hidden border-b border-border bg-surface pb-14 pt-32 sm:pt-40">
      {project.heroMotif && (
        <div
          className={`pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)] ${MOTIF_CLASS[project.heroMotif]}`}
          aria-hidden
        />
      )}
      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Selected work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-faint">{project.index}</span>
          <Tag>{project.category}</Tag>
          <Tag>{project.status}</Tag>
        </div>

        <h1 className="mt-6 text-display-lg font-semibold tracking-tight text-ink">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-xl text-muted">{project.subtitle}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>

        {project.liveUrl && (
          <Button href={project.liveUrl} variant="secondary" external showArrow className="mt-6">
            View live
          </Button>
        )}

        <RoleBlock project={project} />

        {project.metrics.length > 0 && <MetricStrip metrics={project.metrics} className="mt-12" />}
      </div>
    </header>
  );
}

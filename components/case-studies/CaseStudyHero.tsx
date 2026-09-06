import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ProjectData } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { MetricStrip } from '@/components/ui/Metric';
import { TechStack } from '@/components/ui/TechStack';

export function CaseStudyHero({ project }: { project: ProjectData }) {
  return (
    <header className="border-b border-border bg-surface pb-14 pt-32 sm:pt-40">
      <div className="mx-auto max-w-content px-6 sm:px-10">
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

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-faint">Role</p>
            <p className="mt-1 text-sm text-ink">{project.role}</p>
          </div>
        </div>

        <TechStack items={project.technologies} className="mt-6" />

        {project.metrics.length > 0 && <MetricStrip metrics={project.metrics} className="mt-12" />}
      </div>
    </header>
  );
}

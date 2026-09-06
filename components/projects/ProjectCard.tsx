import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectData } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';

export function ProjectCard({ project, compact = false }: { project: ProjectData; compact?: boolean }) {
  const href = project.caseStudyRoute ?? '#';

  return (
    <Link
      href={href}
      className={`group flex h-full flex-col justify-between rounded-lg border border-border bg-surface transition-colors duration-300 ease-editorial hover:border-border-strong ${
        compact ? 'p-5' : 'p-6 sm:p-7'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-faint">{project.index}</span>
          <ArrowUpRight className="h-4 w-4 text-faint transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
        </div>
        <h3 className={`mt-4 font-semibold text-ink ${compact ? 'text-lg' : 'text-xl sm:text-2xl'}`}>{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <Tag>{project.category}</Tag>
        <span className="font-mono text-[11px] uppercase tracking-wider text-faint">{project.status}</span>
      </div>
    </Link>
  );
}

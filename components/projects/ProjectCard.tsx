import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectData } from '@/lib/types';

export function ProjectCard({ project, compact = false }: { project: ProjectData; compact?: boolean }) {
  const href = project.caseStudyRoute ?? '#';

  return (
    <Link
      href={href}
      className={`group flex h-full flex-col justify-between border-t border-border transition-colors duration-300 ease-editorial hover:border-border-strong ${
        compact ? 'pt-5' : 'pt-6'
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <span
            className={`font-mono leading-none text-faint opacity-50 transition-opacity duration-300 group-hover:opacity-90 ${
              compact ? 'text-2xl' : 'text-3xl sm:text-4xl'
            }`}
          >
            {project.index}
          </span>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink" />
        </div>
        <h3
          className={`mt-3 font-semibold text-ink transition-colors duration-300 group-hover:text-muted ${
            compact ? 'text-lg' : 'text-xl sm:text-2xl'
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-faint">
        <span>{project.category}</span>
        <span>{project.status}</span>
      </div>
    </Link>
  );
}

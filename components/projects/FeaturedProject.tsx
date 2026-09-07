import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectData } from '@/lib/types';
import { TechStack } from '@/components/ui/TechStack';

export function FeaturedProject({ project }: { project: ProjectData }) {
  const href = project.caseStudyRoute ?? '#';

  return (
    <Link
      href={href}
      className="group block border-t border-border pt-8 transition-colors duration-300 ease-editorial hover:border-border-strong sm:pt-10"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-4xl leading-none text-faint opacity-50 sm:text-5xl">{project.index}</span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
          {project.category} · {project.status}
        </span>
      </div>

      {project.tagline && (
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-faint">{project.tagline}</p>
      )}

      <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-4xl">{project.title}</h3>
          <p className="mt-3 text-lg text-muted">{project.subtitle}</p>
        </div>
        <span className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors group-hover:text-muted">
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>

      <TechStack items={project.technologies.slice(0, 6)} className="mt-6" />
    </Link>
  );
}

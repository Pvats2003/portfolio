import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectData } from '@/lib/types';
import { Tag } from '@/components/ui/Tag';
import { TechStack } from '@/components/ui/TechStack';

export function FeaturedProject({ project }: { project: ProjectData }) {
  const href = project.caseStudyRoute ?? '#';

  return (
    <Link
      href={href}
      className="group block rounded-lg border border-border bg-surface p-8 transition-colors duration-300 ease-editorial hover:border-border-strong sm:p-10"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs text-faint">{project.index}</span>
        <Tag>{project.category}</Tag>
        <Tag>{project.status}</Tag>
      </div>

      {project.tagline && (
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.tagline}</p>
      )}

      <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-4xl">{project.title}</h3>
          <p className="mt-3 text-lg text-muted">{project.subtitle}</p>
        </div>
        <span className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors group-hover:text-accent">
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>

      <TechStack items={project.technologies.slice(0, 6)} className="mt-6" />
    </Link>
  );
}

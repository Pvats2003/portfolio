import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProjectData } from '@/lib/types';
import { projects } from '@/data/projects';
import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero';
import { CaseStudyNav } from '@/components/case-studies/CaseStudyNav';
import { CaseStudySection } from '@/components/case-studies/CaseStudySection';
import { ScrollProgress } from '@/components/case-studies/ScrollProgress';

export function CaseStudyPage({ project }: { project: ProjectData }) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      <ScrollProgress />
      <CaseStudyHero project={project} />
      <CaseStudyNav sections={project.sections.map((s) => ({ id: s.id, heading: s.heading }))} />
      <div>
        {project.sections.map((section) => (
          <CaseStudySection key={section.id} section={section} />
        ))}
      </div>

      <footer className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Next</p>
          {next.caseStudyRoute ? (
            <Link href={next.caseStudyRoute} className="group mt-3 inline-flex items-baseline gap-4">
              <span className="text-3xl font-semibold text-ink transition-colors group-hover:text-accent sm:text-4xl">
                {next.title}
              </span>
              <ArrowRight className="h-6 w-6 text-faint transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          ) : null}
        </div>
      </footer>
    </article>
  );
}

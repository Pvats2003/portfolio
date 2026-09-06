import { tier1Projects, tier2Projects, tier3Projects } from '@/data/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FlagshipProject } from '@/components/projects/FlagshipProject';
import { FeaturedProject } from '@/components/projects/FeaturedProject';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function ProjectIndex() {
  const [careerOS, ...restTier1] = tier1Projects;

  return (
    <section id="work" className="scroll-mt-20 border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeader kicker="Selected work" title="Products, systems, and experiments I’ve built." />

        <div className="mt-16 space-y-16">
          {careerOS && <FlagshipProject project={careerOS} />}
          {restTier1.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>

        {tier2Projects.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {tier2Projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {tier3Projects.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {tier3Projects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

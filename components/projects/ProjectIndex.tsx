import { tier1Projects, tier2Projects, tier3Projects } from '@/data/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CareerOSFeature } from '@/components/projects/CareerOSFeature';
import { InstaworkFeature } from '@/components/projects/InstaworkFeature';
import { OpsIntelFeature } from '@/components/projects/OpsIntelFeature';
import { KaravaliFeature } from '@/components/projects/KaravaliFeature';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function ProjectIndex() {
  const [careerOS, instawork] = tier1Projects;
  const opsintel = tier2Projects.find((p) => p.id === 'opsintel');
  const karavali = tier2Projects.find((p) => p.id === 'karavali');
  const restTier2 = tier2Projects.filter((p) => p.id !== 'opsintel' && p.id !== 'karavali');

  return (
    <section id="work" className="scroll-mt-20 border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeader kicker="Selected work" title="Products, systems, and experiments I’ve built." />

        <div className="mt-16 space-y-16">
          {careerOS && <CareerOSFeature project={careerOS} />}
          {instawork && <InstaworkFeature project={instawork} />}
          {opsintel && <OpsIntelFeature project={opsintel} />}
          {karavali && <KaravaliFeature project={karavali} />}
        </div>

        {restTier2.length > 0 && (
          <div
            className={
              restTier2.length > 1
                ? 'mt-20 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2'
                : 'mt-20 max-w-md'
            }
          >
            {restTier2.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {tier3Projects.length > 0 && (
          <div className="mt-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Archive</p>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-border pt-6 sm:grid-cols-3">
              {tier3Projects.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

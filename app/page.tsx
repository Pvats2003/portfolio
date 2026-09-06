import { Hero } from '@/components/sections/Hero';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { ProjectIndex } from '@/components/projects/ProjectIndex';
import { HowIWork } from '@/components/sections/HowIWork';
import { WhyThisWork } from '@/components/sections/WhyThisWork';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ProjectIndex />
      <HowIWork />
      <WhyThisWork />
      <ExperienceTimeline />
      <Contact />
    </>
  );
}

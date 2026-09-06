import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject } from '@/data/projects';
import { CaseStudyPage } from '@/components/case-studies/CaseStudyPage';

const project = getProject('itc');

export const metadata: Metadata = {
  title: project?.title,
  description: project?.description,
};

export default function Page() {
  if (!project) return notFound();
  return <CaseStudyPage project={project} />;
}

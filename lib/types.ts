export type ProjectTier = 1 | 2 | 3;

export type ProjectStatus = 'Live' | 'Building' | 'Ongoing' | 'Shipped' | 'Prototype' | 'Concept';

export interface MetricItem {
  value: string;
  label: string;
  note?: string;
}

export interface DiagramStage {
  label: string;
  detail?: string;
  branch?: string[];
}

export interface ArchitectureDiagramData {
  title: string;
  stages: DiagramStage[];
  annotations?: string[];
}

export type MockupKind = 'career-os' | 'command-center' | 'opsintel' | 'karavali' | 'audit-ai';

export interface CaseStudySection {
  id: string;
  heading: string;
  kicker?: string;
  body?: string[];
  bullets?: string[];
  diagram?: ArchitectureDiagramData;
  metrics?: MetricItem[];
  quote?: string;
  mockup?: MockupKind;
}

export interface ProjectData {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  status: ProjectStatus;
  role: string;
  whatIOwned: string[];
  description: string;
  pipeline?: string[];
  principle?: string;
  tagline?: string;
  technologies: string[];
  metrics: MetricItem[];
  tier: ProjectTier;
  featured: boolean;
  caseStudyRoute: string | null;
  visualKind: 'pipeline' | 'flow' | 'grid' | 'terminal' | 'map';
  sections: CaseStudySection[];
}

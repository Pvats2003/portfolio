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

export type EvidenceLabel = 'Live product' | 'Built MVP' | 'Internal operations tool' | 'Prototype';

export interface EvidenceImage {
  src: string;
  alt: string;
}

export interface CaseStudySection {
  id: string;
  heading: string;
  kicker?: string;
  body?: string[];
  bullets?: string[];
  diagram?: ArchitectureDiagramData;
  metrics?: MetricItem[];
  quote?: string;
  /** Fallback abstract wireframe rendered when no real screenshots exist yet. */
  mockup?: MockupKind;
  /** Short lines explaining what the visualization (real or conceptual) represents. */
  evidenceNotes?: string[];
  /**
   * Real product screenshots, when available. Empty/omitted everywhere today —
   * the component falls back to the labeled conceptual visualization.
   */
  evidenceImages?: EvidenceImage[];
  /** Only rendered when evidenceImages is non-empty — never applied to conceptual visuals. */
  evidenceLabel?: EvidenceLabel;
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
  liveUrl?: string;
  technologies: string[];
  metrics: MetricItem[];
  tier: ProjectTier;
  featured: boolean;
  caseStudyRoute: string | null;
  visualKind: 'pipeline' | 'flow' | 'grid' | 'terminal' | 'map';
  sections: CaseStudySection[];
}

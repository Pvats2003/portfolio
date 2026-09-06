export interface SkillCluster {
  label: string;
  items: string[];
}

export const skillClusters: SkillCluster[] = [
  {
    label: 'Product',
    items: [
      'Agile / Scrum',
      'Sprint Planning',
      'Backlog Grooming',
      'PRD Drafting',
      'MoSCoW / Impact-Effort Prioritisation',
      'Roadmapping',
    ],
  },
  {
    label: 'UX',
    items: ['Persona Development', 'UX Flow Mapping', 'Wireframing', 'Usability Research', 'Figma', 'Canva'],
  },
  {
    label: 'Data & Analytics',
    items: ['Basic Excel', 'Google Sheets', 'Basic SQL', 'KPI & Success Metric Definition'],
  },
  {
    label: 'AI / Engineering',
    items: [
      'React / TypeScript',
      'Next.js',
      'Node.js',
      'FastAPI',
      'Python (OpenCV)',
      'Google Apps Script',
      'Supabase',
      'SQLAlchemy',
      'Pydantic',
      'LLM / OCR Integration',
      'Claude Vision',
      'Groq',
      'Anthropic API',
    ],
  },
  {
    label: 'Operations',
    items: [
      'Process Documentation',
      'Field Operations',
      'Stakeholder Communication',
      'Market Research',
      'Supply Chain Analysis',
    ],
  },
];

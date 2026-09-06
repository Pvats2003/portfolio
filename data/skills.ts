export interface SkillCluster {
  label: string;
  items: string[];
}

export const skillClusters: SkillCluster[] = [
  {
    label: 'Product',
    items: [
      'Product Strategy',
      'PRDs',
      'Roadmapping',
      'Agile / Scrum',
      'Backlog Grooming',
      'MoSCoW',
      'Impact-Effort Prioritisation',
      'Success Metrics',
    ],
  },
  {
    label: 'UX',
    items: ['Persona Development', 'UX Flow Mapping', 'Wireframing', 'Usability Research', 'Figma', 'Canva'],
  },
  {
    label: 'AI / Engineering',
    items: [
      'Python',
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'FastAPI',
      'Supabase',
      'SQLAlchemy',
      'Pydantic',
      'OpenCV',
      'LLM Integration',
      'OCR',
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
      'Operational Analytics',
    ],
  },
];

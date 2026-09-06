export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  location?: string;
  industry?: string;
  focus: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    period: '2026 — Present',
    title: 'Operations Management Intern, Field Operations',
    org: 'Instawork Robotics Labs',
    industry: 'Robotics / AI Data Collection',
    current: true,
    focus: [
      'Robotics / AI data collection',
      'Field operations',
      'Operational systems',
      'Automation',
      'OCR',
      'OpsIntel',
      'SOD / MOD / EOD reporting',
    ],
  },
  {
    period: '2024',
    title: 'Electrical / Powerhouse Intern',
    org: 'ITC Limited',
    location: 'Munger, Bihar',
    industry: 'FMCG / Manufacturing',
    focus: [
      'Power distribution architecture',
      'Technical documentation',
      'Switchover logic',
      'Root-cause analysis',
      'Stakeholder communication',
    ],
  },
];

export interface LeadershipItem {
  period: string;
  title: string;
  org: string;
  detail: string;
}

export const leadership: LeadershipItem[] = [
  {
    period: '2025',
    title: 'Core Committee — Painting & Publicity',
    org: 'Revels 2025, MIT Manipal',
    detail: 'Led a 10-member team; drove end-to-end promotions strategy and on-time creative delivery across campus.',
  },
  {
    period: '2024',
    title: 'Organising Committee — Painting & Publicity',
    org: 'Revels 2024, MIT Manipal',
    detail: 'Managed a 30-volunteer team; executed visual branding and publicity strategy for the annual cultural festival.',
  },
];

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export const education: EducationItem = {
  degree: 'B.Tech, Electronics & Communication Engineering',
  school: 'MIT Manipal',
  location: 'Karnataka',
  period: 'May 2026',
};

export const certifications: string[] = [
  'Google UX Design Certificate (Coursera)',
  'IBM Business Analyst Certificate',
  'IBM Program Manager Certificate',
];

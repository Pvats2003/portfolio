export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  location?: string;
  focus: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    period: '2026 — Present',
    title: 'Operations Management Intern, Field Operations',
    org: 'Instawork Robotics Labs',
    current: true,
    focus: [
      'Robotics / AI data collection',
      'Field operations',
      'Operational systems',
      'Automation',
      'OCR',
      'OpsIntel',
      'Reporting',
    ],
  },
  {
    period: '2024',
    title: 'Electrical / Powerhouse Intern',
    org: 'ITC Limited',
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
    org: 'Revels 2025',
    detail: 'Led a 10-member team.',
  },
  {
    period: '2024',
    title: 'Organising Committee — Painting & Publicity',
    org: 'Revels 2024',
    detail: 'Managed a 30-volunteer team.',
  },
];

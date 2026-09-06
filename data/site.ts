export const site = {
  name: 'Priyanshu Vats',
  role: 'Product-minded AI Operator · Product Builder · Automation',
  eyebrow: 'Product × AI × Operations',
  headline: 'I build systems that turn messy problems into intelligent products.',
  supporting: 'Product-minded operator building AI products, automation systems, and operational infrastructure.',
  secondary:
    'From robotics data operations to autonomous job-search systems, I work across the full loop — problem discovery, product thinking, system design, building, shipping, and iteration.',
  statement: 'I build systems that turn messy problems into intelligent products.',
  email: 'priyanshu.vats03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/priyanshuvats-5a68aa292',
  linkedinLabel: 'linkedin.com/in/priyanshuvats-5a68aa292',
  status: 'OPEN TO OPPORTUNITIES',
  url: 'https://priyanshuvats.com',
};

export const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
];

export const footerLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Email', href: `mailto:${site.email}` },
];

export const proofPoints = [
  { value: '350+', label: 'Career OS tests' },
  { value: '116', label: 'Businesses mapped for VLA data collection' },
  { value: '89.1%', label: 'ANPR mAP@50' },
  { value: '1 week', label: 'Karavali MVP' },
];

export interface BuildStage {
  index: string;
  label: string;
  detail: string;
}

export const buildStages: BuildStage[] = [
  { index: '01', label: 'Problem', detail: 'Find the actual problem, not the one that’s easiest to name.' },
  { index: '02', label: 'System', detail: 'Turn ambiguity into a structure that can be built.' },
  { index: '03', label: 'Product', detail: 'Decide what it does, for whom, and why it matters.' },
  { index: '04', label: 'Ship', detail: 'Build it, deploy it, put it in front of reality.' },
  { index: '05', label: 'Iterate', detail: 'Use what happens next to make it better.' },
];

export interface HowIWorkStep {
  index: string;
  label: string;
  detail: string;
}

export const howIWork: HowIWorkStep[] = [
  { index: '01', label: 'Discover', detail: 'Find the actual problem.' },
  { index: '02', label: 'Structure', detail: 'Turn ambiguity into a product / system.' },
  { index: '03', label: 'Build', detail: 'Prototype and engineer the solution.' },
  { index: '04', label: 'Operate', detail: 'Put it into the real world.' },
  { index: '05', label: 'Iterate', detail: 'Use feedback to improve it.' },
];

import { ProjectData } from '@/lib/types';

export const projects: ProjectData[] = [
  // ---------------------------------------------------------------------
  // 01 — CAREER OS (flagship)
  // ---------------------------------------------------------------------
  {
    id: 'career-os',
    index: '01',
    title: 'Career OS',
    subtitle: 'An auditable AI career operations system.',
    category: 'AI Product · Automation',
    status: 'Building',
    role: 'Solo builder — self-initiated',
    description:
      'Discovers jobs, evaluates fit, generates application materials, and guides applications while keeping humans in control of high-risk decisions.',
    technologies: [
      'Python',
      'SQLAlchemy',
      'Pydantic',
      'Alembic',
      'LLM matching',
      'Remotive',
      'Arbeitnow',
      'Adzuna',
      'Greenhouse',
      'Lever',
      'Pytest',
      'Ruff',
      'Mypy',
    ],
    metrics: [
      { value: '350+', label: 'Passing unit tests' },
      { value: '0', label: 'ORM–migration drift' },
      { value: '5', label: 'Job source adapters' },
      { value: '4', label: 'Hard-stop trust gates' },
    ],
    tier: 1,
    featured: true,
    caseStudyRoute: '/work/career-os',
    visualKind: 'pipeline',
    sections: [
      {
        id: 'problem',
        heading: 'The problem',
        kicker: '01',
        body: [
          'A job search is a coordination problem disguised as a writing problem. The same person has to watch a dozen sources for new postings, judge fit against a moving target, produce a tailored resume and cover letter for each one, and track where every application actually stands.',
          'Most tools attack one slice of this — a job board, a resume builder, an autofill extension — and leave the coordination to the human. The result is either a spreadsheet nobody keeps updated, or a browser extension that fires off applications faster than the person can verify what was actually submitted.',
        ],
      },
      {
        id: 'why-it-matters',
        heading: 'Why it matters',
        kicker: '02',
        body: [
          'Speed and judgment are usually treated as opposites in this space: automate everything and lose control, or stay manual and lose time. Neither is right. The volume problem (finding and triaging postings) and the judgment problem (deciding what to submit, and how) require different solutions — one is a search and matching problem, the other is a trust problem.',
        ],
      },
      {
        id: 'insight',
        heading: 'The insight',
        kicker: '03',
        body: [
          'Automation should compress the distance between "a relevant job exists" and "a strong, reviewed application is ready to send" — not the distance between "a job exists" and "an application has been submitted." Everything up to review can run unattended. Submission cannot.',
        ],
      },
      {
        id: 'product',
        heading: 'The product',
        kicker: '04',
        body: [
          'Career OS is a pipeline, not a single tool. It pulls postings from multiple sources, scores them against a candidate profile using a mix of deterministic rules and LLM-assisted matching, drafts resume and cover-letter material for the postings worth pursuing, and then hands the whole package to the person for review before anything is submitted.',
        ],
        bullets: [
          'DISCOVER — pull new postings from every connected source on a schedule',
          'MATCH — score fit with deterministic filters plus LLM-assisted reasoning',
          'GENERATE — draft resume and cover-letter material tailored to the posting',
          'REVIEW — surface the package, the score, and the reasoning to the human',
          'APPLY — the human submits, with the system assisting where safe to do so',
        ],
      },
      {
        id: 'architecture',
        heading: 'Architecture',
        kicker: '05',
        diagram: {
          title: 'Pipeline',
          stages: [
            { label: 'JOB SOURCES', detail: 'Remotive · Arbeitnow · Adzuna · Greenhouse · Lever' },
            { label: 'PROVIDER ADAPTERS', detail: 'Normalize each source into one schema' },
            { label: 'DEDUPLICATION', detail: 'Collapse cross-posted listings' },
            { label: 'JOB MATCHING', detail: 'Deterministic filters + LLM-assisted scoring' },
            { label: 'RESUME / COVER LETTER', detail: 'Generated per-posting, from a structured profile' },
            { label: 'APPLICATION ASSISTANCE', detail: 'Pre-fills and prepares, does not submit' },
            { label: 'HUMAN REVIEW', detail: 'Score, source, and reasoning shown before any action' },
            { label: 'SUBMISSION', detail: 'Human-initiated, always' },
          ],
        },
      },
      {
        id: 'product-decisions',
        heading: 'Product decisions',
        kicker: '06',
        body: [
          'Every match carries its source, a confidence label, and — where applicable — a verification flag, so the person reviewing it knows whether they are looking at a hard rule match or an LLM judgment call. That distinction changes how much scrutiny a listing deserves before it moves forward.',
        ],
      },
      {
        id: 'human-in-the-loop',
        heading: 'Human-in-the-loop design',
        kicker: '07',
        quote: 'Automate the work. Never automate trust.',
        body: [
          'A fixed set of conditions routes a listing straight to human review, no matter how well it scores: salary information that is missing or below threshold, visa or work-authorization requirements, a CAPTCHA in the application flow, or multi-factor authentication on the target site.',
          'These are hard stops, not suggestions. The system does not attempt to route around them, guess at them, or submit past them. Nothing gets auto-submitted — the person always reviews and initiates the final step.',
        ],
        bullets: ['Salary — missing or below threshold', 'Visa / work authorization required', 'CAPTCHA encountered', 'MFA encountered'],
      },
      {
        id: 'engineering-quality',
        heading: 'Engineering quality',
        kicker: '08',
        body: [
          'A system that touches real applications on someone’s behalf has to be boring in the right ways: predictable schema changes, a clean type-checked codebase, and a test suite that actually gets run.',
        ],
        metrics: [
          { value: '350+', label: 'Passing unit tests' },
          { value: 'Clean', label: 'Ruff' },
          { value: 'Clean', label: 'Mypy' },
          { value: '0', label: 'ORM-to-migration drift' },
        ],
      },
      {
        id: 'next',
        heading: 'What I would build next',
        kicker: '09',
        bullets: [
          'Smarter job prioritisation — rank the review queue, not just the match list',
          'Stronger feedback loops — feed outcomes (interview, rejection, silence) back into matching',
          'Application analytics — where in the funnel things stall, and why',
          'Improved browser-assisted workflows — reduce manual re-entry during the human review step',
        ],
        body: ['These are future ideas, not committed roadmap items.'],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // 02 — INSTAWORK ROBOTICS LABS
  // ---------------------------------------------------------------------
  {
    id: 'instawork',
    index: '02',
    title: 'Instawork Robotics Labs',
    subtitle: 'Robotics + AI field operations',
    category: 'Robotics · Operations',
    status: 'Ongoing',
    role: 'Operations Management Intern, Field Operations',
    description:
      'Operating AI in the real world: field operations for large-scale robotics and egocentric data collection, plus the internal systems that keep that operation observable.',
    technologies: [
      'Google Sheets',
      'Apps Script',
      'JSON API',
      'Slack / Email alerts',
      'Claude Vision',
      'WhatsApp parsing pipelines',
    ],
    metrics: [
      { value: '116', label: 'Businesses mapped for VLA data collection' },
      { value: '19', label: 'Business categories covered' },
      { value: '10', label: 'Sheets in the live ops workbook' },
      { value: '30s', label: 'Dashboard polling interval' },
    ],
    tier: 1,
    featured: true,
    caseStudyRoute: '/work/instawork',
    visualKind: 'flow',
    sections: [
      {
        id: 'overview',
        heading: 'Operating AI in the real world',
        kicker: 'Overview',
        body: [
          'Robotics data isn’t just a model problem. It’s an operations problem.',
          'Collecting large-scale egocentric data for robot learning means coordinating field officers, data captains, and data collectors across many physical locations, every day, with enough consistency that the data is actually usable downstream. I work across this field-operations loop — not the model, the operation that feeds it.',
        ],
      },
      {
        id: 'field-structure',
        heading: 'How the field operation is structured',
        kicker: 'Structure',
        diagram: {
          title: 'Field operations loop',
          stages: [
            { label: 'FIELD OFFICERS' },
            { label: 'DATA CAPTAINS' },
            { label: 'DATA COLLECTORS' },
            { label: 'DATA COLLECTION' },
            { label: 'REPORTING' },
            { label: 'OPERATIONS COMMAND CENTER' },
            { label: 'ANALYTICS' },
          ],
        },
        body: [
          'I work within this structure alongside the broader field-operations team — not as the sole owner of it, but as the person who also builds the tooling that makes it observable.',
        ],
      },
      {
        id: 'command-center',
        heading: 'The operations command center',
        kicker: 'System 1',
        body: [
          'Field operations generate a constant stream of small, distributed updates. Without a system to aggregate them, the ops team is flying blind between reports. I built a lightweight command center on top of tools the team already used, so it required no new software to adopt.',
        ],
        diagram: {
          title: 'Command center pipeline',
          stages: [
            { label: 'GOOGLE SHEETS', detail: '10-sheet live operations workbook' },
            { label: 'APPS SCRIPT', detail: 'Transforms and validates incoming data' },
            { label: 'JSON API', detail: 'Exposes structured operations data' },
            { label: 'SLACK / EMAIL ALERTS', detail: 'Automated notification on thresholds' },
            { label: 'LIVE DASHBOARD', detail: 'Polls every 30 seconds' },
          ],
        },
        metrics: [
          { value: '10', label: 'Sheets in the live workbook' },
          { value: '30s', label: 'Dashboard poll interval' },
        ],
      },
      {
        id: 'ocr-extractor',
        heading: 'OCR productivity extractor',
        kicker: 'System 2',
        body: [
          'Field productivity was being reported through screenshots. I built a pipeline that reads those screenshots directly, using Claude Vision to extract structured productivity data without anyone re-typing numbers by hand.',
        ],
        diagram: {
          title: 'OCR extraction pipeline',
          stages: [
            { label: 'SCREENSHOT' },
            { label: 'CLAUDE VISION' },
            { label: 'METADATA EXTRACTION' },
            { label: 'STRUCTURED PRODUCTIVITY DATA' },
          ],
        },
      },
      {
        id: 'opsintel-link',
        heading: 'OpsIntel',
        kicker: 'System 3',
        body: [
          'The same problem shows up in text form: field updates arrive over WhatsApp, in free text, and are hard to analyze at scale. OpsIntel is the system that turns those messages into structured operations data — see the dedicated case study for detail.',
        ],
        diagram: {
          title: 'OpsIntel at a glance',
          stages: [
            { label: 'WHATSAPP UPDATE' },
            { label: 'PARSING / TRANSFORMATION' },
            { label: 'STRUCTURED DATA' },
            { label: 'OPERATIONS ANALYTICS' },
          ],
        },
      },
      {
        id: 'field-mapping',
        heading: 'Turning physical locations into training infrastructure',
        kicker: 'Field intelligence',
        body: [
          'A large part of preparing for VLA (vision-language-action) data collection is knowing exactly where to collect it. I built the field-recording guide used to plan this: a business-by-business map of South India covering the categories and dexterity profiles that matter for training data, organized into cluster-wise lead directories and two-shift field plans.',
        ],
        bullets: [
          '116 businesses mapped across 19 categories',
          'South India VLA Field Recording Guide',
          'Cluster-wise lead directories',
          'Two-shift field plans',
          'Rajampet–Kadapa corridor coverage',
          'Bengaluru neighborhood / high-dexterity business directories',
        ],
        metrics: [
          { value: '116', label: 'Businesses mapped' },
          { value: '19', label: 'Categories' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // 03 — OPSINTEL
  // ---------------------------------------------------------------------
  {
    id: 'opsintel',
    index: '03',
    title: 'OpsIntel',
    subtitle: 'WhatsApp → Operations Intelligence',
    category: 'Internal Tool · Ops Automation',
    status: 'Building',
    role: 'Self-initiated, built alongside field operations at Instawork Robotics Labs',
    description:
      'Field communication contains useful operational information but is difficult to analyze at scale. OpsIntel converts free-text field updates into structured operational intelligence.',
    technologies: ['React', 'TypeScript', 'Node.js', 'WebSocket'],
    metrics: [],
    tier: 2,
    featured: false,
    caseStudyRoute: '/work/opsintel',
    visualKind: 'flow',
    sections: [
      {
        id: 'problem',
        heading: 'The problem',
        kicker: '01',
        body: [
          'Field officers report status over WhatsApp because it’s the fastest channel available to them. That’s good for speed and bad for analysis: the same information — a location update, a blocker, a completion count — shows up in a dozen phrasings, spread across threads, with no structure to query against.',
        ],
      },
      {
        id: 'approach',
        heading: 'The approach',
        kicker: '02',
        diagram: {
          title: 'From message to insight',
          stages: [
            { label: 'MESSY FIELD MESSAGE' },
            { label: 'STRUCTURED UPDATE' },
            { label: 'DASHBOARD' },
            { label: 'ANALYTICS' },
          ],
        },
        body: [
          'OpsIntel parses incoming field updates, extracts the operationally relevant fields, and writes them into a structured store that a live dashboard reads from in real time over WebSocket. The rest of the ops team gets a queryable view of the field instead of a scrollback of chat messages.',
        ],
      },
      {
        id: 'build',
        heading: 'Build',
        kicker: '03',
        body: [
          'A Node.js service handles parsing and transformation; a React and TypeScript frontend renders the live dashboard, kept in sync over WebSocket rather than polling. It was built to plug into the same operations command center used across Instawork field operations, not as a standalone app.',
        ],
      },
      {
        id: 'status',
        heading: 'Status',
        kicker: '04',
        body: [
          'OpsIntel is part of the internal ops stack at Instawork Robotics Labs. No adoption or usage figures are published here — this section describes the system as built, not its results.',
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // 04 — KARAVALI
  // ---------------------------------------------------------------------
  {
    id: 'karavali',
    index: '04',
    title: 'Karavali',
    subtitle: 'Community-driven local discovery.',
    category: 'Consumer Product',
    status: 'Shipped',
    role: 'Solo founder / product owner — self-initiated',
    description:
      'Conventional travel products don’t capture authentic, community-driven local experiences. Karavali is a mobile-first discovery product built around the coastal Karnataka region.',
    technologies: ['React', 'Supabase', 'AI recommendations'],
    metrics: [{ value: '1 week', label: 'From start to live MVP' }],
    tier: 2,
    featured: false,
    caseStudyRoute: '/work/karavali',
    visualKind: 'flow',
    sections: [
      {
        id: 'problem',
        heading: 'The problem',
        kicker: '01',
        body: [
          'Most travel discovery products optimize for reviews and ratings at scale, which flattens out the kind of local, word-of-mouth knowledge that actually makes a place worth visiting. That knowledge exists in the community — it’s just not captured anywhere a visitor can find it.',
        ],
      },
      {
        id: 'process',
        heading: 'Process',
        kicker: '02',
        diagram: {
          title: 'Build process',
          stages: [
            { label: 'PROBLEM DISCOVERY' },
            { label: 'PERSONAS' },
            { label: 'UX FLOWS' },
            { label: 'PRIORITISATION' },
            { label: 'MOBILE UI' },
            { label: 'AI RECOMMENDATIONS' },
            { label: 'DEPLOYMENT' },
          ],
        },
        body: [
          'Solo end-to-end: defined the problem, sketched personas and UX flows, prioritized what actually needed to be in a first version, built the mobile UI, wired in AI-assisted recommendations, and deployed.',
        ],
      },
      {
        id: 'build',
        heading: 'Build',
        kicker: '03',
        body: [
          'React on the frontend, Supabase for auth, data, and storage. Recommendation logic is AI-assisted rather than a static list — surfacing suggestions based on region and category rather than a fixed directory.',
        ],
        metrics: [{ value: '1 week', label: 'Live MVP shipped' }],
      },
      {
        id: 'scope',
        heading: 'Scope',
        kicker: '04',
        body: [
          'Karavali focuses on coastal Karnataka — Udupi and Dakshina Kannada — as the initial region. No user or traction numbers are published here; this is a shipped MVP, not a scaled product.',
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // 05 — AUDIT AI COPILOT
  // ---------------------------------------------------------------------
  {
    id: 'audit-ai',
    index: '05',
    title: 'Audit AI Copilot',
    subtitle: 'AI-powered document review.',
    category: 'AI Product',
    status: 'Building',
    role: 'Self-initiated product',
    description:
      'A document-review copilot for audit and compliance work: ingest a document, run it against a rule engine and an LLM, and produce flagged anomalies plus a structured report.',
    technologies: ['FastAPI', 'Next.js', 'Groq', 'PDF generation'],
    metrics: [],
    tier: 3,
    featured: false,
    caseStudyRoute: '/work/audit-ai',
    visualKind: 'pipeline',
    sections: [
      {
        id: 'problem',
        heading: 'The problem',
        kicker: '01',
        body: [
          'Document review for audit and compliance is repetitive and detail-sensitive at the same time — exactly the combination that causes fatigue-driven misses. Reviewers need a way to triage documents quickly without losing the ability to ask follow-up questions about what they’re looking at.',
        ],
      },
      {
        id: 'architecture',
        heading: 'Architecture',
        kicker: '02',
        diagram: {
          title: 'Review pipeline',
          stages: [
            { label: 'DOCUMENT' },
            { label: 'INGESTION' },
            { label: 'RULE ENGINE' },
            { label: 'LLM' },
            { label: 'ANOMALIES / Q&A' },
            { label: 'STRUCTURED REPORT' },
          ],
        },
      },
      {
        id: 'personas',
        heading: 'Who it’s for',
        kicker: '03',
        bullets: ['Auditor', 'Reviewer', 'Compliance Lead'],
      },
      {
        id: 'decisions',
        heading: 'Product decisions',
        kicker: '04',
        body: [
          'Prioritized with MoSCoW: document ingestion, AI-assisted Q&A over the document, a flagging engine for anomalies, and an exportable summary were treated as must-haves for a usable first version.',
        ],
        bullets: ['Document ingestion', 'AI Q&A over document contents', 'Flagging engine', 'Exportable summary report'],
      },
      {
        id: 'build',
        heading: 'Build',
        kicker: '05',
        body: [
          'FastAPI backend handling ingestion and the rule engine, Groq for fast LLM inference, Next.js frontend, and server-side PDF generation for the exportable report. No customer usage is published here — this is a self-initiated build, not a deployed product with users.',
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // 06 — ANPR
  // ---------------------------------------------------------------------
  {
    id: 'anpr',
    index: '06',
    title: 'ANPR',
    subtitle: 'Automatic Number Plate Recognition',
    category: 'Computer Vision',
    status: 'Shipped',
    role: 'Self-initiated',
    description: 'A detection-and-OCR pipeline that finds vehicle plates in an image and reads the text off them.',
    technologies: ['Python', 'OpenCV', 'YOLOv8n', 'Tesseract OCR'],
    metrics: [{ value: '89.1%', label: 'mAP@50' }],
    tier: 3,
    featured: false,
    caseStudyRoute: '/work/anpr',
    visualKind: 'pipeline',
    sections: [
      {
        id: 'pipeline',
        heading: 'Pipeline',
        kicker: '01',
        diagram: {
          title: 'Detection to text',
          stages: [
            { label: 'IMAGE' },
            { label: 'YOLOV8N DETECTION' },
            { label: 'PLATE CROP' },
            { label: 'TESSERACT OCR' },
            { label: 'TEXT OUTPUT' },
          ],
        },
        body: [
          'YOLOv8n localizes the plate region in the source image; the crop is passed to Tesseract for text extraction. OpenCV handles preprocessing between the two stages.',
        ],
      },
      {
        id: 'result',
        heading: 'Result',
        kicker: '02',
        metrics: [{ value: '89.1%', label: 'mAP@50 (verified)' }],
        body: ['No additional benchmarks are published beyond this measured result.'],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // 07 — LIGHTWEIGHT KYC
  // ---------------------------------------------------------------------
  {
    id: 'kyc',
    index: '07',
    title: 'Lightweight KYC',
    subtitle: 'Onboarding for low-connectivity users.',
    category: 'Product Case Study',
    status: 'Concept',
    role: 'Product case study — self-initiated',
    description:
      'A KYC onboarding flow designed for rural and semi-urban users on 2G/3G connections with lower digital literacy.',
    technologies: ['Product design', 'DigiLocker', 'Voice UX'],
    metrics: [],
    tier: 3,
    featured: false,
    caseStudyRoute: '/work/kyc',
    visualKind: 'grid',
    sections: [
      {
        id: 'problem',
        heading: 'The problem',
        kicker: '01',
        body: [
          'Standard KYC flows assume reliable connectivity and comfort with multi-step digital forms. Neither holds for a large share of rural and semi-urban users, which shows up as drop-off rather than failure — people simply give up partway through.',
        ],
        bullets: ['Designed for 2G/3G connections', 'Lower digital literacy assumed by default, not as an edge case'],
      },
      {
        id: 'ux',
        heading: 'UX approach',
        kicker: '02',
        body: ['A 5-screen, icon-first flow — minimizing text entry and relying on recognizable icons over instructions.'],
      },
      {
        id: 'roadmap',
        heading: 'Feature roadmap',
        kicker: '03',
        bullets: [
          'Sprint 1 — DigiLocker KYC integration',
          'Sprint 1 — Document upload',
          'Sprint 1 — Offline retry handling',
          'Sprint 2 — Face authentication',
          'Sprint 2 — Multilingual LLM voice assistant',
        ],
      },
      {
        id: 'targets',
        heading: 'Targets',
        kicker: '04',
        body: ['These are design targets, not measured results.'],
        metrics: [
          { value: '<3 min', label: 'Onboarding time (target)' },
          { value: '>90%', label: 'KYC success rate (target)' },
          { value: '<1%', label: 'Crash rate (target)' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // 08 — ITC LIMITED POWERHOUSE
  // ---------------------------------------------------------------------
  {
    id: 'itc',
    index: '08',
    title: 'ITC Limited — Powerhouse',
    subtitle: 'System mapping',
    category: 'Electrical Systems',
    status: 'Shipped',
    role: 'Electrical / Powerhouse Intern',
    description:
      'Mapping and documenting a real power-distribution system — not software, but the same discipline of understanding how a complex system actually behaves under failure.',
    technologies: ['RUPS', 'Bypass systems', 'DG', 'Technical documentation'],
    metrics: [{ value: '15+', label: 'Sub-distribution boards' }],
    tier: 3,
    featured: false,
    caseStudyRoute: '/work/itc',
    visualKind: 'grid',
    sections: [
      {
        id: 'system',
        heading: 'System mapping',
        kicker: '01',
        diagram: {
          title: 'Power distribution',
          stages: [
            { label: 'RUPS + BYPASS + DG' },
            { label: 'POWER DISTRIBUTION' },
          ],
        },
        metrics: [{ value: '15+', label: 'Sub-distribution boards' }],
      },
      {
        id: 'work',
        heading: 'What the work involved',
        kicker: '02',
        bullets: [
          'Technical documentation',
          'Training material',
          'Switchover logic',
          'Root-cause analysis',
          'Single points of failure',
        ],
        body: [
          'Understanding a rotary UPS, bypass, and diesel-generator setup well enough to document its switchover logic and identify single points of failure is the same underlying skill as debugging a distributed system: read the whole system, find where it actually breaks, and write it down so someone else can act on it.',
        ],
      },
    ],
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
export const featuredProjects = projects.filter((p) => p.featured);
export const tier1Projects = projects.filter((p) => p.tier === 1);
export const tier2Projects = projects.filter((p) => p.tier === 2);
export const tier3Projects = projects.filter((p) => p.tier === 3);

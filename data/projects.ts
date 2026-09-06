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
    whatIOwned: [
      'System architecture, end to end — discovery, matching, generation, review, and submission-assist as separate services',
      '5 provider adapters (Remotive, Arbeitnow, Adzuna, Greenhouse, Lever) with dedup fingerprinting',
      'The no-fabrication data model — source, confidence, and verification metadata on every candidate fact',
      'The trust gate — hard-stop routing for salary, visa, CAPTCHA, and MFA',
      'Test suite, typing, and schema migrations',
    ],
    description:
      'Discovers jobs, evaluates fit, generates application materials, and guides applications while keeping humans in control of high-risk decisions.',
    pipeline: ['Discover', 'Match', 'Generate', 'Review', 'Apply'],
    principle: 'Automate the work. Never automate trust.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Tailwind',
      'SQLAlchemy',
      'Pydantic',
      'Anthropic API',
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
        kicker: '01 · Problem',
        body: [
          'A job search is a coordination problem disguised as a writing problem. The same person has to watch a dozen sources for new postings, judge fit against a moving target, produce a tailored resume and cover letter for each one, and track where every application actually stands.',
          'Most tools attack one slice of this — a job board, a resume builder, an autofill extension — and leave the coordination to the human. The result is either a spreadsheet nobody keeps updated, or a browser extension that fires off applications faster than the person can verify what was actually submitted.',
        ],
      },
      {
        id: 'insight',
        heading: 'The insight',
        kicker: '02 · Insight',
        body: [
          'Speed and judgment get treated as opposites here: automate everything and lose control, or stay manual and lose time. They’re not actually the same problem. Finding and triaging postings is a search-and-matching problem — it can run unattended. Deciding what to submit, and how, is a trust problem — it can’t.',
          'Automation should compress the distance between "a relevant job exists" and "a strong, reviewed application is ready to send." Not the distance between "a job exists" and "an application has been submitted."',
        ],
      },
      {
        id: 'approach',
        heading: 'Approach',
        kicker: '03 · Approach',
        body: [
          'Career OS is a pipeline of independent services, not one monolithic tool: discovery, matching, generation, review, and submission-assist each do one job and hand off through a typed schema. That separation is what makes the trust gate enforceable — a listing can only reach submission after it has passed through review, because there is no code path that skips it.',
        ],
      },
      {
        id: 'product',
        heading: 'What I built',
        kicker: '04 · Build',
        body: [
          'A modular, auditable job-search system: five provider adapters with dedup fingerprinting on the discovery side, deterministic filters plus LLM-assisted reasoning for matching, generated resume and cover-letter material per posting, and a phase-gated application layer — structured-ATS submission for sites that support it, browser-automation assistance for the rest — that always ends at a human review gate.',
        ],
        bullets: [
          'DISCOVER — pull new postings from every connected source on a schedule',
          'MATCH — score fit with deterministic filters plus LLM-assisted reasoning',
          'GENERATE — draft resume and cover-letter material tailored to the posting',
          'REVIEW — surface the package, the score, and the reasoning to the human',
          'APPLY — the human submits, with the system assisting where safe to do so',
        ],
        mockup: 'career-os',
        evidenceLabel: 'Prototype',
        evidenceNotes: [
          'Board layout mirrors the five pipeline stages above — each card is one job listing moving through the system.',
          'The highlighted REVIEW column shows a listing routed to a human because salary was unverified — an actual hard-stop, not a hypothetical.',
        ],
      },
      {
        id: 'architecture',
        heading: 'Architecture',
        kicker: '05 · System',
        diagram: {
          title: 'Pipeline',
          stages: [
            { label: 'JOB SOURCES', detail: 'Remotive · Arbeitnow · Adzuna · Greenhouse · Lever' },
            { label: 'PROVIDER ADAPTERS', detail: 'Normalize each source into one schema' },
            { label: 'DEDUPLICATION', detail: 'Fingerprint and collapse cross-posted listings' },
            { label: 'JOB MATCHING', detail: 'Deterministic filters + LLM-assisted scoring' },
            { label: 'RESUME / COVER LETTER', detail: 'Generated per-posting, from a structured profile' },
            { label: 'APPLICATION ASSISTANCE', detail: 'Structured-ATS or browser-assisted — never auto-submits' },
            { label: 'HUMAN REVIEW', detail: 'Score, source, and reasoning shown before any action' },
            { label: 'SUBMISSION', detail: 'Human-initiated, always' },
          ],
        },
      },
      {
        id: 'product-decisions',
        heading: 'Product decisions',
        kicker: '06 · Decisions',
        body: [
          'Every candidate fact — a skill match, a salary figure, a location — carries its source, a confidence label, and a verified flag. Unknown fields are never guessed and never silently filled in. That’s a stricter rule than most systems like this bother with, and it’s the one that makes the review step actually trustworthy instead of theatrical.',
          'Matches carry the same treatment: a hard rule match and an LLM judgment call are labeled differently, so the person reviewing knows how much scrutiny a listing deserves before it moves forward.',
        ],
      },
      {
        id: 'human-in-the-loop',
        heading: 'Human-in-the-loop design',
        kicker: '07 · Trust',
        quote: 'Automate the work. Never automate trust.',
        body: [
          'A fixed set of conditions routes a listing straight to human review, no matter how well it scores: salary information that is missing or below threshold, visa or work-authorization requirements, a CAPTCHA in the application flow, or multi-factor authentication on the target site.',
          'These are hard stops, not suggestions. The system does not attempt to route around them, guess at them, or submit past them. No application is ever auto-submitted — the person always reviews and initiates the final step.',
        ],
        bullets: ['Salary — missing or below threshold', 'Visa / work authorization required', 'CAPTCHA encountered', 'MFA encountered'],
      },
      {
        id: 'engineering-quality',
        heading: 'Engineering quality',
        kicker: '08 · Quality',
        body: [
          'A system that touches real applications on someone’s behalf has to be boring in the right ways: predictable schema changes, a clean type-checked codebase, and a test suite that actually gets run before every change ships.',
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
        heading: 'What I’d do next',
        kicker: '09 · Next',
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
    whatIOwned: [
      'End-to-end field operations across cities in Andhra Pradesh and Karnataka',
      'SOD / MOD / EOD reporting discipline across Field Officers, Data Captains, and Data Collectors',
      'The South India VLA Field Recording Guide and cluster-wise lead directories',
      'The operations command center — workbook, backend, alerts, dashboard',
      'The OCR productivity extractor and OpsIntel',
    ],
    tagline: 'Operating AI in the real world.',
    description:
      'End-to-end field operations for large-scale robotics and egocentric data collection, plus the internal systems that make that operation observable.',
    technologies: [
      'Google Sheets',
      'Google Apps Script',
      'JSON API',
      'Slack / Email alerts',
      'Claude Vision',
      'React',
      'Node.js / WebSocket',
      'ReportLab',
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
          'Collecting large-scale egocentric data for robot learning (VLA — vision-language-action — training data) means coordinating Field Officers, Data Captains, and Data Collectors across many physical sites in Andhra Pradesh and Karnataka, every day, with enough consistency that the data is actually usable downstream. I own end-to-end field operations for this — SOD/MOD/EOD reporting included — and built the tooling that keeps it observable.',
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
            { label: 'REPORTING', detail: 'SOD / MOD / EOD' },
            { label: 'OPERATIONS COMMAND CENTER' },
            { label: 'ANALYTICS' },
          ],
        },
        body: [
          'I designed systems around real-world operations — the command center, the OCR extractor, OpsIntel — that sit inside this broader field-operations structure at Instawork Robotics Labs, not as the sole owner of the company’s robotics infrastructure.',
        ],
      },
      {
        id: 'command-center',
        heading: 'The operations command center',
        kicker: 'System 1',
        body: [
          'Field operations generate a constant stream of small, distributed updates. Without a system to aggregate them, the ops team is flying blind between reports. I designed a multi-layered command center on top of tools the team already used, so it required no new software to adopt.',
        ],
        diagram: {
          title: 'Command center pipeline',
          stages: [
            { label: 'GOOGLE SHEETS', detail: '10-sheet live operations workbook' },
            { label: 'APPS SCRIPT', detail: 'Backend logic, validation, JSON API' },
            { label: 'JSON API', detail: 'Exposes structured operations data' },
            { label: 'SLACK / EMAIL ALERTS', detail: 'Automated notification on thresholds' },
            { label: 'LIVE DASHBOARD', detail: 'Dark-mode, polls every 30 seconds' },
          ],
        },
        metrics: [
          { value: '10', label: 'Sheets in the live workbook' },
          { value: '30s', label: 'Dashboard poll interval' },
        ],
        mockup: 'command-center',
        evidenceLabel: 'Internal operations tool',
        evidenceNotes: [
          'Reflects the real structure of the workbook and dashboard — stat tiles, sheet rows, and a live-polling indicator.',
          'Specific numbers shown are illustrative placeholders, not exported operations data.',
        ],
      },
      {
        id: 'ocr-extractor',
        heading: 'OCR productivity extractor',
        kicker: 'System 2',
        body: [
          'Field productivity was being reported through screenshots. I built a React tool that reads those screenshots directly, using Claude Vision to extract structured productivity metadata without anyone re-typing numbers by hand.',
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
          'The same problem shows up in text form: field updates arrive over WhatsApp, in free text, and are hard to analyze at scale. OpsIntel is the system I built to turn those messages into structured operations data — see the dedicated case study for detail.',
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
          'A large part of preparing for VLA data collection is knowing exactly where to collect it. I sourced and validated commercial data-collection locations and produced the field-recording guide used to plan this: a business-by-business map of South India covering the categories and dexterity profiles that matter for training data, built with ReportLab and organized into cluster-wise lead directories and two-shift field plans.',
        ],
        bullets: [
          '116 businesses mapped across 19 categories',
          'South India VLA Field Recording Guide, built with ReportLab',
          'Cluster-wise lead directories',
          'Two-shift field plans for the Rajampet–Kadapa corridor',
          'Neighborhood / high-dexterity business directories across Bengaluru',
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
    whatIOwned: [
      'Parsing pipeline for free-text WhatsApp field updates',
      'Structured data schema for field operations events',
      'Real-time dashboard, kept in sync over WebSocket',
    ],
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
        kicker: '01 · Problem',
        body: [
          'Field officers report status over WhatsApp because it’s the fastest channel available to them. That’s good for speed and bad for analysis: the same information — a location update, a blocker, a completion count — shows up in a dozen phrasings, spread across threads, with no structure to query against.',
        ],
      },
      {
        id: 'approach',
        heading: 'Approach',
        kicker: '02 · Approach',
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
        mockup: 'opsintel',
        evidenceLabel: 'Internal operations tool',
        evidenceNotes: [
          'Shows the transformation OpsIntel performs: an unstructured WhatsApp message becomes a structured, queryable record.',
        ],
      },
      {
        id: 'build',
        heading: 'What I built',
        kicker: '03 · Build',
        body: [
          'A Node.js service handles parsing and transformation; a React and TypeScript frontend renders the live dashboard, kept in sync over WebSocket rather than polling. It plugs into the same operations command center used across Instawork field operations rather than standing alone.',
        ],
      },
      {
        id: 'status',
        heading: 'Status',
        kicker: '04 · Status',
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
    whatIOwned: [
      'Full product scope, solo — personas, UX flows, feature prioritisation',
      'Mobile-first UI build (React)',
      'Supabase data layer and auth',
      'AI recommendation integration',
    ],
    description:
      'Conventional travel products don’t capture authentic, community-driven local experiences. Karavali is a mobile-first discovery product built around coastal Karnataka.',
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
        kicker: '01 · Problem',
        body: [
          'Most travel discovery products optimize for reviews and ratings at scale, which flattens the kind of local, word-of-mouth knowledge that actually makes a place worth visiting. That knowledge exists in the community — it’s just not captured anywhere a visitor can find it.',
        ],
      },
      {
        id: 'approach',
        heading: 'Approach',
        kicker: '02 · Approach',
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
          'Solo, end to end: defined the problem, sketched personas and UX flows, prioritized what actually needed to be in a first version, built the mobile UI, wired in AI-assisted recommendations, and deployed. The product started as a campus travel app and evolved into a community-driven discovery platform as the scope became clearer.',
        ],
      },
      {
        id: 'build',
        heading: 'What I built',
        kicker: '03 · Build',
        body: [
          'React on the frontend, Supabase for auth, data, and storage. Recommendation logic is AI-assisted rather than a static list — surfacing hyper-local suggestions across Udupi and Dakshina Kannada by region and category, with light gamification layered on top to encourage exploration.',
        ],
        metrics: [{ value: '1 week', label: 'Live MVP shipped' }],
        mockup: 'karavali',
        evidenceLabel: 'Built MVP',
        evidenceNotes: ['Represents the mobile-first card layout described in the build — not the actual shipped UI.'],
      },
      {
        id: 'status',
        heading: 'Status',
        kicker: '04 · Status',
        body: [
          'Karavali is a shipped, live MVP focused on coastal Karnataka. No user or traction numbers are published here.',
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
    whatIOwned: [
      'FastAPI backend and deterministic rule engine',
      'Groq LLM integration for document Q&A',
      'Feature scope and PRD, prioritised via MoSCoW',
      'PDF report generation',
    ],
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
        kicker: '01 · Problem',
        body: [
          'Document review for audit and compliance is repetitive and detail-sensitive at the same time — exactly the combination that causes fatigue-driven misses. Reviewers need a way to triage documents quickly without losing the ability to ask follow-up questions about what they’re looking at.',
        ],
      },
      {
        id: 'architecture',
        heading: 'What I built',
        kicker: '02 · Build',
        diagram: {
          title: 'Review pipeline',
          stages: [
            { label: 'DOCUMENT' },
            { label: 'INGESTION' },
            { label: 'RULE ENGINE', detail: 'Deterministic checks' },
            { label: 'LLM', detail: 'Groq — natural-language Q&A' },
            { label: 'ANOMALIES / Q&A' },
            { label: 'STRUCTURED REPORT', detail: 'Generated PDF' },
          ],
        },
        mockup: 'audit-ai',
        evidenceLabel: 'Prototype',
        evidenceNotes: [
          'Maps directly to the review pipeline above: document in, rule engine + LLM analysis, flagged findings, structured report out.',
        ],
      },
      {
        id: 'personas',
        heading: 'Who it’s for',
        kicker: '03 · Personas',
        bullets: ['Auditor', 'Reviewer', 'Compliance Lead'],
      },
      {
        id: 'decisions',
        heading: 'Product decisions',
        kicker: '04 · Decisions',
        body: [
          'A FastAPI backend runs a deterministic rule engine underneath the Groq LLM layer, rather than leaving anomaly detection entirely to model judgment. Feature scope was prioritized with MoSCoW: document ingestion, AI-assisted Q&A, a flagging engine, and an exportable summary were the must-haves for a usable first version.',
        ],
        bullets: ['Document ingestion', 'AI Q&A over document contents', 'Flagging engine', 'Exportable summary report'],
      },
      {
        id: 'status',
        heading: 'Status',
        kicker: '05 · Status',
        body: ['Ongoing self-initiated build. No customer usage is published here.'],
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
    role: 'B.Tech Final Year Project — MIT Manipal',
    whatIOwned: [
      'Detection + OCR pipeline (YOLOv8n + Tesseract)',
      'Milestone scoping and iterative delivery',
      'Mid-term report, final presentation, full FYP report',
    ],
    description: 'A real-time detection-and-OCR pipeline that finds vehicle plates in an image and reads the text off them.',
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
        kicker: '01 · Build',
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
          'YOLOv8n localizes the plate region in the source image; the crop is passed to Tesseract for text extraction. OpenCV handles preprocessing between the two stages. Delivered as a B.Tech final-year project with scoped milestones, source code, a mid-term report, and a final presentation.',
        ],
      },
      {
        id: 'result',
        heading: 'Result',
        kicker: '02 · Result',
        metrics: [{ value: '89.1%', label: 'mAP@50 (measured)' }],
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
    role: 'Self-initiated PM project',
    whatIOwned: ['3 personas', '5-screen icon-first UX flow', 'Feature roadmap across 2 sprints'],
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
        kicker: '01 · Problem',
        body: [
          'Standard KYC flows assume reliable connectivity and comfort with multi-step digital forms. Neither holds for a large share of rural and semi-urban users, which shows up as drop-off rather than failure — people simply give up partway through.',
        ],
        bullets: ['Designed for 2G/3G connections', 'Lower digital literacy assumed by default, not as an edge case'],
      },
      {
        id: 'ux',
        heading: 'What I built',
        kicker: '02 · Build',
        body: ['3 personas, and a 5-screen, icon-first flow minimizing text entry in favor of recognizable icons and minimal-tap navigation.'],
      },
      {
        id: 'roadmap',
        heading: 'Feature roadmap',
        kicker: '03 · Roadmap',
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
        kicker: '04 · Targets',
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
    category: 'Electrical Systems · FMCG',
    status: 'Shipped',
    role: 'Electrical / Powerhouse Intern — Munger, Bihar',
    whatIOwned: [
      'System mapping across 15+ sub-distribution boards',
      'Technical documentation used for operational training',
      'Switchover logic and root-cause / single-point-of-failure analysis',
    ],
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
        kicker: '01 · System',
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
        kicker: '02 · Work',
        bullets: [
          'Technical documentation for operational training',
          'Stakeholder-facing presentations translating electrical data',
          'Switchover logic analysis',
          'Root-cause analysis and single-point-of-failure mapping',
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

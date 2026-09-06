import { MockupKind } from '@/lib/types';

function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-raised">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="h-2 w-2 rounded-full bg-border-strong" />
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

function Bar({ w, tone = 'muted' }: { w: string; tone?: 'muted' | 'accent' | 'ink' }) {
  const color = tone === 'accent' ? 'bg-accent/70' : tone === 'ink' ? 'bg-ink/40' : 'bg-border-strong';
  return <span className={`block h-1.5 rounded-full ${color}`} style={{ width: w }} />;
}

function CareerOSMockup() {
  const columns = [
    { label: 'DISCOVER', count: 3 },
    { label: 'MATCH', count: 2 },
    { label: 'GENERATE', count: 2 },
    { label: 'REVIEW', count: 1, flagged: true },
    { label: 'APPLY', count: 1 },
  ];
  return (
    <Chrome>
      <div className="grid grid-cols-5 gap-3">
        {columns.map((col) => (
          <div key={col.label} className={col.flagged ? 'rounded-md border border-accent/40 bg-accent/5 p-2' : 'rounded-md border border-border p-2'}>
            <p className="font-mono text-[9px] uppercase tracking-wider text-faint sm:text-[10px]">{col.label}</p>
            <div className="mt-2 space-y-1.5">
              {Array.from({ length: col.count }).map((_, i) => (
                <div key={i} className="space-y-1 rounded border border-border bg-surface p-1.5">
                  <Bar w={`${60 + ((i * 13) % 30)}%`} />
                  <Bar w={`${40 + ((i * 9) % 20)}%`} tone="muted" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-md border border-accent/30 bg-accent/5 px-3 py-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-accent">Human review required — salary unverified</span>
      </div>
    </Chrome>
  );
}

function CommandCenterMockup() {
  return (
    <Chrome>
      <div className="grid grid-cols-4 gap-3">
        {['Sites active', 'Officers reporting', 'Reports today', 'Alerts open'].map((label, i) => (
          <div key={label} className="rounded-md border border-border p-3">
            <Bar w={`${45 + i * 8}%`} tone="ink" />
            <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-faint">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2 rounded-md border border-border p-3">
        {['Sheet · Field Log', 'Sheet · Productivity', 'Sheet · Alerts Queue'].map((row, i) => (
          <div key={row} className="flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] text-muted">{row}</span>
            <div className="flex gap-1.5">
              <Bar w="2.5rem" tone={i === 1 ? 'accent' : 'muted'} />
              <Bar w="1.5rem" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-faint">Live · polling every 30s</span>
      </div>
    </Chrome>
  );
}

function OpsIntelMockup() {
  return (
    <Chrome>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-faint">WhatsApp update</p>
          <div className="mt-2 max-w-[14rem] rounded-lg rounded-tl-none border border-border bg-surface p-3">
            <Bar w="90%" />
            <Bar w="70%" tone="muted" />
            <div className="mt-1.5">
              <Bar w="55%" />
            </div>
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-faint">Structured record</p>
          <div className="mt-2 space-y-1.5 rounded-md border border-accent/30 bg-accent/5 p-3">
            {['site', 'status', 'blocker', 'timestamp'].map((field) => (
              <div key={field} className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] text-faint">{field}</span>
                <Bar w="4rem" tone="accent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function KaravaliMockup() {
  return (
    <Chrome>
      <div className="mx-auto max-w-[13rem] rounded-2xl border border-border-strong p-3">
        <div className="mb-3 flex items-center justify-between">
          <Bar w="35%" tone="ink" />
          <span className="h-3 w-3 rounded-full border border-border-strong" />
        </div>
        <div className="space-y-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-border p-2.5">
              <div className="mb-1.5 h-10 rounded bg-border/60" />
              <Bar w={`${70 - i * 8}%`} />
              <div className="mt-1 flex items-center gap-1.5">
                <Bar w="30%" tone="accent" />
                <Bar w="20%" tone="muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

function AuditAIMockup() {
  return (
    <Chrome>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-md border border-border p-3 sm:col-span-1">
          <p className="font-mono text-[9px] uppercase tracking-wider text-faint">Document</p>
          <div className="mt-2 space-y-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Bar key={i} w={`${90 - i * 12}%`} />
            ))}
          </div>
        </div>
        <div className="rounded-md border border-accent/30 bg-accent/5 p-3 sm:col-span-1">
          <p className="font-mono text-[9px] uppercase tracking-wider text-accent">Flagged</p>
          <div className="mt-2 space-y-2">
            {[0, 1].map((i) => (
              <div key={i} className="rounded border border-accent/30 p-1.5">
                <Bar w={`${70 - i * 10}%`} tone="accent" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-border p-3 sm:col-span-1">
          <p className="font-mono text-[9px] uppercase tracking-wider text-faint">Report</p>
          <div className="mt-2 space-y-1.5">
            <Bar w="80%" tone="ink" />
            <Bar w="60%" />
            <Bar w="40%" />
          </div>
        </div>
      </div>
    </Chrome>
  );
}

const MOCKUPS: Record<MockupKind, () => React.JSX.Element> = {
  'career-os': CareerOSMockup,
  'command-center': CommandCenterMockup,
  opsintel: OpsIntelMockup,
  karavali: KaravaliMockup,
  'audit-ai': AuditAIMockup,
};

export function ConceptualUI({ kind }: { kind: MockupKind }) {
  const Component = MOCKUPS[kind];
  return (
    <figure className="not-prose">
      <Component />
      <figcaption className="mt-2.5 font-mono text-[11px] text-faint">
        Conceptual visualization — not a live product screenshot.
      </figcaption>
    </figure>
  );
}

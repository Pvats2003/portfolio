'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Expand, X } from 'lucide-react';
import { EvidenceImage, EvidenceLabel, MockupKind } from '@/lib/types';

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
  const color = tone === 'accent' ? 'bg-ink/60' : tone === 'ink' ? 'bg-ink/40' : 'bg-border-strong';
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
        {columns.map((col, ci) => (
          <motion.div
            key={col.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: ci * 0.09, ease: [0.16, 1, 0.3, 1] }}
            className={col.flagged ? 'rounded-md border border-border-strong bg-surface p-2' : 'rounded-md border border-border p-2'}
          >
            <p className="font-mono text-[9px] uppercase tracking-wider text-faint sm:text-[10px]">{col.label}</p>
            <div className="mt-2 space-y-1.5">
              {Array.from({ length: col.count }).map((_, i) => (
                <div key={i} className="space-y-1 rounded border border-border bg-surface p-1.5">
                  <Bar w={`${60 + ((i * 13) % 30)}%`} />
                  <Bar w={`${40 + ((i * 9) % 20)}%`} tone="muted" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: columns.length * 0.09, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 flex items-center gap-2 rounded-md border border-border-strong bg-surface px-3 py-2"
      >
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-40 motion-reduce:hidden" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink">Human review required — salary unverified</span>
      </motion.div>
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
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-40" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
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
          <div className="mt-2 space-y-1.5 rounded-md border border-border-strong bg-surface p-3">
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
        <div className="rounded-md border border-border-strong bg-surface p-3 sm:col-span-1">
          <p className="font-mono text-[9px] uppercase tracking-wider text-ink">Flagged</p>
          <div className="mt-2 space-y-2">
            {[0, 1].map((i) => (
              <div key={i} className="rounded border border-border-strong p-1.5">
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

const CONCEPTUAL_MOCKUPS: Record<MockupKind, () => React.JSX.Element> = {
  'career-os': CareerOSMockup,
  'command-center': CommandCenterMockup,
  opsintel: OpsIntelMockup,
  karavali: KaravaliMockup,
  'audit-ai': AuditAIMockup,
};

function Lightbox({ image, onClose }: { image: EvidenceImage; onClose: () => void }) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/90 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 rounded border border-border p-2 text-ink transition-colors hover:border-border-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative rounded-lg border border-border-strong"
        style={{ width: '90vw', height: '85vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={image.src} alt={image.alt} fill sizes="90vw" className="rounded-lg object-contain" />
      </div>
    </div>
  );
}

interface VisualEvidenceProps {
  /** Fallback abstract wireframe kind, used whenever no real images are supplied. */
  kind: MockupKind;
  /** Real product screenshots. When present, these render instead of the conceptual mockup. */
  images?: EvidenceImage[];
  /** Badge shown only alongside real images — never applied to conceptual visualizations. */
  label?: EvidenceLabel;
  /** Short explanatory lines placed under the visualization. */
  notes?: string[];
}

export function VisualEvidence({ kind, images, label, notes }: VisualEvidenceProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const hasRealImages = Boolean(images && images.length > 0);

  return (
    <figure className="not-prose">
      {hasRealImages ? (
        <div>
          <div className="mb-2.5 flex items-center gap-2">
            <span className="rounded border border-border-strong bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink">
              {label ?? 'Live product'}
            </span>
          </div>
          <div className={`grid gap-3 ${images!.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {images!.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden rounded-lg border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={960}
                  height={600}
                  className="h-auto w-full bg-bg object-contain"
                />
                <span className="absolute right-2 top-2 rounded bg-bg/80 p-1.5 text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand className="h-3.5 w-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          {CONCEPTUAL_MOCKUPS[kind]()}
          <figcaption className="mt-2.5 font-mono text-[11px] text-faint">
            Conceptual visualization — not a live product screenshot.
          </figcaption>
        </>
      )}

      {notes && notes.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {notes.map((note) => (
            <li key={note} className="flex gap-2 text-xs leading-relaxed text-faint">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-faint" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      )}

      {lightboxIndex !== null && images && (
        <Lightbox image={images[lightboxIndex]} onClose={() => setLightboxIndex(null)} />
      )}
    </figure>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ArchitectureDiagramData } from '@/lib/types';

export function ArchitectureDiagram({ data }: { data: ArchitectureDiagramData }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-faint">{data.title}</p>
      <div className="flex flex-col items-stretch">
        {data.stages.map((stage, i) => (
          <div key={stage.label} className="flex flex-col items-center">
            <motion.button
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="w-full rounded-md border px-4 py-3.5 text-left transition-colors duration-300 ease-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-5"
              style={{
                borderColor: active === i ? 'var(--accent-border, #c8ff4d)' : '#212426',
                backgroundColor: active === i ? 'rgba(200,255,77,0.06)' : 'transparent',
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`font-mono text-[11px] uppercase tracking-wider sm:text-xs ${
                    active === i ? 'text-accent' : 'text-ink'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')} · {stage.label}
                </span>
              </div>
              {stage.detail && (
                <p className="mt-1.5 text-sm text-muted">{stage.detail}</p>
              )}
            </motion.button>
            {i < data.stages.length - 1 && (
              <ArrowDown className="my-2 h-4 w-4 shrink-0 text-faint" aria-hidden />
            )}
          </div>
        ))}
      </div>
      {data.annotations && data.annotations.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
          {data.annotations.map((a) => (
            <span key={a} className="font-mono text-xs text-faint">
              {a}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

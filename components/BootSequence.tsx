'use client';

import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'pv-boot-seen';
const CHECKS = ['Product', 'AI', 'Operations'];

export function BootSequence() {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [mobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches);
  const skipRef = useRef<HTMLButtonElement>(null);
  const dismissedRef = useRef(false);

  // Mobile plays a compressed timeline — shorter, not just smaller.
  const speed = mobile ? 0.68 : 1;
  const delay = (ms: number) => `${Math.round(ms * speed)}ms`;
  const totalMs = Math.round(2950 * speed);
  const exitMs = Math.round(350 * speed);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem(STORAGE_KEY);

    if (reduced || seen) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      return;
    }

    setMounted(true);
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => skipRef.current?.focus(), 50);
    const dismissTimer = window.setTimeout(() => dismiss(), totalMs);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        dismiss();
        return;
      }
      // Single focusable control inside the overlay — keep focus contained.
      if (e.key === 'Tab') {
        e.preventDefault();
        skipRef.current?.focus();
      }
    }
    window.addEventListener('keydown', onKeyDown);

    function dismiss() {
      if (dismissedRef.current) return;
      dismissedRef.current = true;
      sessionStorage.setItem(STORAGE_KEY, '1');
      window.clearTimeout(focusTimer);
      window.clearTimeout(dismissTimer);
      window.removeEventListener('keydown', onKeyDown);
      setExiting(true);
      window.setTimeout(() => {
        document.body.style.overflow = '';
        setMounted(false);
      }, exitMs);
    }

    return () => {
      window.clearTimeout(focusTimer);
      window.clearTimeout(dismissTimer);
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSkip() {
    dismissedRef.current = true;
    sessionStorage.setItem(STORAGE_KEY, '1');
    document.body.style.overflow = '';
    setExiting(true);
    window.setTimeout(() => setMounted(false), exitMs);
  }

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-label="Priyanshu Vats — Product, AI, Operations"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg transition-opacity ease-editorial ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ transitionDuration: `${exitMs}ms` }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_100%)]"
        aria-hidden
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <p className="animate-boot-in font-mono text-sm font-semibold uppercase tracking-[0.3em] text-ink" style={{ animationDelay: delay(0) }}>
          Priyanshu Vats
        </p>
        <p
          className="animate-boot-in mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-faint"
          style={{ animationDelay: delay(150) }}
        >
          Initializing product system
        </p>

        <div className="mt-10 space-y-2">
          {CHECKS.map((label, i) => (
            <p
              key={label}
              className="animate-boot-in flex items-center justify-between gap-8 font-mono text-xs uppercase tracking-[0.2em] text-muted"
              style={{ animationDelay: delay(450 + i * 220) }}
            >
              <span>{label}</span>
              <span className="text-accent">✓</span>
            </p>
          ))}
        </div>

        <div className="animate-boot-in relative mt-12 h-24 w-56" style={{ animationDelay: delay(1150) }} aria-hidden>
          <svg viewBox="0 0 220 100" className="h-full w-full overflow-visible">
            <g className="text-border-strong" stroke="currentColor" strokeWidth="1" fill="none">
              <line x1="110" y1="50" x2="110" y2="12" className="animate-boot-draw" style={{ animationDelay: delay(1350) }} pathLength={1} />
              <line x1="110" y1="50" x2="40" y2="50" className="animate-boot-draw" style={{ animationDelay: delay(1430) }} pathLength={1} />
              <line x1="110" y1="50" x2="180" y2="50" className="animate-boot-draw" style={{ animationDelay: delay(1510) }} pathLength={1} />
              <line x1="110" y1="50" x2="110" y2="88" className="animate-boot-draw" style={{ animationDelay: delay(1590) }} pathLength={1} />
            </g>
            <circle cx="110" cy="50" r="4" className="fill-accent" />
            <text x="110" y="8" textAnchor="middle" className="fill-faint font-mono text-[8px] uppercase tracking-widest">
              AI
            </text>
            <text x="40" y="46" textAnchor="middle" className="fill-faint font-mono text-[8px] uppercase tracking-widest">
              Product
            </text>
            <text x="180" y="46" textAnchor="middle" className="fill-faint font-mono text-[8px] uppercase tracking-widest">
              Operations
            </text>
            <text x="110" y="98" textAnchor="middle" className="fill-faint font-mono text-[8px] uppercase tracking-widest">
              System
            </text>
          </svg>
        </div>

        <p
          className="animate-boot-in mt-10 text-lg font-semibold tracking-tight text-ink sm:text-xl"
          style={{ animationDelay: delay(1900) }}
        >
          PRODUCT <span className="text-accent">×</span> AI <span className="text-accent">×</span> OPERATIONS
        </p>
      </div>

      <button
        ref={skipRef}
        type="button"
        onClick={handleSkip}
        className="absolute bottom-8 right-8 flex items-center gap-1.5 rounded border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-faint transition-colors hover:border-border-strong hover:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Skip →
      </button>
    </div>
  );
}

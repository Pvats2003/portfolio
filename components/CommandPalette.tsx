'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';
import { site } from '@/data/site';

interface PaletteItem {
  label: string;
  hint: string;
  action: () => void;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
  }, []);

  const go = useCallback(
    (href: string, external?: boolean) => {
      close();
      if (external) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        router.push(href);
      }
    },
    [router, close]
  );

  const items: PaletteItem[] = [
    { label: 'Career OS', hint: 'Case study', action: () => go('/work/career-os') },
    { label: 'Instawork Robotics Labs', hint: 'Case study', action: () => go('/work/instawork') },
    { label: 'OpsIntel', hint: 'Case study', action: () => go('/work/opsintel') },
    { label: 'Karavali', hint: 'Case study', action: () => go('/work/karavali') },
    { label: 'Audit AI Copilot', hint: 'Case study', action: () => go('/work/audit-ai') },
    { label: 'ANPR', hint: 'Case study', action: () => go('/work/anpr') },
    { label: 'About', hint: 'Page', action: () => go('/about') },
    { label: 'Resume', hint: 'Page', action: () => go('/resume') },
    { label: 'LinkedIn', hint: 'External', action: () => go(site.linkedin, true) },
    { label: 'Email', hint: 'Contact', action: () => go(`mailto:${site.email}`, true) },
  ];

  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') close();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-bg/80 backdrop-blur-sm px-4 pt-[15vh]"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-lg border border-border-strong bg-raised shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
              <Search className="h-4 w-4 shrink-0 text-faint" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to..."
                className="w-full bg-transparent text-sm text-ink placeholder:text-faint focus:outline-none"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-faint">ESC</kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && <li className="px-4 py-3 text-sm text-faint">No results</li>}
              {filtered.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-ink transition-colors hover:bg-surface"
                  >
                    <span>{item.label}</span>
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-faint">
                      {item.hint}
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

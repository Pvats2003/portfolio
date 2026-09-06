'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Command } from 'lucide-react';
import { navLinks, site } from '@/data/site';
import { StatusDot } from '@/components/ui/Tag';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="font-mono text-sm font-semibold tracking-wider text-ink">
          PRIYANSHU VATS
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {[...navLinks, { label: 'Contact', href: '/#contact' }].map((link) => (
            <Link key={link.label} href={link.href} className="group relative py-1 text-sm text-muted transition-colors hover:text-ink">
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-editorial group-hover:scale-x-100" />
            </Link>
          ))}
          <StatusDot label={site.status} className="ml-2" />
          <button
            type="button"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            className="hidden items-center gap-1.5 rounded border border-border px-2 py-1 font-mono text-[11px] text-faint transition-colors hover:border-border-strong hover:text-muted lg:flex"
            aria-label="Open command palette"
          >
            <Command className="h-3 w-3" />K
          </button>
        </nav>

        <button
          type="button"
          className="text-ink md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-bg md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {[...navLinks, { label: 'Contact', href: '/#contact' }].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded px-2 py-3 text-base text-ink transition-colors hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-2">
              <StatusDot label={site.status} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

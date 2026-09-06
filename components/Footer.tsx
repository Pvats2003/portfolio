import Link from 'next/link';
import { footerLinks, site } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-14 sm:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-semibold tracking-wider text-ink">PRIYANSHU VATS</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-faint">Product × AI × Operations</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-ink"
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-faint">Built with curiosity, shipped with intent.</p>
          <p className="font-mono text-xs text-faint">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}

import { Button } from '@/components/ui/Button';
import { StatusDot } from '@/components/ui/Tag';
import { site } from '@/data/site';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">System complete</p>

        <div className="mt-4 max-w-2xl">
          <h2 className="text-display-md font-semibold text-ink">Have a problem worth building around?</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            I’m looking for teams where I can own ambiguous problems from 0→1 — especially across AI, product,
            operations, and automation.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={`mailto:${site.email}`} external showArrow>
              Let’s talk
            </Button>
            <Button href={site.linkedin} variant="secondary" external showArrow>
              LinkedIn
            </Button>
            <Button href="/resume" variant="secondary">
              Resume
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-6">
            <p className="font-mono text-sm text-faint">{site.email}</p>
            <StatusDot label={site.status} />
          </div>
        </div>
      </div>
    </section>
  );
}

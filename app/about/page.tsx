import type { Metadata } from 'next';
import { Skills } from '@/components/sections/Skills';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About',
  description: 'Electronics & Communication Engineering foundation, real-world operations experience, product thinking, AI, and 0→1 building.',
};

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-border pb-16 pt-32 sm:pt-40">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">About</p>
          <h1 className="mt-4 max-w-3xl text-display-lg font-semibold text-ink">Technology meets reality.</h1>
        </div>
      </header>

      <section className="border-b border-border py-24 sm:py-36">
        <div className="mx-auto max-w-2xl space-y-7 px-6 text-lg leading-relaxed text-muted sm:px-10">
          <p>
            I started in Electronics & Communication Engineering, which is where I learned to think in systems —
            signal in, signal out, and everything in between has to be understood, not assumed. That habit carried
            over directly into how I approach software and product work.
          </p>
          <p>
            Operations is where I learned what actually breaks. Running field operations for large-scale robotics
            data collection means the gap between a plan and what happens on the ground is where the real problems
            live — a spreadsheet that doesn’t reflect reality, a report that arrives too late to act on, a process
            that assumes connectivity nobody has.
          </p>
          <p>
            Product thinking is the layer that connects the two: deciding what’s actually worth building, for whom,
            and why — before writing a line of code or drawing a wireframe. And the engineering has to hold up on its
            own terms: tested, typed, and built to be changed later without breaking.
          </p>
          <p className="text-ink">
            I’ve built AI systems, automation tooling, and consumer products from zero — alone, end to end. That’s
            the work I want to keep doing: taking a problem before it has a shape and giving it one.
          </p>
        </div>
      </section>

      <Skills />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/#work" showArrow>
              See the work
            </Button>
            <Button href="/resume" variant="secondary">
              View resume
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

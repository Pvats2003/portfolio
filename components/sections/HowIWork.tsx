import { howIWork } from '@/data/site';

export function HowIWork() {
  return (
    <section className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <h2 className="max-w-2xl text-display-md font-semibold text-ink">I work at the intersection.</h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {howIWork.map((step) => (
            <div key={step.index} className="border-t border-border pt-5">
              <span className="font-mono text-xs text-accent">{step.index}</span>
              <p className="mt-2 text-lg font-medium text-ink">{step.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-2xl text-xl leading-relaxed text-ink">
          My advantage is being able to move between the whiteboard, the codebase, and the real-world operation.
        </p>
      </div>
    </section>
  );
}

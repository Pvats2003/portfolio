import { proofPoints } from '@/data/site';

export function ProofStrip() {
  return (
    <section className="border-b border-border bg-surface" aria-label="Evidence points">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-6 py-12 sm:px-10 md:grid-cols-4 md:gap-6">
        {proofPoints.map((p) => (
          <div key={p.label} className="border-l border-border pl-4">
            <p className="font-mono text-3xl font-semibold text-ink sm:text-4xl">{p.value}</p>
            <p className="mt-1.5 text-sm text-muted">{p.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { proofPoints } from '@/data/site';

export function ProofStrip() {
  return (
    <section className="border-b border-border py-16 sm:py-24" aria-label="Evidence points">
      <div className="mx-auto flex max-w-content flex-wrap gap-x-16 gap-y-10 px-6 sm:px-10">
        {proofPoints.map((p) => (
          <div key={p.label}>
            <p className="font-mono text-4xl font-semibold text-ink sm:text-5xl">{p.value}</p>
            <p className="mt-2 text-sm text-faint">{p.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

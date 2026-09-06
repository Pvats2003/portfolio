import { skillClusters } from '@/data/skills';

export function Skills() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Skills</p>
        <h2 className="mt-3 text-display-md font-semibold text-ink">What I work with.</h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillClusters.map((cluster) => (
            <div key={cluster.label}>
              <p className="font-mono text-xs uppercase tracking-wider text-faint">{cluster.label}</p>
              <ul className="mt-4 space-y-2.5">
                {cluster.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

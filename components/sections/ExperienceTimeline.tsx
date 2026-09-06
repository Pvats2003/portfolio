import { experience, leadership } from '@/data/experience';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tag } from '@/components/ui/Tag';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeader kicker="Experience" title="Where I’ve worked." />

        <div className="mt-14 divide-y divide-border border-y border-border">
          {experience.map((item) => (
            <div key={item.title} className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[10rem_1fr]">
              <div className="flex items-start gap-3 sm:block">
                <p className="font-mono text-sm text-faint">{item.period}</p>
                {item.current && <Tag className="mt-2 hidden sm:inline-flex">Current</Tag>}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-base text-muted">
                  {item.org}
                  {item.location ? ` — ${item.location}` : ''}
                  {item.industry ? ` · ${item.industry}` : ''}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.focus.map((f) => (
                    <li key={f} className="rounded border border-border px-2.5 py-1 font-mono text-xs text-muted">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Leadership</p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {leadership.map((item) => (
              <div key={item.title} className="rounded-lg border border-border p-6">
                <p className="font-mono text-xs text-faint">{item.period}</p>
                <h4 className="mt-2 text-lg font-semibold text-ink">{item.title}</h4>
                <p className="mt-1 text-sm text-muted">{item.org}</p>
                <p className="mt-3 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

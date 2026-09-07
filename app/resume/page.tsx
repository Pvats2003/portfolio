import type { Metadata } from 'next';
import { experience, leadership, education, certifications } from '@/data/experience';
import { skillClusters } from '@/data/skills';
import { projects } from '@/data/projects';
import { site } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { DownloadResumeButton } from '@/components/ResumeActions';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume for Priyanshu Vats — product-minded AI operator building products, automation systems, and operational infrastructure.',
};

export default function ResumePage() {
  return (
    <div className="pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-6 pb-24 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-8 print:border-black">
          <div>
            <h1 className="text-display-md font-semibold text-ink">Priyanshu Vats</h1>
            <p className="mt-2 font-mono text-sm uppercase tracking-wider text-muted">{site.role}</p>
          </div>
          <div className="flex gap-3">
            <DownloadResumeButton />
            <Button href={site.linkedin} variant="secondary" external className="print:hidden">
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-faint">
          <span>{site.email}</span>
          <span>{site.phone}</span>
          <span>{site.location}</span>
          <span>{site.linkedinLabel}</span>
        </div>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Summary</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Product-minded operator bridging field operations and AI/robotics data infrastructure — seeking Associate
            Product Manager / Founder’s Office roles where technical fluency and hands-on ops execution can drive
            0→1 product building.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Experience</h2>
          <div className="mt-5 space-y-8">
            {experience.map((item) => (
              <div key={item.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <span className="font-mono text-xs text-faint">{item.period}</span>
                </div>
                <p className="text-sm text-muted">
                  {item.org}
                  {item.location ? ` — ${item.location}` : ''}
                  {item.industry ? ` · ${item.industry}` : ''}
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {item.focus.map((f) => (
                    <li key={f} className="text-sm text-muted before:mr-1.5 before:text-faint before:content-['·']">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Selected projects</h2>
          <div className="mt-5 space-y-5">
            {projects
              .filter((p) => p.tier <= 2)
              .map((p) => (
                <div key={p.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                    <span className="font-mono text-xs text-faint">{p.status}</span>
                  </div>
                  <p className="text-sm text-muted">{p.description}</p>
                </div>
              ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Education</h2>
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold text-ink">{education.degree}</h3>
              <p className="text-sm text-muted">
                {education.school}, {education.location}
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs text-faint">{education.period}</span>
          </div>
          <p className="mt-3 text-sm text-muted">{certifications.join(' · ')}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Skills</h2>
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skillClusters.map((cluster) => (
              <div key={cluster.label}>
                <p className="font-mono text-xs uppercase tracking-wider text-faint">{cluster.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cluster.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Leadership</h2>
          <div className="mt-5 space-y-4">
            {leadership.map((item) => (
              <div key={item.title} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="text-sm text-muted">
                    {item.org} — {item.detail}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-faint">{item.period}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

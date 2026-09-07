import { CaseStudySection as CaseStudySectionData } from '@/lib/types';
import { ArchitectureDiagram } from '@/components/case-studies/ArchitectureDiagram';
import { VisualEvidence } from '@/components/case-studies/VisualEvidence';
import { MetricStrip } from '@/components/ui/Metric';

export function CaseStudySection({ section }: { section: CaseStudySectionData }) {
  return (
    <section id={section.id} className="scroll-mt-28 border-b border-border py-16 sm:py-20">
      {section.quote && (
        <div className="mx-auto mb-14 max-w-content px-6 sm:px-10">
          <p className="max-w-3xl border-l-2 border-border-strong pl-6 font-mono text-2xl uppercase leading-snug tracking-tight text-ink sm:text-4xl">
            {section.quote}
          </p>
        </div>
      )}

      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          {section.kicker && (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">{section.kicker}</p>
          )}
          <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">{section.heading}</h2>
        </div>

        <div className="max-w-2xl space-y-6">
          {section.body?.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}

          {section.bullets && (
            <ul className="space-y-2.5">
              {section.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-base text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {section.mockup && (
            <VisualEvidence
              kind={section.mockup}
              images={section.evidenceImages}
              label={section.evidenceLabel}
              notes={section.evidenceNotes}
            />
          )}

          {section.diagram && <ArchitectureDiagram data={section.diagram} />}

          {section.metrics && section.metrics.length > 0 && <MetricStrip metrics={section.metrics} className="pt-2" />}
        </div>
      </div>
    </section>
  );
}

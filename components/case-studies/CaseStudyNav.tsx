'use client';

import { useEffect, useState } from 'react';

export function CaseStudyNav({ sections }: { sections: { id: string; heading: string }[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-16 z-30 hidden border-b border-border bg-bg/90 backdrop-blur lg:block"
    >
      <div className="mx-auto flex max-w-content items-center gap-6 overflow-x-auto px-10 py-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`whitespace-nowrap font-mono text-xs uppercase tracking-wider transition-colors ${
              activeId === s.id ? 'text-accent' : 'text-faint hover:text-muted'
            }`}
          >
            {s.heading}
          </a>
        ))}
      </div>
    </nav>
  );
}

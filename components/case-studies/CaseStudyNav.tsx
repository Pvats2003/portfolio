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
      <div
        className="scrollbar-none mx-auto flex max-w-content min-w-0 items-center gap-6 overflow-x-auto overflow-y-hidden px-10 py-3 [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]"
      >
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onFocus={(e) => e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest' })}
            className={`whitespace-nowrap font-mono text-xs uppercase tracking-wider transition-colors ${
              activeId === s.id ? 'text-ink' : 'text-faint hover:text-muted'
            }`}
          >
            {s.heading}
          </a>
        ))}
      </div>
    </nav>
  );
}

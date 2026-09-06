'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HeroSystemGraph } from '@/components/sections/HeroSystemGraph';
import { site, howIWork } from '@/data/site';

export function Hero() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden border-b border-border bg-bg pb-20 pt-36 sm:pt-44">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
        aria-hidden
      />
      <HeroSystemGraph />
      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
        >
          {site.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl text-display-xl font-semibold text-ink"
        >
          {site.headline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl space-y-4"
        >
          <p className="text-lg text-muted sm:text-xl">{site.supporting}</p>
          <p className="text-base text-faint sm:text-lg">{site.secondary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/#work" showArrow>
            Explore my work
          </Button>
          <Button href="/resume" variant="secondary">
            View resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <a
            href="#how-i-work"
            className="font-mono text-xs uppercase tracking-[0.2em] text-faint transition-colors hover:text-accent"
          >
            How I work
          </a>
          <div className="mt-5 flex flex-col divide-y divide-border border-y border-border sm:flex-row sm:divide-x sm:divide-y-0">
            {howIWork.map((stage, i) => (
              <button
                key={stage.index}
                type="button"
                onMouseEnter={() => setActiveStage(i)}
                onMouseLeave={() => setActiveStage(null)}
                onFocus={() => setActiveStage(i)}
                onBlur={() => setActiveStage(null)}
                className="group flex-1 px-0 py-4 text-left transition-colors duration-300 ease-editorial sm:px-5"
              >
                <span
                  className={`font-mono text-xs transition-colors duration-300 ${
                    activeStage === i ? 'text-accent' : 'text-faint'
                  }`}
                >
                  {stage.index}
                </span>
                <p
                  className={`mt-1 text-sm font-medium transition-colors duration-300 ${
                    activeStage === i ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {stage.label}
                </p>
                <p
                  className={`mt-1 max-w-[16rem] text-xs leading-relaxed transition-opacity duration-300 ${
                    activeStage === i ? 'opacity-100 text-muted' : 'opacity-0 text-faint sm:opacity-70'
                  }`}
                >
                  {stage.detail}
                </p>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

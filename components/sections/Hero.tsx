'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HeroSystemGraph } from '@/components/sections/HeroSystemGraph';
import { site } from '@/data/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-bg pb-28 pt-40 sm:pt-48">
      <HeroSystemGraph />
      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-faint"
        >
          {site.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-3xl text-display-xl font-semibold leading-[1.05] text-ink"
        >
          {site.headline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 max-w-xl space-y-4"
        >
          <p className="text-lg text-muted sm:text-xl">{site.supporting}</p>
          <p className="text-base text-faint sm:text-lg">{site.secondary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <Button href="/#work" showArrow>
            Explore my work
          </Button>
          <Button href="/resume" variant="secondary">
            View resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

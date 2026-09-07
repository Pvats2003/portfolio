'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HeroArtwork } from '@/components/sections/HeroArtwork';
import { site } from '@/data/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-bg pb-16 pt-32 lg:flex lg:min-h-screen lg:flex-col lg:justify-end lg:pb-24 lg:pt-40">
      <HeroArtwork />

      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            'radial-gradient(ellipse 58% 62% at 14% 86%, rgba(8,9,10,0.9) 0%, rgba(8,9,10,0.45) 40%, transparent 66%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[10px] tracking-[0.2em] text-faint/80"
        >
          {site.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-md"
        >
          <span className="block text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">I build systems</span>
          <span className="block text-2xl font-light leading-[1.2] text-muted sm:text-3xl">
            that turn messy problems
          </span>
          <span className="block text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">into intelligent products.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-xs space-y-3"
        >
          <p className="text-sm leading-relaxed text-muted/90">{site.supporting}</p>
          <p className="text-sm leading-relaxed text-faint">{site.secondary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
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

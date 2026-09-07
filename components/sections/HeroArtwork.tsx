'use client';

import { motion } from 'framer-motion';

export function HeroArtwork() {
  return (
    <div
      className="bg-noise pointer-events-none relative mx-auto mb-8 flex h-56 w-full max-w-[19rem] items-center justify-center overflow-hidden sm:h-72 sm:max-w-sm lg:absolute lg:inset-0 lg:mx-0 lg:mb-0 lg:h-auto lg:max-w-none lg:justify-end lg:overflow-visible"
      aria-hidden
    >
      <div className="animate-ambient-drift absolute inset-0 opacity-[0.28] [background:radial-gradient(46%_38%_at_66%_26%,rgba(242,240,234,0.2),transparent_72%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        className="h-[30rem] w-[22rem] shrink-0 sm:h-[36rem] sm:w-[27rem] lg:h-[54rem] lg:w-[38rem] lg:translate-x-[8%]"
      >
        <svg viewBox="0 0 600 800" className="h-full w-full" style={{ filter: 'contrast(1.06) saturate(0.9)' }}>
          <defs>
            <linearGradient id="sculptureLight" x1="18%" y1="4%" x2="80%" y2="98%">
              <stop offset="0%" stopColor="#f5f3ed" stopOpacity="0.94" />
              <stop offset="45%" stopColor="#84868a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#08090a" stopOpacity="0.92" />
            </linearGradient>
            <linearGradient id="sculptureCool" x1="8%" y1="0%" x2="92%" y2="100%">
              <stop offset="0%" stopColor="#cdd6da" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#05060a" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="specular" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbfaf6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#fbfaf6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="contactShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <filter id="soften" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5.5" />
            </filter>
            <filter id="softenLg" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="30" />
            </filter>
          </defs>

          <ellipse cx="322" cy="702" rx="190" ry="64" fill="url(#contactShadow)" filter="url(#softenLg)" />

          <path
            d="M300,36 C426,118 462,266 428,404 C408,502 462,564 420,652 C398,704 338,764 278,760 C226,756 196,700 208,618 C220,522 168,462 190,360 C212,238 242,116 300,36 Z"
            fill="url(#sculptureLight)"
            filter="url(#soften)"
          />

          <path
            d="M300,36 C426,118 462,266 428,404 C408,502 462,564 420,652 C398,704 338,764 278,760 C226,756 196,700 208,618 C220,522 168,462 190,360 C212,238 242,116 300,36 Z"
            fill="url(#sculptureCool)"
            filter="url(#soften)"
            style={{ mixBlendMode: 'screen' }}
            transform="translate(14, 20) scale(0.97)"
          />

          <ellipse
            cx="330"
            cy="146"
            rx="88"
            ry="58"
            fill="url(#specular)"
            filter="url(#softenLg)"
            style={{ mixBlendMode: 'screen' }}
          />

          <circle cx="376" cy="212" r="2.2" className="fill-accent" opacity="0.85" />
        </svg>
      </motion.div>
    </div>
  );
}

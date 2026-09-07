'use client';

import Image from 'next/image';

export function HeroArtwork() {
  return (
    <div
      className="pointer-events-none relative mx-auto mb-8 h-64 w-full max-w-[19rem] overflow-hidden sm:h-80 sm:max-w-sm lg:absolute lg:inset-0 lg:mx-0 lg:mb-0 lg:h-auto lg:max-w-none lg:overflow-visible"
      aria-hidden
    >
      <div
        className="absolute h-40 w-64 rounded-[50%] opacity-70 sm:h-56 sm:w-80 lg:right-[8%] lg:h-72 lg:w-[26rem]"
        style={{
          bottom: '8%',
          right: '18%',
          background: 'radial-gradient(closest-side, rgba(0,0,0,0.65), transparent 72%)',
          filter: 'blur(6px)',
        }}
      />

      <div className="animate-ambient-drift absolute inset-0 z-10 opacity-[0.2] mix-blend-screen [background:radial-gradient(40%_32%_at_66%_36%,rgba(242,240,234,0.22),transparent_72%)]" />

      <Image
        src="/hero/artwork.png"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 55vw, 90vw"
        className="object-contain object-[65%_60%] lg:object-[82%_center]"
      />
    </div>
  );
}

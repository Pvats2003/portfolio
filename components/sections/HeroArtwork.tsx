'use client';

import Image from 'next/image';

export function HeroArtwork() {
  return (
    <div
      className="pointer-events-none relative mx-auto mb-8 h-64 w-full max-w-[19rem] overflow-hidden sm:h-80 sm:max-w-sm lg:absolute lg:inset-0 lg:mx-0 lg:mb-0 lg:h-auto lg:max-w-none lg:overflow-visible"
      aria-hidden
    >
      <div className="animate-ambient-drift absolute inset-0 z-10 opacity-[0.15] mix-blend-screen [background:radial-gradient(38%_30%_at_58%_45%,rgba(242,240,234,0.2),transparent_72%)]" />

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

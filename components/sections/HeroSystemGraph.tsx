'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CENTER = 200;
const R_OUTER = 168;
const R_MID = 122;
const R_INNER = 78;
const R_SQUARE = 146;

function polar(radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function buildTicks() {
  const count = 48;
  const ticks: { x1: number; y1: number; x2: number; y2: number; major: boolean }[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i;
    const major = i % 12 === 0;
    const inner = polar(R_OUTER + 6, angle);
    const outer = polar(R_OUTER + (major ? 22 : 10), angle);
    ticks.push({ x1: inner.x, y1: inner.y, x2: outer.x, y2: outer.y, major });
  }
  return ticks;
}

const TICKS = buildTicks();
const INDICATOR = polar(R_INNER, -58);

export function HeroSystemGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 55, damping: 16, mass: 0.6 });
  const springTiltY = useSpring(tiltY, { stiffness: 55, damping: 16, mass: 0.6 });

  const ticks = useMemo(() => TICKS, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    function onMove(e: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      tiltY.set(px * 7);
      tiltX.set(py * -7);
    }
    function onLeave() {
      tiltX.set(0);
      tiltY.set(0);
    }

    window.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [reduced, tiltX, tiltY]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-y-0 right-[-6%] hidden w-[42rem] items-center lg:flex"
      style={{ perspective: 1400 }}
      aria-hidden
    >
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduced ? { duration: 0 } : { duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        style={{
          rotateX: reduced ? 0 : springTiltX,
          rotateY: reduced ? 0 : springTiltY,
          transformStyle: 'preserve-3d',
        }}
        className="mx-auto h-[36rem] w-[36rem]"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <g stroke="#212426" strokeWidth="1" fill="none">
            <circle cx={CENTER} cy={CENTER} r={R_OUTER} />
            <circle cx={CENTER} cy={CENTER} r={R_MID} strokeOpacity="0.7" />
            <circle cx={CENTER} cy={CENTER} r={R_INNER} strokeOpacity="0.9" />
            <rect
              x={CENTER - R_SQUARE / 2}
              y={CENTER - R_SQUARE / 2}
              width={R_SQUARE}
              height={R_SQUARE}
              transform={`rotate(45 ${CENTER} ${CENTER})`}
              strokeOpacity="0.55"
            />
            <line x1={CENTER} y1={CENTER - R_INNER} x2={CENTER} y2={CENTER + R_INNER} strokeOpacity="0.4" />
            <line x1={CENTER - R_INNER} y1={CENTER} x2={CENTER + R_INNER} y2={CENTER} strokeOpacity="0.4" />
          </g>

          <g stroke="#2c3033" strokeWidth="1">
            {ticks.map((t, i) => (
              <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeOpacity={t.major ? 0.9 : 0.35} />
            ))}
          </g>

          <circle cx={CENTER} cy={CENTER} r="2.5" className="fill-border-strong" />

          <motion.circle
            cx={INDICATOR.x}
            cy={INDICATOR.y}
            r="3"
            className="fill-accent"
            animate={reduced ? undefined : { opacity: [0.5, 1, 0.5] }}
            transition={reduced ? undefined : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

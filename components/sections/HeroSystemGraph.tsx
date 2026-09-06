'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const NODES = [
  { key: 'product', label: 'Product', x: 40, y: 150 },
  { key: 'ai', label: 'AI', x: 220, y: 40 },
  { key: 'operations', label: 'Operations', x: 220, y: 260 },
] as const;

const CENTER = { x: 130, y: 150 };
const LINE_DURATION = 0.5;
const LINE_STAGGER = 0.1;
const LINE_START = 0.15;

export function HeroSystemGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(mvY, { stiffness: 60, damping: 20, mass: 0.6 });
  const groupX = useTransform(springX, (v) => v);
  const groupY = useTransform(springY, (v) => v);

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
      mvX.set(px * 10);
      mvY.set(py * 10);
    }
    function onLeave() {
      mvX.set(0);
      mvY.set(0);
    }

    window.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [reduced, mvX, mvY]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
      <motion.svg
        viewBox="0 0 280 300"
        className="absolute right-0 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 translate-x-1/4 opacity-70"
        style={reduced ? undefined : { x: groupX, y: groupY }}
      >
        <g stroke="#212426" strokeWidth="1" fill="none">
          {NODES.map((n, i) => (
            <motion.line
              key={n.key}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={n.x}
              y2={n.y}
              className={activeNode === n.key ? 'stroke-accent/60' : ''}
              style={{ transition: 'stroke 0.3s ease' }}
              initial={reduced ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={reduced ? { duration: 0 } : { duration: LINE_DURATION, delay: LINE_START + i * LINE_STAGGER, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </g>

        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="5"
          className="fill-accent"
          initial={reduced ? false : { opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reduced ? { duration: 0 } : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
        />
        <motion.text
          x={CENTER.x}
          y={CENTER.y + 22}
          textAnchor="middle"
          className="fill-faint font-mono text-[9px] uppercase tracking-widest"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduced ? { duration: 0 } : { duration: 0.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Systems
        </motion.text>

        {NODES.map((n, i) => {
          const appearAt = LINE_START + i * LINE_STAGGER + LINE_DURATION * 0.7;
          return (
            <g
              key={n.key}
              className="pointer-events-auto cursor-default"
              onMouseEnter={() => setActiveNode(n.key)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={activeNode === n.key ? 5 : 3.5}
                className={activeNode === n.key ? 'fill-accent' : 'fill-border-strong'}
                style={{ transition: 'r 0.25s ease, fill 0.25s ease', transformOrigin: `${n.x}px ${n.y}px` }}
                initial={reduced ? false : { opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={reduced ? { duration: 0 } : { duration: 0.3, delay: appearAt, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.text
                x={n.x}
                y={n.y - 14}
                textAnchor="middle"
                className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                  activeNode === n.key ? 'fill-ink' : 'fill-faint'
                }`}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={reduced ? { duration: 0 } : { duration: 0.3, delay: appearAt, ease: [0.16, 1, 0.3, 1] }}
              >
                {n.label}
              </motion.text>
            </g>
          );
        })}
      </motion.svg>
    </div>
  );
}

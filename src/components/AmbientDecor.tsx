"use client";

import { motion } from "framer-motion";

const GOLD = "#c9a24a";
const YELLOW = "#d8c26a";
const SAGE = "#7a9a72";

/**
 * Ambient decoration, left side of the hero, sitting below the roman
 * numeral TOC: line-drawn stars, a leaf, a small laptop glyph, a
 * circle, and straight lines that draw themselves in and fade out,
 * plus a few drifting bubbles. Gold, light yellow, and green only,
 * kept small and subtle against the cream page.
 */
export default function AmbientDecor() {
  const draw = (delay: number, duration = 3.2) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: [0, 1, 1],
      opacity: [0, 1, 0],
    },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: 2.5,
      ease: "easeInOut" as const,
      times: [0, 0.6, 1],
    },
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-4 top-[420px] z-0 hidden h-[260px] w-[220px] md:block"
    >
      <svg viewBox="0 0 220 260" className="h-full w-full" fill="none">
        {/* star, gold */}
        <motion.path
          {...draw(0.2)}
          d="M40 20 L43 30 L53 30 L45 36 L48 46 L40 40 L32 46 L35 36 L27 30 L37 30 Z"
          stroke={GOLD}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        {/* tiny star, yellow */}
        <motion.path
          {...draw(1.8, 2.4)}
          d="M150 40 L152 46 L158 46 L153 50 L155 56 L150 52 L145 56 L147 50 L142 46 L148 46 Z"
          stroke={YELLOW}
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* leaf, green */}
        <motion.path
          {...draw(1.0, 3.2)}
          d="M25 90 C45 76 73 83 80 108 C59 116 33 112 25 90 Z M25 90 C43 94 61 102 80 108"
          stroke={SAGE}
          strokeWidth="1.1"
        />
        {/* second leaf, smaller, yellow */}
        <motion.path
          {...draw(2.6, 2.8)}
          d="M175 100 C188 92 205 97 209 113 C196 119 180 116 175 100 Z"
          stroke={YELLOW}
          strokeWidth="1"
        />
        {/* small tech glyph: an open laptop, gold */}
        <motion.path
          {...draw(2.2, 3)}
          d="M55 150 L55 170 L105 170 L105 150 Z M47 174 L113 174 L107 170 L53 170 Z M70 160 L90 160"
          stroke={GOLD}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        {/* circle, green */}
        <motion.circle
          {...draw(0.8, 2.6)}
          cx="185"
          cy="60"
          r="10"
          stroke={SAGE}
          strokeWidth="1"
        />
        {/* straight lines */}
        <motion.line
          {...draw(0.6, 2)}
          x1="10" y1="40" x2="10" y2="70"
          stroke={GOLD} strokeWidth="1"
        />
        <motion.line
          {...draw(2.9, 2)}
          x1="120" y1="200" x2="155" y2="200"
          stroke={SAGE} strokeWidth="1"
        />
        <motion.line
          {...draw(1.6, 2.2)}
          x1="15" y1="210" x2="45" y2="225"
          stroke={YELLOW} strokeWidth="1"
        />

        {/* small drifting bubbles */}
        {[
          { cx: 100, cy: 220, r: 2.5, color: GOLD, delay: 0 },
          { cx: 170, cy: 190, r: 2, color: SAGE, delay: 1.4 },
          { cx: 20, cy: 130, r: 2.2, color: YELLOW, delay: 2.3 },
        ].map((b, i) => (
          <motion.circle
            key={i}
            cx={b.cx}
            cy={b.cy}
            r={b.r}
            fill={b.color}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.6, 0], y: -30 }}
            transition={{
              duration: 4.2,
              delay: b.delay,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

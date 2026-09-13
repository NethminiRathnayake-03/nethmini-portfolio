"use client";

import { motion } from "framer-motion";

/**
 * A cute, stylized white rabbit: plump elongated body, long floppy
 * ears with soft pink tips, small black eye, tiny nose, short front
 * paws, little raised tail. Hops left to right across the hero floor
 * on a loop. Pure SVG, no external assets.
 */
export default function RunningRabbit() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-2 left-0 z-0 hidden h-24 w-full overflow-hidden md:block"
    >
      <motion.div
        className="absolute bottom-0"
        initial={{ x: "-15%" }}
        animate={{ x: "110vw" }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear",
        }}
      >
        <motion.svg
          viewBox="0 0 90 70"
          className="h-20 w-28"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* back ear, floppy, drooping down-left, behind head */}
          <ellipse cx="14" cy="35" rx="5" ry="15" fill="#ffffff" stroke="var(--surface-2)" strokeWidth="0.7" transform="rotate(-18 14 35)" />
          <ellipse cx="14" cy="37" rx="2.3" ry="10.5" fill="#f7c6d1" transform="rotate(-18 14 37)" />

          {/* front ear, floppy, drooping down */}
          <ellipse cx="22" cy="38" rx="5.4" ry="16" fill="#ffffff" stroke="var(--surface-2)" strokeWidth="0.7" transform="rotate(-4 22 38)" />
          <ellipse cx="22" cy="40" rx="2.5" ry="11.5" fill="#f7c6d1" transform="rotate(-4 22 40)" />

          {/* elongated plump body */}
          <ellipse cx="50" cy="46" rx="27" ry="16" fill="#ffffff" stroke="var(--surface-2)" strokeWidth="0.7" />

          {/* head */}
          <circle cx="34" cy="30" r="12.5" fill="#ffffff" stroke="var(--surface-2)" strokeWidth="0.7" />
          {/* soft pink crown patch */}
          <path d="M26 21 C 30 15, 40 15, 43 21 C 37 19, 30 19, 26 21 Z" fill="#f7c6d1" />

          {/* small black eye */}
          <circle cx="38" cy="29" r="1.5" fill="#1c1a17" />
          {/* tiny nose */}
          <ellipse cx="44" cy="33" rx="1.5" ry="1.1" fill="#f0b8c4" />
          {/* cheek blush */}
          <ellipse cx="41" cy="35" rx="2.4" ry="1.4" fill="#fadde3" opacity="0.7" />

          {/* short front paws */}
          <ellipse cx="34" cy="59" rx="5.2" ry="3.2" fill="#ffffff" stroke="var(--surface-2)" strokeWidth="0.7" />
          <ellipse cx="46" cy="60" rx="5.7" ry="3.2" fill="#ffffff" stroke="var(--surface-2)" strokeWidth="0.7" />
          {/* back paw */}
          <ellipse cx="67" cy="58" rx="6.8" ry="3.6" fill="#ffffff" stroke="var(--surface-2)" strokeWidth="0.7" />

          {/* little raised tail */}
          <circle cx="76" cy="37" r="5.2" fill="#ffffff" stroke="var(--surface-2)" strokeWidth="0.7" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * A single continuous circuit-trace line that runs the height of the page.
 * It draws itself once on load (the hero segment), then the rest is tied
 * to scroll progress — one motif, one idea, threaded through everything.
 */
export default function TraceLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.3,
  });

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* faint full track */}
        <path
          d="M 8 0 L 8 18 L 22 32 L 22 48 L 6 64 L 6 100"
          vectorEffect="non-scaling-stroke"
          fill="none"
          stroke="var(--surface-2)"
          strokeWidth="0.15"
        />
        {/* animated signal trace */}
        <motion.path
          d="M 8 0 L 8 18 L 22 32 L 22 48 L 6 64 L 6 100"
          vectorEffect="non-scaling-stroke"
          fill="none"
          stroke="var(--copper)"
          strokeWidth="0.2"
          style={{ pathLength }}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

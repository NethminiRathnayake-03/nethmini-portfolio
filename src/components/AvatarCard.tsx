"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

/**
 * A flat illustrated avatar card — not a rendered 3D avatar — with a
 * waving character, greeting bubble, and CV/contact actions, built in
 * the site's own cream/ink/sage palette.
 */
export default function AvatarCard() {
  return (
    <div className="relative overflow-hidden border border-surface-2 bg-ink px-6 py-8">
      <p className="font-display text-4xl italic text-bg/90">
        {profile.name.split(" ")[0]}
      </p>

      <div className="relative mx-auto mt-4 aspect-square w-full max-w-[220px]">
        <svg viewBox="0 0 240 240" className="h-full w-full">
          <defs>
            <linearGradient id="acHair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#171012" />
              <stop offset="100%" stopColor="#2b1d1a" />
            </linearGradient>
            <linearGradient id="acSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e0aa7c" />
              <stop offset="100%" stopColor="#cf9868" />
            </linearGradient>
          </defs>

          <circle cx="120" cy="120" r="110" fill="var(--sage)" opacity="0.12" />

          {/* long hair back */}
          <path d="M75 150 Q65 195 75 235 L100 235 Q92 190 98 155 Z" fill="url(#acHair)" />
          <path d="M165 150 Q178 195 168 235 L142 235 Q150 190 142 155 Z" fill="url(#acHair)" />

          {/* top / blazer */}
          <path
            d="M78 235 L82 165 Q82 130 120 126 Q158 130 158 165 L162 235 Z"
            fill="var(--surface-2)"
          />

          {/* neck + head */}
          <rect x="106" y="118" width="28" height="30" fill="url(#acSkin)" />
          <ellipse cx="120" cy="95" rx="46" ry="50" fill="url(#acSkin)" />

          {/* hair front */}
          <path
            d="M74 82 Q68 40 120 32 Q172 40 166 82 Q170 130 152 160 Q162 105 150 72 Q135 50 120 51 Q105 50 90 72 Q78 105 88 160 Q70 130 74 82 Z"
            fill="url(#acHair)"
          />

          {/* face */}
          <circle cx="104" cy="97" r="3.6" fill="#1c1a17" />
          <circle cx="136" cy="97" r="3.6" fill="#1c1a17" />
          <path d="M106 116 Q120 125 134 116" fill="none" stroke="#1c1a17" strokeWidth="2.4" strokeLinecap="round" />

          {/* still arm */}
          <path d="M150 160 Q172 175 168 205" fill="none" stroke="var(--surface-2)" strokeWidth="18" strokeLinecap="round" />
          <circle cx="168" cy="205" r="10" fill="url(#acSkin)" />

          {/* waving arm */}
          <motion.g
            style={{ transformOrigin: "90px 158px" }}
            animate={{ rotate: [0, -18, 0, -14, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
          >
            <path d="M90 158 Q64 142 58 108" fill="none" stroke="var(--surface-2)" strokeWidth="18" strokeLinecap="round" />
            <circle cx="58" cy="100" r="11" fill="url(#acSkin)" />
          </motion.g>
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="absolute -right-2 top-2 max-w-[140px] border border-sage/40 bg-bg px-3 py-2"
        >
          <p className="font-body text-xs text-ink">
            Hello there! I&apos;m {profile.name.split(" ")[0]} — glad you
            stopped by.
          </p>
        </motion.div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <a
          href="/resume.pdf"
          download
          className="border border-sage/60 px-4 py-2 text-center font-mono text-xs text-sage"
        >
          Download my CV
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="border border-bg/20 px-4 py-2 text-center font-mono text-xs text-bg/80"
        >
          Contact me
        </a>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

/**
 * A big, bold illustrated avatar based on Nethmini's likeness —
 * long dark hair, warm skin tone, white coat — waving hello.
 * Built from the site's own copper/signal palette so it reads as
 * brand, not a generic mascot.
 */
export default function Avatar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 340 440"
        className="h-full w-full"
        aria-label="Illustrated avatar of Nethmini waving hello"
      >
        <defs>
          <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#171012" />
            <stop offset="100%" stopColor="#2b1d1a" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0aa7c" />
            <stop offset="100%" stopColor="#cf9868" />
          </linearGradient>
          <linearGradient id="coatGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7f6f2" />
            <stop offset="100%" stopColor="#e5e3dc" />
          </linearGradient>
        </defs>

        {/* glow behind */}
        <circle cx="170" cy="190" r="175" fill="var(--copper)" opacity="0.1" />
        <circle cx="170" cy="190" r="130" fill="var(--signal)" opacity="0.07" />

        {/* long hair, back layer, behind shoulders */}
        <path
          d="M 90 260 Q 70 340 90 430 L 130 430 Q 118 350 128 270 Z"
          fill="url(#hairGrad)"
        />
        <path
          d="M 250 260 Q 272 340 252 430 L 212 430 Q 222 350 212 270 Z"
          fill="url(#hairGrad)"
        />

        {/* white coat / top */}
        <path
          d="M 95 430 L 100 300 Q 100 250 170 244 Q 240 250 240 300 L 245 430 Z"
          fill="url(#coatGrad)"
        />
        <path
          d="M 100 300 Q 100 250 170 244 Q 240 250 240 300"
          fill="none"
          stroke="var(--copper)"
          strokeWidth="2.5"
          opacity="0.6"
        />
        {/* coat lapel accents */}
        <path
          d="M 150 258 L 170 300 L 190 258"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* neck */}
        <rect x="153" y="212" width="34" height="42" fill="url(#skinGrad)" />

        {/* head */}
        <ellipse cx="170" cy="175" rx="64" ry="72" fill="url(#skinGrad)" />

        {/* long dark hair, front/top layer framing face */}
        <path
          d="M 100 155 Q 92 85 170 72 Q 248 85 240 155 Q 246 230 222 275 Q 236 195 220 140 Q 200 108 170 110 Q 140 108 120 140 Q 104 195 118 275 Q 94 230 100 155 Z"
          fill="url(#hairGrad)"
        />
        {/* center part highlight */}
        <path
          d="M 170 78 L 170 120"
          stroke="#3a2825"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* face details */}
        <circle cx="146" cy="178" r="5" fill="#16222a" />
        <circle cx="194" cy="178" r="5" fill="#16222a" />
        <path
          d="M 148 206 Q 170 220 192 206"
          fill="none"
          stroke="#16222a"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M 132 164 Q 144 155 156 162"
          fill="none"
          stroke="#2b1d1a"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M 184 162 Q 196 155 208 164"
          fill="none"
          stroke="#2b1d1a"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* blush */}
        <ellipse cx="134" cy="196" rx="9" ry="5" fill="var(--copper)" opacity="0.18" />
        <ellipse cx="206" cy="196" rx="9" ry="5" fill="var(--copper)" opacity="0.18" />

        {/* still arm */}
        <path
          d="M 214 274 Q 248 296 242 338"
          fill="none"
          stroke="url(#coatGrad)"
          strokeWidth="30"
          strokeLinecap="round"
        />
        <circle cx="242" cy="338" r="15" fill="url(#skinGrad)" />

        {/* waving arm, animated at shoulder */}
        <motion.g
          style={{ transformOrigin: "126px 272px" }}
          animate={{ rotate: [0, -20, 0, -16, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatDelay: 1.4,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 126 272 Q 90 252 82 202"
            fill="none"
            stroke="url(#coatGrad)"
            strokeWidth="30"
            strokeLinecap="round"
          />
          <circle cx="82" cy="192" r="17" fill="url(#skinGrad)" />
        </motion.g>
      </svg>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About me", num: "I" },
  { href: "#skills", label: "Skills", num: "II" },
  { href: "#projects", label: "Projects I've built", num: "III" },
  { href: "#resume", label: "Resume", num: "IV" },
  { href: "#contact", label: "Contact", num: "V" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-surface-2 bg-bg/90 px-6 py-4 backdrop-blur-sm md:px-10">
        <a
          href="#about"
          onClick={() => setOpen(false)}
          className="font-mono text-[11px] tracking-wide text-muted"
        >
          NETHMINI RATHNAYAKE
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden gap-3 font-mono text-[11px] text-muted md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-ink">
                {l.num}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-5 bg-ink"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-5 bg-ink"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg px-10"
          >
            <nav className="flex flex-col gap-3">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.06 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-ink transition-colors hover:text-sage"
                  >
                    {l.num} — {l.label}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

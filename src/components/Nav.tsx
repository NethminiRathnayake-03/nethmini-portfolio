"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#about", label: "About me", num: "I" },
  { href: "#skills", label: "Skills", num: "II" },
  { href: "#projects", label: "Projects I've built", num: "III" },
  { href: "#resume", label: "Resume", num: "IV" },
  { href: "#contact", label: "Contact", num: "V" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-surface-2 bg-bg/90 backdrop-blur-sm">
        <motion.div
          className="h-[2px] origin-left bg-clay"
          style={{ scaleX: progress }}
        />
        <div className="flex items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="font-mono text-[11px] tracking-wide text-muted"
          >
            NETHMINI RATHNAYAKE
          </a>

          <div className="flex items-center gap-4">
            <nav className="hidden gap-3 font-mono text-[11px] md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={
                    active === l.href
                      ? "text-clay"
                      : "text-muted transition-colors hover:text-ink"
                  }
                >
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
                    className={`font-display text-4xl transition-colors ${
                      active === l.href ? "text-clay" : "text-ink hover:text-sage"
                    }`}
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

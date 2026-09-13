"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Download } from "lucide-react";
import { profile } from "@/data/content";
import AmbientDecor from "@/components/AmbientDecor";

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.4 0 12.07c0 5.34 3.44 9.86 8.21 11.46.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.62-4.04-1.62-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.85 2.81 1.31 3.5 1 .11-.79.42-1.31.76-1.62-2.66-.31-5.47-1.35-5.47-6.01 0-1.33.46-2.41 1.23-3.26-.12-.31-.53-1.56.12-3.24 0 0 1.01-.33 3.3 1.24a11.3 11.3 0 0 1 6.01 0c2.29-1.57 3.3-1.24 3.3-1.24.65 1.68.24 2.93.12 3.24.77.85 1.23 1.93 1.23 3.26 0 4.67-2.81 5.7-5.48 6 .43.38.81 1.13.81 2.28 0 1.64-.02 2.97-.02 3.37 0 .32.22.7.83.58C20.57 21.92 24 17.4 24 12.07 24 5.4 18.63 0 12 0Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const toc = [
  { label: "About me", num: "I", href: "#about" },
  { label: "Skills", num: "II", href: "#skills" },
  { label: "Projects I've built", num: "III", href: "#projects" },
  { label: "Resume", num: "IV", href: "#resume" },
  { label: "Contact", num: "V", href: "#contact" },
];

export default function Hero() {
  return (
    <section id="about" className="relative z-10 min-h-screen pb-20 pt-28 md:pt-32">
      <AmbientDecor />
      <div className="grid gap-10 md:grid-cols-[auto_1fr_1.1fr] md:gap-10">
        {/* vertical spine TOC, roman numerals */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row gap-6 border-b border-surface-2 pb-4 md:w-64 md:flex-col md:gap-5 md:border-b-0 md:border-r md:pb-0 md:pr-10"
        >
          {toc.map((t) => (
            <li key={t.num}>
              <a href={t.href} className="flex flex-col transition-colors hover:text-ink">
                <span className="font-mono text-[10px] text-sage">{t.num}</span>
                <span className="mt-1 whitespace-nowrap text-xs italic text-muted md:text-sm">
                  {t.label}
                </span>
              </a>
            </li>
          ))}
        </motion.ul>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] tracking-wide text-muted"
          >
            {profile.location.toUpperCase()} · OPEN TO INTERNSHIPS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 font-display text-5xl leading-[1.02] text-ink md:text-7xl"
          >
            Nethmini
            <br />
            <span className="text-sage italic">Rathnayake</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 max-w-md text-base leading-relaxed text-ink/80"
          >
            A third-year IT &amp; Management undergraduate at the University
            of Moratuwa who likes owning things end to end — schema to
            deployment, sensor to server — with a growing focus on consumer
            solution design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-6 flex gap-3"
          >
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-2 text-muted transition-colors hover:border-clay hover:text-clay"
            >
              <Mail size={15} />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-2 text-muted transition-colors hover:border-clay hover:text-clay"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-2 text-muted transition-colors hover:border-clay hover:text-clay"
            >
              <LinkedinIcon />
            </a>
            <a
              href="/resume.pdf"
              download
              aria-label="Download resume"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-2 text-muted transition-colors hover:border-clay hover:text-clay"
            >
              <Download size={15} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 max-w-md font-display text-xl italic leading-snug text-ink"
          >
            &ldquo;I build{" "}
            <span className="text-clay">full systems</span>, not just
            interfaces &mdash; the kind of work that holds up when it hits
            production.&rdquo;
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* offset color block behind the photo — a signature touch */}
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-sm bg-sage/25" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/photos/nethmini-laptop.png"
              alt="Nethmini Rathnayake at her desk"
              fill
              priority
              className="object-cover"
            />
          </div>
          <p className="absolute -bottom-9 left-0 font-mono text-[10px] text-muted">
            Colombo, Sri Lanka — 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}

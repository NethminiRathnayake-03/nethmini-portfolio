"use client";

import { motion } from "framer-motion";
import { education, extracurricular, interests, hopingToLearn, profile } from "@/data/content";
import PhotoFrame from "@/components/PhotoFrame";

export default function Resume() {
  return (
    <section id="resume" className="relative z-10 border-t border-surface-2 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl italic text-ink md:text-4xl"
      >
        Resume
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-lg leading-relaxed text-ink/90"
      >
        I&apos;m an IT undergraduate who likes owning things end to end —
        schema to deployment, sensor to server. I&apos;m just as drawn to the
        human side of building things: creative problem-solving,{" "}
        <span className="text-sage">consumer solution design</span>, and
        turning ideas into meaningful, user-focused digital experiences. My
        strongest technical work sits at the intersection of backend
        architecture and automated scheduling, but that same instinct for
        how systems fit together carries into hardware: I&apos;ve designed a
        custom PCB and sensor-driven circuit for an embedded project the
        same way I&apos;d design a database.
      </motion.p>

      <div className="mt-16 grid gap-16 md:grid-cols-[0.9fr_1.6fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <PhotoFrame src="/photos/nethmini-office.jpg" alt={`${profile.name} portrait`} />
          <a
            href="/resume.pdf"
            download
            className="mt-6 block w-fit border-b border-clay font-mono text-xs text-clay"
          >
            Download resume (PDF) ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-mono text-xs text-sage">Education</h3>
          <div className="mt-6 space-y-8">
            {education.map((e) => (
              <div
                key={e.school}
                className="flex flex-col gap-1 border-l border-surface-2 pl-5 md:flex-row md:items-baseline md:justify-between md:gap-6"
              >
                <div>
                  <p className="font-body text-base text-ink">{e.school}</p>
                  <p className="text-sm text-muted">{e.detail}</p>
                  {e.note && (
                    <p className="mt-1 font-mono text-xs text-sage">
                      {e.note}
                    </p>
                  )}
                </div>
                {e.period && (
                  <p className="whitespace-nowrap font-mono text-xs text-muted">
                    {e.period}
                  </p>
                )}
              </div>
            ))}
          </div>

          <h3 className="mt-14 font-mono text-xs text-sage">
            Also involved in
          </h3>
          <ul className="mt-6 space-y-1.5">
            {extracurricular.map((item) => (
              <li key={item} className="text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-mono text-xs text-sage">
            Areas of interest
          </h3>
          <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-muted">
            {interests.map((item, idx) => (
              <li key={item}>
                {item}
                {idx < interests.length - 1 && (
                  <span className="text-surface-2"> ·</span>
                )}
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-mono text-xs text-sage">
            Hoping to learn
          </h3>
          <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-muted">
            {hopingToLearn.map((item, idx) => (
              <li key={item}>
                {item}
                {idx < hopingToLearn.length - 1 && (
                  <span className="text-surface-2"> ·</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

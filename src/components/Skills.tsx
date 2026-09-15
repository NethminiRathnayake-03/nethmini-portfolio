"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";

const accents = ["#b5793e", "#6f8f6a", "#5c7c96", "#8a6a8f", "#b89a3e"];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 border-t border-surface-2 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl italic text-ink md:text-4xl"
      >
        Stack
      </motion.h2>
      <p className="mt-4 max-w-sm text-sm text-muted">
        What I reach for, grouped by where it sits in a system.
      </p>

      <div className="mt-14 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const color = accents[i % accents.length];
          return (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="border-t-2 pt-4"
              style={{ borderColor: color }}
            >
              <p className="mb-4 font-mono text-xs" style={{ color }}>
                {group.group}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-l border-surface-2 pl-3 text-sm text-ink/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

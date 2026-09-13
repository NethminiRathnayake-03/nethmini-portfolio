"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/content";

const accents = ["#b5793e", "#6f8f6a", "#5c7c96", "#8a6a8f", "#b89a3e"];

function imgClass(position?: "top" | "center" | "bottom") {
  return position === "bottom"
    ? "object-bottom"
    : position === "center"
      ? "object-center"
      : "object-top";
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ p: number; i: number } | null>(
    null
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((lb) => {
          if (!lb) return lb;
          const imgs = projects[lb.p].images!;
          return { p: lb.p, i: (lb.i + 1) % imgs.length };
        });
      }
      if (e.key === "ArrowLeft") {
        setLightbox((lb) => {
          if (!lb) return lb;
          const imgs = projects[lb.p].images!;
          return { p: lb.p, i: (lb.i - 1 + imgs.length) % imgs.length };
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="projects" className="relative z-10 border-t border-surface-2 py-24">
      <div className="flex items-baseline justify-between border-b border-surface-2 pb-4">
        <h2 className="font-display text-3xl italic text-ink md:text-4xl">
          Projects I&apos;ve built
        </h2>
        <span className="hidden font-mono text-[11px] text-muted sm:inline">
          2026 — PRESENT
        </span>
      </div>

      {/* index of all projects, numbered */}
      <div className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <a
            key={p.name}
            href={`#project-${idx}`}
            className="flex items-baseline gap-3 border-b border-surface-2 py-2 text-sm text-ink/80 transition-colors hover:text-ink"
          >
            <span
              className="font-mono text-xs"
              style={{ color: accents[idx % accents.length] }}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span>{p.name}</span>
          </a>
        ))}
      </div>

      <div className="mt-4">
        {projects.map((p, pIdx) => {
          const accent = accents[pIdx % accents.length];
          const num = String(pIdx + 1).padStart(2, "0");
          return (
            <motion.article
              key={p.name}
              id={`project-${pIdx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="grid scroll-mt-24 gap-6 border-b border-surface-2 py-10 md:grid-cols-[280px_70px_1fr_1.1fr]"
            >
              {/* fanned photo stack, anchored in the corner, dashboard shot on top */}
              {p.images && p.images.length > 0 ? (
                <div>
                  <div className="relative mx-auto h-[300px] w-[220px] md:mx-0">
                    {[...p.images].reverse().map((img, revIdx) => {
                      const idx = p.images!.length - 1 - revIdx;
                      const rotation =
                        idx === 0 ? 0 : idx % 2 === 0 ? idx * 3 : -idx * 3;
                      return (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => setLightbox({ p: pIdx, i: idx })}
                          aria-label={`View ${p.name} screenshot ${idx + 1} of ${p.images!.length}`}
                          className="absolute left-0 aspect-video w-[210px] cursor-pointer overflow-hidden border-4 border-surface bg-surface shadow-md transition-transform hover:z-50 hover:scale-105"
                          style={{
                            top: `${idx * 18}px`,
                            transform: `rotate(${rotation}deg)`,
                            zIndex: p.images!.length - idx,
                            borderColor: idx === 0 ? accent : "var(--surface)",
                          }}
                        >
                          <Image
                            src={img.src}
                            alt={`${p.name} screenshot ${idx + 1}`}
                            fill
                            className={`object-cover ${imgClass(img.position)}`}
                          />
                        </button>
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightbox({ p: pIdx, i: 0 })}
                    className="mt-2 font-mono text-[10px] text-muted hover:text-ink"
                  >
                    View all {p.images.length} images →
                  </button>
                </div>
              ) : (
                <div />
              )}

              <p
                className="font-display text-4xl italic"
                style={{ color: accent }}
              >
                {num}
              </p>

              <div>
                <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                <p className="mt-1 text-sm" style={{ color: accent }}>
                  {p.role}
                </p>
                <p className="mt-1 text-xs text-muted">{p.type}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.split(" · ").map((tag) => (
                    <span
                      key={tag}
                      className="border px-2 py-1 font-mono text-[10px] text-muted"
                      style={{ borderColor: "var(--surface-2)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-5">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b text-sm"
                      style={{ borderColor: accent, color: accent }}
                    >
                      Live
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-muted text-sm text-muted hover:text-ink"
                    >
                      Repo
                    </a>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-ink/80">
                  {p.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="border-l pl-3 text-xs leading-relaxed text-muted"
                      style={{ borderColor: accent }}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/95 px-4 py-10"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative aspect-video w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={projects[lightbox.p].images![lightbox.i].src}
                alt={`${projects[lightbox.p].name} screenshot ${lightbox.i + 1}`}
                fill
                className={`object-contain ${imgClass(
                  projects[lightbox.p].images![lightbox.i].position
                )}`}
              />
            </div>

            <div className="mt-5 flex items-center gap-6 font-mono text-xs text-bg/70">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const imgs = projects[lightbox.p].images!;
                  setLightbox({
                    p: lightbox.p,
                    i: (lightbox.i - 1 + imgs.length) % imgs.length,
                  });
                }}
                className="hover:text-bg"
              >
                ← Prev
              </button>
              <span>
                {lightbox.i + 1} / {projects[lightbox.p].images!.length} —{" "}
                {projects[lightbox.p].name}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const imgs = projects[lightbox.p].images!;
                  setLightbox({ p: lightbox.p, i: (lightbox.i + 1) % imgs.length });
                }}
                className="hover:text-bg"
              >
                Next →
              </button>
            </div>

            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-6 top-6 font-mono text-sm text-bg/70 hover:text-bg"
            >
              ✕ Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

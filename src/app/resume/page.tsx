import { education, extracurricular, interests, profile } from "@/data/content";
import PhotoFrame from "@/components/PhotoFrame";

export default function ResumePage() {
  return (
    <main className="relative z-10 min-h-screen px-6 pb-24 pt-32 pl-10 md:px-24 md:pl-24">
      <div className="grid gap-16 md:grid-cols-[0.9fr_1.6fr]">
        <div>
          <PhotoFrame src="/photos/nethmini-laptop.png" alt={`${profile.name} portrait`} />
          <a
            href="/resume.pdf"
            download
            className="mt-6 block w-fit border-b border-clay font-mono text-xs text-clay"
          >
            Download resume (PDF) ↓
          </a>
        </div>

        <div>
          <h1 className="font-display text-4xl text-ink md:text-5xl">
            Resume
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink/90">
            I'm an IT undergraduate who likes owning things end to end —
            schema to deployment, sensor to server. My strongest work sits at
            the intersection of backend architecture and automated
            scheduling, but that same instinct for how systems fit together
            carries into hardware: I've designed a custom PCB and
            sensor-driven circuit for an embedded project the same way I'd
            design a database.
          </p>

          <h2 className="mt-14 font-mono text-xs text-sage">Education</h2>
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

          <h2 className="mt-14 font-mono text-xs text-sage">
            Also involved in
          </h2>
          <ul className="mt-6 space-y-1.5">
            {extracurricular.map((item) => (
              <li key={item} className="text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-mono text-xs text-sage">
            Areas of interest
          </h2>
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
        </div>
      </div>
    </main>
  );
}

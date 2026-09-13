import { education } from "@/data/content";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 border-t border-surface-2 px-6 py-24 pl-10 md:pl-24"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="font-display text-3xl text-text md:text-4xl">
            About
          </h2>
        </div>
        <div>
          <p className="max-w-xl text-lg text-text/90">
            I'm an IT undergraduate who likes owning things end to end —
            schema to deployment, sensor to server. My strongest work sits at
            the intersection of backend architecture and automated
            scheduling, but that same instinct for how systems fit together
            carries into hardware: I've designed a custom PCB and
            sensor-driven circuit for an embedded project the same way I'd
            design a database.
          </p>

          <div className="mt-14 space-y-8">
            {education.map((e) => (
              <div
                key={e.school}
                className="flex flex-col gap-1 border-l border-surface-2 pl-5 md:flex-row md:items-baseline md:justify-between md:gap-6"
              >
                <div>
                  <p className="font-body text-base text-text">{e.school}</p>
                  <p className="text-sm text-muted">{e.detail}</p>
                  {e.note && (
                    <p className="mt-1 font-mono text-xs text-signal">
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
        </div>
      </div>
    </section>
  );
}

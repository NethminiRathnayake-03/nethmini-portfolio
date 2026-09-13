import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 border-t border-surface-2 py-24">
      <h2 className="font-display text-3xl italic text-ink md:text-4xl">
        Contact
      </h2>
      <p className="mt-4 max-w-md text-ink/80">
        Open to Software Engineering / Full-Stack Development internships —
        reach out any time.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-10">
        <a
          href={`mailto:${profile.email}`}
          className="w-fit border-b border-clay font-mono text-sm text-clay"
        >
          {profile.email}
        </a>
        <p className="font-mono text-sm text-muted">{profile.phone}</p>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit font-mono text-sm text-muted hover:text-ink"
        >
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit font-mono text-sm text-muted hover:text-ink"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

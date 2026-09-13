import { skills } from "@/data/content";

const accents = ["#b5793e", "#6f8f6a", "#5c7c96", "#8a6a8f", "#b89a3e"];

export default function SkillsPage() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col justify-center px-6 pl-10 py-32 md:px-24 md:pl-24">
      <h1 className="font-display text-4xl text-ink md:text-6xl">Stack</h1>
      <p className="mt-4 max-w-sm text-sm text-muted">
        What I reach for, grouped by where it sits in a system.
      </p>

      <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const color = accents[i % accents.length];
          return (
            <div key={group.group} className="border-t-2 pt-4" style={{ borderColor: color }}>
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
            </div>
          );
        })}
      </div>
    </main>
  );
}

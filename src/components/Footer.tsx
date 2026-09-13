import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-surface-2 px-6 py-8 md:px-14">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}

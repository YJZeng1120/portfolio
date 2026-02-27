import { Moon, Sun } from "lucide-react";
import { profile } from "../data/portfolio";

interface NavBarProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function NavBar({ isDark, onToggle }: NavBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-[var(--border)] transition-colors duration-300"
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-display text-sm font-semibold text-[var(--text)] hover:text-[var(--text-muted)] transition-colors duration-150 tracking-tight"
        >
          {profile.name}
        </a>

        {/* Nav links + toggle */}
        <div className="flex items-center gap-1">
          {(["Projects", "Skills"] as const).map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="hidden sm:inline-flex items-center h-8 px-3 rounded-md text-sm text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-colors duration-150"
            >
              {section}
            </a>
          ))}

          {/* Separator */}
          <div className="hidden sm:block w-px h-4 mx-2 bg-[var(--border)]" />

          {/* Theme toggle */}
          <button
            onClick={onToggle}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-colors duration-150"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}

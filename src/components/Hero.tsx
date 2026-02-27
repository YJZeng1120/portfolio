import { Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-6 pb-10"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-5">
          {/* Left: avatar */}
          <img
            src={profile.photo}
            alt={`${profile.nameZh} (${profile.name})`}
            width={80}
            height={80}
            className="rounded-full object-cover shrink-0 fade-up fade-up-1"
            style={{ outline: "1px solid var(--border-strong)" }}
          />

          {/* Right: text */}
          <div className="min-w-0">
            <p className="fade-up fade-up-1 font-mono text-xs tracking-[0.2em] uppercase text-[var(--text)] mb-1">
              {profile.title}
            </p>

            <h1 className="fade-up fade-up-1 font-display text-3xl text-[var(--text)] mb-2 leading-snug">
              {profile.nameZh}
              {/* 桌面：同一行顯示 */}
              <span className="hidden sm:inline">
                <span className="text-[var(--text-muted)] mx-2 font-light select-none">·</span>
                {profile.name}
              </span>
              {/* 手機：換行顯示 */}
              <span className="block sm:hidden text-xl text-[var(--text)] mt-0.5">
                {profile.name}
              </span>
            </h1>

            <p className="fade-up fade-up-2 text-sm text-[var(--text-muted)] max-w-xl leading-relaxed mb-4">
              {profile.bio}
            </p>

            <div className="fade-up fade-up-2 flex items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary"
              >
                <Mail size={13} />
                {profile.email}
              </a>
              <a
                href="https://github.com/YJZeng1120"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="GitHub profile"
              >
                <GitHubSvg size={14} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubSvg({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

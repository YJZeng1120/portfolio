import { Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import { GitHubSvg } from "./icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-6 pb-10"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-5">
          {/* Left: avatar
          <img
            src={profile.photo}
            alt={`${profile.nameZh} (${profile.name})`}
            width={80}
            height={80}
            className="rounded-full object-cover shrink-0 fade-up fade-up-1"
            style={{ outline: "1px solid var(--border-strong)" }}
          /> */}

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

            <div className="fade-up fade-up-2 flex flex-col sm:flex-row items-start sm:items-center gap-2">
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

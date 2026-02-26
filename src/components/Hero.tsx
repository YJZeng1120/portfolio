import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-5">

          {/* Left: avatar */}
          <img
            src={profile.photo}
            alt={`${profile.nameZh} (${profile.name})`}
            width={80}
            height={80}
            className="rounded-full object-cover shrink-0 fade-up fade-up-1"
            style={{ outline: '1px solid var(--border-strong)' }}
          />

          {/* Right: text */}
          <div className="min-w-0">
            <p className="fade-up fade-up-1 font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-1">
              {profile.title}
            </p>

            <h1 className="fade-up fade-up-1 font-display text-3xl text-[var(--text)] mb-2 leading-snug">
              {profile.nameZh}
              <span className="text-[var(--text-muted)] mx-2 font-light select-none">·</span>
              {profile.name}
            </h1>

            <p className="fade-up fade-up-2 text-sm text-[var(--text-muted)] max-w-xl leading-relaxed mb-4">
              {profile.bio}
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="fade-up fade-up-2 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--accent)] text-[var(--accent)] text-sm font-medium hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200"
            >
              <MailIcon />
              {profile.email}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

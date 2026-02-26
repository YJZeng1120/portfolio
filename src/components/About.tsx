import { profile } from '../data/portfolio'

export default function About() {
  const paragraphs = profile.summary.split('\n\n').filter(Boolean)

  return (
    <section
      id="about"
      className="py-12 scroll-mt-16"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          {/* Section label */}
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
            01 — About
          </p>

          {/* Heading */}
          <h2 className="font-display text-[var(--text)] mb-6 leading-tight" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
            About me
          </h2>

          {/* Content */}
          <div
            className="border-l-2 pl-5 space-y-4"
            style={{ borderColor: 'var(--accent)' }}
          >
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-[var(--text-muted)] leading-relaxed text-sm"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

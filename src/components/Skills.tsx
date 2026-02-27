import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 scroll-mt-14"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Section label */}
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
          03 — Skills
        </p>

        {/* Heading */}
        <h2
          className="font-display text-[var(--text)] mb-10 leading-tight"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
        >
          Technical expertise
        </h2>

        {/* Skill groups */}
        <div className="space-y-8">
          {skills.map(group => (
            <div key={group.category}>
              {/* Category label */}
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] mb-3">
                {group.category}
              </p>

              {/* Badge row */}
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { profile } from '../data/portfolio'

interface NavBarProps {
  isDark: boolean
  onToggle: () => void
}

export default function NavBar({ isDark, onToggle }: NavBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[var(--border)] transition-colors duration-300"
      style={{ backgroundColor: 'var(--nav-bg)' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-display font-semibold text-[var(--text)] hover:text-[var(--text-muted)] transition-colors duration-200"
        >
          {profile.name}
        </a>

        {/* Nav links + toggle */}
        <nav className="flex items-center gap-6 md:gap-8">
          {(['Projects', 'Skills'] as const).map(section => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="hidden sm:block text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
            >
              {section}
            </a>
          ))}

          <button
            onClick={onToggle}
            className="p-2 rounded-md border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-all duration-200 flex items-center justify-center"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

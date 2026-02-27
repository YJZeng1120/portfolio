import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { profile } from './data/portfolio'

function App() {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <>
      <NavBar isDark={isDark} onToggle={() => setIsDark(d => !d)} />
      <main className="pt-14">
        <Hero />
        <Projects />
        <Skills />
      </main>
      <footer
        className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center justify-center text-center"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p className="font-mono text-[0.7rem] text-[var(--text-muted)] tracking-wide">
          © {new Date().getFullYear()} — {profile.name} · Built with React & TailwindCSS
        </p>
      </footer>
    </>
  )
}

export default App

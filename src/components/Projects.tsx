import { useState, useRef, useEffect } from 'react'
import { projects, type Project } from '../data/portfolio'

const company = projects.filter(p => p.type === 'company')
const personal = projects.filter(p => p.type !== 'company')

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openDialog = (project: Project) => {
    setSelected(project)
    // showModal runs after state update
  }

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  // Open dialog whenever selected changes (and dialog ref is ready)
  useEffect(() => {
    if (selected) {
      dialogRef.current?.showModal()
    }
  }, [selected])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) closeDialog()
  }

  const handleDialogClose = () => {
    setSelected(null)
  }

  return (
    <section
      id="projects"
      className="py-12 scroll-mt-16"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
          02 — Projects
        </p>

        <h2
          className="font-display text-[var(--text)] mb-10 leading-tight"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
        >
          Selected work
        </h2>

        <ProjectGroup label="Professional Experience" projects={company} cols="sm:grid-cols-2" onOpen={openDialog} />
        <ProjectGroup label="Personal Projects" projects={personal} cols="sm:grid-cols-2 lg:grid-cols-3" onOpen={openDialog} />
      </div>

      {/* ── Project detail dialog ── */}
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        onClose={handleDialogClose}
        className="w-full rounded-xl p-0 overflow-hidden"
        style={{
          maxWidth: '42rem',
          backgroundColor: 'var(--bg)',
          color: 'var(--text)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-hover)',
        }}
      >
        {selected && (
          <>
            {/* Image */}
            <div className="relative" style={{ aspectRatio: '16/9' }}>
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
              {/* Close button */}
              <button
                onClick={closeDialog}
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150"
                style={{
                  background: 'rgba(0,0,0,0.55)',
                  color: '#fff',
                  backdropFilter: 'blur(4px)',
                }}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-2xl text-[var(--text)] leading-tight">
                  {selected.name}
                </h3>
                <span
                  className="font-mono text-[0.65rem] px-2 py-1 rounded border border-[var(--border)] text-[var(--text-muted)] shrink-0 mt-1"
                >
                  {selected.type === 'company' ? 'Company' : selected.type === 'portfolio' ? 'Portfolio' : 'Side Project'}
                </span>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                {selected.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.techs.map(tech => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--border)] text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(selected.github || selected.demo) ? (
                <div className="flex items-center gap-4">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--accent)] text-[var(--accent)] text-sm font-medium hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200"
                    >
                      <GitHubIcon size={14} />
                      View Code
                    </a>
                  )}
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
                    >
                      <ExternalLinkIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-xs text-[var(--text-muted)] italic">Private / NDA — source code not available</p>
              )}
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}

function ProjectGroup({
  label,
  projects,
  cols,
  onOpen,
}: {
  label: string
  projects: Project[]
  cols: string
  onOpen: (p: Project) => void
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <p className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] shrink-0">
          {label}
        </p>
        <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
      </div>
      <div className={`grid grid-cols-1 ${cols} gap-5`}>
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} onOpen={onOpen} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const hasLinks = project.github || project.demo

  return (
    <article
      className="project-card cursor-pointer"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpen(project)}
      aria-label={`View details for ${project.name}`}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-lg text-[var(--text)] mb-1.5 leading-snug">
          {project.name}
        </h3>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3 flex-1 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techs.map(tech => (
            <span
              key={tech}
              className="font-mono text-[0.65rem] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className="flex items-center gap-4 pt-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {hasLinks ? (
            <>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
                >
                  <GitHubIcon size={13} />
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
                >
                  <ExternalLinkIcon />
                  Live demo
                </a>
              )}
            </>
          ) : (
            <span className="text-xs text-[var(--text-muted)] italic">Private / NDA</span>
          )}
          <span className="ml-auto text-xs text-[var(--text-muted)] opacity-60">
            Click for details →
          </span>
        </div>
      </div>
    </article>
  )
}


function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

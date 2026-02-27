import { ExternalLink, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "../data/portfolio";
import { AppleStoreSvg, GitHubSvg, PlayStoreSvg } from "./icons";

const company = projects.filter((p) => p.type === "company");
const personal = projects.filter((p) => p.type !== "company");

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (project: Project) => {
    setSelected(project);
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    if (selected) {
      dialogRef.current?.showModal();
    }
  }, [selected]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) closeDialog();
  };

  const handleDialogClose = () => {
    setSelected(null);
  };

  return (
    <section
      id="projects"
      className="py-12 scroll-mt-14"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
          02 — Projects
        </p>

        <h2
          className="font-display text-[var(--text)] mb-10 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
        >
          Selected work
        </h2>

        <ProjectGroup
          label="Professional Experience"
          projects={company}
          cols="sm:grid-cols-2"
          onOpen={openDialog}
        />
        <ProjectGroup
          label="Personal Projects"
          projects={personal}
          cols="sm:grid-cols-2 lg:grid-cols-3"
          onOpen={openDialog}
        />
      </div>

      {/* ── Project detail dialog ── */}
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        onClose={handleDialogClose}
        className="w-full mx-4 sm:mx-auto"
        style={{ maxWidth: "64rem", background: "transparent", border: "none" }}
      >
        {selected && (
          <div className="dialog-panel">
            {/* Media: YouTube iframe or image */}
            <div
              className="relative"
              style={{ aspectRatio: "16/9" }}
            >
              {selected.youtube ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selected.youtube}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selected.name}
                />
              ) : (
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              )}
              <button
                onClick={closeDialog}
                className="absolute top-3 right-3 w-7 h-7 rounded-md flex items-center justify-center transition-colors duration-150"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  backdropFilter: "blur(4px)"
                }}
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start gap-3 mb-2">
                <h3 className="font-display text-xl font-semibold text-[var(--text)] leading-tight flex-1">
                  {selected.name}
                </h3>
                <span className="tech-pill shrink-0 mt-0.5">
                  {selected.type === "company"
                    ? "Company"
                    : selected.type === "portfolio"
                      ? "Portfolio"
                      : "Side Project"}
                </span>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                {selected.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {selected.techs.map((tech) => (
                  <span
                    key={tech}
                    className="tech-pill"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="h-px w-full mb-4"
                style={{ background: "var(--border)" }}
              />

              <div className="flex flex-wrap items-center gap-2">
                {!selected.github &&
                  !selected.demo &&
                  !selected.appStore &&
                  !selected.playStore && (
                    <p className="text-xs text-[var(--text-muted)] italic w-full mb-1">
                      Private / NDA — source code not available
                    </p>
                  )}
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <GitHubSvg size={13} />
                    View Code
                  </a>
                )}
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                )}
                {selected.appStore && (
                  <a
                    href={selected.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <AppleStoreSvg size={13} />
                    App Store
                  </a>
                )}
                {selected.playStore && (
                  <a
                    href={selected.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <PlayStoreSvg size={13} />
                    Google Play
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

function ProjectGroup({
  label,
  projects,
  cols,
  onOpen
}: {
  label: string;
  projects: Project[];
  cols: string;
  onOpen: (p: Project) => void;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <p className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] shrink-0">
          {label}
        </p>
        <div
          className="flex-1 h-px"
          style={{ background: "var(--border)" }}
        />
      </div>
      <div className={`grid grid-cols-1 ${cols} gap-5`}>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onOpen={onOpen}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <article
      className="project-card cursor-pointer group"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
      aria-label={`View details for ${project.name}`}
    >
      {/* Media: YouTube thumbnail (with play overlay) or image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src={
            project.youtube
              ? `https://img.youtube.com/vi/${project.youtube}/maxresdefault.jpg`
              : project.image
          }
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {project.youtube && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            >
              <Play
                size={16}
                fill="white"
                color="white"
                className="ml-0.5"
              />
            </div>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-display text-[0.9375rem] font-semibold text-[var(--text)] leading-snug">
          {project.name}
        </h3>
        <p className="text-[0.8125rem] text-[var(--text-muted)] leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="tech-pill"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links row — visible on card, stopPropagation so clicks don't open dialog */}
        <div
          className="flex items-center gap-3 pt-2.5"
          style={{ borderTop: "1px solid var(--border)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {!project.github && !project.demo && !project.appStore && !project.playStore && (
            <span className="text-xs text-[var(--text-muted)] italic">Private / NDA</span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-150"
            >
              <GitHubSvg size={12} />
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-150"
            >
              <ExternalLink size={12} />
              Demo
            </a>
          )}
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-150"
            >
              <AppleStoreSvg size={12} />
              App Store
            </a>
          )}
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-150"
            >
              <PlayStoreSvg size={12} />
              Google Play
            </a>
          )}
          <span className="ml-auto text-[0.7rem] text-[var(--text-muted)] opacity-50 pointer-events-none">
            details →
          </span>
        </div>
      </div>
    </article>
  );
}

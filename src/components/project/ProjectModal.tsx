import { motion, AnimatePresence } from "framer-motion";
import { X, Award } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[var(--z-overlay)] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] z-[var(--z-modal)] mx-auto max-w-3xl overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl md:inset-x-auto md:top-[10%] md:bottom-[10%]"
          >
            <div className="p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-text-primary)] cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge label={project.type} variant="accent" />
                  <Badge label={String(project.year)} variant="muted" />
                </div>
                <h2 className="text-2xl text-[var(--color-text-primary)] md:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-1 text-base text-[var(--color-text-secondary)]">
                  {project.subtitle}
                </p>
              </div>

              {/* Achievement */}
              {project.achievement && (
                <div className="mb-6 flex items-center gap-2 rounded-lg bg-[var(--color-accent-glow)] border border-[var(--color-accent)]/20 px-4 py-3">
                  <Award size={18} className="shrink-0 text-[var(--color-accent)]" />
                  <span className="text-sm font-medium text-[var(--color-accent)]">
                    {project.achievement}
                  </span>
                </div>
              )}

              {/* YouTube embed */}
              {project.youtubeEmbedId && (
                <div className="mb-6 aspect-video overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeEmbedId}`}
                    title={`${project.title} demo video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Detailed description */}
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  About This Project
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} label={tech} variant="accent" />
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 border-t border-[var(--color-border)] pt-6">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    icon={<FiGithub size={16} />}
                  >
                    View Code
                  </Button>
                )}
                {project.youtubeUrl && (
                  <Button
                    href={project.youtubeUrl}
                    variant="secondary"
                    icon={<FaYoutube size={16} />}
                  >
                    Watch Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

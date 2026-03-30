import { cn } from "@/utils/cn";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { FiGithub } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { Award, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, featured = false, onViewDetails }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)] hover:scale-[1.01]",
        featured && "p-6 md:p-8"
      )}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3
            className={cn(
              "font-semibold text-[var(--color-text-primary)]",
              featured ? "text-lg md:text-xl" : "text-base"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">
            {project.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge label={project.type} variant="accent" />
          <Badge label={String(project.year)} variant="muted" />
        </div>
      </div>

      {/* Achievement ribbon */}
      {project.achievement && (
        <div className="mt-3 flex items-center gap-2 rounded-md bg-[var(--color-accent-glow)] border border-[var(--color-accent)]/20 px-3 py-2">
          <Award size={14} className="shrink-0 text-[var(--color-accent)]" />
          <span className="text-xs font-medium text-[var(--color-accent)]">
            {project.achievement}
          </span>
        </div>
      )}

      {/* Description */}
      <p
        className={cn(
          "mt-4 text-[var(--color-text-secondary)] leading-relaxed",
          featured ? "text-sm md:text-base" : "text-sm"
        )}
      >
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>

      {/* Footer actions */}
      <div className="mt-5 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <ExternalLink href={project.githubUrl} ariaLabel={`${project.title} GitHub`}>
              <FiGithub size={16} />
              <span className="text-xs">Code</span>
            </ExternalLink>
          )}
          {project.youtubeUrl && (
            <ExternalLink href={project.youtubeUrl} ariaLabel={`${project.title} YouTube demo`}>
              <FaYoutube size={16} />
              <span className="text-xs">Demo</span>
            </ExternalLink>
          )}
        </div>
        <button
          onClick={() => onViewDetails(project)}
          className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-highlight)] cursor-pointer"
          aria-label={`View details for ${project.title}`}
        >
          Details
          <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

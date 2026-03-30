import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ProjectModal } from "@/components/project/ProjectModal";
import { cn } from "@/utils/cn";

const filterTabs = [
  { label: "All", value: "all" },
  { label: "AI/ML", value: "ai" },
  { label: "Full Stack", value: "fullstack" },
  { label: "DevOps", value: "devops" },
  { label: "Hackathon", value: "hackathon" },
];

function filterProjects(filter: string): Project[] {
  if (filter === "all") return projects;
  if (filter === "ai")
    return projects.filter(
      (p) =>
        p.type === "Major Project" ||
        p.type === "Minor Project" ||
        p.technologies.some((t) =>
          ["TensorFlow", "CNN", "DistilBERT", "LangChain", "RAG", "Scikit-learn", "NLP"].includes(t)
        )
    );
  if (filter === "fullstack")
    return projects.filter(
      (p) =>
        p.type === "Academic" ||
        p.technologies.some((t) =>
          ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL"].includes(t)
        )
    );
  if (filter === "devops")
    return projects.filter((p) => p.type === "DevOps");
  if (filter === "hackathon")
    return projects.filter((p) => p.type === "Hackathon");
  return projects;
}

export function Projects({ hideTitle = false }: { hideTitle?: boolean }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = filterProjects(activeFilter);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <PageWrapper id="projects">
      {!hideTitle && <SectionTitle
        label="Projects"
        title="What I've Built"
        subtitle="From AI-powered platforms to cloud infrastructure — projects that solve real problems."
      />}

      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer",
              activeFilter === tab.value
                ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent-glow)]"
                : "border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
            )}
            aria-label={`Filter projects by ${tab.label}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects grid with animated layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {/* Featured projects */}
          {featured.length > 0 && (
            <div className="mb-6 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          )}

          {/* Remaining projects */}
          {rest.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          )}

          {/* No results */}
          {filtered.length === 0 && (
            <p className="py-12 text-center text-[var(--color-text-muted)]">
              No projects in this category yet.
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Detail modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageWrapper>
  );
}

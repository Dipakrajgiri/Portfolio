import { experience } from "@/data/experience";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Briefcase, Building2, GraduationCap, Heart, Wrench } from "lucide-react";
import { cn } from "@/utils/cn";
import type { ReactNode } from "react";
import type { Experience as ExperienceType } from "@/data/experience";

const typeConfig: Record<
  string,
  { color: string; borderColor: string; dotBg: string; dotBorder: string; icon: ReactNode; label: string }
> = {
  "full-time": {
    color: "text-[var(--color-accent)]",
    borderColor: "border-l-[var(--color-accent)]",
    dotBg: "bg-[var(--color-accent)]",
    dotBorder: "border-[var(--color-accent)]",
    icon: <Briefcase size={16} />,
    label: "Full-time",
  },
  internship: {
    color: "text-[var(--color-teal)]",
    borderColor: "border-l-[var(--color-teal)]",
    dotBg: "bg-[var(--color-teal)]",
    dotBorder: "border-[var(--color-teal)]",
    icon: <Building2 size={16} />,
    label: "Internship",
  },
  volunteer: {
    color: "text-[var(--color-highlight)]",
    borderColor: "border-l-[var(--color-highlight)]",
    dotBg: "bg-[var(--color-highlight)]",
    dotBorder: "border-[var(--color-highlight)]",
    icon: <Heart size={16} />,
    label: "Volunteer",
  },
  freelance: {
    color: "text-[var(--color-accent-bright)]",
    borderColor: "border-l-[var(--color-accent-bright)]",
    dotBg: "bg-[var(--color-accent-bright)]",
    dotBorder: "border-[var(--color-accent-bright)]",
    icon: <Wrench size={16} />,
    label: "Freelance",
  },
  academic: {
    color: "text-[var(--color-text-secondary)]",
    borderColor: "border-l-[var(--color-text-secondary)]",
    dotBg: "bg-[var(--color-text-secondary)]",
    dotBorder: "border-[var(--color-text-secondary)]",
    icon: <GraduationCap size={16} />,
    label: "Academic",
  },
};

function TimelineEntry({ exp, index }: { exp: ExperienceType; index: number }) {
  const config = typeConfig[exp.type] || typeConfig["full-time"];
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="relative pl-12 md:pl-16">
        {/* Timeline dot */}
        <div
          className={cn(
            "absolute left-2.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-[var(--color-bg)] md:left-4.5",
            config.dotBorder
          )}
        >
          <div className={cn("h-2 w-2 rounded-full", config.dotBg)} />
        </div>

        {/* Card */}
        <div
          className={cn(
            "rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 border-l-2 transition-all duration-300 hover:bg-[var(--color-surface-hover)]",
            config.borderColor
          )}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                {exp.role}
              </h3>
              <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">
                {exp.company}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 text-xs font-medium",
                  config.color
                )}
              >
                {config.icon}
                {config.label}
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">
                {exp.startDate} — {exp.endDate}
              </span>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            {exp.description.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
              >
                <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-muted)]" />
                {item}
              </li>
            ))}
          </ul>

          {exp.skills && exp.skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.skills.map((skill) => (
                <Badge key={skill} label={skill} variant="muted" />
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

function TimelineGroup({
  title,
  icon,
  entries,
}: {
  title: string;
  icon: ReactNode;
  entries: ExperienceType[];
}) {
  if (entries.length === 0) return null;
  return (
    <div className="mb-12 last:mb-0">
      <AnimatedSection>
        <h3 className="mb-6 flex items-center gap-2.5 text-lg font-semibold text-[var(--color-text-primary)]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-glow)] text-[var(--color-accent)]">
            {icon}
          </div>
          {title}
        </h3>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--color-border)] md:left-6" />
        <div className="flex flex-col gap-6">
          {entries.map((exp, index) => (
            <TimelineEntry key={`${exp.company}-${exp.role}`} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience({ hideTitle = false }: { hideTitle?: boolean }) {
  const professional = experience.filter(
    (e) => e.type === "full-time" || e.type === "internship" || e.type === "freelance"
  );
  const volunteer = experience.filter((e) => e.type === "volunteer");
  const academic = experience.filter((e) => e.type === "academic");

  return (
    <PageWrapper id="experience">
      {!hideTitle && <SectionTitle
        label="Experience"
        title="Where I've Worked"
        subtitle="Professional roles, mentorship, and community involvement."
      />}

      <TimelineGroup
        title="Professional Experience"
        icon={<Briefcase size={18} />}
        entries={professional}
      />

      <TimelineGroup
        title="Volunteer & Community"
        icon={<Heart size={18} />}
        entries={volunteer}
      />

      <TimelineGroup
        title="Academic Leadership"
        icon={<GraduationCap size={18} />}
        entries={academic}
      />
    </PageWrapper>
  );
}

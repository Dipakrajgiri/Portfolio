import { personal } from "@/data/personal";
import { education, certifications } from "@/data/education";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { GraduationCap, Award, TrendingUp, BookOpen, Users, FolderGit2 } from "lucide-react";

const stats = [
  { value: "3.59", label: "CGPA — Batch Topper", icon: <GraduationCap size={20} /> },
  { value: "300+", label: "Learners Trained", icon: <Users size={20} /> },
  { value: "3", label: "Research Papers", icon: <BookOpen size={20} /> },
  { value: "5+", label: "Projects Shipped", icon: <FolderGit2 size={20} /> },
];

export function About({ hideTitle = false }: { hideTitle?: boolean }) {
  const edu = education[0];

  return (
    <PageWrapper id="about">
      {!hideTitle && <SectionTitle label="About Me" title="Who I Am" />}

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        {/* Left — Long bio */}
        <AnimatedSection>
          <div className="space-y-5">
            {personal.longBio.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>

        {/* Right — Stat cards */}
        <StaggerContainer className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <Card className="text-center flex flex-col items-center gap-2 p-5">
                <span className="text-[var(--color-accent)]">{stat.icon}</span>
                <span className="text-2xl font-semibold text-[var(--color-text-primary)] md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs text-[var(--color-text-secondary)]">
                  {stat.label}
                </span>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Education */}
      <AnimatedSection className="mt-16">
        <h3 className="mb-6 flex items-center gap-2 text-xl text-[var(--color-text-primary)]">
          <GraduationCap size={22} className="text-[var(--color-accent)]" />
          Education
        </h3>
        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h4 className="text-base font-semibold text-[var(--color-text-primary)] md:text-lg">
                {edu.degree}
              </h4>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                {edu.institution} &middot; {edu.location}
              </p>
              <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">
                {edu.startYear} — {edu.endYear}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge label={`CGPA: ${edu.cgpa}`} variant="accent" />
              <Badge label={edu.distinction} variant="accent" />
            </div>
          </div>

          {/* Semester GPA bars */}
          <div className="mt-6">
            <span className="mb-3 block text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
              Semester Progress
            </span>
            <div className="flex items-end gap-2">
              {edu.semesterGPAs.map((gpa, i) => {
                const heightPercent = ((gpa - 2.5) / 1.5) * 100;
                return (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <span className="text-[10px] text-[var(--color-text-muted)]">
                      {gpa.toFixed(2)}
                    </span>
                    <div
                      className="w-full rounded-t bg-gradient-to-t from-[var(--color-accent-muted)] to-[var(--color-accent)] transition-all"
                      style={{ height: `${Math.max(heightPercent, 10)}px`, minHeight: "8px", maxHeight: "60px" }}
                    />
                    <span className="text-[10px] text-[var(--color-text-muted)]">
                      S{i + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Electives */}
          <div className="mt-5">
            <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
              Key Electives
            </span>
            <div className="flex flex-wrap gap-2">
              {edu.electives.map((elective) => (
                <Badge key={elective} label={elective} />
              ))}
            </div>
          </div>
        </Card>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection className="mt-10">
        <h3 className="mb-6 flex items-center gap-2 text-xl text-[var(--color-text-primary)]">
          <Award size={22} className="text-[var(--color-accent)]" />
          Certifications
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <Card key={cert.title} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-glow)]">
                <TrendingUp size={18} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {cert.title}
                </h4>
                <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
                  {cert.issuer} &middot; {cert.year}
                </p>
                <p className="mt-1.5 text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </PageWrapper>
  );
}

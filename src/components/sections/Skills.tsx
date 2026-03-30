import { skills } from "@/data/skills";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import {
  Brain,
  Server,
  Monitor,
  Cloud,
  GitBranch,
  Shield,
} from "lucide-react";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Brain: <Brain size={22} />,
  Server: <Server size={22} />,
  Monitor: <Monitor size={22} />,
  Cloud: <Cloud size={22} />,
  GitBranch: <GitBranch size={22} />,
  Shield: <Shield size={22} />,
};

export function Skills({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <PageWrapper id="skills">
      {!hideTitle && <SectionTitle
        label="Technical Skills"
        title="What I Work With"
        subtitle="Technologies and tools I use to build intelligent, scalable systems."
      />}

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category) => (
          <StaggerItem key={category.category}>
            <Card className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-glow)] text-[var(--color-accent)]">
                  {iconMap[category.icon] || <Brain size={22} />}
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} label={skill} />
                ))}
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </PageWrapper>
  );
}

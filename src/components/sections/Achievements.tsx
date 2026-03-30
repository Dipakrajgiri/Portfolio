import { achievements } from "@/data/achievements";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Trophy, Award, Rocket, Layers, Users } from "lucide-react";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Trophy: <Trophy size={24} />,
  Award: <Award size={24} />,
  Rocket: <Rocket size={24} />,
  Layers: <Layers size={24} />,
  Users: <Users size={24} />,
};

export function Achievements({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <PageWrapper id="achievements">
      {!hideTitle && <SectionTitle
        label="Achievements"
        title="Recognition & Awards"
        subtitle="Hackathon wins, regional competitions, and community impact."
      />}

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <StaggerItem key={index}>
            <Card className="h-full flex flex-col">
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-glow)] text-[var(--color-accent)]">
                {iconMap[achievement.icon] || <Trophy size={24} />}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                {achievement.title}
              </h3>

              {/* Position badge */}
              <div className="mt-2 flex flex-wrap gap-1.5">
                <Badge label={achievement.position} variant="accent" />
                {achievement.overall && (
                  <Badge label={achievement.overall} variant="muted" />
                )}
              </div>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {achievement.description}
              </p>

              {/* Year */}
              <span className="mt-4 block text-xs text-[var(--color-text-muted)]">
                {achievement.year}
              </span>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </PageWrapper>
  );
}

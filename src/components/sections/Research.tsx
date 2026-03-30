import { research } from "@/data/research";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { FileText, Star } from "lucide-react";

export function Research({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <PageWrapper id="research">
      {!hideTitle && <SectionTitle
        label="Research & Publications"
        title="Published Work"
        subtitle="Research papers presented at international conferences."
      />}

      <StaggerContainer className="flex flex-col gap-5">
        {research.map((paper, index) => (
          <StaggerItem key={index}>
            <Card className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-glow)]">
                <FileText size={22} className="text-[var(--color-accent)]" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[var(--color-text-primary)] md:text-lg">
                  {paper.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {paper.conference} &middot; {paper.year}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {paper.description}
                </p>

                {/* Recognition */}
                {paper.recognition && (
                  <div className="mt-3 flex items-center gap-2 rounded-md bg-[var(--color-accent-glow)] border border-[var(--color-accent)]/20 px-3 py-2 w-fit">
                    <Star size={14} className="shrink-0 text-[var(--color-accent)]" />
                    <span className="text-xs font-medium text-[var(--color-accent)]">
                      {paper.recognition}
                    </span>
                  </div>
                )}

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {paper.tags.map((tag) => (
                    <Badge key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </PageWrapper>
  );
}

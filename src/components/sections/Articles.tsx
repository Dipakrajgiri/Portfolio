import { articles } from "@/data/articles";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { PenLine, ArrowUpRight } from "lucide-react";

export function Articles({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <PageWrapper id="articles">
      {!hideTitle && <SectionTitle
        label="Articles"
        title="Written Work"
        subtitle="Technical articles on cloud architecture, security, and deployment."
      />}

      <StaggerContainer className="flex flex-col gap-3">
        {articles.map((article, index) => (
          <StaggerItem key={index}>
            <div className="group flex items-start gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)]">
              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-glow)]">
                <PenLine size={16} className="text-[var(--color-accent)]" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] md:text-base leading-snug">
                    {article.title}
                  </h3>
                  <a
                    href={article.url || "#"}
                    className="shrink-0 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                    aria-label={`Read ${article.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {article.platform} &middot; {article.year}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <Badge key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </PageWrapper>
  );
}

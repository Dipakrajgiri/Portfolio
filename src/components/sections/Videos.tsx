import { videos } from "@/data/videos";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Play, Clock, Eye } from "lucide-react";

export function Videos({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <PageWrapper id="videos">
      {!hideTitle && <SectionTitle
        label="Project Demos"
        title="Watch in Action"
        subtitle="Video demonstrations of my projects and hackathon entries."
      />}

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <StaggerItem key={index}>
            <a
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${video.title}`}
              className="group block overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)] hover:scale-[1.01]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-[var(--color-bg)] overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] shadow-xl">
                    <Play size={22} className="ml-0.5 text-white" fill="white" />
                  </div>
                </div>
                {/* Duration badge */}
                <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
                  {video.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)] line-clamp-2 leading-snug">
                  {video.title}
                </h3>
                <p className="mt-1.5 text-xs text-[var(--color-text-secondary)] line-clamp-2">
                  {video.description}
                </p>

                {/* Meta */}
                <div className="mt-3 flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-1">
                    <Eye size={12} />
                    {video.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {video.duration}
                  </span>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {video.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </PageWrapper>
  );
}

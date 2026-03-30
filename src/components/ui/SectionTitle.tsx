import { cn } from "@/utils/cn";

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  label,
  title,
  subtitle,
  className,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {label}
      </span>
      <h2 className="text-3xl font-normal italic text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/utils/cn";

type BadgeVariant = "default" | "accent" | "muted";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]",
  accent:
    "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent-glow)]",
  muted:
    "border-[var(--color-text-muted)] text-[var(--color-text-muted)]",
};

export function Badge({ label, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-[var(--radius-badge)] border px-2.5 py-1 text-xs font-medium transition-colors duration-200",
        "font-[var(--font-mono)]",
        variantStyles[variant],
        className
      )}
    >
      {label}
    </span>
  );
}

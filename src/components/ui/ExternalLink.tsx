import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel: string;
}

export function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-1.5 text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-highlight)]",
        className
      )}
    >
      {children}
    </a>
  );
}

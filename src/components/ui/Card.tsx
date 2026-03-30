import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6",
        hover &&
          "transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)] hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </div>
  );
}

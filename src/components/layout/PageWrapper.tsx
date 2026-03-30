import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface PageWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function PageWrapper({ id, children, className, noPadding = false }: PageWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        !noPadding && "py-[var(--spacing-section-sm)] md:py-[var(--spacing-section)]",
        className
      )}
    >
      <div className="container-main">
        {children}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageHeader({ label, title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-[var(--color-border)]">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[var(--color-accent-muted)] opacity-[0.05] blur-[100px]" />
      </div>

      <div className="container-main relative z-10 pb-12 pt-28 md:pb-16 md:pt-32">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex items-center gap-2 text-sm"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="flex items-center gap-1 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="text-[var(--color-text-muted)]" />
          <span className="text-[var(--color-accent)] font-medium">{breadcrumb}</span>
        </motion.nav>

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]"
        >
          {label}
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl font-normal italic text-[var(--color-text-primary)] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

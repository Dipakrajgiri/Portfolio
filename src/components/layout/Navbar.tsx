import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { cn } from "@/utils/cn";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { personal } from "@/data/personal";

const navLinks = [
  { label: "Home", path: "/home", scrollId: "hero" },
  { label: "About", path: "/about", scrollId: "about" },
  { label: "Skills", path: "/skills", scrollId: "skills" },
  { label: "Projects", path: "/projects", scrollId: "projects" },
  { label: "Experience", path: "/experience", scrollId: "experience" },
  { label: "Research", path: "/research", scrollId: "research" },
  { label: "Contact", path: "/contact", scrollId: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/home" || location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    navigate(link.path);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/home");
    }
  };

  const getIsActive = (link: typeof navLinks[0]) => {
    if (isHomePage) {
      return activeSection === link.scrollId;
    }
    return location.pathname === link.path;
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[var(--z-nav)] transition-all duration-300",
          scrolled
            ? "bg-[var(--color-bg)]/85 backdrop-blur-xl border-b border-[var(--color-border)]/50 shadow-lg shadow-black/10"
            : "bg-transparent"
        )}
      >
        <div className="container-main flex h-16 items-center justify-between md:h-18">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="font-[var(--font-heading)] text-lg text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-highlight)] md:text-xl"
          >
            {personal.prefix} {personal.name}
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = getIsActive(link);
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => handleNavClick(link)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-[var(--color-accent)] bg-[var(--color-accent-glow)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={`mailto:${personal.email}`}
              className="ml-3 inline-flex items-center gap-2 rounded-[var(--radius-button)] bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-muted)] shadow-lg shadow-[var(--color-accent-glow)]"
            >
              <Mail size={14} />
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-md p-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[calc(var(--z-nav)-1)] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[var(--z-nav)] w-72 bg-[var(--color-surface)] border-l border-[var(--color-border)] p-6 pt-20 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = getIsActive(link);
                  return (
                    <Link
                      key={link.label}
                      to={link.path}
                      onClick={() => handleNavClick(link)}
                      className={cn(
                        "rounded-md px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "text-[var(--color-accent)] bg-[var(--color-accent-glow)]"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-4 border-t border-[var(--color-border)] pt-4">
                  <a
                    href={`mailto:${personal.email}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-[var(--radius-button)] bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-muted)]"
                  >
                    <Mail size={14} />
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

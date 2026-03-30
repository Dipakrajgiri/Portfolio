import { Link } from "react-router-dom";
import { personal } from "@/data/personal";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import { ExternalLink } from "@/components/ui/ExternalLink";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: <FiGithub size={18} />, href: personal.social.github, label: "GitHub" },
  { icon: <FiLinkedin size={18} />, href: personal.social.linkedin, label: "LinkedIn" },
  { icon: <FaYoutube size={18} />, href: personal.social.youtube, label: "YouTube" },
  { icon: <SiKaggle size={16} />, href: personal.social.kaggle, label: "Kaggle" },
  { icon: <FiMail size={18} />, href: personal.social.email, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-main py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Left — Name & tagline */}
          <div>
            <Link to="/home" className="text-lg text-[var(--color-text-primary)] hover:text-[var(--color-highlight)] transition-colors">
              {personal.prefix} {personal.name}
            </Link>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              {personal.tagline}
            </p>
          </div>

          {/* Center — Nav links */}
          <div className="flex flex-col gap-2">
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Navigation
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-highlight)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right — Social icons */}
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Connect
            </span>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <ExternalLink
                  key={social.label}
                  href={social.href}
                  ariaLabel={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {social.icon}
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[var(--color-border)] pt-6 text-center">
          <p className="text-xs text-[var(--color-text-muted)]">
            Built by {personal.name} &middot; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

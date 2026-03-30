import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Download, ChevronRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import { personal } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const roles = [
  "AI Developer",
  "Full Stack Engineer",
  "DevOps Engineer",
  "AWS Cloud Architect",
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

const socialLinks = [
  { icon: <FiGithub size={20} />, href: personal.social.github, label: "GitHub" },
  { icon: <FiLinkedin size={20} />, href: personal.social.linkedin, label: "LinkedIn" },
  { icon: <FaYoutube size={20} />, href: personal.social.youtube, label: "YouTube" },
  { icon: <SiKaggle size={18} />, href: personal.social.kaggle, label: "Kaggle" },
];

export function Hero() {
  const typewriterText = useTypewriter(roles);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[var(--color-accent-muted)] opacity-[0.04] blur-[100px]" />
      </div>

      <div className="container-main relative z-10 py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Left column */}
          <AnimatedSection>
            <div className="flex flex-col gap-6">
              {/* Availability badge */}
              {personal.availableForWork && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 w-fit rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-success)]" />
                  </span>
                  <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                    Available for opportunities
                  </span>
                </motion.div>
              )}

              {/* Name */}
              <h1 className="text-4xl font-normal text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl xl:text-7xl">
                {personal.prefix}{" "}
                <span className="text-[var(--color-highlight)]">{personal.name}</span>
              </h1>

              {/* Typewriter subtitle */}
              <div className="flex items-center gap-1 text-lg text-[var(--color-text-secondary)] sm:text-xl md:text-2xl">
                <ChevronRight size={20} className="text-[var(--color-accent)] shrink-0" />
                <span className="font-[var(--font-mono)] text-[var(--color-accent)]">
                  {typewriterText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                  className="ml-0.5 inline-block h-6 w-0.5 bg-[var(--color-accent)]"
                />
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
                <MapPin size={14} />
                <span>{personal.location}</span>
              </div>

              {/* Short bio */}
              <p className="max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
                {personal.shortBio}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="#projects" variant="primary" size="lg">
                  View My Work
                </Button>
                <Button
                  href={personal.resumeUrl}
                  variant="secondary"
                  size="lg"
                  icon={<Download size={16} />}
                >
                  Download Resume
                </Button>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((social) => (
                  <ExternalLink
                    key={social.label}
                    href={social.href}
                    ariaLabel={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-glow)]"
                  >
                    {social.icon}
                  </ExternalLink>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right column — Profile image */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative mx-auto w-fit">
              {/* Glacier geometric shape behind */}
              <svg
                className="absolute -top-8 -right-8 h-80 w-80 opacity-[0.06]"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
              >
                <polygon
                  points="200,20 380,150 350,370 50,370 20,150"
                  stroke="var(--color-accent)"
                  strokeWidth="1.5"
                  fill="var(--color-accent)"
                  fillOpacity="0.1"
                />
                <polygon
                  points="200,60 340,160 320,340 80,340 60,160"
                  stroke="var(--color-accent)"
                  strokeWidth="0.8"
                  fill="none"
                />
              </svg>

              {/* Profile image */}
              <div className="relative w-72 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl shadow-black/20 sm:w-80 lg:w-96">
                <img
                  src={`${import.meta.env.BASE_URL}images/dipak-profile.png`}
                  alt={`${personal.name} profile`}
                  className="w-full h-auto block"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".placeholder-text")) {
                      const placeholder = document.createElement("div");
                      placeholder.className = "placeholder-text flex items-center justify-center h-72 w-full";
                      placeholder.innerHTML = `<span class="text-sm font-mono" style="color: var(--color-text-muted)">photo coming soon</span>`;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

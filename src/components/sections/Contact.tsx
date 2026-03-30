import { personal } from "@/data/personal";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "Dipak Raj Giri",
    href: personal.social.linkedin,
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "Dipakrajgiri",
    href: personal.social.github,
  },
];

export function Contact({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <PageWrapper id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <AnimatedSection>
          <SectionTitle
            label="Get In Touch"
            title="Let's Work Together"
          />
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            I'm always open to discussing AI projects, cloud architecture, or development opportunities.
            Whether you have a question, a project idea, or just want to say hello — feel free to reach out.
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <MapPin size={14} />
            <span>{personal.location}</span>
          </div>

          <div className="mt-8">
            <Button
              href={`mailto:${personal.email}`}
              variant="primary"
              size="lg"
              icon={<Send size={16} />}
            >
              Send Me an Email
            </Button>
          </div>
        </AnimatedSection>

        {/* Right — Contact cards */}
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contactItems.map((item) => (
            <StaggerItem key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="flex items-center gap-4 h-full">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-glow)] text-[var(--color-accent)]">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-[var(--color-text-primary)]">
                      {item.value}
                    </span>
                  </div>
                </Card>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </PageWrapper>
  );
}

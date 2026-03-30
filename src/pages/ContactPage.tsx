import { PageHeader } from "@/components/layout/PageHeader";
import { Contact } from "@/components/sections/Contact";

export function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get In Touch"
        title="Let's Work Together"
        subtitle="I'm always open to discussing AI projects, cloud architecture, or development opportunities."
        breadcrumb="Contact"
      />
      <Contact hideTitle />
    </>
  );
}

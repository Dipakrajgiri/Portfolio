import { PageHeader } from "@/components/layout/PageHeader";
import { Experience } from "@/components/sections/Experience";

export function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="Experience"
        title="Where I've Worked"
        subtitle="Professional roles, mentorship, and community involvement across the tech landscape."
        breadcrumb="Experience"
      />
      <Experience hideTitle />
    </>
  );
}

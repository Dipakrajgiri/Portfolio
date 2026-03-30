import { PageHeader } from "@/components/layout/PageHeader";
import { About } from "@/components/sections/About";

export function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Me"
        title="Who I Am"
        subtitle="Computer Engineer passionate about AI, cloud architecture, and building systems that matter."
        breadcrumb="About"
      />
      <About hideTitle />
    </>
  );
}

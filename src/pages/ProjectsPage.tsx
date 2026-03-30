import { PageHeader } from "@/components/layout/PageHeader";
import { Projects } from "@/components/sections/Projects";

export function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="What I've Built"
        subtitle="From AI-powered platforms to cloud infrastructure — projects that solve real problems."
        breadcrumb="Projects"
      />
      <Projects hideTitle />
    </>
  );
}

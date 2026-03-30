import { PageHeader } from "@/components/layout/PageHeader";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Videos } from "@/components/sections/Videos";

export function SkillsPage() {
  return (
    <>
      <PageHeader
        label="Technical Skills"
        title="What I Work With"
        subtitle="Technologies, tools, and frameworks I use to build intelligent and scalable systems."
        breadcrumb="Skills"
      />
      <Skills hideTitle />
      <div className="section-divider" />
      <Achievements hideTitle />
      <div className="section-divider" />
      <Videos hideTitle />
    </>
  );
}

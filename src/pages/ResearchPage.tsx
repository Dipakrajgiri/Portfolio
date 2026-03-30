import { PageHeader } from "@/components/layout/PageHeader";
import { Research } from "@/components/sections/Research";
import { Articles } from "@/components/sections/Articles";

export function ResearchPage() {
  return (
    <>
      <PageHeader
        label="Research & Publications"
        title="Published Work"
        subtitle="Research papers presented at international conferences and technical articles."
        breadcrumb="Research"
      />
      <Research hideTitle />
      <div className="section-divider" />
      <Articles hideTitle />
    </>
  );
}

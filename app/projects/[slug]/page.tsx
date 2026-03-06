import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/caseStudies";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyPage caseStudy={caseStudy} />;
}

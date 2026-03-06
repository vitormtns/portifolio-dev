import { caseStudies, type CaseStudyStatus, type CaseStudySlug } from "@/lib/caseStudies";

export type Project = {
  slug: CaseStudySlug;
  title: {
    pt: string;
    en: string;
  };
  stack: string[];
  status: CaseStudyStatus;
  caseStudyUrl: string;
  githubUrl?: string;
};

export const projects: Project[] = caseStudies.map((caseStudy) => ({
  slug: caseStudy.slug,
  title: caseStudy.title,
  stack: caseStudy.stackBadges,
  status: caseStudy.status,
  caseStudyUrl: `/projects/${caseStudy.slug}`,
  githubUrl: caseStudy.links.repo
}));

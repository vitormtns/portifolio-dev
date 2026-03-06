import type { CaseStudySlug } from "@/lib/caseStudies";

export type CaseMediaConfig = {
  cover?: boolean;
  gallery?: number;
};

export type CaseMediaSources = {
  cover?: string;
  gallery: string[];
};

const DEFAULT_GALLERY_SLOTS = 6;

export function getCaseMediaSources(slug: CaseStudySlug, media?: CaseMediaConfig): CaseMediaSources {
  const basePath = `/case-studies/${slug}`;
  const includeCover = media?.cover ?? true;
  const gallerySlots = media?.gallery ?? DEFAULT_GALLERY_SLOTS;

  return {
    cover: includeCover ? `${basePath}/cover.png` : undefined,
    gallery: Array.from({ length: Math.max(0, gallerySlots) }, (_, index) => `${basePath}/screen-${index + 1}.png`)
  };
}

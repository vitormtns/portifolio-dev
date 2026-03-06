"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { CaseMediaConfig } from "@/lib/caseMedia";
import { getCaseMediaSources } from "@/lib/caseMedia";
import type { CaseStudySlug } from "@/lib/caseStudies";
import type { Language, SiteContent } from "@/lib/i18n";

type CaseMediaProps = {
  title: string;
  slug: CaseStudySlug;
  lang: Language;
  media?: CaseMediaConfig;
  t: SiteContent;
  reducedMotion: boolean;
};

export default function CaseMedia({ title, slug, lang, media, t, reducedMotion }: CaseMediaProps) {
  const sources = useMemo(() => getCaseMediaSources(slug, media), [slug, media]);
  const [coverSrc, setCoverSrc] = useState<string | null>(null);
  const [loadedGallery, setLoadedGallery] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setCoverSrc(null);
    setLoadedGallery([]);

    if (sources.cover) {
      const coverProbe = new window.Image();
      coverProbe.onload = () => {
        if (active) setCoverSrc(sources.cover ?? null);
      };
      coverProbe.src = sources.cover;
    }

    sources.gallery.forEach((src) => {
      const probe = new window.Image();
      probe.onload = () => {
        if (!active) return;
        setLoadedGallery((prev) => (prev.includes(src) ? prev : [...prev, src]));
      };
      probe.src = src;
    });

    return () => {
      active = false;
    };
  }, [sources.cover, sources.gallery]);

  const visibleGallery = useMemo(
    () => sources.gallery.filter((src) => loadedGallery.includes(src)),
    [loadedGallery, sources.gallery]
  );

  const hasGallery = visibleGallery.length > 0;
  const hasMedia = Boolean(coverSrc) || hasGallery;
  if (!hasMedia) return null;

  return (
    <section className="mt-10 space-y-5" aria-label={t.caseStudy.productViewLabel} data-lang={lang}>
      {coverSrc && (
        <div>
          <div className="case-media-frame">
            <div className="case-media-header">
              <div className="case-media-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/68">{title}</p>
            </div>
            <div className="case-media-body">
              <Image
                src={coverSrc}
                alt={`${title} ${t.caseStudy.productViewLabel}`}
                width={1600}
                height={980}
                className="h-auto w-full object-cover"
                priority={false}
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-white/62">{t.caseStudy.productViewLabel}</p>
        </div>
      )}

      {hasGallery && (
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-white/66">{t.caseStudy.galleryLabel}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {visibleGallery.map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => setExpanded(src)}
                aria-label={`${t.caseStudy.openImageLabel} ${title}`}
                className="focus-ring case-media-card group text-left"
              >
                <Image
                  src={src}
                  alt={`${title} ${t.caseStudy.openImageLabel}`}
                  width={1200}
                  height={760}
                  className={`h-auto w-full object-cover transition-transform duration-300 ${reducedMotion ? "" : "group-hover:scale-[1.015]"}`}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={t.caseStudy.openImageLabel}
          onClick={() => setExpanded(null)}
        >
          <button
            type="button"
            className="focus-ring case-media-modal rounded-2xl"
            onClick={(event) => event.stopPropagation()}
            aria-label={t.caseStudy.openImageLabel}
          >
            <Image
              src={expanded}
              alt={`${title} ${t.caseStudy.openImageLabel}`}
              width={1800}
              height={1080}
              className="h-auto w-full object-contain"
            />
          </button>
          <button
            type="button"
            onClick={() => setExpanded(null)}
            className="focus-ring absolute right-5 top-5 rounded-md border border-white/20 bg-black/50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/85"
            aria-label={t.caseStudy.closeImageLabel}
          >
            {t.caseStudy.closeImageLabel}
          </button>
        </div>
      )}
    </section>
  );
}

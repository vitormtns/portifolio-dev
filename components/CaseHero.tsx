"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { CaseStudy } from "@/lib/caseStudies";
import type { Language, SiteContent } from "@/lib/i18n";

type CaseHeroProps = {
  caseStudy: CaseStudy;
  lang: Language;
  t: SiteContent;
  reducedMotion: boolean;
};

export default function CaseHero({ caseStudy, lang, t, reducedMotion }: CaseHeroProps) {
  const { scrollYProgress } = useScroll();
  const layerY = useTransform(scrollYProgress, [0, 0.5], [0, reducedMotion ? 0 : 120]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, reducedMotion ? 0 : 52]);

  const showPublicRepo = (caseStudy.status === "public" || caseStudy.status === "partial") && Boolean(caseStudy.links.repo);

  return (
    <section id="top" className="relative isolate overflow-hidden px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:px-14">
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ y: layerY }}>
        <div className="absolute inset-0 hero-grid opacity-[0.1]" />
        <div className="absolute left-[8%] top-[14%] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[10%] top-[38%] h-72 w-72 rounded-full bg-black/40 blur-3xl" />
      </motion.div>

      <motion.div className="mx-auto w-full max-w-6xl" style={{ y: textY }}>
        <Link
          href="/#projects"
          aria-label={t.caseStudy.backLabel}
          className="focus-ring inline-flex rounded-md text-[11px] uppercase tracking-[0.24em] text-white/72 transition-colors hover:text-white"
        >
          {t.caseStudy.backLabel}
        </Link>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
          {caseStudy.title[lang]}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/82 sm:text-xl">{caseStudy.tagline[lang]}</p>
        <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-white/62">{t.caseStudy.overviewLabel}</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/72 sm:text-base">{caseStudy.overview[lang]}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {caseStudy.stackBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/90"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="premium-card mt-9 rounded-2xl p-5 sm:p-6">
          <span aria-hidden="true" className="specular" />
          <p className="text-[11px] uppercase tracking-[0.24em] text-accent-blue/90">{t.caseStudy.linksLabel}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {caseStudy.links.live && (
              <a
                href={caseStudy.links.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t.caseStudy.liveLabel} ${caseStudy.title[lang]}`}
                className="focus-ring rounded-md text-accent-green transition-colors hover:text-accent-blue"
              >
                {t.caseStudy.liveLabel}
              </a>
            )}
            {caseStudy.links.docs && (
              <a
                href={caseStudy.links.docs}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t.caseStudy.docsLabel} ${caseStudy.title[lang]}`}
                className="focus-ring rounded-md text-accent-blue transition-colors hover:text-accent-violet"
              >
                {t.caseStudy.docsLabel}
              </a>
            )}
            {showPublicRepo && caseStudy.links.repo && (
              <a
                href={caseStudy.links.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t.caseStudy.repoLabel} ${caseStudy.title[lang]}`}
                className="focus-ring rounded-md text-accent-blue transition-colors hover:text-accent-violet"
              >
                {t.caseStudy.repoLabel}
              </a>
            )}
            {!showPublicRepo && <span className="text-white/75">{t.caseStudy.privateCodeLabel}</span>}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

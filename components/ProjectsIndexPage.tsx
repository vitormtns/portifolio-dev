"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import Backdrop from "@/components/Backdrop";
import Navbar from "@/components/Navbar";
import type { SceneTheme } from "@/components/Scene";
import { useLanguage } from "@/hooks/useLanguage";
import { useLenis } from "@/hooks/useLenis";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { caseStudies } from "@/lib/caseStudies";

const themes: SceneTheme[] = caseStudies.map((caseStudy) => caseStudy.heroTheme);

export default function ProjectsIndexPage() {
  const reducedMotion = usePrefersReducedMotion();
  const { lang, t, toggleLanguage } = useLanguage();
  useLenis(!reducedMotion);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.contact, href: "/#contact" }
  ];

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
      <Backdrop themes={themes} />
      <Navbar lang={lang} t={t} onToggleLanguage={toggleLanguage} links={navLinks} brandHref="/" />
      <main className="px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-14">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-4xl font-semibold text-white sm:text-6xl">{t.caseStudy.caseListTitle}</h1>
          <p className="mt-4 max-w-3xl text-base text-white/78 sm:text-lg">{t.caseStudy.caseListDescription}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {caseStudies.map((caseStudy, index) => (
              <motion.article
                key={caseStudy.slug}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reducedMotion ? 0 : index * 0.06 }}
                className="premium-card rounded-2xl p-6"
              >
                <span aria-hidden="true" className="specular" />
                <h2 className="text-2xl font-semibold text-white">{caseStudy.title[lang]}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/78">{caseStudy.tagline[lang]}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {caseStudy.stackBadges.slice(0, 5).map((badge) => (
                    <span
                      key={`${caseStudy.slug}-${badge}`}
                      className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/90"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  <Link
                    href={`/projects/${caseStudy.slug}`}
                    aria-label={`${t.sections.projects.caseStudyAria}: ${caseStudy.title[lang]}`}
                    className="focus-ring rounded-md text-accent-blue transition-colors hover:text-accent-violet"
                  >
                    {t.sections.projects.caseStudy}
                  </Link>
                  {caseStudy.status === "private" && <span className="text-white/64">{t.sections.projects.privateStatus}</span>}
                  {caseStudy.status !== "private" && !caseStudy.links.repo && (
                    <span className="text-white/64">{t.caseStudy.requestCodeLabel}</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </MotionConfig>
  );
}

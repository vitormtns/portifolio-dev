"use client";

import { MotionConfig } from "framer-motion";
import BackToTop from "@/components/BackToTop";
import Backdrop from "@/components/Backdrop";
import CaseArchitecture from "@/components/CaseArchitecture";
import CaseHero from "@/components/CaseHero";
import CaseNav from "@/components/CaseNav";
import CaseSection from "@/components/CaseSection";
import Navbar from "@/components/Navbar";
import type { CaseStudy } from "@/lib/caseStudies";
import { useLanguage } from "@/hooks/useLanguage";
import { useLenis } from "@/hooks/useLenis";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type CaseStudyPageProps = {
  caseStudy: CaseStudy;
};

function renderBullets(items: string[]) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  const reducedMotion = usePrefersReducedMotion();
  const { lang, t, toggleLanguage } = useLanguage();
  useLenis(!reducedMotion);

  const problem = caseStudy.sections.problem[lang];
  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.contact, href: "/#contact" }
  ];

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
      <Backdrop themes={[caseStudy.heroTheme]} />
      <Navbar lang={lang} t={t} onToggleLanguage={toggleLanguage} links={navLinks} brandHref="/" />
      <main className="pb-24">
        <CaseHero caseStudy={caseStudy} lang={lang} t={t} reducedMotion={reducedMotion} />
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-[220px,1fr] lg:gap-8 lg:px-14">
          <CaseNav t={t} />
          <div className="space-y-6">
            <CaseSection id="problem" label={t.caseStudy.problemLabel} reducedMotion={reducedMotion}>
              <p>{problem.paragraph}</p>
              {renderBullets(problem.bullets)}
            </CaseSection>

            <CaseSection id="solution" label={t.caseStudy.solutionLabel} reducedMotion={reducedMotion}>
              {renderBullets(caseStudy.sections.solution[lang])}
            </CaseSection>

            <CaseSection id="challenges" label={t.caseStudy.challengesLabel} reducedMotion={reducedMotion}>
              {renderBullets(caseStudy.sections.challenges[lang])}
            </CaseSection>

            <CaseSection id="architecture" label={t.caseStudy.architectureLabel} reducedMotion={reducedMotion}>
              <CaseArchitecture caseStudy={caseStudy} lang={lang} t={t} reducedMotion={reducedMotion} />
            </CaseSection>

            <CaseSection id="results" label={t.caseStudy.resultsLabel} reducedMotion={reducedMotion}>
              {renderBullets(caseStudy.sections.results[lang])}
            </CaseSection>

            <CaseSection id="learnings" label={t.caseStudy.learningsLabel} reducedMotion={reducedMotion}>
              {renderBullets(caseStudy.sections.learnings[lang])}
            </CaseSection>
          </div>
        </div>
      </main>
      <BackToTop ariaLabel={t.caseStudy.backHomeLabel} label={t.caseStudy.topLabel} />
    </MotionConfig>
  );
}

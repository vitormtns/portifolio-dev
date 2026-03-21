"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { SiteContent } from "@/lib/i18n";

type HeroProps = {
  t: SiteContent;
  reducedMotion: boolean;
};

export default function Hero({ t, reducedMotion }: HeroProps) {
  const { scrollYProgress } = useScroll();

  const backY = useTransform(scrollYProgress, [0, 0.6], [0, reducedMotion ? 0 : 90]);
  const midY = useTransform(scrollYProgress, [0, 0.6], [0, reducedMotion ? 0 : 130]);
  const frontY = useTransform(scrollYProgress, [0, 0.6], [0, reducedMotion ? 0 : 175]);
  const midBlur = useTransform(scrollYProgress, [0, 0.45], [1, reducedMotion ? 1 : 4]);
  const frontDim = useTransform(scrollYProgress, [0, 0.45], [0, reducedMotion ? 0.12 : 0.22]);
  const titleY = useTransform(scrollYProgress, [0, 0.45], [0, reducedMotion ? 0 : 84]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden px-5 pt-28 sm:px-8 sm:pt-32 lg:px-14">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30"
        style={{ y: backY, willChange: "transform" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.16),transparent_36%,rgba(167,139,250,0.14)_72%,transparent)]" />
        <div className="absolute left-[8%] top-[8%] h-80 w-80 rounded-full bg-accent-violet/20 blur-3xl" />
        <div className="absolute right-[7%] top-[22%] h-72 w-72 rounded-full bg-accent-green/15 blur-3xl" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{ y: midY, filter: useTransform(midBlur, (value) => `blur(${value}px)`), willChange: "transform, filter" }}
      >
        <div className="absolute left-[16%] top-[38%] h-52 w-52 rounded-full border border-white/10 bg-white/[0.04]" />
        <div className="absolute right-[14%] top-[53%] h-56 w-56 rounded-full border border-white/10 bg-accent-blue/10" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: frontY, willChange: "transform" }}
      >
        <div className="absolute inset-0 hero-grid opacity-[0.12]" />
        <div className="hero-specular absolute inset-0 opacity-30" />
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: frontDim }} />
      </motion.div>

      <motion.div
        style={{ y: titleY, opacity: titleOpacity, willChange: "transform, opacity" }}
        className="mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center"
      >
        <p className="mb-5 text-[11px] uppercase tracking-[0.26em] text-accent-blue/90">{t.hero.eyebrow}</p>
        <h1
          className="max-w-5xl text-balance text-5xl font-semibold leading-[0.95] text-text sm:text-7xl lg:text-8xl"
          style={{ textShadow: "0 0 32px rgba(167,139,250,0.16)" }}
        >
          {t.hero.title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/84 sm:text-xl">{t.hero.subtitle}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            aria-label={t.hero.ctaProjectsAria}
            className="focus-ring rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-text shadow-glow backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white/14"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="https://github.com/vitormtns"
            target="_blank"
            rel="noreferrer"
            aria-label={t.hero.ctaProfileAria}
            className="focus-ring rounded-full border border-accent-blue/35 bg-transparent px-6 py-3 text-sm font-medium text-accent-blue transition-all duration-200 hover:-translate-y-1 hover:border-accent-violet hover:text-accent-violet"
          >
            {t.hero.ctaProfile}
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#story"
          aria-label={t.hero.scrollHintAria}
          className="focus-ring flex flex-col items-center gap-3 rounded-md px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-white/72"
        >
          {t.hero.scrollHint}
          <span className="h-10 w-[1px] bg-gradient-to-b from-white/75 to-transparent" />
        </a>
      </div>
    </section>
  );
}

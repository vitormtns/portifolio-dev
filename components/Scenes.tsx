"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Scene, { type SceneTheme } from "@/components/Scene";
import ProjectCard from "@/components/ProjectCard";
import type { Language, SiteContent } from "@/lib/i18n";
import { projects } from "@/lib/projects";

type ScenesProps = {
  lang: Language;
  t: SiteContent;
  themes: SceneTheme[];
  reducedMotion: boolean;
};

export default function Scenes({ lang, t, themes, reducedMotion }: ScenesProps) {
  return (
    <div className="relative lg:snap-y lg:snap-mandatory">
      <Scene
        id="story"
        title={t.sections.story.title}
        description={t.sections.story.description}
        theme={themes[0]}
        label={t.sectionLabel}
        index={0}
      >
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {t.sections.story.cards.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: reducedMotion ? 0 : index * 0.08 }}
              className="premium-card group rounded-2xl p-6"
            >
              <span aria-hidden="true" className="specular" />
              <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-accent-blue/85">
                {(index + 1).toString().padStart(2, "0")}
              </p>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </Scene>

      <Scene
        id="projects"
        title={t.sections.projects.title}
        description={t.sections.projects.description}
        theme={themes[1]}
        label={t.sectionLabel}
        index={1}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              lang={lang}
              t={t}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projects"
            className="focus-ring inline-flex rounded-md text-xs uppercase tracking-[0.22em] text-white/76 transition-colors hover:text-white"
            aria-label={t.sections.projects.viewAll}
          >
            {t.sections.projects.viewAll}
          </Link>
        </div>
      </Scene>

      <Scene
        id="process"
        title={t.sections.process.title}
        description={t.sections.process.description}
        theme={themes[2]}
        label={t.sectionLabel}
        index={2}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {t.sections.process.steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: reducedMotion ? 0 : index * 0.06 }}
              className="premium-card rounded-xl p-5"
            >
              <span aria-hidden="true" className="specular" />
              <p className="text-[11px] uppercase tracking-[0.23em] text-white/60">
                {t.sections.process.stepLabel} {(index + 1).toString().padStart(2, "0")}
              </p>
              <p className="mt-3 text-lg leading-snug text-white">{step}</p>
            </motion.div>
          ))}
        </div>
      </Scene>

      <Scene
        id="highlights"
        title={t.sections.highlights.title}
        description={t.sections.highlights.description}
        theme={themes[3]}
        label={t.sectionLabel}
        index={3}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr,2fr] lg:gap-10">
          <div className="premium-card rounded-2xl p-7">
            <span aria-hidden="true" className="specular" />
            <p className="text-[11px] uppercase tracking-[0.24em] text-accent-green">{t.sections.highlights.metricsTitle}</p>
            <div className="mt-6 grid grid-cols-2 gap-5">
              {t.sections.highlights.metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`}>
                  <p className="text-3xl font-semibold leading-none text-white">{metric.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <ul className="space-y-3">
            {t.sections.highlights.bullets.map((item) => (
              <li key={item} className="premium-card rounded-xl px-4 py-4 text-sm leading-relaxed text-white/90">
                <span aria-hidden="true" className="specular" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Scene>
    </div>
  );
}

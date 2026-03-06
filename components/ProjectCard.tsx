"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Language, SiteContent } from "@/lib/i18n";
import type { Project } from "@/lib/projects";
import { getCaseStudyBySlug } from "@/lib/caseStudies";

type ProjectCardProps = {
  project: Project;
  index: number;
  lang: Language;
  t: SiteContent;
  reducedMotion: boolean;
};

export default function ProjectCard({ project, index, lang, t, reducedMotion }: ProjectCardProps) {
  const caseStudy = getCaseStudyBySlug(project.slug);
  if (!caseStudy) return null;

  const canShowGithub = (project.status === "public" || project.status === "partial") && Boolean(project.githubUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: reducedMotion ? 0 : index * 0.07 }}
      className="premium-card group rounded-2xl p-6"
    >
      <span aria-hidden="true" className="specular" />
      <h3 className="text-2xl font-semibold leading-tight text-text">{project.title[lang]}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted">{caseStudy.overview[lang]}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 6).map((item) => (
          <span
            key={`${project.slug}-${item}`}
            className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/90"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-4 text-sm">
        <Link
          href={project.caseStudyUrl}
          aria-label={`${t.sections.projects.caseStudyAria}: ${project.title[lang]}`}
          className="focus-ring rounded-md text-accent-blue transition-colors duration-200 hover:text-accent-violet"
        >
          {t.sections.projects.caseStudy}
        </Link>
        {canShowGithub && project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.sections.projects.githubAria}: ${project.title[lang]}`}
            className="focus-ring rounded-md text-accent-green transition-colors duration-200 hover:text-accent-blue"
          >
            {t.sections.projects.github}
          </a>
        ) : project.status === "private" ? (
          <span className="text-white/64">{t.sections.projects.privateStatus}</span>
        ) : (
          <span className="text-white/64">{t.caseStudy.requestCodeLabel}</span>
        )}
      </div>
    </motion.article>
  );
}

"use client";

import { motion } from "framer-motion";
import type { Language, SiteContent } from "@/lib/i18n";
import type { CaseStudy } from "@/lib/caseStudies";

type CaseArchitectureProps = {
  caseStudy: CaseStudy;
  lang: Language;
  t: SiteContent;
  reducedMotion: boolean;
};

export default function CaseArchitecture({ caseStudy, lang, t, reducedMotion }: CaseArchitectureProps) {
  const bullets = caseStudy.sections.architecture.bullets[lang];
  const nodes = caseStudy.sections.architecture.pipeline.nodes;
  const edges = caseStudy.sections.architecture.pipeline.edges;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
      <ul className="space-y-3">
        {bullets.map((item) => (
          <li key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/88">
            {item}
          </li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, x: reducedMotion ? 0 : 18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-white/12 bg-black/25 p-4"
      >
        <h3 className="text-[11px] uppercase tracking-[0.22em] text-accent-green">{t.caseStudy.pipelineLabel}</h3>
        <div className="mt-4 space-y-2">
          {nodes.map((node, index) => (
            <div key={node.en} className="relative">
              <div className="rounded-lg border border-white/12 bg-white/[0.04] px-3 py-2 text-sm text-white/90">{node[lang]}</div>
              {edges.some(([from]) => from === index) && (
                <div className="mx-auto h-4 w-px bg-gradient-to-b from-accent-blue/80 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

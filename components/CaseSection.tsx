"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type CaseSectionProps = {
  id: string;
  label: string;
  children: ReactNode;
  reducedMotion: boolean;
};

export default function CaseSection({ id, label, children, reducedMotion }: CaseSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="premium-card rounded-2xl p-6 sm:p-8"
    >
      <span aria-hidden="true" className="specular" />
      <h2 className="text-[11px] uppercase tracking-[0.24em] text-accent-blue/90">{label}</h2>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/86 sm:text-base">{children}</div>
    </motion.section>
  );
}

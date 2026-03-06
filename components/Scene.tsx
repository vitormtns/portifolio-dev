"use client";

import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export type SceneTheme = {
  from: string;
  to: string;
  accent: string;
};

type SceneProps = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
  theme: SceneTheme;
  label: string;
  index: number;
  className?: string;
};

export default function Scene({ id, title, description, children, theme, label, index, className }: SceneProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 1], [0, 1, 1, 0.25]);
  const translateY = useTransform(scrollYProgress, [0, 1], [56, -56]);
  const orbY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[95vh] lg:snap-start lg:px-14 lg:py-28",
        className
      )}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: theme.accent,
          y: orbY
        }}
      />
      <motion.div
        className="mx-auto w-full max-w-6xl"
        style={{ opacity, y: translateY, willChange: "transform, opacity" }}
      >
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.26em] text-accent-blue/90">
            {label} {(index + 1).toString().padStart(2, "0")}
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.02] text-text sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

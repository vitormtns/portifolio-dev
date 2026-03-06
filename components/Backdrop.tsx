"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";
import type { SceneTheme } from "@/components/Scene";

type BackdropProps = {
  themes: SceneTheme[];
};

export default function Backdrop({ themes }: BackdropProps) {
  const activeThemes = useMemo(() => (themes.length === 1 ? [themes[0], themes[0]] : themes), [themes]);
  const { scrollYProgress } = useScroll();

  const steps = useMemo(() => {
    return activeThemes.map((_, index) => index / (activeThemes.length - 1));
  }, [activeThemes]);

  const from = useTransform(scrollYProgress, steps, activeThemes.map((theme) => theme.from));
  const to = useTransform(scrollYProgress, steps, activeThemes.map((theme) => theme.to));
  const accent = useTransform(scrollYProgress, steps, activeThemes.map((theme) => theme.accent));
  const gradient = useMotionTemplate`linear-gradient(150deg, ${from} 0%, ${to} 72%)`;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 16% 18%, rgba(167,139,250,0.2), transparent 42%), radial-gradient(circle at 84% 2%, rgba(52,211,153,0.16), transparent 36%)`
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: gradient }}
      />
      <motion.div
        className="absolute -right-20 top-[12%] h-[42vh] w-[42vh] rounded-full blur-3xl"
        style={{ background: accent, opacity: 0.34 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.52)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] bg-[length:3px_3px] opacity-[0.06]" />
    </motion.div>
  );
}

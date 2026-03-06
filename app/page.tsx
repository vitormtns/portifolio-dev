"use client";

import { MotionConfig } from "framer-motion";
import Backdrop from "@/components/Backdrop";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SceneProgress from "@/components/SceneProgress";
import Scenes from "@/components/Scenes";
import type { SceneTheme } from "@/components/Scene";
import { useLanguage } from "@/hooks/useLanguage";
import { useLenis } from "@/hooks/useLenis";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const sceneThemes: SceneTheme[] = [
  { from: "#090D16", to: "#111A2E", accent: "rgba(56,189,248,0.36)" },
  { from: "#0B0F1C", to: "#171A2C", accent: "rgba(167,139,250,0.34)" },
  { from: "#0A1018", to: "#11251F", accent: "rgba(52,211,153,0.34)" },
  { from: "#0B0E16", to: "#12192A", accent: "rgba(56,189,248,0.28)" }
];

export default function HomePage() {
  const reducedMotion = usePrefersReducedMotion();
  const { lang, t, toggleLanguage } = useLanguage();
  useLenis(!reducedMotion);

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
      <Backdrop themes={sceneThemes} />
      <Navbar lang={lang} t={t} onToggleLanguage={toggleLanguage} />
      <SceneProgress t={t} sceneCount={sceneThemes.length} reducedMotion={reducedMotion} />
      <main>
        <Hero t={t} reducedMotion={reducedMotion} />
        <Scenes lang={lang} t={t} themes={sceneThemes} reducedMotion={reducedMotion} />
      </main>
      <Footer t={t} />
    </MotionConfig>
  );
}

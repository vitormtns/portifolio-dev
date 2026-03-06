"use client";

import { useEffect, useMemo, useState } from "react";
import type { SiteContent } from "@/lib/i18n";

function getScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / max));
}

type SceneProgressProps = {
  t: SiteContent;
  sceneCount: number;
  reducedMotion: boolean;
};

export default function SceneProgress({ t, sceneCount, reducedMotion }: SceneProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setProgress(getScrollProgress());
        ticking = false;
      });
    };

    setProgress(getScrollProgress());
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const currentScene = useMemo(() => {
    const sceneIndex = Math.min(sceneCount, Math.max(1, Math.ceil(progress * sceneCount)));
    return sceneIndex.toString().padStart(2, "0");
  }, [progress, sceneCount]);

  return (
    <aside className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-2 sm:flex">
      <div className="rounded-full border border-white/10 bg-black/20 px-2 py-4 backdrop-blur-md">
        <div className="relative h-28 w-[2px] overflow-hidden rounded-full bg-white/15">
          <div
            className="absolute inset-x-0 bottom-0 origin-bottom bg-gradient-to-t from-accent-blue via-accent-violet to-accent-green transition-[height] duration-200"
            style={{ height: `${Math.round(progress * 100)}%`, willChange: reducedMotion ? "auto" : "height" }}
          />
        </div>
      </div>
      <span className="text-[10px] uppercase tracking-[0.22em] text-white/62">
        {t.progress.label} {currentScene}
      </span>
    </aside>
  );
}

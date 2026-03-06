"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis(enabled: boolean): void {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      syncTouch: false
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [enabled]);
}

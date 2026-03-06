"use client";

import { useEffect, useState } from "react";

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener?.("change", onChange);
    mediaQuery.addListener?.(onChange);

    return () => {
      mediaQuery.removeEventListener?.("change", onChange);
      mediaQuery.removeListener?.(onChange);
    };
  }, []);

  return reduced;
}

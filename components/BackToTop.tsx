"use client";

import { useEffect, useState } from "react";

type BackToTopProps = {
  ariaLabel: string;
  label: string;
};

export default function BackToTop({ ariaLabel, label }: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={ariaLabel}
      className="focus-ring fixed bottom-5 right-5 z-40 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur-md transition-colors hover:text-white"
    >
      {label}
    </button>
  );
}

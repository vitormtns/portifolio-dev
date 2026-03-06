"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { content, type Language, type SiteContent } from "@/lib/i18n";

const LANG_KEY = "lang";

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "pt";
  const stored = window.localStorage.getItem(LANG_KEY);
  if (stored === "pt" || stored === "en") return stored;

  const navLanguage = window.navigator.language.toLowerCase();
  return navLanguage.startsWith("pt") ? "pt" : "en";
}

type UseLanguageResult = {
  lang: Language;
  t: SiteContent;
  toggleLanguage: () => void;
};

export function useLanguage(): UseLanguageResult {
  const [lang, setLang] = useState<Language>("pt");

  useEffect(() => {
    setLang(detectInitialLanguage());
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === "pt" ? "en" : "pt"));
  }, []);

  const t = useMemo(() => content[lang], [lang]);

  return { lang, t, toggleLanguage };
}

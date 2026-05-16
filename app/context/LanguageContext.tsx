"use client";

import { createContext, useContext, useState } from "react";
import { translations, Language, Translation } from "../lib/translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLang = window.localStorage.getItem("lang");
    if (savedLang === "en" || savedLang === "zh") {
      return savedLang;
    }

    return "en";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    window.localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

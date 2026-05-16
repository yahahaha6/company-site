"use client";

import { useLanguage } from "../context/LanguageContext";

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-gray-500">
        {t.footer.copyright}
      </div>
      <div className="h-3 bg-white" />
    </footer>
  );
}

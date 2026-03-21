"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen text-gray-900">
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-bold">{t.services.title}</h1>

        <div className="mt-10 grid gap-6">
          {t.services.items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/40 bg-white/75 p-6 backdrop-blur-sm"
            >
              <p className="text-xl leading-relaxed text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
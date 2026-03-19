"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-bold">{t.services.title}</h1>

        <div className="mt-10 grid gap-6">
          {t.services.items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-300 bg-white p-6"
            >
              <p className="text-xl leading-relaxed text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
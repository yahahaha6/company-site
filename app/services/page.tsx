"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-hidden text-gray-900">
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/service.JPG')",
          backgroundPosition: "center center",
          filter: "blur(3px)",
          transform: "scale(1.05)",
          opacity: 0.9,
        }}
      />
      <div className="fixed inset-0 z-0 bg-white/20" />

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
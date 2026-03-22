"use client";

import { useLanguage } from "../context/LanguageContext";

export default function JourneysPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen text-gray-900">
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-bold">{t.journeys.title}</h1>

        <div className="mt-12 rounded-3xl border border-white/40 bg-white/75 p-8 md:p-10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.journeys.undergradTitle}
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-gray-700">
            {t.journeys.undergradLead}
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-relaxed text-gray-700">
            {t.journeys.undergradList.map((school, index) => (
              <li key={index}>{school}</li>
            ))}
          </ul>

          <p className="mt-8 text-lg leading-relaxed text-gray-700">
            {t.journeys.undergradMore}
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-white/40 bg-white/75 p-8 md:p-10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.journeys.highSchoolTitle}
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-gray-700">
            {t.journeys.highSchoolLead}
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-relaxed text-gray-700">
            {t.journeys.highSchoolList.map((school, index) => (
              <li key={index}>{school}</li>
            ))}
          </ul>

          <p className="mt-8 text-lg leading-relaxed text-gray-700">
            {t.journeys.highSchoolMore}
          </p>
        </div>
      </section>
    </main>
  );
}
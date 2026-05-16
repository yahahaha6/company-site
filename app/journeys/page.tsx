"use client";

import { useLanguage } from "../context/LanguageContext";

export default function JourneysPage() {
  const { t } = useLanguage();

  return (
    <main className="page-shell">
      <section className="page-section">
        <h1 className="page-title reveal-up">{t.journeys.title}</h1>

        <div className="surface-card reveal-up stagger-1 mt-12 rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.journeys.undergradTitle}
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-gray-700">
            {t.journeys.undergradLead}
          </p>

          <ul className="school-list mt-6 text-lg leading-relaxed text-gray-700">
            {t.journeys.undergradList.map((school, index) => (
              <li key={index}>{school}</li>
            ))}
          </ul>

          <p className="mt-8 text-lg leading-relaxed text-gray-700">
            {t.journeys.undergradMore}
          </p>
        </div>

        <div className="surface-card reveal-up stagger-2 mt-12 rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.journeys.highSchoolTitle}
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-gray-700">
            {t.journeys.highSchoolLead}
          </p>

          <ul className="school-list mt-6 text-lg leading-relaxed text-gray-700">
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

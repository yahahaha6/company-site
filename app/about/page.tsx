"use client";

import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="page-shell">
      <section className="page-section">
        <h1 className="page-title reveal-up">{t.about.title}</h1>

        <div className="reveal-up stagger-1 mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.about.leadershipTitle}
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {t.about.leadership.map((person, index) => (
              <div
                key={index}
                className="surface-card rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {person.name}
                </h3>
                <p className="mt-2 text-lg font-semibold text-gray-600">
                  {person.role}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up stagger-2 mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.about.consultantTitle}
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {t.about.consultants.map((person, index) => (
              <div
                key={index}
                className="surface-card rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {person.name}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card reveal-up stagger-3 mt-16 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.about.mentorTitle}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            {t.about.mentorDescription}
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-lg text-gray-700">
            {t.about.mentorFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-bold">{t.about.title}</h1>

        <div className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.about.leadershipTitle}
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {t.about.leadership.map((person, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-300 bg-white p-8"
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

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.about.consultantTitle}
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {t.about.consultants.map((person, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-300 bg-white p-8"
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

        <div className="mt-16 rounded-3xl border border-gray-300 bg-white p-8">
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
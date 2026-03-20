"use client";

import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-hidden text-gray-900">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/aboutus.JPG')",
          backgroundPosition: "center center",
          filter: "blur(6px)",
          transform: "scale(1.05)",
          opacity: 0.9,
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-white/20" />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-bold">{t.about.title}</h1>

        <div className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            {t.about.leadershipTitle}
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {t.about.leadership.map((person, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/40 bg-white/75 p-8 backdrop-blur-sm"
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
                className="rounded-3xl border border-white/40 bg-white/75 p-8 backdrop-blur-sm"
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

        <div className="mt-16 rounded-3xl border border-white/40 bg-white/75 p-8 backdrop-blur-sm">
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
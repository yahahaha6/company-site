"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen text-gray-900">
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/40 bg-white/75 p-8 md:p-12 backdrop-blur-sm">
          <h1 className="text-5xl font-bold">{t.contact.title}</h1>

          <h2 className="mt-8 text-3xl font-bold text-gray-900">
            {t.contact.subtitle}
          </h2>

          <div className="mt-8 space-y-6">
            <p className="text-xl leading-relaxed text-gray-700">
              {t.contact.intro1}
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              {t.contact.intro2}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/40 bg-white/70 p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900">
                {t.contact.usTitle}
              </h3>
              <ul className="mt-5 space-y-3 text-lg leading-relaxed text-gray-700">
                {t.contact.usLocations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/70 p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900">
                {t.contact.chinaTitle}
              </h3>
              <ul className="mt-5 space-y-3 text-lg leading-relaxed text-gray-700">
                {t.contact.chinaLocations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/40 bg-white/70 p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900">
              {t.contact.contactTitle}
            </h3>

            <div className="mt-5 space-y-4 text-lg text-gray-700">
              <p>
                <span className="font-semibold">{t.contact.emailLabel}：</span>
                {t.contact.email}
              </p>
              <p>
                <span className="font-semibold">{t.contact.phoneLabel}：</span>
                {t.contact.phone}
              </p>
            </div>
          </div>

          <p className="mt-10 text-xl leading-relaxed text-gray-700">
            {t.contact.closing}
          </p>
        </div>
      </section>
    </main>
  );
}
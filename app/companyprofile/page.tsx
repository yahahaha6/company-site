"use client";

import { useLanguage } from "../context/LanguageContext";

export default function CompanyProfilePage() {
  const { t } = useLanguage();

  return (
    <main className="page-shell">
      <section className="page-section">
        <h1 className="page-title reveal-up">{t.companyprofile.title}</h1>

        <div className="mt-10 grid gap-8">
          {t.companyprofile.paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className="surface-card reveal-up rounded-2xl p-8"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="text-xl leading-relaxed text-gray-700">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

"use client";

import TopUniversitiesMap from "../components/TopUniversitiesMap";
import { useLanguage } from "../context/LanguageContext";

export default function MapPage() {
  const { lang } = useLanguage();

  return (
    <main className="page-shell">
      <section className="page-section">
        <h1 className="page-title reveal-up">
          {lang === "zh" ? "学校地图" : "School Map"}
        </h1>

        <div className="mt-12">
          <TopUniversitiesMap />
        </div>
      </section>
    </main>
  );
}

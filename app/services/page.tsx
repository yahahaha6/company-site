"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="page-shell">
      <section className="page-section">
        <h1 className="page-title reveal-up">{t.services.title}</h1>

        <div className="mt-10 space-y-6">
          {t.services.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="surface-card reveal-up overflow-hidden rounded-2xl"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-white/35"
                >
                  <span className="text-2xl font-medium text-gray-800">
                    {item.title}
                  </span>

                  <span
                    className={`ml-6 shrink-0 text-3xl font-light text-gray-600 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className="accordion-panel" data-open={isOpen}>
                  <div>
                    <div className="border-t border-gray-200 px-8 py-6">
                    <p className="text-lg leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

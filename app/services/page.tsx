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
    <main className="relative min-h-screen text-gray-900">
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-bold">{t.services.title}</h1>

        <div className="mt-10 space-y-6">
          {t.services.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-white/40 bg-white/75 backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-white/20"
                >
                  <span className="text-2xl font-medium text-gray-800">
                    {item.title}
                  </span>

                  <span className="ml-6 shrink-0 text-3xl font-light text-gray-600">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-gray-200 px-8 py-6">
                    <p className="text-lg leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
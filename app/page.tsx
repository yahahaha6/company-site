"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="page-shell">
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-220px)] max-w-6xl flex-col items-center justify-center px-6 pt-20 pb-40 text-center">
        <div className="reveal-up mx-auto mb-6 inline-block rounded-full border border-white/60 bg-white/80 px-6 py-2 text-lg text-gray-700 shadow-sm backdrop-blur-md">
          {t.home.badge}
        </div>

        <h1 className="reveal-up stagger-1 mx-auto max-w-5xl text-3xl font-extrabold leading-tight md:text-5xl">
          {t.home.title}
        </h1>

        <p className="reveal-up stagger-2 mx-auto mt-8 max-w-4xl text-2xl leading-relaxed text-gray-700 md:text-4xl">
          {t.home.description}
        </p>

        <div className="reveal-up stagger-3 mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/services"
            className="action-button rounded-full bg-black px-8 py-4 text-xl font-semibold text-white"
          >
            {t.home.primaryButton}
          </Link>

          <Link
            href="/about"
            className="action-button rounded-full border border-gray-300 bg-white/80 px-8 py-4 text-xl font-semibold text-gray-900 backdrop-blur-md hover:border-green-200"
          >
            {t.home.secondaryButton}
          </Link>
        </div>
      </section>
    </main>
  );
}

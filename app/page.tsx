"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="mx-auto mb-6 inline-block rounded-full bg-gray-100 px-6 py-2 text-lg text-gray-700">
          {t.home.badge}
        </div>

        <h1 className="mx-auto max-w-5xl text-6xl font-bold leading-tight">
          {t.home.title}
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-2xl leading-relaxed text-gray-600">
          {t.home.description}
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <Link
            href="/services"
            className="rounded-2xl bg-black px-8 py-4 text-xl font-semibold text-white"
          >
            {t.home.primaryButton}
          </Link>

          <Link
            href="/about"
            className="rounded-2xl border border-gray-300 px-8 py-4 text-xl font-semibold text-gray-900"
          >
            {t.home.secondaryButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
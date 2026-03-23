"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen text-gray-900">
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-220px)] max-w-6xl flex-col items-center justify-center px-6 pt-20 pb-40 text-center">
        <div className="mx-auto mb-6 inline-block rounded-full bg-white/75 px-6 py-2 text-lg text-gray-700 backdrop-blur-sm">
          {t.home.badge}
        </div>

        <h1 className="mx-auto max-w-5xl text-3xl font-bold leading-tight">
          {t.home.title}
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-4xl leading-relaxed text-gray-700">
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
            className="rounded-2xl border border-gray-300 bg-white/75 px-8 py-4 text-xl font-semibold text-gray-900 backdrop-blur-sm"
          >
            {t.home.secondaryButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
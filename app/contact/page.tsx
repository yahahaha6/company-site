"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">{t.contact.title}</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{t.contact.contactsLabel}</h2>
            <p className="mt-3 text-gray-600">{t.contact.contacts}</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{t.contact.phoneLabel}</h2>
            <p className="mt-3 text-gray-600">{t.contact.phone}</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm md:col-span-2">
            <h2 className="text-xl font-semibold">{t.contact.emailLabel}</h2>
            <p className="mt-3 text-gray-600 break-words">{t.contact.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
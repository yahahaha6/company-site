"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function SiteHeader() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <div className="bg-white px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={60}
              height={60}
              className="h-14 w-auto"
              priority
            />
            <span className="text-2xl font-medium text-gray-900">
              {t.brand.name}
            </span>
          </Link>

          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
          >
            {t.nav.languageButton}
          </button>
        </div>
      </div>

      <nav className="border-b border-green-200 bg-green-100">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
          <div className="flex gap-10 text-xl font-semibold">
            <Link href="/" className="text-gray-900 hover:text-green-700">
              {t.nav.home}
            </Link>

            <Link
              href="/companyprofile"
              className="text-gray-900 hover:text-green-700"
            >
              {t.nav.companyprofile}
            </Link>

            <Link href="/about" className="text-gray-900 hover:text-green-700">
              {t.nav.about}
            </Link>

            <Link
              href="/services"
              className="text-gray-900 hover:text-green-700"
            >
              {t.nav.services}
            </Link>

            <Link
              href="/contact"
              className="text-gray-900 hover:text-green-700"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
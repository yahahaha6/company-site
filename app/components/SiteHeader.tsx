"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

export default function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/companyprofile", label: t.nav.companyprofile },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/journeys", label: t.nav.journeys },
    { href: "/map", label: t.nav.map },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <div className="bg-white/95 px-6 py-5 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={60}
              height={60}
              className="h-14 w-auto transition duration-300 hover:scale-105"
              priority
            />
            <span className="text-2xl font-semibold text-gray-900">
              {t.brand.name}
            </span>
          </Link>

          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="action-button w-fit rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:border-green-200 hover:bg-green-50"
          >
            {t.nav.languageButton}
          </button>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-y border-green-200 bg-green-100/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
          <div className="flex flex-wrap justify-center gap-2 text-base font-semibold sm:gap-3 sm:text-lg">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

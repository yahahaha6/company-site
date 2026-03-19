import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
export const metadata = {
  title: "MyCompany",
  description: "A modern company website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <LanguageProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
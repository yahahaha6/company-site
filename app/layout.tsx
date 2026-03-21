import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import RouteBackground from "./components/RouteBackground";

export const metadata = {
  title: "New England Academy Express",
  description: "A modern education consulting website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-white text-gray-900">
        <LanguageProvider>
          <RouteBackground />

          <div className="relative z-10">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
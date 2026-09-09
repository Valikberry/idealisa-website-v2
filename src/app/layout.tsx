import { rootMetadata, getSeoLanguage } from "@/lib/seo/server";
import { SiteStructuredData } from "@/components/seo-json-ld";
import type React from "react";
import { Manrope, DM_Sans, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-cal-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const generateMetadata = rootMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLanguage = await getSeoLanguage();

  return (
    <html lang={initialLanguage}>
      <body
        className={`${manrope.variable} ${dmSans.variable} ${inter.variable} font-sans antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <LanguageProvider initialLanguage={initialLanguage}>
          <SmoothScroll>
            <div id="dc-root" className="min-h-screen bg-white text-zinc-950">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </LanguageProvider>
        <SiteStructuredData />
      </body>
    </html>
  );
}

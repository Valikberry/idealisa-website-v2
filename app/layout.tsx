import type React from "react"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Manrope, DM_Sans, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { getValidLanguage } from "@/lib/translations"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-cal-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "IdealIsa | Brand Strategy & Corporate Communication Agency in Angola",
  description:
    "IdealIsa is a leading brand strategy, corporate communication, and project management company in Luanda, Angola.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const initialLanguage = getValidLanguage(cookieStore.get("idealisa-locale")?.value)

  return (
    <html lang={initialLanguage} className="dark">
      <body className={`${manrope.variable} ${dmSans.variable} ${inter.variable} font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        <LanguageProvider initialLanguage={initialLanguage}>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

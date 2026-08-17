"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { DEFAULT_LANGUAGE, translations, type Language, type Translations } from "@/lib/translations"

const LOCALE_COOKIE_NAME = "idealisa-locale"
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children, initialLanguage }: { children: ReactNode; initialLanguage: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    document.documentElement.lang = nextLanguage
    document.cookie = `${LOCALE_COOKIE_NAME}=${encodeURIComponent(nextLanguage)}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function useTranslation(): Translations {
  const { language } = useLanguage()
  return translations[language] ?? translations[DEFAULT_LANGUAGE]
}

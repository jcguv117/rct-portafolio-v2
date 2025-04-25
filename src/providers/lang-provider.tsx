import React, { createContext, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

interface LanguageContextType {
  language: string
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem("language") || "en"
  })

  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es"
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
  }

  useEffect(() => {
    // Check for language parameter in URL
    const urlParams = new URLSearchParams(window.location.search)
    const langParam = urlParams.get("lang")
    
    if (langParam && (langParam === "en" || langParam === "es")) {
      setLanguage(langParam)
      localStorage.setItem("language", langParam)
    }
  }, [])

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LangProvider")
  }

  return context
}
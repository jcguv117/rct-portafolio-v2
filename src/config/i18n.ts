import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { baseURL } from "./config-url";
import HttpBackend from 'i18next-http-backend'

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // Ruta para cargar los archivos de idioma
      loadPath: baseURL+'/{{lng}}.json',
    },
  })

export default i18n

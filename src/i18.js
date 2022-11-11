import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'



export default i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['eng', 'ru'],
    fallbackLng: 'eng',
    debug: false,
    // Options for language detector
    detection: {
      order: [ 'cookie','path', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '../public/locales/{{lng}}/translate.json',
    },
    react: {useSuspense:false}
  })



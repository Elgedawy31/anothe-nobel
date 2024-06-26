import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import en from "./language/en.json"
import ar from "./language/ar.json"



const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    detection: {
      order: [ 'localStorage', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false 
    },

    react: {
      useSuspense: false
    }
  });

  export default i18n;
// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // load translations using http (default public/assets/locales)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    supportedLngs: ['en', 'it', 'es'], // add your supported languages here
    fallbackLng: 'it', // fallback language
    debug: true,
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', 
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;

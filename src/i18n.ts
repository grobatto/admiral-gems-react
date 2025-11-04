import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './locales/es/translation.json';
import enTranslation from './locales/en/translation.json';
import ptTranslation from './locales/pt/translation.json';
import zhTranslation from './locales/zh/translation.json';

const resources = {
  es: { translation: esTranslation },
  en: { translation: enTranslation },
  pt: { translation: ptTranslation },
  zh: { translation: zhTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

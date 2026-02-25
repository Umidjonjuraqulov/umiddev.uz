import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uzTranslation from './i18n/uz.json';
import ruTranslation from './i18n/ru.json';
import enTranslation from './i18n/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
      uz: { translation: uzTranslation }
    },
    lng: 'uz', // Default til
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
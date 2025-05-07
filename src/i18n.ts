import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import enTranslation from './assets/locales/en/translations.json'
import enTranslation from './assets/locales/en/translation.yaml'
import esTranslation from './assets/locales/es/translation.yaml'


i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    supportedLngs: ["en","es"], 
    resources: {
      en: { translation:enTranslation },
      es: { translation:esTranslation },

    },
    fallbackLng: "en",
    react: { useSuspense: false },
  });

export default i18n;
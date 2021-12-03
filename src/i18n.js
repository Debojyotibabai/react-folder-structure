import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/locales/en.translation.json";

/**
 * Register translation files
 */
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {},
  pt: {},
};

// Pass the translation resources and set the defaults!
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

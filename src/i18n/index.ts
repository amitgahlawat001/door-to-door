import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import hi from "./locales/hi.json";
import gu from "./locales/gu.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      gu: { translation: gu },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "hi", "gu"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// Screen readers need the document language to follow the UI language,
// otherwise Hindi and Gujarati are read with English pronunciation rules.
const syncLang = (lng: string) => {
  document.documentElement.lang = lng;
};
syncLang(i18n.resolvedLanguage ?? "en");
i18n.on("languageChanged", syncLang);

export default i18n;

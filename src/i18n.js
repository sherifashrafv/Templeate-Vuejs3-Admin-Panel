import { createI18n } from "vue-i18n";
import en from "../src/Translations/en.json";
import ar from "../src/Translations/ar.json";
const i18n = createI18n({
  locale: "en",
  messages: {
    en: en,
    ar: ar,
  },
});
export default i18n;

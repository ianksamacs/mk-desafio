import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from "./locale/pt-br.json";
import ENUS from "./locale/en-us.json";

const resources = {
  "pt-BR": PTBR,
  "en-US": ENUS
}

void i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    debug: false,
    lng: navigator.language,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
import I18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import moment from 'moment/min/moment-with-locales';

const enDictionary = require('./en-EN.json');
const idDictionary = require('./id-ID.json');

const Translation = {
  en: {
    translation: enDictionary
  },
  id: {
    translation: idDictionary
  }
};

I18n.use(initReactI18next);

I18n.init({
  resources: Translation,
  fallbackLng: ['en', 'id'],
  lng: 'id'
});

I18n.on('languageChanged', function (lng) {
  moment.locale(lng);
});

export default lang = (str) => I18n.t(str);

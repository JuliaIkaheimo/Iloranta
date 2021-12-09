import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../data/en.json';
import fi from '../data/fi.json';
import se from '../data/se.json';
import de from '../data/de.json'

i18n.use(initReactI18next).init({
lng: 'fi',
fallbackLng: 'en',
resources: {
	en: en,
	fi: fi,
    se: se,
    de: de
},
interpolation: {
	escapeValue: false // react already safes from xss
}
});

export default i18n;

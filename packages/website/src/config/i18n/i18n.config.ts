import { InitOptions } from 'i18next';

import { AUTHORIZED_LANGUAGES, DEFAULT_LANGUAGE } from '../../constants';
import translationsEn from '../../translations/translations.en.json';
import translationsFr from '../../translations/translations.fr.json';

export const i18nConfig = {
  resources: {
    fr: { messages: translationsFr },
    en: { messages: translationsEn }
  },
  load: 'languageOnly',
  preload: AUTHORIZED_LANGUAGES,
  whitelist: AUTHORIZED_LANGUAGES,
  fallbackLng: DEFAULT_LANGUAGE,
  returnEmptyString: false,
  defaultNS: 'messages',
  ns: 'messages',
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: false,
    useSuspense: true
  },
  detection: {
    order: ['path'],
    lookupFromPathIndex: 0
  }
} as InitOptions;

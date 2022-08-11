import { InitOptions } from 'i18next';

import { AUTHORIZED_LANGUAGES, DEFAULT_LANGUAGE } from '../../constants';

export const i18nConfig = {
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
  }
} as InitOptions;

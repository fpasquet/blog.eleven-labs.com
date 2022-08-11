import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { i18nConfig } from './i18n.config';

export const i18n = i18next.createInstance().use(initReactI18next);

i18n.init(i18nConfig);

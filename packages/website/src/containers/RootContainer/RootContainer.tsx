import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { useRoutes } from 'react-router-dom';

import { i18n } from '../../config/i18n';
import { routes } from '../../config/routing';

export const RootContainer: React.FC<{ lang?: string }> = ({ lang }) => {
  const routing = useRoutes(routes);

  if (lang) {
    i18n.changeLanguage(lang);
  }

  return <I18nextProvider i18n={i18n}>{routing}</I18nextProvider>;
};

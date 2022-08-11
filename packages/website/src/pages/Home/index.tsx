import React from 'react';
import { useTranslation } from 'react-i18next';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return <>{t('welcome_to_home_page')}</>;
};

import React from 'react';
import { useTranslation } from 'react-i18next';

export const AuthorPage: React.FC = () => {
  const { t } = useTranslation();
  return <>{t('welcome_to_author_page')}</>;
};

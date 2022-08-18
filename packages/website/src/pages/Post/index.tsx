import React from 'react';
import { useTranslation } from 'react-i18next';

export const PostPage: React.FC = () => {
  const { t } = useTranslation();
  return <>{t('welcome_to_post_page')}</>;
};

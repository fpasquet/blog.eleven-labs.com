import { NewsletterBlockProps } from '@eleven-labs/blog-ui';
import { useTranslation } from 'react-i18next';

import { newsletterFormUrl } from '../config/website';

export const useNewsletterBlockProps = (): NewsletterBlockProps => {
  const { t } = useTranslation();

  return {
    title: t('newsletter.title'),
    description: t('newsletter.description'),
    subscribeButtonProps: {
      as: 'a',
      label: t('newsletter.button_label'),
      target: '_blank',
      href: newsletterFormUrl
    }
  };
};

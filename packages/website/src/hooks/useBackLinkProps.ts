import { LinkProps } from '@eleven-labs/blog-ui';
import { generatePath, Link, useParams } from 'react-router-dom';
import { PATHS } from '../constants';
import { useTranslation } from 'react-i18next';

export interface UseBackLinkProps {
  backLinkLabel: string;
  backLinkProps: Omit<LinkProps, 'children'>
}

export const useBackLinkProps = (): UseBackLinkProps => {
  const { lang = 'fr' } = useParams<{ lang: string }>();
  const { t } = useTranslation();
  return {
    backLinkLabel: t('common.back'),
    backLinkProps: {
      as: Link,
      to: generatePath(PATHS.HOME, { lang })
    },
  };
}

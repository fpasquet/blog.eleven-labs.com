import { LayoutTemplateProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { StaticCache, useHeaderProps } from './useHeaderProps';
import { useFooterProps } from './useFooterProps';
import { Link, useParams, generatePath } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useLayoutTemplateProps = (): Pick<
  LayoutTemplateProps,
  'headerProps' | 'footerProps'
> & { staticCache: StaticCache } => {
  const { lang = 'fr' } = useParams<{ lang?: string }>();
  const { t } = useTranslation();

  const { staticCache, ...headerProps } = useHeaderProps({
    lang,
    headerTitle: t('header.title'),
    headerSubtitle: t('header.subtitle'),
    autocompletePlaceholder: t('autocomplete.placeholder'),
    searchNotFoundTitle: t('search_not_found.title'),
    searchNotFoundDescription: t('search_not_found.description'),
    seeAllSearchLinkLabel: t('autocomplete.see_all_search_label'),
    generatePath,
  });
  const footerProps = useFooterProps();

  return {
    headerProps,
    footerProps,
    staticCache,
  };
};

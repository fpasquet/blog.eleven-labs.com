import { Header } from '@eleven-labs/blog-ui';
import React from 'react';

import { StaticCache, useHeaderProps } from '../../hooks/useHeaderProps';
import { PATHS } from '../../constants';

export const HeaderContainer: React.FC = () => {
  const cache: StaticCache = (window as unknown as { staticCache: StaticCache; }).staticCache;
  const headerProps = useHeaderProps({
    lang: cache.lang,
    headerTitle: cache.headerTitle,
    headerSubtitle: cache.headerSubtitle,
    autocompletePlaceholder: cache.autocompletePlaceholder,
    searchNotFoundTitle: cache.searchNotFoundTitle,
    searchNotFoundDescription: cache.searchNotFoundDescription,
    seeAllSearchLinkLabel: cache.seeAllSearchLinkLabel,
    generatePath: (path, params?: Record<string, string>) => {
      if (path === PATHS.HOME) {
        return PATHS.HOME.replace(':lang', params!.lang);
      } else if (path === PATHS.POST) {
        return PATHS.POST
          .replace(':lang', params!.lang)
          .replace(':slug', params!.slug);
      } else if (path === PATHS.SEARCH) {
        return PATHS.SEARCH
          .replace(':lang', params!.lang)
          .replace(':search', params!.search);
      }

      return '';
    }
  });

  return <Header {...headerProps} />;
};

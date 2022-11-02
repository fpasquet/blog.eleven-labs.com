import { HeaderProps, AutocompleteProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { algoliaSearchIndex } from '../helpers/algolia';
import { useDebounce } from './useDebounce';
import { PATHS } from '../constants';

export interface useHeaderPropsOptions {
  lang: string;
  headerTitle: string;
  headerSubtitle: string;
  autocompletePlaceholder: string;
  searchNotFoundTitle: string;
  searchNotFoundDescription: string;
  seeAllSearchLinkLabel: string;
  generatePath: (path: string, params?: Record<string, string>) => string;
}

export interface StaticCache {
  lang: string;
  headerTitle: string;
  headerSubtitle: string;
  autocompletePlaceholder: string;
  searchNotFoundTitle: string;
  searchNotFoundDescription: string;
  seeAllSearchLinkLabel: string;
}

export const useHeaderProps = ({
  lang,
  headerTitle,
  headerSubtitle,
  autocompletePlaceholder,
  searchNotFoundTitle,
  searchNotFoundDescription,
  seeAllSearchLinkLabel,
  generatePath,
}: useHeaderPropsOptions): HeaderProps & { staticCache: StaticCache; } => {
  const [autocompleteDisplayed, setAutocompleteDisplayed] =
    React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>('');
  const debouncedSearch = useDebounce<string>(search, 500);
  const [searchHits, setSearchHits] = React.useState<
    { objectID: string; slug: string; title: string; excerpt: string }[]
    >([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  React.useEffect(() => {
    if (debouncedSearch.length > 0) {
      setAutocompleteDisplayed(true);
      algoliaSearchIndex
        .search<{ slug: string; title: string; excerpt: string }>(
          debouncedSearch,
          { hitsPerPage: 6, facetFilters: [`lang:${lang}`] }
        )
        .then(({ hits }) => {
          setSearchHits(hits);
        });
    }
  }, [debouncedSearch]);

  const items = React.useMemo<AutocompleteProps['items']>(
    () =>
      searchHits.map<AutocompleteProps['items'][0]>((hit) => ({
        id: hit.objectID,
        title: hit.title,
        description: hit.excerpt,
        href: generatePath(PATHS.POST, { lang: lang, slug: hit.slug })
      })),
    [lang, searchHits]
  );

  return {
      headerContainerProps: {
        id: 'header-container',
      },
      title: headerTitle,
      subtitle: headerSubtitle,
      onClickOpenSearch: () => setAutocompleteDisplayed(!autocompleteDisplayed),
      onClickCloseSearch: () =>
        setAutocompleteDisplayed(!autocompleteDisplayed),
      autocompleteDisplayed: autocompleteDisplayed,
      homeLinkProps: {
        href: generatePath(PATHS.HOME, { lang })
      },
      autocompleteProps: {
        isOpen: debouncedSearch.length > 0,
        items,
        inputProps: {
          placeholder: autocompletePlaceholder,
          value: search,
          onChange: handleChange
          /*onBlur: () => setSearch('')*/
        },
        buttonCloseProps: {
          onClick: () => setSearch('')
        },
        buttonSearchProps: {
          onClick: () => setAutocompleteDisplayed(true)
        },
        searchNotFoundProps: {
          title: searchNotFoundTitle,
          description: searchNotFoundDescription,
        },
        seeAllSearchLinkProps: {
          label: seeAllSearchLinkLabel,
          href: generatePath(PATHS.SEARCH, { lang, search: debouncedSearch })
        }
      },
      staticCache: {
        lang,
        headerTitle,
        headerSubtitle,
        autocompletePlaceholder,
        searchNotFoundTitle,
        searchNotFoundDescription,
        seeAllSearchLinkLabel,
      },
  };
};

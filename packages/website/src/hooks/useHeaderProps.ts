import { HeaderProps, AutocompleteProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { algoliaSearchIndex } from '../helpers/algolia';
import { useDebounce } from './useDebounce';
import { PATHS } from '../constants';
import { generatePath, Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useOutsideClick } from './useOutsideClick';

export interface UseHeaderProps {
  search?: string;
}

export const useHeaderProps = ({ search: defaultSearch = '' }: UseHeaderProps): HeaderProps => {
  const { lang = 'fr' } = useParams<{ lang?: string }>();
  const { t } = useTranslation();
  const [autocompleteDisplayed, setAutocompleteDisplayed] =
    React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>(defaultSearch);
  const debouncedSearch = useDebounce<string>(search, 500);
  const [searchHits, setSearchHits] = React.useState<
    { objectID: string; slug: string; title: string; excerpt: string }[]
    >([]);

  const onClickAutocompleteBox = (event: MouseEvent) => {
    const eventTargets = event.composedPath();
    const insideAutocompleteBox = Boolean(eventTargets.find(eventTarget =>
      (eventTarget as HTMLDivElement)?.classList?.contains('autocomplete')
    ));
    if (!insideAutocompleteBox) {
      setIsOpen(false);
    }
  };

  const autocompleteRef = useOutsideClick(onClickAutocompleteBox);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setIsOpen(true);
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
        as: Link,
        to: generatePath(PATHS.POST, { lang: lang, slug: hit.slug })
      })),
    [lang, searchHits]
  );

  return {
      title: t('header.title'),
      subtitle: t('header.subtitle'),
      onClickOpenSearch: () => setAutocompleteDisplayed(!autocompleteDisplayed),
      onClickCloseSearch: () =>
        setAutocompleteDisplayed(!autocompleteDisplayed),
      autocompleteDisplayed: autocompleteDisplayed,
      homeLinkProps: {
        as: Link,
        to: generatePath(PATHS.HOME, { lang })
      },
      autocompleteProps: {
        ref: autocompleteRef,
        isOpen,
        items,
        inputProps: {
          placeholder: t('autocomplete.placeholder'),
          value: search,
          onChange: handleChange,
        },
        buttonCloseProps: {
          onClick: () => setSearch('')
        },
        buttonSearchProps: {
          onClick: () => setAutocompleteDisplayed(true)
        },
        searchNotFoundProps: {
          title: t('search_not_found.title'),
          description: t('search_not_found.description'),
        },
        seeAllSearchLinkProps: {
          label: t('autocomplete.see_all_search_label'),
          as: Link,
          to: generatePath(PATHS.SEARCH, { lang, search: debouncedSearch })
        }
      },
  };
};

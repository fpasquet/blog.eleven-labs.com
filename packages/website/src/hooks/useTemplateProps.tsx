import { LayoutTemplateProps } from '@eleven-labs/blog-ui';
import { AutocompleteProps } from '@eleven-labs/blog-ui';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Link, useParams } from 'react-router-dom';

import { i18n } from '../config/i18n';
import { contact, websiteUrl } from '../config/website';
import { socialNetworks } from '../config/website/socialNetworks';
import { AUTHORIZED_LANGUAGES, PATHS } from '../constants';
import { algoliaSearchIndex } from '../helpers/algolia';
import { useDebounce } from './useDebounce';

export const useLayoutTemplateProps = (): Pick<
  LayoutTemplateProps,
  'headerProps' | 'footerProps'
> => {
  const { lang = 'fr' } = useParams<{ lang?: string }>();
  const { t } = useTranslation();
  const [autocompleteDisplayed, setAutocompleteDisplayed] =
    useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce<string>(search, 500);
  const [searchHits, setSearchHits] = useState<
    { objectID: string; slug: string; title: string; excerpt: string }[]
  >([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
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

  const items = useMemo<AutocompleteProps['items']>(
    () =>
      searchHits.map<AutocompleteProps['items'][0]>((hit) => ({
        id: hit.objectID,
        title: hit.title,
        description: hit.excerpt,
        as: Link,
        to: generatePath(PATHS.POST, { lang, slug: hit.slug })
      })),
    [lang, searchHits]
  );

  return {
    headerProps: {
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
        isOpen: debouncedSearch.length > 0,
        items,
        inputProps: {
          placeholder: t('autocomplete.placeholder'),
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
          title: t('search_not_found.title'),
          description: t('search_not_found.description')
        },
        seeAllSearchLinkProps: {
          label: t('autocomplete.see_all_search_label'),
          as: Link,
          to: generatePath(PATHS.SEARCH, { lang, search: debouncedSearch })
        }
      }
    },
    footerProps: {
      introBlock: {
        title: t('footer.intro_block.title'),
        description: t('footer.intro_block.description')
      },
      elevenLabsSiteLink: {
        as: 'a',
        label: t('footer.link_to_eleven_labs_site'),
        target: '_blank',
        href: websiteUrl
      },
      contactTitle: t('footer.contact.title'),
      contactList: [
        ...contact.addressList.map(({ name, address }) => ({
          title: name,
          description: (
            <>
              {address.streetLine}
              <br />
              {address.zipCode} {address.city.toLocaleUpperCase()}
            </>
          )
        })),
        {
          title: contact.email,
          description: contact.phoneNumber
        }
      ],
      socialLinks: socialNetworks.map((socialNetwork) => ({
        socialName: socialNetwork.socialName,
        href: socialNetwork.url
      })),
      languageLinks: AUTHORIZED_LANGUAGES.map((currentLang) => {
        const active = currentLang === lang;
        let languageLinkProps = {};
        if (!active) {
          languageLinkProps = {
            to: generatePath(PATHS.HOME, { lang: currentLang }),
            onClick: () => i18n.changeLanguage(currentLang)
          };
        }
        return {
          as: active ? 'span' : Link,
          neutral: active,
          name: currentLang,
          label: t(`languages.${currentLang}`),
          ...languageLinkProps
        };
      })
    }
  };
};

import { LayoutTemplateProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Link, useParams } from 'react-router-dom';

import { i18n } from '../config/i18n';
import { contact, websiteUrl } from '../config/website';
import { socialNetworks } from '../config/website/socialNetworks';
import { AUTHORIZED_LANGUAGES, PATHS } from '../constants';

export const useLayoutTemplateProps = (): Pick<
  LayoutTemplateProps,
  'headerProps' | 'footerProps'
> => {
  const { lang = 'fr' } = useParams<{ lang?: string }>();
  const { t } = useTranslation();

  return {
    headerProps: {
      title: t('header.title'),
      subtitle: t('header.subtitle'),
      homeLinkProps: {
        as: Link,
        to: generatePath(PATHS.HOME, { lang })
      },
      searchInputProps: {
        inputProps: {
          placeholder: 'Rechercher par nom d’article ou d’auteur'
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
          active,
          name: currentLang,
          label: t(`languages.${currentLang}`),
          ...languageLinkProps
        };
      })
    }
  };
};

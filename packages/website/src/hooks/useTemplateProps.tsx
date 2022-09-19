import { LayoutTemplateProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Link, useParams } from 'react-router-dom';

import { contact, websiteUrl } from '../config/website';
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
      languageLinks: AUTHORIZED_LANGUAGES.map((currentLang) => {
        const languagePath = generatePath(PATHS.HOME, { lang: currentLang });
        return {
          as: Link,
          active: currentLang === lang,
          name: currentLang,
          label: t(`languages.${currentLang}`),
          to: languagePath
        };
      })
    }
  };
};

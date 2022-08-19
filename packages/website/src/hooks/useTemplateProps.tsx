import { LayoutTemplateProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { contact } from '../config/website';
import { CATEGORIES } from '../constants';

export const useLayoutTemplateProps = (): Pick<
  LayoutTemplateProps,
  'headerProps' | 'footerProps'
> => {
  const { t } = useTranslation();
  return {
    headerProps: {
      title: t('header.title'),
      subtitle: t('header.subtitle'),
      introBlock: {
        title: t('header.intro_block.title'),
        description: t('header.intro_block.description')
      },
      choiceCategoryLabel: t('header.choice_category_label'),
      choiceCategories: [
        { name: 'all', label: t('categories.all') },
        ...CATEGORIES.map((name) => ({
          name,
          label: t(`categories.${name}`)
        }))
      ]
    },
    footerProps: {
      introBlock: {
        title: t('footer.intro_block.title'),
        description: t('footer.intro_block.description')
      },
      buttonToElevenLabsSiteProps: {
        children: t('footer.link_to_eleven_labs_site')
      },
      contactTitle: 'Contact',
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
      languageLinks: ['Français', 'English'].map((languageName) => ({
        active: languageName === 'Français',
        name: languageName,
        linkProps: {}
      }))
    }
  };
};

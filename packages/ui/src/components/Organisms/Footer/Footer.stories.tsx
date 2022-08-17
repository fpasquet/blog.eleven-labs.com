import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import config from '../../../fixtures/config.json';
import { Footer } from './Footer';

export default {
  title: 'Components/Organisms/Footer',
  component: Footer,
  args: {
    introBlock: {
      title: 'Découvrez Eleven Labs',
      description: 'Notre site pour mieux nous connaître'
    },
    contactTitle: 'Contact',
    contactList: [
      ...config.contact.addressList.map(({ name, address }) => ({
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
        title: config.contact.email,
        description: config.contact.phoneNumber
      }
    ],
    languageLinks: config.languages.map((language) => ({
      active: language.name === 'Français',
      name: language.name,
      linkProps: {}
    }))
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Overview = Template.bind({});
Overview.args = {};

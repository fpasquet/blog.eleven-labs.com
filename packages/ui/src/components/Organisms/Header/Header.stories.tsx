import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Header } from './Header';

export default {
  title: 'Components/Organisms/Header',
  component: Header,
  args: {
    title: 'Eleven Labs',
    subtitle: 'Le blog',
    introBlock: {
      title: 'Ravi de te voir',
      description: 'Explorons de\nnouveaux savoirs'
    }
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Overview = Template.bind({});
Overview.args = {};

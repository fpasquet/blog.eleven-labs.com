import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import FooterStories from '../../components/Organisms/Footer/Footer.stories';
import HeaderStories from '../../components/Organisms/Header/Header.stories';
import { LayoutTemplate } from './LayoutTemplate';

export default {
  title: 'Templates/Layout',
  component: LayoutTemplate,
  args: {
    headerProps: HeaderStories.args,
    footerProps: FooterStories.args,
    children: 'content'
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof LayoutTemplate>;

const Template: ComponentStory<typeof LayoutTemplate> = (args) => (
  <LayoutTemplate {...args} />
);

export const Overview = Template.bind({});

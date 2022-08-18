import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { LayoutTemplate } from './LayoutTemplate';

export default {
  title: 'Templates/Layout',
  component: LayoutTemplate
} as ComponentMeta<typeof LayoutTemplate>;

const Template: ComponentStory<typeof LayoutTemplate> = (args) => (
  <LayoutTemplate {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

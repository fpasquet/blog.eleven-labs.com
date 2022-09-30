import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { spacingSystemPropsControls } from '../../../constants';
import { Divider } from './Divider';

export default {
  title: 'Components/Atoms/Divider',
  component: Divider,
  argTypes: {
    ...spacingSystemPropsControls
  }
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Overview = Template.bind({});

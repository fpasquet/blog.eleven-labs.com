import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '../../../constants';
import { ChoiceChip } from './ChoiceChip';

export default {
  title: 'Components/Atoms/ChoiceChip',
  component: ChoiceChip,
  argTypes: {
    ...systemPropsControls
  },
  args: {
    children: 'Choice Chip Label'
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'primary-light'
    }
  }
} as ComponentMeta<typeof ChoiceChip>;

const Template: ComponentStory<typeof ChoiceChip> = (args) => (
  <ChoiceChip {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

export const ChoiceChipIsActice = Template.bind({});
ChoiceChipIsActice.args = {
  isActive: true
};

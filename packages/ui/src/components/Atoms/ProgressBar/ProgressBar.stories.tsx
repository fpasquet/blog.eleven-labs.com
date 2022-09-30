import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { spacingSystemPropsControls } from '../../../constants';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
  argTypes: {
    ...spacingSystemPropsControls
  },
  args: {
    value: 30
  }
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Overview = Template.bind({});

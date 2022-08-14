import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '../../../../constants';
import { Box } from './Box';

export default {
  title: 'Components/Atoms/Layout/Box',
  component: Box,
  args: {
    p: 'm',
    bg: 'primary-light',
    color: 'white',
    children: <>I'm a div Box ;</>
  },
  parameters: {
    controls: { exclude: ['children'] }
  },
  argTypes: {
    ...systemPropsControls
  }
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Overview = Template.bind({});
Overview.args = {};

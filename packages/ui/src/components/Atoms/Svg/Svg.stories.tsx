import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import logoSvg from '../../../assets/svgs/logo.svg';
import { Svg } from './Svg';

export default {
  title: 'Components/Atoms/Svg',
  component: Svg,
  args: {
    src: logoSvg,
    size: '64px'
  }
} as ComponentMeta<typeof Svg>;

const Template: ComponentStory<typeof Svg> = (args) => <Svg {...args} />;

export const Overview = Template.bind({});
Overview.args = {};

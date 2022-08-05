import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '../../../../constants';
import { createDescription } from '../../../../helpers/storybookHelper';
import { typographyHeadingNameList } from '../../../../types';
import { Heading } from './Heading';

export default {
  title: 'Components/Atoms/Typography/Heading',
  component: Heading,
  argTypes: {
    size: {
      options: typographyHeadingNameList,
      description: createDescription({
        cssProperties: ['font-size']
      })
    },
    ...systemPropsControls
  },
  args: {
    size: 'l',
    children: 'Example Heading'
  }
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

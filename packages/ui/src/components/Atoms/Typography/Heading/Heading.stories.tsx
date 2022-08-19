import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '../../../../constants';
import { typographyFontSizeNameList } from '../../../../types';
import { Heading } from './Heading';

export default {
  title: 'Components/Atoms/Typography/Heading',
  component: Heading,
  argTypes: systemPropsControls,
  args: {
    size: 'l',
    children: 'Example Heading'
  },
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

export const All: ComponentStory<typeof Heading> = () => (
  <>
    {typographyFontSizeNameList.map((size) => (
      <Heading key={size} mb="xs" size={size}>
        Heading {size}
      </Heading>
    ))}
  </>
);

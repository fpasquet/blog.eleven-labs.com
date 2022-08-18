import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '../../../../constants/storybook';
import { createDescription } from '../../../../helpers/storybookHelper';
import { typographyTextNameList } from '../../../../types';
import { Text } from './Text';

console.log(systemPropsControls);

export default {
  title: 'Components/Atoms/Typography/Text',
  component: Text,
  argTypes: {
    size: {
      options: typographyTextNameList,
      description: createDescription({
        cssProperties: ['font-size']
      })
    },
    ...systemPropsControls
  },
  args: {
    size: 'm',
    children: 'Example Text'
  },
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Overview = Template.bind({});
Overview.args = {};

export const All: ComponentStory<typeof Text> = () => (
  <>
    {typographyTextNameList.map((size) => (
      <Text key={size} mb="xs" size={size}>
        Text {size}
      </Text>
    ))}
  </>
);

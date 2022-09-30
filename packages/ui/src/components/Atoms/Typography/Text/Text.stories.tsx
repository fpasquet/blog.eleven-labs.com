import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import {
  systemPropsControls,
  typographyPropsControls
} from '../../../../constants/storybook';
import { typographyFontSizeNameList } from '../../../../types';
import { Text } from './Text';

export default {
  title: 'Components/Atoms/Typography/Text',
  component: Text,
  argTypes: {
    ...systemPropsControls,
    ...typographyPropsControls
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

export const All: ComponentStory<typeof Text> = () => (
  <>
    {typographyFontSizeNameList.map((size) => (
      <Text key={size} mb="xs" size={size}>
        Text {size}
      </Text>
    ))}
  </>
);

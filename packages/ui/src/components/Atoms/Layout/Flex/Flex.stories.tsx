import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import {
  flexDirectionList,
  flexOrGridPropsControls,
  flexWrapList,
  systemPropsControls
} from '../../../../constants';
import { createDescription } from '../../../../helpers/storybookHelper';
import { Flex } from './Flex';
import { FlexItem } from './FlexItem';

export default {
  title: 'Components/Atoms/Layout/Flex',
  component: Flex,
  args: {
    bg: 'grey-ultra-light',
    p: 'xxs',
    gap: 'm',
    justifyContent: 'center',
    children: Array.from({ length: 3 }).map((v, index) => (
      <FlexItem key={index} p="m" bg="primary-light" color="white">
        {(index + 1).toString().padStart(2, '0')}
      </FlexItem>
    ))
  },
  parameters: {
    controls: { exclude: ['children'] }
  },
  argTypes: {
    ...systemPropsControls,
    ...flexOrGridPropsControls,
    inline: {
      type: 'boolean',
      description: createDescription({
        cssProperties: ['display'],
        cssValues: ['inline-flex', 'flex']
      })
    },
    direction: {
      options: flexDirectionList,
      description: createDescription({
        cssProperties: ['flex-direction']
      })
    },
    wrap: {
      options: flexWrapList,
      description: createDescription({
        cssProperties: ['flex-wrap']
      })
    }
  }
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Overview = Template.bind({});
Overview.args = {};

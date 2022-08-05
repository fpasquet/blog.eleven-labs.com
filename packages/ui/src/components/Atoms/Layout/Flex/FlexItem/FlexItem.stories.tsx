import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import {
  flexBasisList,
  flexOrGridItemPropsControls,
  systemPropsControls
} from '../../../../../constants';
import { createDescription } from '../../../../../helpers/storybookHelper';
import { Flex } from '../Flex';
import { FlexItem } from './FlexItem';

export default {
  title: 'Components/Atoms/Layout/Flex/FlexItem',
  component: FlexItem,
  args: {
    p: 'xxs',
    bg: 'primary-dark',
    color: 'white',
    align: 'center',
    children: 'Flex Item'
  },
  parameters: {
    controls: { exclude: ['children'] }
  },
  argTypes: {
    ...systemPropsControls,
    ...flexOrGridItemPropsControls,
    basis: {
      options: flexBasisList,
      description: createDescription({
        cssProperties: ['flex-basis']
      })
    }
  },
  decorators: [
    (Story) => (
      <Flex
        gap={{ xs: 'xxs', sm: 's' }}
        bg="grey-ultra-light"
        justifyContent="center"
        alignContent="center"
        p="xxs"
      >
        <FlexItem bg="primary-light" color="white" p={{ xs: 'xxs', sm: 'm' }}>
          Flex Item 1
        </FlexItem>
        <FlexItem bg="primary-light" color="white" p={{ xs: 'xxs', sm: 'm' }}>
          Flex Item 2
        </FlexItem>
        <Story />
        <FlexItem bg="primary-light" color="white" p={{ xs: 'xxs', sm: 'm' }}>
          Flex Item 4
        </FlexItem>
      </Flex>
    )
  ]
} as ComponentMeta<typeof FlexItem>;

const Template: ComponentStory<typeof FlexItem> = (args) => (
  <FlexItem {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

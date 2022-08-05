import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import {
  flexOrGridPropsControls,
  systemPropsControls
} from '../../../../constants';
import { createDescription } from '../../../../helpers/storybookHelper';
import { Grid } from './Grid';
import { GridItem } from './GridItem';

export default {
  title: 'Components/Atoms/Layout/Grid',
  component: Grid,
  args: {
    bg: 'grey-ultra-light',
    p: 'xxs',
    size: { xs: 2, md: 3 },
    gap: 'm',
    justifyContent: 'center',
    children: Array.from({ length: 6 }).map((v, index) => (
      <GridItem key={index} p="m" bg="primary-light" color="white">
        {(index + 1).toString().padStart(2, '0')}
      </GridItem>
    ))
  },
  parameters: {
    controls: { exclude: ['children'] }
  },
  argTypes: {
    ...systemPropsControls,
    ...flexOrGridPropsControls,
    size: {
      options: Array.from({ length: 12 }).map((v, i) => i + 1),
      description: createDescription({
        cssProperties: ['grid-template-columns']
      })
    }
  }
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Overview = Template.bind({});
Overview.args = {};

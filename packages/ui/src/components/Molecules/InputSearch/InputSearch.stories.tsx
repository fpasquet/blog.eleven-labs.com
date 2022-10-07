import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '../../../constants';
import { InputSearch } from './InputSearch';

export default {
  title: 'Components/Molecules/InputSearch',
  component: InputSearch,
  argTypes: {
    ...systemPropsControls
  },
  args: {
    inputProps: {
      placeholder: 'Rechercher par nom d’article ou d’auteur'
    }
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'grey-ultra-light'
    }
  }
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = (args) => (
  <InputSearch {...args} />
);

export const Overview = Template.bind({});

export const InputSearchHasValue = Template.bind({});
InputSearchHasValue.args = {
  inputProps: {
    value: 'Les femmes dans'
  }
}

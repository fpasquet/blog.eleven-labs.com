import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import AutocompleteStories from '../../Molecules/Autocomplete/Autocomplete.stories';
import { Header } from './Header';

export default {
  title: 'Components/Organisms/Header',
  component: Header,
  args: {
    title: 'Eleven Labs',
    subtitle: 'Le blog',
    autocompleteProps: AutocompleteStories.args
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Overview = Template.bind({});

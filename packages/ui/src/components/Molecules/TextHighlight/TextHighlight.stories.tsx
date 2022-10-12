import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '../../../constants';
import { TextHighlight } from './TextHighlight';

export default {
  title: 'Components/Molecules/TextHighlight',
  component: TextHighlight,
  argTypes: {
    ...systemPropsControls
  },
  args: {
    text: `Aujourd'hui, c'est la journée internationale des droits de la femme, et nous avons voulu en profiter pour vous parler d'un sujet qui nous tient à cœur: les femmes dans ...`,
    textQuery: 'Les femmes dans'
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'grey-ultra-light'
    }
  }
} as ComponentMeta<typeof TextHighlight>;

const Template: ComponentStory<typeof TextHighlight> = (args) => (
  <TextHighlight {...args} />
);

export const Overview = Template.bind({});

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import PostFixture from '../../../fixtures/post.json';
import { RichText } from './RichText';

export default {
  title: 'Components/Atoms/RichText',
  component: RichText,
  args: {
    content: PostFixture.content
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof RichText>;

const Template: ComponentStory<typeof RichText> = (args) => (
  <RichText {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

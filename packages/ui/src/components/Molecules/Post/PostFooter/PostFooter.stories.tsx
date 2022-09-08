import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import PostFixture from '../../../../fixtures/post.json';
import { PostFooter } from './PostFooter';

export default {
  title: 'Components/Molecules/Post/PostFooter',
  component: PostFooter,
  args: {
    title: 'écrit par',
    authors: PostFixture.authors
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof PostFooter>;

const Template: ComponentStory<typeof PostFooter> = (args) => (
  <PostFooter {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

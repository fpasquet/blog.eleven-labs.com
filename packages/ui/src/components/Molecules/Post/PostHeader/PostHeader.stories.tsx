import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import PostFixture from '../../../../fixtures/post.json';
import { PostHeader } from './PostHeader';

export default {
  title: 'Components/Molecules/Post/PostHeader',
  component: PostHeader,
  args: {
    ...PostFixture,
    authorLinkProps: () => ({})
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof PostHeader>;

const Template: ComponentStory<typeof PostHeader> = (args) => (
  <PostHeader {...args} />
);

export const Overview = Template.bind({});

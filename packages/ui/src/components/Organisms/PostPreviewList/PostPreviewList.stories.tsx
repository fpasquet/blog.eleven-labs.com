import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import PreviewPostsFixture from '../../../fixtures/preview-posts.json';
import { PostPreviewList } from './PostPreviewList';

export default {
  title: 'Components/Organisms/PostPreviewList',
  component: PostPreviewList,
  args: {
    posts: PreviewPostsFixture.map((previewPost, index) => ({
      slug: `slug-${index}`,
      ...previewPost,
      articleLinkProps: {},
      authorLinkProps: () => ({})
    }))
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof PostPreviewList>;

const Template: ComponentStory<typeof PostPreviewList> = (args) => (
  <PostPreviewList {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

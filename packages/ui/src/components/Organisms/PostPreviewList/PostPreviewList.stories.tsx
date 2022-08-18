import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import PreviewPostsFixture from '../../../fixtures/preview-posts.json';
import { PostPreviewList } from './PostPreviewList';

export default {
  title: 'Components/Organisms/PostPreviewList',
  component: PostPreviewList,
  args: {
    title: 'Tous nos articles',
    posts: PreviewPostsFixture.map((previewPost, index) => ({
      slug: `slug-${index}`,
      ...previewPost,
      articleLinkProps: {},
      authorLinkProps: () => ({})
    }))
  },
  parameters: {
    layout: 'full',
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

export const PostPreviewListWithPagination = Template.bind({});
PostPreviewListWithPagination.args = {
  textNumberOfItems: '6/156 affichés',
  percentageOfItemDisplayed: 26,
  buttonProps: {
    children: 'Afficher plus'
  }
};

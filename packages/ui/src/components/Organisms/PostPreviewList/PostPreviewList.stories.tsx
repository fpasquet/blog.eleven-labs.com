import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import PreviewPostsFixture from '../../../fixtures/preview-posts.json';
import { Box } from '../../Atoms/Layout/Box';
import { PostPreviewList } from './PostPreviewList';

export default {
  title: 'Components/Organisms/PostPreviewList',
  component: PostPreviewList,
  args: {
    posts: PreviewPostsFixture.map((post) => ({
      ...post,
      postLinkProps: {}
    })),
    onLoadMore: action('onLoadMore')
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  },
  decorators: [
    (Story) => (
      <Box px="m" py="xl">
        {Story()}
      </Box>
    )
  ]
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
  loadMoreButtonLabel: 'Afficher plus'
};

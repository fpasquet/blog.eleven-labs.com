import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import PreviewPostsFixture from '../../../../fixtures/preview-posts.json';
import { RelatedPostList } from './RelatedPostList';

export default {
  title: 'Components/Molecules/Post/RelatedPostList',
  component: RelatedPostList,
  args: {
    relatedPostListTitle: 'Articles sur le même thème',
    posts: PreviewPostsFixture.slice(0, 3).map((post) => ({
      ...post,
      articleLinkProps: {}
    }))
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof RelatedPostList>;

const Template: ComponentStory<typeof RelatedPostList> = (args) => (
  <RelatedPostList {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

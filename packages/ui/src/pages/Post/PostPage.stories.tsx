import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import RelatedPostListStories from '../../components/Molecules/Post/RelatedPostList/RelatedPostList.stories';
import PostFixture from '../../fixtures/post.json';
import LayoutTemplateStories from '../../templates/LayoutTemplate/LayoutTemplate.stories';
import { PostPage } from './PostPage';

export default {
  title: 'Pages/Post',
  component: PostPage,
  args: {
    postFooterTitle: 'écrit par',
    ...PostFixture,
    ...LayoutTemplateStories.args,
    relatedPostListTitle: RelatedPostListStories.args!.relatedPostListTitle,
    relatedPosts: RelatedPostListStories.args!.posts,
    authorLinkProps: () => ({}),
    backLinkLabel: 'Retour'
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof PostPage>;

const Template: ComponentStory<typeof PostPage> = (args) => (
  <PostPage {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

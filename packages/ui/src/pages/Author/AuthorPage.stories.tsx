import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PostPreviewListWithPagination } from '../../components/Organisms/PostPreviewList/PostPreviewList.stories';
import AuthorFixture from '../../fixtures/author.json';
import LayoutTemplateStories from '../../templates/LayoutTemplate/LayoutTemplate.stories';
import { AuthorPage } from './AuthorPage';

export default {
  title: 'Pages/Author',
  component: AuthorPage,
  args: {
    author: AuthorFixture.author,

    backLinkLabel: 'Retour',
    backLinkProps: {},
    postPreviewListTitle: 'Articles de l’autrice',
    posts: AuthorFixture.posts.map((previewPost) => ({
      ...previewPost,
      articleLinkProps: {}
    })),
    textNumberOfItems: PostPreviewListWithPagination!.args!.textNumberOfItems,
    percentageOfItemDisplayed:
      PostPreviewListWithPagination!.args!.percentageOfItemDisplayed,
    loadMoreButtonLabel:
      PostPreviewListWithPagination!.args!.loadMoreButtonLabel,
    ...LayoutTemplateStories.args
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof AuthorPage>;

const Template: ComponentStory<typeof AuthorPage> = (args) => (
  <AuthorPage {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

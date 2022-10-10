import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import NewsletterBlockStories from '../../components/Molecules/NewsletterBlock/NewsletterBlock.stories';
import SearchNotFoundStories from '../../components/Molecules/SearchNotFound/SearchNotFound.stories';
import { PostPreviewListWithPagination } from '../../components/Organisms/PostPreviewList/PostPreviewList.stories';
import AuthorFixture from '../../fixtures/author.json';
import LayoutTemplateStories from '../../templates/LayoutTemplate/LayoutTemplate.stories';
import { SearchPage } from './SearchPage';

export default {
  title: 'Pages/Search',
  component: SearchPage,
  args: {
    backLinkLabel: 'Retour',
    backLinkProps: {},
    numberOfSearchLabel: '26 résultats',
    description: 'triés par pertinence',
    posts: AuthorFixture.posts.map((previewPost) => ({
      ...previewPost,
      postLinkProps: {}
    })),
    textNumberOfItems: PostPreviewListWithPagination!.args!.textNumberOfItems,
    percentageOfItemDisplayed:
      PostPreviewListWithPagination!.args!.percentageOfItemDisplayed,
    loadMoreButtonLabel:
      PostPreviewListWithPagination!.args!.loadMoreButtonLabel,
    searchNotFoundProps: SearchNotFoundStories.args,
    newsletterBlockProps: NewsletterBlockStories.args,
    ...LayoutTemplateStories.args
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof SearchPage>;

const Template: ComponentStory<typeof SearchPage> = (args) => (
  <SearchPage {...args} />
);

export const Overview = Template.bind({});
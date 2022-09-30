import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SearchNotFoundStories from '../../Molecules/SearchNotFound/SearchNotFound.stories';
import PreviewPostsStories, {
  PostPreviewListWithPagination
} from '../../Organisms/PostPreviewList/PostPreviewList.stories';
import { SearchResultList } from './SearchResultList';

export default {
  title: 'Components/Organisms/SearchResultList',
  component: SearchResultList,
  args: {
    backLinkLabel: 'Retour',
    backLinkProps: {},
    numberOfSearchLabel: '26 résultats',
    description: 'triés par pertinence',
    posts: PreviewPostsStories!.args!.posts,
    textNumberOfItems: PostPreviewListWithPagination!.args!.textNumberOfItems,
    percentageOfItemDisplayed:
      PostPreviewListWithPagination!.args!.percentageOfItemDisplayed,
    loadMoreButtonLabel:
      PostPreviewListWithPagination!.args!.loadMoreButtonLabel,
    searchNotFoundProps: SearchNotFoundStories.args
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof SearchResultList>;

const Template: ComponentStory<typeof SearchResultList> = (args) => (
  <SearchResultList {...args} />
);

export const Overview = Template.bind({});

export const SearchNotFound = Template.bind({});
SearchNotFound.args = {
  posts: []
};

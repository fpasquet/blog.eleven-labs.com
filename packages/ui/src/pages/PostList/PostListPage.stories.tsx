import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import NewsletterBlockStories from '../../components/Molecules/NewsletterBlock/NewsletterBlock.stories';
import PreviewPostsStories, {
  PostPreviewListWithPagination
} from '../../components/Organisms/PostPreviewList/PostPreviewList.stories';
import SubHeaderStories from '../../components/Organisms/SubHeader/SubHeader.stories';
import LayoutTemplateStories from '../../templates/LayoutTemplate/LayoutTemplate.stories';
import { PostListPage } from './PostListPage';

export default {
  title: 'Pages/PostList',
  component: PostListPage,
  args: {
    postPreviewListTitle: 'Tous nos articles',
    posts: PreviewPostsStories!.args!.posts,
    textNumberOfItems: PostPreviewListWithPagination!.args!.textNumberOfItems,
    percentageOfItemDisplayed:
      PostPreviewListWithPagination!.args!.percentageOfItemDisplayed,
    loadMoreButtonLabel:
      PostPreviewListWithPagination!.args!.loadMoreButtonLabel,
    ...SubHeaderStories.args,
    newsletterBlockProps: NewsletterBlockStories.args,
    ...LayoutTemplateStories.args
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof PostListPage>;

const Template: ComponentStory<typeof PostListPage> = (args) => (
  <PostListPage {...args} />
);

export const Overview = Template.bind({});

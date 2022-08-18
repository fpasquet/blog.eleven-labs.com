import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import PreviewPostsStories, {
  PostPreviewListWithPagination
} from '../../components/Organisms/PostPreviewList/PostPreviewList.stories';
import { HomePage } from './HomePage';

export default {
  title: 'Pages/Home',
  component: HomePage,
  args: {
    postPreviewListTitle: 'Tous nos articles',
    posts: PreviewPostsStories!.args!.posts,
    textNumberOfItems: PostPreviewListWithPagination!.args!.textNumberOfItems,
    percentageOfItemDisplayed:
      PostPreviewListWithPagination!.args!.percentageOfItemDisplayed,
    loadMoreButtonLabel:
      PostPreviewListWithPagination!.args!.loadMoreButtonLabel
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

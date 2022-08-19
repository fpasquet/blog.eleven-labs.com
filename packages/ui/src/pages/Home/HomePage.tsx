import React from 'react';

import {
  Box,
  Heading,
  PostPreviewList,
  PostPreviewListProps
} from '../../components';
import { LayoutTemplate } from '../../templates';

export interface HomePageProps extends PostPreviewListProps {
  postPreviewListTitle: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  postPreviewListTitle,
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  loadMoreButtonLabel
}) => (
  <LayoutTemplate>
    <Box px="m" pb="xl" className="content-container">
      <Heading size="m" my="l" as="p">
        {postPreviewListTitle}
      </Heading>
      <PostPreviewList
        posts={posts}
        textNumberOfItems={textNumberOfItems}
        percentageOfItemDisplayed={percentageOfItemDisplayed}
        loadMoreButtonLabel={loadMoreButtonLabel}
      />
    </Box>
  </LayoutTemplate>
);

import React from 'react';

import {
  Box,
  Heading,
  PostPreviewList,
  PostPreviewListProps
} from '../../components';
import { LayoutTemplate, LayoutTemplateProps } from '../../templates';

export interface HomePageProps
  extends LayoutTemplateProps,
    PostPreviewListProps {
  postPreviewListTitle: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  postPreviewListTitle,
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  loadMoreButtonLabel,
  headerProps,
  footerProps
}) => (
  <LayoutTemplate headerProps={headerProps} footerProps={footerProps}>
    <Box as="main" className="container-main">
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

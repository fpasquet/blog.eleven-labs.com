import React from 'react';

import {
  Box,
  PostPreviewList,
  PostPreviewListProps,
  Text
} from '../../components';
import { LayoutTemplate, LayoutTemplateProps } from '../../templates';

export interface PostListPageProps
  extends Omit<LayoutTemplateProps, 'children'>,
    PostPreviewListProps {
  postPreviewListTitle: string;
}

export const PostListPage: React.FC<PostListPageProps> = ({
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
      <Text my="l" size={{ xs: 'm', md: 'l' }} weight="medium">
        {postPreviewListTitle}
      </Text>
      <PostPreviewList
        posts={posts}
        textNumberOfItems={textNumberOfItems}
        percentageOfItemDisplayed={percentageOfItemDisplayed}
        loadMoreButtonLabel={loadMoreButtonLabel}
      />
    </Box>
  </LayoutTemplate>
);

import React from 'react';

import {
  Box,
  Divider,
  PostPreviewList,
  PostPreviewListProps,
  SubHeader,
  SubHeaderProps,
  Text
} from '../../components';
import {
  NewsletterBlock,
  NewsletterBlockProps
} from '../../components/Molecules/NewsletterBlock';
import { LayoutTemplate, LayoutTemplateProps } from '../../templates';

export interface PostListPageProps
  extends Omit<LayoutTemplateProps, 'children'>,
    PostPreviewListProps,
    SubHeaderProps {
  postPreviewListTitle: string;
  newsletterBlockProps: NewsletterBlockProps;
}

export const PostListPage: React.FC<PostListPageProps> = ({
  introBlock,
  choiceCategoryLabel,
  choiceCategories,
  choiceCategoryActive,
  postPreviewListContainerProps,
  postPreviewListTitle,
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  loadMoreButtonLabel,
  onLoadMore,
  newsletterBlockProps,
  headerProps,
  footerProps
}) => (
  <LayoutTemplate headerProps={headerProps} footerProps={footerProps}>
    <Divider variant="neutral" m="0" />
    <SubHeader
      introBlock={introBlock}
      choiceCategories={choiceCategories}
      choiceCategoryLabel={choiceCategoryLabel}
      choiceCategoryActive={choiceCategoryActive}
    />
    <Box as="main" className="container-content">
      <Text mb="l" size={{ xs: 'm', md: 'l' }} weight="medium">
        {postPreviewListTitle}
      </Text>
      <PostPreviewList
        postPreviewListContainerProps={postPreviewListContainerProps}
        posts={posts}
        textNumberOfItems={textNumberOfItems}
        percentageOfItemDisplayed={percentageOfItemDisplayed}
        loadMoreButtonLabel={loadMoreButtonLabel}
        onLoadMore={onLoadMore}
      />
      <NewsletterBlock my={{ xs: 'xl', md: 'xxl' }} {...newsletterBlockProps} />
    </Box>
  </LayoutTemplate>
);

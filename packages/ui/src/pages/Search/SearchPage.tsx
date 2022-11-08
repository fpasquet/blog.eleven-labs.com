import React from 'react';

import {
  BackLink,
  Box,
  BoxProps,
  Divider,
  LinkProps,
  PostPreviewList,
  PostPreviewListProps,
  Text
} from '../../components';
import {
  NewsletterBlock,
  NewsletterBlockProps
} from '../../components/Molecules/NewsletterBlock';
import {
  SearchNotFound,
  SearchNotFoundProps
} from '../../components/Molecules/SearchNotFound';
import { LayoutTemplate, LayoutTemplateProps } from '../../templates';

export interface SearchPageProps
  extends Omit<LayoutTemplateProps, 'children'>,
    PostPreviewListProps {
  backLinkLabel: string;
  backLinkProps: Omit<LinkProps, 'children'>;
  numberOfSearchLabel: string;
  description: string;
  searchNotFoundProps: SearchNotFoundProps;
  newsletterBlockProps: NewsletterBlockProps;
  searchResultListContainerProps?: BoxProps;
}

export const SearchPage: React.FC<SearchPageProps> = ({
  backLinkLabel,
  backLinkProps,
  postPreviewListContainerProps = {},
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  loadMoreButtonLabel,
  onLoadMore,
  numberOfSearchLabel,
  description,
  searchNotFoundProps,
  newsletterBlockProps,
  headerProps,
  footerProps,
  searchResultListContainerProps = {}
}) => (
  <LayoutTemplate headerProps={headerProps} footerProps={footerProps}>
    <Box as="main" className="container-content">
      <BackLink label={backLinkLabel} {...backLinkProps} />
      <Box {...searchResultListContainerProps}>
        {posts.length === 0 ? (
          <SearchNotFound {...searchNotFoundProps} />
        ) : (
          <>
            <Text
              mt={{ xs: 'm' }}
              weight="medium"
              size={{ xs: 'l', md: 'xxl' }}
            >
              {numberOfSearchLabel}
            </Text>
            <Text size={{ xs: 'xxs', md: 'xs' }}>{description}</Text>
            <Divider mt={{ xs: 'xs' }} mx="0" variant="search" />
            <PostPreviewList
              postPreviewListContainerProps={{
                ...postPreviewListContainerProps,
                mt: { xs: 'l', md: 'm' }
              }}
              posts={posts}
              textNumberOfItems={textNumberOfItems}
              percentageOfItemDisplayed={percentageOfItemDisplayed}
              loadMoreButtonLabel={loadMoreButtonLabel}
              onLoadMore={onLoadMore}
            />
          </>
        )}
      </Box>
      <NewsletterBlock my={{ xs: 'xl', md: 'xxl' }} {...newsletterBlockProps} />
    </Box>
  </LayoutTemplate>
);

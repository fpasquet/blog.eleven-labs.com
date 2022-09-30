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
} from '../../';
import {
  SearchNotFound,
  SearchNotFoundProps
} from '../../Molecules/SearchNotFound';

export interface SearchResultListProps
  extends Omit<PostPreviewListProps, 'postPreviewListContainerProps'> {
  backLinkLabel: string;
  backLinkProps: Omit<LinkProps, 'children'>;
  numberOfSearchLabel: string;
  description: string;
  searchNotFoundProps: SearchNotFoundProps;
  searchResultListContainerProps?: BoxProps;
}

export const SearchResultList: React.FC<SearchResultListProps> = ({
  backLinkLabel,
  backLinkProps,
  numberOfSearchLabel,
  description,
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  loadMoreButtonLabel,
  onLoadMore,
  searchNotFoundProps,
  searchResultListContainerProps = {}
}) => (
  <Box className="container-content">
    <BackLink label={backLinkLabel} {...backLinkProps} />
    <Box {...searchResultListContainerProps}>
      {posts.length === 0 ? (
        <SearchNotFound {...searchNotFoundProps} />
      ) : (
        <>
          <Text mt={{ xs: 'm' }} weight="medium" size={{ xs: 'l', md: 'xxl' }}>
            {numberOfSearchLabel}
          </Text>
          <Text size={{ xs: 'xxs', md: 'xs' }}>{description}</Text>
          <Divider mt={{ xs: 'xs' }} mx="0" variant="search" />
          <PostPreviewList
            postPreviewListContainerProps={{
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
  </Box>
);

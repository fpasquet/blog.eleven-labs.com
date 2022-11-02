import { PostPreviewList } from '@eleven-labs/blog-ui';
import React from 'react';

import { StaticCache, usePostPreviewListProps } from '../../hooks/usePostPreviewListProps';

export const PostPreviewListContainer: React.FC = () => {
  const cache = (window as unknown as { staticCache: StaticCache }).staticCache;
  const postPreviewListProps = usePostPreviewListProps({
    allPosts: cache.posts,
    loadMoreButtonLabel:
      cache.loadMoreButtonLabel,
    numberOfPostsDisplayedLabel: cache.numberOfPostsDisplayedLabel,
    postLinkProps: ({ path }) => ({
      as: 'a',
      href: path
    }),
    translateTextNumberOfItems: ({ numberOfPosts, numberOfPostsDisplayed }) =>
      cache.numberOfPostsDisplayedLabel
        .replace('numberOfPostsDisplayed', numberOfPostsDisplayed.toString())
        .replace('numberOfPosts', numberOfPosts.toString())
  });

  return <PostPreviewList {...postPreviewListProps} />;
};

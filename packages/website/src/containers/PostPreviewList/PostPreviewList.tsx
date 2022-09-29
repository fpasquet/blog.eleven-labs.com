import { PostPreviewList } from '@eleven-labs/blog-ui';
import React from 'react';

import { usePostPreviewListProps } from '../../hooks/usePostPreviewListProps';
import { StaticCache } from '../../types';

export const PostPreviewListContainer: React.FC = () => {
  const cache: StaticCache = window.staticCache;
  const postPreviewListProps = usePostPreviewListProps({
    allPosts: cache.posts,
    loadMoreButtonLabel:
      cache.translations.pages.post_list.load_more_button_label,
    postLinkProps: ({ path }) => ({
      as: 'a',
      href: path
    }),
    translateTextNumberOfItems: ({ numberOfPosts, numberOfPostsDisplayed }) =>
      cache.translations.pages.post_list.number_of_posts_displayed_label
        .replace('numberOfPostsDisplayed', numberOfPostsDisplayed.toString())
        .replace('numberOfPosts', numberOfPosts.toString())
  });

  return <PostPreviewList {...postPreviewListProps} />;
};

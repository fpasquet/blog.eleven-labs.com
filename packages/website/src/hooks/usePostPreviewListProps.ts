import { PostPreviewListProps } from '@eleven-labs/blog-ui';
import React from 'react';

import { NUMBER_OF_ITEMS_PER_PAGE } from '../constants';
import { StaticCache } from '../types';

export interface UsePostPreviewListOptions {
  allPosts: StaticCache['posts'];
  translateTextNumberOfItems: (options: {
    numberOfPostsDisplayed: number;
    numberOfPosts: number;
  }) => string;
  loadMoreButtonLabel: string;
  postLinkProps: (options: {
    path: string;
  }) => PostPreviewListProps['posts'][0]['postLinkProps'];
}

export const usePostPreviewListProps = ({
  allPosts,
  translateTextNumberOfItems,
  loadMoreButtonLabel,
  postLinkProps
}: UsePostPreviewListOptions): PostPreviewListProps => {
  const numberOfPosts = allPosts.length;
  const [posts, setPosts] = React.useState<
    UsePostPreviewListOptions['allPosts']
  >(allPosts.slice(0, NUMBER_OF_ITEMS_PER_PAGE + 1));
  const [hasPagination, setHasPagination] = React.useState<boolean>(
    numberOfPosts > NUMBER_OF_ITEMS_PER_PAGE
  );
  const numberOfPostsDisplayed = posts.length;
  const percentageOfItemDisplayed = Math.ceil(
    (numberOfPostsDisplayed / numberOfPosts) * 100
  );

  React.useEffect(() => {
    setPosts(allPosts.slice(0, NUMBER_OF_ITEMS_PER_PAGE + 1));
  }, [allPosts]);

  let paginationProps: Pick<
    PostPreviewListProps,
    'textNumberOfItems' | 'percentageOfItemDisplayed' | 'loadMoreButtonLabel'
  > = {};
  if (hasPagination) {
    paginationProps = {
      textNumberOfItems: translateTextNumberOfItems({
        numberOfPostsDisplayed: numberOfPostsDisplayed - 1,
        numberOfPosts
      }),
      percentageOfItemDisplayed,
      loadMoreButtonLabel
    };
  }

  const onLoadMore = React.useCallback(() => {
    if (numberOfPostsDisplayed === allPosts.length) {
      setHasPagination(false);
      return;
    }
    setPosts((prevPosts) => [
      ...prevPosts,
      ...allPosts.slice(
        numberOfPostsDisplayed,
        numberOfPostsDisplayed + NUMBER_OF_ITEMS_PER_PAGE
      )
    ]);
  }, [allPosts, numberOfPostsDisplayed, setPosts, setHasPagination]);

  return {
    percentageOfItemDisplayed,
    posts: posts.map(({ path, ...post }) => {
      return {
        ...post,
        postLinkProps: postLinkProps({ path })
      };
    }),
    ...paginationProps,
    onLoadMore
  };
};

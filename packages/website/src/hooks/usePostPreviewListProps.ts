import { PostPreviewListProps } from '@eleven-labs/blog-ui';
import React, { useMemo } from 'react';

import { NUMBER_OF_ITEMS_PER_PAGE } from '../constants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface UsePostPreviewListOptions {
  allPosts: ({ path: string } & Pick<
    PostPreviewListProps['posts'][0],
    'slug' | 'title' | 'excerpt' | 'date' | 'readingTime' | 'authors'
    >)[];
}

export const usePostPreviewListProps = ({ allPosts }: UsePostPreviewListOptions):
  PostPreviewListProps => {
  const { t } = useTranslation();
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
    setHasPagination(numberOfPosts > NUMBER_OF_ITEMS_PER_PAGE);
    setPosts(allPosts.slice(0, NUMBER_OF_ITEMS_PER_PAGE + 1));
  }, [allPosts]);

  const paginationProps = useMemo<Pick<
    PostPreviewListProps,
    'textNumberOfItems' | 'percentageOfItemDisplayed' | 'loadMoreButtonLabel'
    >>(() => (hasPagination ? {
    textNumberOfItems: t('pages.post_list.number_of_posts_displayed_label', {
      numberOfPosts,
      numberOfPostsDisplayed: numberOfPostsDisplayed - 1
    }),
    percentageOfItemDisplayed,
    loadMoreButtonLabel: t('pages.post_list.load_more_button_label')
  }: {}), [hasPagination, numberOfPosts, percentageOfItemDisplayed]);

  const onLoadMore = React.useCallback(() => {
    const nextAllPosts = [
      ...posts,
      ...allPosts.slice(
        numberOfPostsDisplayed,
        numberOfPostsDisplayed + NUMBER_OF_ITEMS_PER_PAGE
      )
    ];
    setPosts(nextAllPosts);
    if (allPosts.length === nextAllPosts.length) {
      setHasPagination(false);
    }
  }, [allPosts, numberOfPostsDisplayed, setPosts, setHasPagination]);

  return {
    percentageOfItemDisplayed,
    posts: posts.map(({ path, ...post }) => ({
      ...post,
      postLinkProps: {
        as: Link,
        to: path
      }
    })),
    ...paginationProps,
    onLoadMore,
  };
};

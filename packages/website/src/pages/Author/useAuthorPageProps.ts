import { AuthorPageProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Link, useParams } from 'react-router-dom';

import { PATHS } from '../../constants';
import authorsData from '../../data/authors.json';
import postsData from '../../data/posts.json';
import { pick } from '../../helpers/objectHelper';
import { transformAuthorData } from '../../helpers/transformAuthorData';
import { transformPostData } from '../../helpers/transformPostData';
import { useNewsletterBlockProps } from '../../hooks/useNewsletterBlockProps';
import { usePostPreviewListProps } from '../../hooks/usePostPreviewListProps';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { AuthorData, PostData } from '../../types';

export const useAuthorPageProps = (): AuthorPageProps & { staticCache: any; } => {
  const { lang = 'fr', authorUsername } = useParams<{
    lang: string;
    authorUsername: string;
  }>();
  const { t } = useTranslation();
  const { staticCache: staticCacheLayout, ...layoutTemplateProps } = useLayoutTemplateProps();
  const newsletterBlockProps = useNewsletterBlockProps();

  const authorData = (authorsData as AuthorData[]).find(
    (currentAuthor) => currentAuthor.username === authorUsername
  ) as AuthorData;

  const postsByAuthorAndLang = React.useMemo(
    () =>
      (postsData as PostData[])
        .filter(
          (post) =>
            post.lang === lang &&
            authorUsername &&
            post.authors.includes(authorUsername)
        )
        .map((postData) =>
          pick(transformPostData(postData, lang), [
            'path',
            'slug',
            'title',
            'excerpt',
            'date',
            'readingTime',
            'authors'
          ])
        ),
    [lang, authorUsername]
  );

  const { staticCache: staticCachePostPreviewList, ...postPreviewListProps } = usePostPreviewListProps({
    allPosts: postsByAuthorAndLang,
    loadMoreButtonLabel: t('pages.post_list.load_more_button_label'),
    numberOfPostsDisplayedLabel: t(
      'pages.post_list.number_of_posts_displayed_label',
      {
        numberOfPosts: 'numberOfPosts',
        numberOfPostsDisplayed: 'numberOfPostsDisplayed'
      }
    ),
    postLinkProps: ({ path }) => ({
      as: Link,
      to: path
    }),
    translateTextNumberOfItems: ({ numberOfPosts, numberOfPostsDisplayed }) =>
      t('pages.post_list.number_of_posts_displayed_label', {
        numberOfPosts,
        numberOfPostsDisplayed
      })
  });

  return {
    ...layoutTemplateProps,
    backLinkLabel: t('common.back'),
    backLinkProps: {
      as: Link,
      to: generatePath(PATHS.HOME, { lang })
    },
    author: transformAuthorData(authorData),
    newsletterBlockProps,
    postPreviewListContainerProps: {
      id: 'post-preview-list-container'
    },
    postPreviewListTitle: t('pages.author.post_preview_list_title'),
    ...postPreviewListProps,
    staticCache: {
      ...staticCacheLayout,
      ...staticCachePostPreviewList,
    }
  };
};

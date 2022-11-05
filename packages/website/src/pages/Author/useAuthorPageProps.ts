import { AuthorPageProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import authorsData from '../../data/authors.json';
import postsData from '../../data/posts.json';
import { pick } from '../../helpers/objectHelper';
import { transformAuthorData } from '../../helpers/transformAuthorData';
import { transformPostData } from '../../helpers/transformPostData';
import { useNewsletterBlockProps } from '../../hooks/useNewsletterBlockProps';
import { usePostPreviewListProps } from '../../hooks/usePostPreviewListProps';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { AuthorData, PostData } from '../../types';
import { useBackLinkProps } from '../../hooks/useBackLinkProps';

export const useAuthorPageProps = (): AuthorPageProps => {
  const { lang = 'fr', authorUsername } = useParams<{
    lang: string;
    authorUsername: string;
  }>();
  const { t } = useTranslation();
  const layoutTemplateProps = useLayoutTemplateProps();
  const backLinkProps = useBackLinkProps();
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

  const postPreviewListProps = usePostPreviewListProps({
    allPosts: postsByAuthorAndLang,
  });

  return {
    ...layoutTemplateProps,
    ...backLinkProps,
    author: transformAuthorData(authorData),
    newsletterBlockProps,
    postPreviewListTitle: t('pages.author.post_preview_list_title'),
    ...postPreviewListProps,
  };
};

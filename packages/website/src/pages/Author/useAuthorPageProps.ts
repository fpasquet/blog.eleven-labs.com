import { AuthorPageProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useNewsletterBlockProps } from '../../hooks/useNewsletterBlockProps';
import { usePostPreviewListProps } from '../../hooks/usePostPreviewListProps';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { useBackLinkProps } from '../../hooks/useBackLinkProps';
import { useDataContext } from '../../contexts/data';
import { DataContextInterface } from '../../contexts/data/context';

export const useAuthorPageProps = (): AuthorPageProps => {
  const { lang = 'fr', authorUsername } = useParams<{
    lang: string;
    authorUsername: string;
  }>();
  const { t } = useTranslation();
  const { posts, authors } = useDataContext();
  const layoutTemplateProps = useLayoutTemplateProps();
  const backLinkProps = useBackLinkProps();
  const newsletterBlockProps = useNewsletterBlockProps();

  const postsByAuthorAndLang = React.useMemo(
    () =>
      posts
        .filter(
          (post) =>
            post.lang === lang &&
            authorUsername &&
            post.authors.find(author => author.username == authorUsername)
        ),
    [lang, authorUsername]
  );

  const postPreviewListProps = usePostPreviewListProps({
    allPosts: postsByAuthorAndLang,
  });

  return {
    ...layoutTemplateProps,
    ...backLinkProps,
    author: authors.find(
      (currentAuthor) => currentAuthor.username === authorUsername
    ) as DataContextInterface['authors'][0],
    newsletterBlockProps,
    postPreviewListTitle: t('pages.author.post_preview_list_title'),
    ...postPreviewListProps,
  };
};

import { PostPageProps } from '@eleven-labs/blog-ui';
import { useTranslation } from 'react-i18next';
import { generatePath, Link, useParams } from 'react-router-dom';

import { PATHS } from '../../constants';
import { intersection } from '../../helpers/objectHelper';
import { useNewsletterBlockProps } from '../../hooks/useNewsletterBlockProps';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { useBackLinkProps } from '../../hooks/useBackLinkProps';
import { useDataContext } from '../../contexts/data';
import { DataContextInterface } from '../../contexts/data/context';

export const usePostPageProps = (): PostPageProps => {
  const { lang = 'fr', slug } = useParams<{ lang: string; slug: string }>();
  const { t } = useTranslation();
  const { posts } = useDataContext();
  const layoutTemplateProps = useLayoutTemplateProps();
  const backLinkProps = useBackLinkProps();
  const newsletterBlockProps = useNewsletterBlockProps();

  const post = posts.find((currentPost) =>
    currentPost.lang === lang && currentPost.slug === slug
  ) as DataContextInterface['posts'][0];

  const relatedPostsByCategory = posts
    .filter(
      (currentPost) =>
        currentPost.lang === lang &&
        currentPost.slug !== slug &&
        intersection(post.categories, currentPost.categories).length > 0
    )
    .slice(0, 3);
  const relatedPostsByAuthor = posts
    .filter(
      (currentPost) =>
        currentPost.lang === lang &&
        currentPost.slug !== slug &&
        intersection(post.authors, currentPost.authors).length > 0
    )
    .slice(0, 3);

  const relatedPosts = [...relatedPostsByCategory, ...relatedPostsByAuthor]
    .slice(0, 3)
    .map(post => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      readingTime: post.readingTime,
      authors: post.authors,
      postLinkProps: {
        as: Link,
        to: generatePath(PATHS.POST, { lang, slug: post.slug })
      }
    }));

  return {
    ...layoutTemplateProps,
    ...backLinkProps,
    postFooterTitle: t('pages.post.post_footer_title'),
    ...post,
    newsletterBlockProps,
    relatedPostListTitle: t('pages.post.related_post_list_title'),
    relatedPosts,
    authorLinkProps: (username: string) => ({
      as: Link,
      to: generatePath(PATHS.AUTHOR, {
        lang,
        authorUsername: username
      })
    }),
  };
};

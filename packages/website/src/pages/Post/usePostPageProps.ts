import { PostPageProps } from '@eleven-labs/blog-ui';
import { useTranslation } from 'react-i18next';
import { generatePath, Link, useParams } from 'react-router-dom';

import { PATHS } from '../../constants';
import postsData from '../../data/posts.json';
import { intersection } from '../../helpers/objectHelper';
import { transformPostData } from '../../helpers/transformPostData';
import { useNewsletterBlockProps } from '../../hooks/useNewsletterBlockProps';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { PostData } from '../../types';

export const usePostPageProps = (): PostPageProps => {
  const { lang = 'fr', slug } = useParams<{ lang: string; slug: string }>();
  const { t } = useTranslation();
  const layoutTemplateProps = useLayoutTemplateProps();
  const newsletterBlockProps = useNewsletterBlockProps();
  const allPostData = postsData as PostData[];
  const postData = allPostData.find(
    (currentPostData) =>
      currentPostData.lang === lang && currentPostData.slug === slug
  ) as PostData;
  const post = transformPostData(postData, lang);

  const relatedPostsByCategory = allPostData
    .filter(
      (currentPostData) =>
        currentPostData.lang === lang &&
        currentPostData.slug !== slug &&
        intersection(post.categories, currentPostData.categories).length > 0
    )
    .slice(0, 3);
  const relatedPostsByAuthor = allPostData
    .filter(
      (currentPostData) =>
        currentPostData.lang === lang &&
        currentPostData.slug !== slug &&
        intersection(post.authors, currentPostData.authors).length > 0
    )
    .slice(0, 3);

  const relatedPosts = [...relatedPostsByCategory, ...relatedPostsByAuthor]
    .slice(0, 3)
    .map((postData) => {
      const post = transformPostData(postData, lang);
      return {
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
      };
    });

  return {
    ...layoutTemplateProps,
    postFooterTitle: t('pages.post.post_footer_title'),
    ...post,
    backLinkLabel: t('common.back'),
    backLinkProps: {
      as: Link,
      to: generatePath(PATHS.HOME, { lang })
    },
    newsletterBlockProps,
    relatedPostListTitle: t('pages.post.related_post_list_title'),
    relatedPosts,
    authorLinkProps: (username: string) => ({
      as: Link,
      to: generatePath(PATHS.AUTHOR, {
        lang,
        authorUsername: username
      })
    })
  };
};

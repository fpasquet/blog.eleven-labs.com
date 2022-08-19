import { HomePageProps } from '@eleven-labs/blog-ui';
import { format } from 'date-fns';
import localeDateEn from 'date-fns/locale/en-US';
import localeDateFr from 'date-fns/locale/fr';
import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import { NUMBER_OF_ITEMS_PER_PAGE, PATHS } from '../../constants';
import authorsData from '../../data/authors.json';
import postsData from '../../data/posts.json';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { AuthorData, PostData } from '../../types';

export const useHomePageProps = (): HomePageProps => {
  const { lang = 'fr' } = useParams<{ lang?: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const layoutTemplateProps = useLayoutTemplateProps();

  const postsByLang = (postsData as PostData[]).filter(
    (post) => post.lang === lang
  );
  const numberOfPosts = postsByLang.length;
  const posts = postsByLang
    .filter((post) => post?.lang === lang)
    .slice(0, NUMBER_OF_ITEMS_PER_PAGE + 1)
    .map((post) => {
      const authors = post.authors.map((username: string) =>
        (authorsData as AuthorData[]).find(
          (author) => author.username === username
        )
      );
      const articlePath = generatePath(PATHS.POST, { lang, slug: post.slug });

      return {
        slug: 'post',
        title: post.title,
        excerpt: post.excerpt,
        date: format(new Date(post.date), 'PP', {
          locale: lang === 'fr' ? localeDateFr : localeDateEn
        }),
        readingTime: `${post.readingTimeInMinutes}mn`,
        authors: authors.map((author) => author?.name),
        articleLinkProps: {
          href: articlePath,
          onClick: (e: MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            navigate(articlePath);
          }
        },
        authorLinkProps: (authorName: string) => {
          const username = authors.find(
            (author) => author?.name === authorName
          )?.username;
          const path = generatePath(PATHS.AUTHOR, { lang, name: username });
          return {
            href: path,
            onClick: (e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              navigate(path);
            }
          };
        }
      };
    });

  const numberOfPostsDisplayed = NUMBER_OF_ITEMS_PER_PAGE;
  const percentageOfItemDisplayed = Math.ceil(
    (numberOfPostsDisplayed / numberOfPosts) * 100
  );

  return {
    ...layoutTemplateProps,
    postPreviewListTitle: t('pages.home.post_preview_list_title'),
    posts,
    textNumberOfItems: t('pages.home.number_of_posts_displayed_label', {
      numberOfPostsDisplayed: numberOfPostsDisplayed,
      numberOfPosts
    }),
    percentageOfItemDisplayed,
    loadMoreButtonLabel: t('pages.home.load_more_button_label')
  };
};

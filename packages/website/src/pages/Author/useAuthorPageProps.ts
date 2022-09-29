import { AuthorPageProps, PostPreviewListProps } from '@eleven-labs/blog-ui';
import { useTranslation } from 'react-i18next';
import { generatePath, Link, useParams } from 'react-router-dom';

import { NUMBER_OF_ITEMS_PER_PAGE, PATHS } from '../../constants';
import authorsData from '../../data/authors.json';
import postsData from '../../data/posts.json';
import { transformAuthorData } from '../../helpers/transformAuthorData';
import { transformPostData } from '../../helpers/transformPostData';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { AuthorData, PostData } from '../../types';

export const useAuthorPageProps = (): AuthorPageProps => {
  const { lang = 'fr', authorUsername } = useParams<{
    lang: string;
    authorUsername: string;
  }>();
  const { t } = useTranslation();
  const layoutTemplateProps = useLayoutTemplateProps();

  const authorData = (authorsData as AuthorData[]).find(
    (currentAuthor) => currentAuthor.username === authorUsername
  ) as AuthorData;
  const postsByAuthorAndLang = (postsData as PostData[]).filter(
    (post) =>
      post.lang === lang &&
      authorUsername &&
      post.authors.includes(authorUsername)
  );

  const numberOfPosts = postsByAuthorAndLang.length;
  const posts: AuthorPageProps['posts'] = postsByAuthorAndLang
    .filter((post) => post?.lang === lang)
    .slice(0, NUMBER_OF_ITEMS_PER_PAGE + 1)
    .map((post) => ({
      ...transformPostData(post, lang),
      postLinkProps: {
        as: Link,
        to: generatePath(PATHS.POST, { lang, slug: post.slug })
      }
    }));

  const numberOfPostsDisplayed = NUMBER_OF_ITEMS_PER_PAGE;
  const percentageOfItemDisplayed = Math.ceil(
    (numberOfPostsDisplayed / numberOfPosts) * 100
  );

  const hasPagination = numberOfPosts > NUMBER_OF_ITEMS_PER_PAGE;
  let paginationProps: Pick<
    PostPreviewListProps,
    'textNumberOfItems' | 'percentageOfItemDisplayed' | 'loadMoreButtonLabel'
  > = {};
  if (hasPagination) {
    paginationProps = {
      textNumberOfItems: t('pages.post_list.number_of_posts_displayed_label', {
        numberOfPostsDisplayed: numberOfPostsDisplayed,
        numberOfPosts
      }),
      percentageOfItemDisplayed,
      loadMoreButtonLabel: t('pages.post_list.load_more_button_label')
    };
  }

  return {
    ...layoutTemplateProps,
    backLinkLabel: t('common.back'),
    backLinkProps: {
      as: Link,
      to: generatePath(PATHS.HOME, { lang })
    },
    author: transformAuthorData(authorData),
    postPreviewListContainerProps: {
      id: 'post-preview-list-container'
    },
    postPreviewListTitle: t('pages.author.post_preview_list_title'),
    posts,
    ...paginationProps
  };
};

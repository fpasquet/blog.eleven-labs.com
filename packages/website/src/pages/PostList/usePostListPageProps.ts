import { PostListPageProps, PostPreviewListProps } from '@eleven-labs/blog-ui';
import { useTranslation } from 'react-i18next';
import { generatePath, Link, useParams } from 'react-router-dom';

import { NUMBER_OF_ITEMS_PER_PAGE, PATHS } from '../../constants';
import postsData from '../../data/posts.json';
import { transformPostData } from '../../helpers/transformPostData';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { PostData } from '../../types';

export const usePostListPageProps = (): PostListPageProps => {
  const { lang = 'fr', categoryName } = useParams<{
    lang?: string;
    categoryName?: string;
  }>();
  const { t } = useTranslation();
  const layoutTemplateProps = useLayoutTemplateProps();

  const postsByLang = (postsData as PostData[]).filter(
    (post) =>
      post.lang === lang &&
      (categoryName ? post.categories.includes(categoryName) : true)
  );

  const numberOfPosts = postsByLang.length;
  const posts: PostListPageProps['posts'] = postsByLang
    .filter((post) => post?.lang === lang)
    .slice(0, NUMBER_OF_ITEMS_PER_PAGE + 1)
    .map((postData) => {
      const post = transformPostData(postData, lang);
      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        readingTime: post.readingTime,
        authors: post.authors,
        articleLinkProps: {
          as: Link,
          to: generatePath(PATHS.POST, { lang, slug: post.slug })
        }
      };
    });

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
    postPreviewListTitle: categoryName
      ? t('pages.post_list.post_preview_list_category_title', { categoryName })
      : t('pages.post_list.post_preview_list_title'),
    posts,
    ...paginationProps
  };
};

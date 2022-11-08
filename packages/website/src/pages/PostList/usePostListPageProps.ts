import { PostListPageProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Link, useParams } from 'react-router-dom';

import { CATEGORIES, PATHS } from '../../constants';
import { useNewsletterBlockProps } from '../../hooks/useNewsletterBlockProps';
import { usePostPreviewListProps } from '../../hooks/usePostPreviewListProps';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { useDataContext } from '../../contexts/data';
import { DataContextInterface } from '../../contexts/data/context';

export const usePostListPageProps = (): PostListPageProps => {
  const { lang = 'fr', categoryName } = useParams<{
    lang?: string;
    categoryName?: string;
  }>();
  const { t } = useTranslation();
  const { posts } = useDataContext();
  const layoutTemplateProps = useLayoutTemplateProps();
  const newsletterBlockProps = useNewsletterBlockProps();

  const postsByLang = React.useMemo<DataContextInterface['posts']>(() =>
      posts
        .filter(
          (post) =>
            post.lang === lang &&
            (categoryName ? post.categories.includes(categoryName) : true)
        ),
    [lang, categoryName]
  );

  const postPreviewListProps = usePostPreviewListProps({ allPosts: postsByLang });

  return {
    ...layoutTemplateProps,
    introBlock: {
      title: t('header.intro_block.title'),
      description: t('header.intro_block.description')
    },
    choiceCategoryLabel: t('header.choice_category_label'),
    choiceCategoryActive: categoryName,
    choiceCategories: [
      {
        as: Link,
        name: 'all',
        label: t('categories.all'),
        to: generatePath(PATHS.HOME, { lang })
      },
      ...CATEGORIES.filter((currentCategoryName) =>
        posts.find(
          (post) =>
            post.lang === lang && post.categories.includes(currentCategoryName)
        )
      ).map((currentCategoryName) => ({
        as: Link,
        name: currentCategoryName,
        label: t(`categories.${currentCategoryName}`),
        to: generatePath(PATHS.CATEGORY, {
          lang,
          categoryName: currentCategoryName
        })
      }))
    ],
    newsletterBlockProps,
    postPreviewListTitle: categoryName
      ? t('pages.post_list.post_preview_list_category_title', { categoryName })
      : t('pages.post_list.post_preview_list_title'),
    ...postPreviewListProps,
  };
};

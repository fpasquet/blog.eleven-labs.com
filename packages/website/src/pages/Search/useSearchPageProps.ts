import React, { useState } from 'react';
import { SearchPageProps } from '@eleven-labs/blog-ui';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useNewsletterBlockProps } from '../../hooks/useNewsletterBlockProps';
import { UsePostPreviewListOptions, usePostPreviewListProps } from '../../hooks/usePostPreviewListProps';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { useBackLinkProps } from '../../hooks/useBackLinkProps';
import { algoliaSearchIndex } from '../../helpers/algolia';
import postsData from '../../data/posts.json';
import { PostData } from '../../types';
import { pick } from '../../helpers/objectHelper';
import { transformPostData } from '../../helpers/transformPostData';

export const useSearchPageProps = (): SearchPageProps => {
  const { lang = 'fr', search } = useParams<{
    lang?: string;
    search?: string;
  }>();
  const { t } = useTranslation();
  const layoutTemplateProps = useLayoutTemplateProps({ search });
  const backLinkProps = useBackLinkProps();
  const newsletterBlockProps = useNewsletterBlockProps();
  const [postsBySearch, setPostsBySearch] = useState<UsePostPreviewListOptions['allPosts']>([]);

  React.useEffect(() => {
      algoliaSearchIndex
        .search<{ slug: string; title: string; excerpt: string }>(
          search as string,
          { hitsPerPage: 1000, facetFilters: [`lang:${lang}`] }
        )
        .then(({ hits }) => {
          const slugs = hits.map(hit => hit.slug);
          const currentPostBySearch = (postsData as PostData[])
            .filter((post) => slugs.includes(post.slug))
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
            );
          setPostsBySearch(currentPostBySearch);
        });
  }, [search]);

  const postPreviewListProps = usePostPreviewListProps({ allPosts: postsBySearch });

  return {
    ...layoutTemplateProps,
    ...backLinkProps,
    numberOfSearchLabel: t('pages.search.number_of_search_label', { numberOfHits: postsBySearch.length }),
    description: t('pages.search.description'),
    newsletterBlockProps,
    searchNotFoundProps: {
      title: t('pages.search.search_not_found_title'),
      description: t('pages.search.search_not_found_description')
    },
    ...postPreviewListProps,
  };
};

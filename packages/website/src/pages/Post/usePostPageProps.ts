import { PostPageProps } from '@eleven-labs/blog-ui';
import { useParams } from 'react-router-dom';

import postsData from '../../data/posts.json';
import { transformPostData } from '../../helpers/transformPostData';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { PostData } from '../../types';

export const usePostPageProps = (): PostPageProps => {
  const { lang = 'fr', slug } = useParams<{ lang: string; slug: string }>();
  const layoutTemplateProps = useLayoutTemplateProps();
  const postData = (postsData as PostData[]).find(
    (post) => post.lang === lang && post.slug === slug
  ) as PostData;
  const post = transformPostData(postData, lang);

  return {
    ...layoutTemplateProps,
    postFooterTitle: '',
    ...post
  };
};

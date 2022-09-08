import { PostPageProps } from '@eleven-labs/blog-ui';
import { useTranslation } from 'react-i18next';
import { generatePath, Link, useParams } from 'react-router-dom';

import { PATHS } from '../../constants';
import postsData from '../../data/posts.json';
import { transformPostData } from '../../helpers/transformPostData';
import { useLayoutTemplateProps } from '../../hooks/useTemplateProps';
import { PostData } from '../../types';

export const usePostPageProps = (): PostPageProps => {
  const { lang = 'fr', slug } = useParams<{ lang: string; slug: string }>();
  const { t } = useTranslation();
  const layoutTemplateProps = useLayoutTemplateProps();
  const postData = (postsData as PostData[]).find(
    (post) => post.lang === lang && post.slug === slug
  ) as PostData;
  const post = transformPostData(postData, lang);

  return {
    ...layoutTemplateProps,
    postFooterTitle: t('pages.post.post_footer_title'),
    ...post,
    backLinkLabel: t('common.back'),
    backLinkProps: {
      as: Link,
      to: generatePath(PATHS.HOME, { lang })
    },
    authorLinkProps: (username: string) => ({
      as: Link,
      to: generatePath(PATHS.AUTHOR, {
        lang,
        authorUsername: username
      })
    })
  };
};

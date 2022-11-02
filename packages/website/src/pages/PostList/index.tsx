import { PostListPage as PostListPageUI } from '@eleven-labs/blog-ui';
import React from 'react';

import { usePostListPageProps } from './usePostListPageProps';

export const PostListPage: React.FC = () => {
  const { staticCache, ...postListPageProps } = usePostListPageProps();
  return (
    <>
      <PostListPageUI {...postListPageProps} />
      <script
        dangerouslySetInnerHTML={{ __html: `window.staticCache = ${JSON.stringify(staticCache)};` }}
      />
    </>
  );
};

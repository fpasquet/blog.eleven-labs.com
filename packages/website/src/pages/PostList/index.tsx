import { PostListPage as PostListPageUI } from '@eleven-labs/blog-ui';
import React from 'react';

import { usePostListPageProps } from './usePostListPageProps';

export const PostListPage: React.FC = () => {
  const { inlineScript, ...postListPageProps } = usePostListPageProps();

  return (
    <>
      <PostListPageUI {...postListPageProps} />
      {inlineScript && (
        <script dangerouslySetInnerHTML={{ __html: inlineScript }} />
      )}
    </>
  );
};

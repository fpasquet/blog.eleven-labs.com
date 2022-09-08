import { PostPage as PostPageUI } from '@eleven-labs/blog-ui';
import React from 'react';

import { usePostPageProps } from './usePostPageProps';

export const PostPage: React.FC = () => {
  const postPageProps = usePostPageProps();

  return <PostPageUI {...postPageProps} />;
};

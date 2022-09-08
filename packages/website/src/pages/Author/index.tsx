import { AuthorPage as AuthorPageUI } from '@eleven-labs/blog-ui';
import React from 'react';

import { useAuthorPageProps } from './useAuthorPageProps';

export const AuthorPage: React.FC = () => {
  const authorPageProps = useAuthorPageProps();
  return <AuthorPageUI {...authorPageProps} />;
};

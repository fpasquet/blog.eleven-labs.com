import { AuthorPage as AuthorPageUI } from '@eleven-labs/blog-ui';
import React from 'react';

import { useAuthorPageProps } from './useAuthorPageProps';

export const AuthorPage: React.FC = () => {
  const { staticCache, ...authorPageProps } = useAuthorPageProps();
  return (
    <>
      <AuthorPageUI {...authorPageProps} />
      <script
        dangerouslySetInnerHTML={{ __html: `window.staticCache = ${JSON.stringify(staticCache)};` }}
      />
    </>
  );
};

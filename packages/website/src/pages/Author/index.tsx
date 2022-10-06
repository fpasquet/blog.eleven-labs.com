import { AuthorPage as AuthorPageUI } from '@eleven-labs/blog-ui';
import React from 'react';

import { useAuthorPageProps } from './useAuthorPageProps';

export const AuthorPage: React.FC = () => {
  const { inlineScript, ...authorPageProps } = useAuthorPageProps();
  return (
    <>
      <AuthorPageUI {...authorPageProps} />
      {inlineScript && (
        <script dangerouslySetInnerHTML={{ __html: inlineScript }} />
      )}
    </>
  );
};

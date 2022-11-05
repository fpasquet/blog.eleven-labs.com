import { SearchPage as SearchPageUI } from '@eleven-labs/blog-ui';
import React from 'react';

import { useSearchPageProps } from './useSearchPageProps';

export const SearchPage: React.FC = () => {
  const searchPageProps = useSearchPageProps();
  return (<SearchPageUI {...searchPageProps} />);
};

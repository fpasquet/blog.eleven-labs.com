import { HomePage as HomePageUI } from '@eleven-labs/blog-ui';
import React from 'react';

import { useHomePageProps } from './useHomePageProps';

export const HomePage: React.FC = () => {
  const homePageProps = useHomePageProps();

  return <HomePageUI {...homePageProps} />;
};

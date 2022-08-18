import { HomePage as HomePageUI } from '@eleven-labs/blog-ui';
import React from 'react';

import { useHomePageData } from './useHomePageData';

export const HomePage: React.FC = () => {
  const homePageData = useHomePageData();

  return <HomePageUI {...homePageData} />;
};

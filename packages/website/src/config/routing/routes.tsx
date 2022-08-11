import React from 'react';
import { RouteObject } from 'react-router';

import { PATHS } from '../../constants';
import { AuthorPage } from '../../pages/Author';
import { HomePage } from '../../pages/Home';
import { PostPage } from '../../pages/Post';

export const routes: RouteObject[] = [
  {
    path: PATHS.ROOT,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: PATHS.HOME,
        element: <HomePage />
      },
      {
        path: PATHS.PAGINATED_HOME,
        element: <HomePage />
      },
      {
        path: PATHS.POST,
        element: <PostPage />
      },
      {
        path: PATHS.AUTHOR,
        element: <AuthorPage />
      }
    ]
  }
];

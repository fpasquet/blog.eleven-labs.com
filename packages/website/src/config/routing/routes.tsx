import React from 'react';
import { RouteObject } from 'react-router';

import { PATHS } from '../../constants';
import { AuthorPage } from '../../pages/Author';
import { PostPage } from '../../pages/Post';
import { PostListPage } from '../../pages/PostList';

export const routes: RouteObject[] = [
  {
    path: PATHS.ROOT,
    children: [
      {
        index: true,
        element: <PostListPage />
      },
      {
        path: PATHS.HOME,
        element: <PostListPage />
      },
      {
        path: PATHS.POST,
        element: <PostPage />
      },
      {
        path: PATHS.AUTHOR,
        element: <AuthorPage />
      },
      {
        path: PATHS.CATEGORY,
        element: <PostListPage />
      }
    ]
  }
];

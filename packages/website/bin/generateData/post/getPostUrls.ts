import { generatePath } from 'react-router-dom';

import { PostData } from '../../../src/types';
import { getFileData } from '../getFileData';

export const getPostUrls = (path: string): string[] => {
  return getFileData<PostData[]>('posts.json').map<string>((post) =>
    generatePath(path, {
      lang: post.lang,
      slug: post.slug
    })
  );
};

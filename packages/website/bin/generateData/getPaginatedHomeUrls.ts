import { generatePath } from 'react-router-dom';

import {
  AUTHORIZED_LANGUAGES,
  NUMBER_OF_ITEMS_PER_PAGE
} from '../../src/constants';
import { PostData } from '../../src/types';
import { getFileData } from './getFileData';

export const getPaginatedHomeUrls = (path: string): string[] => {
  return AUTHORIZED_LANGUAGES.reduce<string[]>(
    (paginatedHomeUrlsByLang, lang) => {
      const postsByLang = getFileData<PostData[]>('posts.json').filter(
        (post) => post.lang === lang
      );
      const numberOfPages =
        Math.round(postsByLang.length / NUMBER_OF_ITEMS_PER_PAGE) - 1;

      const currentPaginatedHomeUrls = Array.from({
        length: numberOfPages
      }).map((v, index) =>
        generatePath(path, { lang, page: (index + 2).toString() })
      );

      return [...paginatedHomeUrlsByLang, ...currentPaginatedHomeUrls];
    },
    []
  );
};

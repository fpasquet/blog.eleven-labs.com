import { generatePath } from 'react-router-dom';

import { AUTHORIZED_LANGUAGES, CATEGORIES } from '../../../src/constants';
import { PostData } from '../../../src/types';
import { getFileData } from '../getFileData';

export const getCategoryUrls = (path: string): string[] => {
  const postData = getFileData<PostData[]>('posts.json');

  return AUTHORIZED_LANGUAGES.reduce<string[]>((urls, lang) => {
    const categories = CATEGORIES.filter((categoryName) =>
      postData.find(
        (post) => post.lang === lang && post.categories.includes(categoryName)
      )
    );

    urls.push(
      ...categories.map((categoryName) =>
        generatePath(path, {
          lang,
          categoryName
        })
      )
    );

    return urls;
  }, []);
};

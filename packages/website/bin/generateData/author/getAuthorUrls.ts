import { generatePath } from 'react-router-dom';

import { AuthorData, PostData } from '../../../src/types';
import { getFileData } from '../getFileData';

export const getAuthorUrls = (path: string): string[] => {
  const posts = getFileData<PostData[]>('posts.json');
  return getFileData<AuthorData[]>('authors.json').reduce<string[]>(
    (currentAuthorUrls, author) => {
      let langsByAuthor = posts
        .filter((post) => post.authors.includes(author.username))
        ?.map((post) => post.lang);
      langsByAuthor = [...new Set(langsByAuthor)];

      if (langsByAuthor.length > 0) {
        const authorUrlsByLang = langsByAuthor.map((lang) =>
          generatePath(path, {
            lang,
            name: author.username
          })
        );
        currentAuthorUrls.push(...authorUrlsByLang);
      }
      return currentAuthorUrls;
    },
    []
  );
};

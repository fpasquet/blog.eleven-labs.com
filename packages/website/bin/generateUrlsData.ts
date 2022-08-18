import { generatePath } from 'react-router-dom';

import { PATHS } from '../src/constants';
import { getAuthorUrls } from './generateData/author/getAuthorUrls';
import { createFileData } from './generateData/createFileData';
import { getPaginatedHomeUrls } from './generateData/getPaginatedHomeUrls';
import { getPostUrls } from './generateData/post/getPostUrls';

const generateUrlsData = () => {
  console.log('\nurls being generated...\n');

  const urls = Object.entries(PATHS).reduce<string[]>(
    (currentUrls, [name, path]) => {
      switch (name) {
        case 'ROOT':
          currentUrls.push(generatePath(path));
          break;
        case 'HOME':
          currentUrls.push(generatePath(path, { lang: 'en' }));
          break;
        case 'PAGINATED_HOME':
          const paginatedHomeUrls = getPaginatedHomeUrls(path);
          currentUrls.push(...paginatedHomeUrls);
          break;
        case 'POST':
          const postUrls = getPostUrls(path);
          currentUrls.push(...postUrls);
          break;
        case 'AUTHOR':
          const authorUrls = getAuthorUrls(path);
          currentUrls.push(...authorUrls);
          break;
      }
      return currentUrls;
    },
    []
  );

  console.log(`number of generated urls: ${urls.length}\n`);

  createFileData<string[]>({
    fileName: 'urls.json',
    data: urls
  });
};

(() => {
  try {
    generateUrlsData();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit();
  }
})();

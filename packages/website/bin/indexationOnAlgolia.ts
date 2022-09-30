import algoliasearch from 'algoliasearch';

import { PostData } from '../src/types';
import { getFileData } from './generateData/getFileData';

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID as string,
  process.env.ALGOLIA_API_INDEXING_KEY as string
);
const index = client.initIndex(process.env.ALGOLIA_INDEX as string);

interface AlgoliaApiError extends Error {
  name: string;
  message: string;
  status: number;
}

const indexationOnAlglolia = async () => {
  try {
    const posts = getFileData<PostData[]>('posts.json')
      .reduce<Record<string, (Pick<PostData, 'lang' | 'categories' | 'title' | 'date' | 'excerpt'> & { objectID: string; })>>((currentPosts, post) => {
        const objectID = `${post.slug}-${post.lang}`;
        currentPosts[objectID] = {
          objectID,
          lang: post.lang,
          categories: post.categories,
          title: post.title,
          date: post.date,
          excerpt: post.excerpt
        };

        return currentPosts;
      }, {});

    const { objectIDs } = await index.saveObjects(Object.values(posts));
    console.info(`Number of posts indexed on algolia: ${objectIDs.length}`);

    await index.setSettings({
      searchableAttributes: ['title', 'categories', 'excerpt'],
      attributesForFaceting: ['lang']
    });
  } catch (error) {
    let message = 'Indexing error on algolia';
    if ((error as AlgoliaApiError)?.message) {
      message += `: ${(error as AlgoliaApiError).message}`;
    }
    console.error(message);
  }
};

indexationOnAlglolia();

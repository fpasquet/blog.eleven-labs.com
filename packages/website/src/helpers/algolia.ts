import algoliasearch from 'algoliasearch';

//const env = process.env;
/*const env = import.meta.env;*/
const env = {
  VITE_ALGOLIA_APP_ID: '5IGTHBX5JS',
  VITE_ALGOLIA_INDEX: 'blog_eleven_v2',
  VITE_ALGOLIA_API_INDEXING_KEY: '65a51d060ca61d11255c7e3b4cc8e47d',
};

const config = {
  appId: env.VITE_ALGOLIA_APP_ID as string,
  apiIndexingKey: env.VITE_ALGOLIA_API_INDEXING_KEY as string,
  index: env.VITE_ALGOLIA_INDEX as string
};

const client = algoliasearch(config.appId, config.apiIndexingKey);
export const algoliaSearchIndex = client.initIndex(config.index);

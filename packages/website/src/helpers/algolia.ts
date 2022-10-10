import algoliasearch from 'algoliasearch';

//const env = process.env;
const env = import.meta.env;

const config = {
  appId: env.VITE_ALGOLIA_APP_ID as string,
  apiIndexingKey: env.VITE_ALGOLIA_API_INDEXING_KEY as string,
  index: env.VITE_ALGOLIA_INDEX as string
};

const client = algoliasearch(config.appId, config.apiIndexingKey);
export const algoliaSearchIndex = client.initIndex(config.index);

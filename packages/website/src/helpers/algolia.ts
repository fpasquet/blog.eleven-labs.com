import algoliasearch from 'algoliasearch';

const config = {
  appId: import.meta.env.VITE_ALGOLIA_APP_ID as string,
  apiIndexingKey: import.meta.env.VITE_ALGOLIA_API_INDEXING_KEY as string,
  index: import.meta.env.VITE_ALGOLIA_INDEX as string
};

const client = algoliasearch(config.appId, config.apiIndexingKey);
export const algoliaSearchIndex = client.initIndex(config.index);

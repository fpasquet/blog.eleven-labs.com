import { algoliaSearchIndex } from '../src/helpers/algolia';
import { AuthorData, PostData } from '../src/types';
import { getFileData } from './generateData/getFileData';

interface AlgoliaApiError extends Error {
  name: string;
  message: string;
  status: number;
}

const indexationOnAlglolia = async () => {
  try {
    const authors = getFileData<AuthorData[]>('authors.json');

    const posts = getFileData<PostData[]>('posts.json').reduce<
      Record<
        string,
        Pick<
          PostData,
          'lang' | 'slug' | 'categories' | 'title' | 'date' | 'excerpt'
        > & { objectID: string; authorUsernames: string[]; authorNames: string[] }
      >
    >((currentPosts, post) => {
      const objectID = `${post.slug}-${post.lang}`;
      const authorsByPost = authors
        .filter(author => post.authors.includes(author.username));
      currentPosts[objectID] = {
        objectID,
        lang: post.lang,
        slug: post.slug,
        categories: post.categories,
        authorUsernames: authorsByPost
          .map(author => author.username),
        authorNames: authorsByPost
          .map(author => author.name),
        title: post.title,
        date: post.date,
        excerpt: post.excerpt,
      };

      return currentPosts;
    }, {});

    const { objectIDs } = await algoliaSearchIndex.saveObjects(
      Object.values(posts)
    );
    console.info(`Number of posts indexed on algolia: ${objectIDs.length}`);

    await algoliaSearchIndex.setSettings({
      searchableAttributes: [
        'title',
        'categories',
        'authorUsernames',
        'authorNames',
        'excerpt'
      ],
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

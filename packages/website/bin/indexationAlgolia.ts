import { createServer as createViteServer } from 'vite';
import { Author, Post } from '../src/types';

const indexationAlglolia = async () => {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    const { getPosts, getAuthors } = await vite.ssrLoadModule('/src/helpers/getData.ts');
    const { algoliaSearchIndex } = await vite.ssrLoadModule('/src/helpers/algolia.ts');

    const posts: Post[] = getPosts();
    const authors: Author[] = getAuthors();

    const objects = posts.reduce<Record<string, {
      objectID: string;
      lang: string;
      slug: string;
      title: string;
      date: string;
      excerpt: string;
      categories: string[];
      authorUsernames: string[];
      authorNames: string[];
    }>>((currentPosts, post) => {
      const objectID = `${post.slug}-${post.lang}`;
      const authorsByPost = authors
        .filter(author => post.authors.includes(author.username));
      currentPosts[objectID] = {
        objectID,
        lang: post.lang,
        slug: post.slug,
        title: post.title,
        date: post.date,
        excerpt: post.excerpt,
        categories: post.categories,
        authorUsernames: authorsByPost
          .map(author => author.username),
        authorNames: authorsByPost
          .map(author => author.name),
      };

      return currentPosts;
    }, {});

    const { objectIDs } = await algoliaSearchIndex.saveObjects(
      Object.values(objects)
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
  } catch (e) {
    console.log(e);
  } finally {
    vite.close();
  }
};

indexationAlglolia();

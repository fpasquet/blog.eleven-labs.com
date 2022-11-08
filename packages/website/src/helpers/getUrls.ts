import { generatePath } from 'react-router-dom';
import { AUTHORIZED_LANGUAGES, CATEGORIES, PATHS } from '../constants';
import { getAuthors, getPosts } from './getData';

const getPostUrls = (): string[] =>
  getPosts().map<string>((post) =>
    generatePath(PATHS.POST, {
      lang: post.lang,
      slug: post.slug
    })
  );

const getAuthorUrls = (): string[] =>
  getAuthors().reduce<string[]>(
    (currentAuthorUrls, author) => {
      let langsByAuthor = getPosts()
        .filter((post) => post.authors.includes(author.username))
        ?.map((post) => post.lang);
      langsByAuthor = [...new Set(langsByAuthor)];

      if (langsByAuthor.length > 0) {
        const authorUrlsByLang = langsByAuthor.map((lang) =>
          generatePath(PATHS.AUTHOR, {
            lang,
            authorUsername: author.username
          })
        );
        currentAuthorUrls.push(...authorUrlsByLang);
      }
      return currentAuthorUrls;
    },
    []
  );

const getCategoryUrls = (): string[] => {
  const posts = getPosts();
    return AUTHORIZED_LANGUAGES.reduce<string[]>((urls, lang) => {
    const categories = CATEGORIES.filter((categoryName) =>
      posts.find(
        (post) => post.lang === lang && post.categories.includes(categoryName)
      )
    );

    urls.push(
      ...categories.map((categoryName) =>
        generatePath(PATHS.CATEGORY, {
          lang,
          categoryName
        })
      )
    );

    return urls;
  }, []);
};

export const getUrls = () => [
  PATHS.ROOT,
  ...AUTHORIZED_LANGUAGES.map((lang) => generatePath(PATHS.HOME, { lang })),
  ...getPostUrls(),
  ...getAuthorUrls(),
  ...getCategoryUrls(),
];

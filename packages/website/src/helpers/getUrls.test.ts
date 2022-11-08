import { getUrls } from './getUrls';

jest.mock('./getData', () => ({
  getPosts: jest.fn().mockReturnValue([
    {
      lang: 'fr',
      slug: 'post-react',
      categories: ['javascript'],
      authors: ['josh-doe'],
    },
    {
      lang: 'en',
      slug: 'post-aws',
      categories: ['architecture'],
      authors: ['jack-doe'],
    },
    {
      lang: 'fr',
      slug: 'post-symfony',
      categories: ['php'],
      authors: ['jess-doe'],
    },
    {
      lang: 'fr',
      slug: 'post-kanban',
      categories: ['agile'],
      authors: ['james-doe', 'jon-doe'],
    },
  ]),
  getAuthors: jest.fn().mockReturnValue([
    {
      username: 'josh-doe',
      name: 'Josh Doe',
    },
    {
      username: 'jack-doe',
      name: 'Jack Doe',
    },
    {
      username: 'jon-doe',
      name: 'Jon Doe',
    },
    {
      username: 'james-doe',
      name: 'James Doe',
    },
    {
      username: 'jess-doe',
      name: 'Jess Doe',
    }
  ])
}));

describe('Test method getUrls', () => {
  test('return urls', () => {
    expect(getUrls()).toEqual([
      '/',
      '/fr',
      '/en',
      '/fr/post-react',
      '/en/post-aws',
      '/fr/post-symfony',
      '/fr/post-kanban',
      '/fr/authors/josh-doe',
      '/en/authors/jack-doe',
      '/fr/authors/jon-doe',
      '/fr/authors/james-doe',
      '/fr/authors/jess-doe',
      '/fr/categories/javascript',
      '/fr/categories/php',
      '/fr/categories/agile',
      '/en/categories/architecture'
    ]);
  });
});

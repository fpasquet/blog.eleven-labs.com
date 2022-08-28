import * as ReactRouterDom from 'react-router-dom';

import * as GetFileData from '../getFileData';
import { getCategoryUrls } from './getCategoryUrls';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  generatePath: (path: string, params?: ReactRouterDom.Params<string>) =>
    `/${params!.lang}/categories/${params!.categoryName}`
}));

describe('Test method getCategoryUrls', () => {
  test('return posts urls', () => {
    const categoriesMock = ['javascript', 'php', 'agile'];
    const postsMock = Array.from({ length: 5 }).map((v, i) => ({
      lang: 'fr',
      slug: `post-${i + 1}`,
      authors: [`username-${i + 1}`],
      categories:
        categoriesMock[Math.floor(Math.random() * categoriesMock.length)]
    }));
    jest.spyOn(GetFileData, 'getFileData').mockReturnValueOnce(postsMock);
    const expected: string[] = [
      '/fr/categories/javascript',
      '/fr/categories/php',
      '/fr/categories/agile'
    ];
    expect(getCategoryUrls('/:lang/categories/:categoryName')).toEqual(
      expected
    );
  });
});

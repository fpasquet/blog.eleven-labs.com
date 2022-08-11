import * as ReactRouterDom from 'react-router-dom';

import * as GetFileData from '../getFileData';
import { getAuthorUrls } from './getAuthorUrls';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  generatePath: (path: string, params?: ReactRouterDom.Params<string>) =>
    `/${params!.lang}/authors/${params!.name}`
}));

describe('Test method getPostUrls', () => {
  test('return posts urls', () => {
    const postsMock = Array.from({ length: 5 }).map((v, i) => ({
      lang: 'fr',
      slug: `post-${i + 1}`,
      authors: [`username-${i + 1}`]
    }));
    const authorsMock = Array.from({ length: 5 }).map((v, i) => ({
      username: `username-${i + 1}`
    }));
    jest.spyOn(GetFileData, 'getFileData').mockReturnValueOnce(postsMock);
    jest.spyOn(GetFileData, 'getFileData').mockReturnValueOnce(authorsMock);
    const expected: string[] = [
      '/fr/authors/username-1',
      '/fr/authors/username-2',
      '/fr/authors/username-3',
      '/fr/authors/username-4',
      '/fr/authors/username-5'
    ];
    expect(getAuthorUrls('/:lang/authors/:name')).toEqual(expected);
  });
});

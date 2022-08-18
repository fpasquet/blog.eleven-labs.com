import * as ReactRouterDom from 'react-router-dom';

import * as GetFileData from '../getFileData';
import { getPostUrls } from './getPostUrls';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  generatePath: (path: string, params?: ReactRouterDom.Params<string>) =>
    `/${params!.lang}/${params!.slug}`
}));

describe('Test method getPostUrls', () => {
  test('return posts urls', () => {
    const postsMock = Array.from({ length: 5 }).map((v, i) => ({
      slug: `slug-${i + 1}`,
      lang: 'fr'
    }));
    jest.spyOn(GetFileData, 'getFileData').mockReturnValueOnce(postsMock);
    const expected: string[] = [
      '/fr/slug-1',
      '/fr/slug-2',
      '/fr/slug-3',
      '/fr/slug-4',
      '/fr/slug-5'
    ];
    expect(getPostUrls('/:lang/:slug')).toEqual(expected);
  });
});

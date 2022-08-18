import * as ReactRouterDom from 'react-router-dom';

import * as GetFileData from './getFileData';
import { getPaginatedHomeUrls } from './getPaginatedHomeUrls';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  generatePath: (path: string, params?: ReactRouterDom.Params<string>) =>
    `/${params!.lang}/page/${params!.page}`
}));

describe('Test method getPaginatedHomeUrls', () => {
  test('return paginated home urls', () => {
    const postsFrMock = Array.from({ length: 50 }).map((v, i) => ({
      slug: `slug-${i}`,
      lang: 'fr'
    }));
    const postsEnMock = Array.from({ length: 30 }).map((v, i) => ({
      slug: `slug-${i}`,
      lang: 'en'
    }));
    jest.spyOn(GetFileData, 'getFileData').mockReturnValueOnce(postsFrMock);
    jest.spyOn(GetFileData, 'getFileData').mockReturnValueOnce(postsEnMock);
    const expected: string[] = [
      '/fr/page/2',
      '/fr/page/3',
      '/fr/page/4',
      '/fr/page/5',
      '/en/page/2',
      '/en/page/3'
    ];
    expect(getPaginatedHomeUrls('/:lang/page/:page')).toEqual(expected);
  });
});

export const AUTHORIZED_LANGUAGES = ['fr', 'en'];
export const DEFAULT_LANGUAGE = 'fr';
export const NUMBER_OF_ITEMS_PER_PAGE = 6;
export const CATEGORIES = [
  'javascript',
  'php',
  'agile',
  'architecture',
  'best_practices'
];

export const PATHS = {
  ROOT: '/',
  HOME: '/:lang',
  PAGINATED_HOME: '/:lang/page/:page',
  POST: '/:lang/:slug',
  AUTHOR: '/:lang/authors/:name'
};

export const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined';
export const isSSG = !isBrowser;

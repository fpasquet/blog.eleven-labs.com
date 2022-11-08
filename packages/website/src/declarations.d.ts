import { Author, Post } from './types';

declare global {
  interface Window {
    _data: {
      posts: Post[];
      authors: Author[];
    }
  }
}

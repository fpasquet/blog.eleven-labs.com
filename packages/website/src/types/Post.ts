import { Author } from './Author';
import { PostData } from './PostData';

export type Post = Pick<PostData, 'slug' | 'title' | 'excerpt' | 'date'> & {
  readingTime: string;
  authors: Author[];
  content: string;
};

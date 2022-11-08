export interface Post {
  lang: string;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  authors: string[];
  categories: string[];
  numberOfWords: number;
  readingTimeInMinutes: number;
  contentBase64: string;
}

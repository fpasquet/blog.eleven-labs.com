import { format } from 'date-fns';
import localeDateEn from 'date-fns/locale/en-US';
import localeDateFr from 'date-fns/locale/fr';

import authorsData from '../data/authors.json';
import { AuthorData, Post, PostData } from '../types';
import { decodeBase64 } from './base64Helper';
import { transformAuthorData } from './transformAuthorData';

const postDateToString = (postDate: string, lang: string): string =>
  format(new Date(postDate), 'PP', {
    locale: lang === 'fr' ? localeDateFr : localeDateEn
  });

const readingTimeToString = (readingTimeInMinutes: number) =>
  `${readingTimeInMinutes}mn`;

export const transformPostData = (post: PostData, lang: string): Post => {
  const authors = (authorsData as AuthorData[])
    .filter((author) => post.authors.includes(author.username))
    .map((author) => transformAuthorData(author));

  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: postDateToString(post.date, lang),
    readingTime: readingTimeToString(post.readingTimeInMinutes),
    authors,
    categories: post.categories,
    content: decodeBase64(post.contentBase64)
  };
};

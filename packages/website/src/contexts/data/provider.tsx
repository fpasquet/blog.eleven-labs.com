import React from 'react';
import { format } from 'date-fns';
import localeDateFr from 'date-fns/locale/fr';
import localeDateEn from 'date-fns/locale/en-US';
import { DataContext } from './context';
import { Author, Post } from '../../types';
import { decodeBase64 } from '../../helpers/base64Helper';
import { generatePath } from 'react-router-dom';
import { PATHS } from '../../constants';

export interface DataProviderProps {
  children: React.ReactNode;
  posts?: Post[];
  authors?: Author[];
}

const postDateToString = (postDate: string, lang: string): string =>
  format(new Date(postDate), 'PP', {
    locale: lang === 'fr' ? localeDateFr : localeDateEn
  });

const readingTimeToString = (readingTimeInMinutes: number) =>
  `${readingTimeInMinutes}mn`;

export const DataProvider: React.FC<DataProviderProps> = (props) => {
  const authors = (import.meta.env.SSR ? props.authors as Author[] : window._data.authors)
    .map(({ contentBase64, ...author }) => ({
      ...author,
      description: decodeBase64(contentBase64),
    }));

  const posts = (import.meta.env.SSR ? props.posts as Post[] : window._data.posts)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ contentBase64, readingTimeInMinutes, ...post }) => ({
      ...post,
      path: generatePath(PATHS.POST, { lang: post.lang, slug: post.slug }),
      date: postDateToString(post.date, post.lang),
      readingTime: readingTimeToString(readingTimeInMinutes),
      authors: authors.filter((author) => post.authors.includes(author.username)),
      content: decodeBase64(contentBase64),
    }));

  return (
    <DataContext.Provider value={{ posts, authors }}>
      {props.children}
    </DataContext.Provider>
  );
}

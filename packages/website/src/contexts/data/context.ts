import React from 'react';
import { Author, Post } from '../../types';

export interface DataContextInterface {
  posts: (
    Omit<Post, 'readingTimeInMinutes' | 'authors' | 'contentBase64'> & {
      path: string;
      readingTime: string;
      authors: (Omit<Author, 'contentBase64'> & { description: string; })[];
      content: string;
  })[];
  authors: (Omit<Author, 'contentBase64'> & { description: string; })[];
}

export const DataContext = React.createContext<DataContextInterface>({} as DataContextInterface);

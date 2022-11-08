import { existsSync } from 'node:fs';
import { Post, Author } from '../types';
import path from 'path';
import { capitalize } from './stringHelper';
import { encodeBase64 } from './base64Helper';

export const getPosts = (): Post[] => {
  const postsModules = import.meta.glob<{
    attributes: {
      lang: string;
      slug: string;
      date: string;
      title: string;
      excerpt: string;
      authors: string[];
      categories: string[];
    };
    html: string;
  }>('../../_posts/**/*.md', { eager: true });

  return Object.entries(postsModules).reduce<Post[]>(
    (posts, [_, post]) => {

      const numberOfWords = post.html.split(' ').length;

      posts.push({
        lang: post.attributes.lang,
        slug: post.attributes.slug,
        date: post.attributes.date,
        title: post.attributes.title,
        excerpt: post.attributes.excerpt,
        authors: post.attributes.authors,
        categories: post.attributes.categories,
        readingTimeInMinutes:
          numberOfWords < 360 ? 1 : Math.round(numberOfWords / 180),
        numberOfWords,
        contentBase64: encodeBase64(post.html),
      });

      return posts;
    }, []);
}

export const getAuthors = (): Author[] => {
  getPosts();
  const authorModules = import.meta.glob<{
    attributes: {
      username: string;
      name: string;
      twitter?: string;
      github?: string;
    };
    html: string;
  }>('../../_authors/**/*.md', { eager: true });

  return Object.entries(authorModules).reduce<Author[]>(
    (authors, [_, author]) => {
      let nameWithInitial = capitalize(author.attributes.name.toLowerCase());
      const [firstname, lastname] = author.attributes.name.trim().split(' ');
      if (firstname && lastname) {
        nameWithInitial = `${firstname.slice(0, 1).toUpperCase()}. ${capitalize(
          lastname.toLowerCase()
        )}`;
      }

      const avatarImageExist = existsSync(
        path.resolve(
          process.cwd(),
          'public/imgs/authors',
          `${author.attributes.username}.jpg`
        )
      );

      authors.push({
        username: author.attributes.username,
        name: author.attributes.name,
        nameWithInitial,
        github: author.attributes?.github,
        twitter: author.attributes?.twitter,
        contentBase64: encodeBase64(author.html),
        avatarImageUrl: avatarImageExist
          ? `/imgs/authors/${author.attributes.username}.jpg`
          : undefined,
      });

      return authors;
    }, []);
}

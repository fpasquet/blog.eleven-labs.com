import { format } from 'date-fns';
import matter from 'gray-matter';

import { AuthorData, PostData } from '../../src/types';
import { authorDataValidationSchema } from './author/authorDataValidationSchema';
import { parseMarkdownByFilePath } from './parseMarkdownByFilePath';
import { postDataValidationSchema } from './post/postDataValidationSchema';

export const markdownContentCleaning = (markdownContent: string): string => {
  let cleanedContent = markdownContent.replace(
    /{%(?:[\s]+)?(?:end)?raw(?:[\s]+)?%}/gi,
    ''
  );
  cleanedContent = cleanedContent.replace(
    /({{[\s+]?site\.baseurl[\s+]?}}\/assets\/)/gi,
    '/imgs/posts/'
  );
  cleanedContent = cleanedContent.replace(
    /({{[\s+]?site\.baseurl[\s+]?}}\/)/gi,
    '/'
  );

  return cleanedContent;
};

export const markdownAuthorCleaning = async (
  filePath: string
): Promise<string> => {
  const { data, content } = parseMarkdownByFilePath<{
    login?: string;
    username?: string;
    title?: string;
    name?: string;
    twitter?: string;
    github?: string;
  }>(filePath);
  const validatedData = await authorDataValidationSchema.validate({
    username: (data.login || data.username) as string,
    name: (data.title || data.name) as string,
    twitter: data.twitter,
    github: data.github
  });
  const validatedDataWithoutEmptyValues = Object.entries(
    validatedData
  ).reduce<AuthorData>((currentData, [key, value]) => {
    if (value) {
      currentData[key as keyof AuthorData] = value;
    }
    return currentData;
  }, {} as AuthorData);

  return matter.stringify(
    markdownContentCleaning(content),
    validatedDataWithoutEmptyValues
  );
};

export const markdownPostCleaning = async (
  filePath: string
): Promise<string> => {
  const { data, content } = parseMarkdownByFilePath<{
    permalink: string;
    title: string;
    excerpt?: string;
    authors: string[];
    categories: string[];
  }>(filePath);
  const matchesSlug = data.permalink.match(/\/\w+\/([^/]+)\//);
  const matchesLangAndDate = filePath.match(/(\w{2})\/(\d{4}-\d{2}-\d{1,2})/);

  const lang = matchesLangAndDate?.[1];
  const slug = matchesSlug?.[1] || data.permalink.replace(/\//gi, '');
  const date = matchesLangAndDate?.[2];
  const excerpt =
    data.excerpt || content.split('\n').filter((str) => str.length > 0)[0];

  const validatedData = await postDataValidationSchema.validate({
    lang,
    slug,
    date,
    title: data.title,
    excerpt: excerpt,
    authors: data.authors,
    categories: data.categories,
    isDraft: false
  });

  return matter.stringify(markdownContentCleaning(content), {
    ...validatedData,
    date: format(validatedData.date, 'yyyy-MM-dd')
  } as PostData);
};

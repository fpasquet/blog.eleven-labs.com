import { readFileSync } from 'node:fs';
import { format } from 'date-fns';
import matter from 'gray-matter';

import { CATEGORIES } from '../../src/constants';
import { postDataValidationSchema, authorDataValidationSchema } from './validationSchema';

export const removeAllUndefinedValuesFromObject = <TData = Record<string, any>>(data: TData): TData =>
  Object.entries(data).reduce<TData>((currentData, [key, value]) => {
    if (value) {
      currentData[key as keyof TData] = value;
    }
    return currentData;
  }, {} as TData);

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
  const markdownContent = readFileSync(filePath, 'utf8');
  const { data, content } = matter(markdownContent);

  const validatedData = await authorDataValidationSchema.validate({
    username: (data.login || data.username) as string,
    name: (data.title || data.name) as string,
    twitter: data.twitter,
    github: data.github
  });

  return matter.stringify(
    markdownContentCleaning(content),
    removeAllUndefinedValuesFromObject(validatedData)
  );
};

export const markdownPostCleaning = async (
  filePath: string
): Promise<string> => {
  const markdownContent = readFileSync(filePath, 'utf8');
  const { data, content } = matter(markdownContent);
  const matchesSlug = data.permalink.match(/\/\w+\/([^/]+)\//);
  const matchesLangAndDate = filePath.match(/(\w{2})\/(\d{4}-\d{2}-\d{1,2})/);

  const lang = matchesLangAndDate?.[1];
  const slug = matchesSlug?.[1] || data.permalink.replace(/\//gi, '');
  const date = matchesLangAndDate?.[2];
  const excerpt =
    data.excerpt || content.split('\n').filter((str) => str.length > 0)[0];

  const validCategories = [...(data.categories || []), ...(data.tags || [])]
    .map((keyword) => keyword.toLowerCase().trim())
    .filter((keyword) => CATEGORIES.includes(keyword));

  const validatedData = await postDataValidationSchema.validate({
    lang,
    slug,
    date,
    title: data.title,
    excerpt: excerpt,
    authors: data.authors,
    categories: validCategories,
    isDraft: false
  });

  return matter.stringify(markdownContentCleaning(content), {
    ...validatedData,
    date: format(validatedData.date, 'yyyy-MM-dd')
  });
};

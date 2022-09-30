import * as cliProgress from 'cli-progress';
import * as fs from 'fs';
import * as path from 'path';

import { PostData } from '../src/types';
import { createFileData } from './generateData/createFileData';
import { parseMarkdownByFilePath } from './generateData/parseMarkdownByFilePath';
import { postDataValidationSchema } from './generateData/post/postDataValidationSchema';

const rootDir = process.cwd();

const findDuplicates = <T = string>(arr: T[]): T[] =>
  arr.filter((item, index) => arr.indexOf(item) !== index);

const generatePostsData = async () => {
  const postsDir = path.resolve(rootDir, '_posts');
  const langOfPosts = fs.readdirSync(postsDir);
  const articleFilePaths = langOfPosts.reduce<string[]>(
    (result, langOfPost) => {
      const postDir = path.resolve(postsDir, langOfPost);
      const articleFileNames = fs.readdirSync(postDir);

      result.push(
        ...articleFileNames.map((articleFileName) =>
          path.resolve(postsDir, langOfPost, articleFileName)
        )
      );
      return result;
    },
    []
  );

  console.log('\nposts being generated...\n');
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  progressBar.start(articleFilePaths.length, 0);

  const posts: PostData[] = [];
  for (const articleFilePath of articleFilePaths) {
    const { data, htmlContent, htmlContentBase64 } =
      parseMarkdownByFilePath<PostData>(articleFilePath);
    await postDataValidationSchema.validate(data);
    const numberOfWords = htmlContent.split(' ').length;
    posts.push({
      ...data,
      readingTimeInMinutes:
        numberOfWords < 360 ? 1 : Math.round(numberOfWords / 180),
      numberOfWords: numberOfWords,
      contentBase64: htmlContentBase64
    });
    progressBar.increment();
  }

  const duplicateIds = findDuplicates(
    posts.map((post) => `${post.slug}-${post.lang}`)
  );

  if (duplicateIds.length) {
    throw new Error(`Some posts are duplicates, [${duplicateIds.join(', ')}]`);
  }

  progressBar.stop();
  createFileData<PostData[]>({
    fileName: 'posts.json',
    data: posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  });
};

(() => {
  try {
    generatePostsData();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit();
  }
})();

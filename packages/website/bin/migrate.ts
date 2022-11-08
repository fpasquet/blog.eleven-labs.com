import { writeFileSync, unlinkSync } from 'node:fs';
import { resolve } from 'node:path';
import download from 'github-directory-downloader';
import {
  markdownAuthorCleaning,
  markdownPostCleaning
} from './migrate/markdownCleaning';

const rootDir = process.cwd();

const downloadAndCleaningAuthors = async () => {
  const { files: authorFiles } = await download(
    'https://github.com/eleven-labs/blog.eleven-labs.com/tree/master/_authors',
    resolve(rootDir, '_authors')
  );

  for (const filePath in authorFiles) {
    try {
      const markdownContent = await markdownAuthorCleaning(filePath);
      writeFileSync(filePath, markdownContent, 'utf8');
    } catch (error) {
      if (error instanceof Error) {
        console.log(`[${filePath}] ${error.message}`);
      }
      unlinkSync(filePath);
    }
  }
};

const downloadAndCleaningPosts = async () => {
  const { files: postFiles } = await download(
    'https://github.com/eleven-labs/blog.eleven-labs.com/tree/master/_posts',
    resolve(rootDir, '_posts')
  );

  for (const filePath in postFiles) {
    try {
      const markdownContent = await markdownPostCleaning(filePath);
      writeFileSync(filePath, markdownContent, 'utf8');
    } catch (error) {
      if (error instanceof Error) {
        console.log(`[${filePath}] ${error.message}`);
      }
      unlinkSync(filePath);
    }
  }
};

const downloadAuthorImgs = async () => {
  await download(
    'https://github.com/eleven-labs/blog.eleven-labs.com/tree/master/img/authors',
    resolve(rootDir, 'public/imgs/authors')
  );
};

const downloadPostImgs = async () => {
  await download(
    'https://github.com/eleven-labs/blog.eleven-labs.com/tree/master/assets',
    resolve(rootDir, 'public/imgs/posts')
  );
};

(async () => {
  await downloadAndCleaningAuthors();
  await downloadAuthorImgs();
  await downloadAndCleaningPosts();
  await downloadPostImgs();
})();

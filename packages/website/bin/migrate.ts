import * as fs from 'fs';
import download from 'github-directory-downloader';
import * as path from 'path';

import {
  markdownAuthorCleaning,
  markdownPostCleaning
} from './generateData/markdownCleaning';

const rootDir = process.cwd();

const downloadAndCleaningAuthors = async () => {
  const { files: authorFiles } = await download(
    'https://github.com/eleven-labs/blog.eleven-labs.com/tree/master/_authors',
    path.resolve(rootDir, '_authors')
  );

  for (const filePath in authorFiles) {
    try {
      const markdownContent = await markdownAuthorCleaning(filePath);
      fs.writeFileSync(filePath, markdownContent, 'utf8');
    } catch (error) {
      if (error instanceof Error) {
        console.log(`[${filePath}] ${error.message}`);
      }
      fs.unlinkSync(filePath);
    }
  }
};

const downloadAndCleaningPosts = async () => {
  const { files: postFiles } = await download(
    'https://github.com/eleven-labs/blog.eleven-labs.com/tree/master/_posts',
    path.resolve(rootDir, '_posts')
  );

  for (const filePath in postFiles) {
    try {
      const markdownContent = await markdownPostCleaning(filePath);
      fs.writeFileSync(filePath, markdownContent, 'utf8');
    } catch (error) {
      if (error instanceof Error) {
        console.log(`[${filePath}] ${error.message}`);
      }
      fs.unlinkSync(filePath);
    }
  }
};

const downloadAuthorImgs = async () => {
  await download(
    'https://github.com/eleven-labs/blog.eleven-labs.com/tree/master/img/authors',
    path.resolve(rootDir, 'public/imgs/authors')
  );
};

const downloadPostImgs = async () => {
  await download(
    'https://github.com/eleven-labs/blog.eleven-labs.com/tree/master/assets',
    path.resolve(rootDir, 'public/imgs/posts')
  );
};

(async () => {
  await downloadAndCleaningAuthors();
  await downloadAuthorImgs();
  await downloadAndCleaningPosts();
  await downloadPostImgs();
})();

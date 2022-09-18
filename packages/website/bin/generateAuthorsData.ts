import * as cliProgress from 'cli-progress';
import * as fs from 'fs';
import * as path from 'path';

import { AuthorData } from '../src/types';
import { authorDataValidationSchema } from './generateData/author/authorDataValidationSchema';
import { createFileData } from './generateData/createFileData';
import { parseMarkdownByFilePath } from './generateData/parseMarkdownByFilePath';

const rootDir = process.cwd();

const generateAuthorsData = async () => {
  const authorsDir = path.resolve(rootDir, '_authors');
  const authorFileNames = fs.readdirSync(authorsDir);
  const authorFilePaths = authorFileNames.map((authorFileName) =>
    path.resolve(authorsDir, authorFileName)
  );

  console.log('\nauthors being generated...\n');
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  progressBar.start(authorFilePaths.length, 0);

  const authors: AuthorData[] = [];
  for (const authorFilePath of authorFilePaths) {
    const { data, htmlContentBase64 } =
      parseMarkdownByFilePath<AuthorData>(authorFilePath);

    const validatedData = await authorDataValidationSchema.validate(data);
    const avatarImageExist = fs.existsSync(
      path.resolve(
        process.cwd(),
        'public/imgs/authors',
        `${validatedData.username}.jpg`
      )
    );
    authors.push({
      ...validatedData,
      avatarImageUrl: avatarImageExist
        ? `/imgs/authors/${validatedData.username}.jpg`
        : undefined,
      contentBase64: htmlContentBase64
    });
    progressBar.increment();
  }

  progressBar.stop();
  createFileData<AuthorData[]>({
    fileName: 'authors.json',
    data: authors
  });
};

(() => {
  try {
    generateAuthorsData();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit();
  }
})();

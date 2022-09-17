import * as fs from 'fs';
import * as path from 'path';

const rootDir = process.cwd();
const monoRepoRootDir = path.resolve(rootDir, '../..');
const blogUIRootDir = path.resolve(
  monoRepoRootDir,
  'node_modules/@eleven-labs/blog-ui'
);

export const getCssContent = (): string => {
  return fs.readFileSync(`${blogUIRootDir}/dist/style.css`, {
    encoding: 'utf8',
    flag: 'r'
  });
};

const copyFonts = (): void => {
  const srcDir = path.resolve(blogUIRootDir, 'dist/fonts');
  const outputDir = path.resolve(rootDir, 'dist/fonts');
  fs.cpSync(srcDir, outputDir, { recursive: true });
};

const copyImgs = (): void => {
  const srcDir = path.resolve(blogUIRootDir, 'dist/imgs');
  const outputDir = path.resolve(rootDir, 'dist/imgs');
  fs.cpSync(srcDir, outputDir, { recursive: true });
};

export const copyAssets = (): void => {
  copyFonts();
  copyImgs();
};

import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
export const monoRepoRootDir = path.resolve(rootDir, '../..');
const blogUIRootDir = path.resolve(
  monoRepoRootDir,
  'node_modules/@eleven-labs/blog-ui'
);

const copyFonts = (): void => {
  const srcDir = path.resolve(blogUIRootDir, 'public/fonts');
  const outputDir = path.resolve(rootDir, 'public/fonts');
  fs.cpSync(srcDir, outputDir, { recursive: true });
};

const copyImgs = (): void => {
  const srcDir = path.resolve(blogUIRootDir, 'public/imgs');
  const outputDir = path.resolve(rootDir, 'public/imgs');
  fs.cpSync(srcDir, outputDir, { recursive: true });
};

const copyStyle = (): void => {
  const srcDir = path.resolve(blogUIRootDir, 'dist/style.css');
  const outputDir = path.resolve(rootDir, 'public/style.css');
  fs.cpSync(srcDir, outputDir, { recursive: true });
};

const copyAssets = (): void => {
  copyFonts();
  copyImgs();
  copyStyle();
};

const preinstall = async () => {
  copyAssets();
}

preinstall();

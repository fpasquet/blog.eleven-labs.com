import fs from 'fs';
import path from 'path';

import { blogUIRootDir, rootDir } from './constants';

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

export const copyAssets = (): void => {
  copyFonts();
  copyImgs();
  copyStyle();
};

copyAssets();

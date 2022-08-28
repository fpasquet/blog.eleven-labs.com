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

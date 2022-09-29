import path from 'path';

export const rootDir = process.cwd();
export const monoRepoRootDir = path.resolve(rootDir, '../..');
export const blogUIRootDir = path.resolve(
  monoRepoRootDir,
  'node_modules/@eleven-labs/blog-ui'
);

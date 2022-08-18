import * as fs from 'fs';
import * as path from 'path';

const rootDir = process.cwd();
const monoRepoRootDir = path.resolve(rootDir, '../..');
const blogUIRootDir = path.resolve(
  monoRepoRootDir,
  'node_modules/@eleven-labs/blog-ui'
);

const copyCss = () => {
  const cssContent = fs.readFileSync(`${blogUIRootDir}/dist/style.css`, {
    encoding: 'utf8',
    flag: 'r'
  });

  const cssFilePath = path.resolve(rootDir, 'dist', 'css/style.css');
  const dirPath = path.dirname(cssFilePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(cssFilePath, cssContent, 'utf8');
};

(async () => {
  try {
    copyCss();
  } catch (error) {
    console.error(`\n${error instanceof Error ? error.message : error}\n`);
    process.exit();
  }
})();

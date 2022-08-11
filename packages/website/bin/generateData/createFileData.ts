import * as fs from 'fs';
import * as path from 'path';

export const createFileData = <TData>(options: {
  fileName: string;
  data: TData;
}): void => {
  const contentJSON = JSON.stringify(options.data, null, 4);
  const filePath = path.resolve(process.cwd(), 'src/data', options.fileName);
  const dirPath = path.dirname(filePath);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(filePath, contentJSON, 'utf8');
};

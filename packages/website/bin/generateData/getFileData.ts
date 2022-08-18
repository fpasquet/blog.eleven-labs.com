import * as fs from 'fs';
import * as path from 'path';

export const getFileData = <TData>(fileName: string): TData => {
  const filePath = path.resolve(process.cwd(), 'src/data', fileName);
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
};

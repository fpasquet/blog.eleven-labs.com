import fs from 'fs';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const convertBase64 = (str: string): string => {
  const buffer = new Buffer(str);
  return buffer.toString('base64');
};

export const parseMarkdownByFilePath = <TData>(
  filePath: string
): {
  data: TData;
  content: string;
  htmlContent: string;
  htmlContentBase64: string;
} => {
  const markdownContent = fs.readFileSync(filePath, 'utf8');
  const md = new MarkdownIt({
    html: true,
    xhtmlOut: true,
    typographer: true
  });

  const { data, content } = matter(markdownContent);
  const htmlContent = md.render(content).trim();

  return {
    data: data as TData,
    content,
    htmlContent: htmlContent,
    htmlContentBase64: convertBase64(htmlContent)
  };
};

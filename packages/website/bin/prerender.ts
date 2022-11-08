import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import * as cliProgress from 'cli-progress';
import { createServer as createViteServer } from 'vite';
import { Author, Post } from '../src/types';

const rootDir = process.cwd();

const prerender = async () => {
  const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    const { getUrls } = await vite.ssrLoadModule('/src/helpers/getUrls.ts');
    const urls = getUrls();
    progressBar.start(urls.length, 0);

    const { render } = await vite.ssrLoadModule('/src/render.tsx');
    const { getPosts, getAuthors } = await vite.ssrLoadModule('/src/helpers/getData.ts');
    const posts: Post[] = getPosts();
    const authors: Author[] = getAuthors();

    for (const url of urls) {
      const matchLang = url.match(/^\/(fr|en)/);
      const html: string = await render({
        url,
        lang: matchLang?.[1] || 'fr',
        posts,
        authors,
      });
      const filePath = resolve(
        rootDir,
        'dist',
        `${url.length > 1 ? `${url.substring(1)}/` : ''}index.html`
      );

      const dirPath = dirname(filePath);
      if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
      }
      writeFileSync(filePath, html, 'utf8');
      progressBar.increment();
    }

    progressBar.stop();
    console.log('🦖🖨 Your static site is ready to deploy from dist');
  } catch (e) {
    console.error(e);
  } finally {
    vite.close();
  }
}

prerender();

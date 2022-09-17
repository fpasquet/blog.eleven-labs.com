import * as cliProgress from 'cli-progress';
import * as fs from 'fs';
import * as path from 'path';

import { copyAssets, getCssContent } from './helpers';

const rootDir = process.cwd();

(async () => {
  const {
    staticRender,
    data: { urlsData }
  }: {
    staticRender: (options: {
      url: string;
      lang: string;
      inlineCss?: string;
    }) => string;
    data: { urlsData: string[] };
  } = await import('../dist/staticRender.js');
  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );

  copyAssets();

  try {
    progressBar.start(urlsData.length, 0);
    for (const url of urlsData) {
      const filePath = path.resolve(
        rootDir,
        'dist',
        `${url.length > 1 ? `${url.substring(1)}/` : ''}index.html`
      );

      const matchLang = url.match(/^\/(fr|en)/);
      const cssContent = getCssContent();
      const htmlContent = await staticRender({
        url,
        lang: matchLang?.[1] || 'fr',
        inlineCss: cssContent
      });

      const dirPath = path.dirname(filePath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      fs.writeFileSync(filePath, htmlContent, 'utf8');
      progressBar.increment();
    }

    fs.unlinkSync(path.resolve(rootDir, 'dist/staticRender.js'));
    progressBar.stop();
  } catch (error) {
    console.error(`\n${error instanceof Error ? error.message : error}\n`);
    process.exit();
  }
})();

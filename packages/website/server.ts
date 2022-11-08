import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    const matches = req.originalUrl.match(/^\/(fr|en)/);
    const lang = matches?.[1] || 'fr';

    try {
      const { render } = await vite.ssrLoadModule('/src/render.tsx');
      const { getPosts, getAuthors } = await vite.ssrLoadModule('/src/helpers/getData.ts');

      const html = await render({
        url,
        lang,
        posts: getPosts(),
        authors: getAuthors()
      });

      const htmlWithViteHMRClient = await vite.transformIndexHtml(url, html);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(htmlWithViteHMRClient);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  const PORT = process.env.PORT || 5173;
  app.listen(PORT, () => {
    console.log(`Your site is now being served at: http://localhost:${PORT}`);
  });
}

createServer();

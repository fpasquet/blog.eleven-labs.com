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
      const html = await render({ url, lang });
      const htmlWithViteHMRClient = await vite.transformIndexHtml(url, html);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(htmlWithViteHMRClient);
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  const PORT = process.env.PORT || 5173;
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

createServer();

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [react(), mdPlugin({ mode: [Mode.HTML] })],
  build: {
    minify: false
  }
});

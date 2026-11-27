import { defineConfig } from 'astro/config';

/**
 * `base` permite publicar el sitio dentro de una subcarpeta (GitHub Pages):
 *   BASE_PATH=/zarison-banda npm run build
 * En local, sin variable, se sirve desde la raíz.
 */
export default defineConfig({
  site: 'https://toyoenohio.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});

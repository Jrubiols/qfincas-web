import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Se mantienen las mismas URLs que la web antigua (/servicios/..., /tarifas/, /blog/...)
// para no perder el posicionamiento en Google.
export default defineConfig({
  site: 'https://qfincas.com',
  trailingSlash: 'always',
  integrations: [
    // Mapa del sitio para Google, sin la página de "gracias" del formulario
    sitemap({ filter: (page) => !page.includes('/gracias/') }),
  ],
});

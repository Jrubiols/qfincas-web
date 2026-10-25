import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { entradas } from './src/data/blog.js';
import { zonas } from './src/data/zonas.js';

// Artículos aún sin revisar por el despacho: fuera del mapa del sitio
const borradores = [
  ...entradas.filter((e) => e.revisado === false).map((e) => `/blog/${e.slug}/`),
  ...zonas.filter((z) => z.revisado === false).map((z) => `/administrador-de-fincas-${z.slug}/`),
];

// Se mantienen las mismas URLs que la web antigua (/servicios/..., /tarifas/, /blog/...)
// para no perder el posicionamiento en Google.
export default defineConfig({
  site: 'https://qfincas.com',
  trailingSlash: 'always',
  integrations: [
    // Mapa del sitio para Google, sin la página de "gracias" ni los borradores
    sitemap({ filter: (page) => !page.includes('/gracias/') && !borradores.some((b) => page.endsWith(b)) }),
  ],
});

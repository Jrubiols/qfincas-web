import { defineConfig } from 'astro/config';

// Se mantienen las mismas URLs que la web antigua (/servicios/..., /tarifas/, /blog/...)
// para no perder el posicionamiento en Google.
export default defineConfig({
  site: 'https://qfincas.com',
  trailingSlash: 'always',
});

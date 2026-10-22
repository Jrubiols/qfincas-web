// Comprueba que todas las URLs de la web antigua llevan a una página de la nueva
// y, en el dominio real, que la web no le pide a Google que no la indexe.
// Uso: npm run comprobar                                    (prueba https://qfincas.com)
//      npm run comprobar -- https://qfincas-web.netlify.app  (prueba la web de pruebas)
import { readFileSync } from 'node:fs';

const base = (process.argv[2] || 'https://qfincas.com').replace(/\/$/, '');
const rutas = readFileSync(new URL('./urls-antiguas.txt', import.meta.url), 'utf-8')
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));

let fallos = 0;
for (const ruta of rutas) {
  try {
    const r = await fetch(base + ruta, { redirect: 'follow' });
    const destino = r.url.replace(base, '') || '/';
    const ok = r.status === 200;
    if (!ok) fallos++;
    console.log(`${ok ? 'OK   ' : 'FALLA'} ${r.status}  ${ruta}${r.redirected ? `  ->  ${destino}` : ''}`);
  } catch (e) {
    fallos++;
    console.log(`FALLA ---  ${ruta}  (${e.cause?.code || e.message})`);
  }
}

// La web marca "noindex" mientras no se compile con qfincas.com como dominio principal en Netlify
if (base.includes('qfincas.com')) {
  const html = await (await fetch(base + '/')).text();
  if (html.includes('noindex')) {
    fallos++;
    console.log('\nFALLA La portada tiene "noindex": vuelve a desplegar en Netlify (Clear cache and deploy site).');
  } else {
    console.log('\nOK    La portada se puede indexar en Google.');
  }
}

console.log(fallos ? `\n${fallos} fallo(s).` : `\nTodo bien: ${rutas.length} URLs comprobadas.`);
process.exit(fallos ? 1 : 0);

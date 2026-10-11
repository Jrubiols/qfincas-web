// Convierte las fotos .jpg de public/img a .webp y genera versiones pequeñas para móvil.
// Uso: node scripts/optimizar-imagenes.mjs   (no borra los originales)
import sharp from 'sharp';
import { readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const anchos = { 'madrid.jpg': 1600, 'acuerdo.jpg': 1100, 'nosotros.jpg': 1100 };
const pequenas = { 'madrid.jpg': 800 }; // el resto de fotos: versión de 480 px
const dir = 'public/img';
const kb = (b) => `${Math.round(b / 1024)} KB`;

for (const f of readdirSync(dir)) {
  if (!['.jpg', '.jpeg'].includes(extname(f).toLowerCase())) continue;
  const origen = join(dir, f);
  const base = origen.replace(/\.jpe?g$/i, '');
  const calidad = f === 'madrid.jpg' ? 60 : 78;
  const grande = await sharp(origen).resize({ width: anchos[f] ?? 900, withoutEnlargement: true }).webp({ quality: calidad }).toFile(`${base}.webp`);
  const ancho = pequenas[f] ?? 480;
  const peq = await sharp(origen).resize({ width: ancho, withoutEnlargement: true }).webp({ quality: calidad }).toFile(`${base}-${ancho}.webp`);
  console.log(`${f}: ${kb(statSync(origen).size)} -> ${kb(grande.size)} (${grande.width}px) y ${kb(peq.size)} (${peq.width}px)`);
}


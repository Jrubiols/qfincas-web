# Web de Qfincas

Web estática hecha con [Astro](https://astro.build/). Sustituye a la web en WordPress de qfincas.com y mantiene sus mismas URLs.

## Uso

```bash
npm install        # solo la primera vez
npm run dev        # http://localhost:4321 con recarga al guardar
npm run build      # genera la web en dist/
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Teléfono, email, dirección, horario, WhatsApp | `src/data/site.js` |
| Menú | `src/data/site.js` (`nav`) |
| Textos de los servicios (una página cada uno) | `src/data/servicios.js` |
| Tarifas: qué incluye cada nivel y precio | `src/pages/tarifas.astro` |
| Noticias del blog | `src/pages/blog/index.astro` |
| Colores y estilos | `src/styles/global.css` |
| Cabecera, pie y barra móvil | `src/layouts/Base.astro` |
| Imágenes y PDF | `public/img/`, `public/docs/` |

## Pendiente de Qfincas

Busca `PENDIENTE` en el código:

- Móvil de WhatsApp y código postal (`site.js`)
- Qué incluye cada tarifa y si se publican precios (`tarifas.astro`)
- Razón social, NIF y nº de colegiado del CAF para el aviso legal y la privacidad
- Texto completo y fecha de las noticias del blog
- Fotos reales del equipo

## Publicación

Pensada para Netlify (`netlify.toml`). El formulario de presupuesto usa Netlify Forms: en el panel de Netlify hay que activar el aviso por email a secretaria@qfincas.com. Antes de apuntar el dominio qfincas.com a Netlify, comprobar que no se tocan los registros MX del correo.

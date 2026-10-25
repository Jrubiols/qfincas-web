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
| Páginas por barrio (textos, nº de comunidades, `revisado`) | `src/data/zonas.js` |
| Avisos y urgencias | `src/pages/avisos-y-urgencias.astro` |
| Colores y estilos | `src/styles/global.css` |
| Cabecera, pie y barra móvil | `src/layouts/Base.astro` |
| Imágenes y PDF | `public/img/`, `public/docs/` |

## Pendiente de Qfincas

Busca `PENDIENTE` en el código:

- Móvil de WhatsApp (`site.js`): al ponerlo aparecen solos el botón flotante, el de la barra del móvil y el de contacto
- Revisión de las páginas por barrio: cambiar `revisado` a `true` en `src/data/zonas.js`
- Cómo se atienden las urgencias fuera de horario (`avisos-y-urgencias.astro`)
- Precio de cada tarifa, y si Premium incluye juntas extraordinarias y subvenciones (`tarifas.astro`)
- Razón social, NIF y nº de colegiado del CAF para el aviso legal y la privacidad
- Texto completo y fecha de las noticias del blog
- Fotos reales del equipo

## Publicación

Pensada para Netlify (`netlify.toml`). El formulario de presupuesto usa Netlify Forms.

Para pasar el dominio qfincas.com a esta web, seguir [PUBLICAR.md](PUBLICAR.md). Explica qué registros DNS se cambian, cuáles no se tocan para no romper el correo y cómo volver atrás. `npm run comprobar` revisa que todas las URLs de la web antigua sigan funcionando.

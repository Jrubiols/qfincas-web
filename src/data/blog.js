// Entradas del blog. Las cinco primeras vienen de la web antigua (mismo slug, con redirección
// desde la URL antigua en public/_redirects). Para añadir una entrada, copiar un bloque.
// `cuerpo` admite HTML sencillo (<p>, <ul>, <a>...).
export const entradas = [
  {
    slug: 'entrega-diploma-25-anos-colegiacion',
    tipo: 'Noticia',
    fecha: '2021',
    titulo: 'Diploma por 25 años de colegiación en el Colegio de Abogados de Madrid',
    resumen: 'El Ilustre Colegio de Abogados de Madrid reconoce a Alberto Cano Alsúa sus 25 años como colegiado.',
    imagen: '/img/blog/logo-icam.png',
    cuerpo: `
      <p>El Ilustre Colegio de Abogados de Madrid (ICAM) ha concedido a Alberto Cano Alsúa, director de Qfincas, el diploma conmemorativo por sus 25 años de colegiación. Alberto se incorporó al Colegio en mayo de 1996 y sigue ejerciendo como abogado.</p>
      <p>Con este diploma el Colegio reconoce a quienes, con su perseverancia, honran la profesión. Para nuestras comunidades significa algo muy concreto: el administrador que lleva sus cuentas es, además, un abogado con 25 años de experiencia.</p>
    `,
  },
  {
    slug: 'carta-presidencia-cafmadrid-por-25-anos-profesion',
    tipo: 'Noticia',
    fecha: '2020',
    titulo: 'Mención honorífica del CAFMadrid por 25 años de ejercicio de la profesión',
    resumen: 'El Colegio de Administradores de Fincas de Madrid concede a Alberto Cano la mención «A los 25 años de ejercicio de la profesión».',
    imagen: '/img/blog/logo-cafm.png',
    cuerpo: `
      <p>La presidencia del Colegio Profesional de Administradores de Fincas de Madrid (CAFMadrid) comunicó en octubre de 2020 a Alberto Cano Alsúa la concesión de la mención honorífica <em>«A los 25 años de ejercicio de la profesión»</em>.</p>
      <p>Esta mención se otorga, según los estatutos del Colegio, a los colegiados que llevan un cuarto de siglo ejerciendo como administradores de fincas. Por la situación sanitaria, la Junta de Gobierno trasladó el acto solemne de entrega al año 2021.</p>
    `,
  },
  {
    slug: 'alberto-cano-alsua-y-maria-galan-participan-como-director-y-profesora-en-el-area-academica-executive-del-economist-jurist-school-s-l',
    tipo: 'Noticia',
    fecha: '2019',
    titulo: 'Alberto Cano y María Galán, director y profesora en Economist & Jurist',
    resumen: 'Participan en el área Executive de Economist & Jurist School impartiendo el curso de especialización en administración de fincas y real estate management.',
    imagen: '/img/blog/logo-economist.png',
    cuerpo: `
      <p>Alberto Cano Alsúa y María Galán participan como director y profesora en el área académica Executive de Economist & Jurist School, en el curso de especialización en administración de fincas y real estate management, que se imparte en línea.</p>
      <p>La primera edición, en 2019, tuvo 48 horas acreditadas, además de las tutorías en línea con el alumnado. Formar a otros administradores nos obliga a estar al día de cada cambio legal, y eso es lo que aplicamos después en tu comunidad.</p>
    `,
  },
  {
    slug: 'dividendo-digital-aparicion-en-rtve-de-alberto-cano',
    tipo: 'En los medios',
    titulo: 'Dividendo digital: Alberto Cano en RTVE',
    resumen: 'Alberto Cano explica en RTVE cómo afecta el dividendo digital a las comunidades de propietarios.',
    imagen: '/img/blog/dividendo-digital.jpg',
    cuerpo: `
      <p>Alberto Cano Alsúa participó en un reportaje de RTVE para explicar el dividendo digital: el cambio de frecuencias de la televisión que obligó a muchas comunidades a adaptar la antena colectiva del edificio.</p>
      <p><a href="https://www.rtve.es/drmn/embed/video/2780135" target="_blank" rel="noopener">Ver el vídeo en RTVE →</a></p>
    `,
  },
  {
    slug: 'limitacion-de-uso-y-destino-de-viviendas-y-locales-en-edificios',
    tipo: 'Artículo',
    titulo: 'Limitación de uso y destino de viviendas y locales en edificios',
    resumen: '¿Se puede convertir un local en vivienda, una vivienda en oficina o todo el edificio en oficinas? Claves para resolver estas dudas.',
    imagen: '/img/blog/articulo.jpg',
    cuerpo: `
      <p>Los profesionales del sector inmobiliario resuelven cada vez más dudas sobre el uso que los propietarios quieren dar a su inmueble: transformar un local en vivienda, una vivienda en local o destinar todo el edificio a oficinas.</p>
      <p>En este artículo, Alberto Cano Alsúa, abogado y administrador de fincas, analiza cómo encaja el derecho de cada propietario a usar su inmueble con las limitaciones que pueden imponer el título constitutivo, los estatutos de la comunidad y la Ley de Propiedad Horizontal, y da las claves para resolver estos conflictos.</p>
      <p><a href="/docs/articulo-limitacion-uso-viviendas-locales.pdf" target="_blank">Leer el artículo completo (PDF) →</a></p>
    `,
  },
];

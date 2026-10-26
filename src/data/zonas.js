// Zonas de Madrid donde Qfincas ya administra comunidades (según su listado de octubre de 2026).
// Cada zona tiene su página en /administrador-de-fincas-<slug>/ con contenido propio del barrio.
// Nunca se publican direcciones de comunidades clientes.
// `comunidades`: número de comunidades administradas en la zona; actualizarlo si cambia.
// `revisado: false` = pendiente de que lo revise el despacho (cita leyes): se muestra un aviso,
// no se indexa en Google y no entra en el mapa del sitio. Cambiar a `true` cuando esté revisado.
export const zonas = [
  {
    slug: 'valdebebas',
    nombre: 'Valdebebas',
    distrito: 'Hortaleza',
    comunidades: 7,
    revisado: false,
    descripcion: 'Administrador de fincas en Valdebebas, con despacho en el propio barrio. Comunidades nuevas con garaje, trasteros y piscina, y reclamación de defectos de construcción.',
    intro: 'Nuestro despacho está en Valdebebas, en la calle Jordi Solé Tura. Ya administramos 7 comunidades en el barrio y podemos estar en tu portal en minutos.',
    como: [
      'Valdebebas es un barrio nuevo: la mayoría de sus edificios tienen menos de quince años. Son sobre todo urbanizaciones con garaje, trasteros, zonas verdes y, muchas, piscina, con decenas o cientos de propietarios.',
      'Eso cambia lo que necesita una comunidad. Hay menos derramas por obras de conservación y más trabajo de gestión: garajes, piscina, empresas de mantenimiento y, sobre todo, la postventa de la promotora.',
    ],
    temas: [
      { t: 'Defectos de construcción', d: 'La Ley de Ordenación de la Edificación da un año para reclamar los defectos de acabado, tres para los que afectan a la habitabilidad (humedades, aislamiento, instalaciones) y diez para los de estructura. Como somos abogados, recogemos los daños vivienda por vivienda y reclamamos a la promotora y a la constructora antes de que venzan los plazos.' },
      { t: 'Garajes, trasteros y piscina', d: 'Repartos de gastos con coeficientes distintos para viviendas, plazas y trasteros, la temporada de piscina con socorrista y unas normas de uso claras para todos.' },
      { t: 'Comunidades grandes', d: 'Juntas con muchos propietarios, votos por representación y actas bien hechas. Con TuComunidad, cada vecino ve las cuentas y las actas desde el móvil.' },
      { t: 'Comunidades recién entregadas', d: 'Si acabáis de recibir las llaves, os ayudamos a poner en marcha la comunidad: CIF, cuenta del banco, libro de actas, primera junta y normas de régimen interior.' },
    ],
    preguntas: [
      { p: '¿Tenéis oficina en Valdebebas?', r: 'Sí. Nuestro despacho está en la calle Jordi Solé Tura 9, en Valdebebas. Puedes venir a vernos de lunes a jueves de 9:00 a 18:00 y los viernes de 9:00 a 15:00.' },
      { p: 'Nuestro edificio tiene defectos y aún está en garantía. ¿Podéis reclamar a la promotora?', r: 'Sí. Según la Ley de Ordenación de la Edificación, hay un año para los defectos de acabado, tres para los de habitabilidad y diez para los de estructura, y dos años para reclamar desde que aparece el daño. Lo reclamamos primero por la vía amistosa y, si hace falta, en el juzgado.' },
    ],
    cerca: ['Sanchinarro', 'Las Tablas', 'Hortaleza', 'Campo de las Naciones'],
  },
  {
    slug: 'guindalera',
    nombre: 'la Guindalera',
    corto: 'Guindalera',
    distrito: 'Salamanca',
    comunidades: 7,
    revisado: false,
    descripcion: 'Administrador de fincas en la Guindalera (Salamanca). Edificios con años que necesitan inspecciones, obras y accesibilidad, y comunidades de garaje y de trasteros.',
    intro: 'Ya administramos 7 comunidades en la Guindalera y su entorno, en el distrito de Salamanca: edificios de viviendas y también comunidades solo de garaje o de trasteros.',
    como: [
      'La Guindalera es un barrio de edificios de viviendas con varias décadas encima, comunidades medianas y muchos vecinos de toda la vida. Conviven bloques con portería y otros más sencillos, y también garajes y trasteros que forman su propia comunidad.',
      'Lo que más ocupa a estas comunidades es mantener el edificio al día: inspecciones obligatorias, fachadas, cubiertas, bajantes y, cada vez más, obras de accesibilidad.',
    ],
    temas: [
      { t: 'Inspecciones y obras de conservación', d: 'El Informe de Evaluación del Edificio, la revisión del ascensor y de la instalación eléctrica, y las obras que salgan de ellos. Pedimos presupuestos que se puedan comparar y no participamos en la elección del contratista: decide la junta.' },
      { t: 'Accesibilidad', d: 'Instalar un ascensor, una rampa o un salvaescaleras. La ley obliga a hacer estas obras cuando las pide un vecino con discapacidad o mayor de 70 años y, descontadas las ayudas, no cuestan más de doce mensualidades de cuotas ordinarias. Buscamos también las ayudas a la rehabilitación.' },
      { t: 'Garajes y trasteros', d: 'Comunidades solo de plazas o de trasteros, con cuentas sencillas pero sus propias normas de uso, limpieza, seguro y control de accesos.' },
      { t: 'Porteros y personal de la finca', d: 'Nóminas, seguros sociales, contratos, vacaciones y sustituciones del personal de la comunidad.' },
    ],
    preguntas: [
      { p: 'Un vecino mayor pide instalar un ascensor. ¿La comunidad está obligada?', r: 'Sí, si lo pide un propietario con discapacidad o mayor de 70 años y el coste anual repercutido, descontadas las ayudas, no supera doce mensualidades de gastos comunes (art. 10.1.b de la Ley de Propiedad Horizontal). Si supera ese importe, la junta puede acordarlo igualmente por mayoría.' },
      { p: '¿Administráis comunidades de garaje o de trasteros?', r: 'Sí, ya llevamos algunas en la zona. Como tienen menos gastos que un edificio de viviendas, su cuota también es menor.' },
    ],
    cerca: ['Prosperidad', 'Ventas', 'Fuente del Berro', 'Lista'],
  },
  {
    slug: 'tetuan-y-barrio-del-pilar',
    nombre: 'Tetuán y el Barrio del Pilar',
    corto: 'Tetuán y Barrio del Pilar',
    distrito: 'Tetuán y Fuencarral-El Pardo',
    comunidades: 13,
    revisado: false,
    descripcion: 'Administrador de fincas en Tetuán y el Barrio del Pilar. Rehabilitación de fachadas y ascensores, garajes de cientos de plazas y comunidades pequeñas con cuentas claras.',
    intro: 'Es la zona donde más comunidades administramos: 13 entre Tetuán y el Barrio del Pilar, desde edificios de pocos vecinos hasta un garaje de cientos de plazas.',
    como: [
      'Son dos barrios muy distintos. En Tetuán hay edificios antiguos y pequeños, de pocas viviendas, junto a promociones nuevas como las del paseo de la Dirección.',
      'El Barrio del Pilar se levantó en los años sesenta y setenta, con grandes bloques de muchas viviendas. Hoy sus comunidades afrontan la rehabilitación de fachadas, instalaciones y ascensores, y gestionan garajes muy grandes.',
    ],
    temas: [
      { t: 'Rehabilitación y ayudas', d: 'Fachadas, aislamiento, cubiertas y ascensores. Te informamos de las ayudas abiertas para mejorar la eficiencia energética y la accesibilidad, y preparamos la documentación.' },
      { t: 'Comunidades pequeñas', d: 'En una comunidad de ocho o diez vecinos cada euro cuenta: cuentas claras, presupuestos ajustados y un precio adaptado a su tamaño.' },
      { t: 'Garajes grandes', d: 'Garajes de cientos de plazas, con sus contratos de limpieza, ventilación, puertas y control de accesos, y un reparto de gastos justo.' },
      { t: 'Vecinos que no pagan', d: 'Reclamamos las deudas por la vía amistosa sin coste para la comunidad. Si hay que ir a juicio, en la tarifa Premium no cuesta abogados: se recupera de las costas del moroso.' },
    ],
    preguntas: [
      { p: '¿Nos ayudáis a pedir subvenciones para la fachada o el aislamiento?', r: 'Sí. Te informamos de las ayudas abiertas, preparamos la documentación y la tramitamos. Según el nivel que contratéis, la tramitación va incluida o se cobra aparte: lo verás en nuestras tarifas.' },
      { p: '¿Lleváis garajes grandes?', r: 'Sí, también en la zona: garajes de cientos de plazas, con sus propias cuentas, contratos y normas de uso.' },
    ],
    cerca: ['Cuatro Caminos', 'Bellas Vistas', 'Valdeacederas', 'Peñagrande', 'La Paz'],
  },
  {
    slug: 'centro',
    nombre: 'el centro de Madrid',
    corto: 'Centro',
    distrito: 'Centro',
    comunidades: 9,
    revisado: false,
    descripcion: 'Administrador de fincas en el centro de Madrid: Malasaña, Chueca, La Latina, Barrio de las Letras y Sol. Pisos turísticos, locales, edificios protegidos y convivencia.',
    intro: 'Ya administramos 9 comunidades en el centro de Madrid, en Malasaña, Chueca, La Latina, el Barrio de las Letras y Sol.',
    como: [
      'Son edificios antiguos, muchos de finales del siglo XIX y principios del XX, con pocas viviendas por planta, locales en la planta baja y muchos vecinos en poco espacio.',
      'Muchos están protegidos, así que cualquier obra en la fachada o en los elementos protegidos necesita permisos más exigentes. Y en los últimos años se ha sumado un asunto que preocupa a casi todas las comunidades: los pisos turísticos.',
    ],
    temas: [
      { t: 'Pisos turísticos', d: 'Desde abril de 2025, abrir un piso turístico nuevo exige la aprobación expresa de la junta. Te explicamos qué mayoría hace falta, cómo limitarlos o prohibirlos y cómo subirles su parte de los gastos.' },
      { t: 'Locales en la planta baja', d: 'Bares y tiendas en los bajos: reparto de gastos, obras, ruidos, salidas de humos y terrazas.' },
      { t: 'Obras en edificios antiguos', d: 'Bajantes, cubiertas, forjados de madera y ascensores donde casi no hay hueco. Coordinamos la licencia y el seguimiento de la obra con nuestros arquitectos.' },
      { t: 'Convivencia', d: 'Muchos vecinos en poco espacio. Unas normas de régimen interior claras y la mediación evitan muchos juicios.' },
    ],
    preguntas: [
      { p: '¿Puede la comunidad prohibir los pisos turísticos?', r: 'Sí. Desde el 3 de abril de 2025, destinar una vivienda a piso turístico exige la aprobación expresa de la comunidad (art. 7.3 de la Ley de Propiedad Horizontal). Hace falta el voto de tres quintas partes de los propietarios que, a su vez, representen tres quintas partes de las cuotas (art. 17.12). Con esa misma mayoría, la junta puede limitar o prohibir la actividad y subir hasta un 20 % la parte de los gastos que pagan esos pisos.', enlace: { href: '/blog/limitacion-de-uso-y-destino-de-viviendas-y-locales-en-edificios/', texto: 'Lee el artículo de Alberto Cano sobre la limitación de usos en los edificios' } },
      { p: '¿Qué pasa si el edificio está protegido?', r: 'Las obras en la fachada, la cubierta o los elementos protegidos necesitan una licencia específica y, a veces, el visto bueno de la comisión municipal de patrimonio. Lo tramitamos con un técnico para que la obra no se pare.' },
    ],
    cerca: ['Chamberí', 'Argüelles', 'Retiro', 'Arganzuela'],
  },
  {
    slug: 'chamartin',
    nombre: 'Chamartín',
    distrito: 'Chamartín',
    comunidades: 5,
    revisado: false,
    descripcion: 'Administrador de fincas en Chamartín. Comunidades con portería, calefacción central y garaje, y cuentas que se pueden revisar al detalle.',
    intro: 'Ya administramos 5 comunidades en el distrito de Chamartín.',
    como: [
      'Son edificios residenciales de calidad, muchos con portería, garaje y calefacción central, y con vecinos que esperan un servicio a la altura.',
      'En estas comunidades pesan mucho el personal de la finca, las salas de calderas y los garajes, y unas cuentas que se puedan revisar al detalle.',
    ],
    temas: [
      { t: 'Porteros y personal de la finca', d: 'Nóminas, seguros sociales, contratos, vacaciones y sustituciones. Y, como somos abogados, también el asesoramiento cuando surge un conflicto laboral.' },
      { t: 'Calefacción central', d: 'Lecturas y reparto de consumos, contratos de mantenimiento y la renovación de la sala de calderas cuando toca.' },
      { t: 'Garajes y coche eléctrico', d: 'Control de accesos, mantenimiento y los puntos de recarga que piden cada vez más vecinos.' },
      { t: 'Cuentas al detalle', d: 'Contabilidad por partida doble, un informe económico semanal al presidente y las facturas a disposición de cualquier propietario que quiera verlas.' },
    ],
    preguntas: [
      { p: '¿Puedo poner un cargador de coche eléctrico en mi plaza de garaje?', r: 'Sí. Para un punto de recarga de uso privado en tu plaza basta con comunicarlo antes a la comunidad: no hace falta que lo apruebe la junta (art. 17.5 de la Ley de Propiedad Horizontal). El coste de la instalación y del consumo es tuyo.' },
      { p: '¿Os encargáis de las nóminas del portero?', r: 'Sí. En las tarifas Media y Premium están incluidas las nóminas, los seguros sociales y los impuestos de los empleados de la comunidad.' },
    ],
    cerca: ['Ciudad Lineal', 'la Guindalera', 'Tetuán', 'Chamberí'],
  },
];

// Otras zonas donde también hay comunidades administradas, sin página propia (por ahora)
export const otrasZonas = [
  'Ciudad Lineal', 'Puente de Vallecas', 'Carabanchel', 'Chamberí', 'Argüelles', 'Retiro', 'Villaverde',
  'Las Rozas', 'Pozuelo de Alarcón', 'Alcobendas', 'San Sebastián de los Reyes', 'Móstoles',
];

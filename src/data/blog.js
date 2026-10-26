// Entradas del blog. Las cinco primeras vienen de la web antigua (mismo slug, con redirección
// desde la URL antigua en public/_redirects). Para añadir una entrada, copiar un bloque.
// `cuerpo` admite HTML sencillo (<p>, <ul>, <a>...).
// `revisado: false` = borrador legal pendiente de que lo revise el despacho: se muestra un aviso,
// no se indexa en Google y no entra en el mapa del sitio. Cambiar a `true` cuando esté revisado.
export const entradas = [
  {
    slug: 'como-cambiar-de-administrador-de-fincas',
    tipo: 'Guía',
    revisado: false,
    titulo: 'Cómo cambiar de administrador de fincas, paso a paso',
    resumen: 'Quién lo decide, qué mayoría hace falta, cómo se convoca la junta y qué pasa con la documentación. Con modelo de convocatoria para copiar.',
    cuerpo: `
      <p>Cambiar de administrador de fincas es más sencillo de lo que parece. La decisión es de la junta de propietarios y basta con mayoría simple. El resto es papeleo que puede hacer el nuevo administrador.</p>

      <h2>1. Quién decide el cambio</h2>
      <p>Nombrar y cesar al administrador es competencia de la junta de propietarios (art. 14 c) de la Ley de Propiedad Horizontal, LPH). Salvo que los estatutos digan otra cosa, los cargos se nombran por un año (art. 13.7 LPH), pero la junta puede acordar el cambio en cualquier momento.</p>
      <p>Antes de convocar, revisa el contrato con el administrador actual: algunos fijan un preaviso o una duración mínima.</p>

      <h2>2. Convocar la junta</h2>
      <p>La convoca el presidente. Si no quiere hacerlo, la puede convocar el 25 % de los propietarios, o los que representen al menos el 25 % de las cuotas (art. 16.1 LPH).</p>
      <p>La convocatoria debe indicar los asuntos a tratar, el lugar, el día y la hora, y notificarse a todos los propietarios en su domicilio (arts. 16.2 y 9 LPH). La junta ordinaria se convoca con al menos 6 días de antelación; una extraordinaria, con la antelación suficiente para que llegue a todos.</p>

      <h2>3. La votación</h2>
      <p>El cese y el nombramiento se aprueban por mayoría simple (art. 17.7 LPH):</p>
      <ul>
        <li><strong>En primera convocatoria:</strong> mayoría de propietarios que, a la vez, sumen la mayoría de las cuotas.</li>
        <li><strong>En segunda convocatoria:</strong> mayoría de los asistentes, siempre que representen más de la mitad de las cuotas de los presentes.</li>
      </ul>
      <p>Los propietarios que no estén al corriente de pago pueden hablar en la junta, pero no votar, salvo que hayan impugnado o consignado la deuda (art. 15.2 LPH).</p>

      <h2>4. El traspaso</h2>
      <p>El administrador saliente custodia la documentación de la comunidad (art. 20 e) LPH) y debe entregarla al nuevo: libros de actas, contabilidad, contratos, pólizas de seguro y la relación de deudores. El nuevo administrador también gestiona con el presidente el cambio de firmas en el banco.</p>

      <h2>Modelo de convocatoria</h2>
      <p>Puedes copiarlo y adaptarlo:</p>
      <div class="modelo">
        <button type="button" class="btn btn--secundario btn--peq" data-copiar="modelo-convocatoria">Copiar modelo</button>
        <pre id="modelo-convocatoria">COMUNIDAD DE PROPIETARIOS [DIRECCIÓN]

CONVOCATORIA DE JUNTA GENERAL EXTRAORDINARIA

Por la presente se convoca a todos los propietarios a la Junta General Extraordinaria que se celebrará el día [FECHA] en [LUGAR], a las [HORA] horas en primera convocatoria y, de no alcanzarse el quórum necesario, a las [HORA + 30 MIN] horas en segunda convocatoria, con el siguiente

ORDEN DEL DÍA

1. Cese del actual administrador de la comunidad.
2. Nombramiento de nuevo administrador y aprobación de su propuesta de honorarios.
3. Facultar al presidente para la firma del contrato con el nuevo administrador y para las gestiones bancarias necesarias.
4. Ruegos y preguntas.

Se recuerda que los propietarios que no estén al corriente de pago de las deudas vencidas con la comunidad podrán asistir y participar en las deliberaciones, pero no tendrán derecho a voto (art. 15.2 LPH). Quien no pueda asistir puede delegar su representación por escrito.

En [CIUDAD], a [FECHA]

El presidente / Los propietarios convocantes</pre>
      </div>

      <h2>¿Lo hacemos por vosotros?</h2>
      <p>En Qfincas preparamos con el presidente la convocatoria, asistimos a la junta si lo necesitáis y pedimos toda la documentación al administrador anterior. <a href="/cambiar-de-administrador/">Así funciona el cambio</a>.</p>
    `,
  },
  {
    slug: 'que-hacer-con-un-vecino-moroso',
    tipo: 'Guía',
    revisado: false,
    titulo: 'Qué hacer con un vecino moroso en la comunidad',
    resumen: 'Desde la reclamación amistosa hasta el procedimiento monitorio: los pasos para cobrar las deudas de la comunidad.',
    cuerpo: `
      <p>Cada propietario está obligado a pagar su parte de los gastos de la comunidad (art. 9.1 e) LPH). Cuando alguien deja de hacerlo, el resto de vecinos acaba pagando su parte. Estos son los pasos para recuperar la deuda.</p>

      <h2>1. Reclamación amistosa</h2>
      <p>Lo primero es un requerimiento por escrito al propietario con el detalle de la deuda. Muchas deudas se resuelven aquí, con un acuerdo de pago. En Qfincas esta reclamación extrajudicial no tiene coste para la comunidad.</p>

      <h2>2. Acuerdo de la junta</h2>
      <p>Si no paga, la junta aprueba la liquidación de la deuda, es decir, la cantidad exacta que debe. El acuerdo se notifica al propietario moroso en su domicilio o, si no es posible, en el tablón de anuncios de la comunidad (art. 9.1 h) LPH).</p>

      <h2>3. Certificado y procedimiento monitorio</h2>
      <p>Con el acuerdo notificado, el secretario emite un certificado de la deuda con el visto bueno del presidente. Ese certificado permite acudir al procedimiento monitorio, un juicio rápido pensado para reclamar deudas (art. 21 LPH). También se pueden reclamar los gastos del requerimiento previo.</p>
      <p>Si el deudor no paga ni se opone, el juzgado despacha ejecución y se pueden embargar sus bienes.</p>

      <h2>Otras consecuencias para el moroso</h2>
      <ul>
        <li><strong>No puede votar en las juntas</strong> mientras no esté al corriente, salvo que haya impugnado o consignado la deuda (art. 15.2 LPH).</li>
        <li><strong>La deuda sigue al piso:</strong> si lo vende, el comprador responde de lo que se deba del año en curso y de los tres años naturales anteriores (art. 9.1 e) LPH). Por eso el notario pide el certificado de deudas de la comunidad.</li>
      </ul>

      <h2>Lo más importante: no dejarlo pasar</h2>
      <p>Cuanto antes se reclama, más fácil es cobrar. Como somos administradores y abogados, en Qfincas llevamos todo el proceso, desde la primera carta hasta el juzgado, sin cambiar de interlocutor.</p>
    `,
  },
  {
    slug: 'derramas-en-la-comunidad-de-propietarios',
    tipo: 'Guía',
    revisado: false,
    titulo: 'Derramas en la comunidad: quién paga y cuándo son obligatorias',
    resumen: 'Qué es una derrama, cuándo hay que pagarla aunque votes en contra, quién la paga si vendes el piso y para qué sirve el fondo de reserva.',
    cuerpo: `
      <p>Una derrama es una cuota extraordinaria que la comunidad aprueba para pagar un gasto que no estaba en el presupuesto: una obra, una reparación urgente o una mejora.</p>

      <h2>Obras necesarias: siempre obligatorias</h2>
      <p>Las obras necesarias para conservar el edificio, mantener su seguridad y habitabilidad o cumplir la ley son obligatorias y no requieren acuerdo de la junta (art. 10.1 LPH). Todos los propietarios pagan según su cuota de participación, aunque no estén de acuerdo.</p>

      <h2>Mejoras: depende</h2>
      <p>Para mejoras que no son necesarias, la mayoría depende del tipo de obra. Si se aprueba una mejora no exigible cuya cuota supera tres mensualidades ordinarias de gastos comunes, quien votó en contra no está obligado a pagarla, aunque tampoco podrá usar esa mejora (art. 17.4 LPH).</p>

      <h2>Si vendes el piso, ¿quién paga la derrama?</h2>
      <p>Las derramas para mejoras las paga quien sea propietario cuando son exigibles, es decir, cuando vence el pago (art. 17.11 LPH). Por eso conviene dejar claro en el contrato de compraventa quién asume las derramas ya aprobadas.</p>

      <h2>El fondo de reserva</h2>
      <p>Toda comunidad debe tener un fondo de reserva de al menos el 10 % de su último presupuesto ordinario (art. 9.1 f) LPH). Sirve para obras de conservación y reparación y ayuda a que las derramas sean menores.</p>

      <h2>Cómo lo hacemos en Qfincas</h2>
      <p>Antes de una derrama, nuestros arquitectos e ingenieros revisan el presupuesto de la obra sin coste y buscamos ayudas y subvenciones del Ayuntamiento y la Comunidad de Madrid que puedan reducirla.</p>
    `,
  },
  {
    slug: 'junta-de-propietarios-guia-practica',
    tipo: 'Guía',
    revisado: false,
    titulo: 'La junta de propietarios: convocatoria, votos, actas e impugnación',
    resumen: 'Lo que todo propietario debe saber de la junta: cuándo se convoca, cómo se vota, qué pasa si no vas y cómo impugnar un acuerdo.',
    cuerpo: `
      <p>La junta de propietarios es el órgano que toma las decisiones de la comunidad. Esto es lo básico para participar con seguridad.</p>

      <h2>Cuándo se reúne</h2>
      <p>Al menos una vez al año, para aprobar el presupuesto y las cuentas, y siempre que lo considere el presidente o lo pidan el 25 % de los propietarios o de las cuotas (art. 16.1 LPH). La ordinaria se convoca con al menos 6 días de antelación (art. 16.2 LPH).</p>

      <h2>Primera y segunda convocatoria</h2>
      <p>En primera convocatoria hace falta que asista la mayoría de los propietarios que represente la mayoría de las cuotas. Si no se alcanza, la junta se celebra en segunda convocatoria, sin quórum mínimo, que puede celebrarse el mismo día media hora después (art. 16.2 LPH).</p>

      <h2>Si no puedes ir</h2>
      <ul>
        <li><strong>Puedes delegar</strong> en otra persona con un escrito firmado (art. 15.1 LPH).</li>
        <li><strong>Si no votas,</strong> tras recibir el acta tienes 30 días naturales para comunicar al secretario que no estás de acuerdo. Si no lo haces, tu voto cuenta a favor del acuerdo (art. 17.8 LPH).</li>
      </ul>

      <h2>El acta</h2>
      <p>El acta recoge los acuerdos y el resultado de las votaciones, y la firman el presidente y el secretario. Se envía a todos los propietarios y los errores se pueden corregir antes de la siguiente junta (art. 19 LPH).</p>

      <h2>Impugnar un acuerdo</h2>
      <p>Si un acuerdo es contrario a la ley o a los estatutos, perjudica gravemente a la comunidad o a un propietario, o se ha tomado con abuso de derecho, se puede impugnar en los tribunales (art. 18 LPH). El plazo es de 3 meses desde el acuerdo, o de 1 año si es contrario a la ley o a los estatutos. Para impugnar hay que estar al corriente de pago o consignar la deuda.</p>

      <h2>Juntas bien preparadas</h2>
      <p>En Qfincas preparamos cada junta con el presidente, asesoramos jurídicamente durante la votación y redactamos actas con la transcripción literal de los acuerdos.</p>
    `,
  },
  {
    slug: 'entrega-diploma-25-anos-colegiacion',
    tipo: 'Noticia',
    fecha: '2021',
    titulo: 'Diploma por 25 años de colegiación en el Colegio de la Abogacía de Madrid',
    resumen: 'El Ilustre Colegio de la Abogacía de Madrid reconoce a Alberto Cano Alsúa sus 25 años como colegiado.',
    imagen: '/img/blog/logo-icam.png',
    cuerpo: `
      <p>El Ilustre Colegio de la Abogacía de Madrid (ICAM) ha concedido a Alberto Cano Alsúa, director de Qfincas, el diploma conmemorativo por sus 25 años de colegiación. Alberto se incorporó al Colegio en mayo de 1996 y sigue ejerciendo como abogado.</p>
      <p>Con este diploma el Colegio reconoce a quienes, con su perseverancia, honran la profesión. Para nuestras comunidades significa algo muy concreto: el administrador que lleva sus cuentas es, además, un abogado con más de 30 años de experiencia.</p>
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
    slug: 'alberto-cano-director-del-curso-de-administracion-de-fincas-de-economist-jurist',
    tipo: 'Noticia',
    fecha: '2019',
    titulo: 'Alberto Cano, director del curso de administración de fincas de Economist & Jurist',
    resumen: 'Dirige en el área Executive de Economist & Jurist School el curso de especialización en administración de fincas y real estate management.',
    imagen: '/img/blog/logo-economist.png',
    cuerpo: `
      <p>Alberto Cano Alsúa dirige, en el área académica Executive de Economist & Jurist School, el curso de especialización en administración de fincas y real estate management, que se imparte en línea.</p>
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

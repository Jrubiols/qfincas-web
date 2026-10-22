// Contenido de cada servicio, tomado de la web actual y corregido.
// Cada entrada genera su propia página en /servicios/<slug>/
export const servicios = [
  {
    slug: 'administracion-de-fincas',
    guia: { titulo: 'Derramas en la comunidad: quién paga y cuándo son obligatorias', href: '/blog/derramas-en-la-comunidad-de-propietarios/' },
    grupo: 'Administración',
    titulo: 'Administración de fincas y gestión de patrimonios',
    corto: 'Administración de fincas',
    resumen: 'Gestión económica, juntas, reparaciones y cumplimiento legal de tu comunidad, con informes claros para el presidente y cada propietario.',
    imagen: '/img/s-fincas.webp',
    intro: 'Nos ocupamos del día a día de tu comunidad para que los vecinos no tengan que preocuparse de nada: cuentas, juntas, proveedores, averías y obligaciones legales.',
    bloques: [
      {
        titulo: 'Gestión económica',
        items: [
          'Presupuesto de gastos e ingresos, cuotas ordinarias y extraordinarias y reparto por propietario.',
          'Recaudación de cuotas, tramitación y cobro de recibos.',
          'Control de presupuestos y facturas de proveedores.',
          'Contabilidad diaria e informes económicos periódicos.',
          'Liquidación de tributos, retenciones, impuestos y seguros sociales.',
          'Balance anual de cuentas, transparente y explicado de forma comprensible.',
        ],
      },
      {
        titulo: 'Juntas de propietarios',
        items: [
          'Convocatoria, preparación y asistencia a las juntas.',
          'Redacción de actas ordinarias y extraordinarias.',
          'Ejecución y cumplimiento de los acuerdos adoptados.',
        ],
      },
      {
        titulo: 'Impagos, reparaciones y siniestros',
        items: [
          'Control riguroso de impagados, con reclamación extrajudicial incluida sin coste para la comunidad.',
          'Atención urgente de cualquier aviso, comunicado por los vecinos o detectado en nuestras visitas periódicas.',
          'Seguimiento de siniestros con el seguro, informando a los vecinos en todo momento.',
        ],
      },
      {
        titulo: 'Protección de la comunidad',
        items: [
          'Inspecciones periódicas obligatorias: ascensores, garajes, depósitos de combustible y baja tensión.',
          'Auditoría de eficiencia energética.',
          'Obligaciones fiscales y laborales.',
          'Cumplimiento de la normativa de protección de datos.',
        ],
      },
      {
        titulo: 'Constitución de comunidades',
        items: [
          'Puesta en marcha de comunidades, complejos residenciales y urbanizaciones.',
          'Redacción o modificación de estatutos y normas de régimen interior.',
          'Convocatoria, asistencia y acta de constitución.',
        ],
      },
      {
        titulo: 'Asesoría jurídica incluida',
        items: [
          'Asesoramiento jurídico gratuito sobre la Ley de Propiedad Horizontal.',
          'Resolución de contratos, mediación y reclamación a vecinos.',
          'Reclamación judicial a morosos sin coste de abogados en las tarifas Media y Premium.',
        ],
      },
    ],
  },
  {
    slug: 'administracion-y-gestion-de-alquileres',
    grupo: 'Administración',
    titulo: 'Administración y gestión de alquileres',
    corto: 'Gestión de alquileres',
    resumen: 'Desde la búsqueda del inquilino hasta el cobro de la renta y el mantenimiento de la vivienda.',
    imagen: '/img/s-alquileres.webp',
    intro: 'Para propietarios particulares, inversores y empresas inmobiliarias: gestionamos tus arrendamientos para mejorar la rentabilidad y conservar el valor de tus inmuebles.',
    bloques: [
      {
        titulo: 'Contratos',
        items: [
          'Elaboración, modificación y rescisión de contratos de alquiler.',
          'Selección de inquilinos con verificación de solvencia.',
          'Depósito de fianzas, traspasos y garantías del arrendamiento.',
          'Liquidación del aval.',
        ],
      },
      {
        titulo: 'Mantenimiento de la vivienda',
        items: [
          'Inspección y control periódico de las propiedades.',
          'Encargo y supervisión de las reparaciones necesarias.',
          'Revisión de las coberturas del seguro.',
          'Planificación del mantenimiento a medio plazo.',
        ],
      },
      {
        titulo: 'Administración de la renta',
        items: [
          'Emisión y cobro de recibos.',
          'Actualizaciones de renta.',
          'Reclamación de rentas e importes pendientes.',
          'Contabilidad de pagos y de ayudas al alquiler.',
          'Trámites con la Administración y certificados de eficiencia energética.',
        ],
      },
    ],
  },
  {
    slug: 'secretaria',
    guia: { titulo: 'La junta de propietarios: convocatoria, votos, actas e impugnación', href: '/blog/junta-de-propietarios-guia-practica/' },
    grupo: 'Administración',
    titulo: 'Secretaría',
    corto: 'Secretaría',
    resumen: 'Actas, convocatorias, certificados de deuda y custodia de toda la documentación de la comunidad.',
    imagen: '/img/s-secretaria.webp',
    intro: 'Asumimos las funciones de secretario que marca la Ley de Propiedad Horizontal, con todos los documentos al día y a disposición de los propietarios.',
    bloques: [
      {
        titulo: 'Juntas y comunicaciones',
        items: [
          'Asistencia a las juntas generales y de gobierno.',
          'Redacción y envío de convocatorias, actas, circulares e informes.',
          'Redacción de actas firmadas con el presidente y corrección de errores (art. 19 LPH).',
          'Recepción del voto de los propietarios ausentes (art. 17 LPH).',
          'Citaciones y notificaciones a los propietarios (art. 9.1 h LPH).',
        ],
      },
      {
        titulo: 'Certificados',
        items: [
          'Certificados de acuerdos, de deudas y de obras para deducciones fiscales.',
          'Certificado de deuda del inmueble en caso de venta (art. 9.1 e LPH).',
          'Certificados para la acción de cesación (art. 7.2 LPH) y para el proceso monitorio contra morosos (art. 21 LPH).',
        ],
      },
      {
        titulo: 'Documentación',
        items: [
          'Custodia de los libros de actas y de la documentación durante 5 años (art. 19.4 LPH).',
          'Digitalización de la documentación, accesible desde TuComunidad.',
          'Requerimientos y notificaciones a proveedores, empleados y contratas.',
          'Noticias de la comunidad y tablón de anuncios.',
        ],
      },
    ],
  },
  {
    slug: 'asesoria-juridica',
    guia: { titulo: 'Qué hacer con un vecino moroso en la comunidad', href: '/blog/que-hacer-con-un-vecino-moroso/' },
    grupo: 'Derecho',
    titulo: 'Asesoría jurídica',
    corto: 'Asesoría jurídica',
    resumen: 'Abogados colegiados para juicios, contratos, morosidad, temas laborales y protección de datos.',
    imagen: '/img/s-juridica.webp',
    intro: 'Somos abogados colegiados. Te asesoramos y defendemos en todo lo que afecta a tu comunidad, tu vivienda o tu empresa.',
    bloques: [
      {
        titulo: 'Procesos judiciales y contratos',
        items: [
          'Asistencia y defensa en juicios.',
          'Contratos civiles, mercantiles y de arrendamiento.',
          'Desahucios y reclamaciones de cantidad.',
          'Cancelación de hipotecas.',
          'Defectos constructivos, licencias y peritaciones.',
          'Recursos administrativos y contencioso-administrativos.',
          'Herencias, testamentarías, separaciones y divorcios.',
        ],
      },
      {
        titulo: 'Laboral',
        items: [
          'Convenio de empleados de fincas urbanas: categorías, jornada, salario y complementos.',
          'Despidos de empleados de la comunidad, desalojo de vivienda e indemnizaciones.',
          'Nóminas, seguros sociales y jubilaciones.',
        ],
      },
      {
        titulo: 'Prevención de riesgos laborales',
        items: [
          'Obligaciones de la comunidad y modalidad preventiva.',
          'Evaluación de riesgos, planificación y formación.',
          'Coordinación de actividades en obras y centros de trabajo.',
          'Accidentes laborales, mutuas y requerimientos de Inspección de Trabajo.',
        ],
      },
      {
        titulo: 'Protección de datos',
        items: [
          'Adaptación de la comunidad y del administrador a la normativa de protección de datos.',
          'Análisis de riesgos y medidas de seguridad.',
          'Cláusulas y contratos obligatorios.',
        ],
      },
      {
        titulo: 'Empresas',
        items: ['Asesoría integral de empresas.', 'Constitución de sociedades.'],
      },
    ],
  },
  {
    slug: 'consultoria-derecho',
    grupo: 'Derecho',
    titulo: 'Consultoría jurídica',
    corto: 'Consultoría jurídica',
    resumen: 'Analizamos tu caso, proponemos soluciones y te acompañamos hasta aplicarlas.',
    imagen: '/img/s-consultoria.webp',
    intro: 'Un método de trabajo en cuatro fases para resolver problemas complejos de tu comunidad o tu empresa.',
    bloques: [
      {
        titulo: '1. Inicio',
        items: ['Reuniones contigo.', 'Diagnóstico preliminar.', 'Propuesta de trabajo y contrato.'],
      },
      {
        titulo: '2. Diagnóstico',
        items: ['Análisis de los hechos.', 'Plan de acción con varias soluciones.', 'Evaluación de las opciones contigo.'],
      },
      {
        titulo: '3. Aplicación',
        items: ['Puesta en marcha de las medidas.', 'Ajustes y formación.', 'Resolución especializada.'],
      },
      {
        titulo: '4. Cierre',
        items: ['Evaluación e informe final.', 'Compromisos y plan de seguimiento.'],
      },
    ],
  },
  {
    slug: 'valoracion-inmobiliaria',
    grupo: 'Derecho',
    titulo: 'Valoración inmobiliaria',
    corto: 'Valoración inmobiliaria',
    resumen: 'Valoramos y vendemos tu inmueble sin exclusiva, con honorarios del 2 % al 2,5 %.',
    imagen: '/img/s-valoracion.webp',
    intro: 'Te acompañamos desde la valoración hasta la firma de la venta, sin exclusiva: puedes poner tu propio cartel o trabajar con otras agencias.',
    destacado: 'Honorarios del 2 % al 2,5 % sobre el precio final de venta. Sin exclusiva.',
    bloques: [
      {
        titulo: 'Qué incluye',
        items: [
          'Informe de valoración con estudio de mercado de inmuebles similares en la zona.',
          'Publicidad gratuita del inmueble en nuestra web y en portales especializados.',
          'Ficha detallada del inmueble para los posibles compradores.',
          'Informes periódicos de visitas y seguimiento de la compraventa.',
          'Tramitación del certificado de eficiencia energética.',
        ],
      },
    ],
  },
  {
    slug: 'asesoria-arquitectonica-e-industrial',
    grupo: 'Derecho',
    titulo: 'Asesoría arquitectónica e industrial',
    corto: 'Asesoría técnica',
    resumen: 'Arquitectos e ingenieros para obras, ITE, accesibilidad, instalaciones y ayudas públicas.',
    imagen: '/img/s-arquitectura.webp',
    intro: 'Nuestro equipo técnico de arquitectos e ingenieros resuelve tus dudas antes de contratar una obra o adaptar una instalación.',
    bloques: [
      {
        titulo: 'Arquitectura',
        items: [
          'Obras, urbanismo y deficiencias constructivas.',
          'Accesibilidad y eliminación de barreras arquitectónicas.',
          'Rehabilitación y medidas urgentes en caso de siniestro.',
          'Inspección Técnica de Edificios (ITE).',
          'Licencias de obra y actividad en el Ayuntamiento de Madrid.',
          'Ayudas y subvenciones del Ayuntamiento, la Comunidad de Madrid y el Estado.',
        ],
      },
      {
        titulo: 'Ingeniería industrial',
        items: [
          'Instalaciones en viviendas y locales: electricidad, gas, climatización, ascensores y puertas de garaje.',
          'Deficiencias en instalaciones y su corrección.',
          'Normativa nueva, como la individualización del consumo de calefacción.',
          'Inspecciones de baja tensión en edificios, garajes, piscinas y alumbrado exterior.',
          'Ayudas para sustituir o adaptar instalaciones.',
        ],
      },
    ],
  },
];

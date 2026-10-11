// Datos generales de Qfincas. Cambiar aquí y se actualiza en toda la web.
export const site = {
  nombre: 'Qfincas',
  nombreLargo: 'Q Fincas Soluciones',
  lema: 'Administración de fincas y abogados expertos en propiedad horizontal en Madrid',
  telefono: '91 544 83 24',
  telefonoLink: '+34915448324',
  // Pendiente: móvil de WhatsApp. Si se deja en null no se muestra el botón.
  whatsapp: null, // ej. '34600000000'
  email: 'secretaria@qfincas.com',
  direccion: 'C/ Jordi Solé Tura 9, local 5',
  ciudad: 'Madrid',
  // Pendiente: código postal exacto.
  cp: '',
  horario: [
    { dias: 'Lunes a jueves', horas: '9:00 a 18:00' },
    { dias: 'Viernes', horas: '9:00 a 15:00' },
  ],
  tucomunidad: 'https://www.tucomunidad.com/',
  colegiado: 'ICAM nº 59437',
};

export const nav = [
  {
    label: 'Nosotros',
    href: '/nosotros/',
    children: [
      { label: 'Quiénes somos', href: '/nosotros/' },
      { label: 'Certificaciones', href: '/nosotros/certificaciones/' },
      { label: 'Trabaja con nosotros', href: '/nosotros/trabaja/' },
    ],
  },
  { label: 'Servicios', href: '/servicios/', servicios: true },
  { label: 'Tarifas', href: '/tarifas/' },
  { label: 'Cambiar de administrador', href: '/cambiar-de-administrador/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/contacto/' },
];

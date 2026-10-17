export interface InvitationItem {
  id: string;
  code: string;
  title: string;
  category: 'bodas' | '15-anos' | 'cumpleanos' | 'varias';
  categoryLabel: string;
  style: string;
  demoUrl: string;
  previewImage: string;
  featured?: boolean;
  palette: string[];
  description: string;
  features: string[];
  musicGenre: string;
}

export const CATALOG_ITEMS: InvitationItem[] = [
  // --- BODAS ---
  {
    id: 'boda-001',
    code: 'BODA 001',
    title: 'Jonathan & Alicia',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Tipo Sobre Interactivo con Solapa y Sello Dorado',
    demoUrl: 'https://sites.google.com/view/bodajonathanyalicia/página-principal',
    previewImage: '/catalog/boda-001.png',
    featured: true,
    palette: ['#897148', '#c5a059', '#faf6e9', '#372b24'],
    description: 'Apertura cinemática estilo sobre de cera con revelación de invitación, cuenta regresiva y confirmación WhatsApp grupal.',
    features: ['Sobre digital interactivo', 'Música romántica', 'Ubicación Waze / Maps', 'Mesa de regalos'],
    musicGenre: 'Instrumental Acústico'
  },
  {
    id: 'boda-002',
    code: 'BODA 002',
    title: 'Aleli & Selvin',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Elegancia Botánica con Oro y Hojas de Olivo',
    demoUrl: 'https://sites.google.com/view/boda-aleli-y-selvin-001/página-principal',
    previewImage: '/catalog/boda-002.png',
    palette: ['#c09000', '#d8c048', '#faf6e9', '#ffffff'],
    description: 'Diseño floral y fresco con tonos verde eucalipto y dorado. Perfecto para bodas de día, jardín o hacienda.',
    features: ['Galería de novios', 'Itinerario detallado', 'Código de vestimenta', 'RSVP WhatsApp'],
    musicGenre: 'Piano Romántico'
  },
  {
    id: 'boda-003',
    code: 'BODA 003',
    title: 'Sofía & Joel',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Monograma Minimalista Champagne y Dorado',
    demoUrl: 'https://sites.google.com/view/sofia-joel-boda/página-principal',
    previewImage: '/catalog/boda-003.png',
    palette: ['#d4af37', '#ceb46f', '#ffffff', '#f4f4f4'],
    description: 'Líneas limpias, monograma entrelazado de iniciales y tarjeta virtual con acceso a recepción y ceremonia separadas.',
    features: ['Doble ubicación', 'Sugerencia de hospedaje', 'Conteo regresivo', 'Pase familiar'],
    musicGenre: 'Orquesta Clásica'
  },
  {
    id: 'boda-004',
    code: 'BODA 004',
    title: 'Catty & Edgar (Demo 1)',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Gala Negra & Oro Metálico con Marfil',
    demoUrl: 'https://sites.google.com/view/demo1-catty-y-edgar/página-principal',
    previewImage: '/catalog/boda-004.png',
    palette: ['#1c1917', '#d4af37', '#ffffff', '#f5ebd7'],
    description: 'Estética de máxima distinción con contrastes en negro y dorado metálico sobre fondos marfil.',
    features: ['Efecto de bienvenida', 'Audio autoplay con control', 'Lluvia de sobres', 'Mesa de regalos'],
    musicGenre: 'Balada Pop Cuerdas'
  },
  {
    id: 'boda-005',
    code: 'BODA 005',
    title: 'Catty & Edgar (Edición Especial)',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Verde Salvia, Menta y Plata Cristalina',
    demoUrl: 'https://sites.google.com/view/cattyyedgar/página-principal',
    previewImage: '/catalog/boda-005.png',
    palette: ['#6b8e73', '#90c0a8', '#cbd5e1', '#ffffff'],
    description: 'Sofisticación fresca en tonos verde salvia con acentos de plata cristalina y botones luminosos.',
    features: ['Tema nocturno exclusivo', 'Audio HQ', 'Dress Code formal', 'Mapa interactivo'],
    musicGenre: 'Violín Eléctrico Moderno'
  },
  {
    id: 'boda-006',
    code: 'BODA 006',
    title: 'Evelyn & Esdras',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Azul Celeste, Marino con Dorado y Blanco',
    demoUrl: 'https://sites.google.com/view/evelynyesdras/página-principal',
    previewImage: '/catalog/boda-006.png',
    palette: ['#0284c7', '#38bdf8', '#d4af37', '#ffffff'],
    description: 'Inspiración campestre y romántica en tonos azul celeste con destellos dorados y fondo blanco.',
    features: ['Pases personalizados', 'Notas para invitados', 'Waze directo', 'RSVP WhatsApp'],
    musicGenre: 'Guitarra Acústica Folk'
  },
  {
    id: 'boda-007',
    code: 'BODA 007',
    title: 'Johaniri & Giovanni',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Clásico Rojo Rubí, Blanco y Plata',
    demoUrl: 'https://sites.google.com/view/giovanni-y-milvia01/página-principal',
    previewImage: '/catalog/boda-007.png',
    palette: ['#dc2626', '#ffffff', '#cbd5e1', '#b91c1c'],
    description: 'Puro estilo clásico editorial en rojo intenso, blanco seda y detalles en plata real.',
    features: ['Cita bíblica / Dedicatoria', 'Itinerario de boda', 'Confirmación 1-clic', 'Música de entrada'],
    musicGenre: 'Canon de Pachelbel'
  },
  {
    id: 'boda-008',
    code: 'BODA 008',
    title: 'Guille & Miriam',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Azul Marino Vintage, Verde Oliva y Plata',
    demoUrl: 'https://sites.google.com/view/guille-miriam-001/página-principal',
    previewImage: '/catalog/boda-008.png',
    palette: ['#1e3a5f', '#4d6034', '#cbd5e1', '#ffffff'],
    description: 'Armonía en tonos celestes y plata con detalles florales vintage. Ideal para bodas de día y recepciones al aire libre.',
    features: ['Cuenta regresiva dinámica', 'Tarjeta de regalos bancaria', 'Ubicación satelital', 'RSVP'],
    musicGenre: 'Vals Clásico'
  },
  {
    id: 'boda-009',
    code: 'BODA 009',
    title: 'Gálvez & Meléndez',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Dorado Cálido, Beige y Blanco Marfil',
    demoUrl: 'https://sites.google.com/view/bodagalvezmelendez/página-principal',
    previewImage: '/catalog/boda-009.png',
    palette: ['#d4af37', '#fcd34d', '#f5ebd7', '#ffffff'],
    description: 'Marcos geométricos con flores blancas y fondo texturizado de papel artesanal.',
    features: ['Control de cupo por familia', 'Google Maps integrado', 'Playlist temática', 'RSVP directo'],
    musicGenre: 'Instrumental Contemporáneo'
  },
  {
    id: 'boda-010',
    code: 'BODA 010',
    title: 'Kevin & Judy',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Azul Celeste Suave, Lila Pastel y Blanco',
    demoUrl: 'https://sites.google.com/view/boda-kevin-y-judy/página-principal',
    previewImage: '/catalog/boda-010.png',
    palette: ['#93c5fd', '#c4b5fd', '#cbd5e1', '#ffffff'],
    description: 'Diseño sereno y luminoso para bodas de ensueño con detalles florales en acuarela.',
    features: ['Recomendaciones de vestimenta', 'Alojamiento cercano', 'Horario de transporte', 'RSVP'],
    musicGenre: 'Bossa Nova Suave'
  },
  {
    id: 'boda-011',
    code: 'BODA 011',
    title: 'Adam & Débora',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Verde Bosque Profundo, Dorado y Carbón',
    demoUrl: 'https://sites.google.com/view/demo-adam-y-debora/página-principal',
    previewImage: '/catalog/boda-011.png',
    palette: ['#142821', '#1f2937', '#d4af37', '#ffffff'],
    description: 'Majestuoso tono verde botella con detalles en hoja de oro. Sobriedad y distinción para recepciones de salón.',
    features: ['Sobre virtual desplegable', 'Itinerario por fases', 'Mesa de regalos Liverpool/Siman', 'RSVP'],
    musicGenre: 'Cello y Piano'
  },
  {
    id: 'boda-012',
    code: 'BODA 012',
    title: 'Jury & Víctor',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Dorado, Verde Olivo, Crema y Plata',
    demoUrl: 'https://sites.google.com/view/jury-y-victor-invitacion-boda/página-principal',
    previewImage: '/catalog/boda-012.png',
    palette: ['#d4af37', '#656d4a', '#fefae0', '#cbd5e1'],
    description: 'Elegancia clásica y natural con toques en dorado, verde olivo sereno, acentos en crema y detalles en plata.',
    features: ['Galería fotográfica', 'Confirmación automática', 'Pin de mapa', 'Música integrada'],
    musicGenre: 'Balada Acústica'
  },
  {
    id: 'boda-013',
    code: 'BODA 013',
    title: 'Chávez & Rivera',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Blanco, Rojo, Azul Marino y Dorado',
    demoUrl: 'https://sites.google.com/view/invitacion-boda-chavez-rivera/página-principal',
    previewImage: '/catalog/boda-013.png',
    palette: ['#ffffff', '#dc2626', '#0f172a', '#d4af37'],
    description: 'Diseño distinguido y memorable combinando blanco puro, rojo pasión, azul marino profundo y dorado de gala.',
    features: ['Animación de entrada', 'RSVP vía WhatsApp', 'Cuenta regresiva', 'Sobre digital'],
    musicGenre: 'Orquesta Sinfónica'
  },
  {
    id: 'boda-014',
    code: 'BODA 014',
    title: 'Kevin & Abigail',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Lila Romántico, Dorado y Melón',
    demoUrl: 'https://sites.google.com/view/boda-kevin-y-abigail/página-principal',
    previewImage: '/catalog/boda-014.png',
    palette: ['#c084fc', '#d4af37', '#fba879', '#ffffff'],
    description: 'Combinación fresca y romántica de lila pastel, detalles dorados y acentos cálidos en melón.',
    features: ['Dirección GPS con 1 toque', 'Asignación de mesas/pases', 'Buzón de buenos deseos', 'RSVP'],
    musicGenre: 'Piano Melódico'
  },
  {
    id: 'boda-015',
    code: 'BODA 015',
    title: 'Regina & Josué',
    category: 'bodas',
    categoryLabel: 'Boda',
    style: 'Azul Cielo Suave, Dorado Arena y Blanco',
    demoUrl: 'https://sites.google.com/view/boda-regina-y-josue-001/página-principal',
    previewImage: '/catalog/boda-015.png',
    palette: ['#7dd3fc', '#d4af37', '#f5ebd7', '#ffffff'],
    description: 'Tendencia bohemia y luminosa con toques celestes, arena dorada y caligrafía moderna fluida.',
    features: ['Audio play/pause flotante', 'Itinerario interactivo', 'Mesa de regalos', 'RSVP'],
    musicGenre: 'Guitarra Española'
  },

  // --- 15 AÑOS ---
  {
    id: 'xv-sobre-001',
    code: '15 AÑOS - Tipo sobre-1',
    title: 'Lisandra - Sobre Glamour',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Tipo Sobre Interactivo con Invitación Adentro',
    demoUrl: 'https://sites.google.com/view/lisandra-mis15-002/sobre',
    previewImage: '/catalog/xv-sobre-001.png',
    featured: true,
    palette: ['#7f1d1d', '#991b1b', '#d4af37', '#1c1917'],
    description: 'Apertura de sobre digital interactivo con sello de cera, revelación de tarjeta, cuenta regresiva y confirmación WhatsApp.',
    features: ['Sobre interactivo con apertura', 'Música juvenil', 'Waze & Maps', 'Confirmación grupal WhatsApp'],
    musicGenre: 'Pop Moderno & Vals'
  },
  {
    id: 'xv-sobre-002',
    code: '15 AÑOS - Tipo sobre-2',
    title: 'Valeria - Sobre Gala Real',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Tipo Sobre Princesa & Verde Esmeralda con Oro',
    demoUrl: 'https://sites.google.com/view/valeria-mis15-invitacion/sobre',
    previewImage: '/catalog/xv-sobre-002.png',
    featured: true,
    palette: ['#047857', '#065f46', '#d4af37', '#ffffff'],
    description: 'Sobre digital temático con corona de diamantes, animación de solapa y acceso a itinerario y galería.',
    features: ['Sobre digital', 'Galería de fotos de la quinceañera', 'Código de vestimenta', 'RSVP'],
    musicGenre: 'Vals de Quinceañera'
  },
  {
    id: 'xv-000',
    code: '15 AÑOS 000',
    title: 'Daniela Ramos',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Celeste, Dorado, Beige, Plata y Blanco',
    demoUrl: 'https://sites.google.com/view/daniela-ramos-mis15/página-principal',
    previewImage: '/catalog/xv-000.png',
    palette: ['#7dd3fc', '#d4af37', '#f5ebd7', '#cbd5e1', '#ffffff'],
    description: 'Fondo de ensueño con delicados tonos celestes, destellos dorados, toques beige y plata real sobre blanco.',
    features: ['Efectos de mariposa', 'Cuenta regresiva', 'Itinerario de vals y fiesta', 'RSVP'],
    musicGenre: 'Orquestal Fantasía'
  },
  {
    id: 'xv-001',
    code: '15 AÑOS 001',
    title: 'Mackeyla - Mis 15',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Palo Rosa, Rosa Dorado, Plata y Blanco',
    demoUrl: 'https://sites.google.com/view/invitacion-mackeyla-mis15/página-principal',
    previewImage: '/catalog/xv-001.png',
    palette: ['#d8a499', '#b76e79', '#cbd5e1', '#ffffff'],
    description: 'Elegancia juvenil y romántica en tonos palo rosa y rosa dorado con reflejos de plata y blanco perlado.',
    features: ['Lluvia de sobres virtual', 'Ubicación directa en Maps', 'Música incluida', 'RSVP'],
    musicGenre: 'Pop Acústico'
  },
  {
    id: 'xv-002',
    code: '15 AÑOS 002',
    title: 'Carmen Valeria',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Azul Real, Rojo y Dorado',
    demoUrl: 'https://sites.google.com/view/mis-15-carmen-valeria-002/página-principal',
    previewImage: '/catalog/xv-002.png',
    palette: ['#1e3a8a', '#0284c7', '#dc2626', '#d4af37', '#ffffff'],
    description: 'Contraste imponente de azul noche con rojos vivos y detalles en oro brillante para una fiesta de gala inolvidable.',
    features: ['Control de pases por familia', 'Música pop', 'Waze directo', 'RSVP'],
    musicGenre: 'Pop Internacional'
  },
  {
    id: 'xv-003',
    code: '15 AÑOS 003',
    title: 'Fátima',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Cielo Estrellado & Borgoña con Plata',
    demoUrl: 'https://sites.google.com/view/invitacion-mis15fatima/página-principal',
    previewImage: '/catalog/xv-003.png',
    palette: ['#881337', '#cbd5e1', '#fbcfe8', '#ffffff'],
    description: 'Inspiración galáctica y celestial. Fondo profundo con constelaciones de luz y tipografía estelar.',
    features: ['Animación estelar', 'Conteo en vivo', 'Dress Code formal', 'RSVP WhatsApp'],
    musicGenre: 'Cinemático Suave'
  },
  {
    id: 'xv-004',
    code: '15 AÑOS 004',
    title: 'Consuelo',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Romance Marsala & Fondo Oscuro de Gala',
    demoUrl: 'https://sites.google.com/view/mis-15-consuelo/página-principal',
    previewImage: '/catalog/xv-004.png',
    palette: ['#7f1d1d', '#1c1917', '#d4af37', '#ffffff'],
    description: 'Diseño floral romántico inspirado en jardines de noche, con pétalos sutiles y tarjeta de bendición de padres.',
    features: ['Palabras de agradecimiento', 'Ubicación GPS', 'Mesa de regalos', 'RSVP'],
    musicGenre: 'Piano Romántico'
  },
  {
    id: 'xv-005',
    code: '15 AÑOS 005',
    title: 'Johaniri',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Rosa, Fucsia, Dorado, Melón y Blanco',
    demoUrl: 'https://sites.google.com/view/mis15johaniri-0/página-principal',
    previewImage: '/catalog/xv-005.png',
    palette: ['#f472b6', '#d946ef', '#d4af37', '#fba879', '#ffffff'],
    description: 'Armonía vibrante y femenina en tonos rosa, fucsia alegre, destellos dorados y suaves acentos de melón sobre blanco.',
    features: ['Botón de confirmación', 'Música incluida', 'Dirección del evento', 'RSVP'],
    musicGenre: 'Vals Clásico & Pop'
  },
  {
    id: 'xv-006',
    code: '15 AÑOS 006',
    title: 'Dulce',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Fantasía Rosa Pastel & Destellos Dorados',
    demoUrl: 'https://sites.google.com/view/mis15dulcerodas/página-principal',
    previewImage: '/catalog/xv-006.png',
    palette: ['#f472b6', '#fbcfe8', '#d4af37', '#ffffff'],
    description: 'Elegancia y dulzura juvenil en tonos rosa pastel con detalles dorados y lazos cristalinos.',
    features: ['Sobre digital', 'Galería fotográfica', 'Pases familiares', 'RSVP'],
    musicGenre: 'Pop Melódico'
  },
  {
    id: 'xv-007',
    code: '15 AÑOS 007',
    title: 'Alisson R.',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Fucsia, Dorado, Blanco y Beige',
    demoUrl: 'https://sites.google.com/view/mis-15-alisson-ramirez/página-principal',
    previewImage: '/catalog/xv-007.png',
    palette: ['#d946ef', '#d4af37', '#ffffff', '#f5ebd7'],
    description: 'Paleta radiante de fiesta en fucsia intenso, oro de gala, fondo blanco y cálidos acentos beige.',
    features: ['Efecto fiesta nocturna', 'Audio ambiental', 'Waze/Maps', 'RSVP WhatsApp'],
    musicGenre: 'Remix Fiesta Moderno'
  },
  {
    id: 'xv-008',
    code: '15 AÑOS 008',
    title: 'Fátima Galindo',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Morado Imperial, Dorado, Blanco, Beige y Lila',
    demoUrl: 'https://sites.google.com/view/mis15-fatimagalindo-002/página-principal',
    previewImage: '/catalog/xv-008.png',
    palette: ['#7c3aed', '#d4af37', '#ffffff', '#f5ebd7', '#c084fc'],
    description: 'Majestuosidad en morado y lila con toques dorados, base beige y texto caligráfico de lujo.',
    features: ['Itinerario del evento', 'Lluvia de sobres', 'Música', 'RSVP'],
    musicGenre: 'Balada Pop'
  },
  {
    id: 'xv-009',
    code: '15 AÑOS 009',
    title: 'Yarlee',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Azul Profundo, Plata y Celeste',
    demoUrl: 'https://sites.google.com/view/yarlee-mis15-001/página-principal',
    previewImage: '/catalog/xv-009.png',
    palette: ['#1e3a8a', '#cbd5e1', '#38bdf8', '#ffffff'],
    description: 'Elegancia nocturna con fondo azul medianoche, detalles en plata brillante y destellos celestes.',
    features: ['Animación mágica', 'Cuenta regresiva', 'Ubicación Waze', 'RSVP'],
    musicGenre: 'Instrumental Fantasía'
  },
  {
    id: 'xv-010',
    code: '15 AÑOS 010',
    title: 'Dafny',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Verde Menta Pastel, Salvia y Plata',
    demoUrl: 'https://sites.google.com/view/dafny-mis15-00/página-principal',
    previewImage: '/catalog/xv-010.png',
    palette: ['#6ee7b7', '#a7f3d0', '#cbd5e1', '#ffffff'],
    description: 'Suaves tonos verde menta y salvia con reflejos plateados y efectos de entrada espectaculares.',
    features: ['Música en vivo', 'Itinerario de ceremonia y fiesta', 'Waze/Maps', 'RSVP'],
    musicGenre: 'Vals de Gala'
  },
  {
    id: 'xv-011',
    code: '15 AÑOS 011',
    title: 'Daniela',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Lila, Fucsia, Azul, Celeste y Blanco',
    demoUrl: 'https://sites.google.com/view/invitacion-mis-15-daniela--024/página-principal',
    previewImage: '/catalog/xv-011.png',
    palette: ['#c084fc', '#d946ef', '#1e3a8a', '#38bdf8', '#ffffff'],
    description: 'Combinación fresca y alegre con base lila y fucsia, acompañadas de azul marino, celeste y blanco.',
    features: ['Mapa directo', 'Contador regresivo', 'Mesa de regalos', 'RSVP WhatsApp'],
    musicGenre: 'Pop Juvenil'
  },
  {
    id: 'xv-012',
    code: '15 AÑOS 012',
    title: 'Astrid Ximena',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Dorado, Rojo y Blanco',
    demoUrl: 'https://sites.google.com/view/ximena-mis-15-invitacion/página-principal',
    previewImage: '/catalog/xv-012.png',
    palette: ['#d4af37', '#dc2626', '#ffffff'],
    description: 'Concepto llamativo y festivo con destellos en oro de gala, toques de rojo pasión y fondo blanco.',
    features: ['Modo Glow festivo', 'Música bailable', 'RSVP con selección de acompañantes', 'Mapa'],
    musicGenre: 'Dance Pop Electrónico'
  },
  {
    id: 'xv-013',
    code: '15 AÑOS 013',
    title: 'Jimena Escobar',
    category: '15-anos',
    categoryLabel: '15 Años',
    style: 'Verde Agua Cristalino, Plata y Blanco',
    demoUrl: 'https://sites.google.com/view/invitacion-jimena-mis15/página-principal',
    previewImage: '/catalog/xv-013.png',
    palette: ['#5eead4', '#99f6e4', '#cbd5e1', '#ffffff'],
    description: 'Diseño deslumbrante con cristales y efectos de destello para una fiesta inolvidable de quince años.',
    features: ['Itinerario completo', 'Confirmación 1-toque', 'Música ambiental', 'Ubicación satelital'],
    musicGenre: 'Pop Melódico & Fiesta'
  },

  // --- CUMPLEAÑOS ---
  {
    id: 'cumple-001',
    code: 'CUMPLE AÑOS 001',
    title: 'Mackeyla - Cumpleaños',
    category: 'cumpleanos',
    categoryLabel: 'Cumpleaños',
    style: 'Rojo Pasión & Celebración Festiva',
    demoUrl: 'https://sites.google.com/view/mackeyla/página-principal',
    previewImage: '/catalog/cumple-001.png',
    featured: true,
    palette: ['#dc2626', '#b91c1c', '#fef3c7', '#ffffff'],
    description: 'Diseño vibrante e impactante en tonos rojos y crema para celebraciones especiales con música y confirmación en línea.',
    features: ['Diseño dinámico', 'Música ambiental', 'Ubicación directa en Maps', 'Confirmación WhatsApp'],
    musicGenre: 'Pop Latino Alegre'
  },
  {
    id: 'cumple-002',
    code: 'CUMPLE AÑOS 002',
    title: 'Jared - Super Cumple',
    category: 'cumpleanos',
    categoryLabel: 'Cumpleaños',
    style: 'Rojo, Amarillo, Negro y Blanco',
    demoUrl: 'https://sites.google.com/view/cumple-jared/página-principal',
    previewImage: '/catalog/cumple-002.png',
    palette: ['#dc2626', '#eab308', '#000000', '#ffffff'],
    description: 'Temática infantil llena de energía con contrastes en rojo, amarillo brillante, negro y blanco.',
    features: ['Animación divertida', 'Música infantil', 'Ubicación GPS de piñatería', 'Confirmación fácil'],
    musicGenre: 'Música Infantil Alegre'
  },
  {
    id: 'cumple-003',
    code: 'CUMPLE AÑOS 003',
    title: '70 Años de Don Calín',
    category: 'cumpleanos',
    categoryLabel: 'Cumpleaños',
    style: 'Azul Marino y Dorado de Gala',
    demoUrl: 'https://sites.google.com/view/70-calin-002/página-principal',
    previewImage: '/catalog/cumple-003.png',
    featured: true,
    palette: ['#0f172a', '#1e3a8a', '#d4af37', '#ffffff'],
    description: 'Homenaje a una vida bien vivida: 70 años con azul marino profundo y dorado de distinción.',
    features: ['Galería histórica de fotos', 'Pases para familias', 'Ubicación en restaurante/salón', 'RSVP'],
    musicGenre: 'Música Clásica / Mariachi'
  },
  {
    id: 'cumple-004',
    code: 'CUMPLE AÑOS 004',
    title: '5 Años de Guillermo Emmanuel',
    category: 'cumpleanos',
    categoryLabel: 'Cumpleaños',
    style: 'Colores Básicos y Celeste',
    demoUrl: 'https://sites.google.com/view/cumple-5-guillermo-emmanuel/página-principal',
    previewImage: '/catalog/cumple-004.png',
    palette: ['#38bdf8', '#2563eb', '#dc2626', '#eab308', '#ffffff'],
    description: 'Aventura infantil en celeste cielo con los colores primarios básicos (azul, rojo y amarillo).',
    features: ['Música de fiesta infantil', 'Instrucciones para piñata y pastel', 'Waze directo', 'RSVP WhatsApp'],
    musicGenre: 'Canciones Infantiles Animadas'
  },
  {
    id: 'cumple-005',
    code: 'CUMPLE AÑOS 005',
    title: '80 Años de Don Agustín Ramos Buch',
    category: 'cumpleanos',
    categoryLabel: 'Cumpleaños',
    style: 'Magno Homenaje Presidencial 80 Años',
    demoUrl: 'https://sites.google.com/view/cumple80-agustin-ramos-buch/página-principal',
    previewImage: '/catalog/cumple-005.png',
    palette: ['#000000', '#d4af37', '#92400e', '#ffffff'],
    description: 'Celebración solemne de 80 años de vida con tributo a la trayectoria, bendiciones y banquete de gala.',
    features: ['Mensaje familiar de honor', 'Música instrumental selecta', 'Confirmación de asistencia', 'Mapa'],
    musicGenre: 'Marimba y Cuerdas'
  },

  // --- VARIAS / CORPORATIVAS ---
  {
    id: 'varias-001',
    code: 'CONVIVIO 001',
    title: 'Convivio Navideño & Fin de Año Corporativo',
    category: 'varias',
    categoryLabel: 'Corporativo',
    style: 'Rojo Navideño, Azul Corporativo y Dorado',
    demoUrl: 'https://sites.google.com/view/convivionavidadefx/página-principal',
    previewImage: '/catalog/varias-001.png',
    featured: true,
    palette: ['#dc2626', '#0c2a45', '#2b4f69', '#d0b48e', '#ffffff'],
    description: 'Para empresas, cooperativas y oficinas con espíritu navideño en rojo festivo, azul corporativo y acentos dorados.',
    features: ['Registro de colaboradores', 'Itinerario de rifas y cena', 'Dress code de gala/navideño', 'Waze directo'],
    musicGenre: 'Villancicos Jazz Modernos'
  },
  {
    id: 'varias-002',
    code: 'PRIMERA COMUNIÓN 001',
    title: 'Primera Comunión & Bautizo Angelical',
    category: 'varias',
    categoryLabel: 'Religioso',
    style: 'Blanco Puro, Cáliz & Ángeles Dorados',
    demoUrl: 'https://sites.google.com/view/mackeyla/página-principal',
    previewImage: '/catalog/varias-002.png',
    palette: ['#ffffff', '#d4af37', '#cbd5e1', '#f5ebd7'],
    description: 'Diseño solemne y angelical para sacramentos de la Iglesia Católica o ceremonias cristianas familiares.',
    features: ['Horario de misa y almuerzo', 'Nombres de padrinos', 'Versículo sagrado', 'RSVP WhatsApp'],
    musicGenre: 'Música Sacra y Acústica'
  },
  {
    id: 'varias-003',
    code: 'REVELACIÓN 002',
    title: "Revelación de Género: It's a Boy or Girl?",
    category: 'varias',
    categoryLabel: 'Baby Shower',
    style: 'Doble Tono Rosa Pastel & Celeste Cielo',
    demoUrl: 'https://sites.google.com/view/its-a-boy-or-girl/página-principal',
    previewImage: '/catalog/varias-003.jpg',
    palette: ['#38bdf8', '#f472b6', '#ffffff', '#cbd5e1'],
    description: 'Dinámica divertida para votar en vivo antes del evento: ¿Será niño o niña? Con instrucciones para los invitados.',
    features: ['Votación previa por WhatsApp', 'Mesa de regalos de bebé', 'Ubicación GPS', 'RSVP'],
    musicGenre: 'Lullaby Acústico'
  }
];

export interface PricingPackage {
  groups: string;
  priceQ: number;
  popular?: boolean;
  idealFor: string;
  perInvitation: string;
  features: string[];
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    groups: '1 a 25 Grupos',
    priceQ: 300,
    idealFor: 'Eventos íntimos y bodas civiles (hasta ~75 personas)',
    perInvitation: 'Q12.00 por grupo familiar',
    features: [
      'Invitación digital personalizada con nombre de grupo',
      'Número exacto de personas por pase',
      'Confirmación directa a tu WhatsApp',
      'Ubicación GPS en Waze y Google Maps',
      'Cuenta regresiva en vivo',
      'Música de fondo a tu elección',
      'Vigencia garantizada durante 8 meses'
    ]
  },
  {
    groups: '1 a 50 Grupos',
    priceQ: 375,
    popular: true,
    idealFor: 'El más solicitado (~100-150 personas)',
    perInvitation: 'Q7.50 por grupo familiar',
    features: [
      'Todo lo del paquete anterior',
      'Hasta 50 enlaces únicos personalizados',
      'Mesa de regalos / Cuenta bancaria',
      'Código de vestimenta con guía visual',
      'Galería de fotos de los festejados',
      'Soporte directo para ajustes de texto',
      'Entrega exprés disponible'
    ]
  },
  {
    groups: '1 a 100 Grupos',
    priceQ: 425,
    idealFor: 'Bodas medianas y 15 Años grandes (~180-250 personas)',
    perInvitation: 'Q4.25 por grupo familiar',
    features: [
      'Todo lo del paquete anterior',
      'Hasta 100 enlaces únicos personalizados',
      'Organización de lista de invitados asistida',
      'Mensaje de bendición o dedicatoria',
      'Recepción de confirmaciones organizada',
      'Opción de agregar hospedaje y notas de transporte',
      'Asesoría personalizada en WhatsApp'
    ]
  },
  {
    groups: '1 a 150 Grupos',
    priceQ: 500,
    idealFor: 'Mega eventos, galas corporativas y bodas de salón (~300+ personas)',
    perInvitation: 'Q3.33 por grupo familiar',
    features: [
      'Todo lo del paquete anterior',
      'Hasta 150 enlaces únicos personalizados',
      'Doble ubicación (Ceremonia + Recepción)',
      'Control riguroso de pases de adultos y menores',
      'Múltiples administradores de confirmación',
      'Atención prioritaria y entrega rápida'
    ]
  }
];

export const ADDONS = [
  {
    id: 'sobres',
    title: 'Imágenes Tipo Sobre Personalizadas',
    price: 50,
    sampleImages: ['/sobres 001.png'],
    description: 'si lo que desea es economizar, y solamente comprar la invitación sin nombres y numero de invitados dentro de la misma invitación (libre), la opción  ultima, que es: Una imagen aparte de la invitación, con nombre y numero de invitados (tipo sobre), se le puede realizar de 1 a 100 por solo Q50. extra. Se le entrega entonces; La invitación y hasta 100 imágenes (tipo sobre), que usted enviará a cada invitado (invitación/link + imagen).',
    badge: 'Opción Económica (+Q50)'
  },
  {
    id: 'video',
    title: 'Video Invitación para Estados / Reels (*Desde Q250)',
    price: 250,
    description: 'Video animado de alta definición con música y efectos visuales (*Costo variable desde Q250 según duración y detalles), ideal para compartir en Instagram Stories, TikTok y estados de WhatsApp.'
  },
  {
    id: 'pdf',
    title: 'Documento PDF Interactivo con Hipervínculos',
    price: 150,
    description: 'Documento descargable interactivo con hipervínculos y botones táctiles para abrir mapas Waze/Maps, confirmar asistencia y ver detalles sin depender del navegador.'
  }
];

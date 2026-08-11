export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: 'Próximos' | 'Pasados';
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  registrationStatus: 'open' | 'opening-soon' | 'closed' | 'not-applicable';
  type: 'Taller' | 'Conferencia' | 'Vinculación' | 'Webinar' | 'Programa';
  date: string;
  time: string;
  location: string;
  modality: 'Presencial' | 'En Línea' | 'Híbrido' | 'Programa Híbrido';
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  imageVerified: boolean;
  registrationUrl?: string;
  externalUrl?: string;
  featured?: boolean;
  galleryAlbumId?: string;
}

export const EVENTS_DATA: EventItem[] = [
  // PRÓXIMO EVENTO
  {
    id: 'ieee-ntc-region-9-virtual-summit-2026',
    slug: 'ieee-ntc-region-9-virtual-summit-2026',
    title: 'IEEE NTC Region 9 Student Virtual Summit 2026',
    category: 'Próximos',
    status: 'upcoming',
    registrationStatus: 'opening-soon',
    type: 'Conferencia',
    date: '15 de Octubre de 2026',
    time: '09:00 AM (UTC-05:00)',
    location: 'En línea vía IEEE vTools / Zoom',
    modality: 'En Línea',
    summary: 'Cumbre regional virtual de capítulos estudiantiles del IEEE Nanotechnology Council en América Latina.',
    description: 'Encuentro regional que reúne a los capítulos estudiantiles del IEEE Nanotechnology Council de la Región 9 (América Latina y el Caribe). Incluye conferencias magistrales con investigadores internacionales, paneles de desarrollo profesional, presentaciones de pósters científicos y sesiones de networking.',
    image: '/assets/events/ieee_temscon_latam.jpg',
    imageAlt: 'IEEE NTC Region 9 Student Virtual Summit 2026',
    imageVerified: true,
    featured: true
  },

  // EVENTOS PASADOS
  {
    id: 'nanotalks-dominios-magneticos',
    slug: 'nanotalks-dominios-magneticos',
    title: 'NanoTalks: Dominios Magnéticos y Microscopías para su Observación',
    category: 'Pasados',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Webinar',
    date: '16 de Julio de 2026',
    time: '10:00 AM (UTC-05:00)',
    location: 'En línea vía CEDIA / Zoom (ID: 89441870589)',
    modality: 'En Línea',
    summary: 'Conferencia magistral online con el Dr. José Miguel García-Martín (IMN CSIC, España) sobre física de dominios magnéticos y microscopía avanzada.',
    description: 'Conferencia magistral online organizada por IEEE Nanotechnology Council Yachay Tech Student Branch y el IEEE NTC Ecuador Chapter. El Dr. José Miguel García-Martín (Instituto de Micro y Nanotecnología - CSIC, España) expuso sobre la física de dominios magnéticos, microscopía de fuerza magnética y aplicaciones nanotecnológicas.',
    image: '/assets/events/nanotalks_dominios_magneticos.png',
    imageAlt: 'Conferencia NanoTalks Dominios Magnéticos y Microscopías para su Observación',
    imageVerified: true,
    externalUrl: 'https://cedia.zoom.us/j/89441870589',
    featured: false
  },
  {
    id: 'lanano-paper-training',
    slug: 'lanano-paper-training',
    title: 'Programa de Mentoría y Formación Científica IEEE LANANO 2026',
    category: 'Pasados',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Programa',
    date: 'Junio–Julio 2026',
    time: 'Sesiones Flexibles',
    location: 'Yachay Tech University & Mentoría Virtual',
    modality: 'Programa Híbrido',
    summary: 'Iniciativa estructurada de investigación para conectar a estudiantes con mentores internacionales para IEEE LANANO 2026.',
    description: 'Programa estructurado de investigación científica que agrupa a estudiantes por afinidad temática y los conecta con mentores nacionales e internacionales. Los equipos reciben orientación integral para redactar y publicar artículos científicos originales (4–6 páginas) en la conferencia IEEE LANANO 2026.',
    image: '/assets/events/lanano_paper_training.png',
    imageAlt: 'Programa de Mentoría Científica IEEE LANANO 2026',
    imageVerified: true,
    externalUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/',
    featured: true
  },
  {
    id: 'nanoskills-workshop',
    slug: 'nanoskills-workshop',
    title: 'Taller Práctico NanoSkills: Síntesis y Caracterización',
    category: 'Pasados',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Taller',
    date: '21 de Junio de 2026',
    time: '09:00 AM - 01:00 PM',
    location: 'Laboratorio de Nanotecnología, Yachay Tech University',
    modality: 'Presencial',
    summary: 'Sesión intensiva de laboratorio sobre síntesis verde de nanopartículas y espectrofotometría UV-Vis.',
    description: 'Taller experimental exclusivo diseñado para miembros del capítulo con el objetivo de adquirir competencias prácticas en síntesis verde de nanopartículas, análisis de espectrofotometría UV-Vis y redacción de protocolos de laboratorio de alta fidelidad.',
    image: '/assets/events/nanoskills_hands_on.jpg',
    imageAlt: 'Taller Práctico NanoSkills Síntesis y Caracterización',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'nanoskills-workshop'
  },
  {
    id: 'dia-del-nino-hospital-san-vicente',
    slug: 'dia-del-nino-hospital-san-vicente',
    title: "Día del Niño Inmersivo: Tecnología y Sonrisas",
    category: 'Pasados',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Vinculación',
    date: '01 de Junio de 2026',
    time: '09:00 AM - 01:00 PM',
    location: 'Hospital San Vicente de Paúl, Ibarra',
    modality: 'Presencial',
    summary: 'Intervención humanitaria con Realidad Virtual Meta Quest 3 beneficiando a 25 pacientes de la UCI Pediátrica.',
    description: 'Intervención humanitaria y de vinculación social desarrollada en el Hospital San Vicente de Paúl en Ibarra. Con visores Meta Quest 3, desinfección clínica de bioseguridad y voluntariado con disfraces de payasos, se brindaron entornos virtuales educativos y apoyo emocional a 25 niños internados.',
    image: '/assets/events/dia_del_nino_hospital.jpg',
    imageAlt: "Día del Niño Inmersivo en Hospital San Vicente de Paúl",
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'dia-del-nino-hospital'
  },
  {
    id: 'logic-lock',
    slug: 'logic-lock',
    title: 'Logic Lock: Herramienta de IA para Referencias Bibliográficas',
    category: 'Pasados',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Taller',
    date: '12 de Marzo de 2026',
    time: '07:30 PM',
    location: 'Yachay Tech University y Sesión Virtual',
    modality: 'Híbrido',
    summary: 'Primera reunión técnica del capítulo y presentación de herramienta de IA para sistematización de literatura PRISMA.',
    description: 'Sesión inaugural técnica de IEEE NTC Yachay Tech donde se presentó Logic Lock, una herramienta basada en Inteligencia Artificial diseñada para la automatización, filtrado y reproducibilidad de revisiones sistemáticas de literatura científica bajo metodología PRISMA.',
    image: '/assets/events/logic_lock_post.png',
    imageAlt: 'Logic Lock Herramienta IA para Referencias Bibliográficas 12 de Marzo',
    imageVerified: true,
    featured: false
  },
  {
    id: 'ieee-mtt-s-bpc-workshop',
    slug: 'ieee-mtt-s-bpc-workshop',
    title: 'Taller Conjunto IEEE MTT-S & NTC 2026',
    category: 'Pasados',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Taller',
    date: '20 de Mayo de 2026',
    time: '10:00 AM - 02:00 PM',
    location: 'Edificio de Ingeniería, Yachay Tech University',
    modality: 'Presencial',
    summary: 'Iniciativa interinstitucional sobre aplicaciones electromagnéticas de microondas y nanomateriales de alta frecuencia.',
    description: 'Iniciativa conjunta con IEEE MTT-S que reunió a investigadores y estudiantes para explorar aplicaciones de microondas, caracterización de nanomateriales a alta frecuencia y tecnologías bioelectromagnéticas aplicadas a la salud.',
    image: '/assets/events/ieee_mtts_ntc_workshop.jpg',
    imageAlt: 'Taller Conjunto IEEE MTT-S & NTC Delegación Oficial',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'mtts-ntc-workshop'
  },
  {
    id: 'ieee-temscon-latam-2026',
    slug: 'ieee-temscon-latam-2026',
    title: 'Participación en IEEE TEMSCON LATAM 2026',
    category: 'Pasados',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Conferencia',
    date: '15 de Mayo de 2026',
    time: '08:30 AM - 05:30 PM',
    location: 'Sede UNASUR, Mitad del Mundo, Quito',
    modality: 'Presencial',
    summary: 'Participación de la directiva en la conferencia insignia de gestión tecnológica de IEEE Región 9.',
    description: 'La directiva y miembros de IEEE NTC Yachay Tech asistieron a IEEE TEMSCON LATAM 2026, participando en paneles sobre innovación en ingeniería, gestión de proyectos de nanotecnología y articulación académica regional.',
    image: '/assets/events/ieee_temscon_latam.jpg',
    imageAlt: 'Delegación IEEE NTC Yachay Tech en IEEE TEMSCON LATAM',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'temscon-latam-2026'
  },
  {
    id: 'visita-victor-manuel-guzman',
    slug: 'visita-victor-manuel-guzman',
    title: 'Visita U.E. Víctor Manuel Guzmán',
    category: 'Pasados',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Vinculación',
    date: '05 de Mayo de 2026',
    time: '09:00 AM - 01:30 PM',
    location: 'Unidad Educativa Víctor Manuel Guzmán, Ibarra',
    modality: 'Presencial',
    summary: 'Jornada de divulgación STEM con demostraciones interactivas y simulación de nanotecnología en Realidad Virtual.',
    description: 'El equipo de vinculación STEM visitó a los estudiantes de la U.E. Víctor Manuel Guzmán en Ibarra, realizando experimentos de efectos de escala, ferrofluidos, materiales superhidrofóbicos e inmersión en Realidad Virtual con visores Meta Quest 3.',
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    imageAlt: 'Visita de Vinculación STEM a la U.E. Víctor Manuel Guzmán',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'visita-victor-manuel-guzman'
  },
  {
    id: 'launch-ieee-ntc',
    slug: 'launch-ieee-ntc',
    title: 'Ceremonia de Posesión de la Directiva Fundadora',
    category: 'Pasados',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Conferencia',
    date: '20 de Febrero de 2026',
    time: '02:00 PM - 04:30 PM',
    location: 'Auditorio Principal, Yachay Tech University',
    modality: 'Presencial',
    summary: 'Asamblea solemne de inauguración y juramentación del primer capítulo IEEE NTC de Ecuador.',
    description: 'Asamblea formal y acto de juramentación de la directiva fundadora del Capítulo Estudiantil IEEE Nanotechnology Council en Yachay Tech University, formalizando su plan de trabajo anual 2026-2027.',
    image: '/assets/gallery/posesion_directivos_1.jpg',
    imageAlt: 'Ceremonia de Posesión de la Directiva IEEE NTC Yachay Tech',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'posesion-directivos'
  }
];

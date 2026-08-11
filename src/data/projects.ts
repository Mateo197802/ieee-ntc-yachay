export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Investigación' | 'Vinculación' | 'Innovación' | 'Servicio';
  status: 'Activo' | 'Completado' | 'Planificación';
  summary: string;
  description: string;
  technologies: string[];
  team: string[];
  image: string;
  paperUrl?: string;
  codeUrl?: string;
  outcomes?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'logic-lock',
    slug: 'logic-lock',
    title: 'Logic Lock: Pipeline PRISMA Automatizado con IA',
    category: 'Investigación',
    status: 'Activo',
    summary: 'Herramienta de software con Inteligencia Artificial para acelerar, filtrar y reproducir revisiones sistemáticas de literatura científica.',
    description: 'Framework automatizado de IA diseñado para optimizar el protocolo de revisiones sistemáticas PRISMA. Integra orquestación de LLMs, deduplicación algorítmica y análisis cienciométrico para erradicar alucinaciones en la minería de literatura clínica y nanotecnológica.',
    technologies: ['Python', 'Large Language Models', 'Orquestación de APIs', 'Protocolo PRISMA', 'Cienciometría'],
    team: ['Mateo Gavilanes (Líder Técnico)', 'Ethan Guevara'],
    image: '/assets/events/logic_lock_post.png',
    outcomes: 'Pipeline funcional en fase piloto para semilleros de investigación y revisiones sistemáticas.'
  },
  {
    id: 'lanano-paper-training-initiative',
    slug: 'lanano-paper-training-initiative',
    title: 'Semillero de Redacción Científica IEEE LANANO 2026',
    category: 'Investigación',
    status: 'Activo',
    summary: 'Programa de mentoría técnica para la redacción de artículos de investigación de 4–6 páginas para su publicación en IEEE Xplore.',
    description: 'Iniciativa colaborativa de capacitación en redacción científica para conectar a estudiantes con investigadores experimentados. Los participantes aprenden diseño experimental, análisis de datos, formato LaTeX IEEE y estructuración de manuscritos científicos.',
    technologies: ['LaTeX', 'IEEE Xplore Templates', 'Zotero', 'Análisis Estadístico'],
    team: ['Solange Criollo (Coordinadora)', 'Mateo Gavilanes', 'Ethan Guevara'],
    image: '/assets/events/lanano_paper_training.png',
    paperUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/',
    outcomes: 'Propuestas de artículos sometidas a revisión por pares en 4 líneas de investigación.'
  },
  {
    id: 'stem-outreach-schools',
    slug: 'stem-outreach-schools',
    title: 'Programa de Divulgación STEM en Colegios',
    category: 'Vinculación',
    status: 'Completado',
    summary: 'Programa de divulgación científica con módulos interactivos de nanotecnología en colegios públicos de Imbabura.',
    description: 'Módulos educativos experimentales diseñados para despertar la vocación científica en nanociencia, ciencia de materiales e ingeniería entre estudiantes de secundaria mediante demostraciones prácticas.',
    technologies: ['Demostraciones Interactivas', 'Materiales Superhidrofóbicos', 'Ferrofluidos', 'Kits STEM'],
    team: ['Kennedy Rodríguez (Líder)', 'Fernanda Landázuri', 'Ethan Guevara'],
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    outcomes: 'Más de 150 estudiantes de bachillerato alcanzados en Ibarra y cantones aledaños.'
  },
  {
    id: 'hospital-paediatric-service',
    slug: 'hospital-paediatric-service',
    title: "Día del Niño Inmersivo: Tecnología y Sonrisas",
    category: 'Servicio',
    status: 'Completado',
    summary: 'Intervención humanitaria en el Hospital San Vicente de Paúl usando visores Meta Quest 3 y protocolos de bioseguridad.',
    description: 'Proyecto de servicio y voluntariado humanitario que llevó simulaciones virtuales educativas y momentos de alegría a 25 niños internados en las áreas pediátricas y UCI del Hospital San Vicente de Paúl en Ibarra.',
    technologies: ['Meta Quest 3 VR', 'Protocolos de Bioseguridad', 'Simulaciones Médicas', 'Voluntariado Humanitario'],
    team: ['Solange Criollo (Líder)', 'Mateo Gavilanes', 'Ethan Guevara', 'Emily Pérez', 'Fernanda Landázuri', 'Kennedy Rodríguez'],
    image: '/assets/events/dia_del_nino_hospital.jpg',
    outcomes: '25 pacientes pediátricos beneficiados con experiencias inmersivas adaptadas y seguras.'
  },
  {
    id: 'vr-nano-museum',
    slug: 'vr-nano-museum',
    title: 'Museo Virtual de Nanotecnología (MuseumMaster VR)',
    category: 'Innovación',
    status: 'Activo',
    summary: 'Framework interactivo en Realidad Virtual desarrollado en C#/Unity para la visualización inmersiva de nanoestructuras moleculares.',
    description: 'Entorno inmersivo en 3D que permite a los usuarios interactuar con modelos a escala atómica de nanotubos de carbono, fullerenos y nanopartículas magnéticas, revolucionando la enseñanza de la nanotecnología.',
    technologies: ['Unity 3D', 'C#', 'Meta XR SDK', 'Modelado Molecular', 'OpenXR'],
    team: ['Mateo Gavilanes (Arquitecto VR)', 'Kennedy Rodríguez'],
    image: '/assets/gallery/actividad_colegio_1.jpg',
    outcomes: 'Framework interactivo presentado en colegios de la región y en proceso de expansión a museos de ciencia.'
  }
];

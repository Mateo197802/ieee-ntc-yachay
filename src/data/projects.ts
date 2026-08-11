export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  category: 'Investigación' | 'Vinculación' | 'Innovación' | 'Servicio';
  categoryEn: 'Research' | 'Outreach' | 'Innovation' | 'Service';
  status: 'Activo' | 'Completado' | 'Planificación';
  statusEn: 'Active' | 'Completed' | 'Planning';
  summary: string;
  summaryEn: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  technologiesEn: string[];
  team: string[];
  teamEn: string[];
  image: string;
  paperUrl?: string;
  codeUrl?: string;
  outcomes?: string;
  outcomesEn?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'logic-lock',
    slug: 'logic-lock',
    title: 'Logic Lock: Pipeline PRISMA Automatizado con IA',
    titleEn: 'Logic Lock: AI-Automated PRISMA Pipeline',
    category: 'Investigación',
    categoryEn: 'Research',
    status: 'Activo',
    statusEn: 'Active',
    summary: 'Herramienta de software con Inteligencia Artificial para acelerar, filtrar y reproducir revisiones sistemáticas de literatura científica.',
    summaryEn: 'AI software tool to accelerate, filter, and reproduce systematic scientific literature reviews.',
    description: 'Framework automatizado de IA diseñado para optimizar el protocolo de revisiones sistemáticas PRISMA. Integra orquestación de LLMs, deduplicación algorítmica y análisis cienciométrico para erradicar alucinaciones en la minería de literatura clínica y nanotecnológica.',
    descriptionEn: 'Automated AI framework designed to optimize the PRISMA systematic review protocol. Integrates LLM orchestration, algorithmic deduplication, and scientometric analysis to eliminate hallucinations in clinical and nanotechnology literature mining.',
    technologies: ['Python', 'Large Language Models', 'Orquestación de APIs', 'Protocolo PRISMA', 'Cienciometría'],
    technologiesEn: ['Python', 'Large Language Models', 'API Orchestration', 'PRISMA Protocol', 'Scientometrics'],
    team: ['Mateo Gavilanes (Líder Técnico)', 'Ethan Guevara'],
    teamEn: ['Mateo Gavilanes (Technical Lead)', 'Ethan Guevara'],
    image: '/assets/events/logic_lock_post.png',
    outcomes: 'Pipeline funcional en fase piloto para semilleros de investigación y revisiones sistemáticas.',
    outcomesEn: 'Functional pipeline in pilot phase for research incubators and systematic reviews.'
  },
  {
    id: 'lanano-paper-training-initiative',
    slug: 'lanano-paper-training-initiative',
    title: 'Semillero de Redacción Científica IEEE LANANO 2026',
    titleEn: 'Scientific Paper Writing Incubator IEEE LANANO 2026',
    category: 'Investigación',
    categoryEn: 'Research',
    status: 'Activo',
    statusEn: 'Active',
    summary: 'Programa de mentoría técnica para la redacción de artículos de investigación de 4–6 páginas para su publicación en IEEE Xplore.',
    summaryEn: 'Technical mentorship program for drafting 4–6 page research papers for publication in IEEE Xplore.',
    description: 'Iniciativa colaborativa de capacitación en redacción científica para conectar a estudiantes con investigadores experimentados. Los participantes aprenden diseño experimental, análisis de datos, formato LaTeX IEEE y estructuración de manuscritos científicos.',
    descriptionEn: 'Collaborative scientific writing initiative connecting students with experienced researchers. Participants master experimental design, data analysis, IEEE LaTeX formatting, and scientific paper structuring.',
    technologies: ['LaTeX', 'IEEE Xplore Templates', 'Zotero', 'Análisis Estadístico'],
    technologiesEn: ['LaTeX', 'IEEE Xplore Templates', 'Zotero', 'Statistical Analysis'],
    team: ['Solange Criollo (Coordinadora)', 'Mateo Gavilanes', 'Ethan Guevara'],
    teamEn: ['Solange Criollo (Coordinator)', 'Mateo Gavilanes', 'Ethan Guevara'],
    image: '/assets/events/lanano_paper_training.png',
    paperUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/',
    outcomes: 'Propuestas de artículos sometidas a revisión por pares en 4 líneas de investigación.',
    outcomesEn: 'Paper drafts submitted for peer review across 4 research tracks.'
  },
  {
    id: 'stem-outreach-schools',
    slug: 'stem-outreach-schools',
    title: 'Programa de Divulgación STEM en Colegios',
    titleEn: 'STEM Outreach Program in High Schools',
    category: 'Vinculación',
    categoryEn: 'Outreach',
    status: 'Completado',
    statusEn: 'Completed',
    summary: 'Programa de divulgación científica con módulos interactivos de nanotecnología en colegios públicos de Imbabura.',
    summaryEn: 'Scientific outreach program with hands-on nanotechnology modules in public high schools across Imbabura.',
    description: 'Módulos educativos experimentales diseñados para despertar la vocación científica en nanociencia, ciencia de materiales e ingeniería entre estudiantes de secundaria mediante demostraciones prácticas.',
    descriptionEn: 'Experimental educational modules designed to spark scientific vocations in nanoscience, materials science, and engineering among high school students through interactive demonstrations.',
    technologies: ['Demostraciones Interactivas', 'Materiales Superhidrofóbicos', 'Ferrofluidos', 'Kits STEM'],
    technologiesEn: ['Interactive Demos', 'Superhydrophobic Materials', 'Ferrofluids', 'STEM Kits'],
    team: ['Kennedy Rodríguez (Líder)', 'Fernanda Landázuri', 'Ethan Guevara'],
    teamEn: ['Kennedy Rodríguez (Lead)', 'Fernanda Landázuri', 'Ethan Guevara'],
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    outcomes: 'Más de 150 estudiantes de bachillerato alcanzados en Ibarra y cantones aledaños.',
    outcomesEn: 'Over 150 high school students reached in Ibarra and surrounding regions.'
  },
  {
    id: 'hospital-paediatric-service',
    slug: 'hospital-paediatric-service',
    title: "Día del Niño Inmersivo: Tecnología y Sonrisas",
    titleEn: "Immersive Children's Day: Technology & Smiles",
    category: 'Servicio',
    categoryEn: 'Service',
    status: 'Completado',
    statusEn: 'Completed',
    summary: 'Intervención humanitaria en el Hospital San Vicente de Paúl usando visores Meta Quest 3 y protocolos de bioseguridad.',
    summaryEn: 'Humanitarian intervention at San Vicente de Paúl Hospital using Meta Quest 3 VR headsets and biosafety protocols.',
    description: 'Proyecto de servicio y voluntariado humanitario que llevó simulaciones virtuales educativas y momentos de alegría a 25 niños internados en las áreas pediátricas y UCI del Hospital San Vicente de Paúl en Ibarra.',
    descriptionEn: 'Humanitarian service project bringing educational virtual simulations and emotional support to 25 hospitalized pediatric and ICU patients at San Vicente de Paúl Hospital in Ibarra.',
    technologies: ['Meta Quest 3 VR', 'Protocolos de Bioseguridad', 'Simulaciones Médicas', 'Voluntariado Humanitario'],
    technologiesEn: ['Meta Quest 3 VR', 'Biosafety Protocols', 'Medical Simulations', 'Humanitarian Volunteering'],
    team: ['Solange Criollo (Líder)', 'Mateo Gavilanes', 'Ethan Guevara', 'Emily Pérez', 'Fernanda Landázuri', 'Kennedy Rodríguez'],
    teamEn: ['Solange Criollo (Lead)', 'Mateo Gavilanes', 'Ethan Guevara', 'Emily Pérez', 'Fernanda Landázuri', 'Kennedy Rodríguez'],
    image: '/assets/events/dia_del_nino_hospital.jpg',
    outcomes: '25 pacientes pediátricos beneficiados con experiencias inmersivas adaptadas y seguras.',
    outcomesEn: '25 pediatric patients benefited from adapted and safe immersive experiences.'
  },
  {
    id: 'vr-nano-museum',
    slug: 'vr-nano-museum',
    title: 'Museo Virtual de Nanotecnología (MuseumMaster VR)',
    titleEn: 'Virtual Nanotechnology Museum (MuseumMaster VR)',
    category: 'Innovación',
    categoryEn: 'Innovation',
    status: 'Activo',
    statusEn: 'Active',
    summary: 'Framework interactivo en Realidad Virtual desarrollado en C#/Unity para la visualización inmersiva de nanoestructuras moleculares.',
    summaryEn: 'Interactive Virtual Reality framework developed in C#/Unity for immersive visualization of molecular nanostructures.',
    description: 'Entorno inmersivo en 3D que permite a los usuarios interactuar con modelos a escala atómica de nanotubos de carbono, fullerenos y nanopartículas magnéticas, revolucionando la enseñanza de la nanotecnología.',
    descriptionEn: 'Immersive 3D environment allowing users to interact with atomic-scale models of carbon nanotubes, fullerenes, and magnetic nanoparticles, revolutionizing nanotechnology education.',
    technologies: ['Unity 3D', 'C#', 'Meta XR SDK', 'Modelado Molecular', 'OpenXR'],
    technologiesEn: ['Unity 3D', 'C#', 'Meta XR SDK', 'Molecular Modeling', 'OpenXR'],
    team: ['Mateo Gavilanes (Arquitecto VR)', 'Kennedy Rodríguez'],
    teamEn: ['Mateo Gavilanes (VR Architect)', 'Kennedy Rodríguez'],
    image: '/assets/gallery/actividad_colegio_1.jpg',
    outcomes: 'Framework interactivo presentado en colegios de la región y en proceso de expansión a museos de ciencia.',
    outcomesEn: 'Interactive framework showcased in regional schools and expanding to science museums.'
  }
];

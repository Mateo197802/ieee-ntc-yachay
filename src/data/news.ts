export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  date: string;
  dateEn: string;
  category: 'Institucional' | 'Investigación' | 'Eventos' | 'Vinculación';
  categoryEn: 'Institutional' | 'Research' | 'Events' | 'Outreach';
  summary: string;
  summaryEn: string;
  content: string;
  contentEn: string;
  image: string;
  imageAlt: string;
  author: string;
  authorEn: string;
  readTime: string;
  readTimeEn: string;
}

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'news-temscon-latam-2026',
    slug: 'ieee-ntc-participates-in-temscon-latam-2026',
    title: 'IEEE NTC Yachay Tech participa en TEMSCON LATAM 2026',
    titleEn: 'IEEE NTC Yachay Tech participates in TEMSCON LATAM 2026',
    date: '15 de Mayo de 2026',
    dateEn: 'May 15, 2026',
    category: 'Eventos',
    categoryEn: 'Events',
    summary: 'La directiva del capítulo representó a Yachay Tech en la conferencia cumbre de gestión de tecnología e innovación de IEEE Región 9.',
    summaryEn: 'The executive board represented Yachay Tech at the IEEE Region 9 technology management and innovation summit.',
    content: 'La directiva fundadora del Capítulo Estudiantil IEEE Nanotechnology Council de Yachay Tech University participó activamente en IEEE TEMSCON LATAM 2026, celebrada en la Mitad del Mundo, Quito. El evento reunió a líderes de ingeniería, investigadores y directivos de la Región 9 para discutir el futuro de la gestión tecnológica, la transferencia de conocimiento y el impacto de los capítulos estudiantiles en el ecosistema científico latinoamericano.',
    contentEn: 'The founding board of the IEEE Nanotechnology Council Student Branch Chapter at Yachay Tech University actively participated in IEEE TEMSCON LATAM 2026, held in Mitad del Mundo, Quito. The event convened engineering leaders and researchers across Region 9.',
    image: '/assets/events/ieee_temscon_latam.jpg',
    imageAlt: 'Delegación de IEEE NTC en IEEE TEMSCON LATAM 2026',
    author: 'Directiva IEEE NTC',
    authorEn: 'IEEE NTC Board',
    readTime: '3 min de lectura',
    readTimeEn: '3 min read'
  },
  {
    id: 'news-visita-victor-manuel-guzman',
    slug: 'stem-outreach-visita-victor-manuel-guzman',
    title: 'Exitosa jornada de vinculación STEM en la U.E. Víctor Manuel Guzmán',
    titleEn: 'Successful STEM outreach session at U.E. Víctor Manuel Guzmán',
    date: '05 de Mayo de 2026',
    dateEn: 'May 05, 2026',
    category: 'Vinculación',
    categoryEn: 'Outreach',
    summary: 'Más de 150 estudiantes de secundaria experimentaron con demostraciones prácticas de nanotecnología y visores de Realidad Virtual.',
    summaryEn: 'Over 150 high school students experienced hands-on nanotechnology demonstrations and Virtual Reality simulations.',
    content: 'El equipo de vinculación social y divulgación científica de IEEE NTC Yachay Tech llevó a cabo una enriquecedora jornada en la Unidad Educativa Víctor Manuel Guzmán en Ibarra. Con módulos de materiales superhidrofóbicos, fluidos magnéticos y la plataforma inmersiva de Realidad Virtual con visores Meta Quest 3, se fomentó la vocación científica en carreras de nanotecnología e ingeniería.',
    contentEn: 'The IEEE NTC Yachay Tech STEM outreach team conducted an enriching session at the Víctor Manuel Guzmán high school in Ibarra. With superhydrophobic materials, magnetic fluids, and Meta Quest 3 VR headsets, scientific vocations in nanotechnology were fostered.',
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    imageAlt: 'Voluntarios de IEEE NTC en la U.E. Víctor Manuel Guzmán',
    author: 'Comité de Divulgación',
    authorEn: 'Outreach Committee',
    readTime: '4 min de lectura',
    readTimeEn: '4 min read'
  },
  {
    id: 'news-dia-del-nino-hospital',
    slug: 'dia-del-nino-inmersivo-hospital-san-vicente',
    title: 'Día del Niño Inmersivo: Tecnología y Sonrisas en el Hospital San Vicente de Paúl',
    titleEn: "Immersive Children's Day: Technology and Smiles at San Vicente de Paúl Hospital",
    date: '01 de Junio de 2026',
    dateEn: 'June 01, 2026',
    category: 'Vinculación',
    categoryEn: 'Outreach',
    summary: 'Voluntariado humanitario que llevó Realidad Virtual y apoyo emocional a 25 pacientes de la UCI Pediátrica en Ibarra.',
    summaryEn: 'Humanitarian volunteer outreach bringing Virtual Reality and emotional support to 25 pediatric ICU patients in Ibarra.',
    content: 'En conmemoración del Día del Niño, voluntarios de IEEE NTC Yachay Tech organizaron una jornada humanitaria en el Hospital San Vicente de Paúl en Ibarra. Implementando rigurosos protocolos clínicos de bioseguridad, 25 niños internados disfrutaron de entornos inmersivos y actividades lúdicas con disfraces, combinando la innovación tecnológica con la empatía social.',
    contentEn: 'In celebration of Children’s Day, IEEE NTC volunteers organized a humanitarian initiative at San Vicente de Paúl Hospital in Ibarra. Under strict clinical biosafety protocols, 25 hospitalized children enjoyed immersive simulations and educational activities.',
    image: '/assets/events/dia_del_nino_hospital.jpg',
    imageAlt: 'Jornada del Día del Niño en el Hospital San Vicente de Paúl',
    author: 'Voluntariado IEEE NTC',
    authorEn: 'IEEE NTC Volunteers',
    readTime: '3 min de lectura',
    readTimeEn: '3 min read'
  },
  {
    id: 'news-posesion-directiva',
    slug: 'posesion-oficial-directiva-fundadora-ieee-ntc',
    title: 'Posesión Oficial de la Directiva Fundadora de IEEE NTC Yachay Tech',
    titleEn: 'Official Inauguration of IEEE NTC Yachay Tech Founding Board',
    date: '20 de Febrero de 2026',
    dateEn: 'February 20, 2026',
    category: 'Institucional',
    categoryEn: 'Institutional',
    summary: 'Se conformó oficialmente el primer Capítulo Estudiantil del IEEE Nanotechnology Council en la historia del Ecuador.',
    summaryEn: 'The first IEEE Nanotechnology Council Student Branch Chapter in the history of Ecuador was officially inaugurated.',
    content: 'En un acto solemne celebrado en el auditorio de Yachay Tech University, se posesionó la directiva fundadora presidida por Shirley Solange Criollo Coello e Isaac Mateo Gavilanes Chávez como Vicepresidente. El capítulo inicia con una visión clara: consolidar la investigación en nanotecnología y posicionar a la juventud ecuatoriana en escenarios científicos mundiales.',
    contentEn: 'In a solemn ceremony at Yachay Tech University auditorium, the founding executive board was sworn in, chaired by Shirley Solange Criollo Coello and Isaac Mateo Gavilanes Chávez as Vice Chair.',
    image: '/assets/gallery/posesion_directivos_1.jpg',
    imageAlt: 'Posesión de la directiva fundadora IEEE NTC',
    author: 'Secretaría General',
    authorEn: 'General Secretariat',
    readTime: '3 min de lectura',
    readTimeEn: '3 min read'
  }
];

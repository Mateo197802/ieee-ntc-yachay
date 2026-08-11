export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Institucional' | 'Investigación' | 'Eventos' | 'Vinculación';
  summary: string;
  content: string;
  image: string;
  imageAlt: string;
  author: string;
  readTime: string;
}

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'news-temscon-latam-2026',
    slug: 'ieee-ntc-participates-in-temscon-latam-2026',
    title: 'IEEE NTC Yachay Tech participa en TEMSCON LATAM 2026',
    date: '15 de Mayo de 2026',
    category: 'Eventos',
    summary: 'La directiva del capítulo representó a Yachay Tech en la conferencia cumbre de gestión de tecnología e innovación de IEEE Región 9.',
    content: 'La directiva fundadora del Capítulo Estudiantil IEEE Nanotechnology Council de Yachay Tech University participó activamente en IEEE TEMSCON LATAM 2026, celebrada en la Mitad del Mundo, Quito. El evento reunió a líderes de ingeniería, investigadores y directivos de la Región 9 para discutir el futuro de la gestión tecnológica, la transferencia de conocimiento y el impacto de los capítulos estudiantiles en el ecosistema científico latinoamericano.',
    image: '/assets/events/ieee_temscon_latam.jpg',
    imageAlt: 'Delegación de IEEE NTC en IEEE TEMSCON LATAM 2026',
    author: 'Directiva IEEE NTC',
    readTime: '3 min de lectura'
  },
  {
    id: 'news-visita-victor-manuel-guzman',
    slug: 'stem-outreach-visita-victor-manuel-guzman',
    title: 'Exitosa jornada de vinculación STEM en la U.E. Víctor Manuel Guzmán',
    date: '05 de Mayo de 2026',
    category: 'Vinculación',
    summary: 'Más de 150 estudiantes de secundaria experimentaron con demostraciones prácticas de nanotecnología y visores de Realidad Virtual.',
    content: 'El equipo de vinculación social y divulgación científica de IEEE NTC Yachay Tech llevó a cabo una enriquecedora jornada en la Unidad Educativa Víctor Manuel Guzmán en Ibarra. Con módulos de materiales superhidrofóbicos, fluidos magnéticos y la plataforma inmersiva de Realidad Virtual con visores Meta Quest 3, se fomentó la vocación científica en carreras de nanotecnología e ingeniería.',
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    imageAlt: 'Voluntarios de IEEE NTC en la U.E. Víctor Manuel Guzmán',
    author: 'Comité de Divulgación',
    readTime: '4 min de lectura'
  },
  {
    id: 'news-dia-del-nino-hospital',
    slug: 'dia-del-nino-inmersivo-hospital-san-vicente',
    title: 'Día del Niño Inmersivo: Tecnología y Sonrisas en el Hospital San Vicente de Paúl',
    date: '01 de Junio de 2026',
    category: 'Vinculación',
    summary: 'Voluntariado humanitario que llevó Realidad Virtual y apoyo emocional a 25 pacientes de la UCI Pediátrica en Ibarra.',
    content: 'En conmemoración del Día del Niño, voluntarios de IEEE NTC Yachay Tech organizaron una jornada humanitaria en el Hospital San Vicente de Paúl en Ibarra. Implementando rigurosos protocolos clínicos de bioseguridad, 25 niños internados disfrutaron de entornos inmersivos y actividades lúdicas con disfraces, combinando la innovación tecnológica con la empatía social.',
    image: '/assets/events/dia_del_nino_hospital.jpg',
    imageAlt: 'Jornada del Día del Niño en el Hospital San Vicente de Paúl',
    author: 'Voluntariado IEEE NTC',
    readTime: '3 min de lectura'
  },
  {
    id: 'news-posesion-directiva',
    slug: 'posesion-oficial-directiva-fundadora-ieee-ntc',
    title: 'Posesión Oficial de la Directiva Fundadora de IEEE NTC Yachay Tech',
    date: '20 de Febrero de 2026',
    category: 'Institucional',
    summary: 'Se conformó oficialmente el primer Capítulo Estudiantil del IEEE Nanotechnology Council en la historia del Ecuador.',
    content: 'En un acto solemne celebrado en el auditorio de Yachay Tech University, se posesionó la directiva fundadora presidida por Shirley Solange Criollo Coello e Isaac Mateo Gavilanes Chávez como Vicepresidente. El capítulo inicia con una visión clara: consolidar la investigación en nanotecnología y posicionar a la juventud ecuatoriana en escenarios científicos mundiales.',
    image: '/assets/gallery/posesion_directivos_1.jpg',
    imageAlt: 'Posesión de la directiva fundadora IEEE NTC',
    author: 'Secretaría General',
    readTime: '3 min de lectura'
  }
];

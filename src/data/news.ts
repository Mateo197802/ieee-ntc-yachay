export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Institutional' | 'Research' | 'Events' | 'Outreach';
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
    title: 'IEEE NTC Yachay Tech participates in TEMSCON LATAM 2026',
    date: 'May 15, 2026',
    category: 'Events',
    summary: 'The executive board represented Yachay Tech at the IEEE Region 9 technology management and innovation summit.',
    content: 'The founding board of the IEEE Nanotechnology Council Student Branch Chapter at Yachay Tech University actively participated in IEEE TEMSCON LATAM 2026, held in Mitad del Mundo, Quito. The event convened engineering leaders and researchers across Region 9.',
    image: '/assets/events/ieee_temscon_latam.jpg',
    imageAlt: 'IEEE NTC Delegation at IEEE TEMSCON LATAM 2026',
    author: 'IEEE NTC Board',
    readTime: '3 min read'
  },
  {
    id: 'news-visita-victor-manuel-guzman',
    slug: 'stem-outreach-visita-victor-manuel-guzman',
    title: 'Successful STEM outreach session at U.E. Víctor Manuel Guzmán',
    date: 'May 05, 2026',
    category: 'Outreach',
    summary: 'Over 150 high school students experienced hands-on nanotechnology demonstrations and Virtual Reality simulations.',
    content: 'The IEEE NTC Yachay Tech STEM outreach team conducted an enriching session at the Víctor Manuel Guzmán high school in Ibarra. With superhydrophobic materials, magnetic fluids, and Meta Quest 3 VR headsets, scientific vocations in nanotechnology were fostered.',
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    imageAlt: 'IEEE NTC Volunteers at U.E. Víctor Manuel Guzmán',
    author: 'Outreach Committee',
    readTime: '4 min read'
  },
  {
    id: 'news-dia-del-nino-hospital',
    slug: 'dia-del-nino-inmersivo-hospital-san-vicente',
    title: "Immersive Children's Day: Technology and Smiles at San Vicente de Paúl Hospital",
    date: 'June 01, 2026',
    category: 'Outreach',
    summary: 'Humanitarian volunteer outreach bringing Virtual Reality and emotional support to 25 pediatric ICU patients in Ibarra.',
    content: 'In celebration of Children’s Day, IEEE NTC volunteers organized a humanitarian initiative at San Vicente de Paúl Hospital in Ibarra. Under strict clinical biosafety protocols, 25 hospitalized children enjoyed immersive simulations and educational activities.',
    image: '/assets/events/dia_del_nino_hospital.jpg',
    imageAlt: "Children's Day Outreach at San Vicente de Paúl Hospital",
    author: 'IEEE NTC Volunteers',
    readTime: '3 min read'
  },
  {
    id: 'news-posesion-directiva',
    slug: 'posesion-oficial-directiva-fundadora-ieee-ntc',
    title: 'Official Inauguration of IEEE NTC Yachay Tech Founding Board',
    date: 'February 20, 2026',
    category: 'Institutional',
    summary: 'The first IEEE Nanotechnology Council Student Branch Chapter in the history of Ecuador was officially inaugurated.',
    content: 'In a solemn ceremony at Yachay Tech University auditorium, the founding executive board was sworn in, chaired by Shirley Solange Criollo Coello and Isaac Mateo Gavilanes Chávez as Vice Chair.',
    image: '/assets/gallery/posesion_directivos_1.jpg',
    imageAlt: 'Inauguration of founding IEEE NTC executive board',
    author: 'General Secretariat',
    readTime: '3 min read'
  }
];

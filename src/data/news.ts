export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: 'Chapter News' | 'Conference' | 'Research' | 'Outreach';
  summary: string;
  content: string;
  image: string;
  tags: string[];
}

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'ieee-ntc-temscon-latam-2026',
    slug: 'ieee-ntc-temscon-latam-2026',
    title: 'IEEE NTC Yachay Tech Executive Board Participates in TEMSCON LATAM 2026',
    date: 'May 15, 2026',
    author: 'Kennedy (Media Lead)',
    category: 'Conference',
    summary: 'Our chapter was proudly represented at the largest technology and engineering management conference in LATAM, held in Mitad del Mundo.',
    content: `Members of the IEEE Nanotechnology Council Yachay Tech Student Branch participated in IEEE TEMSCON LATAM 2026 in Mitad del Mundo, Quito. The delegation engaged with international IEEE leaders, presented student innovation models, and established collaborative channels with other Latin American university chapters.

During the event, executive board members highlighted Yachay Tech's growing nanotechnology research footprint and discussed joint initiatives for the upcoming IEEE LANANO conference.`,
    image: '/assets/images/ieee_temscon_latam_2026.jpg',
    tags: ['TEMSCON', 'IEEE Region 9', 'Leadership', 'Networking']
  },
  {
    id: 'visit-to-victor-manuel-guzman',
    slug: 'visit-to-victor-manuel-guzman',
    title: 'Inspiring High School Students at Unidad Educativa Víctor Manuel Guzmán',
    date: 'May 05, 2026',
    author: 'Fernanda (Outreach Team)',
    category: 'Outreach',
    summary: 'Our outreach team brought interactive science experiments, nanoscale physics demonstrations, and career guidance to high school students in Ibarra.',
    content: `The IEEE NTC Yachay Tech STEM outreach team conducted an interactive workshop at Unidad Educativa Víctor Manuel Guzmán. High school students participated in hands-on demonstrations showcasing hydrophobic nanocoatings, ferrofluid magnetic responses, and quantum dot optical phenomena.

The initiative aims to democratize science education and inspire young students to pursue higher education degrees in nanotechnology and engineering fields.`,
    image: '/assets/images/visita_escuela.jpg',
    tags: ['Outreach', 'STEM', 'Community', 'Ibarra']
  },
  {
    id: 'pediatric-hospital-day-of-the-child',
    slug: 'pediatric-hospital-day-of-the-child',
    title: 'Bringing Science and Smiles to Hospital San Vicente de Paúl',
    date: 'June 01, 2026',
    author: 'Ethan (Logistics Lead)',
    category: 'Outreach',
    summary: 'IEEE NTC members organized educational science games and gift donations for pediatric patients in hospital care.',
    content: `In celebration of International Children's Day, IEEE NTC Yachay Tech partnered with student biomedical engineering organizations to bring science workshops and joy to children undergoing medical treatment at Hospital San Vicente de Paúl in Ibarra.

Volunteers demonstrated simple polymer synthesis and interactive color-changing chemical reactions, offering children a memorable educational experience.`,
    image: '/assets/images/hospital_san_vicente.jpg',
    tags: ['Service', 'Hospital', 'Community', 'Social Impact']
  }
];

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
    image: '/assets/events/ieee_temscon_latam.jpg',
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
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    tags: ['Outreach', 'STEM', 'Community', 'Ibarra']
  },
  {
    id: 'pediatric-hospital-day-of-the-child',
    slug: 'pediatric-hospital-day-of-the-child',
    title: "Immersive Children's Day: Technology and Smiles at Hospital San Vicente de Paúl",
    date: 'June 01, 2026',
    author: 'Ethan (Logistics Lead)',
    category: 'Outreach',
    summary: 'IEEE NTC Yachay Tech deployed Meta Quest 3 VR technology to bring emotional relief and immersive STEM learning to 25 hospitalized children in intensive care.',
    content: `On International Children's Day, the IEEE Nanotechnology Council (NTC) Student Branch Chapter of Yachay Tech University, in strategic partnership with the Biomedical Engineering Club, conducted "Immersive Children's Day: Technology and Smiles" at Hospital San Vicente de Paúl in Ibarra.

The humanitarian initiative integrated Virtual Reality (Meta Quest 3) headsets to transport 25 pediatric patients recovering from severe trauma in the ICU into simulated nanotechnology laboratories, marine environments, and space explorations. Volunteers dressed in clown costumes provided one-on-one personalized ergonomic support to relieve neck strain for bedridden children, while strictly enforcing hospital-approved biosafety protocols with 70% isopropyl alcohol sanitization. The initiative successfully reduced clinical stress and inspired curiosity in nanoscale science.`,
    image: '/assets/events/dia_del_nino_hospital.jpg',
    tags: ['Humanitarian Engineering', 'Virtual Reality', 'Hospital San Vicente', 'Pediatric Care', 'STEM']
  }
];

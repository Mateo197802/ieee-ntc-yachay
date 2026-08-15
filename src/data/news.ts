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
    id: 'news-how-to-join-ieee-ntc-membership',
    slug: 'guide-how-to-obtain-ieee-ntc-student-membership',
    title: 'Comprehensive Guide: How to Obtain Your IEEE & IEEE NTC Student Membership',
    date: 'July 20, 2026',
    category: 'Institutional',
    summary: 'A step-by-step guide for Yachay Tech and regional students to join IEEE and affiliate with the IEEE Nanotechnology Council.',
    content: 'Joining the IEEE Nanotechnology Council provides unparalleled advantages for aspiring scientists: discounted access to over 5 million documents on IEEE Xplore, reduced registration fees at flagship conferences (IEEE-NANO, IEEE-NMDC, IEEE LANANO), eligibility for international student travel grants, and qualification for executive board leadership roles. To join: (1) Visit ieee.org/join and create your IEEE student account using your university institutional email to access subsidized student dues; (2) During society selection, add the IEEE Nanotechnology Council (NTC); (3) Contact our chapter officers at ieee.ntc@yachaytech.edu.ec to validate your local branch chapter affiliation and receive your onboarding kit.',
    image: '/assets/gallery/foto_con_bandera.jpg',
    imageAlt: 'IEEE NTC Student Membership Guide',
    author: 'General Secretariat',
    readTime: '4 min read'
  },
  {
    id: 'news-nanotalks-csic-spain',
    slug: 'nanotalks-magnetic-domains-keynote-csic-spain',
    title: 'NanoTalks Keynote: Dr. José Miguel García-Martín on Magnetic Domains',
    date: 'July 16, 2026',
    category: 'Research',
    summary: 'Global virtual lecture in partnership with IMN-CSIC Spain exploring magnetic force microscopy and data storage physics.',
    content: 'IEEE NTC Yachay Tech, in joint coordination with IEEE NTC Ecuador Chapter, hosted Dr. José Miguel García-Martín from the Institute of Micro and Nanotechnology (CSIC, Spain). The conference covered magnetic domain theory, Magnetic Force Microscopy (MFM) instrumentation, and applications in nanoscale data storage devices.',
    image: '/assets/events/nanotalks_dominios_magneticos.png',
    imageAlt: 'NanoTalks Keynote with CSIC Spain',
    author: 'Academic Committee',
    readTime: '3 min read'
  },
  {
    id: 'news-temscon-latam-2026',
    slug: 'ieee-ntc-participates-in-temscon-latam-2026',
    title: 'Explainable AI in Medical Screening Presented at IEEE TEMSCON LATAM 2026',
    date: 'June 26, 2026',
    category: 'Research',
    summary: 'Treasurer Emily Pérez presented an explainable AI pipeline for scalable breast cancer screening in Latin America.',
    content: 'Our chapter was officially represented at IEEE TEMSCON LATAM 2026 in Mitad del Mundo, Quito. Treasurer Emily Pérez delivered the research paper "Explainable AI for Scalable Breast Cancer Screening in Latin America: A Dual-Brain Mammography Pipeline with Bayesian Uncertainty", demonstrating how undergraduate researchers can lead real-world clinical innovation.',
    image: '/assets/events/ieee_temscon_latam.jpg',
    imageAlt: 'IEEE NTC Delegation at IEEE TEMSCON LATAM 2026',
    author: 'Research Committee',
    readTime: '4 min read'
  },
  {
    id: 'news-dia-del-nino-hospital',
    slug: 'dia-del-nino-inmersivo-hospital-san-vicente',
    title: "Immersive Children's Day: VR Technology and Smiles at San Vicente de Paúl Hospital",
    date: 'June 01, 2026',
    category: 'Outreach',
    summary: 'Humanitarian volunteer outreach bringing Virtual Reality simulations to 25 pediatric patients in Ibarra.',
    content: 'In celebration of Children’s Day, IEEE NTC volunteers conducted a humanitarian initiative at San Vicente de Paúl Hospital in Ibarra. Under clinical biosafety protocols, 25 hospitalized children experienced interactive Virtual Reality simulations with Meta Quest 3 headsets, bringing joy, relaxation, and scientific inspiration.',
    image: '/assets/events/dia_del_nino_hospital.jpg',
    imageAlt: "Children's Day Outreach at San Vicente de Paúl Hospital",
    author: 'Outreach Volunteers',
    readTime: '3 min read'
  },
  {
    id: 'news-visita-victor-manuel-guzman',
    slug: 'stem-outreach-visita-victor-manuel-guzman',
    title: 'Pre-University STEM Outreach at Unidad Educativa Víctor Manuel Guzmán',
    date: 'April 09, 2026',
    category: 'Outreach',
    summary: 'Over 120 high school students participated in hands-on physics, nanotechnology, and Virtual Reality demonstrations.',
    content: 'The IEEE NTC Yachay Tech STEM outreach team visited the Víctor Manuel Guzmán high school in Ibarra. Delivering interactive experiments with magnetic fluids, thin film coatings, and Meta Quest 3 VR headsets, chapter members inspired over 120 teenagers toward scientific vocations.',
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    imageAlt: 'IEEE NTC Volunteers at U.E. Víctor Manuel Guzmán',
    author: 'Outreach Committee',
    readTime: '4 min read'
  },
  {
    id: 'news-posesion-directiva',
    slug: 'posesion-oficial-directiva-fundadora-ieee-ntc',
    title: 'Official Inauguration of IEEE NTC Yachay Tech Founding Board',
    date: 'February 25, 2026',
    category: 'Institutional',
    summary: 'The first IEEE Nanotechnology Council Student Branch Chapter in the history of Ecuador was officially inaugurated.',
    content: 'In a solemn ceremony at Yachay Tech University, the founding executive board was officially sworn in, chaired by Shirley Solange Criollo Coello as Chair and Isaac Mateo Gavilanes Chávez as Vice Chair, establishing the first NTC student chapter in Ecuador and the fourth in Latin America.',
    image: '/assets/gallery/foto_con_bandera.jpg',
    imageAlt: 'Inauguration of founding IEEE NTC executive board',
    author: 'General Secretariat',
    readTime: '3 min read'
  }
];

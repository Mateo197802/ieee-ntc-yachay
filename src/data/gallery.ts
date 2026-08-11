export interface GalleryItem {
  id: string;
  title: string;
  category: 'Outreach' | 'Conferences' | 'Workshops' | 'Community';
  image: string;
  caption: string;
  date: string;
  position?: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-vr-school',
    title: 'VR Nanotechnology Demo at U.E. Víctor Manuel Guzmán',
    category: 'Outreach',
    image: '/assets/gallery/actividad_colegio_1.jpg',
    caption: 'Student testing Meta Quest 3 VR nanotechnology simulation guided by chapter members.',
    date: 'May 2026',
    position: 'center 20%'
  },
  {
    id: 'gal-school-demo',
    title: 'Classroom Nano-Phenomena Demonstrations',
    category: 'Outreach',
    image: '/assets/gallery/actividad_colegio_2.jpg',
    caption: 'Interactive nanoscale demonstrations and scientific discussions with high school students in Ibarra.',
    date: 'May 2026',
    position: 'center center'
  },
  {
    id: 'gal-school-workshop',
    title: 'Interactive School STEM Science Workshop',
    category: 'Outreach',
    image: '/assets/gallery/actividad_colegio_3.jpg',
    caption: 'Experimental science outreach sessions inspiring future STEM students in Imbabura.',
    date: 'May 2026',
    position: 'center 30%'
  },
  {
    id: 'gal-school-delegation',
    title: 'High School Outreach Delegation Group',
    category: 'Outreach',
    image: '/assets/gallery/actividad_colegio_4.jpg',
    caption: 'IEEE NTC outreach team together with school faculty and participating students.',
    date: 'May 2026',
    position: 'center center'
  },
  {
    id: 'gal-hospital-vr',
    title: "Immersive Children's Day at Hospital San Vicente de Paúl",
    category: 'Outreach',
    image: '/assets/events/dia_del_nino_hospital.jpg',
    caption: 'Humanitarian VR intervention bringing educational science simulations to 25 pediatric patients.',
    date: 'June 2026',
    position: 'center center'
  },
  {
    id: 'gal-utn-interview',
    title: 'Interview & Media Broadcast at UTN',
    category: 'Conferences',
    image: '/assets/gallery/entrevista_utn.jpg',
    caption: 'IEEE NTC Yachay Tech leadership sharing chapter milestones and research initiatives on television media.',
    date: 'June 2026',
    position: 'center 25%'
  },
  {
    id: 'gal-temscon-latam',
    title: 'IEEE TEMSCON LATAM 2026 Participation',
    category: 'Conferences',
    image: '/assets/events/ieee_temscon_latam.jpg',
    caption: 'Chapter delegation representing Yachay Tech at IEEE TEMSCON LATAM in Mitad del Mundo.',
    date: 'May 2026',
    position: 'center center'
  },
  {
    id: 'gal-mtts-workshop',
    title: 'IEEE MTT-S & NTC Joint Workshop',
    category: 'Workshops',
    image: '/assets/events/ieee_mtts_ntc_workshop.jpg',
    caption: 'Interdisciplinary workshop on nanoscale electromagnetic applications and high-frequency systems.',
    date: '2026',
    position: 'center center'
  },
  {
    id: 'gal-nanoskills',
    title: 'NanoSkills: Characterization & Synthesis Workshop',
    category: 'Workshops',
    image: '/assets/events/nanoskills_hands_on.jpg',
    caption: 'Hands-on laboratory training on nanomaterial green synthesis and characterization.',
    date: '2026',
    position: 'center center'
  },
  {
    id: 'gal-banner-delegation',
    title: 'Official Chapter Delegation with IEEE Banner',
    category: 'Community',
    image: '/assets/gallery/foto_con_bandera.jpg',
    caption: 'Executive board and active chapter members holding the official IEEE Nanotechnology Council banner.',
    date: 'April 2026',
    position: 'center 75%'
  },
  {
    id: 'gal-members-gathering',
    title: 'Chapter Member Gathering at Yachay Tech',
    category: 'Community',
    image: '/assets/gallery/foto_sin_bandera.jpg',
    caption: 'IEEE NTC student members and collaborators gathered at Yachay Tech campus.',
    date: 'April 2026',
    position: 'center 70%'
  },
  {
    id: 'gal-posesion-1',
    title: 'Posesión de Directivos Ceremony',
    category: 'Community',
    image: '/assets/gallery/posesion_directivos_1.jpg',
    caption: 'Official executive board inauguration ceremony of IEEE NTC Yachay Tech Student Branch.',
    date: 'February 2026',
    position: 'center center'
  },
  {
    id: 'gal-posesion-2',
    title: 'Executive Board Swearing-in Ceremony',
    category: 'Community',
    image: '/assets/gallery/posesion_directivos_2.jpg',
    caption: 'Inaugural assembly and leadership commitment for the 2026-2027 chapter term.',
    date: 'February 2026',
    position: 'center center'
  },
  {
    id: 'gal-advisor',
    title: 'Faculty Advisor Guidance & Support',
    category: 'Community',
    image: '/assets/gallery/advisor.jpg',
    caption: 'Faculty advisor mentorship supporting student research tracks and IEEE activities.',
    date: '2026',
    position: 'center 20%'
  }
];

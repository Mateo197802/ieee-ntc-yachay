export interface GalleryItem {
  id: string;
  title: string;
  category: 'Outreach' | 'Conferences' | 'Workshops' | 'Community';
  image: string;
  caption: string;
  date: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'STEM Outreach at U.E. Víctor Manuel Guzmán',
    category: 'Outreach',
    image: '/assets/images/visita_escuela.jpg',
    caption: 'Student chapter outreach team demonstrating nano-phenomena to high school students in Ibarra.',
    date: 'May 2026'
  },
  {
    id: 'gal-2',
    title: 'IEEE TEMSCON LATAM Awards & Recognition',
    category: 'Conferences',
    image: '/assets/images/ieee_temscon_awards.jpg',
    caption: 'Chapter members receiving distinction certificates at IEEE TEMSCON LATAM 2026.',
    date: 'May 2026'
  },
  {
    id: 'gal-3',
    title: 'Chapter Assembly at Yachay Tech Campus',
    category: 'Community',
    image: '/assets/images/campus_stairs_group.jpg',
    caption: 'IEEE Nanotechnology Council student members gathering at Yachay Tech central plaza stairs.',
    date: 'April 2026'
  },
  {
    id: 'gal-4',
    title: 'Delegation at TEMSCON LATAM 2026',
    category: 'Conferences',
    image: '/assets/images/ieee_temscon_latam_2026.jpg',
    caption: 'IEEE NTC Yachay Tech banner and executive representation at Mitad del Mundo.',
    date: 'May 2026'
  },
  {
    id: 'gal-5',
    title: 'Hospital San Vicente de Paúl Science Activity',
    category: 'Outreach',
    image: '/assets/images/hospital_san_vicente.jpg',
    caption: 'Volunteers and hospital staff celebrating Childrens Day with pediatric patients.',
    date: 'June 2026'
  },
  {
    id: 'gal-6',
    title: 'NanoTalks & Webinar Series Announcement',
    category: 'Workshops',
    image: '/assets/images/flyer_1.png',
    caption: 'Promotional flyer for NanoTalks Advances in Nanomedicine webinar series.',
    date: 'June 2026'
  },
  {
    id: 'gal-7',
    title: 'NanoSkills Laboratory Hands-on Training',
    category: 'Workshops',
    image: '/assets/images/flyer_2.png',
    caption: 'Nanoparticle synthesis and characterization laboratory training session flyer.',
    date: 'June 2026'
  },
  {
    id: 'gal-8',
    title: 'IEEE MTT-S & NTC Joint BPC Workshop',
    category: 'Workshops',
    image: '/assets/images/flyer_3.png',
    caption: 'Joint technical workshop on high-frequency bio-electromagnetics and nano-circuits.',
    date: 'July 2026'
  }
];

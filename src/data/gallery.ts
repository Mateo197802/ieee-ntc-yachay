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
    image: '/assets/gallery/actividad_colegio_1.jpg',
    caption: 'Student chapter outreach team demonstrating nano-phenomena to high school students in Ibarra.',
    date: 'May 2026'
  },
  {
    id: 'gal-2',
    title: 'Classroom Nano Demonstration',
    category: 'Outreach',
    image: '/assets/gallery/actividad_colegio_2.jpg',
    caption: 'Hands-on nanotechnology interaction and scientific questions with high school students.',
    date: 'May 2026'
  },
  {
    id: 'gal-3',
    title: 'Interactive School Science Workshop',
    category: 'Outreach',
    image: '/assets/gallery/actividad_colegio_3.jpg',
    caption: 'Experimental science outreach sessions inspiring future STEM students in Imbabura.',
    date: 'May 2026'
  },
  {
    id: 'gal-4',
    title: 'High School Outreach Delegation Group',
    category: 'Outreach',
    image: '/assets/gallery/actividad_colegio_4.jpg',
    caption: 'IEEE NTC outreach team together with school faculty and participating students.',
    date: 'May 2026'
  },
  {
    id: 'gal-5',
    title: 'Interview & Media Broadcast at UTN',
    category: 'Conferences',
    image: '/assets/gallery/entrevista_utn.jpg',
    caption: 'IEEE NTC Yachay Tech leadership sharing chapter milestones and research initiatives on television media.',
    date: 'June 2026'
  },
  {
    id: 'gal-6',
    title: 'Official Chapter Delegation with IEEE Banner',
    category: 'Community',
    image: '/assets/gallery/foto_con_bandera.jpg',
    caption: 'Executive board and active chapter members holding the official IEEE Nanotechnology Council banner.',
    date: 'April 2026'
  },
  {
    id: 'gal-7',
    title: 'Chapter Member Gathering',
    category: 'Community',
    image: '/assets/gallery/foto_sin_bandera.jpg',
    caption: 'IEEE NTC student members and collaborators at Yachay Tech University.',
    date: 'April 2026'
  },
  {
    id: 'gal-8',
    title: 'Posesión de Directivos Ceremony',
    category: 'Community',
    image: '/assets/gallery/posesion_directivos_1.jpg',
    caption: 'Official executive board inauguration ceremony of IEEE NTC Yachay Tech Student Branch.',
    date: 'February 2026'
  },
  {
    id: 'gal-9',
    title: 'Executive Board Swearing-in',
    category: 'Community',
    image: '/assets/gallery/posesion_directivos_2.jpg',
    caption: 'Inaugural assembly and leadership commitment for the 2026-2027 chapter term.',
    date: 'February 2026'
  },
  {
    id: 'gal-10',
    title: 'Faculty Advisor Recognition',
    category: 'Community',
    image: '/assets/gallery/advisor.jpg',
    caption: 'Faculty advisor guidance and academic support for IEEE NTC chapter research tracks.',
    date: '2026'
  }
];

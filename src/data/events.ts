export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: 'Upcoming' | 'Past';
  type: 'Workshop' | 'Conference' | 'Outreach' | 'Webinar' | 'Competition';
  date: string;
  time: string;
  location: string;
  modality: 'In-Person' | 'Online' | 'Hybrid';
  summary: string;
  description: string;
  image: string;
  registrationUrl?: string;
  featured?: boolean;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'launch-ieee-ntc',
    slug: 'launch-ieee-ntc',
    title: 'Launch IEEE NTC Yachay Tech Student Branch',
    category: 'Past',
    type: 'Conference',
    date: 'February 15, 2026',
    time: '10:00 AM - 12:30 PM',
    location: 'Auditorium Magna, Yachay Tech University',
    modality: 'Hybrid',
    summary: 'Official inauguration meeting of the IEEE Nanotechnology Council Student Branch Chapter at Yachay Tech University.',
    description: 'The official launch of our IEEE Nanotechnology Council Student Branch Chapter brought together students, faculty members, and IEEE Ecuador Section officers. The event presented our strategic roadmap, chapter governance, benefits of IEEE NTC membership, and upcoming research and outreach initiatives.',
    image: '/assets/images/campus_stairs_group.jpg',
    featured: true
  },
  {
    id: 'nanotalks-advances-nanomedicine',
    slug: 'nanotalks-advances-nanomedicine',
    title: 'NanoTalks: Advances in Nanomedicine',
    category: 'Upcoming',
    type: 'Webinar',
    date: 'June 10, 2026',
    time: '5:00 PM - 6:30 PM',
    location: 'Online via Zoom',
    modality: 'Online',
    summary: 'Specialized webinar covering targeted drug delivery systems, nanocarriers, and clinical translational research.',
    description: 'Join international distinguished lecturers exploring how functionalized nanoparticles enable site-specific therapeutic delivery with reduced systemic toxicity.',
    image: '/assets/images/flyer_1.png',
    registrationUrl: 'https://forms.gle/demo-nanotalks',
    featured: true
  },
  {
    id: 'nanoskills-workshop',
    slug: 'nanoskills-workshop',
    title: 'NanoSkills Workshop: Characterization & Synthesis',
    category: 'Upcoming',
    type: 'Workshop',
    date: 'June 21, 2026',
    time: '09:00 AM - 01:00 PM',
    location: 'Nanotechnology Lab, Yachay Tech University',
    modality: 'In-Person',
    summary: 'Hands-on laboratory training session covering green nanoparticle synthesis and UV-Vis spectrophotometry.',
    description: 'Exclusive hands-on practical workshop designed for chapter members to acquire essential skills in nanoparticle synthesis, UV-Vis characterization analysis, and experimental protocol documentation.',
    image: '/assets/images/flyer_2.png',
    registrationUrl: 'https://forms.gle/demo-nanoskills',
    featured: true
  },
  {
    id: 'ieee-mtt-s-bpc-workshop',
    slug: 'ieee-mtt-s-bpc-workshop',
    title: 'IEEE MTT-S BPC Workshop 2026',
    category: 'Upcoming',
    type: 'Workshop',
    date: 'July 05, 2026',
    time: '10:00 AM - 04:00 PM',
    location: 'Yachay Tech University Campus',
    modality: 'In-Person',
    summary: 'Joint technical workshop exploring high-frequency electromagnetics and nano-circuit modeling.',
    description: 'Collaborative workshop between IEEE NTC and IEEE MTT-S chapters focusing on microwave theory, bio-electromagnetics, and nano-sensor modeling applications.',
    image: '/assets/images/flyer_3.png',
    registrationUrl: 'https://forms.gle/demo-mtts',
    featured: true
  },
  {
    id: 'visita-victor-manuel-guzman',
    slug: 'visita-victor-manuel-guzman',
    title: 'Visita U.E. Víctor Manuel Guzmán',
    category: 'Past',
    type: 'Outreach',
    date: 'May 05, 2026',
    time: '08:30 AM - 12:00 PM',
    location: 'Unidad Educativa Víctor Manuel Guzmán, Ibarra',
    modality: 'In-Person',
    summary: 'STEM outreach visit bringing nanotechnology demonstrations and science experiments to high school students.',
    description: 'Our STEM outreach team visited students at U.E. Víctor Manuel Guzmán in Ibarra, performing interactive experiments, explaining scale-dependent material properties, and encouraging STEM careers.',
    image: '/assets/images/visita_escuela.jpg',
    featured: false
  },
  {
    id: 'dia-del-nino-hospital-san-vicente',
    slug: 'dia-del-nino-hospital-san-vicente',
    title: 'Día del Niño - Hospital San Vicente de Paúl',
    category: 'Past',
    type: 'Outreach',
    date: 'June 01, 2026',
    time: '09:00 AM - 01:00 PM',
    location: 'Aula Hospitalaria, Hospital San Vicente de Paúl, Ibarra',
    modality: 'In-Person',
    summary: 'Community social outreach bringing science activities and joy to hospitalized children.',
    description: 'Members of IEEE NTC Yachay Tech collaborated with biomedical engineering student clubs to conduct science-themed educational activities, games, and gifts for children in pediatric care.',
    image: '/assets/images/hospital_san_vicente.jpg',
    featured: false
  },
  {
    id: 'ieee-temscon-latam-2026',
    slug: 'ieee-temscon-latam-2026',
    title: 'IEEE TEMSCON LATAM 2026 Participation',
    category: 'Past',
    type: 'Conference',
    date: 'May 15, 2026',
    time: 'Full Day Event',
    location: 'Mitad del Mundo, Quito, Ecuador',
    modality: 'In-Person',
    summary: 'IEEE NTC Yachay Tech delegation represented at the largest engineering management conference in LATAM.',
    description: 'Our executive board members represented the chapter at IEEE TEMSCON LATAM 2026, presenting student chapter innovations, networking with international IEEE leaders, and receiving chapter awards.',
    image: '/assets/images/ieee_temscon_latam_2026.jpg',
    featured: false
  },
  {
    id: 'lanano-paper-training',
    slug: 'lanano-paper-training',
    title: 'LANANO Paper Writing & Mentorship Training',
    category: 'Upcoming',
    type: 'Workshop',
    date: 'August 12, 2026',
    time: '04:00 PM - 06:00 PM',
    location: 'Yachay Tech University & Online',
    modality: 'Hybrid',
    summary: 'Comprehensive scientific paper writing boot camp for IEEE LANANO research track submission.',
    description: 'Step-by-step training on crafting research proposals, literature extraction, methodologies, data visualization, and mentor matching for the IEEE LANANO Conference.',
    image: '/assets/images/ieee_temscon_awards.jpg',
    registrationUrl: 'https://forms.gle/demo-lanano',
    featured: false
  },
  {
    id: 'laboratorio-virtual',
    slug: 'laboratorio-virtual',
    title: 'Virtual Nanotechnology VR Lab Experience',
    category: 'Past',
    type: 'Workshop',
    date: 'March 24, 2026',
    time: '02:00 PM - 05:00 PM',
    location: 'VR Innovation Hub, Yachay Tech',
    modality: 'In-Person',
    summary: 'Interactive Virtual Reality simulation testing molecular nanostructures and nanoscale environments.',
    description: 'Students utilized cutting-edge VR headsets to interactively explore molecular dynamic simulations, crystal lattice structures, and virtual electron microscopy controls.',
    image: '/assets/images/campus_stairs_group.jpg',
    featured: false
  },
  {
    id: 'logic-lock',
    slug: 'logic-lock',
    title: 'Logic Lock: Nanoelectronics Logic Competition',
    category: 'Past',
    type: 'Competition',
    date: 'April 18, 2026',
    time: '10:00 AM - 03:00 PM',
    location: 'Science Building Lab 102, Yachay Tech',
    modality: 'In-Person',
    summary: 'Competitive logic gate circuit optimization contest using nanoscale semiconductor design paradigms.',
    description: 'Teams of students competed to solve hardware logic security puzzles, gate minimization challenges, and nano-circuit design problems within fixed time limits.',
    image: '/assets/images/flyer_2.png',
    featured: false
  },
  {
    id: 'feria-de-clubes',
    slug: 'feria-de-clubes',
    title: 'Feria de Clubes Yachay Tech 2026',
    category: 'Past',
    type: 'Outreach',
    date: 'March 10, 2026',
    time: '09:00 AM - 04:00 PM',
    location: 'Central Plaza, Yachay Tech University',
    modality: 'In-Person',
    summary: 'Student organization fair introducing IEEE NTC benefits to incoming university students.',
    description: 'Our stand at the University Clubs Fair welcomed over 200 student visitors, demonstrating live nano-liquid experiments, sharing membership application forms, and recruiting new chapter members.',
    image: '/assets/images/campus_stairs_group.jpg',
    featured: false
  }
];

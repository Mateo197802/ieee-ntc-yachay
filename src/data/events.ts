export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: 'Upcoming' | 'Past';
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  registrationStatus: 'open' | 'opening-soon' | 'closed' | 'not-applicable';
  type: 'Workshop' | 'Conference' | 'Outreach' | 'Webinar' | 'Program';
  date: string;
  time: string;
  location: string;
  modality: 'In-Person' | 'Online' | 'Hybrid' | 'Hybrid Program';
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  imageVerified: boolean;
  registrationUrl?: string;
  externalUrl?: string;
  featured?: boolean;
}

export const EVENTS_DATA: EventItem[] = [
  // SOLE UPCOMING EVENT
  {
    id: 'ieee-ntc-region9-summit',
    slug: 'ieee-ntc-region9-summit',
    title: 'IEEE NTC Region 9 Student Virtual Summit 2026',
    category: 'Upcoming',
    status: 'upcoming',
    registrationStatus: 'opening-soon',
    type: 'Conference',
    date: 'October 15, 2026',
    time: '02:00 PM - 07:00 PM',
    location: 'Online via Zoom',
    modality: 'Online',
    summary: 'Latin American virtual summit featuring distinguished lecturers, research showcases, and student chapter roundtables.',
    description: 'Region-wide conference uniting IEEE Nanotechnology Council student branches across Latin America to present student research, exchange chapter best practices, and hear keynotes from international IEEE NTC distinguished lecturers.',
    image: '/assets/images/flyer_1.png',
    imageAlt: 'IEEE NTC Region 9 Student Virtual Summit 2026 official banner',
    imageVerified: true,
    registrationUrl: 'https://forms.gle/demo-r9summit',
    featured: true
  },

  // COMPLETED / PAST EVENTS
  {
    id: 'lanano-paper-training',
    slug: 'lanano-paper-training',
    title: 'IEEE LANANO 2026 Paper Training & Mentoring Program',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Program',
    date: 'June–July 2026',
    time: 'Flexible Sessions',
    location: 'Yachay Tech University & Online Mentoring',
    modality: 'Hybrid Program',
    summary: 'Structured research-development program connecting participants with mentors for IEEE LANANO 2026.',
    description: 'A structured research-development program that brings participants together by thematic affinity and connects them with local and international mentors. Teams receive guidance to develop an original 4–6 page scientific paper for IEEE LANANO 2026.',
    image: '/assets/images/ieee_temscon_awards.jpg',
    imageAlt: 'IEEE LANANO 2026 Research Track & Mentoring',
    imageVerified: true,
    externalUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/',
    featured: true
  },
  {
    id: 'nanoskills-workshop-2',
    slug: 'nanoskills-workshop-2',
    title: 'NanoSkills Workshop 2.0: Advanced Spectroscopy & Characterization',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Workshop',
    date: 'July 18, 2026',
    time: '09:00 AM - 01:00 PM',
    location: 'Nanotechnology Lab, Yachay Tech University',
    modality: 'In-Person',
    summary: 'Advanced hands-on spectroscopy, FTIR analysis, and nanoparticle characterization laboratory training.',
    description: 'Practical training session covering advanced material characterization techniques, FTIR spectrum interpretation, and optical nanoparticle sizing protocols.',
    image: '/assets/images/flyer_2.png',
    imageAlt: 'NanoSkills Workshop 2.0 characterization session',
    imageVerified: true,
    featured: false
  },
  {
    id: 'nanotalks-advances-nanomedicine',
    slug: 'nanotalks-advances-nanomedicine',
    title: 'NanoTalks: Advances in Nanomedicine',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Webinar',
    date: 'June 10, 2026',
    time: '5:00 PM - 6:30 PM',
    location: 'Online via Zoom',
    modality: 'Online',
    summary: 'Specialized webinar covering targeted drug delivery systems, nanocarriers, and clinical translational research.',
    description: 'International distinguished lecturers exploring how functionalized nanoparticles enable site-specific therapeutic delivery with reduced systemic toxicity.',
    image: '/assets/images/flyer_1.png',
    imageAlt: 'NanoTalks Advances in Nanomedicine webinar banner',
    imageVerified: true,
    featured: false
  },
  {
    id: 'nanoskills-workshop',
    slug: 'nanoskills-workshop',
    title: 'NanoSkills Workshop: Characterization & Synthesis',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Workshop',
    date: 'June 21, 2026',
    time: '09:00 AM - 01:00 PM',
    location: 'Nanotechnology Lab, Yachay Tech University',
    modality: 'In-Person',
    summary: 'Hands-on laboratory training session covering green nanoparticle synthesis and UV-Vis spectrophotometry.',
    description: 'Exclusive hands-on practical workshop designed for chapter members to acquire essential skills in nanoparticle synthesis, UV-Vis characterization analysis, and experimental protocol documentation.',
    image: '/assets/images/flyer_2.png',
    imageAlt: 'NanoSkills synthesis workshop in laboratory',
    imageVerified: true,
    featured: false
  },
  {
    id: 'ieee-mtt-s-bpc-workshop',
    slug: 'ieee-mtt-s-bpc-workshop',
    title: 'IEEE MTT-S BPC Workshop 2026',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Workshop',
    date: 'July 05, 2026',
    time: '10:00 AM - 04:00 PM',
    location: 'Yachay Tech University Campus',
    modality: 'In-Person',
    summary: 'Joint technical workshop exploring high-frequency electromagnetics and nano-circuit modeling.',
    description: 'Collaborative workshop between IEEE NTC and IEEE MTT-S chapters focusing on microwave theory, bio-electromagnetics, and nano-sensor modeling applications.',
    image: '/assets/images/flyer_3.png',
    imageAlt: 'IEEE MTT-S BPC Joint Workshop',
    imageVerified: true,
    featured: false
  },
  {
    id: 'launch-ieee-ntc',
    slug: 'launch-ieee-ntc',
    title: 'Launch IEEE NTC Yachay Tech Student Branch',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Conference',
    date: 'February 15, 2026',
    time: '10:00 AM - 12:30 PM',
    location: 'Auditorium Magna, Yachay Tech University',
    modality: 'Hybrid',
    summary: 'Official inauguration meeting of the IEEE Nanotechnology Council Student Branch Chapter at Yachay Tech University.',
    description: 'The official launch of our IEEE Nanotechnology Council Student Branch Chapter brought together students, faculty members, and IEEE Ecuador Section officers. The event presented our strategic roadmap, chapter governance, and benefits of IEEE NTC membership.',
    image: '/assets/images/campus_stairs_group.jpg',
    imageAlt: 'IEEE NTC Yachay Tech Student Branch Launch Group Photograph',
    imageVerified: true,
    featured: false
  },
  {
    id: 'visita-victor-manuel-guzman',
    slug: 'visita-victor-manuel-guzman',
    title: 'Visita U.E. Víctor Manuel Guzmán',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Outreach',
    date: 'May 05, 2026',
    time: '08:30 AM - 12:00 PM',
    location: 'Unidad Educativa Víctor Manuel Guzmán, Ibarra',
    modality: 'In-Person',
    summary: 'STEM outreach visit bringing nanotechnology demonstrations and science experiments to high school students.',
    description: 'Our STEM outreach team visited students at U.E. Víctor Manuel Guzmán in Ibarra, performing interactive experiments, explaining scale-dependent material properties, and encouraging STEM careers.',
    image: '/assets/images/visita_escuela.jpg',
    imageAlt: 'STEM Outreach session at U.E. Víctor Manuel Guzmán',
    imageVerified: true,
    featured: false
  },
  {
    id: 'dia-del-nino-hospital-san-vicente',
    slug: 'dia-del-nino-hospital-san-vicente',
    title: 'Día del Niño - Hospital San Vicente de Paúl',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Outreach',
    date: 'June 01, 2026',
    time: '09:00 AM - 01:00 PM',
    location: 'Aula Hospitalaria, Hospital San Vicente de Paúl, Ibarra',
    modality: 'In-Person',
    summary: 'Community social outreach bringing science activities and joy to hospitalized children.',
    description: 'Members of IEEE NTC Yachay Tech collaborated with biomedical engineering student clubs to conduct science-themed educational activities, games, and gifts for children in pediatric care.',
    image: '/assets/images/hospital_san_vicente.jpg',
    imageAlt: 'Hospital San Vicente de Paúl Pediatric Science Initiative',
    imageVerified: true,
    featured: false
  },
  {
    id: 'ieee-temscon-latam-2026',
    slug: 'ieee-temscon-latam-2026',
    title: 'IEEE TEMSCON LATAM 2026 Participation',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Conference',
    date: 'May 15, 2026',
    time: 'Full Day Event',
    location: 'Mitad del Mundo, Quito, Ecuador',
    modality: 'In-Person',
    summary: 'IEEE NTC Yachay Tech delegation represented at the largest engineering management conference in LATAM.',
    description: 'Our executive board members represented the chapter at IEEE TEMSCON LATAM 2026, presenting student chapter innovations, networking with international IEEE leaders, and receiving chapter awards.',
    image: '/assets/images/ieee_temscon_latam_2026.jpg',
    imageAlt: 'IEEE TEMSCON LATAM 2026 Delegation at Mitad del Mundo',
    imageVerified: true,
    featured: false
  },
  {
    id: 'feria-de-clubes',
    slug: 'feria-de-clubes',
    title: 'Feria de Clubes Yachay Tech 2026',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Outreach',
    date: 'March 10, 2026',
    time: '09:00 AM - 04:00 PM',
    location: 'Central Plaza, Yachay Tech University',
    modality: 'In-Person',
    summary: 'Student organization fair introducing IEEE NTC benefits to incoming university students.',
    description: 'Our stand at the University Clubs Fair welcomed over 200 student visitors, demonstrating live nano-liquid experiments, sharing membership application forms, and recruiting new chapter members.',
    image: '/assets/images/visita_escuela.jpg',
    imageAlt: 'Feria de Clubes Yachay Tech 2026 IEEE NTC Stand',
    imageVerified: true,
    featured: false
  }
];

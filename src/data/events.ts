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
    image: '/assets/events/nanotalks_dominios_magneticos.png',
    imageAlt: 'IEEE NTC Region 9 Student Virtual Summit 2026 official banner',
    imageVerified: true,
    registrationUrl: 'https://forms.gle/KQwn8YBgBX9i1F6HA',
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
    image: '/assets/events/lanano_paper_training.png',
    imageAlt: 'IEEE LANANO 2026 Research Track & Mentoring Post',
    imageVerified: true,
    externalUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/',
    featured: true
  },
  {
    id: 'nanotalks-dominios-magneticos',
    slug: 'nanotalks-dominios-magneticos',
    title: 'Conferencia NanoTalks: Dominios Magnéticos y Microscopía',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Webinar',
    date: 'June 10, 2026',
    time: '5:00 PM - 6:30 PM',
    location: 'Online via Zoom',
    modality: 'Online',
    summary: 'Conferencia especializada sobre física de dominios magnéticos y técnicas avanzadas de caracterización por microscopía.',
    description: 'Conferencia técnica magistral con ponentes invitados internacionales explorando dominios magnéticos a escala nanométrica, microscopía de fuerza magnética (MFM) y aplicaciones espintrónicas.',
    image: '/assets/events/nanotalks_dominios_magneticos.png',
    imageAlt: 'Conferencia NanoTalks Dominios Magnéticos y Microscopía',
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
    image: '/assets/events/nanoskills_hands_on.jpg',
    imageAlt: 'NanoSkills hands on synthesis and characterization training in laboratory',
    imageVerified: true,
    featured: false
  },
  {
    id: 'logic-lock',
    slug: 'logic-lock',
    title: 'Logic Lock: Hardware Security & Nano-Circuits',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Workshop',
    date: 'July 10, 2026',
    time: '10:00 AM - 01:00 PM',
    location: 'Yachay Tech Computer Science & Nano Labs',
    modality: 'In-Person',
    summary: 'Workshop on logic locking, hardware security, and IC protection methodologies.',
    description: 'Practical exploration of hardware security paradigms, gate-level logic locking, and anti-piracy techniques in modern nanoelectronics and integrated circuit fabrication.',
    image: '/assets/events/logic_lock_post.png',
    imageAlt: 'Logic Lock Hardware Security & Nano-Circuits post',
    imageVerified: true,
    featured: false
  },
  {
    id: 'ieee-mtt-s-bpc-workshop',
    slug: 'ieee-mtt-s-bpc-workshop',
    title: 'IEEE MTT-S & NTC Joint Workshop 2026',
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
    image: '/assets/events/ieee_mtts_ntc_workshop.jpg',
    imageAlt: 'IEEE MTT-S & NTC Joint Workshop',
    imageVerified: true,
    featured: false
  },
  {
    id: 'launch-ieee-ntc',
    slug: 'launch-ieee-ntc',
    title: 'Posesión de Directivos IEEE NTC Yachay Tech',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Conference',
    date: 'February 15, 2026',
    time: '10:00 AM - 12:30 PM',
    location: 'Auditorium Magna, Yachay Tech University',
    modality: 'Hybrid',
    summary: 'Ceremonia oficial de posesión de la directiva y lanzamiento del capítulo IEEE Nanotechnology Council.',
    description: 'Ceremonia institucional de posesión del directorio estudiantil fundador de IEEE NTC Yachay Tech con la presencia de autoridades académicas y delegados de la Sección Ecuador de IEEE.',
    image: '/assets/events/posesion_directivos.jpg',
    imageAlt: 'Posesión de Directivos IEEE NTC Yachay Tech',
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
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    imageAlt: 'Visita educativa y demostraciones científicas en U.E. Víctor Manuel Guzmán',
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
    image: '/assets/events/dia_del_nino_hospital.jpg',
    imageAlt: 'Actividad comunitaria Día del Niño en Hospital San Vicente de Paúl',
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
    image: '/assets/events/ieee_temscon_latam.jpg',
    imageAlt: 'IEEE TEMSCON LATAM 2026 Delegation at Mitad del Mundo',
    imageVerified: true,
    featured: false
  }
];

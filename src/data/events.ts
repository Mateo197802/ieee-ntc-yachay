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
    id: 'nanotalks-dominios-magneticos',
    slug: 'nanotalks-dominios-magneticos',
    title: 'NanoTalks: Dominios Magnéticos y Microscopías para su Observación',
    category: 'Upcoming',
    status: 'upcoming',
    registrationStatus: 'open',
    type: 'Webinar',
    date: 'July 16, 2026',
    time: '10:00 AM (UTC-05:00)',
    location: 'Online via CEDIA / Zoom (ID: 89441870589)',
    modality: 'Online',
    summary: 'Conferencia magistral online con el Dr. José Miguel García-Martín (IMN CSIC, España) sobre física de dominios magnéticos y microscopía avanzada.',
    description: 'Conferencia magistral online organizada por IEEE Nanotechnology Council Yachay Tech Student Branch y el IEEE NTC Ecuador Chapter. El Dr. José Miguel García-Martín (Instituto de Micro y Nanotecnología - CSIC, España) expone sobre la física de dominios magnéticos, microscopía de fuerza magnética y aplicaciones nanotecnológicas.',
    image: '/assets/events/nanotalks_dominios_magneticos.png',
    imageAlt: 'Conferencia NanoTalks Dominios Magnéticos y Microscopías para su Observación',
    imageVerified: true,
    registrationUrl: 'https://cedia.zoom.us/j/89441870589',
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
    date: 'May 28, 2026',
    time: '03:00 PM - 05:30 PM',
    location: 'Auditorium 204, Yachay Tech University',
    modality: 'In-Person',
    summary: 'Technical seminar on cryptographic hardware security and nanoscale electronic logic locking.',
    description: 'Specialized seminar exploring state-of-the-art techniques for IC intellectual property protection, hardware obfuscation, and nanoscale countermeasures against reverse engineering.',
    image: '/assets/events/logic_lock_post.png',
    imageAlt: 'Logic Lock Hardware Security & Nano-Circuits Flyer',
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
    date: 'May 20, 2026',
    time: '10:00 AM - 02:00 PM',
    location: 'Engineering Building, Yachay Tech University',
    modality: 'In-Person',
    summary: 'Interdisciplinary collaborative workshop on microwave theory and nanotechnology.',
    description: 'Joint initiative with IEEE MTT-S bringing together researchers and students to explore microwave applications, high-frequency characterization of nanomaterials, and biomedical RF sensors.',
    image: '/assets/events/ieee_mtts_ntc_workshop.jpg',
    imageAlt: 'IEEE MTT-S and NTC Joint Workshop 2026',
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
    type: 'Outreach',
    date: 'February 15, 2026',
    time: '11:00 AM - 01:00 PM',
    location: 'Auditorium Principal, Yachay Tech University',
    modality: 'In-Person',
    summary: 'Inaugural assembly and official swearing-in ceremony of the founding executive board.',
    description: 'Official chapter founding ceremony marking the creation of the first IEEE Nanotechnology Council Student Branch Chapter in Ecuador, with institutional faculty and student branch leaders.',
    image: '/assets/events/posesion_directivos.jpg',
    imageAlt: 'Ceremonia de posesion de directivos IEEE NTC Yachay Tech',
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
    title: "Immersive Children's Day: Technology and Smiles",
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Outreach',
    date: 'June 01, 2026',
    time: '09:00 AM - 01:00 PM',
    location: 'Pediatric ICU & Ward, Hospital San Vicente de Paúl, Ibarra',
    modality: 'In-Person',
    summary: 'Humanitarian engineering initiative using Virtual Reality (Meta Quest 3) to alleviate stress and provide immersive STEM education to 25 hospitalized children.',
    description: 'Specialized humanitarian initiative organized by IEEE NTC Yachay Tech in partnership with the Biomedical Engineering Club. Deploying Meta Quest 3 VR headsets with custom biosafety sanitization and one-on-one ergonomic bed assistance, volunteers in clown costumes guided 25 pediatric patients through simulated nanotechnology laboratories, marine environments, and space tours.',
    image: '/assets/events/dia_del_nino_hospital.jpg',
    imageAlt: 'Immersive Childrens Day Technology and Smiles at Hospital San Vicente de Paul',
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
    summary: 'Executive board participation in IEEE TEMSCON LATAM presenting student chapter initiatives.',
    description: 'IEEE NTC Yachay Tech executive board members joined IEEE leaders from Region 9 at TEMSCON LATAM, establishing collaborative ties with international universities.',
    image: '/assets/events/ieee_temscon_latam.jpg',
    imageAlt: 'IEEE TEMSCON LATAM 2026 Delegation',
    imageVerified: true,
    featured: false
  }
];

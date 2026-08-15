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
  galleryAlbumId?: string;
}

export const EVENTS_DATA: EventItem[] = [
  // UPCOMING EVENT
  {
    id: 'ieee-ntc-region-9-virtual-summit-2026',
    slug: 'ieee-ntc-region-9-virtual-summit-2026',
    title: 'IEEE NTC Region 9 Student Virtual Summit 2026',
    category: 'Upcoming',
    status: 'upcoming',
    registrationStatus: 'opening-soon',
    type: 'Conference',
    date: 'October 15, 2026',
    time: '09:00 AM (UTC-05:00)',
    location: 'Online via IEEE vTools / Zoom',
    modality: 'Online',
    summary: 'Regional virtual summit of IEEE Nanotechnology Council student branches across Latin America.',
    description: 'Regional gathering bringing together IEEE Nanotechnology Council student branches across Region 9 (Latin America and the Caribbean). Featuring keynote talks with international researchers, professional development panels, scientific poster presentations, and networking sessions.',
    image: '',
    imageAlt: 'IEEE NTC Region 9 Student Virtual Summit 2026',
    imageVerified: false,
    featured: true
  },

  // PAST EVENTS
  {
    id: 'nanotalks-dominios-magneticos',
    slug: 'nanotalks-dominios-magneticos',
    title: 'NanoTalks: Magnetic Domains & Microscopy Techniques',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Webinar',
    date: 'July 16, 2026',
    time: '10:00 AM (UTC-05:00)',
    location: 'Online via CEDIA / Zoom (ID: 89441870589)',
    modality: 'Online',
    summary: 'Online keynote talk by Dr. José Miguel García-Martín (IMN CSIC, Spain) on magnetic domain physics and advanced microscopy.',
    description: 'Online keynote lecture organized by IEEE Nanotechnology Council Yachay Tech Student Branch and IEEE NTC Ecuador Chapter. Dr. José Miguel García-Martín (Institute of Micro and Nanotechnology - CSIC, Spain) presented on magnetic domains, magnetic force microscopy, and nanotechnology applications.',
    image: '/assets/events/nanotalks_dominios_magneticos.png',
    imageAlt: 'NanoTalks Keynote on Magnetic Domains and Microscopy Techniques',
    imageVerified: true,
    externalUrl: 'https://cedia.zoom.us/j/89441870589',
    featured: false
  },
  {
    id: 'lanano-paper-training',
    slug: 'lanano-paper-training',
    title: 'Scientific Mentorship & Paper Training Program IEEE LANANO 2026',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Program',
    date: 'June–July 2026',
    time: 'Flexible Sessions',
    location: 'Yachay Tech University & Virtual Mentorship',
    modality: 'Hybrid Program',
    summary: 'Structured research initiative pairing students with international mentors for IEEE LANANO 2026.',
    description: 'Structured scientific research program grouping students by thematic affinity and pairing them with national and international mentors. Teams receive comprehensive guidance to author and publish original scientific papers (4–6 pages) at the IEEE LANANO 2026 conference.',
    image: '/assets/events/lanano_paper_training.png',
    imageAlt: 'IEEE LANANO 2026 Scientific Mentorship Program',
    imageVerified: true,
    externalUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/',
    featured: true
  },
  {
    id: 'nanoskills-workshop',
    slug: 'nanoskills-workshop',
    title: 'NanoSkills Hands-on Workshop: Synthesis & Characterization',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Workshop',
    date: 'June 21, 2026',
    time: '09:00 AM - 01:00 PM',
    location: 'Nanotechnology Laboratory, Yachay Tech University',
    modality: 'In-Person',
    summary: 'Intensive laboratory session on green nanoparticle synthesis and UV-Vis spectrophotometry.',
    description: 'Exclusive hands-on experimental workshop designed for chapter members to acquire practical competencies in green synthesis of nanoparticles, UV-Vis spectrophotometry analysis, and high-fidelity laboratory protocol drafting.',
    image: '/assets/events/nanoskills_hands_on.jpg',
    imageAlt: 'NanoSkills Hands-on Synthesis and Characterization Workshop',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'nanoskills-workshop'
  },
  {
    id: 'dia-del-nino-hospital-san-vicente',
    slug: 'dia-del-nino-hospital-san-vicente',
    title: "Immersive Children's Day: Technology & Smiles",
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Outreach',
    date: 'June 01, 2026',
    time: '09:00 AM - 01:00 PM',
    location: 'San Vicente de Paúl Hospital, Ibarra',
    modality: 'In-Person',
    summary: 'Humanitarian outreach with Meta Quest 3 Virtual Reality benefiting 25 pediatric ICU patients.',
    description: 'Humanitarian volunteer outreach at San Vicente de Paúl Hospital (Ibarra). Meta Quest 3 VR headsets with immersive simulations were deployed and educational kits were gifted to 25 pediatric ICU patients under clinical biosafety protocols.',
    image: '/assets/events/dia_del_nino_hospital.jpg',
    imageAlt: "Immersive Children's Day at San Vicente de Paúl Hospital",
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'dia-del-nino-hospital'
  },
  {
    id: 'temscon-latam-2026-attendance',
    slug: 'temscon-latam-2026-attendance',
    title: 'Participation in IEEE TEMSCON LATAM 2026 International Conference',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Conference',
    date: 'May 2026',
    time: 'Full Day',
    location: 'Middle of the World, Quito, Ecuador',
    modality: 'In-Person',
    summary: 'Official executive board representation at the technology management summit in Mitad del Mundo.',
    description: 'Executive board participation in the Region 9 technology management and engineering conference in Mitad del Mundo. Strategic partnerships were established with international universities and student chapters.',
    image: '/assets/events/ieee_temscon_latam.jpg',
    imageAlt: 'IEEE NTC Yachay Tech Board at TEMSCON LATAM 2026',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'temscon-latam-2026'
  },
  {
    id: 'visita-victor-manuel-guzman-event',
    slug: 'visita-victor-manuel-guzman-event',
    title: 'Nanotechnology Workshop Visit at U.E. Víctor Manuel Guzmán',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Outreach',
    date: 'May 2026',
    time: '08:30 AM - 01:30 PM',
    location: 'U.E. Víctor Manuel Guzmán, Ibarra',
    modality: 'In-Person',
    summary: 'STEM vocational workshop and nanotechnology experiments for 120 high school students in Ibarra.',
    description: 'Community outreach and scientific dissemination workshop with high school students. Hands-on experiments of nano-phenomena (hydrophobicity, ferrofluids) and Virtual Reality demonstrations were conducted to foster STEM vocations.',
    image: '/assets/gallery/actividad_colegio_4.jpg',
    imageAlt: 'Nanotechnology Workshop at Víctor Manuel Guzmán High School',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'visita-victor-manuel-guzman'
  },
  {
    id: 'mtts-ntc-joint-workshop-event',
    slug: 'mtts-ntc-joint-workshop-event',
    title: 'Joint IEEE MTT-S & NTC Workshop: Microwaves & Nanomaterials',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Workshop',
    date: 'May 2026',
    time: '10:00 AM - 02:00 PM',
    location: 'Main Auditorium, Yachay Tech University',
    modality: 'In-Person',
    summary: 'Intercollegiate and interuniversity workshop on electromagnetic theory and nanosensors.',
    description: 'Joint technical workshop between IEEE MTT-S and IEEE NTC chapters. Fundamental microwave concepts, biomedical applications, and nanomaterial integration into high-frequency antennas were addressed.',
    image: '/assets/events/ieee_mtts_ntc_workshop.jpg',
    imageAlt: 'Joint IEEE MTT-S and NTC Workshop',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'mtts-ntc-workshop'
  },
  {
    id: 'ceremonia-posesion-directiva-event',
    slug: 'ceremonia-posesion-directiva-event',
    title: 'Official Inauguration of Founding Executive Board',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Conference',
    date: 'February 2026',
    time: '11:00 AM - 01:00 PM',
    location: 'University Auditorium, Yachay Tech',
    modality: 'In-Person',
    summary: 'Solemn inauguration ceremony of the founding executive board for the 2026-2027 term.',
    description: 'Solemn inauguration and swearing-in ceremony of founding officers of IEEE NTC Yachay Tech Student Branch before university authorities and IEEE Ecuador Section representatives.',
    image: '/assets/gallery/posesion_directivos_1.jpg',
    imageAlt: 'Inauguration of IEEE NTC Yachay Tech Board',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'posesion-directivos'
  },
  {
    id: 'sesion-fotos-rama-event',
    slug: 'sesion-fotos-rama-event',
    title: 'Official Student Branch Photoshoot',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Program',
    date: 'April 2026',
    time: '02:00 PM - 05:00 PM',
    location: 'Yachay Tech University Campus',
    modality: 'In-Person',
    summary: 'Institutional identity photoshoot and student community cohesion session.',
    description: 'Official photoshoot conducted on campus for consolidating the chapter’s visual identity and institutional dissemination media.',
    image: '/assets/gallery/foto_con_bandera.jpg',
    imageAlt: 'IEEE NTC Student Branch Photoshoot',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'sesion-fotos-rama'
  },
  {
    id: 'entrevista-utn-event',
    slug: 'entrevista-utn-event',
    title: 'Dissemination Interview on UTN Media Broadcast',
    category: 'Past',
    status: 'completed',
    registrationStatus: 'closed',
    type: 'Conference',
    date: 'June 2026',
    time: '10:00 AM - 11:30 AM',
    location: 'UTN Television Studios, Ibarra',
    modality: 'In-Person',
    summary: 'Broadcasting chapter projects and goals on university television.',
    description: 'Televised interview for Universidad Técnica del Norte media discussing the student chapter’s impact on regional scientific education.',
    image: '/assets/gallery/entrevista_utn.jpg',
    imageAlt: 'IEEE NTC Interview on UTN Media',
    imageVerified: true,
    featured: false,
    galleryAlbumId: 'entrevista-utn'
  }
];

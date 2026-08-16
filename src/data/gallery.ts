export interface GallerySlide {
  image: string;
  title: string;
  caption: string;
  position?: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  category: 'Outreach' | 'Conferences' | 'Workshops' | 'Community';
  date: string;
  coverImage: string;
  coverPosition?: string;
  summary: string;
  slides: GallerySlide[];
}

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: 'entrevista-utn',
    title: 'Television Science Broadcast: UTN University Channel',
    category: 'Conferences',
    date: 'June 15, 2026',
    coverImage: '/assets/gallery/entrevista_utn.png',
    coverPosition: 'center center',
    summary: 'Academic dissemination interview broadcast on university television studio in Ibarra about IEEE NTC projects, goals, and opportunities.',
    slides: [
      {
        image: '/assets/gallery/entrevista_utn.png',
        title: 'Live Interview at UTN University Television Studio',
        caption: 'IEEE NTC Yachay Tech student representatives Melanie Landázuri and Ethan Guevara presenting chapter achievements, VR innovations, and nanotechnology opportunities on regional television.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'dia-del-nino-hospital',
    title: "Nano Bridge: Science Vision — Children's Day Edition",
    category: 'Outreach',
    date: 'June 01, 2026',
    coverImage: '/assets/events/dia_del_nino_hospital.jpg',
    coverPosition: 'center center',
    summary: 'Deployment of Meta Quest 3 Virtual Reality technology and emotional support for 25 pediatric patients at San Vicente de Paúl Hospital.',
    slides: [
      {
        image: '/assets/events/dia_del_nino_hospital.jpg',
        title: "Nano Bridge: Science Vision (Children's Day Edition)",
        caption: 'Humanitarian volunteer outreach under the Nano Bridge: Science Vision program with Meta Quest 3 headsets, clinical disinfection biosafety, and gift kits at San Vicente de Paúl Hospital.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'mtts-ntc-workshop',
    title: 'Joint IEEE MTT-S & NTC Workshop',
    category: 'Workshops',
    date: 'May 28–29, 2026',
    coverImage: '/assets/events/ieee_mtts_ntc_workshop.jpg',
    coverPosition: 'center center',
    summary: 'Collaborative workshop on microwave theory, electromagnetism, and high-frequency nanomaterials.',
    slides: [
      {
        image: '/assets/events/ieee_mtts_ntc_workshop.jpg',
        title: 'IEEE NTC Delegation with International Speaker',
        caption: 'Chapter executive board members and international keynote speaker holding the official IEEE NTC Yachay Tech banner.',
        position: 'center center'
      },
      {
        image: '/assets/events/ieee_mtts_ntc_workshop_alt.jpg',
        title: 'Technical Workshop Session in the Auditorium',
        caption: 'Keynote presentation on microwaves and nanotechnology in the auditorium with the official IEEE MTT-S banner.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'temscon-latam-2026',
    title: 'Participation in IEEE TEMSCON LATAM 2026',
    category: 'Conferences',
    date: 'May 20–22, 2026',
    coverImage: '/assets/events/ieee_temscon_latam.jpg',
    coverPosition: 'center center',
    summary: 'Official chapter representation at the Region 9 technology management summit in Mitad del Mundo.',
    slides: [
      {
        image: '/assets/events/ieee_temscon_latam.jpg',
        title: 'Executive Board Delegation at Mitad del Mundo',
        caption: 'Chapter board officers at the Middle of the World monument during the opening of IEEE TEMSCON LATAM 2026.',
        position: 'center center'
      },
      {
        image: '/assets/events/ieee_temscon_latam_alt.jpg',
        title: 'Project Socialization and Global Networking',
        caption: 'Connecting with international university delegations and IEEE Region 9 leadership.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'nanoskills-workshop',
    title: 'NanoSkills: Sputtering & Thin Film Technologies (Theory & Practice)',
    category: 'Workshops',
    date: 'April 18 – May 18, 2026',
    coverImage: '/assets/events/nanoskills_hands_on.jpg',
    coverPosition: 'center center',
    summary: 'Comprehensive dual-phase program covering theoretical thin-film plasma dynamics and hands-on sputtering cleanroom equipment operation.',
    slides: [
      {
        image: '/assets/events/nanoskills_hands_on.jpg',
        title: 'Experimental Practice & Cleanroom Equipment Operation',
        caption: 'Hands-on technical training for chapter members in sputtering equipment operation, plasma deposition, and thin film characterization.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'sesion-fotos-rama',
    title: 'Official Student Branch Photoshoot',
    category: 'Community',
    date: 'April 2026',
    coverImage: '/assets/gallery/foto_con_bandera.jpg',
    coverPosition: 'center center',
    summary: 'Institutional identity and community belonging photoshoot organized on the Yachay Tech campus.',
    slides: [
      {
        image: '/assets/gallery/foto_con_bandera.jpg',
        title: 'Official Delegation with IEEE NANO Banner',
        caption: 'Executive board officers and chapter members proudly holding the official IEEE Nanotechnology Council flag.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/foto_sin_bandera.jpg',
        title: 'Student Community Integration on Campus',
        caption: 'Fellowship and collaboration gathering of the nanotechnology community at Yachay Tech.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'visita-victor-manuel-guzman',
    title: 'School Visit: U.E. Víctor Manuel Guzmán',
    category: 'Outreach',
    date: 'April 09, 2026',
    coverImage: '/assets/gallery/colegio_bandera_completa.jpg',
    coverPosition: 'center center',
    summary: 'Full STEM outreach session with hands-on nanotechnology experiments and Virtual Reality molecular simulations for high school students in Ibarra.',
    slides: [
      {
        image: '/assets/gallery/colegio_vr_experiencia.jpg',
        title: 'Virtual Reality Molecular Simulation Demonstration',
        caption: 'High school student experiencing immersive molecular laboratory simulations using Meta Quest 3 VR headsets guided by IEEE NTC volunteers.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/colegio_delegacion_estudiante.jpg',
        title: 'Student Engagement and STEM Recognition',
        caption: 'Chapter delegation honoring participating high school students with educational science notebooks and kits.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/colegio_delegacion_docentes.jpg',
        title: 'Scientific Outreach Delegation with School Community',
        caption: 'IEEE NTC student leaders and volunteer presenters collaborating with high school educators and students.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/colegio_bandera_stand.jpg',
        title: 'Chapter Delegation with School of Physical Sciences Stand',
        caption: 'IEEE NTC Yachay Tech volunteer team proudly displaying the official council flag at the school exhibition booth.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/colegio_bandera_completa.jpg',
        title: 'Full Outreach Volunteer Delegation with Official Banner',
        caption: 'Official group photograph of the full IEEE NTC Yachay Tech volunteer delegation holding the chapter flag with the school community.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'logic-lock-first-meeting',
    title: 'Logic Lock Launch & First Chapter General Assembly',
    category: 'Community',
    date: 'March 12, 2026',
    coverImage: '/assets/gallery/logic_lock_post.png',
    coverPosition: 'center center',
    summary: 'First general assembly introducing Logic Lock, an automated scientific literature research tool developed by Mateo Gavilanes, research workflows, and the founding mission of IEEE NTC at Yachay Tech.',
    slides: [
      {
        image: '/assets/gallery/logic_lock_post.png',
        title: 'Official Logic Lock Launch Announcement Flyer',
        caption: 'Official promotional poster for the first chapter general assembly, Logic Lock scientific workflow presentation, and member welcoming.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/logic_lock_grupo.jpg',
        title: 'First General Assembly & Community Gathering',
        caption: 'Founding executive board, student members, and volunteers celebrating the chapter launch with the official IEEE NTC cake.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/logic_lock_shirley.jpg',
        title: 'Chapter Origin & Nanotechnology Leadership',
        caption: 'Chair Shirley Criollo explaining the founding purpose of IEEE NTC at Yachay Tech as the only university in Ecuador with a Nanotechnology degree.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/logic_lock_mateo.jpg',
        title: 'IEEE LANANO 2026 Incubator Presentation',
        caption: 'Vice Chair Mateo Gavilanes introducing the IEEE LANANO 2026 conference and scientific paper authoring mentorship program.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'posesion-directivos',
    title: 'Executive Board Swearing-in Ceremony',
    category: 'Community',
    date: 'February 25, 2026',
    coverImage: '/assets/gallery/posesion_directivos_oficial.jpg',
    coverPosition: 'center center',
    summary: 'Solemn official inauguration and swearing-in ceremony of the founding IEEE NTC Yachay Tech executive officers.',
    slides: [
      {
        image: '/assets/gallery/posesion_directivos_oficial.jpg',
        title: 'Official Executive Board Delegation with IEEE NANO Banner',
        caption: 'Founding chapter executive officers Shirley Criollo (Chair), Mateo Gavilanes (Vice Chair), Ethan Guevara (Secretary), Emily Pérez (Treasurer), and Melanie Landázuri (Webmaster) holding the official IEEE NTC flag.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/posesion_directivos_certificados.jpg',
        title: 'Official Appointment Credentials & Swearing-in Certificates',
        caption: 'Executive board officers proudly displaying their official IEEE recognition certificates and appointment credentials.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/posesion_directivos_auditorio.png',
        title: 'Auditorium Ceremony & Community Swearing-in',
        caption: 'University auditorium audience, faculty authorities, and students commemorating the solemn inauguration of the chapter.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/posesion_directivos_1.jpg',
        title: 'Opening and Official Chapter Inauguration',
        caption: 'Inaugural ceremony in the university auditorium with faculty authorities and founding members.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/posesion_directivos_2.jpg',
        title: 'Formal Swearing-in and Credentials Presentation',
        caption: 'Formal presentation of credentials and official appointments for the 2026-2027 term.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'directiva-faculty-advisor',
    title: 'Board Officers & Faculty Advisor',
    category: 'Community',
    date: 'February 2026',
    coverImage: '/assets/gallery/advisor.jpg',
    coverPosition: 'center center',
    summary: 'Official portrait gallery of founding executive board members and the chapter faculty advisor.',
    slides: [
      {
        image: '/assets/gallery/advisor.jpg',
        title: 'Faculty Advisor — Chapter Academic Mentor',
        caption: 'Academic guidance and faculty support across research groups and technical lines of IEEE NTC.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/foto_directiva/Presidenta.jpg',
        title: 'Shirley Solange Criollo Coello — Chair',
        caption: 'Founding Chair and research lead in nanobiotechnology and nanomedicine.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/foto_directiva/Visepresidente.jpg',
        title: 'Mateo Gavilanes — Vice Chair',
        caption: 'Vice Chair and lead in Clinical AI and Virtual Reality.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/foto_directiva/Secretario.jpg',
        title: 'Ethan Aaron Guevara López — Secretary',
        caption: 'Secretary and coordinator of biomedical projects and humanitarian initiatives.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/foto_directiva/Tesorera.jpg',
        title: 'Emily Poleth Pérez Román — Treasurer',
        caption: 'Chapter Treasurer and coordinator of resources for IEEE activities and travel grants.',
        position: 'center 20%'
      },
      {
        image: '/assets/directive/fernanda_landazuri.jpg',
        title: 'Melanie Fernanda Landázuri — Webmaster & Media',
        caption: 'Webmaster leading scientific communication, digital identity, and media dissemination.',
        position: 'center 20%'
      },
      {
        image: '/assets/directive/kennedy_rodriguez.jpg',
        title: 'Yehudah Kennedy Rodríguez — Webmaster & Tech',
        caption: 'Webmaster leading software development, biomedical hardware, and technical support.',
        position: 'center 20%'
      }
    ]
  }
];

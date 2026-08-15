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
    id: 'visita-victor-manuel-guzman',
    title: 'School Visit: U.E. Víctor Manuel Guzmán',
    category: 'Outreach',
    date: 'May 2026',
    coverImage: '/assets/gallery/actividad_colegio_4.jpg',
    coverPosition: 'center center',
    summary: 'Full STEM outreach session with hands-on nanotechnology experiments and Virtual Reality molecular simulations for high school students in Ibarra.',
    slides: [
      {
        image: '/assets/gallery/actividad_colegio_1.jpg',
        title: 'Nanotechnology Demonstration with Virtual Reality',
        caption: 'High school student experiencing immersive molecular laboratory simulations using Meta Quest 3 VR headsets guided by IEEE NTC volunteers.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/actividad_colegio_2.jpg',
        title: 'Hands-on Classroom Demonstration of Nano-Phenomena',
        caption: 'Interactive demonstrations of hydrophobic effects, magnetic ferrofluid properties, and scientific discussions with students.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/actividad_colegio_3.jpg',
        title: 'Scientific Workshop and Interactive Dynamics',
        caption: 'Group Q&A dynamics and vocational inspiration towards nanotechnology and engineering degrees.',
        position: 'center 30%'
      },
      {
        image: '/assets/gallery/actividad_colegio_4.jpg',
        title: 'IEEE NTC Delegation with Teachers and Students',
        caption: 'Official group photograph of the IEEE NTC Yachay Tech volunteer delegation holding the chapter flag with the school community.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'mtts-ntc-workshop',
    title: 'Joint IEEE MTT-S & NTC Workshop',
    category: 'Workshops',
    date: 'May 2026',
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
    date: 'May 2026',
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
    id: 'posesion-directivos',
    title: 'Executive Board Swearing-in Ceremony',
    category: 'Community',
    date: 'February 2026',
    coverImage: '/assets/gallery/posesion_directivos_1.jpg',
    coverPosition: 'center center',
    summary: 'Solemn official inauguration and swearing-in ceremony of the founding IEEE NTC Yachay Tech officers.',
    slides: [
      {
        image: '/assets/gallery/posesion_directivos_1.jpg',
        title: 'Opening and Official Chapter Inauguration',
        caption: 'Inaugural ceremony in the university auditorium with faculty authorities and founding members.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/posesion_directivos_2.jpg',
        title: 'Swearing-in and Official Appointment',
        caption: 'Formal presentation of credentials and official appointments for the 2026-2027 term.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'directiva-faculty-advisor',
    title: 'Board Officers & Faculty Advisor',
    category: 'Community',
    date: '2026',
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
    id: 'dia-del-nino-hospital',
    title: "Immersive Children's Day — San Vicente de Paúl Hospital",
    category: 'Outreach',
    date: 'June 2026',
    coverImage: '/assets/events/dia_del_nino_hospital.jpg',
    coverPosition: 'center center',
    summary: 'Deployment of Meta Quest 3 Virtual Reality technology and emotional support for 25 pediatric ICU patients.',
    slides: [
      {
        image: '/assets/events/dia_del_nino_hospital.jpg',
        title: "Immersive Children's Day: Technology & Smiles",
        caption: 'Humanitarian volunteer outreach with Meta Quest 3 headsets, clinical disinfection biosafety, and gift kits at San Vicente de Paúl Hospital.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'nanoskills-workshop',
    title: 'NanoSkills Hands-on Workshop: Synthesis & Characterization',
    category: 'Workshops',
    date: 'June 2026',
    coverImage: '/assets/events/nanoskills_hands_on.jpg',
    coverPosition: 'center center',
    summary: 'Intensive nanotechnology laboratory training on green nanoparticle synthesis and UV-Vis spectrophotometry.',
    slides: [
      {
        image: '/assets/events/nanoskills_hands_on.jpg',
        title: 'Experimental Practice in Nanotechnology Laboratory',
        caption: 'Hands-on technical training for chapter members in nanoparticle preparation and biosafety protocols.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'entrevista-utn',
    title: 'Interview and Media Dissemination on UTN TV',
    category: 'Conferences',
    date: 'June 2026',
    coverImage: '/assets/gallery/entrevista_utn.jpg',
    coverPosition: 'center center',
    summary: 'Academic dissemination interview broadcast on university television about IEEE NTC projects and goals.',
    slides: [
      {
        image: '/assets/gallery/entrevista_utn.jpg',
        title: 'Live Interview on UTN Media Broadcast',
        caption: 'IEEE NTC Yachay Tech leadership presenting chapter achievements and nanotechnology opportunities.',
        position: 'center center'
      }
    ]
  }
];

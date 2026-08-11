export interface GallerySlide {
  image: string;
  title: string;
  titleEn: string;
  caption: string;
  captionEn: string;
  position?: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  titleEn: string;
  category: 'Vinculación' | 'Conferencias' | 'Talleres' | 'Comunidad';
  categoryEn: 'Outreach' | 'Conferences' | 'Workshops' | 'Community';
  date: string;
  dateEn: string;
  coverImage: string;
  coverPosition?: string;
  summary: string;
  summaryEn: string;
  slides: GallerySlide[];
}

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: 'visita-victor-manuel-guzman',
    title: 'Visita U.E. Víctor Manuel Guzmán',
    titleEn: 'School Visit: U.E. Víctor Manuel Guzmán',
    category: 'Vinculación',
    categoryEn: 'Outreach',
    date: 'Mayo 2026',
    dateEn: 'May 2026',
    coverImage: '/assets/gallery/actividad_colegio_4.jpg',
    coverPosition: 'center center',
    summary: 'Jornada completa de divulgación STEM, experimentos de nanofenómenos y simulación con Realidad Virtual para estudiantes de bachillerato en Ibarra.',
    summaryEn: 'Full STEM outreach session with hands-on nanotechnology experiments and Virtual Reality molecular simulations for high school students in Ibarra.',
    slides: [
      {
        image: '/assets/gallery/actividad_colegio_1.jpg',
        title: 'Demostración de Nanotecnología con Realidad Virtual',
        titleEn: 'Nanotechnology Demonstration with Virtual Reality',
        caption: 'Estudiante de bachillerato experimentando la simulación inmersiva de laboratorio molecular con visores Meta Quest 3 guiada por voluntarios de IEEE NTC.',
        captionEn: 'High school student experiencing immersive molecular laboratory simulations using Meta Quest 3 VR headsets guided by IEEE NTC volunteers.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/actividad_colegio_2.jpg',
        title: 'Demostración Práctica de Nanofenómenos en el Aula',
        titleEn: 'Hands-on Classroom Demonstration of Nano-Phenomena',
        caption: 'Demostraciones interactivas de efectos hidrofóbicos, propiedades de ferrofluidos magnéticos y discusión científica con estudiantes de colegio.',
        captionEn: 'Interactive demonstrations of hydrophobic effects, magnetic ferrofluid properties, and scientific discussions with students.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/actividad_colegio_3.jpg',
        title: 'Taller Científico y Dinámicas Experimentales',
        titleEn: 'Scientific Workshop and Interactive Dynamics',
        caption: 'Dinámicas grupales de preguntas, respuestas y motivación vocacional hacia carreras de nanotecnología e ingeniería.',
        captionEn: 'Group Q&A dynamics and vocational inspiration towards nanotechnology and engineering degrees.',
        position: 'center 30%'
      },
      {
        image: '/assets/gallery/actividad_colegio_4.jpg',
        title: 'Delegación IEEE NTC junto a Docentes y Estudiantes',
        titleEn: 'IEEE NTC Delegation with Teachers and Students',
        caption: 'Fotografía oficial de la comitiva de voluntariado de IEEE NTC Yachay Tech portando la bandera del capítulo junto a la comunidad educativa.',
        captionEn: 'Official group photograph of the IEEE NTC Yachay Tech volunteer delegation holding the chapter flag with the school community.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'mtts-ntc-workshop',
    title: 'Taller Conjunto IEEE MTT-S & NTC',
    titleEn: 'Joint IEEE MTT-S & NTC Workshop',
    category: 'Talleres',
    categoryEn: 'Workshops',
    date: 'Mayo 2026',
    dateEn: 'May 2026',
    coverImage: '/assets/events/ieee_mtts_ntc_workshop.jpg',
    coverPosition: 'center center',
    summary: 'Taller colaborativo intercolegial e interuniversitario sobre teoría de microondas, electromagnetismo y nanomateriales de alta frecuencia.',
    summaryEn: 'Collaborative workshop on microwave theory, electromagnetism, and high-frequency nanomaterials.',
    slides: [
      {
        image: '/assets/events/ieee_mtts_ntc_workshop.jpg',
        title: 'Delegación IEEE NTC con Ponente Internacional',
        titleEn: 'IEEE NTC Delegation with International Speaker',
        caption: 'Miembros de la directiva y ponente internacional con la bandera oficial de IEEE NTC Yachay Tech durante el workshop conjunto.',
        captionEn: 'Chapter executive board members and international keynote speaker holding the official IEEE NTC Yachay Tech banner.',
        position: 'center center'
      },
      {
        image: '/assets/events/ieee_mtts_ntc_workshop_alt.jpg',
        title: 'Sesión Técnica del Taller en el Auditorio',
        titleEn: 'Technical Workshop Session in the Auditorium',
        caption: 'Presentación magistral de microondas y nanotecnología en el auditorio con la pancarta oficial del IEEE MTT-S Broadening Participation Workshop.',
        captionEn: 'Keynote presentation on microwaves and nanotechnology in the auditorium with the official IEEE MTT-S banner.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'temscon-latam-2026',
    title: 'Participación en IEEE TEMSCON LATAM 2026',
    titleEn: 'Participation in IEEE TEMSCON LATAM 2026',
    category: 'Conferencias',
    categoryEn: 'Conferences',
    date: 'Mayo 2026',
    dateEn: 'May 2026',
    coverImage: '/assets/events/ieee_temscon_latam.jpg',
    coverPosition: 'center center',
    summary: 'Representación oficial de la directiva en la conferencia cumbre de gestión tecnológica de la Región 9 en Mitad del Mundo.',
    summaryEn: 'Official chapter representation at the Region 9 technology management summit in Mitad del Mundo.',
    slides: [
      {
        image: '/assets/events/ieee_temscon_latam.jpg',
        title: 'Comitiva de la Directiva en Mitad del Mundo',
        titleEn: 'Executive Board Delegation at Mitad del Mundo',
        caption: 'Directivos del capítulo en el monumento de la Mitad del Mundo durante la jornada de apertura de IEEE TEMSCON LATAM 2026.',
        captionEn: 'Chapter board officers at the Middle of the World monument during the opening of IEEE TEMSCON LATAM 2026.',
        position: 'center center'
      },
      {
        image: '/assets/events/ieee_temscon_latam_alt.jpg',
        title: 'Socialización de Proyectos y Networking',
        titleEn: 'Project Socialization and Global Networking',
        caption: 'Articulación con delegaciones universitarias internacionales y líderes de IEEE Región 9.',
        captionEn: 'Connecting with international university delegations and IEEE Region 9 leadership.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'posesion-directivos',
    title: 'Ceremonia de Posesión de la Directiva',
    titleEn: 'Executive Board Swearing-in Ceremony',
    category: 'Comunidad',
    categoryEn: 'Community',
    date: 'Febrero 2026',
    dateEn: 'February 2026',
    coverImage: '/assets/gallery/posesion_directivos_1.jpg',
    coverPosition: 'center center',
    summary: 'Acto solemne de conformación oficial y juramentación de la directiva fundadora de IEEE NTC Yachay Tech.',
    summaryEn: 'Solemn official inauguration and swearing-in ceremony of the founding IEEE NTC Yachay Tech officers.',
    slides: [
      {
        image: '/assets/gallery/posesion_directivos_1.jpg',
        title: 'Apertura e Inauguración Oficial del Capítulo',
        titleEn: 'Opening and Official Chapter Inauguration',
        caption: 'Ceremonia inaugural en el auditorio universitario con autoridades institucionales y miembros fundadores.',
        captionEn: 'Inaugural ceremony in the university auditorium with faculty authorities and founding members.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/posesion_directivos_2.jpg',
        title: 'Juramentación y Entrega de Nombramientos',
        titleEn: 'Swearing-in and Official Appointment',
        caption: 'Presentación formal de credenciales y nombramientos oficiales para el periodo de gestión 2026-2027.',
        captionEn: 'Formal presentation of credentials and official appointments for the 2026-2027 term.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'directiva-faculty-advisor',
    title: 'Directiva y Faculty Advisor',
    titleEn: 'Board Officers & Faculty Advisor',
    category: 'Comunidad',
    categoryEn: 'Community',
    date: '2026',
    dateEn: '2026',
    coverImage: '/assets/gallery/advisor.jpg',
    coverPosition: 'center center',
    summary: 'Galería de retratos oficiales de los miembros de la directiva fundadora y la docente asesora (Faculty Advisor) del capítulo.',
    summaryEn: 'Official portrait gallery of founding executive board members and the chapter faculty advisor.',
    slides: [
      {
        image: '/assets/gallery/advisor.jpg',
        title: 'Faculty Advisor — Docente Asesora del Capítulo',
        titleEn: 'Faculty Advisor — Chapter Academic Mentor',
        caption: 'Orientación académica y soporte docente en los semilleros de investigación y líneas técnicas del capítulo IEEE NTC.',
        captionEn: 'Academic guidance and faculty support across research groups and technical lines of IEEE NTC.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/foto_directiva/Presidenta.jpg',
        title: 'Shirley Solange Criollo Coello — Presidenta (Chair)',
        titleEn: 'Shirley Solange Criollo Coello — Chair',
        caption: 'Presidenta fundadora y líder de investigación en nanobiotecnología y nanomedicina.',
        captionEn: 'Founding Chair and research lead in nanobiotechnology and nanomedicine.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/foto_directiva/Visepresidente.jpg',
        title: 'Mateo Gavilanes — Vicepresidente (Vice Chair)',
        titleEn: 'Mateo Gavilanes — Vice Chair',
        caption: 'Vicepresidente y líder de Inteligencia Artificial Clínica y Realidad Virtual.',
        captionEn: 'Vice Chair and lead in Clinical AI and Virtual Reality.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/foto_directiva/Secretario.jpg',
        title: 'Ethan Aaron Guevara López — Secretario (Secretary)',
        titleEn: 'Ethan Aaron Guevara López — Secretary',
        caption: 'Secretario general y coordinador de proyectos biomédicos e iniciativas humanitarias.',
        captionEn: 'Secretary and coordinator of biomedical projects and humanitarian initiatives.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/foto_directiva/Tesorera.jpg',
        title: 'Emily Poleth Pérez Román — Tesorera (Treasurer)',
        titleEn: 'Emily Poleth Pérez Román — Treasurer',
        caption: 'Tesorera del capítulo y coordinadora de gestión de recursos para actividades y viajes IEEE.',
        captionEn: 'Chapter Treasurer and coordinator of resources for IEEE activities and travel grants.',
        position: 'center 20%'
      },
      {
        image: '/assets/directive/fernanda_landazuri.jpg',
        title: 'Melanie Fernanda Landázuri — Webmaster & Comunicación',
        titleEn: 'Melanie Fernanda Landázuri — Webmaster & Media',
        caption: 'Webmaster y encargada de divulgación científica, identidad digital y comunicación pública.',
        captionEn: 'Webmaster leading scientific communication, digital identity, and media dissemination.',
        position: 'center 20%'
      },
      {
        image: '/assets/directive/kennedy_rodriguez.jpg',
        title: 'Yehudah Kennedy Rodríguez — Webmaster & Tecnología',
        titleEn: 'Yehudah Kennedy Rodríguez — Webmaster & Tech',
        caption: 'Webmaster de desarrollo de software, hardware biomédico y soporte técnico.',
        captionEn: 'Webmaster leading software development, biomedical hardware, and technical support.',
        position: 'center 20%'
      }
    ]
  },
  {
    id: 'sesion-fotos-rama',
    title: 'Sesión Oficial de Fotos de la Rama Estudiantil',
    titleEn: 'Official Student Branch Photoshoot',
    category: 'Comunidad',
    categoryEn: 'Community',
    date: 'Abril 2026',
    dateEn: 'April 2026',
    coverImage: '/assets/gallery/foto_con_bandera.jpg',
    coverPosition: 'center center',
    summary: 'Sesión fotográfica de identidad institucional y pertenencia comunitaria organizada en el campus de Yachay Tech.',
    summaryEn: 'Institutional identity and community belonging photoshoot organized on the Yachay Tech campus.',
    slides: [
      {
        image: '/assets/gallery/foto_con_bandera.jpg',
        title: 'Delegación Oficial con Bandera IEEE NANO',
        titleEn: 'Official Delegation with IEEE NANO Banner',
        caption: 'Integrantes de la directiva y miembros del capítulo portando la bandera oficial de IEEE Nanotechnology Council.',
        captionEn: 'Executive board officers and chapter members proudly holding the official IEEE Nanotechnology Council flag.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/foto_sin_bandera.jpg',
        title: 'Integración Estudiantil en el Campus',
        titleEn: 'Student Community Integration on Campus',
        caption: 'Encuentro de colaboración y compañerismo de la comunidad de nanotecnología en Yachay Tech.',
        captionEn: 'Fellowship and collaboration gathering of the nanotechnology community at Yachay Tech.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'dia-del-nino-hospital',
    title: "Día del Niño Inmersivo — Hospital San Vicente de Paúl",
    titleEn: "Immersive Children's Day — San Vicente de Paúl Hospital",
    category: 'Vinculación',
    categoryEn: 'Outreach',
    date: 'Junio 2026',
    dateEn: 'June 2026',
    coverImage: '/assets/events/dia_del_nino_hospital.jpg',
    coverPosition: 'center center',
    summary: 'Despliegue de tecnología de Realidad Virtual Meta Quest 3 y apoyo emocional a 25 niños internados en la UCI Pediátrica.',
    summaryEn: 'Deployment of Meta Quest 3 Virtual Reality technology and emotional support for 25 pediatric ICU patients.',
    slides: [
      {
        image: '/assets/events/dia_del_nino_hospital.jpg',
        title: "Día del Niño Inmersivo: Tecnología y Sonrisas",
        titleEn: "Immersive Children's Day: Technology & Smiles",
        caption: 'Jornada de voluntariado humanitario con visores Meta Quest 3, desinfección clínica de bioseguridad y entrega de kits en el Hospital San Vicente de Paúl.',
        captionEn: 'Humanitarian volunteer outreach with Meta Quest 3 headsets, clinical disinfection biosafety, and gift kits at San Vicente de Paúl Hospital.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'nanoskills-workshop',
    title: 'Taller Práctico NanoSkills: Síntesis y Caracterización',
    titleEn: 'NanoSkills Hands-on Workshop: Synthesis & Characterization',
    category: 'Talleres',
    categoryEn: 'Workshops',
    date: 'Junio 2026',
    dateEn: 'June 2026',
    coverImage: '/assets/events/nanoskills_hands_on.jpg',
    coverPosition: 'center center',
    summary: 'Entrenamiento intensivo en laboratorio de nanotecnología sobre síntesis verde y espectrofotometría UV-Vis.',
    summaryEn: 'Intensive nanotechnology laboratory training on green nanoparticle synthesis and UV-Vis spectrophotometry.',
    slides: [
      {
        image: '/assets/events/nanoskills_hands_on.jpg',
        title: 'Práctica Experimental en Laboratorio de Nanotecnología',
        titleEn: 'Experimental Practice in Nanotechnology Laboratory',
        caption: 'Capacitación técnica para miembros del capítulo en preparación de nanopartículas y protocolos de bioseguridad.',
        captionEn: 'Hands-on technical training for chapter members in nanoparticle preparation and biosafety protocols.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'entrevista-utn',
    title: 'Entrevista y Difusión en Medios UTN',
    titleEn: 'Interview and Media Dissemination on UTN TV',
    category: 'Conferencias',
    categoryEn: 'Conferences',
    date: 'Junio 2026',
    dateEn: 'June 2026',
    coverImage: '/assets/gallery/entrevista_utn.jpg',
    coverPosition: 'center center',
    summary: 'Entrevista de difusión académica transmitida por televisión universitaria sobre los proyectos y objetivos de IEEE NTC.',
    summaryEn: 'Academic dissemination interview broadcast on university television about IEEE NTC projects and goals.',
    slides: [
      {
        image: '/assets/gallery/entrevista_utn.jpg',
        title: 'Entrevista en Vivo en Medios de Comunicación UTN',
        titleEn: 'Live Interview on UTN Media Broadcast',
        caption: 'Líderes de IEEE NTC Yachay Tech exponiendo los logros del capítulo y las oportunidades en nanotecnología.',
        captionEn: 'IEEE NTC Yachay Tech leadership presenting chapter achievements and nanotechnology opportunities.',
        position: 'center center'
      }
    ]
  }
];

export interface GallerySlide {
  image: string;
  title: string;
  caption: string;
  position?: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  category: 'Vinculación' | 'Conferencias' | 'Talleres' | 'Comunidad';
  date: string;
  coverImage: string;
  coverPosition?: string;
  summary: string;
  slides: GallerySlide[];
}

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: 'visita-victor-manuel-guzman',
    title: 'Visita U.E. Víctor Manuel Guzmán',
    category: 'Vinculación',
    date: 'Mayo 2026',
    coverImage: '/assets/gallery/actividad_colegio_4.jpg',
    coverPosition: 'center center',
    summary: 'Jornada completa de divulgación STEM, experimentos de nanofenómenos y simulación con Realidad Virtual para estudiantes de bachillerato en Ibarra.',
    slides: [
      {
        image: '/assets/gallery/actividad_colegio_1.jpg',
        title: 'Demostración de Nanotecnología con Realidad Virtual',
        caption: 'Estudiante de bachillerato experimentando la simulación inmersiva de laboratorio molecular con visores Meta Quest 3 guiada por voluntarios de IEEE NTC.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/actividad_colegio_2.jpg',
        title: 'Demostración Práctica de Nanofenómenos en el Aula',
        caption: 'Demostraciones interactivas de efectos hidrofóbicos, propiedades de ferrofluidos magnéticos y discusión científica con estudiantes de colegio.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/actividad_colegio_3.jpg',
        title: 'Taller Científico y Dinámicas Experimentales',
        caption: 'Dinámicas grupales de preguntas, respuestas y motivación vocacional hacia carreras de nanotecnología e ingeniería.',
        position: 'center 30%'
      },
      {
        image: '/assets/gallery/actividad_colegio_4.jpg',
        title: 'Delegación IEEE NTC junto a Docentes y Estudiantes',
        caption: 'Fotografía oficial de la comitiva de voluntariado de IEEE NTC Yachay Tech portando la bandera del capítulo junto a la comunidad educativa.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'mtts-ntc-workshop',
    title: 'Taller Conjunto IEEE MTT-S & NTC',
    category: 'Talleres',
    date: 'Mayo 2026',
    coverImage: '/assets/events/ieee_mtts_ntc_workshop.jpg',
    coverPosition: 'center center',
    summary: 'Taller colaborativo intercolegial e interuniversitario sobre teoría de microondas, electromagnetismo y nanomateriales de alta frecuencia.',
    slides: [
      {
        image: '/assets/events/ieee_mtts_ntc_workshop.jpg',
        title: 'Delegación IEEE NTC con Ponente Internacional',
        caption: 'Miembros de la directiva y ponente internacional con la bandera oficial de IEEE NTC Yachay Tech durante el workshop conjunto.',
        position: 'center center'
      },
      {
        image: '/assets/events/ieee_mtts_ntc_workshop_alt.jpg',
        title: 'Sesión Técnica del Taller en el Auditorio',
        caption: 'Presentación magistral de microondas y nanotecnología en el auditorio con la pancarta oficial del IEEE MTT-S Broadening Participation Workshop.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'temscon-latam-2026',
    title: 'Participación en IEEE TEMSCON LATAM 2026',
    category: 'Conferencias',
    date: 'Mayo 2026',
    coverImage: '/assets/events/ieee_temscon_latam.jpg',
    coverPosition: 'center center',
    summary: 'Representación oficial de la directiva en la conferencia cumbre de gestión tecnológica de la Región 9 en Mitad del Mundo.',
    slides: [
      {
        image: '/assets/events/ieee_temscon_latam.jpg',
        title: 'Comitiva de la Directiva en Mitad del Mundo',
        caption: 'Directivos del capítulo en el monumento de la Mitad del Mundo durante la jornada de apertura de IEEE TEMSCON LATAM 2026.',
        position: 'center center'
      },
      {
        image: '/assets/events/ieee_temscon_latam_alt.jpg',
        title: 'Socialización de Proyectos y Networking',
        caption: 'Articulación con delegaciones universitarias internacionales y líderes de IEEE Región 9.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'posesion-directivos',
    title: 'Ceremonia de Posesión de la Directiva',
    category: 'Comunidad',
    date: 'Febrero 2026',
    coverImage: '/assets/gallery/posesion_directivos_1.jpg',
    coverPosition: 'center center',
    summary: 'Acto solemne de conformación oficial y juramentación de la directiva fundadora de IEEE NTC Yachay Tech.',
    slides: [
      {
        image: '/assets/gallery/posesion_directivos_1.jpg',
        title: 'Apertura e Inauguración Oficial del Capítulo',
        caption: 'Ceremonia inaugural en el auditorio universitario con autoridades institucionales y miembros fundadores.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/posesion_directivos_2.jpg',
        title: 'Juramentación y Entrega de Nombramientos',
        caption: 'Presentación formal de credenciales y nombramientos oficiales para el periodo de gestión 2026-2027.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'directiva-faculty-advisor',
    title: 'Directiva y Faculty Advisor',
    category: 'Comunidad',
    date: '2026',
    coverImage: '/assets/gallery/advisor.jpg',
    coverPosition: 'center center',
    summary: 'Galería de retratos oficiales de los miembros de la directiva fundadora y la docente asesora (Faculty Advisor) del capítulo.',
    slides: [
      {
        image: '/assets/gallery/advisor.jpg',
        title: 'Faculty Advisor — Dra. Mentora del Capítulo',
        caption: 'Orientación académica y soporte docente en los semilleros de investigación y líneas técnicas del capítulo IEEE NTC.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/foto_directiva/Presidenta.jpg',
        title: 'Shirley Solange Criollo Coello — Presidenta (Chair)',
        caption: 'Presidenta fundadora y líder de investigación en nanobiotecnología y nanomedicina.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/foto_directiva/Visepresidente.jpg',
        title: 'Isaac Mateo Gavilanes Chávez — Vicepresidente (Vice Chair)',
        caption: 'Vicepresidente y líder de computación científica, Inteligencia Artificial y Realidad Virtual.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/foto_directiva/Secretario.jpg',
        title: 'Ethan Aaron Guevara López — Secretario (Secretary)',
        caption: 'Secretario general y coordinador de proyectos biomédicos e iniciativas humanitarias.',
        position: 'center 20%'
      },
      {
        image: '/assets/gallery/foto_directiva/Tesorera.jpg',
        title: 'Emily Poleth Pérez Román — Tesorera (Treasurer)',
        caption: 'Tesorera del capítulo y coordinadora de gestión de recursos para actividades y viajes IEEE.',
        position: 'center 20%'
      },
      {
        image: '/assets/directive/fernanda_landazuri.jpg',
        title: 'Melanie Fernanda Landázuri — Webmaster & Comunicación',
        caption: 'Webmaster y encargada de divulgación científica, identidad digital y comunicación pública.',
        position: 'center 20%'
      },
      {
        image: '/assets/directive/kennedy_rodriguez.jpg',
        title: 'Yehudah Kennedy Rodríguez — Webmaster & Tecnología',
        caption: 'Webmaster de desarrollo de software, hardware biomédico y soporte técnico.',
        position: 'center 20%'
      }
    ]
  },
  {
    id: 'sesion-fotos-rama',
    title: 'Sesión Oficial de Fotos de la Rama Estudiantil',
    category: 'Comunidad',
    date: 'Abril 2026',
    coverImage: '/assets/gallery/foto_con_bandera.jpg',
    coverPosition: 'center center',
    summary: 'Sesión fotográfica de identidad institucional y pertenencia comunitaria organizada en el campus de Yachay Tech.',
    slides: [
      {
        image: '/assets/gallery/foto_con_bandera.jpg',
        title: 'Delegación Oficial con Bandera IEEE NANO',
        caption: 'Integrantes de la directiva y miembros del capítulo portando la bandera oficial de IEEE Nanotechnology Council.',
        position: 'center center'
      },
      {
        image: '/assets/gallery/foto_sin_bandera.jpg',
        title: 'Integración Estudiantil en el Campus',
        caption: 'Encuentro de colaboración y compañerismo de la comunidad de nanotecnología en Yachay Tech.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'dia-del-nino-hospital',
    title: "Día del Niño Inmersivo — Hospital San Vicente de Paúl",
    category: 'Vinculación',
    date: 'Junio 2026',
    coverImage: '/assets/events/dia_del_nino_hospital.jpg',
    coverPosition: 'center center',
    summary: 'Despliegue de tecnología de Realidad Virtual Meta Quest 3 y apoyo emocional a 25 niños internados en la UCI Pediátrica.',
    slides: [
      {
        image: '/assets/events/dia_del_nino_hospital.jpg',
        title: "Día del Niño Inmersivo: Tecnología y Sonrisas",
        caption: 'Jornada de voluntariado humanitario con visores Meta Quest 3, desinfección clínica de bioseguridad y disfraces de payasos en el Hospital San Vicente de Paúl.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'nanoskills-workshop',
    title: 'Taller Práctico NanoSkills: Síntesis y Caracterización',
    category: 'Talleres',
    date: 'Junio 2026',
    coverImage: '/assets/events/nanoskills_hands_on.jpg',
    coverPosition: 'center center',
    summary: 'Entrenamiento intensivo en laboratorio de nanotecnología sobre síntesis verde y espectrofotometría UV-Vis.',
    slides: [
      {
        image: '/assets/events/nanoskills_hands_on.jpg',
        title: 'Práctica Experimental en Laboratorio de Nanotecnología',
        caption: 'Capacitación técnica para miembros del capítulo en preparación de nanopartículas y protocolos de bioseguridad.',
        position: 'center center'
      }
    ]
  },
  {
    id: 'entrevista-utn',
    title: 'Entrevista y Difusión en Medios UTN',
    category: 'Conferencias',
    date: 'Junio 2026',
    coverImage: '/assets/gallery/entrevista_utn.jpg',
    coverPosition: 'center center',
    summary: 'Entrevista de difusión académica transmitida por televisión universitaria sobre los proyectos y objetivos de IEEE NTC.',
    slides: [
      {
        image: '/assets/gallery/entrevista_utn.jpg',
        title: 'Entrevista en Vivo en Medios de Comunicación UTN',
        caption: 'Líderes de IEEE NTC Yachay Tech exponiendo los logros del capítulo y las oportunidades en nanotecnología.',
        position: 'center center'
      }
    ]
  }
];

// Flat export for backwards compatibility
export const GALLERY_DATA = GALLERY_ALBUMS.flatMap((album) =>
  album.slides.map((s, idx) => ({
    id: `${album.id}-${idx}`,
    title: s.title,
    category: album.category,
    image: s.image,
    caption: s.caption,
    date: album.date,
    position: s.position || album.coverPosition || 'center center'
  }))
);

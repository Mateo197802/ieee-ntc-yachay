export interface DirectiveMember {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  roleType: 'Chair' | 'Vice Chair' | 'Secretary' | 'Treasurer' | 'Webmaster' | 'Advisor';
  academicProgram: string;
  academicProgramEn: string;
  email: string;
  image: string;
  bio: string;
  bioEn: string;
  focusAreas: string[];
  focusAreasEn: string[];
  linkedin?: string;
  category: 'Junta Directiva' | 'Webmaster y Medios' | 'Faculty Advisor';
  categoryEn: 'Executive Board' | 'Webmaster & Media' | 'Faculty Advisor';
}

export const DIRECTIVE_DATA: DirectiveMember[] = [
  {
    id: 'solange-criollo',
    name: 'Shirley Solange Criollo Coello',
    role: 'Presidenta (Chair)',
    roleEn: 'Chair',
    roleType: 'Chair',
    academicProgram: 'Escuela de Ciencias Biológicas e Ingeniería — Nanobiotecnología',
    academicProgramEn: 'School of Biological Sciences & Engineering — Nanobiotechnology',
    email: 'shirley.criollo@yachaytech.edu.ec',
    image: '/assets/directive/solange_criollo.jpg',
    bio: 'Estudiante de Ciencias Biomédicas con enfoque en nanobiotecnología, nanomedicina y biomateriales para aplicaciones en salud. Como Presidenta fundadora, lideró la creación del Capítulo Estudiantil IEEE NTC Yachay Tech y promueve activamente la investigación científica de alto impacto, la vinculación comunitaria y el desarrollo de competencias experimentales en nanociencia.',
    bioEn: 'Biomedical Engineering student focused on nanobiotechnology, nanomedicine, and biomaterials for healthcare. As founding Chair, she led the creation of the IEEE NTC Yachay Tech Student Branch Chapter, promoting high-impact research, community outreach, and nanoscience experimental skills.',
    focusAreas: ['Nanobiotecnología', 'Nanomedicina', 'Biomateriales', 'Liderazgo Científico'],
    focusAreasEn: ['Nanobiotechnology', 'Nanomedicine', 'Biomaterials', 'Scientific Leadership'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Junta Directiva',
    categoryEn: 'Executive Board'
  },
  {
    id: 'mateo-gavilanes',
    name: 'Mateo Gavilanes',
    role: 'Vicepresidente',
    roleEn: 'Vice Chair',
    roleType: 'Vice Chair',
    academicProgram: 'Ingeniería Biomédica (8vo Semestre) — Yachay Tech University',
    academicProgramEn: 'Biomedical Engineering (8th Semester) — Yachay Tech University',
    email: 'isaac.gavilanes@yachaytech.edu.ec',
    image: '/assets/directive/mateo_gavilanes.jpg',
    bio: "Estudiante de 8vo semestre de Ingeniería Biomédica en Yachay Tech y colaborador en proyectos del MIT Critical Data, donde participa en la validación estadística de infraestructura de Inteligencia Artificial clínica. Es el creador de 'TITAN V4', una plataforma diagnóstica para operar Edge AI en dispositivos de bajos recursos, y desarrollador principal del framework de automatización 'PRISMA-AT'. Además de desempeñarse como Ayudante de Cátedra en tres ocasiones (Fisiología Humana, Bioquímica y Biología), su visión es descentralizar la tecnología de élite para impulsar la equidad médica global desde Ecuador.",
    bioEn: "8th-semester Biomedical Engineering student at Yachay Tech and collaborator on MIT Critical Data projects, contributing to statistical validation of clinical Artificial Intelligence infrastructure. He is the creator of 'TITAN V4', a diagnostic platform for Edge AI on low-resource hardware, and lead developer of the 'PRISMA-AT' automation framework. Having served as Teaching Assistant three times (Human Physiology, Biochemistry, and Biology), his vision is to decentralize elite technology to advance global medical equity from Ecuador.",
    focusAreas: ['Inteligencia Artificial Clínica', 'Edge AI & TITAN V4', 'Framework PRISMA-AT', 'MIT Critical Data Consortium'],
    focusAreasEn: ['Clinical Artificial Intelligence', 'Edge AI & TITAN V4', 'PRISMA-AT Framework', 'MIT Critical Data Consortium'],
    linkedin: 'https://www.linkedin.com/in/isaac-mateo-g-55aa7a318/?locale=es',
    category: 'Junta Directiva',
    categoryEn: 'Executive Board'
  },
  {
    id: 'ethan-guevara',
    name: 'Ethan Aaron Guevara López',
    role: 'Secretario (Secretary)',
    roleEn: 'Secretary',
    roleType: 'Secretary',
    academicProgram: 'Escuela de Ciencias Biológicas e Ingeniería — Biomedicina',
    academicProgramEn: 'School of Biological Sciences & Engineering — Biomedicine',
    email: 'ethan.guevara@yachaytech.edu.ec',
    image: '/assets/directive/ethan_guevara.jpg',
    bio: 'Estudiante de Biomedicina interesado en biología molecular, ingeniería de tejidos e instrumentación médica avanzada. Como Secretario, gestiona la documentación institucional, actas de asamblea, enlace administrativo con IEEE Ecuador Section y la logística de iniciativas humanitarias y científicas.',
    bioEn: 'Biomedicine student interested in molecular biology, tissue engineering, and advanced medical instrumentation. As Secretary, he manages institutional documentation, assembly minutes, administrative liaisons with IEEE Ecuador Section, and logistics for humanitarian and scientific initiatives.',
    focusAreas: ['Biología Molecular', 'Ingeniería de Tejidos', 'Logística Institucional', 'Bioseguridad'],
    focusAreasEn: ['Molecular Biology', 'Tissue Engineering', 'Institutional Logistics', 'Biosafety'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Junta Directiva',
    categoryEn: 'Executive Board'
  },
  {
    id: 'emily-perez',
    name: 'Emily Poleth Pérez Román',
    role: 'Tesorera (Treasurer)',
    roleEn: 'Treasurer',
    roleType: 'Treasurer',
    academicProgram: 'Escuela de Ciencias Físicas y Nanotecnología — Física Médica',
    academicProgramEn: 'School of Physical Sciences & Nanotechnology — Medical Physics',
    email: 'emily.perez@yachaytech.edu.ec',
    image: '/assets/directive/emily_perez.jpg',
    bio: 'Estudiante de Ingeniería Biomédica con especial interés en la física médica aplicada a entornos clínicos, radiobiología y nanomedicina. Como Tesorera, administra el presupuesto financiero del capítulo, los fondos de membresía y la gestión de recursos para eventos técnicos y subvenciones de viaje IEEE.',
    bioEn: 'Biomedical Engineering student specializing in medical physics, radiobiology, and nanomedicine. As Treasurer, she oversees the chapter financial budget, membership funds, and resource allocation for technical events and IEEE travel grants.',
    focusAreas: ['Física Médica', 'Gestión Financiera', 'Nanomedicina', 'Administración de Subvenciones'],
    focusAreasEn: ['Medical Physics', 'Financial Management', 'Nanomedicine', 'Grant Administration'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Junta Directiva',
    categoryEn: 'Executive Board'
  },
  {
    id: 'fernanda-landazuri',
    name: 'Melanie Fernanda Landázuri Quiñonez',
    role: 'Webmaster & Comunicación Científica',
    roleEn: 'Webmaster & Scientific Communication',
    roleType: 'Webmaster',
    academicProgram: 'Escuela de Ciencias de la Tierra — Geociencias y Nanomateriales',
    academicProgramEn: 'School of Earth Sciences — Geosciences & Nanomaterials',
    email: 'melanie.landazuri@yachaytech.edu.ec',
    image: '/assets/directive/fernanda_landazuri.jpg',
    bio: 'Estudiante de Geología con enfoque multidisciplinario en física cuántica, sostenibilidad en nanotecnología y divulgación científica. Como Webmaster, lidera las plataformas de difusión digital, diseño de identidad visual y estrategias de comunicación pública del capítulo.',
    bioEn: 'Geology student with a multidisciplinary focus on quantum physics, nanotechnology sustainability, and science communication. As Webmaster, she leads digital media platforms, visual identity design, and public dissemination strategies.',
    focusAreas: ['Divulgación Científica', 'Diseño de Medios', 'Sostenibilidad', 'Geomateriales'],
    focusAreasEn: ['Science Outreach', 'Media Design', 'Sustainability', 'Geomaterials'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Webmaster y Medios',
    categoryEn: 'Webmaster & Media'
  },
  {
    id: 'kennedy-rodriguez',
    name: 'Yehudah Kennedy Rodríguez Morán',
    role: 'Webmaster & Tecnología',
    roleEn: 'Webmaster & Technology',
    roleType: 'Webmaster',
    academicProgram: 'Escuela de Ciencias Físicas y Nanotecnología — Hardware y Robótica',
    academicProgramEn: 'School of Physical Sciences & Nanotechnology — Hardware & Robotics',
    email: 'yehudah.rodriguez@yachaytech.edu.ec',
    image: '/assets/directive/kennedy_rodriguez.jpg',
    bio: 'Estudiante de Ingeniería Biomédica centrado en la convergencia de hardware médico, microcontroladores e Inteligencia Artificial. Como Webmaster, apoya el mantenimiento de la infraestructura web, desarrollo de software interno y la coordinación técnica de talleres educativos.',
    bioEn: 'Biomedical Engineering student focused on medical hardware, microcontrollers, and Artificial Intelligence. As Webmaster, he supports web infrastructure maintenance, internal software development, and technical workshop coordination.',
    focusAreas: ['Infraestructura Web', 'Hardware Biomédico', 'Educación STEM', 'Robótica'],
    focusAreasEn: ['Web Infrastructure', 'Biomedical Hardware', 'STEM Education', 'Robotics'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Webmaster y Medios',
    categoryEn: 'Webmaster & Media'
  }
];

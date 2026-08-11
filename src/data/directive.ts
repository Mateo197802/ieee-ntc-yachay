export interface DirectiveMember {
  id: string;
  name: string;
  role: string;
  roleType: 'Chair' | 'Vice Chair' | 'Secretary' | 'Treasurer' | 'Webmaster' | 'Advisor';
  academicProgram: string;
  email: string;
  image: string;
  bio: string;
  focusAreas: string[];
  linkedin?: string;
  category: 'Junta Directiva' | 'Webmaster y Medios' | 'Faculty Advisor';
}

export const DIRECTIVE_DATA: DirectiveMember[] = [
  {
    id: 'solange-criollo',
    name: 'Shirley Solange Criollo Coello',
    role: 'Presidenta (Chair)',
    roleType: 'Chair',
    academicProgram: 'Escuela de Ciencias Biológicas e Ingeniería — Nanobiotecnología',
    email: 'shirley.criollo@yachaytech.edu.ec',
    image: '/assets/directive/solange_criollo.jpg',
    bio: 'Estudiante de Ciencias Biomédicas con enfoque en nanobiotecnología, nanomedicina y biomateriales para aplicaciones en salud. Como Presidenta fundadora, lideró la creación del Capítulo Estudiantil IEEE NTC Yachay Tech y promueve activamente la investigación científica de alto impacto, la vinculación comunitaria y el desarrollo de competencias experimentales en nanociencia.',
    focusAreas: ['Nanobiotecnología', 'Nanomedicina', 'Biomateriales', 'Liderazgo Científico'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Junta Directiva'
  },
  {
    id: 'mateo-gavilanes',
    name: 'Mateo Gavilanes',
    role: 'Vicepresidente',
    roleType: 'Vice Chair',
    academicProgram: 'Ingeniería Biomédica (8vo Semestre) — Yachay Tech University',
    email: 'isaac.gavilanes@yachaytech.edu.ec',
    image: '/assets/directive/mateo_gavilanes.jpg',
    bio: "Estudiante de 8vo semestre de Ingeniería Biomédica en Yachay Tech y colaborador en proyectos del MIT Critical Data, donde participa en la validación estadística de infraestructura de Inteligencia Artificial clínica. Es el creador de 'TITAN V4', una plataforma diagnóstica para operar Edge AI en dispositivos de bajos recursos, y desarrollador principal del framework de automatización 'PRISMA-AT'. Además de desempeñarse como Ayudante de Cátedra en tres ocasiones (Fisiología Humana, Bioquímica y Biología), su visión es descentralizar la tecnología de élite para impulsar la equidad médica global desde Ecuador.",
    focusAreas: ['Inteligencia Artificial Clínica', 'Edge AI & TITAN V4', 'Framework PRISMA-AT', 'MIT Critical Data Consortium'],
    linkedin: 'https://www.linkedin.com/in/isaac-mateo-g-55aa7a318/?locale=es',
    category: 'Junta Directiva'
  },
  {
    id: 'ethan-guevara',
    name: 'Ethan Aaron Guevara López',
    role: 'Secretario (Secretary)',
    roleType: 'Secretary',
    academicProgram: 'Escuela de Ciencias Biológicas e Ingeniería — Biomedicina',
    email: 'ethan.guevara@yachaytech.edu.ec',
    image: '/assets/directive/ethan_guevara.jpg',
    bio: 'Estudiante de Biomedicina interesado en biología molecular, ingeniería de tejidos e instrumentación médica avanzada. Como Secretario, gestiona la documentación institucional, actas de asamblea, enlace administrativo con IEEE Ecuador Section y la logística de iniciativas humanitarias y científicas.',
    focusAreas: ['Biología Molecular', 'Ingeniería de Tejidos', 'Logística Institucional', 'Bioseguridad'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Junta Directiva'
  },
  {
    id: 'emily-perez',
    name: 'Emily Poleth Pérez Román',
    role: 'Tesorera (Treasurer)',
    roleType: 'Treasurer',
    academicProgram: 'Escuela de Ciencias Físicas y Nanotecnología — Física Médica',
    email: 'emily.perez@yachaytech.edu.ec',
    image: '/assets/directive/emily_perez.jpg',
    bio: 'Estudiante de Ingeniería Biomédica con especial interés en la física médica aplicada a entornos clínicos, radiobiología y nanomedicina. Como Tesorera, administra el presupuesto financiero del capítulo, los fondos de membresía y la gestión de recursos para eventos técnicos y subvenciones de viaje IEEE.',
    focusAreas: ['Física Médica', 'Gestión Financiera', 'Nanomedicina', 'Administración de Subvenciones'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Junta Directiva'
  },
  {
    id: 'fernanda-landazuri',
    name: 'Melanie Fernanda Landázuri Quiñonez',
    role: 'Webmaster & Comunicación Científica',
    roleType: 'Webmaster',
    academicProgram: 'Escuela de Ciencias de la Tierra — Geociencias y Nanomateriales',
    email: 'melanie.landazuri@yachaytech.edu.ec',
    image: '/assets/directive/fernanda_landazuri.jpg',
    bio: 'Estudiante de Geología con enfoque multidisciplinario en física cuántica, sostenibilidad en nanotecnología y divulgación científica. Como Webmaster, lidera las plataformas de difusión digital, diseño de identidad visual y estrategias de comunicación pública del capítulo.',
    focusAreas: ['Divulgación Científica', 'Diseño de Medios', 'Sostenibilidad', 'Geomateriales'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Webmaster y Medios'
  },
  {
    id: 'kennedy-rodriguez',
    name: 'Yehudah Kennedy Rodríguez Morán',
    role: 'Webmaster & Tecnología',
    roleType: 'Webmaster',
    academicProgram: 'Escuela de Ciencias Físicas y Nanotecnología — Hardware y Robótica',
    email: 'yehudah.rodriguez@yachaytech.edu.ec',
    image: '/assets/directive/kennedy_rodriguez.jpg',
    bio: 'Estudiante de Ingeniería Biomédica centrado en la convergencia de hardware médico, microcontroladores e Inteligencia Artificial. Como Webmaster, apoya el mantenimiento de la infraestructura web, desarrollo de software interno y la coordinación técnica de talleres educativos.',
    focusAreas: ['Infraestructura Web', 'Hardware Biomédico', 'Educación STEM', 'Robótica'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Webmaster y Medios'
  }
];

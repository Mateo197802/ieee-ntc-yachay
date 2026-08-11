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
    name: 'Isaac Mateo Gavilanes Chávez',
    role: 'Vicepresidente (Vice Chair)',
    roleType: 'Vice Chair',
    academicProgram: 'Escuela de Ciencias Físicas y Nanotecnología — Computación Científica',
    email: 'isaac.gavilanes@yachaytech.edu.ec',
    image: '/assets/directive/mateo_gavilanes.jpg',
    bio: 'Isaac Mateo Gavilanes Chávez es estudiante de Ingeniería Biomédica en Yachay Tech University, desempeñándose en la intersección de la ciencia de datos clínicos, la arquitectura de sistemas y el desarrollo de Inteligencia Artificial médica. Actualmente opera como Clinical Data Scientist y Systems Architect para el MIT Critical Data Global Consortium, donde lidera la validación estadística y la infraestructura de datos para investigaciones de impacto global.\n\nDentro del MIT, Mateo ha liderado la validación de modelos de Machine Learning (Random Forest) para evaluar la viabilidad de imágenes por resonancia magnética (MRI) de bajo campo en países en vías de desarrollo (LMICs). Además, es el arquitecto principal de "PRISMA-AT" y el "Scientometric Analysis Tool", pipelines automatizados (ETL) que integran modelos de lenguaje de gran escala (LLMs) y orquestación de APIs para auditar sesgos geográficos y erradicar alucinaciones generativas en la minería de literatura clínica. Su dominio estadístico también ha sido clave en el análisis de trayectorias de startups (YC Combinator) utilizando modelos WLS y Cox Survival bajo entornos de alto rendimiento.\n\nEn el sector MedTech, Mateo desarrolla infraestructura crítica. Es el creador de "TITAN V5", una plataforma diagnóstica de ECG diseñada con arquitectura "Dual-Brain" (Redes Neuronales PyTorch + Motores Determinísticos) para operar sin conexión a internet en hospitales de bajos recursos. Paralelamente, ejerce como Lead Clinical Data Architect en "Cuerpo Maestro", un ensayo clínico interinstitucional financiado ($12.4k) en Ecuador, donde diseña la ingesta de datos biométricos y la inferencia estadística avanzada para la investigación del síndrome metabólico.\n\nMás allá del código y los datos, Mateo ejerce un liderazgo activo como Vicepresidente (Vice Chair) del IEEE Nanotechnology Council Yachay Tech. En este rol, ha fusionado la educación con la tecnología de vanguardia mediante el desarrollo de "MuseumMaster", un framework de realidad virtual inmersiva programado en C#/Unity para la simulación de laboratorios de nanotecnología.\n\nSu mayor motivación es descentralizar el desarrollo de la tecnología de élite. Mateo busca demostrar que la infraestructura backend, la inferencia causal y la inteligencia artificial clínica (Edge AI) de las investigaciones más importantes del mundo pueden ser lideradas desde Ecuador, impulsando la equidad médica global y siendo un motivo de profundo orgullo para su familia y su país.',
    focusAreas: ['Inteligencia Artificial Médica', 'Edge AI & Sistemas Embebidos', 'Pipelines PRISMA-AT', 'Realidad Virtual en C#/Unity'],
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

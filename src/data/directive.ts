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
  category: 'Executive Board' | 'Webmaster & Media' | 'Faculty Advisor';
}

export const DIRECTIVE_DATA: DirectiveMember[] = [
  {
    id: 'solange-criollo',
    name: 'Shirley Solange Criollo Coello',
    role: 'Chair',
    roleType: 'Chair',
    academicProgram: 'School of Biological Sciences & Engineering — Nanobiotechnology',
    email: 'shirley.criollo@yachaytech.edu.ec',
    image: '/assets/directive/solange_criollo.jpg',
    bio: 'Biomedical Engineering student focused on nanobiotechnology, nanomedicine, and biomaterials for healthcare applications. As founding Chair, she led the creation of the IEEE NTC Yachay Tech Student Branch Chapter, promoting high-impact research, community outreach, and nanoscience experimental skills.',
    focusAreas: ['Nanobiotechnology', 'Nanomedicine', 'Biomaterials', 'Scientific Leadership'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Executive Board'
  },
  {
    id: 'mateo-gavilanes',
    name: 'Mateo Gavilanes',
    role: 'Vice Chair',
    roleType: 'Vice Chair',
    academicProgram: 'Biomedical Engineering (8th Semester) — Yachay Tech University',
    email: 'isaac.gavilanes@yachaytech.edu.ec',
    image: '/assets/directive/mateo_gavilanes.jpg',
    bio: "8th-semester Biomedical Engineering student at Yachay Tech and collaborator on MIT Critical Data projects, contributing to statistical validation of clinical Artificial Intelligence infrastructure. He is the creator of 'TITAN V4', a diagnostic platform for Edge AI on low-resource hardware, and lead developer of the 'PRISMA-AT' automation framework. Having served as Teaching Assistant three times (Human Physiology, Biochemistry, and Biology), his vision is to decentralize elite technology to advance global medical equity from Ecuador.",
    focusAreas: ['Clinical Artificial Intelligence', 'Edge AI & TITAN V4', 'PRISMA-AT Framework', 'MIT Critical Data Consortium'],
    linkedin: 'https://www.linkedin.com/in/isaac-mateo-g-55aa7a318/?locale=es',
    category: 'Executive Board'
  },
  {
    id: 'ethan-guevara',
    name: 'Ethan Aaron Guevara López',
    role: 'Secretary',
    roleType: 'Secretary',
    academicProgram: 'School of Biological Sciences & Engineering — Biomedicine',
    email: 'ethan.guevara@yachaytech.edu.ec',
    image: '/assets/directive/ethan_guevara.jpg',
    bio: 'Biomedicine student interested in molecular biology, tissue engineering, and advanced medical instrumentation. As Secretary, he manages institutional documentation, assembly minutes, administrative liaisons with IEEE Ecuador Section, and logistics for humanitarian and scientific initiatives.',
    focusAreas: ['Molecular Biology', 'Tissue Engineering', 'Institutional Logistics', 'Biosafety'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Executive Board'
  },
  {
    id: 'emily-perez',
    name: 'Emily Poleth Pérez Román',
    role: 'Treasurer',
    roleType: 'Treasurer',
    academicProgram: 'School of Physical Sciences & Nanotechnology — Medical Physics',
    email: 'emily.perez@yachaytech.edu.ec',
    image: '/assets/directive/emily_perez.jpg',
    bio: 'Biomedical Engineering student specializing in medical physics applied to clinical settings, radiobiology, and nanomedicine. As Treasurer, she oversees the chapter financial budget, membership funds, and resource allocation for technical events and IEEE travel grants.',
    focusAreas: ['Medical Physics', 'Financial Management', 'Nanomedicine', 'Grant Administration'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Executive Board'
  },
  {
    id: 'fernanda-landazuri',
    name: 'Melanie Fernanda Landázuri Quiñonez',
    role: 'Webmaster & Scientific Communication',
    roleType: 'Webmaster',
    academicProgram: 'School of Earth Sciences — Geosciences & Nanomaterials',
    email: 'melanie.landazuri@yachaytech.edu.ec',
    image: '/assets/directive/fernanda_landazuri.jpg',
    bio: 'Geology student with a multidisciplinary focus on quantum physics, nanotechnology sustainability, and science communication. As Webmaster, she leads digital media platforms, visual identity design, and public dissemination strategies for the chapter.',
    focusAreas: ['Science Outreach', 'Media Design', 'Sustainability', 'Geomaterials'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Webmaster & Media'
  },
  {
    id: 'kennedy-rodriguez',
    name: 'Yehudah Kennedy Rodríguez Morán',
    role: 'Webmaster & Technology',
    roleType: 'Webmaster',
    academicProgram: 'School of Physical Sciences & Nanotechnology — Hardware & Robotics',
    email: 'yehudah.rodriguez@yachaytech.edu.ec',
    image: '/assets/directive/kennedy_rodriguez.jpg',
    bio: 'Biomedical Engineering student focused on the convergence of medical hardware, microcontrollers, and Artificial Intelligence. As Webmaster, he supports web infrastructure maintenance, internal software development, and technical workshop coordination.',
    focusAreas: ['Web Infrastructure', 'Biomedical Hardware', 'STEM Education', 'Robotics'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Webmaster & Media'
  }
];

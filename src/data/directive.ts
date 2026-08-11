export interface DirectiveMember {
  slug: string;
  name: string;
  displayName: string;
  role: string;
  order: number;
  summary: string;
  biography: string[];
  interests: string[];
  image: string | null;
  imageAlt: string;
  linkedin: string;
  email?: string;
  term?: string;
}

export const DIRECTIVE_MEMBERS: DirectiveMember[] = [
  {
    slug: 'solange-criollo',
    name: 'Solange Criollo',
    displayName: 'Solange Criollo',
    role: 'Chair',
    order: 1,
    summary: 'Biomedical Science student focused on nanobiotechnology, nanomedicine, and biomaterials for healthcare applications. As founding Chair, she led the creation of IEEE NTC Yachay Tech and promotes research, scientific outreach, student development, and nanotechnology initiatives across the university and IEEE Region 9.',
    biography: [
      'Solange is a Biomedical Science student at Yachay Tech University with interests in nanobiotechnology, nanomedicine, and biomaterials for healthcare applications. Her research experience includes antimicrobial hydrogels and the green synthesis of nanoparticles.',
      'She began her IEEE journey in 2024 through WIE Yachay Tech, where she later served as Treasurer and contributed to leadership and scientific outreach activities. In 2025, she served as Vice President of the IEEE Yachay Tech Student Branch, organizing academic, integration, and science communication initiatives.',
      'She currently serves as founding Chair of IEEE NTC Yachay Tech, whose creation she led as the first Nanotechnology Council chapter in Ecuador. She also contributes to the IEEE Region 9 SAC Awards and Recognition Subcommittee.'
    ],
    interests: ['Nanobiotechnology', 'Nanomedicine', 'Biomaterials', 'Antimicrobial Hydrogels', 'Scientific Outreach'],
    image: '/assets/directive/solange_criollo.jpg',
    imageAlt: 'Solange Criollo - IEEE NTC Yachay Tech Chair',
    linkedin: 'https://www.linkedin.com/in/solange-criollo-321b73163/',
    term: '2026 - Present'
  },
  {
    slug: 'isaac-mateo-gavilanes',
    name: 'Isaac Mateo Gavilanes Chávez',
    displayName: 'Mateo Gavilanes',
    role: 'Vice Chair',
    order: 2,
    summary: 'Biomedical Engineering student working at the intersection of clinical data science, systems architecture, and medical Artificial Intelligence. As Vice Chair, he supports the chapter’s technical strategy through projects in PRISMA automation, scientometrics, Edge AI, biomedical systems, and immersive nanotechnology education.',
    biography: [
      'Isaac Mateo Gavilanes Chávez is a Biomedical Engineering student at Yachay Tech University working at the intersection of clinical data science, systems architecture, and medical Artificial Intelligence.',
      'His work includes statistical validation, scientific data infrastructure, automated PRISMA and scientometric pipelines, mission-critical ECG systems, Edge AI, deterministic clinical reasoning, and biomedical data architectures.',
      'As Vice Chair of IEEE NTC Yachay Tech, he contributes to the technical and strategic development of the chapter. He has also developed MuseumMaster, a C#/Unity framework for immersive virtual-reality simulations of nanotechnology laboratories.',
      'His professional objective is to decentralize the development of advanced clinical and scientific technologies and demonstrate that high-level AI, backend infrastructure, and biomedical innovation can be led from Ecuador.'
    ],
    interests: ['Clinical AI', 'PRISMA Automation', 'Edge AI', 'Biomedical Systems Architecture', 'Virtual Reality Nanosimulation'],
    image: '/assets/directive/mateo_gavilanes.jpg',
    imageAlt: 'Isaac Mateo Gavilanes Chávez - IEEE NTC Yachay Tech Vice Chair',
    linkedin: 'https://www.linkedin.com/in/isaac-mateo-g-55aa7a318/?locale=es',
    term: '2026 - Present'
  },
  {
    slug: 'ethan-guevara',
    name: 'Ethan Aaron Guevara López',
    displayName: 'Ethan Guevara',
    role: 'Secretary',
    order: 3,
    summary: 'Biomedicine student interested in molecular biology, tissue engineering, and advanced medical instrumentation. As Secretary, he supports institutional documentation, chapter governance, meeting coordination, and organizational continuity while contributing to biomedical Edge AI research.',
    biography: [
      'Ethan Aaron Guevara López is a Biomedicine student at Yachay Tech University with interests in molecular biology, tissue engineering, and advanced medical instrumentation.',
      'He contributes to the development of a mission-critical ECG platform, focusing on Edge AI architectures that integrate neural networks with Bayesian Deep Learning to quantify diagnostic uncertainty and support offline clinical operation.',
      'His technical work is complemented by social and innovation initiatives, including GelGrowth, a biotechnological project based on biocompatible hydrogels. He is a founding member and Secretary of IEEE NTC Yachay Tech and has also served as a Teaching Assistant in Human Physiology.'
    ],
    interests: ['Molecular Biology', 'Tissue Engineering', 'Medical Instrumentation', 'Biocompatible Hydrogels', 'Edge AI'],
    image: '/assets/directive/ethan_guevara.jpg',
    imageAlt: 'Ethan Aaron Guevara López - IEEE NTC Yachay Tech Secretary',
    linkedin: 'https://www.linkedin.com/in/ethan-guevara-40b232346/',
    term: '2026 - Present'
  },
  {
    slug: 'emily-perez',
    name: 'Emily Pérez',
    displayName: 'Emily Pérez',
    role: 'Treasurer',
    order: 4,
    summary: 'Biomedical Engineering student interested in the application of physics to medicine, clinical environments, and nanomedicine. As Treasurer, she contributes to resource management, financial planning, and the sustainable execution of chapter activities.',
    biography: [
      'Emily Pérez is a Biomedical Engineering student at Yachay Tech University with a focused interest in the application of physics to medicine and clinical environments.',
      'She serves as Treasurer of both IEEE NTC Yachay Tech and the Yachay Tech Biomedicine Club, contributing to resource management and the financial sustainability of academic and community activities.',
      'Her research interests include the green synthesis of silver nanoparticles using plant extracts for potential antimicrobial applications in diabetic wounds, as well as biomarker-based academic research on hypothyroidism.',
      'Her academic profile is characterized by analytical thinking, proactivity, and a commitment to nanomedicine and community development.'
    ],
    interests: ['Medical Physics', 'Green Synthesis', 'Nanomedicine', 'Antimicrobial Nanoparticles', 'Financial Planning'],
    image: '/assets/directive/emily_perez.jpg',
    imageAlt: 'Emily Pérez - IEEE NTC Yachay Tech Treasurer',
    linkedin: 'https://www.linkedin.com/in/emily-poleth-a2148828a/',
    term: '2026 - Present'
  },
  {
    slug: 'fernanda-landazuri',
    name: 'Fernanda Landázuri',
    displayName: 'Fernanda Landázuri',
    role: 'Webmaster',
    order: 5,
    summary: 'Geology student with a multidisciplinary focus on quantum physics, nanotechnology, sustainability, and scientific communication. As Webmaster, she supports the chapter’s digital presence, visual communication, public engagement, and connection with broader academic communities.',
    biography: [
      'Fernanda Landázuri is a Geology student at Yachay Tech University with a multidisciplinary research focus encompassing quantum physics and nanotechnology.',
      'As Webmaster of IEEE NTC Yachay Tech, she connects scientific work developed at the university with global academic communities through digital communication and public engagement.',
      'Her experience includes public relations, commercialization, marketing, visual communication, and creative industries. She also leads Cacao Viva, a circular-economy initiative dedicated to transforming cacao waste into nutritious, high-value products.',
      'Her profile combines scientific communication, sustainability, entrepreneurship, and strategic outreach.'
    ],
    interests: ['Quantum Physics', 'Nanotechnology', 'Scientific Communication', 'Sustainability', 'Digital Outreach'],
    image: '/assets/directive/fernanda_landazuri.jpg',
    imageAlt: 'Fernanda Landázuri - IEEE NTC Yachay Tech Webmaster',
    linkedin: 'https://www.linkedin.com/in/melanie-fernanda-landazuri-qui%C3%B1onez-3ba71b305/',
    term: '2026 - Present'
  },
  {
    slug: 'kennedy-rodriguez',
    name: 'Kennedy Rodríguez',
    displayName: 'Kennedy Rodríguez',
    role: 'Webmaster',
    order: 6,
    summary: 'Biomedical Engineering student focused on the convergence of medical hardware and Artificial Intelligence. As Webmaster, he supports the chapter’s digital infrastructure and communication while developing interests in advanced electronics and Machine Learning for automated clinical diagnosis.',
    biography: [
      'Kennedy Rodríguez is a Biomedical Engineering student at Yachay Tech University whose work focuses on the convergence of medical hardware and Artificial Intelligence.',
      'His principal interests include advanced electronic systems and Machine Learning models for the precise and automated diagnosis of clinical anomalies.',
      'He approaches engineering as a technological translator, transforming complex biomedical datasets into tangible hardware and software solutions with direct potential impact on healthcare.',
      'As Webmaster of IEEE NTC Yachay Tech, he contributes to the chapter’s digital infrastructure, technical communication, and online presence.'
    ],
    interests: ['Medical Hardware', 'Artificial Intelligence', 'Advanced Electronics', 'Clinical ML Diagnosis', 'Digital Infrastructure'],
    image: '/assets/directive/kennedy_rodriguez.jpg',
    imageAlt: 'Kennedy Rodríguez - IEEE NTC Yachay Tech Webmaster',
    linkedin: 'https://www.linkedin.com/in/yehudhah-kennedy-rodriguez-moran-27910b3b6/',
    term: '2026 - Present'
  }
];

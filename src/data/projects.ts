export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Research' | 'Outreach' | 'Innovation' | 'Service';
  status: 'Active' | 'Completed' | 'Under Review';
  summary: string;
  description: string;
  technologies: string[];
  team: string[];
  image: string;
  outcomes?: string;
  link?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'logic-lock',
    slug: 'logic-lock',
    title: 'Logic Lock — PRISMA Review Automation Tool',
    category: 'Research',
    status: 'Active',
    summary: 'A research workflow automation tool designed to support and organize PRISMA-based systematic reviews.',
    description: 'A research workflow automation tool designed to support and organize PRISMA-based systematic reviews, reducing repetitive manual work and improving process traceability and reproducibility.',
    technologies: ['Python', 'PRISMA Framework', 'Workflow Automation', 'Scientometrics'],
    team: ['Mateo (Lead)', 'Chapter Research Group'],
    image: '/assets/images/flyer_2.png',
    outcomes: 'Automated screening tool supporting systematic literature reviews.'
  },
  {
    id: 'lanano-paper-training-initiative',
    slug: 'lanano-paper-training-initiative',
    title: 'LANANO Scientific Research & Mentorship Track',
    category: 'Research',
    status: 'Active',
    summary: 'Mentorship pipeline preparing student research teams for international IEEE LANANO conference submissions.',
    description: 'A structured multi-week mentorship framework matching undergraduate researchers with faculty mentors across research axes including Nanoelectronics, Quantum Technology, Nanomedicine, and Machine Learning in Nanoscience.',
    technologies: ['Green Synthesis', 'Machine Learning', 'Molecular Dynamics', 'UV-Vis Spectrophotometry'],
    team: ['Solange (Lead)', 'Mateo', 'Ethan', 'Faculty Advisors'],
    image: '/assets/images/ieee_temscon_awards.jpg',
    outcomes: 'Draft proposals submitted for peer review across 4 research tracks.'
  },
  {
    id: 'stem-outreach-schools',
    slug: 'stem-outreach-schools',
    title: 'NanoSchool STEM Outreach Program',
    category: 'Outreach',
    status: 'Active',
    summary: 'High school outreach bringing interactive nanotechnology demonstrations to regional public schools in Imbabura.',
    description: 'Hands-on educational modules designed to spark curiosity for nanoscience, material science, and engineering careers among high school students through interactive experiments.',
    technologies: ['Interactive Demos', 'Hydrophobic Materials', 'Ferrofluids', 'STEM Kits'],
    team: ['Kennedy (Lead)', 'Fernanda', 'Ethan'],
    image: '/assets/images/visita_escuela.jpg',
    outcomes: 'Over 150 high school students reached in Ibarra and surrounding communities.'
  },
  {
    id: 'hospital-paediatric-service',
    slug: 'hospital-paediatric-service',
    title: 'Hospital San Vicente de Paúl Pediatric Science Initiative',
    category: 'Service',
    status: 'Completed',
    summary: 'Community service project delivering educational science workshops to hospitalized children in pediatric care.',
    description: 'Collaborative initiative with biomedical engineering student clubs providing cheerful, therapeutic science activities and custom educational kits to hospitalized children.',
    technologies: ['Community Service', 'Educational Kits', 'Hospital Classroom'],
    team: ['Ethan (Lead)', 'Chapter Volunteers'],
    image: '/assets/images/hospital_san_vicente.jpg',
    outcomes: 'Successfully conducted workshop for 25 pediatric patients.'
  },
  {
    id: 'vr-nano-museum',
    slug: 'vr-nano-museum',
    title: 'Virtual Reality Nanotechnology Educational Museum',
    category: 'Innovation',
    status: 'Active',
    summary: 'Immersive VR simulation platform allowing interactive exploration of molecular structures and nanoscale phenomena.',
    description: 'Interactive Virtual Reality environment built in Unreal Engine allowing users to manipulate carbon nanotubes, graphene sheets, and bio-nanoparticles in 3D space.',
    technologies: ['Unreal Engine', 'VR Headsets', '3D Nanomaterial Modeling'],
    team: ['Mateo (Lead)', 'Ethan', 'VR Development Group'],
    image: '/assets/images/campus_stairs_group.jpg',
    outcomes: 'Functional VR prototype deployed for chapter workshops and campus exhibitions.'
  }
];

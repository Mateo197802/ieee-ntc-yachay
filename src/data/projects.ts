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
    image: '/assets/events/logic_lock_post.png',
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
    image: '/assets/events/lanano_paper_training.png',
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
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    outcomes: 'Over 150 high school students reached in Ibarra and surrounding communities.'
  },
  {
    id: 'hospital-paediatric-service',
    slug: 'hospital-paediatric-service',
    title: "Immersive Children's Day: Technology and Smiles",
    category: 'Service',
    status: 'Completed',
    summary: 'Humanitarian VR intervention bringing simulated nanotechnology laboratories and therapeutic relief to pediatric patients in hospital ICU.',
    description: 'A clinical and technological outreach initiative designed to alleviate acute stress, procedural pain, and hospitalization anxiety for 25 pediatric patients at Hospital San Vicente de Paúl. Employing four Meta Quest 3 VR headsets with custom biosafety sanitization and one-on-one ergonomic assistance, the project enabled bedridden children to explore simulated nanotechnology laboratories, marine environments, and deep space.',
    technologies: ['Meta Quest 3 VR', 'Clinical Biosafety Protocols', 'Humanitarian Engineering', 'Attention-Modulation VR'],
    team: ['Solange (Lead)', 'Emily', 'Kennedy', 'Mateo', 'Ethan', 'Fernanda', 'Biomedical Engineering Club'],
    image: '/assets/events/dia_del_nino_hospital.jpg',
    outcomes: 'Delivered safe, highly engaging VR immersion to 25 hospitalized children, establishing a replicable humanitarian blueprint for IEEE units.'
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
    image: '/assets/gallery/foto_con_bandera.jpg',
    outcomes: 'Functional VR prototype deployed for chapter workshops and campus exhibitions.'
  }
];

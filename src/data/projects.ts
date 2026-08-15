export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Research' | 'Outreach' | 'Innovation' | 'Service';
  status: 'Active' | 'Completed' | 'Planning';
  summary: string;
  description: string;
  technologies: string[];
  team: string[];
  image: string;
  paperUrl?: string;
  codeUrl?: string;
  outcomes?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'logic-lock',
    slug: 'logic-lock',
    title: 'Logic Lock: AI-Automated PRISMA Pipeline',
    category: 'Research',
    status: 'Active',
    summary: 'AI software tool to accelerate, filter, and reproduce systematic scientific literature reviews.',
    description: 'Automated AI framework designed to optimize the PRISMA systematic review protocol. Integrates LLM orchestration, algorithmic deduplication, and scientometric analysis to eliminate hallucinations in clinical and nanotechnology literature mining.',
    technologies: ['Python', 'Large Language Models', 'API Orchestration', 'PRISMA Protocol', 'Scientometrics'],
    team: ['Mateo Gavilanes (Technical Lead)', 'Ethan Guevara'],
    image: '/assets/events/logic_lock_post.png',
    outcomes: 'Functional pipeline in pilot phase for research incubators and systematic reviews.'
  },
  {
    id: 'lanano-paper-training-initiative',
    slug: 'lanano-paper-training-initiative',
    title: 'Scientific Paper Writing Incubator IEEE LANANO 2026',
    category: 'Research',
    status: 'Active',
    summary: 'Technical mentorship program for drafting 4–6 page research papers for publication in IEEE Xplore.',
    description: 'Collaborative scientific writing initiative connecting students with experienced researchers. Participants master experimental design, data analysis, IEEE LaTeX formatting, and scientific paper structuring.',
    technologies: ['LaTeX', 'IEEE Xplore Templates', 'Zotero', 'Statistical Analysis'],
    team: ['Solange Criollo (Coordinator)', 'Mateo Gavilanes', 'Ethan Guevara'],
    image: '/assets/events/lanano_paper_training.png',
    paperUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/',
    outcomes: 'Paper drafts submitted for peer review across 4 research tracks.'
  },
  {
    id: 'stem-outreach-schools',
    slug: 'stem-outreach-schools',
    title: 'STEM Outreach Program in High Schools',
    category: 'Outreach',
    status: 'Completed',
    summary: 'Scientific outreach program with hands-on nanotechnology modules in public high schools across Imbabura.',
    description: 'Experimental educational modules designed to spark scientific vocations in nanoscience, materials science, and engineering among high school students through interactive demonstrations.',
    technologies: ['Interactive Demos', 'Superhydrophobic Materials', 'Ferrofluids', 'STEM Kits'],
    team: ['Kennedy Rodríguez (Lead)', 'Fernanda Landázuri', 'Ethan Guevara'],
    image: '/assets/events/visita_victor_manuel_guzman.jpg',
    outcomes: 'Over 150 high school students reached in Ibarra and surrounding regions.'
  },
  {
    id: 'hospital-paediatric-service',
    slug: 'hospital-paediatric-service',
    title: "Immersive Children's Day: Technology & Smiles",
    category: 'Service',
    status: 'Completed',
    summary: 'Humanitarian intervention at San Vicente de Paúl Hospital using Meta Quest 3 VR headsets and biosafety protocols.',
    description: 'Humanitarian service project bringing educational virtual simulations and emotional support to 25 hospitalized pediatric and ICU patients at San Vicente de Paúl Hospital in Ibarra.',
    technologies: ['Meta Quest 3 VR', 'Biosafety Protocols', 'Medical Simulations', 'Humanitarian Volunteering'],
    team: ['Solange Criollo (Lead)', 'Mateo Gavilanes', 'Ethan Guevara', 'Emily Pérez', 'Fernanda Landázuri', 'Kennedy Rodríguez'],
    image: '/assets/events/dia_del_nino_hospital.jpg',
    outcomes: '25 pediatric patients benefited from adapted and safe immersive experiences.'
  },
  {
    id: 'vr-nano-museum',
    slug: 'vr-nano-museum',
    title: 'Virtual Nanotechnology Museum (MuseumMaster VR)',
    category: 'Innovation',
    status: 'Active',
    summary: 'Interactive Virtual Reality framework developed in C#/Unity for immersive visualization of molecular nanostructures.',
    description: 'Immersive 3D environment allowing users to interact with atomic-scale models of carbon nanotubes, fullerenes, and magnetic nanoparticles, revolutionizing nanotechnology education.',
    technologies: ['Unity 3D', 'C#', 'Meta XR SDK', 'Molecular Modeling', 'OpenXR'],
    team: ['Mateo Gavilanes (VR Architect)', 'Kennedy Rodríguez'],
    image: '/assets/gallery/actividad_colegio_1.jpg',
    outcomes: 'Interactive framework showcased in regional schools and expanding to science museums.'
  }
];

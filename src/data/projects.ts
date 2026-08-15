export interface Project {
  id: string;
  title: string;
  category: 'Research' | 'Outreach' | 'Innovation' | 'Service';
  status: 'Active' | 'Completed' | 'Planning';
  image: string;
  summary: string;
  description: string;
  technologies: string[];
  team: string[];
  outcomes?: string;
  what?: string;
  when?: string;
  who?: string;
  objective?: string;
  impact?: string;
  paperUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'vr-nano-museum',
    title: 'VR NanoLab: Immersive Virtual Reality Laboratory Environment',
    category: 'Innovation',
    status: 'Active',
    image: '/assets/events/dia_del_nino_hospital.jpg',
    summary: 'Flagship project taking science beyond the laboratory using Meta Quest 3 VR headsets for schools and pediatric hospitals.',
    description: 'Our flagship innovation project develops an interactive virtual reality laboratory environment. By simulating atomic lattice interactions, cleanroom physical vapor deposition, and molecular nano-structures, this tool allows our team to visit schools and hospitals, bringing immersive scientific experiences to communities without direct access to research laboratories.',
    technologies: ['Virtual Reality', 'Meta Quest 3', 'Unity / WebXR', 'Molecular Dynamics', 'Bio-interactive Design'],
    team: ['Mateo Gavilanes (Lead)', 'Chapter Innovation Team', 'Outreach Volunteers'],
    outcomes: 'Deployed in outreach visits to Víctor Manuel Guzmán High School (120+ students) and San Vicente de Paúl Hospital (25 pediatric patients).',
    what: 'Development of an immersive VR cleanroom and molecular exploration simulator for field outreach.',
    when: 'Active Development throughout 2026',
    who: 'Interdisciplinary engineering team, developers, and outreach volunteers.',
    objective: 'Democratize access to advanced scientific laboratories and inspire youth through experiential technology.',
    impact: 'Enabled hands-on nanoscale visualization for over 150 participants outside university cleanrooms.',
    paperUrl: 'https://ieee-lanano.org/edition-2026/welcome-to-ieee-lanano-2026/'
  },
  {
    id: 'logic-lock-research',
    title: 'Logic Lock: Automated Scientific Literature & Research Mapping Framework',
    category: 'Research',
    status: 'Active',
    image: '/assets/gallery/logic_lock_post.png',
    summary: 'A structured software framework designed to streamline academic paper discovery, literature categorization, and citation analysis.',
    description: 'Officially launched on March 12, 2026, Logic Lock is a specialized digital methodology that strengthens scientific research pipelines. It provides automated querying, metadata extraction, and thematic categorization across IEEE Xplore, PubMed, and arXiv, helping students find, organize, and analyze scientific papers with maximum efficiency.',
    technologies: ['Literature Automation', 'Data Mining', 'Python Frameworks', 'IEEE Xplore API', 'Research Analytics'],
    team: ['Executive Board', 'Chapter Research Incubator'],
    outcomes: 'Adopted across chapter research initiatives, standardizing literature review workflows for LANANO 2026 papers.',
    what: 'Digital literature mining platform and systematic review automation framework.',
    when: 'Launched March 12, 2026',
    who: 'Student research cohorts and executive team.',
    objective: 'Promote an agile, rigorous research culture leveraging digital tools for high-impact manuscript preparation.',
    impact: 'Accelerated literature review timelines by over 50% for student paper co-authors.'
  },
  {
    id: 'lanano-paper-pipeline',
    title: 'LANANO Paper Training: Scientific Mentorship & High-Impact Publication Pipeline',
    category: 'Research',
    status: 'Active',
    image: '/assets/events/lanano_paper_training.png',
    summary: 'Structured incubator training students in scientific paper authoring for international IEEE conferences.',
    description: 'A comprehensive academic initiative launched on June 24, 2026, to train undergraduate and graduate students in scientific writing, hypothesis validation, experimental data visualization, and manuscript submission under IEEE international conference standards.',
    technologies: ['Scientific Writing', 'LaTeX', 'Statistical Modeling', 'Material Characterization', 'Peer Review'],
    team: ['Emily Pérez (Coord.)', 'Senior Research Mentors', 'Student Authors'],
    outcomes: '3 scientific manuscripts currently drafted for submission to IEEE LANANO 2026 in Viña del Mar, Chile.',
    what: 'Structured scientific writing and mentorship incubator for IEEE conference papers.',
    when: 'Launched June 24, 2026',
    who: 'Student researchers and international faculty advisors.',
    objective: 'Bridge student research projects with international IEEE conference publication venues.',
    impact: 'Empowered undergraduate students to become primary authors in IEEE Xplore indexed proceedings.',
    paperUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/'
  }
];

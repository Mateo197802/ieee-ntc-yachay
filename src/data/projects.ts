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
    title: 'VR Nano Museum & Mini-Lab: Interactive Nanotechnology Experience for Youth',
    category: 'Innovation',
    status: 'Active',
    image: '/assets/events/dia_del_nino_hospital.jpg',
    summary: 'An interactive virtual reality educational environment developed by Mateo Gavilanes featuring a didactic museum of pioneer nanotechnology scientists and a child-friendly mini-lab simulation of green synthesis of silver nanoparticles.',
    description: 'An engaging and didactic Virtual Reality experience designed and developed by Mateo Gavilanes to bring nanotechnology closer to children, schools, and communities. The experience features an interactive virtual museum showcasing representative figures and pioneers of nanotechnology, alongside a friendly mini-lab where students and children playfully explore the green synthesis of silver nanoparticles in a simple, visual, and hands-on format.',
    technologies: ['Virtual Reality', 'Meta Quest 3', 'Interactive Museum', 'Green Synthesis of AgNPs', 'STEM Didactic Design'],
    team: ['Mateo Gavilanes (Environment Creator & Lead VR Developer)', 'Chapter Outreach Team', 'Youth Volunteers'],
    outcomes: 'Successfully deployed in community visits to Víctor Manuel Guzmán High School (120+ students) and San Vicente de Paúl Hospital pediatric ward (25 children).',
    what: 'Didactic VR museum honoring key nanotechnology scientists and a playful mini-lab for green synthesis of silver nanoparticles.',
    when: 'Active Outreach throughout 2026',
    who: 'Mateo Gavilanes (Environment Creator & Lead VR Developer), chapter outreach delegation, and student volunteers.',
    objective: 'Make nanotechnology fun, accessible, and inspiring for children and youth through an interactive museum and a simple green nanoparticle synthesis simulation.',
    impact: 'Brought joyful, experiential science to over 150 children, high school students, and hospitalized pediatric patients across the region.',
    paperUrl: 'https://ieee-lanano.org/edition-2026/welcome-to-ieee-lanano-2026/'
  },
  {
    id: 'logic-lock-research',
    title: 'Logic Lock: Automated Scientific Literature & Research Mapping Framework',
    category: 'Research',
    status: 'Active',
    image: '/assets/gallery/logic_lock_post.png',
    summary: 'A structured software framework and literature mining tool developed by Mateo Gavilanes to streamline academic paper discovery, categorization, and citation analysis.',
    description: 'Officially launched on March 12, 2026, Logic Lock is a specialized digital research tool developed by Mateo Gavilanes that strengthens scientific research pipelines. It provides automated querying, metadata extraction, and thematic categorization across IEEE Xplore, PubMed, and arXiv, helping students find, organize, and analyze scientific papers with maximum efficiency.',
    technologies: ['Literature Automation', 'Data Mining', 'Python Frameworks', 'IEEE Xplore API', 'Research Analytics'],
    team: ['Mateo Gavilanes (Lead Developer)', 'Executive Board', 'Chapter Research Incubator'],
    outcomes: 'Adopted across chapter research initiatives, standardizing literature review workflows for LANANO 2026 papers.',
    what: 'Digital literature mining platform and systematic review automation framework.',
    when: 'Launched March 12, 2026',
    who: 'Mateo Gavilanes (Lead Tool Developer), student research cohorts, and executive team.',
    objective: 'Promote an agile, rigorous research culture leveraging digital tools for high-impact manuscript preparation.',
    impact: 'Accelerated literature review timelines by over 50% for student paper co-authors.'
  },
  {
    id: 'lanano-paper-pipeline',
    title: 'LANANO Paper Training: Scientific Mentorship & High-Impact Publication Pipeline',
    category: 'Research',
    status: 'Active',
    image: '/assets/events/lanano_paper_training.png',
    summary: 'Structured academic incubator organized by Solange Criollo with an official web platform created by Mateo Gavilanes, training students in scientific paper authoring for international IEEE conferences.',
    description: 'A comprehensive academic initiative organized by Solange Criollo, featuring a dedicated training and publication web platform created and developed by Mateo Gavilanes. Launched on June 24, 2026, it trains undergraduate and graduate students in scientific writing, hypothesis validation, experimental data visualization, and manuscript submission under IEEE international conference standards.',
    technologies: ['Web Platform Dev', 'Scientific Writing', 'LaTeX', 'Statistical Modeling', 'Material Characterization', 'Peer Review'],
    team: ['Solange Criollo (Event Organizer & Chapter Chair)', 'Mateo Gavilanes (Web Portal Developer & Vice Chair)', 'Emily Pérez (Coord.)', 'Senior Research Mentors', 'Student Authors'],
    outcomes: '3 scientific manuscripts currently drafted for submission to IEEE LANANO 2026 in Viña del Mar, Chile.',
    what: 'Structured scientific writing and mentorship incubator for IEEE conference papers with dedicated digital platform.',
    when: 'Launched June 24, 2026',
    who: 'Solange Criollo (Event Organizer), Mateo Gavilanes (Web Platform Developer), student researchers, and international faculty advisors.',
    objective: 'Bridge student research projects with international IEEE conference publication venues.',
    impact: 'Empowered undergraduate students to become primary authors in IEEE Xplore indexed proceedings.',
    paperUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/'
  }
];

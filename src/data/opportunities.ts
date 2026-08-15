export interface Opportunity {
  id: string;
  title: string;
  category: 'Travel Grants' | 'Competitions' | 'Conferences' | 'Training' | 'Volunteer' | 'Leadership';
  type: string;
  location: string;
  deadline: string;
  dates?: string;
  targetAudience: string;
  institution: string;
  modality: 'In-Person' | 'Online' | 'Hybrid';
  status: 'Open' | 'Upcoming' | 'Continuous';
  description: string;
  benefits: string[];
  officialUrl: string;
}

export const OPPORTUNITIES_DATA: Opportunity[] = [
  // TRAVEL GRANTS / POLICIES
  {
    id: 'ntc-volunteer-travel-reimbursement',
    title: 'NTC Volunteer Travel Authorization & Reimbursement Policy',
    category: 'Travel Grants',
    type: 'Volunteer Expense Reimbursement Policy',
    location: 'Global (Depends on official NTC activity/assignment)',
    deadline: 'Continuous / Prior Approval Required',
    targetAudience: 'Official IEEE NTC Volunteers and Committee Representatives',
    institution: 'IEEE Nanotechnology Council',
    modality: 'In-Person',
    status: 'Continuous',
    description: 'The official IEEE NTC policy outlines guidelines for the reimbursement of reasonable, pre-approved travel expenses incurred in service of official council duties, governance meetings, and chapter initiatives. (Note: this is an official volunteer reimbursement framework rather than a general student travel scholarship).',
    benefits: [
      'Reimbursement of authorized travel, lodging, and meals',
      'Official authorization workflow for NTC delegation tasks',
      'Clear compliance framework for international council service'
    ],
    officialUrl: 'https://ieeenano.org/wp-content/uploads/2023/02/NTC-Travel-Reimbursement-Policy-Jan-2023.pdf'
  },

  // COMPETITIONS
  {
    id: 'nano-sdc-2026',
    title: 'NANO Student Design Competition (SDC) — IEEE-NANO 2026',
    category: 'Competitions',
    type: 'Student Nanotechnology Design Competition',
    location: 'Nanjing, China',
    deadline: 'May 15, 2026',
    dates: 'July 7, 2026',
    targetAudience: 'Full-time B.Sc., M.Sc., and Ph.D. students with an accepted paper/abstract at IEEE-NANO 2026',
    institution: 'IEEE-NANO 2026 Organizing Committee',
    modality: 'Hybrid',
    status: 'Open',
    description: 'Hands-on competition challenging teams of 1–4 students to solve complex engineering and nanoscale problems through innovative design prototypes, simulation models, and experimental validation presented during IEEE-NANO 2026.',
    benefits: [
      'Official winner certificates and international recognition during IEEE-NANO',
      'Potential invitation to publish winning projects in IEEE Nanotechnology Magazine',
      'Direct interaction with global nanotechnology leaders and industrial judges'
    ],
    officialUrl: 'https://2026.ieeenano.org/student-design-competition/'
  },

  // CONFERENCES
  {
    id: 'ieee-nano-2026',
    title: 'IEEE-NANO 2026: 26th IEEE International Conference on Nanotechnology',
    category: 'Conferences',
    type: 'NTC Flagship International Conference',
    location: 'Nanjing, China',
    deadline: 'April 15, 2026',
    dates: 'July 5–8, 2026',
    targetAudience: 'Researchers, graduate students, undergraduates, and industry specialists',
    institution: 'IEEE Nanotechnology Council',
    modality: 'Hybrid',
    status: 'Open',
    description: 'The premier annual flagship conference of the IEEE Nanotechnology Council covering fundamental nanoscience, advanced 2D materials, nanofabrication, nanobiosensors, and quantum devices. Features technical papers, special sessions, tutorials, networking, and the Student Design Competition.',
    benefits: [
      'Indexed proceedings publication in IEEE Xplore',
      'Oral and poster presentation opportunities for student authors',
      'Global networking with Distinguished Lecturers and pioneer researchers'
    ],
    officialUrl: 'https://2026.ieeenano.org/'
  },
  {
    id: 'ieee-nmdc-2026',
    title: 'IEEE-NMDC 2026: IEEE Nanotechnology Materials & Devices Conference',
    category: 'Conferences',
    type: 'NTC Flagship Materials & Devices Conference',
    location: 'Xanthi, Greece',
    deadline: 'May 30, 2026',
    dates: 'September 30 – October 3, 2026',
    targetAudience: 'Undergraduates, Ph.D. candidates, postdocs, and materials scientists',
    institution: 'IEEE Nanotechnology Council',
    modality: 'Hybrid',
    status: 'Open',
    description: 'Flagship conference focusing on cutting-edge nanoscale materials, spintronics, optoelectronics, and nanodevices. Authors can submit full papers or 1-page abstracts, with select presentations invited to special journal issues in IEEE T-NANO and IEEE OJ-NANO.',
    benefits: [
      'Full papers considered for IEEE Xplore indexing',
      'Direct fast-track pathways to IEEE Transactions on Nanotechnology (T-NANO)',
      'Special tracks for emerging nano-materials and international collaborations'
    ],
    officialUrl: 'https://ieeenano.org/event/ieee-nmdc-2026/'
  },
  {
    id: 'ieee-lanano-2026',
    title: 'IEEE LANANO 2026: Latin American Conference on Nanotechnology',
    category: 'Conferences',
    type: 'Regional Flagship Latin America Conference',
    location: 'Viña del Mar, Chile',
    deadline: 'July 15, 2026',
    dates: 'November 3–6, 2026',
    targetAudience: 'Latin American students, young researchers, faculty members, and IEEE chapters',
    institution: 'IEEE Region 9 & IEEE Nanotechnology Council',
    modality: 'In-Person',
    status: 'Open',
    description: 'The major Latin American conference bridging regional nanoscience research with international expertise. Features 4–6 page technical paper submissions, student paper competitions, and strategic IEEE student branch roundtables.',
    benefits: [
      'Published proceedings in IEEE Xplore',
      'Specialized mentorship pipelines via IEEE NTC Yachay Tech training program',
      'Regional student networking across IEEE Region 9'
    ],
    officialUrl: 'https://ieee-lanano.org/edition-2026/welcome-to-ieee-lanano-2026/'
  },
  {
    id: 'ieee-nanomed-2026',
    title: 'IEEE NANOMED 2026: 20th IEEE International Conference on Nano/Molecular Medicine & Engineering',
    category: 'Conferences',
    type: 'International Biomedical Nanotechnology Conference',
    location: 'Ho Chi Minh City, Vietnam',
    deadline: 'August 1, 2026',
    dates: 'November 29 – December 2, 2026',
    targetAudience: 'Biomedical engineers, nanomedicine researchers, clinicians, and students',
    institution: 'IEEE Nanotechnology Council',
    modality: 'In-Person',
    status: 'Upcoming',
    description: 'Specialized international forum spotlighting frontier breakthroughs in targeted drug delivery, nanorobotics, point-of-care biosensors, tissue engineering, and bio-nanomaterials.',
    benefits: [
      'IEEE Xplore indexed publication',
      'Clinical translation and biomedical innovation workshops',
      'International collaboration across Asia-Pacific and Latin America'
    ],
    officialUrl: 'https://ieeenano.org/event/ieee-nanomed-2026/'
  },
  {
    id: '3m-nano-2026',
    title: '3M-NANO 2026: International Conference on Manipulation, Manufacturing & Measurement on the Nanoscale',
    category: 'Conferences',
    type: 'Advanced Nanomanufacturing Conference',
    location: 'Suzhou, China',
    deadline: 'April 30, 2026',
    dates: 'July 27–31, 2026',
    targetAudience: 'Nanotechnology, mechanical, and materials engineering researchers',
    institution: 'IEEE NTC Co-Sponsored',
    modality: 'In-Person',
    status: 'Upcoming',
    description: 'High-level conference emphasizing high-precision nanomanipulation, nanoscale metrology, scanning probe microscopy techniques, and additive nanomanufacturing processes.',
    benefits: [
      'Technical paper proceedings published with IEEE indexing',
      'Hands-on demonstrations of nanomanufacturing hardware',
      'Industrial research partnerships and showcase exhibits'
    ],
    officialUrl: 'https://ieeenano.org/event/3m-nano-2026/'
  },
  {
    id: 'marss-2026',
    title: 'MARSS 2026: International Conference on Manipulation, Automation and Robotics at Small Scales',
    category: 'Conferences',
    type: 'Technical Co-Sponsored Activity',
    location: 'Hangzhou, China',
    deadline: 'April 20, 2026',
    dates: 'July 27–31, 2026',
    targetAudience: 'Robotics engineers, micro/nano researchers, and automation specialists',
    institution: 'IEEE Robotics & Automation Society / IEEE NTC',
    modality: 'In-Person',
    status: 'Upcoming',
    description: 'Specialized interdisciplinary conference centered on micro/nano manipulation, small-scale robotics, microfluidic handling, and biomedical micro-actuation technologies.',
    benefits: [
      'Proceedings archived in IEEE Xplore',
      'Cross-disciplinary exchange between robotics and nanotechnology communities',
      'Showcase of microrobotic control algorithms and microassembly systems'
    ],
    officialUrl: 'https://ieeenano.org/event/marss-2026/'
  },
  {
    id: 'ieee-nems-2026',
    title: 'IEEE-NEMS 2026: 21st IEEE International Conference on Nano/Micro Engineered and Molecular Systems',
    category: 'Conferences',
    type: 'MEMS & NEMS International Conference',
    location: 'Chengdu, China',
    deadline: 'February 15, 2026',
    dates: 'April 17–21, 2026',
    targetAudience: 'MEMS/NEMS researchers, sensor designers, and physics students',
    institution: 'IEEE Nanotechnology Council',
    modality: 'In-Person',
    status: 'Upcoming',
    description: 'A flagship forum covering micro/nano engineered systems, molecular sensors, microfluidic devices, energy harvesters, and flexible nanoelectronics.',
    benefits: [
      'IEEE Xplore indexed technical contributions',
      'Early-career plenary forums and international student competitions',
      'Academic exchange with pioneer Asian and European research institutes'
    ],
    officialUrl: 'https://ieeenano.org/event/ieee-nems-2026/'
  },
  {
    id: 'ieee-nap-2026',
    title: 'IEEE-NAP 2026: Nanomaterials: Applications & Properties',
    category: 'Conferences',
    type: 'Materials Physics & Engineering Conference',
    location: 'Budva, Montenegro',
    deadline: 'June 1, 2026',
    dates: 'September 6–11, 2026',
    targetAudience: 'Chemists, physicists, and nanomaterials engineers worldwide',
    institution: 'IEEE Magnetics Society & IEEE NTC',
    modality: 'In-Person',
    status: 'Upcoming',
    description: 'Renowned European meeting focusing on synthesis, physical characterization, magnetic nanocomposites, coatings, and theoretical modeling of nanomaterials.',
    benefits: [
      'Comprehensive scopus and IEEE Xplore proceedings indexing',
      'Poster and young scientist award sessions',
      'Interdisciplinary networking on green synthesis and energy storage'
    ],
    officialUrl: 'https://ieeenano.org/events/'
  },
  {
    id: 'ntc-associated-conferences',
    title: 'IEEE NTC Global Conference Portfolio & Associated Symposia',
    category: 'Conferences',
    type: 'Full International Directory',
    location: 'Worldwide',
    deadline: 'Varies by conference',
    targetAudience: 'All IEEE members, researchers, and student authors',
    institution: 'IEEE Nanotechnology Council',
    modality: 'Hybrid',
    status: 'Continuous',
    description: 'Explore the complete directory of conferences, symposia, and workshops financially or technically sponsored by the IEEE Nanotechnology Council across all IEEE regions.',
    benefits: [
      'Access to over 15 annual specialized international conferences',
      'Direct paper submission portals and call-for-papers alerts',
      'Opportunities for student paper awards and travel sponsorships'
    ],
    officialUrl: 'https://ieeenano.org/conferences/'
  },

  // TRAINING & EDUCATION
  {
    id: 'ntc-seasonal-schools',
    title: 'NTC Seasonal Schools in Nanotechnology',
    category: 'Training',
    type: 'Advanced Intensive Academic School',
    location: 'Various host institutions globally',
    deadline: 'Varies by session (Summer / Winter editions)',
    targetAudience: 'Advanced undergraduates, graduate students (M.Sc./Ph.D.), postdocs, and junior faculty',
    institution: 'IEEE NTC Educational Activities Committee',
    modality: 'Hybrid',
    status: 'Open',
    description: 'Intensive short courses led by renowned global experts focusing on cutting-edge nanoscience topics, state-of-the-art laboratory protocols, theoretical frameworks, and interdisciplinary collaboration.',
    benefits: [
      'In-depth technical training from internationally renowned lecturers',
      'Official IEEE certificates of completion',
      'Subsidized participation fees and student grants for IEEE members'
    ],
    officialUrl: 'https://ieeenano.org/educational-activities/seasonal-school/'
  },
  {
    id: 'ntc-webinars',
    title: 'IEEE NTC Global Technical Webinar Series',
    category: 'Training',
    type: 'Open Access Virtual Seminar Series',
    location: 'Online / Global Virtual Access',
    deadline: 'Continuous / Open Registration per Event',
    targetAudience: 'Students, researchers, educators, and industry practitioners worldwide',
    institution: 'IEEE Nanotechnology Council',
    modality: 'Online',
    status: 'Continuous',
    description: 'Free, high-impact virtual lectures showcasing breakthroughs in nanotechnology, 2D materials, quantum technologies, and nanomedicine presented by distinguished academics, industry visionaries, and government scientists.',
    benefits: [
      '100% free access to state-of-the-art scientific seminars',
      'Live Q&A with pioneer researchers from leading institutions',
      'On-demand access to technical recordings repository'
    ],
    officialUrl: 'https://ieeenano.org/educational-activities/webinars/'
  },
  {
    id: 'distinguished-lecturers-program',
    title: 'IEEE NTC Distinguished Lecturers Program (DLP)',
    category: 'Training',
    type: 'Distinguished Chapter Lecture Program',
    location: 'Yachay Tech University & Online Virtual Host',
    deadline: 'Available Year-Round upon Chapter Request',
    targetAudience: 'IEEE Student Branches, NTC Chapters, and Academic Communities',
    institution: 'IEEE NTC Educational Activities Committee',
    modality: 'Hybrid',
    status: 'Continuous',
    description: 'Allows student chapters like IEEE NTC Yachay Tech to directly request funded technical lectures from globally recognized Distinguished Lecturers (DLs) in specialized nanotechnology disciplines.',
    benefits: [
      'Direct access to world-class keynote speakers for university events',
      'Financial support from IEEE NTC for official chapter DL visits',
      'High-impact academic prestige and networking for our student members'
    ],
    officialUrl: 'https://ieeenano.org/educational-activities/distinguished-lecturers/'
  },
  {
    id: 'nominate-distinguished-lecturer',
    title: 'Nominate an IEEE NTC Distinguished Lecturer',
    category: 'Training',
    type: 'Annual Academic Honors & Nomination Process',
    location: 'Online nomination system',
    deadline: 'October 1 annually',
    targetAudience: 'IEEE Members, Faculty Advisors, and Senior Researchers',
    institution: 'IEEE NTC VP Educational Activities',
    modality: 'Online',
    status: 'Upcoming',
    description: 'Official annual call allowing IEEE members to nominate leading scientists and educators with exceptional contributions to nanotechnology to serve on the prestigious IEEE NTC Distinguished Lecturer roster.',
    benefits: [
      'Recognition of outstanding scientific leadership and pedagogical excellence',
      'International lecture tour opportunities funded by IEEE NTC',
      'Global dissemination of cutting-edge research paradigms'
    ],
    officialUrl: 'https://ieeenano.org/educational-activities/nominate-a-lecturer/'
  },
  {
    id: 'trynano-org',
    title: 'TryNano.org: Educational Resources & STEM Learning Platform',
    category: 'Training',
    type: 'Open Educational Platform',
    location: 'Online',
    deadline: 'Continuous / Open Access',
    targetAudience: 'Pre-university educators, high school students, undergraduates, and outreach volunteers',
    institution: 'IEEE Nanotechnology Council & IEEE Pre-University Education',
    modality: 'Online',
    status: 'Continuous',
    description: 'An expansive open repository of classroom lesson plans, interactive simulations, career profiles, and industrial application modules designed to make nanotechnology accessible and inspiring for youth.',
    benefits: [
      'Free modular resources for chapter high school outreach workshops',
      'Curated multimedia guides on nanotechnology careers and ethics',
      'Global directory of university nano programs and student opportunities'
    ],
    officialUrl: 'https://ieeenano.org/educational-activities/trynano-org/'
  },

  // VOLUNTEER
  {
    id: 'volunteer-ieee-nano',
    title: 'Volunteer with IEEE Nanotechnology Council',
    category: 'Volunteer',
    type: 'Global Council Volunteering',
    location: 'Global / Virtual Collaboration',
    deadline: 'Continuous / Open to All',
    targetAudience: 'Undergraduate and graduate students, researchers, and passionate professionals',
    institution: 'IEEE Nanotechnology Council',
    modality: 'Online',
    status: 'Continuous',
    description: 'Participation in IEEE NTC initiatives is free and open to all. Volunteers contribute to conference organizing committees, educational content creation, digital outreach, webinars, and regional growth.',
    benefits: [
      'Official IEEE volunteer service recognition and leadership certificates',
      'Direct networking with council executive officers and committee chairs',
      'Direct contribution to the advancement of international nanoscience'
    ],
    officialUrl: 'https://ieeenano.org/'
  },
  {
    id: 'summer-internship-volunteer',
    title: 'NTC Volunteer Summer Internship Program',
    category: 'Volunteer',
    type: 'Mentored Educational Internship',
    location: 'Virtual / Remote Program',
    deadline: 'May 1, 2026',
    targetAudience: 'High school and early undergraduate students interested in nanoscience',
    institution: 'IEEE Nanotechnology Council',
    modality: 'Online',
    status: 'Upcoming',
    description: 'Hands-on virtual internship pairing students with expert researchers to work on molecular modeling, simulation, comprehensive scientific literature reviews, and technical communication.',
    benefits: [
      '1-on-1 mentorship with experienced researchers and university educators',
      'Development of competitive scientific writing and computational skills',
      'Formal certificate of completion endorsed by IEEE NTC'
    ],
    officialUrl: 'https://ieeenano.org/2023/ieee-ntc-volunteer-summer-internship-program/'
  },
  {
    id: 'win-regional-coordinator',
    title: 'Regional Coordinator: Women in Nanotechnology (WIN)',
    category: 'Volunteer',
    type: 'Regional Leadership Volunteering',
    location: 'Latin America (IEEE Region 9) & Virtual',
    deadline: 'Continuous Open Call',
    targetAudience: 'Students and early-career professionals passionate about gender equity in STEM',
    institution: 'IEEE NTC Women in Nanotechnology (WIN)',
    modality: 'Online',
    status: 'Open',
    description: 'Lead regional initiatives, collaborate with local IEEE Sections and Student Branches, organize professional development panels, and champion female leadership in nanotechnology.',
    benefits: [
      'High-profile leadership credential recognized globally across IEEE',
      'Direct participation in WIN global committee strategy sessions',
      'Empowerment of female scientists and engineers across Latin America'
    ],
    officialUrl: 'https://ieeenano.org/2024/join-the-ntc-win-team-as-a-regional-coordinator'
  },

  // LEADERSHIP
  {
    id: 'leadership-student-chapters',
    title: 'Leadership & Growth through NTC Student Chapters',
    category: 'Leadership',
    type: 'Student Chapter Leadership Development',
    location: 'Yachay Tech University & Global Network',
    deadline: 'Continuous / Annual Executive Board Elections',
    targetAudience: 'Active student branch chapter members and student leaders',
    institution: 'IEEE NTC Chapters Committee',
    modality: 'Hybrid',
    status: 'Continuous',
    description: 'Student chapters provide real-world executive management experience through technical seminar coordination, competition teams, regional outreach campaigns, and financial administration.',
    benefits: [
      'Executive leadership credentials on official IEEE rosters',
      'Exclusive chapter officer training summits and resource toolkits',
      'Direct pathways to IEEE regional and global committee appointments'
    ],
    officialUrl: 'https://ieeenano.org/chapters/student-chapters/'
  },
  {
    id: 'form-a-chapter',
    title: 'Form an IEEE NTC Student or Professional Chapter',
    category: 'Leadership',
    type: 'New Chapter Founding Program (with Start-up Funding)',
    location: 'Global / University Level',
    deadline: 'Continuous Application Process',
    targetAudience: 'University student groups (petition backed by 12 IEEE members from NTC-affiliated societies)',
    institution: 'IEEE NTC Chapters Committee',
    modality: 'Hybrid',
    status: 'Continuous',
    description: 'Detailed roadmap for founding a new NTC Chapter or Student Branch Chapter. The council provides dedicated chapter start-up funding to help new chapters launch introductory workshops and outreach initiatives.',
    benefits: [
      'Eligible for official IEEE NTC chapter start-up grant funding',
      'Assistance and mentorship from the global NTC Chapters Chair',
      'Inclusion in the official global directory of IEEE Nanotechnology Chapters'
    ],
    officialUrl: 'https://ieeenano.org/chapters/form-a-chapter/'
  },
  {
    id: 'ntc-technical-committees',
    title: 'Join IEEE NTC Technical & Standing Committees',
    category: 'Leadership',
    type: 'International Technical Governance & Standards',
    location: 'Online / Global Committee Meetings',
    deadline: 'Continuous / Annual Committee Rostering',
    targetAudience: 'Graduate students, Ph.D. candidates, faculty, and industry researchers',
    institution: 'IEEE Nanotechnology Council',
    modality: 'Online',
    status: 'Continuous',
    description: 'Contribute directly to council governance and technology roadmaps across Technical Activities, Nanotechnology Standards, Industrial Advisory, Publications, Conferences, and Education committees.',
    benefits: [
      'Influence international IEEE nanotechnology standards and roadmaps',
      'Collaborate with world-renowned scientists and committee chairs',
      'Elevated visibility and leadership standing in the international community'
    ],
    officialUrl: 'https://ieeenano.org/committees/'
  },
  {
    id: 'young-professionals-committee',
    title: 'IEEE NTC Young Professionals (YP) Committee',
    category: 'Leadership',
    type: 'Early-Career Leadership & Networking',
    location: 'Global / Hybrid Activities at NTC Conferences',
    deadline: 'Continuous Call for Regional Representatives',
    targetAudience: 'Recent graduates (within 15 years of first degree) and young researchers',
    institution: 'IEEE NTC Young Professionals',
    modality: 'Hybrid',
    status: 'Continuous',
    description: 'Connects early-career engineers and scientists through targeted networking sessions at flagship conferences, career webinars, mentorship roundtables, and regional leadership appointments.',
    benefits: [
      'Dedicated YP networking receptions at IEEE-NANO, NMDC, and LANANO',
      'Leadership training and representation on the NTC Executive Committee',
      'Career advancement mentorship from senior academic and industrial fellows'
    ],
    officialUrl: 'https://ieeenano.org/committees/young-professionals/'
  },
  {
    id: 'women-in-nanotechnology-committee',
    title: 'IEEE NTC Women in Nanotechnology (WIN) Committee',
    category: 'Leadership',
    type: 'Diversity, Equity & Technical Advancement',
    location: 'Global / Virtual and In-Person at Major Conferences',
    deadline: 'Continuous Open Participation',
    targetAudience: 'Female researchers, educators, students, and allies across the nanotechnology ecosystem',
    institution: 'IEEE Nanotechnology Council',
    modality: 'Hybrid',
    status: 'Continuous',
    description: 'Dedicated committee advancing women in nanoscience through distinguished speaker panels, travel awards, career mentorship sessions, and regional chapter coordination.',
    benefits: [
      'Participation in WIN symposiums at major IEEE conferences',
      'Mentorship network connecting undergraduate women with top researchers',
      'Leadership positions in international science advocacy'
    ],
    officialUrl: 'https://ieeenano.org/committees/women-in-nanotechnology/'
  }
];

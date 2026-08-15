export interface OpportunityItem {
  id: string;
  title: string;
  institution: string;
  category: 'Scholarships' | 'Travel Grants' | 'Volunteering' | 'IEEE Programs' | 'Competitions';
  deadline: string;
  status: 'Open' | 'Upcoming' | 'Closed';
  modality: 'Online' | 'In-Person' | 'Global' | 'Hybrid';
  summary: string;
  description: string;
  officialUrl: string;
}

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    id: 'ntc-chapter-activity-grant-2026',
    title: 'IEEE NTC Chapter Activity Grant 2026',
    institution: 'IEEE Nanotechnology Council Global',
    category: 'Travel Grants',
    deadline: 'August 30, 2026',
    status: 'Open',
    modality: 'Global',
    summary: 'Financial grants for active IEEE NTC student branches to fund technical workshops, outreach, and conference travel.',
    description: 'IEEE NTC provides grants up to $1,000 USD to active student chapters to fund technical workshops, community outreach initiatives, and student travel to flagship IEEE conferences.',
    officialUrl: 'https://ieeenano.org/grants-and-awards/'
  },
  {
    id: 'lanano-student-travel-award',
    title: 'IEEE LANANO 2026 Student Travel Award',
    institution: 'IEEE Region 9 & NTC LATAM',
    category: 'Travel Grants',
    deadline: 'September 15, 2026',
    status: 'Upcoming',
    modality: 'In-Person',
    summary: 'Travel grants for student primary authors presenting scientific papers at the Latin American Nanotechnology Conference.',
    description: 'Competitive grants covering registration and travel costs for students with accepted scientific papers at IEEE LANANO 2026.',
    officialUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/'
  },
  {
    id: 'ieee-ntc-distinguished-lecturers',
    title: 'IEEE NTC Distinguished Lecturers Program',
    institution: 'IEEE Nanotechnology Council Educational Activities',
    category: 'IEEE Programs',
    deadline: 'Rolling Basis',
    status: 'Open',
    modality: 'Hybrid',
    summary: 'Funding to host keynote lectures with world-renowned experts in advanced nanomedicine, nanoelectronics, and quantum materials.',
    description: 'Student branch chapters can request sponsorship to invite world-renowned scientists for virtual or in-person distinguished lectures.',
    officialUrl: 'https://ieeenano.org/educational-activities/distinguished-lecturers/'
  },
  {
    id: 'chapter-volunteer-recruitment',
    title: 'IEEE NTC Committee Volunteering Call',
    institution: 'IEEE NTC Yachay Tech',
    category: 'Volunteering',
    deadline: 'September 01, 2026',
    status: 'Open',
    modality: 'In-Person',
    summary: 'Join our operational committees in research mentorship, social media, event logistics, STEM outreach, and digital design.',
    description: 'Develop leadership skills, earn official IEEE certificates, and expand your network by collaborating as committee coordinator or event staff.',
    officialUrl: 'https://forms.gle/demo-volunteer'
  }
];

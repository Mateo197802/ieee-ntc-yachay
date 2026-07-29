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
    title: 'IEEE NTC Student Chapter Activity Grant 2026',
    institution: 'IEEE Nanotechnology Council Global',
    category: 'Travel Grants',
    deadline: 'August 30, 2026',
    status: 'Open',
    modality: 'Global',
    summary: 'Financial sponsorship for outstanding IEEE NTC student chapter activities, research projects, and conference participation.',
    description: 'IEEE NTC provides grants up to $1,000 USD to active student branch chapters to support technical workshops, outreach programs, and student travel to IEEE NTC flagship conferences.',
    officialUrl: 'https://ieeenano.org/grants-and-awards/'
  },
  {
    id: 'lanano-student-travel-award',
    title: 'IEEE LANANO Conference Student Travel Award',
    institution: 'IEEE Region 9 & NTC LATAM',
    category: 'Travel Grants',
    deadline: 'September 15, 2026',
    status: 'Upcoming',
    modality: 'In-Person',
    summary: 'Travel grants for primary student authors presenting research papers at the IEEE Latin American Conference on Nanotechnology.',
    description: 'Competitive travel awards covering registration fees and accommodation for students with accepted research papers at LANANO 2026.',
    officialUrl: 'https://ieee-lanano.org/'
  },
  {
    id: 'ieee-ntc-distinguished-lecturers',
    title: 'IEEE NTC Distinguished Lecturer Series Grants',
    institution: 'IEEE Nanotechnology Council Educational Activities',
    category: 'IEEE Programs',
    deadline: 'Rolling Basis',
    status: 'Open',
    modality: 'Hybrid',
    summary: 'Sponsorship for hosting international expert lectures on advanced nanomedicine, nanoelectronics, and quantum materials.',
    description: 'Student chapters can request support to invite world-renowned nanotechnology experts to deliver virtual or in-person seminars.',
    officialUrl: 'https://ieeenano.org/educational-activities/distinguished-lecturers/'
  },
  {
    id: 'chapter-volunteer-recruitment',
    title: 'IEEE NTC Chapter Executive Committee Volunteering',
    institution: 'IEEE NTC Yachay Tech',
    category: 'Volunteering',
    deadline: 'September 01, 2026',
    status: 'Open',
    modality: 'In-Person',
    summary: 'Join our active operational committees in research mentoring, social media, event logistics, and graphics design.',
    description: 'Gain leadership skills, IEEE certificates, and networking opportunities by volunteering as committee coordinator or event staff.',
    officialUrl: 'https://forms.gle/demo-volunteer'
  }
];

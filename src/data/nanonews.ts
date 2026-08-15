export interface NanoNewsIssue {
  id: string;
  issueNumber: number;
  title: string;
  subtitle: string;
  date: string;
  coverImage: string;
  totalPages: number;
  pages: string[];
  summary: string;
  topics: string[];
}

export const NANONEWS_ISSUES: NanoNewsIssue[] = [
  {
    id: 'nanonews-issue-1',
    issueNumber: 1,
    title: 'NanoNews #1: How to Join IEEE & IEEE NTC',
    subtitle: 'Comprehensive Student Onboarding & Membership Guide',
    date: '2026',
    coverImage: '/assets/nanonews/issue-1/1.png',
    totalPages: 6,
    pages: [
      '/assets/nanonews/issue-1/1.png',
      '/assets/nanonews/issue-1/2.png',
      '/assets/nanonews/issue-1/3.png',
      '/assets/nanonews/issue-1/4.png',
      '/assets/nanonews/issue-1/5.png',
      '/assets/nanonews/issue-1/6.png'
    ],
    summary: 'Essential visual guide explaining student member discounts, council society affiliations, travel grant eligibilities, and step-by-step IEEE registration procedures.',
    topics: ['Membership Guide', 'IEEE Discounts', 'NTC Affiliation', 'Student Onboarding']
  },
  {
    id: 'nanonews-issue-2',
    issueNumber: 2,
    title: 'NanoNews #2: IEEE NANO Paper Training',
    subtitle: 'Scientific Mentorship & High-Impact Publication Pipeline',
    date: '2026',
    coverImage: '/assets/nanonews/issue-2/1.png',
    totalPages: 5,
    pages: [
      '/assets/nanonews/issue-2/1.png',
      '/assets/nanonews/issue-2/2.png',
      '/assets/nanonews/issue-2/3.png',
      '/assets/nanonews/issue-2/4.png',
      '/assets/nanonews/issue-2/5.png'
    ],
    summary: 'Official roadmap and technical guidelines for the LANANO 2026 research incubator, manuscript drafting protocols, and peer-reviewed IEEE Xplore submission pipeline.',
    topics: ['Scientific Writing', 'LANANO 2026', 'IEEE Xplore', 'Research Mentorship']
  }
];

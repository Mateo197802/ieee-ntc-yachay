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
  },
  {
    id: 'nanonews-issue-3',
    issueNumber: 3,
    title: 'NanoNews #3: Nanotechnology in Summer & UV Protection',
    subtitle: 'Zinc Oxide (ZnO) & Titanium Dioxide (TiO2) Nanoparticles, UV Shielding & Green Synthesis',
    date: '2026',
    coverImage: '/assets/nanonews/issue-3/1.png',
    totalPages: 6,
    pages: [
      '/assets/nanonews/issue-3/1.png',
      '/assets/nanonews/issue-3/2.png',
      '/assets/nanonews/issue-3/3.png',
      '/assets/nanonews/issue-3/4.png',
      '/assets/nanonews/issue-3/5.png',
      '/assets/nanonews/issue-3/6.png'
    ],
    summary: 'Exploring how metal oxide nanoparticles revolutionized transparent sunscreens and UV skin protection, alongside green synthesis methods utilizing orange peel extracts and zein proteins to synthesize eco-friendly ZnO and CuO nanostructures.',
    topics: ['ZnO & TiO2 Nanoparticles', 'UV Sun Protection', 'Green Synthesis', 'Skin Care Nanotech']
  },
  {
    id: 'nanonews-issue-4',
    issueNumber: 4,
    title: 'NanoNews #4: The Trojan Horse Concept in Nanomedicine',
    subtitle: 'Targeted Drug Delivery, Immune Camouflage & Liposomal Nanocarriers',
    date: '2026',
    coverImage: '/assets/nanonews/issue-4/1.jpg',
    totalPages: 5,
    pages: [
      '/assets/nanonews/issue-4/1.jpg',
      '/assets/nanonews/issue-4/2.jpg',
      '/assets/nanonews/issue-4/3.jpg',
      '/assets/nanonews/issue-4/4.jpg',
      '/assets/nanonews/issue-4/5.jpg'
    ],
    summary: 'Explaining the "Trojan Horse" biomimetic paradigm in nanomedicine, where liposomes, polymeric micelles, and surface-engineered nanocarriers bypass immune system clearance to deliver targeted therapeutic drugs directly into pathological cells.',
    topics: ['Nanomedicine', 'Targeted Drug Delivery', 'Liposomes & Micelles', 'Immune Evasion']
  },
  {
    id: 'nanonews-issue-5',
    issueNumber: 5,
    title: 'NanoNews #5: How is the Invisible Built?',
    subtitle: 'Top-Down vs. Bottom-Up Nanofabrication Approaches',
    date: '2026',
    coverImage: '/assets/nanonews/issue-5/1.jpg',
    totalPages: 5,
    pages: [
      '/assets/nanonews/issue-5/1.jpg',
      '/assets/nanonews/issue-5/2.jpg',
      '/assets/nanonews/issue-5/3.jpg',
      '/assets/nanonews/issue-5/4.jpg',
      '/assets/nanonews/issue-5/5.jpg'
    ],
    summary: 'An engaging breakdown of how matter is engineered 100,000 times smaller than a human hair, contrasting Top-Down nanofabrication (laser ablation, lithography, mechanical milling) with Bottom-Up chemical self-assembly and atomic synthesis.',
    topics: ['Nanofabrication', 'Top-Down Approach', 'Bottom-Up Assembly', 'Atomic Engineering']
  },
  {
    id: 'nanonews-issue-6',
    issueNumber: 6,
    title: 'NanoNews #6: What are Nanoparticles?',
    subtitle: 'Fundamental Physics, Quantum Effects & Emerging Trends (1–100 nm)',
    date: '2026',
    coverImage: '/assets/nanonews/issue-6/1.jpg',
    totalPages: 3,
    pages: [
      '/assets/nanonews/issue-6/1.jpg',
      '/assets/nanonews/issue-6/2.jpg',
      '/assets/nanonews/issue-6/3.jpg'
    ],
    summary: 'A foundational visual guide to nanoparticles (matter fragments between 1–100 nanometers) and their quantum size effects—exploring how surface-to-volume ratio transforms electrical conductivity, mechanical strength, optical absorption, and cellular drug delivery.',
    topics: ['Nanoparticle Fundamentals', 'Quantum Size Effects', 'Nano-Sensors', 'Cellular Nanovectors']
  }
];

export interface DirectiveMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  linkedin?: string;
  photo: string;
  term: string;
  category: 'Executive Board' | 'Coordinators' | 'Advisors';
}

export const DIRECTIVE_MEMBERS: DirectiveMember[] = [
  {
    id: 'chair',
    name: 'Mateo (Chair)',
    role: 'Student Branch Chapter Chair',
    bio: 'Leading the IEEE Nanotechnology Council Student Branch Chapter at Yachay Tech University, driving nanotechnology initiatives, research collaboration, and student development.',
    email: 'mateo.ntc@yachaytech.edu.ec',
    linkedin: 'https://linkedin.com/in/mateo-ntc-yachay',
    photo: '/assets/images/campus_stairs_group.jpg',
    term: '2025 - 2026',
    category: 'Executive Board'
  },
  {
    id: 'vice-chair',
    name: 'Solange (Vice-Chair)',
    role: 'Vice-Chair & Academic Lead',
    bio: 'Coordinating academic workshops, LANANO conference mentorship programs, and strategic academic partnerships across Region 9.',
    email: 'solange.ntc@yachaytech.edu.ec',
    linkedin: 'https://linkedin.com/in/solange-ntc-yachay',
    photo: '/assets/images/ieee_temscon_awards.jpg',
    term: '2025 - 2026',
    category: 'Executive Board'
  },
  {
    id: 'treasurer',
    name: 'Ethan (Treasurer & Logistics)',
    role: 'Treasurer & Logistics Coordinator',
    bio: 'Managing chapter financial resources, Activity Grants, workshop logistics, and virtual reality equipment requisitions.',
    email: 'ethan.ntc@yachaytech.edu.ec',
    linkedin: 'https://linkedin.com/in/ethan-ntc-yachay',
    photo: '/assets/images/hospital_san_vicente.jpg',
    term: '2025 - 2026',
    category: 'Executive Board'
  },
  {
    id: 'secretary',
    name: 'Fernanda (Secretary & Design Lead)',
    role: 'Secretary & Creative Director',
    bio: 'Overseeing graphic communications, certification frameworks, event announcements, and institutional document archives.',
    email: 'fernanda.ntc@yachaytech.edu.ec',
    linkedin: 'https://linkedin.com/in/fernanda-ntc-yachay',
    photo: '/assets/images/visita_escuela.jpg',
    term: '2025 - 2026',
    category: 'Executive Board'
  },
  {
    id: 'outreach-lead',
    name: 'Kennedy (Outreach & Media Lead)',
    role: 'Community Outreach & LinkedIn Manager',
    bio: 'Directing community science outreach, Nano News publications, and advisor communication channels.',
    email: 'kennedy.ntc@yachaytech.edu.ec',
    linkedin: 'https://linkedin.com/in/kennedy-ntc-yachay',
    photo: '/assets/images/ieee_temscon_latam_2026.jpg',
    term: '2025 - 2026',
    category: 'Coordinators'
  },
  {
    id: 'research-lead',
    name: 'Andrew (Research & Publications Lead)',
    role: 'Research & LANANO Training Lead',
    bio: 'Guiding research paper proposals, literature extraction teams, and IEEE conference submission workflows.',
    email: 'andrew.ntc@yachaytech.edu.ec',
    photo: '/assets/images/campus_stairs_group.jpg',
    term: '2025 - 2026',
    category: 'Coordinators'
  },
  {
    id: 'advisor-1',
    name: 'Information pending confirmation',
    role: 'Faculty Advisor',
    bio: 'Academic advisor guiding scientific rigor and departmental support at Yachay Tech University.',
    email: 'advisor.ntc@yachaytech.edu.ec',
    photo: '/assets/images/campus_stairs_group.jpg',
    term: '2025 - 2026',
    category: 'Advisors'
  }
];

export interface OpportunityItem {
  id: string;
  title: string;
  titleEn: string;
  institution: string;
  institutionEn: string;
  category: 'Becas' | 'Becas de Viaje' | 'Voluntariado' | 'Programas IEEE' | 'Competencias';
  categoryEn: 'Scholarships' | 'Travel Grants' | 'Volunteering' | 'IEEE Programs' | 'Competitions';
  deadline: string;
  deadlineEn: string;
  status: 'Abierta' | 'Próximamente' | 'Cerrada';
  statusEn: 'Open' | 'Upcoming' | 'Closed';
  modality: 'En Línea' | 'Presencial' | 'Global' | 'Híbrido';
  modalityEn: 'Online' | 'In-Person' | 'Global' | 'Hybrid';
  summary: string;
  summaryEn: string;
  description: string;
  descriptionEn: string;
  officialUrl: string;
}

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    id: 'ntc-chapter-activity-grant-2026',
    title: 'Fondo de Financiamiento para Actividades IEEE NTC 2026',
    titleEn: 'IEEE NTC Chapter Activity Grant 2026',
    institution: 'IEEE Nanotechnology Council Global',
    institutionEn: 'IEEE Nanotechnology Council Global',
    category: 'Becas de Viaje',
    categoryEn: 'Travel Grants',
    deadline: '30 de Agosto de 2026',
    deadlineEn: 'August 30, 2026',
    status: 'Abierta',
    statusEn: 'Open',
    modality: 'Global',
    modalityEn: 'Global',
    summary: 'Financiamiento económico para actividades destacadas de capítulos estudiantiles IEEE NTC, proyectos de investigación y participación en conferencias.',
    summaryEn: 'Financial grants for active IEEE NTC student branches to fund technical workshops, outreach, and conference travel.',
    description: 'El IEEE NTC otorga subvenciones de hasta $1,000 USD a capítulos estudiantiles activos para financiar talleres técnicos, proyectos de vinculación comunitaria y viajes estudiantiles a conferencias insignia de IEEE.',
    descriptionEn: 'IEEE NTC provides grants up to $1,000 USD to active student chapters to fund technical workshops, community outreach initiatives, and student travel to flagship IEEE conferences.',
    officialUrl: 'https://ieeenano.org/grants-and-awards/'
  },
  {
    id: 'lanano-student-travel-award',
    title: 'Beca de Viaje Estudiantil IEEE LANANO 2026',
    titleEn: 'IEEE LANANO 2026 Student Travel Award',
    institution: 'IEEE Región 9 & NTC LATAM',
    institutionEn: 'IEEE Region 9 & NTC LATAM',
    category: 'Becas de Viaje',
    categoryEn: 'Travel Grants',
    deadline: '15 de Septiembre de 2026',
    deadlineEn: 'September 15, 2026',
    status: 'Próximamente',
    statusEn: 'Upcoming',
    modality: 'Presencial',
    modalityEn: 'In-Person',
    summary: 'Becas de viaje para autores principales estudiantiles que presenten artículos científicos en la Conferencia Latinoamericana de Nanotecnología.',
    summaryEn: 'Travel grants for student primary authors presenting scientific papers at the Latin American Nanotechnology Conference.',
    description: 'Subvenciones competitivas que cubren costos de inscripción y estadía para estudiantes con artículos de investigación aceptados en IEEE LANANO 2026.',
    descriptionEn: 'Competitive grants covering registration and travel costs for students with accepted scientific papers at IEEE LANANO 2026.',
    officialUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/'
  },
  {
    id: 'ieee-ntc-distinguished-lecturers',
    title: 'Conferencias Magistrales IEEE NTC (Distinguished Lecturers)',
    titleEn: 'IEEE NTC Distinguished Lecturers Program',
    institution: 'IEEE Nanotechnology Council Educational Activities',
    institutionEn: 'IEEE Nanotechnology Council Educational Activities',
    category: 'Programas IEEE',
    categoryEn: 'IEEE Programs',
    deadline: 'Convocatoria Continua',
    deadlineEn: 'Rolling Basis',
    status: 'Abierta',
    statusEn: 'Open',
    modality: 'Híbrido',
    modalityEn: 'Hybrid',
    summary: 'Auspicio para coordinar conferencias con expertos internacionales en nanomedicina avanzada, nanoelectrónica y materiales cuánticos.',
    summaryEn: 'Funding to host keynote lectures with world-renowned experts in advanced nanomedicine, nanoelectronics, and quantum materials.',
    description: 'Los capítulos estudiantiles pueden solicitar financiamiento para invitar a científicos de renombre mundial para dictar seminarios magistrales virtuales o presenciales.',
    descriptionEn: 'Student branch chapters can request sponsorship to invite world-renowned scientists for virtual or in-person distinguished lectures.',
    officialUrl: 'https://ieeenano.org/educational-activities/distinguished-lecturers/'
  },
  {
    id: 'chapter-volunteer-recruitment',
    title: 'Convocatoria de Voluntariado en Comités de Trabajo IEEE NTC',
    titleEn: 'IEEE NTC Committee Volunteering Call',
    institution: 'IEEE NTC Yachay Tech',
    institutionEn: 'IEEE NTC Yachay Tech',
    category: 'Voluntariado',
    categoryEn: 'Volunteering',
    deadline: '01 de Septiembre de 2026',
    deadlineEn: 'September 01, 2026',
    status: 'Abierta',
    statusEn: 'Open',
    modality: 'Presencial',
    modalityEn: 'In-Person',
    summary: 'Únete a nuestros comités operativos de mentoría científica, redes sociales, logística de eventos, divulgación y diseño digital.',
    summaryEn: 'Join our operational committees in research mentorship, social media, event logistics, STEM outreach, and digital design.',
    description: 'Desarrolla habilidades de liderazgo, obtén certificados oficiales de IEEE y amplía tu red de contactos colaborando como coordinador o staff de eventos.',
    descriptionEn: 'Develop leadership skills, earn official IEEE certificates, and expand your network by collaborating as committee coordinator or event staff.',
    officialUrl: 'https://forms.gle/demo-volunteer'
  }
];

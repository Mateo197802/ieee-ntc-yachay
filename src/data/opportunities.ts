export interface OpportunityItem {
  id: string;
  title: string;
  institution: string;
  category: 'Becas' | 'Becas de Viaje' | 'Voluntariado' | 'Programas IEEE' | 'Competencias';
  deadline: string;
  status: 'Abierta' | 'Próximamente' | 'Cerrada';
  modality: 'En Línea' | 'Presencial' | 'Global' | 'Híbrido';
  summary: string;
  description: string;
  officialUrl: string;
}

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    id: 'ntc-chapter-activity-grant-2026',
    title: 'Fondo de Financiamiento para Actividades IEEE NTC 2026',
    institution: 'IEEE Nanotechnology Council Global',
    category: 'Becas de Viaje',
    deadline: '30 de Agosto de 2026',
    status: 'Abierta',
    modality: 'Global',
    summary: 'Financiamiento económico para actividades destacadas de capítulos estudiantiles IEEE NTC, proyectos de investigación y participación en conferencias.',
    description: 'El IEEE NTC otorga subvenciones de hasta $1,000 USD a capítulos estudiantiles activos para financiar talleres técnicos, proyectos de vinculación comunitaria y viajes estudiantiles a conferencias insignia de IEEE.',
    officialUrl: 'https://ieeenano.org/grants-and-awards/'
  },
  {
    id: 'lanano-student-travel-award',
    title: 'Beca de Viaje Estudiantil IEEE LANANO 2026',
    institution: 'IEEE Región 9 & NTC LATAM',
    category: 'Becas de Viaje',
    deadline: '15 de Septiembre de 2026',
    status: 'Próximamente',
    modality: 'Presencial',
    summary: 'Becas de viaje para autores principales estudiantiles que presenten artículos científicos en la Conferencia Latinoamericana de Nanotecnología.',
    description: 'Subvenciones competitivas que cubren costos de inscripción y estadía para estudiantes con artículos de investigación aceptados en IEEE LANANO 2026.',
    officialUrl: 'https://mateo197802.github.io/IEEE-LANANO-2026/'
  },
  {
    id: 'ieee-ntc-distinguished-lecturers',
    title: 'Conferencias Magistrales IEEE NTC (Distinguished Lecturers)',
    institution: 'IEEE Nanotechnology Council Educational Activities',
    category: 'Programas IEEE',
    deadline: 'Convocatoria Continua',
    status: 'Abierta',
    modality: 'Híbrido',
    summary: 'Auspicio para coordinar conferencias con expertos internacionales en nanomedicina avanzada, nanoelectrónica y materiales cuánticos.',
    description: 'Los capítulos estudiantiles pueden solicitar financiamiento para invitar a científicos de renombre mundial para dictar seminarios magistrales virtuales o presenciales.',
    officialUrl: 'https://ieeenano.org/educational-activities/distinguished-lecturers/'
  },
  {
    id: 'chapter-volunteer-recruitment',
    title: 'Convocatoria de Voluntariado en Comités de Trabajo IEEE NTC',
    institution: 'IEEE NTC Yachay Tech',
    category: 'Voluntariado',
    deadline: '01 de Septiembre de 2026',
    status: 'Abierta',
    modality: 'Presencial',
    summary: 'Únete a nuestros comités operativos de mentoría científica, redes sociales, logística de eventos, divulgación y diseño digital.',
    description: 'Desarrolla habilidades de liderazgo, obtén certificados oficiales de IEEE y amplía tu red de contactos colaborando como coordinador o staff de eventos.',
    officialUrl: 'https://forms.gle/demo-volunteer'
  }
];

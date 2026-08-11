// Bilingual i18n Translation Engine for IEEE NTC Yachay Tech

const ES_TO_EN_MAP: Record<string, string> = {
  // Navigation
  'Inicio': 'Home',
  'Nosotros': 'About',
  'Sobre Nosotros': 'About Us',
  'Directiva Fundadora': 'Founding Board',
  'Actividades': 'Activities',
  'Próximos Eventos': 'Upcoming Events',
  'Eventos Pasados': 'Past Events',
  'Calendario': 'Calendar',
  'Proyectos': 'Projects',
  'Oportunidades': 'Opportunities',
  'Medios': 'Media',
  'Galería': 'Gallery',
  'Galería de Fotos': 'Photo Gallery',
  'Noticias': 'News',
  'Noticias y Prensa': 'News & Press',
  'Directiva': 'Directive',
  'Contacto': 'Contact',

  // Hero & Pillars
  '• IEEE NANOTECHNOLOGY COUNCIL · YACHAY TECH': '• IEEE NANOTECHNOLOGY COUNCIL · YACHAY TECH',
  'IMPULSANDO A LA PRÓXIMA GENERACIÓN DE INNOVADORES A TRAVÉS DE LA NANOTECNOLOGÍA': 'EMPOWERING THE NEXT GENERATION OF INNOVATORS THROUGH NANOTECHNOLOGY',
  'Conectamos a estudiantes apasionados por la nanotecnología y ciencias afines para investigar, colaborar, innovar y generar un impacto científico y social real.': 'We connect students passionate about nanotechnology and related sciences to research, collaborate, innovate, and create real impact.',
  'ÚNETE A NUESTRA COMUNIDAD': 'JOIN OUR COMMUNITY',
  'VER PRÓXIMOS EVENTOS': 'VIEW UPCOMING EVENTS',
  'Rama Estudiantil Yachay Tech': 'Yachay Tech Student Branch',
  'QUIÉNES SOMOS': 'WHO WE ARE',
  'Somos el primer Capítulo Estudiantil del IEEE Nanotechnology Council en Ecuador, guiados por la curiosidad y la excelencia científica.': 'We are the first IEEE Nanotechnology Council Student Branch Chapter in Ecuador, driven by curiosity and scientific excellence.',
  'NUESTRA MISIÓN': 'OUR MISSION',
  'Promover la educación en nanotecnología, la investigación interdisciplinaria y el servicio comunitario en América Latina.': 'To promote nanotechnology education, interdisciplinary research, and community service in Latin America.',
  'NUESTRA VISIÓN': 'OUR VISION',
  'Ser un capítulo referente en innovación en nanotecnología, publicaciones de alto impacto y divulgación científica abierta.': 'To be a benchmark chapter in nanotechnology innovation, high-impact publications, and open scientific outreach.',
  'NUESTROS OBJETIVOS': 'OUR GOALS',
  'Inspirar, conectar y empoderar a los estudiantes para resolver desafíos tecnológicos globales mediante nanociencia.': 'To inspire, connect, and empower students to solve global technological challenges through nanoscience.',
  'NUESTRA COMUNIDAD': 'OUR COMMUNITY',
  'Una comunidad apasionada y diversa que impulsa el cambio científico en Yachay Tech y en toda la Región 9 de IEEE.': 'A passionate and diverse community driving scientific change across Yachay Tech and IEEE Region 9.',

  // Home Bottom Row
  'PROYECTOS E INICIATIVAS': 'PROJECTS & INITIATIVES',
  'ÚLTIMAS NOTICIAS': 'LATEST NEWS',
  'DESTACADOS DE GALERÍA': 'GALLERY HIGHLIGHTS',
  'VER TODOS LOS EVENTOS →': 'VIEW ALL EVENTS →',
  'VER TODOS →': 'VIEW ALL →',
  'VER TODAS →': 'VIEW ALL →',
  'VER TODAS LAS FOTOS →': 'VIEW ALL PHOTOS →',
  'VER DETALLES →': 'VIEW DETAILS →',
  'INVESTIGACIÓN': 'RESEARCH',
  'Promoviendo la investigación y publicaciones en nanotecnología.': 'Promoting research and publications in nanotechnology.',
  'VINCULACIÓN': 'OUTREACH',
  'Llevando la ciencia y talleres prácticos a colegios y comunidades.': 'Bringing science and hands-on workshops to schools and communities.',
  'INNOVACIÓN': 'INNOVATION',
  'Desarrollando Inteligencia Artificial, Edge AI y Realidad Virtual.': 'Developing Artificial Intelligence, Edge AI, and Virtual Reality.',
  'SERVICIO': 'SERVICE',
  'Generando impacto social y humanitario mediante la tecnología.': 'Creating social and humanitarian impact through technology.',

  // About Page
  'SOBRE NOSOTROS': 'ABOUT US',
  'Impulsando a estudiantes en nanociencia, nanotecnología e innovación interdisciplinaria.': 'Empowering students in nanoscience, nanotechnology, and interdisciplinary innovation.',
  'IMPULSANDO LA NANOCIENCIA EN YACHAY TECH': 'ADVANCING NANOSCIENCE AT YACHAY TECH',
  'OBJETIVOS ESTRATÉGICOS': 'STRATEGIC GOALS',
  'VENTAJAS DE LA MEMBRESÍA': 'MEMBERSHIP ADVANTAGES',
  '¿POR QUÉ UNIRSE A IEEE Y AL IEEE NTC?': 'WHY JOIN IEEE & IEEE NTC?',

  // Directive
  'LIDERAZGO ESTUDIANTIL': 'STUDENT LEADERSHIP',
  'JUNTA DIRECTIVA FUNDADORA': 'FOUNDING EXECUTIVE BOARD',
  'DIRECTIVA FUNDADORA': 'FOUNDING BOARD',
  'VER PERFIL COMPLETO': 'VIEW FULL PROFILE',
  'Áreas de Enfoque e Investigación': 'Research & Focus Areas',
  'CONECTAR EN LINKEDIN': 'CONNECT ON LINKEDIN',

  // Events & Activities
  'ACTIVIDADES Y COMUNIDAD': 'ACTIVITIES & COMMUNITY',
  'ACTIVIDADES Y EVENTOS': 'ACTIVITIES & EVENTS',
  'AGENDA Y WEBINARS': 'AGENDA & WEBINARS',
  'PRÓXIMO EVENTO': 'UPCOMING EVENT',
  'HISTORIAL Y ARCHIVO': 'HISTORY & ARCHIVE',
  'EVENTOS PASADOS Y VINCULACIÓN': 'PAST EVENTS & OUTREACH',
  'CALENDARIO ACADÉMICO': 'ACADEMIC CALENDAR',
  'CALENDARIO DEL CAPÍTULO 2026': 'CHAPTER CALENDAR 2026',
  'PRÓXIMO EVENTO CONFIRMADO': 'NEXT CONFIRMED EVENT',
  'VER PRÓXIMO EVENTO': 'VIEW UPCOMING EVENT',
  'REGISTRO PRÓXIMAMENTE': 'REGISTRATION OPENING SOON',
  'REGISTRARSE AHORA': 'REGISTER NOW',
  'VER PROGRAMA': 'VIEW PROGRAM',
  'VER FOTOS DE GALERÍA': 'VIEW GALLERY PHOTOS',
  'COMPLETADO': 'COMPLETED',

  // Gallery
  'GALERÍA DE FOTOS': 'PHOTO GALLERY',
  'Todas': 'All',
  'Conferencias': 'Conferences',
  'Talleres': 'Workshops',
  'Comunidad': 'Community',
  'AMPLIAR': 'EXPAND',
  'Usa las flechas laterales o las teclas ← / → para navegar': 'Use lateral arrows or keyboard ← / → to navigate',

  // Opportunities
  'DESARROLLO ESTUDIANTIL': 'STUDENT DEVELOPMENT',
  'OPORTUNIDADES Y CONVOCATORIAS': 'OPPORTUNITIES & CALLS',
  'Becas de Viaje': 'Travel Grants',
  'Programas IEEE': 'IEEE Programs',
  'Voluntariado': 'Volunteering',
  'Fecha Límite:': 'Deadline:',
  'POSTULAR / MÁS INFORMACIÓN': 'APPLY / MORE INFO',
  '¿BUSCAS MÁS OPORTUNIDADES PARA ESTUDIANTES IEEE?': 'LOOKING FOR MORE IEEE STUDENT OPPORTUNITIES?',
  'CONTACTAR A LA DIRECTIVA': 'CONTACT CHAPTER OFFICERS',

  // News
  'NOTICIAS Y COMUNICADOS': 'NEWS & ANNOUNCEMENTS',

  // Contact
  'CONTÁCTANOS': 'CONTACT US',
  'ENVÍANOS UN MENSAJE': 'SEND US A MESSAGE',
  'Nombre Completo': 'Full Name',
  'Correo Institucional o Personal': 'Institutional or Personal Email',
  'Asunto': 'Subject',
  'Mensaje': 'Message',
  'ENVIAR MENSAJE': 'SEND MESSAGE',
  'SEDE INSTITUCIONAL Y UBICACIÓN': 'HEADQUARTERS & LOCATION',
  'Correo Oficial': 'Official Email',
  'MAPA DEL CAMPUS YACHAY TECH': 'YACHAY TECH CAMPUS MAP',

  // Footer
  'Enlaces Rápidos': 'Quick Links',
  'Recursos IEEE': 'IEEE Resources',
  'Contacto & Sede': 'Contact & Location',
  'Rama Estudiantil IEEE Nanotechnology Council Yachay Tech University. Conectando a estudiantes para investigar, colaborar e innovar en nanotecnología y disciplinas afines.': 'IEEE Nanotechnology Council Student Branch Chapter at Yachay Tech University. Connecting students to research, collaborate, and innovate in nanotechnology and related fields.',
  'Todos los derechos reservados.': 'All rights reserved.',
  'Accesibilidad': 'Accessibility',
  'Política de Privacidad': 'Privacy Policy',
  'Términos de Uso': 'Terms of Use'
};

const EN_TO_ES_MAP: Record<string, string> = {};
for (const [es, en] of Object.entries(ES_TO_EN_MAP)) {
  EN_TO_ES_MAP[en] = es;
}

export function getCurrentLanguage(): 'es' | 'en' {
  if (typeof window === 'undefined') return 'es';
  const saved = localStorage.getItem('ntc_lang');
  return (saved === 'en' || saved === 'es') ? saved : 'es';
}

export function setLanguage(lang: 'es' | 'en') {
  if (typeof window === 'undefined') return;
  localStorage.setItem('ntc_lang', lang);
  document.documentElement.lang = lang;

  // Update active buttons in header/mobile
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const map = lang === 'en' ? ES_TO_EN_MAP : EN_TO_ES_MAP;

  // Walk text nodes in the DOM and translate known exact phrases
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName.toLowerCase();
        if (tag === 'script' || tag === 'style' || tag === 'noscript') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  let currentNode = walker.nextNode();
  while (currentNode) {
    const rawText = currentNode.nodeValue?.trim() || '';
    if (rawText && map[rawText]) {
      currentNode.nodeValue = currentNode.nodeValue!.replace(rawText, map[rawText]);
    }
    currentNode = walker.nextNode();
  }
}

export function initI18n() {
  if (typeof window === 'undefined') return;
  
  const initialLang = getCurrentLanguage();
  document.documentElement.lang = initialLang;

  // Bind click handlers to language toggle buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = (btn.getAttribute('data-lang') || 'es') as 'es' | 'en';
      setLanguage(targetLang);
    });
  });

  if (initialLang === 'en') {
    setLanguage('en');
  } else {
    setLanguage('es');
  }
}

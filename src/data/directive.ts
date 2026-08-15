export interface DirectiveMember {
  id: string;
  name: string;
  role: string;
  roleType: 'Chair' | 'Vice Chair' | 'Secretary' | 'Treasurer' | 'Webmaster' | 'Advisor';
  academicProgram: string;
  email: string;
  image: string;
  bio: string;
  focusAreas: string[];
  linkedin?: string;
  category: 'Executive Board' | 'Webmaster & Media' | 'Faculty Advisor';
}

export const DIRECTIVE_DATA: DirectiveMember[] = [
  {
    id: 'solange-criollo',
    name: 'Shirley Solange Criollo Coello',
    role: 'Chair',
    roleType: 'Chair',
    academicProgram: 'School of Biological Sciences & Engineering — Biomedical Engineering',
    email: 'shirley.criollo@yachaytech.edu.ec',
    image: '/assets/directive/solange_criollo.jpg',
    bio: "Biomedical Science student at Yachay Tech University with focused research in nanobiotechnology, nanomedicine, and biomaterials for healthcare applications. Her academic background encompasses research on antimicrobial hydrogels and green synthesis of nanoparticles, participating as a presenter at international student conferences. She began her IEEE journey in 2024 as an active member and later Treasurer of the WIE Affinity Group at Yachay Tech, achieving first place in the Success Case competition and second place as Outstanding Affinity Group at the XXVII Student Branch Regional Meeting in El Salvador. In 2025, she served as Vice President of the IEEE Student Branch at Yachay Tech, organizing the First National Soft Skills Workshop, science fairs, and the first edition of the official branch magazine, and represented the branch at the XXVIII Regional Meeting in Uruguay (2nd place in Branch Fair). She led the founding of the IEEE Nanotechnology Council Student Branch Chapter at Yachay Tech as the first NTC chapter in Ecuador and fourth in Latin America. She was also selected for the IEEE Region 9 SAC Awards and Recognition Subcommittee.",
    focusAreas: ['Nanobiotechnology', 'Nanomedicine', 'Antimicrobial Hydrogels', 'IEEE Region 9 Leadership'],
    linkedin: 'https://www.linkedin.com/in/solange-criollo-321b73163/',
    category: 'Executive Board'
  },
  {
    id: 'mateo-gavilanes',
    name: 'Mateo Gavilanes',
    role: 'Vice Chair',
    roleType: 'Vice Chair',
    academicProgram: 'School of Biological Sciences & Engineering — Biomedical Engineering',
    email: 'isaac.gavilanes@yachaytech.edu.ec',
    image: '/assets/directive/mateo_gavilanes.jpg',
    bio: "Isaac Mateo Gavilanes Chávez is a Biomedical Engineering student at Yachay Tech University focused on clinical data science, automated pipeline architectures, and medical Artificial Intelligence deployment. His technical research centers on deterministic validation systems, data auditing, and error reduction in generative models. He collaborates as systems architect and data analyst with Leo Anthony Celi's network and MIT Critical Data, developing ETL pipelines for the Scientometric Analysis Tool, contributing automated screening for the MRI/CT review initiative in LMICs, and participating in sociotechnical simulations (AGORA) and survival/embedding innovation ecosystem analytics (Combinators Are Dead). Regionally, he is a Research Scholar / Volunteer at SDAS (Smart Data Analysis Systems) and data architecture lead for Cuerpo Maestro in precision nutrition and metabolic syndrome. In Edge AI, he develops the TITAN V4/V4.5 on-device ECG diagnostic platform for resource-constrained hardware. As Vice Chair of IEEE NTC Yachay Tech, he coordinates international scientific initiatives, VR environments for technical outreach, and biomedical research pipelines.",
    focusAreas: ['Clinical Data Science', 'Edge AI & TITAN V4', 'MIT Critical Data', 'PRISMA-AT & Systems Architecture'],
    linkedin: 'https://www.linkedin.com/in/isaac-mateo-g-55aa7a318/?locale=es',
    category: 'Executive Board'
  },
  {
    id: 'ethan-guevara',
    name: 'Ethan Aaron Guevara López',
    role: 'Secretary',
    roleType: 'Secretary',
    academicProgram: 'School of Biological Sciences & Engineering — Biomedical Engineering',
    email: 'ethan.guevara@yachaytech.edu.ec',
    image: '/assets/directive/ethan_guevara.jpg',
    bio: "Ethan Aaron Guevara López is a 7th-semester Biomedical Engineering student at Yachay Tech University with deep research interest in molecular biology, tissue engineering, and advanced medical instrumentation. He is part of the development team for a mission-critical ECG platform, designing Edge AI architectures that integrate neural networks with Bayesian Deep Learning to quantify model diagnostic uncertainty for on-device arrhythmia analysis without cloud dependency. His technical foundation is complemented by entrepreneurship and social impact, having achieved third place in the Hult Prize with 'GelGrowth' (biocompatible hydrogels for cell and agricultural cultures). He serves as founding member and Secretary of the IEEE Nanotechnology Council Chapter at Yachay Tech and shares his passion for scientific education as Teaching Assistant for Human Physiology.",
    focusAreas: ['Bayesian Deep Learning', 'Edge AI & ECG Platforms', 'Tissue Engineering', 'Human Physiology Teaching'],
    linkedin: 'https://www.linkedin.com/company/ieee-ntc-yachay-tech/',
    category: 'Executive Board'
  },
  {
    id: 'emily-perez',
    name: 'Emily Poleth Pérez Román',
    role: 'Treasurer',
    roleType: 'Treasurer',
    academicProgram: 'School of Biological Sciences & Engineering — Biomedical Engineering',
    email: 'emily.perez@yachaytech.edu.ec',
    image: '/assets/directive/emily_perez.jpg',
    bio: "Emily Pérez is a fourth-semester Biomedical Engineering student at Yachay Tech University with a focused interest in physics applied to medicine and clinical environments. She serves on the board of both the IEEE Nanotechnology Council Student Chapter and the Club de Biomedicina de Yachay Tech as Treasurer, strategically managing financial resources, budget planning, and chapter sustainability. In scientific research, Emily is developing a project on green synthesis of silver nanoparticles using plant extracts with antimicrobial applications for diabetic wounds, alongside an academic review on hypothyroidism biomarker approaches. Driven by the preventive potential of nanomedicine to enhance healthcare and minimize invasiveness, she builds her career at the convergence of biology, engineering, and clinical physics.",
    focusAreas: ['Medical Physics', 'Green Nanoparticle Synthesis', 'Nanomedicine', 'Financial Management'],
    linkedin: 'https://www.linkedin.com/in/emily-poleth-a2148828a/',
    category: 'Executive Board'
  },
  {
    id: 'fernanda-landazuri',
    name: 'Melanie Fernanda Landázuri Quiñonez',
    role: 'Webmaster & Scientific Communication',
    roleType: 'Webmaster',
    academicProgram: 'School of Earth Sciences — Geosciences & Nanomaterials',
    email: 'melanie.landazuri@yachaytech.edu.ec',
    image: '/assets/directive/fernanda_landazuri.jpg',
    bio: "Fernanda Landázuri is a Geology student at Yachay Tech University with a multidisciplinary focus across quantum physics, nanomaterials, and science communication. As Webmaster for IEEE NTC Yachay Tech, she strategically connects university scientific breakthroughs with global academic communities. Backed by experience in public relations, visual communication, and marketing (including work in media productions and brand promotion), she bridges academic research with market translation. Driven by environmental sustainability and circular economy, she leads 'Cacao Viva', a sustainable venture transforming cacao agricultural waste into high-value nutritious products, undergoing strategic expansion across Ibarra, Santo Domingo, and Esmeraldas through partnerships with Huerto de Oro and Aphellium.",
    focusAreas: ['Science Communication', 'Media & Visual Identity', 'Circular Economy (Cacao Viva)', 'Quantum & Geomaterials'],
    linkedin: 'https://www.linkedin.com/in/melanie-fernanda-landazuri-qui%C3%B1onez-3ba71b305/',
    category: 'Webmaster & Media'
  },
  {
    id: 'kennedy-rodriguez',
    name: 'Yehudah Kennedy Rodríguez Morán',
    role: 'Webmaster & Technology',
    roleType: 'Webmaster',
    academicProgram: 'School of Biological Sciences & Engineering — Biomedical Engineering',
    email: 'yehudah.rodriguez@yachaytech.edu.ec',
    image: '/assets/directive/kennedy_rodriguez.jpg',
    bio: "Kennedy Rodríguez is a Biomedical Engineering student at Yachay Tech University with a focus on the convergence of medical hardware and Artificial Intelligence. Serving as Webmaster of the IEEE Nanotechnology Council Student Chapter, his technical interests center on designing advanced electronic circuits, microcontroller systems, and Machine Learning models for automated clinical anomaly detection. Dedicated to transforming complex medical datasets into tangible hardware and software tools, he works to advance diagnostic accessibility and technological translation in healthcare.",
    focusAreas: ['Medical Hardware', 'Embedded Machine Learning', 'Clinical Diagnostic Systems', 'Web Infrastructure'],
    linkedin: 'https://www.linkedin.com/in/yehudhah-kennedy-rodriguez-moran-27910b3b6/',
    category: 'Webmaster & Media'
  }
];

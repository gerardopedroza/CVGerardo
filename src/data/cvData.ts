export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  transitionNote?: string;
  startDate: string;
  endDate: string;
  sector: 'Banking' | 'Payments' | 'Financial Inclusion & Consulting' | 'Public Sector';
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  methodologies: string[];
  scopeAndTeam?: string;
  consultingClients?: string[];
  reference?: {
    name: string;
    role: string;
    phone: string;
  };
}

export interface FeaturedProject {
  id: string;
  title: string;
  company: string;
  tagline: string;
  problem: string;
  solution: string;
  roleContribution: string;
  technologies: string[];
  methodologies: string[];
  results: string;
  metrics?: { label: string; value: string };
  sector: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  highlight?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  honors?: string;
}

export interface LanguageItem {
  language: string;
}

export interface WhyMeItem {
  title: string;
  description: string;
  evidence: string;
  badge: string;
}

export interface ProfileData {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  phone: string;
  displayPhone: string;
  linkedin: string;
  linkedinUrl: string;
  cvPdfPath: string;
  yearsOfExperience: string;
  stats: {
    number: string;
    label: string;
    description: string;
  }[];
  executiveSummary: string;
  aiFocusStatement: string;
  whyMe: WhyMeItem[];
  experiences: ExperienceItem[];
  projects: FeaturedProject[];
  skillGroups: SkillGroup[];
  industries: {
    name: string;
    institutions: string[];
    description: string;
  }[];
  education: EducationItem[];
  languages: LanguageItem[];
}

export const cvData = {
  es: {
    name: 'Gerardo Pedroza',
    headline: "Gerente Senior de Desarrollo de Negocios | Servicios Financieros",
    subheadline: "17+ años en banca y servicios financieros: desarrollo de oportunidades B2B, expansión de mercado, asesoría consultiva y coordinación de iniciativas desde el discovery hasta su implementación.",
    location: 'Ciudad de México, México',
    email: 'gerardo.p.corral@gmail.com',
    phone: '+52 55 5951 8935',
    displayPhone: '(55) 5951-8935',
    linkedin: 'linkedin.com/in/gerardo-pedroza-06a1a07',
    linkedinUrl: 'https://www.linkedin.com/in/gerardo-pedroza-06a1a07/',
    cvPdfPath: '/cv/CV.pdf',
    yearsOfExperience: '17+',
    stats: [
    {
        "number": "17+",
        "label": "Años de Experiencia",
        "description": "En servicios financieros, banca, pagos y desarrollo de negocios."
    },
    {
        "number": "60%",
        "label": "Reducción de Salidas Semanales",
        "description": "De MXN 50M a MXN 20M en tres semanas para una cuenta de inversión de Banco Azteca, sin inversión adicional."
    },
    {
        "number": "20",
        "label": "Testers Coordinados",
        "description": "Durante la migración de plataforma bancaria de Citibank en España."
    },
    {
        "number": "4",
        "label": "Clientes de Consultoría",
        "description": "Banco Azteca, Santander, Mercado Pago y Banorte."
    }
],
    executiveSummary: "Gerente senior de desarrollo de negocios y profesional de servicios financieros con más de 17 años en banca, pagos, inclusión financiera y transformación digital. Su experiencia combina prospección B2B, identificación de necesidades y oportunidades en instituciones financieras, desarrollo y presentación de propuestas, seguimiento comercial y coordinación con equipos multidisciplinarios para llevar iniciativas desde el discovery hasta pilotos e implementación. Ha trabajado en Citi, Bansefi, Banco Azteca, Compartamos Banco, Visa, Women’s World Banking y la Secretaría de Comunicaciones y Transportes, además de participar en proyectos para Banco Azteca, Santander, Mercado Pago y Banorte. Presenta hallazgos y recomendaciones a líderes ejecutivos y actualmente se especializa en Inteligencia Artificial para conectar estrategia, tecnología y datos.",
    aiFocusStatement: "AI & Digital Business Development — Pau Martí | Skool (Jul 2026).",
    whyMe: [
    {
        "title": "Desarrollo de Negocios B2B",
        "description": "Prospección, identificación de oportunidades y desarrollo de mercado en servicios financieros.",
        "evidence": "Reuniones con instituciones financieras, evaluación de necesidades, propuestas y seguimiento comercial.",
        "badge": "Business Development"
    },
    {
        "title": "Relación Consultiva con Clientes",
        "description": "Convierte retos institucionales y necesidades de clientes en oportunidades y recomendaciones.",
        "evidence": "Contribuciones a trabajos con Banco Azteca, Santander, Mercado Pago y Banorte.",
        "badge": "Client Relationships"
    },
    {
        "title": "Impacto Medible en Banco Azteca",
        "description": "Contribuyó a una iniciativa para reducir las salidas semanales de una cuenta de inversión.",
        "evidence": "Las salidas bajaron de MXN 50M a MXN 20M en tres semanas, sin inversión adicional.",
        "badge": "60% Reduction"
    },
    {
        "title": "Experiencia en Productos Financieros",
        "description": "Participación en el desarrollo e implementación de productos de ahorro e inversión y soluciones de pagos.",
        "evidence": "Trayectoria en Compartamos Banco, Banco Azteca y Visa.",
        "badge": "Financial Products"
    },
    {
        "title": "Coordinación Multidisciplinaria",
        "description": "Coordinación con equipos de negocio, operaciones, tecnología y áreas comerciales.",
        "evidence": "Coordinó 20 testers durante la migración de plataforma bancaria de Citibank.",
        "badge": "Cross-functional"
    },
    {
        "title": "Investigación e Innovación Centrada en el Cliente",
        "description": "Conduce customer research, product discovery y actividades de co-creación y validación.",
        "evidence": "Facilitó Design Sprints, talleres de co-creación y validación de prototipos en Women’s World Banking.",
        "badge": "Customer Discovery"
    }
],
    experiences: [
      {
        id: 'wwb',
        company: 'Women’s World Banking Inc.',
        role: 'Specialist, Business Development',
        location: 'Nueva York / Ciudad de México',
        period: 'Ene 2020 – Dic 2024',
        startDate: '2020-01',
        endDate: '2024-12',
        sector: 'Financial Inclusion & Consulting',
        summary:
          'Contribuyó a abrir y desarrollar oportunidades con instituciones financieras y fintechs en América Latina. Lideró proyectos de investigación de clientes, product discovery e innovación, y llevó iniciativas desde el discovery hasta pilotos y despliegues.',
        responsibilities: [
          'Identificó necesidades y oportunidades comerciales en instituciones financieras y fintechs mediante prospección, análisis de mercado y reuniones con clientes, contribuyendo a la apertura de mercado en América Latina.',
          'Desarrolló propuestas consultivas y dio seguimiento comercial a oportunidades de negocio; presentó hallazgos y recomendaciones a clientes y líderes ejecutivos.',
          'Coordinó iniciativas desde discovery hasta pilotos y rollout con equipos de Producto, Operaciones, Tecnología y Marketing.',
          'Lideró customer research, product discovery y proyectos de innovación para entender necesidades de clientes y orientar oportunidades de productos digitales.',
          'Facilitó Design Sprints, talleres de co-creación y sesiones de validación de prototipos con equipos multidisciplinarios, usando prácticas de Women-Centered Design.',
          'Desarrolló recomendaciones estratégicas basadas en insights de clientes, investigación cualitativa y cuantitativa, análisis de mercado y prioridades del negocio.',
          'Apoyó a Banorte a identificar oportunidades para mejorar la experiencia de usuario (UX) y la comunicación en su app móvil.',
          'Contribuyó al análisis de adopción de crédito en Mercado Pago, incluida una nueva estrategia y calendario de comunicación.',
          'Apoyó a Santander a analizar percepciones de clientes sobre su app móvil e identificar oportunidades de mejora en UX.',
        ],
        achievements: [
          'Participó en consultorías para Banco Azteca, Santander, Mercado Pago y Banorte, enfocadas en UX, productos digitales y oportunidades de negocio.'
          
        ],
        technologies: ['Salesforce', 'HIVE', 'Financial Services', 'Digital Banking'],
        methodologies: ['Women-Centered Design', 'Design Sprints', 'Customer Research', 'Co-creation Workshops', 'Prototype Validation', 'Agile / Scrum', 'Qualitative & Quantitative Research'],
        consultingClients: ['Banco Azteca', 'Santander', 'Mercado Pago', 'Banorte'],
        reference: {
          name: 'Megan D. Baumann',
          role: 'Social-environmental Research',
          phone: '+1 (312) 771-7512',
        },
      },
      {
        id: 'visa',
        company: 'Visa',
        role: 'Manager, Consumer Products',
        location: 'Ciudad de México, México',
        period: 'Jul 2019 – Dic 2019',
        transitionNote: 'Después aceptó una oportunidad en Women’s World Banking, una organización internacional que apoya a instituciones financieras; su trabajo se enfocó en América Latina.',
        startDate: '2019-07',
        endDate: '2019-12',
        sector: 'Payments',
        summary:
          'Gestionó iniciativas estratégicas para productos de pago de consumo de Visa en estrecha colaboración con instituciones financieras emisoras y unidades de negocio internas.',
        responsibilities: [
          'Coordinó equipos multifuncionales en Producto, Desarrollo de Negocios, Operaciones, Tecnología y áreas Comerciales.',
          'Colaboró directamente con instituciones financieras para identificar oportunidades de negocio y acelerar la adopción de soluciones de pago de consumo.',
          'Participó en iniciativas de mejora de producto enfocadas en elevar la propuesta de valor al cliente y la competitividad en el mercado.',
          'Respaldó la planificación de producto: priorización de iniciativas, seguimiento de ejecución y alineación de stakeholders.',
          'Elaboró presentaciones ejecutivas y recomendaciones estratégicas de negocio para directivos internos y externos.',
        ],
        achievements: [],
        technologies: ['Payment Schemes', 'Consumer Cards', 'Issuing Platforms'],
        methodologies: ['Stakeholder Alignment', 'Cross-functional Coordination', 'Business Case Validation'],
        reference: {
          name: 'Gerardo Ortiz',
          role: 'Support Service',
          phone: '+52 (55) 1362-7799',
        },
      },
      {
        id: 'compartamos',
        company: 'Compartamos Banco S.A. Institución de Banca Múltiple',
        role: 'Product Development Manager',
        location: 'Ciudad de México, México',
        period: 'Feb 2015 – Jun 2019',
        transitionNote: 'Después aceptó una oportunidad en Visa para gestionar productos de pago de consumo.',
        startDate: '2015-02',
        endDate: '2019-06',
        sector: 'Banking',
        summary:
          'Desarrolló e implementó productos de ahorro e inversión, coordinando actividades desde la definición hasta la implementación.',
        responsibilities: [
          'Definió la estrategia de producto, propuesta de valor, requerimientos de negocio, business cases, evaluaciones de viabilidad y planes de implementación.',
          'Lideró equipos multidisciplinarios a través de Negocio, Tecnología, Operaciones, Legal, Compliance, Riesgo, Finanzas y Marketing.',
          'Coordinó con equipos transversales de distintas áreas de la institución.',
          'Coordinó el diseño de soluciones, desarrollo tecnológico, Pruebas de Aceptación de Usuario (UAT), preparación para producción y actividades de go-to-market.',
          'Lideró comités ejecutivos y reuniones de gobierno para gestionar prioridades, mitigar riesgos y asegurar la alineación de dependencias.',
          'Aseguró que todos los productos cumplieran con los rigurosos estándares regulatorios, operativos y de gobernanza interna antes de su liberación al mercado.',
          'Monitoreó el desempeño post-lanzamiento, KPIs de negocio y retroalimentación de clientes para aplicar mejoras continuas.',
        ],
        achievements: [
          
          
        ],
        technologies: ['Core Banking Systems', 'Transactional Platforms', 'Savings & Investment Engines', 'UAT Management Tools'],
        methodologies: ['Product Development', 'Implementation Coordination', 'User Acceptance Testing'],
        
        reference: {
          name: 'Ana Gabriela García Zepeda',
          role: 'Directora de Productos Financieros',
          phone: '+52 (55) 5402-4518',
        },
      },
      {
        id: 'azteca',
        company: 'Banco Azteca S.A. Institución de Banca Múltiple',
        role: 'Product Manager',
        location: 'Ciudad de México, México',
        period: 'Jun 2013 – Feb 2015',
        transitionNote: 'Su jefa en Banco Azteca lo invitó a incorporarse a Compartamos Banco para liderar el desarrollo de productos.',
        startDate: '2013-06',
        endDate: '2015-02',
        sector: 'Banking',
        summary:
          'Mejoró productos de inversión e identificó inconsistencias en la lógica de desarrollo y funcionalidad esperada.',
        responsibilities: [
          'Gestionó el rendimiento de productos financieros y definió estrategias de atracción y retención de clientes.',
          'Identificó inconsistencias en la lógica de desarrollo del producto y su funcionalidad esperada; participó en validar requerimientos y realizar pruebas.',
          
          
          
        ],
        achievements: [
          'Tras un cambio de tasas de interés, participó en una iniciativa para reducir las salidas semanales de la cuenta de inversión Inversión Azteca Creciente.',
          'Las salidas semanales bajaron de MXN 50M a MXN 20M en tres semanas, una reducción del 60% sin inversión adicional.',
          'Presentó recomendaciones a las partes interesadas y monitoreó el desempeño del producto.',
        ],
        technologies: ['Investment Products', 'Product Testing', 'Product Monitoring'],
        methodologies: ['Requirements Validation', 'Product Performance Monitoring', 'Stakeholder Recommendations'],
        reference: {
          name: 'Rosa Ramírez Galindo',
          role: 'Directora de Productos Financieros',
          phone: '+52 (55) 2128-5522',
        },
      },
      {
        id: 'bansefi',
        company: 'Banco del Ahorro Nacional y Servicios Financieros S.N.C. (Bansefi)',
        role: 'Commercial Strategy Manager',
        location: 'Ciudad de México, México',
        period: 'Nov 2009 – Jun 2013',
        transitionNote: 'Aceptó la oportunidad de liderar los productos de inversión en Banco Azteca.',
        startDate: '2009-11',
        endDate: '2013-06',
        sector: 'Banking',
        summary:
          'Desarrolló estrategias comerciales y programas de incentivos a nivel nacional para maximizar la adopción de productos, captación de clientes y eficiencia en sucursales.',
        responsibilities: [
          'Diseñó y ejecutó campañas de ventas y esquemas de incentivos para potenciar el desempeño comercial en toda la red de sucursales a nivel nacional.',
          'Lideró iniciativas estratégicas y proyectos interfuncionales para el lanzamiento y expansión de productos financieros.',
          'Monitoreó KPIs de producto, rendimiento comercial y tendencias de ventas para detectar oportunidades de optimización de negocio.',
          'Elaboró reportes ejecutivos y dashboards de desempeño para la toma de decisiones estratégicas de la alta dirección.',
          'Coordinó planes de acción conjuntos entre Comercial, Operaciones, Tecnología y Producto.',
        ],
        achievements: [
          
          'Diseño de dashboards ejecutivos que unificaron la visibilidad comercial y aceleraron la toma de decisiones directivas.',
        ],
        technologies: ['Commercial Dashboards', 'Branch Network Systems', 'KPI Reporting Systems'],
        methodologies: ['Commercial Strategy', 'Incentive Programs', 'Sales Analytics', 'Stakeholder Management'],
        reference: {
          name: 'Esteban Adrián González Herrera',
          role: 'Subdirector',
          phone: '+52 (55) 2271-6090',
        },
      },
      {
        id: 'sct',
        company: 'Secretaría de Comunicaciones y Transportes',
        role: 'Deputy Director Legal and Financial (Subdirector Legal y Financiero)',
        location: 'Ciudad de México, México',
        period: 'Abr 2008 – Nov 2009',
        startDate: '2008-04',
        endDate: '2009-11',
        sector: 'Public Sector',
        summary:
          'Coordinó proyectos estratégicos de alto impacto, garantizando la alineación entre múltiples entidades gubernamentales y partes interesadas.',
        responsibilities: [
          'Monitoreó hitos de proyectos, entregables clave, riesgos e indicadores de desempeño para asegurar su ejecución oportuna.',
          'Elaboró análisis, reportes ejecutivos y presentaciones para respaldar la toma de decisiones de la alta dirección.',
          'Colaboró con equipos transversales para optimizar procesos operativos y elevar la calidad de ejecución de los proyectos.',
          'Dio seguimiento a dependencias críticas y riesgos de implementación, proponiendo medidas correctivas inmediatas.',
          'Respaldó la planeación estratégica y la coordinación interinstitucional en toda la organización.',
        ],
        achievements: [
          
        ],
        technologies: ['Strategic Management Tools', 'Executive Reporting Frameworks'],
        methodologies: ['Project Governance', 'Risk Management', 'Public Sector Alignment'],
        reference: {
          name: 'Ricardo Martínez Ferrer',
          role: 'Subdirector de Infraestructura',
          phone: '+52 (55) 3749-1854',
        },
      },
      {
        id: 'citi',
        company: 'Citibank',
        role: 'Business Support Coordinator',
        location: 'Barcelona, España',
        period: 'Oct 2004 – Feb 2006',
        startDate: '2004-10',
        endDate: '2006-02',
        sector: 'Banking',
        summary:
          'Contacto operativo clave para servicios de tarjetas de débito en España y coordinador del equipo de testing durante la migración central de Core Banking.',
        responsibilities: [
          'Actuó como contacto operativo principal para servicios de tarjetas de débito, brindando soporte a sucursales en toda España y resolviendo incidencias operativas complejas.',
          'Participó en la planeación y ejecución de campañas de marketing de tarjetas de crédito para fomentar el crecimiento del portafolio y la captación de clientes.',
          'Coordinó un equipo de 20 testers durante la migración a la nueva plataforma de Core Banking basada en HTML del banco, asegurando el cumplimiento de plazos y estándares de calidad.',
          'Resolvió bloqueos operativos del equipo de pruebas, minimizando demoras en el cronograma del proyecto.',
          'Consolidó los resultados de testing, administró el seguimiento de defectos y elaboró reportes de estado ejecutivo para el Project Manager.',
          'Colaboró estrechamente con Negocio, Operaciones y Tecnología para asegurar la entrega de iniciativas tecnológicas estratégicas.',
        ],
        achievements: [
          'Migración exitosa a la nueva plataforma central de Core Banking coordinando activamente a 20 evaluadores sin interrupciones críticas en la operativa bancaria.',
        ],
        technologies: ['HTML-based Core Banking System', 'Debit Card Operational Systems', 'Defect Tracking Tools'],
        methodologies: ['UAT Testing Coordination', 'Operational Support', 'Incident Resolution', 'Defect Management'],
        scopeAndTeam: 'Coordinación directa de 20 testers durante el proyecto de migración.',
      },
    ],
    projects: [
      {
        id: 'proj-azteca-retention',
        title: 'Estrategia de Retención "Azteca Creciente"',
        company: 'Banco Azteca',
        sector: 'Banca y Retención de Capital',
        tagline: 'Mitigación de fuga masiva de capital tras cambio de tasas de interés mediante innovación táctica de producto.',
        problem:
          'Tras un ajuste en las tasas de interés de los productos de inversión, el banco comenzó a registrar salidas semanales de capital por aproximadamente MXN $50 Millones, amenazando la base de depósitos.',
        solution:
          'Sin presupuesto asignado para una campaña tradicional, se condujo investigación de clientes directamente en sucursales para entender el comportamiento del usuario. Con base en los hallazgos, se diseñó una estrategia de upgrade a tarjeta de débito para la cuenta de inversión "Azteca Creciente", brindando liquidez y valor transaccional inmediato.',
        roleContribution:
          'Lideró el diagnóstico del problema, el research con clientes en sucursal, la conceptualización de la solución de producto, la presentación ejecutiva a comités directivos y la coordinación de implementación con equipos multidisciplinarios.',
        technologies: ['Plataforma de Inversión', 'Emisión de Tarjetas de Débito', 'Sistemas de Sucursal'],
        methodologies: ['Validación de requerimientos', 'Monitoreo de producto', 'Recomendaciones a stakeholders'],
        results:
          'Las salidas semanales bajaron de MXN 50M a MXN 20M en tres semanas, una reducción del 60% sin inversión adicional.',
        metrics: {
          label: 'Reducción de Fuga Semanal',
          value: '-60%',
        },
      },
      {
        id: 'proj-compartamos-products',
        title: 'Desarrollo de productos de ahorro e inversión',
        company: 'Compartamos Banco',
        sector: 'Banca Múltiple e Inclusión',
        tagline: 'Definición, desarrollo y puesta en producción de un portafolio de ahorro, inversión y transaccionales.',
        problem:
          'Necesidad de diversificar la oferta financiera de la institución mediante productos estructurados de ahorro, inversión y transaccionales para segmentos masivos y de inclusión.',
        solution:
          'Contribuyó a la estrategia de producto, definió requerimientos y coordinó actividades de diseño, desarrollo, UAT e implementación.',
        roleContribution:
          'Coordinó con Negocio, Tecnología, Operaciones, Legal, Cumplimiento, Riesgo, Finanzas y Marketing.',
        technologies: ['Core Bancario', 'Motores de Ahorro e Inversión', 'Sistemas Transaccionales', 'Herramientas UAT'],
        methodologies: ['Desarrollo de producto', 'Coordinación de implementación', 'UAT'],
        results:
          'Productos de ahorro e inversión desarrollados e implementados con seguimiento posterior.',
        metrics: {
          label: 'Productos Lanzados',
          value: 'Ahorro e inversión',
        },
      },
      {
        id: 'proj-wwb-consulting',
        title: 'Desarrollo de Negocios y Expansión de Oportunidades en LATAM',
        company: 'Women’s World Banking',
        sector: 'Consultoría Estratégica & Fintech',
        tagline: 'Prospección, identificación de oportunidades y propuestas consultivas para instituciones financieras de América Latina.',
        problem:
          'Instituciones financieras y fintechs buscaban identificar necesidades de mercado y convertir oportunidades de negocio en iniciativas de producto y servicios digitales.',
        solution:
          'Contribuyó a abrir y desarrollar oportunidades mediante prospección, reuniones con clientes, análisis de necesidades, desarrollo de propuestas y seguimiento comercial. Complementó este trabajo con customer research, product discovery, Design Sprints y validación de prototipos.',
        roleContribution:
          'Especialista en Business Development: presentó propuestas y recomendaciones a clientes y liderazgo ejecutivo y coordinó iniciativas desde discovery hasta pilotos y rollout con equipos de Producto, Operaciones, Tecnología y Marketing.',
        technologies: ['Servicios financieros', 'Banca digital', 'Salesforce', 'HIVE'],
        methodologies: ['Women-Centered Design', 'Design Sprints', 'Customer Research', 'Co-creation Workshops', 'Prototype Validation', 'Qualitative & Quantitative Research'],
        results:
          'Consultorías para Banco Azteca, Santander, Mercado Pago y Banorte sobre UX, productos digitales y oportunidades de negocio; incluyeron análisis de adopción de crédito y de experiencia en apps móviles.',
        metrics: {
          label: 'Instituciones Cliente',
          value: '4 en LATAM',
        },
      },
      {
        id: 'proj-azteca-chambeador',
        title: 'Chambeador: mejoras para SuperAPP BAZ',
        company: 'Banco Azteca',
        sector: 'Banca Digital & UX',
        tagline: 'Identificación de oportunidades de mejora en Chambeador y su traslado mayoritario a SuperAPP BAZ.',
        problem:
          'El proyecto buscaba detectar oportunidades para mejorar la experiencia y funcionalidad digital de Chambeador.',
        solution:
          'Contribuyó al análisis del producto y a la identificación de más de 100 oportunidades de mejora.',
        roleContribution:
          'Participó en el análisis y documentación de oportunidades para que la mayoría pudiera trasladarse a SuperAPP BAZ.',
        technologies: ['Banca Digital', 'SuperAPP BAZ'],
        methodologies: ['Análisis de producto', 'Identificación de oportunidades'],
        results:
          'Se encontraron más de 100 oportunidades de mejora; la mayoría se trasladó a la aplicación SuperAPP BAZ.',
        metrics: { label: 'Mejoras identificadas', value: '100+' },
      },
      {
        id: 'proj-banorte-app-adoption',
        title: 'Adopción y uso de la app móvil',
        company: 'Banorte',
        sector: 'Banca Digital & UX',
        tagline: 'Iniciativa enfocada en aumentar la adopción y el uso de la aplicación por parte de los usuarios.',
        problem:
          'El proyecto buscaba impulsar que más usuarios adoptaran y utilizaran la aplicación móvil de Banorte.',
        solution:
          'Analizó oportunidades relacionadas con la experiencia de la app y la adopción de sus funcionalidades.',
        roleContribution:
          'Contribuyó a identificar oportunidades para promover mayor adopción y uso de la aplicación.',
        technologies: ['Aplicación móvil', 'Banca Digital'],
        methodologies: ['Análisis de UX', 'Adopción Digital'],
        results: 'Trabajo orientado a incrementar la adopción y el uso de la app entre los usuarios.',
      },
      {
        id: 'proj-santander-app-ux',
        title: 'Oportunidades de mejora para la app',
        company: 'Santander',
        sector: 'Banca Digital & UX',
        tagline: 'Detección de áreas de oportunidad para mejorar la experiencia de usuario en la aplicación.',
        problem:
          'Se requería entender dónde podía mejorar la experiencia de los usuarios al interactuar con la app de Santander.',
        solution:
          'Revisó la experiencia de la aplicación para detectar áreas de oportunidad desde la perspectiva del usuario.',
        roleContribution:
          'Contribuyó a identificar oportunidades de mejora de UX para la aplicación móvil.',
        technologies: ['Aplicación móvil', 'Banca Digital'],
        methodologies: ['Evaluación de UX', 'Análisis de experiencia'],
        results: 'Se identificaron áreas de oportunidad para mejorar la UX de la aplicación.',
      },
      {
        id: 'proj-mercadopago-pos-credit',
        title: 'Adopción de crédito para negocios con POS',
        company: 'Mercado Pago',
        sector: 'Fintech & Pagos',
        tagline: 'Oportunidades para incrementar la adopción de crédito entre negocios que utilizan el POS.',
        problem:
          'Mercado Pago buscaba aumentar la adopción de sus créditos para negocios usuarios de su terminal POS.',
        solution:
          'Analizó oportunidades de adopción y apoyó el desarrollo de una estrategia y calendario de comunicación para dar visibilidad a la oferta de crédito.',
        roleContribution:
          'Contribuyó a identificar oportunidades para acercar los créditos de Mercado Pago a negocios que utilizan el POS.',
        technologies: ['Mercado Pago', 'POS', 'Crédito para Negocios'],
        methodologies: ['Análisis de adopción', 'Estrategia de comunicación'],
        results: 'Iniciativa enfocada en incrementar la adopción de créditos para negocios usuarios del POS.',
      },
      {
        id: 'proj-citi-migration',
        title: 'Migración a Plataforma Central de Core Banking',
        company: 'Citibank España',
        sector: 'Banca Internacional & Tecnología',
        tagline: 'Coordinación de pruebas y aseguramiento de calidad en la transición a plataforma bancaria HTML.',
        problem:
          'Migración crítica del sistema bancario central de Citibank hacia una nueva plataforma core basada en HTML que demandaba cero errores operativos y estricto cumplimiento de cronograma.',
        solution:
          'Coordinación directa de un equipo de 20 testers, resolución ágil de bloqueos operativos, control riguroso de defectos y emisión de informes ejecutivos de estado al Project Manager.',
        roleContribution:
          'Coordinador del equipo de pruebas y enlace operativo principal para servicios de tarjetas y plataforma.',
        technologies: ['HTML Core Banking Platform', 'Software de Gestión de Defectos', 'Sistemas de Tarjetas de Débito'],
        methodologies: ['Coordinación de Pruebas UAT', 'Seguimiento de Defectos', 'Gestión de Incidencias'],
        results:
          'Migración completada en tiempo y con los más altos estándares de calidad y continuidad del negocio.',
        metrics: {
          label: 'Equipo de Testers',
          value: '20 Personas',
        },
      },
    ],
    skillGroups: [
    {
        "category": "Desarrollo de Negocios B2B",
        "highlight": true,
        "skills": [
            "Desarrollo de negocios B2B",
            "Prospección e identificación de oportunidades",
            "Asesoría y venta consultiva",
            "Gestión de relaciones con clientes",
            "Reuniones y análisis de necesidades",
            "Desarrollo y presentación de propuestas",
            "Seguimiento de oportunidades comerciales",
            "Salesforce",
            "HIVE"
        ]
    },
    {
        "category": "Desarrollo de Productos y Go-to-Market",
        "skills": [
            "Desarrollo de productos",
            "Desarrollo end-to-end de productos",
            "Estrategia de producto",
            "Desarrollo de business cases",
            "Roadmap de producto",
            "Go-to-Market",
            "Pruebas de aceptación de usuario (UAT)"
        ]
    },
    {
        "category": "Liderazgo, Análisis y Ejecución",
        "skills": [
            "Gestión de stakeholders",
            "Liderazgo multidisciplinario",
            "Agile (Scrum)",
            "Análisis de mercado",
            "Investigación de clientes",
            "Product discovery",
            "Coordinación cross-functional",
            "Migración de core bancario"
        ]
    },
    {
        "category": "Servicios Financieros y Banca",
        "skills": [
            "Servicios financieros",
            "Banca",
            "Pagos de consumo",
            "Banca digital",
            "Adopción de productos de crédito",
            "Productos de ahorro e inversión"
        ]
    }
],
    industries: [
      {
        name: 'Banca Múltiple & Comercial',
        institutions: ['Citibank', 'Compartamos Banco', 'Banco Azteca', 'Bansefi', 'Santander', 'Banorte'],
        description: 'Gestión y desarrollo de productos de ahorro, inversión, crédito y sistemas core bancarios.',
      },
      {
        name: 'Medios de Pago & Tarjetas',
        institutions: ['Visa', 'Citibank', 'Banco Azteca'],
        description: 'Iniciativas estratégicas en productos de pago de consumo, emisión de débito y esquemas de valor añadido.',
      },
      {
        name: 'Inclusión Financiera & Consultoría Estratégica',
        institutions: ['Women’s World Banking', 'Mercado Pago', 'Santander', 'Banorte'],
        description: 'Desarrollo de negocios, investigación de clientes, banca digital y oportunidades de adopción de crédito.',
      },
      {
        name: 'Sector Público & Gobernanza',
        institutions: ['Secretaría de Comunicaciones y Transportes (SCT)'],
        description: 'Coordinación estratégica interinstitucional, gestión de riesgos e indicadores de desempeño.',
      },
    ],
    education: [
      {
        degree: 'AI & Digital Business Development',
        institution: 'Pau Martí | Skool',
        location: 'En línea',
        year: 'Jul 2026',
        
      },
      {
        degree: 'International Business - BA (Hons.)',
        institution: 'Nottingham Trent University',
        location: 'Nottingham, United Kingdom',
        year: 'Jul 2007',
        honors: 'Honours Degree (Grado Universitario con Honores Internacionales)',
      },
    ],
    languages: [
      { language: 'Español' },
      { language: 'Inglés' },
      { language: 'Alemán' },
    ],
    recruiterSummary: {
    "title": "Perfil para selección",
    "keyHighlights": [
         "17+ años en banca y servicios financieros, con experiencia en desarrollo de negocios B2B y expansión de oportunidades.",
         "Prospección, identificación de necesidades, propuestas consultivas y seguimiento comercial con instituciones financieras.",
         "En Women’s World Banking contribuyó a abrir y desarrollar oportunidades en América Latina y coordinó iniciativas con equipos multidisciplinarios.",
        "Redujo 60% las salidas semanales de una cuenta de inversión en Banco Azteca en tres semanas, sin inversión adicional.",
        "Proficiente en Salesforce y HIVE; coordinó 20 testers durante una migración de core bancario."
    ],
    "targetRoles": [
        "Senior Business Development Manager",
        "Desarrollo de Negocios B2B en banca o fintech",
        "Relación con clientes de servicios financieros",
        "Consultoría de servicios financieros"
    ]
},
    ui: {
      nav: {
        about: 'Perfil',
        snapshot: 'Resumen',
        whyMe: 'Propuesta de Valor',
        experience: 'Experiencia',
        projects: 'Proyectos',
        skills: 'Habilidades',
        industries: 'Industrias',
        education: 'Educación',
        contact: 'Contacto',
        recruiterMode: 'Modo Recruiter',
        recruiterModeShort: 'Recruiter',
        downloadCv: 'Descargar CV',
      },
      hero: {
        badge: 'Desarrollo de Negocios | Servicios Financieros',
        ctaContact: 'Iniciar Contacto',
        ctaDownload: 'Descargar CV (PDF)',
        viewExperience: 'Ver Trayectoria',
        experienceBadge: 'Años de Trayectoria',
      },
      snapshot: {
        title: 'Instantánea Profesional',
        subtitle: 'Métricas e indicadores clave respaldados por 17+ años de carrera',
      },
      whyMe: {
        title: '¿Por qué Gerardo Pedroza?',
        subtitle: 'Desarrollo de negocios B2B, relaciones con clientes y servicios financieros',
      },
      experience: {
        title: 'Trayectoria Profesional',
        subtitle: 'Liderazgo en instituciones financieras globales, banca múltiple y consultoría de innovación',
        expandDetails: 'Ver detalles y logros',
        collapseDetails: 'Ocultar detalles',
        responsibilitiesTitle: 'Responsabilidades Principales',
        achievementsTitle: 'Logros Clave y Resultados',
        technologiesTitle: 'Tecnologías y Plataformas',
        methodologiesTitle: 'Metodologías y Gestión',
        clientsTitle: 'Clientes de Consultoría',
        referenceTitle: 'Referencia Profesional en CV',
        transitionTitle: 'Motivo de transición',
      },
      projects: {
        title: 'Proyectos Destacados',
        subtitle: 'Contribuciones a iniciativas de negocio, productos financieros y banca digital',
        viewProject: 'Ver Caso de Negocio',
        closeModal: 'Cerrar Detalle',
        problemTitle: 'El Desafío / Problema',
        solutionTitle: 'La Solución Estratégica',
        roleTitle: 'Mi Participación y Liderazgo',
        resultsTitle: 'Resultados y Métricas Clave',
      },
      skills: {
        title: 'Habilidades & Competencias',
        subtitle: 'Clasificadas por dominio profesional sin métricas subjetivas',
      },
      industries: {
        title: 'Experiencia Multisectorial',
        subtitle: 'Trayectoria en banca múltiple, medios de pago, consultoría y sector público',
      },
      education: {
        title: 'Educación & Idiomas',
        subtitle: 'Formación académica internacional y competencias lingüísticas',
        educationSection: 'Formación Universitaria',
        languagesSection: 'Idiomas',
      },
      recruiter: {
        badge: 'Modo Screening Rápido (30 Segundos)',
        heading: 'Resumen Ejecutivo para Hiring Managers',
        subheading: 'Vista optimizada con los datos más críticos para evaluación ágil',
        yearsBadge: '17+ Años de Experiencia',
        contactFast: 'Contactar Directamente',
        copyEmail: 'Copiar Correo',
        copied: '¡Copiado!',
        closeBanner: 'Volver a la vista completa',
      },
      contact: {
        title: 'Conectemos',
        subtitle: 'Conversaciones sobre desarrollo de negocios y servicios financieros',
        emailLabel: 'Correo Electrónico',
        phoneLabel: 'Teléfono Directo',
        locationLabel: 'Ubicación',
        linkedinLabel: 'Perfil de LinkedIn',
        sendEmail: 'Escribir un Correo',
        callDirect: 'Llamar por Teléfono',
        viewLinkedin: 'Ver Perfil en LinkedIn',
        downloadCvPrompt: '¿Prefieres el formato tradicional?',
        downloadCvBtn: 'Descargar CV Oficial en PDF',
      },
      footer: {
        rights: 'Todos los derechos reservados. Información basada estrictamente en el CV oficial.',
        top: 'Volver arriba',
      },
    },
  },
  en: {
    name: 'Gerardo Pedroza',
    headline: "Senior Business Development Manager | Financial Services",
    subheadline: "17+ years in banking and financial services: B2B opportunity development, market expansion, consultative client work, and cross-functional coordination from discovery through implementation.",
    location: 'Mexico City, Mexico',
    email: 'gerardo.p.corral@gmail.com',
    phone: '+52 55 5951 8935',
    displayPhone: '+52 (55) 5951-8935',
    linkedin: 'linkedin.com/in/gerardo-pedroza-06a1a07',
    linkedinUrl: 'https://www.linkedin.com/in/gerardo-pedroza-06a1a07/',
    cvPdfPath: '/cv/CV.pdf',
    yearsOfExperience: '17+',
    stats: [
    {
        "number": "17+",
        "label": "Years of Experience",
        "description": "Across financial services, banking, payments, and business development."
    },
    {
        "number": "60%",
        "label": "Weekly Outflow Reduction",
        "description": "From MXN 50M to MXN 20M in three weeks for a Banco Azteca investment account, with no additional investment."
    },
    {
        "number": "20",
        "label": "Testers Coordinated",
        "description": "During Citibank Spain’s core banking platform migration."
    },
    {
        "number": "4",
        "label": "Consulting Clients",
        "description": "Banco Azteca, Santander, Mercado Pago, and Banorte."
    }
],
    executiveSummary: "Senior business development manager and financial services professional with 17+ years across banking, payments, financial inclusion, and digital transformation. Experience includes B2B prospecting, identifying needs and opportunities at financial institutions, developing and presenting proposals, commercial follow-up, and coordinating multidisciplinary teams to move initiatives from discovery through pilots and implementation. Worked at Citi, Bansefi, Banco Azteca, Compartamos Banco, Visa, Women’s World Banking, and Mexico’s Secretariat of Communications and Transportation (SCT), as well as on engagements for Banco Azteca, Santander, Mercado Pago, and Banorte. Presents findings and recommendations to executive leadership and is currently specializing in Artificial Intelligence to connect business strategy, technology, and data.",
    aiFocusStatement: "AI & Digital Business Development — Pau Martí | Skool (Jul 2026).",
    whyMe: [
    {
        "title": "B2B Business Development",
        "description": "Prospecting, opportunity identification, and market development in financial services.",
        "evidence": "Financial institution meetings, needs assessment, proposals, and commercial follow-up.",
        "badge": "Business Development"
    },
    {
        "title": "Consultative Client Relationships",
        "description": "Translates institutional challenges and customer needs into opportunities and recommendations.",
        "evidence": "Contributed to engagements with Banco Azteca, Santander, Mercado Pago, and Banorte.",
        "badge": "Client Relationships"
    },
    {
        "title": "Measured Impact at Banco Azteca",
        "description": "Contributed to an initiative to reduce weekly outflows from an investment account.",
        "evidence": "Weekly outflows fell from MXN 50M to MXN 20M in three weeks, with no additional investment.",
        "badge": "60% Reduction"
    },
    {
        "title": "Financial Product Experience",
        "description": "Contributed to savings and investment product development and implementation, as well as payment solutions.",
        "evidence": "Experience at Compartamos Banco, Banco Azteca, and Visa.",
        "badge": "Financial Products"
    },
    {
        "title": "Cross-functional Coordination",
        "description": "Coordinates with business, operations, technology, and commercial teams.",
        "evidence": "Coordinated 20 testers during Citibank’s banking platform migration.",
        "badge": "Cross-functional"
    },
    {
        "title": "Customer Research & Innovation",
        "description": "Leads customer research, product discovery, co-creation, and validation activities.",
        "evidence": "Facilitated Design Sprints, co-creation workshops, and prototype validation at Women’s World Banking.",
        "badge": "Customer Discovery"
    }
],
    experiences: [
      {
        id: 'wwb',
        company: 'Women’s World Banking Inc.',
        role: 'Specialist, Business Development',
        location: 'New York / Mexico City',
        period: 'Jan 2020 – Dec 2024',
        startDate: '2020-01',
        endDate: '2024-12',
        sector: 'Financial Inclusion & Consulting',
        summary:
          'Contributed to opening and developing opportunities with financial institutions and fintechs across Latin America. Led customer research, product discovery, and innovation projects, moving initiatives from discovery through pilots and rollout.',
        responsibilities: [
          'Identified commercial needs and opportunities at financial institutions and fintechs through prospecting, market analysis, and client meetings, contributing to market development across Latin America.',
          'Developed consultative proposals and followed up on business opportunities; presented findings and recommendations to clients and executive leaders.',
          'Coordinated initiatives from discovery through pilots and rollout with Product, Operations, Technology, and Marketing teams.',
          'Led customer research, product discovery, and innovation projects to understand customer needs and inform digital product opportunities.',
          'Facilitated Design Sprints, co-creation workshops, and prototype validation sessions with multidisciplinary teams, using Women-Centered Design practices.',
          'Developed strategic recommendations based on customer insights, qualitative and quantitative research, market analysis, and business priorities.',
          'Supported Banorte in identifying opportunities to improve mobile app user experience (UX) and customer communication.',
          'Contributed to Mercado Pago’s assessment of credit product adoption, including a new communication strategy and timing.',
          'Supported Santander in analyzing customer perceptions of its mobile app and identifying UX improvement opportunities.',
        ],
        achievements: [
          'Contributed to consulting engagements for Banco Azteca, Santander, Mercado Pago, and Banorte focused on UX, digital products, and business opportunities.',
          
        ],
        technologies: ['Salesforce', 'HIVE', 'Financial Services', 'Digital Banking'],
        methodologies: ['Women-Centered Design', 'Design Sprints', 'Customer Research', 'Co-creation Workshops', 'Prototype Validation', 'Agile / Scrum', 'Qualitative & Quantitative Research'],
        consultingClients: ['Banco Azteca', 'Santander', 'Mercado Pago', 'Banorte'],
        reference: {
          name: 'Megan D. Baumann',
          role: 'Social-environmental Research',
          phone: '+1 (312) 771-7512',
        },
      },
      {
        id: 'visa',
        company: 'Visa',
        role: 'Manager, Consumer Products',
        location: 'Mexico City, Mexico',
        period: 'Jul 2019 – Dec 2019',
        transitionNote: 'Then accepted an opportunity at Women’s World Banking, an international organization supporting financial institutions; his project work focused on Latin America.',
        startDate: '2019-07',
        endDate: '2019-12',
        sector: 'Payments',
        summary:
          'Managed strategic initiatives for Visa consumer payment products in collaboration with issuing financial institutions and internal business units.',
        responsibilities: [
          'Coordinated cross-functional teams across Product, Business Development, Operations, Technology, and Commercial areas to support product initiatives.',
          'Collaborated with financial institutions to identify business opportunities and improve adoption of consumer payment solutions.',
          'Participated in product enhancement initiatives focused on improving customer value proposition and market competitiveness.',
          'Supported product planning activities including prioritization, implementation tracking, and stakeholder alignment.',
          'Prepared executive presentations and business recommendations for internal and external stakeholders.',
        ],
        achievements: [],
        technologies: ['Payment Schemes', 'Consumer Cards', 'Issuing Platforms'],
        methodologies: ['Stakeholder Alignment', 'Cross-functional Coordination', 'Business Case Validation'],
        reference: {
          name: 'Gerardo Ortiz',
          role: 'Support Service',
          phone: '+52 (55) 1362-7799',
        },
      },
      {
        id: 'compartamos',
        company: 'Compartamos Banco S.A. Institución de Banca Múltiple',
        role: 'Product Development Manager',
        location: 'Mexico City, Mexico',
        period: 'Feb 2015 – Jun 2019',
        transitionNote: 'Then accepted an opportunity at Visa to manage consumer payment products.',
        startDate: '2015-02',
        endDate: '2019-06',
        sector: 'Banking',
        summary:
          'Developed and implemented savings and investment products, coordinating activities from definition through implementation.',
        responsibilities: [
          'Led the end-to-end development of savings, investment, and transactional financial products from concept definition through market launch.',
          'Defined product strategy, value proposition, business requirements, business cases, feasibility assessments, and implementation plans.',
          'Led multidisciplinary teams across Business, Technology, Operations, Legal, Compliance, Risk, Finance, and Marketing.',
          'Coordinated with cross-functional teams across the bank.',
          'Coordinated solution design, technology development, User Acceptance Testing (UAT), production readiness, and go-to-market activities.',
          'Led governance meetings and executive committees, managing priorities, risks, dependencies, and stakeholder alignment.',
          'Ensured products complied with regulatory, operational, and internal governance requirements before market release.',
          'Monitored post-launch performance, business KPIs, and customer feedback, driving continuous product improvements.',
        ],
        achievements: [
          
          
        ],
        technologies: ['Core Banking Systems', 'Transactional Platforms', 'Savings & Investment Engines', 'UAT Management Tools'],
        methodologies: ['Product Development', 'Implementation Coordination', 'User Acceptance Testing'],
        
        reference: {
          name: 'Ana Gabriela García Zepeda',
          role: 'Director of Financial Products',
          phone: '+52 (55) 5402-4518',
        },
      },
      {
        id: 'azteca',
        company: 'Banco Azteca S.A. Institución de Banca Múltiple',
        role: 'Product Manager',
        location: 'Mexico City, Mexico',
        period: 'Jun 2013 – Feb 2015',
        transitionNote: 'His manager at Banco Azteca invited him to join Compartamos Banco to lead product development.',
        startDate: '2013-06',
        endDate: '2015-02',
        sector: 'Banking',
        summary:
          'Improved investment products and identified inconsistencies in product-development logic and expected functionality.',
        responsibilities: [
          'Managed financial-product performance and follow-up, identifying strategies to attract and retain customers.',
          'Identified inconsistencies in product-development logic and expected functionality; participated in requirements validation and system testing.',
          
          
          
        ],
        achievements: [
          'Following an interest-rate change, contributed to an initiative to reduce weekly outflows from the Inversion Azteca Creciente investment account.',
          'Weekly outflows fell from MXN 50M to MXN 20M within three weeks, a 60% reduction with no additional investment.',
          'Presented recommendations to stakeholders and monitored product performance.',
        ],
        technologies: ['Investment Products', 'Product Testing', 'Product Monitoring'],
        methodologies: ['Requirements Validation', 'Product Performance Monitoring', 'Stakeholder Recommendations'],
        reference: {
          name: 'Rosa Ramírez Galindo',
          role: 'Director of Financial Products',
          phone: '+52 (55) 2128-5522',
        },
      },
      {
        id: 'bansefi',
        company: 'Banco del Ahorro Nacional y Servicios Financieros S.N.C. (Bansefi)',
        role: 'Commercial Strategy Manager',
        location: 'Mexico City, Mexico',
        period: 'Nov 2009 – Jun 2013',
        transitionNote: 'Accepted an opportunity to lead investment products at Banco Azteca.',
        startDate: '2009-11',
        endDate: '2013-06',
        sector: 'Banking',
        summary:
          'Developed nationwide commercial strategies and incentive programs to improve product adoption, customer acquisition, and branch network performance.',
        responsibilities: [
          'Designed and executed sales campaigns and incentive programs to improve commercial performance across the nationwide branch network.',
          'Led strategic initiatives and cross-functional projects supporting the launch and growth of financial products.',
          'Monitored product KPIs, commercial performance, and sales trends, identifying opportunities to improve business results.',
          'Prepared executive reports and performance dashboards to support strategic decision-making.',
          'Coordinated initiatives across Commercial, Operations, Technology, and Product teams.',
        ],
        achievements: [
          
          ,
        ],
        technologies: ['Commercial Dashboards', 'Branch Network Systems', 'KPI Reporting Systems'],
        methodologies: ['Commercial Strategy', 'Incentive Programs', 'Sales Analytics', 'Stakeholder Management'],
        reference: {
          name: 'Esteban Adrián González Herrera',
          role: 'Deputy Director',
          phone: '+52 (55) 2271-6090',
        },
      },
      {
        id: 'sct',
        company: 'Secretaría de Comunicaciones y Transportes',
        role: 'Deputy Director Legal and Financial',
        location: 'Mexico City, Mexico',
        period: 'Apr 2008 – Nov 2009',
        startDate: '2008-04',
        endDate: '2009-11',
        sector: 'Public Sector',
        summary:
          'Coordinated high-profile strategic initiatives, ensuring rigorous alignment across government departments and external stakeholders.',
        responsibilities: [
          'Monitored project milestones, deliverables, risks, and performance indicators to support timely execution.',
          'Prepared executive reports, presentations, and analyses to support management decision-making.',
          'Collaborated with cross-functional teams to improve operational processes and project execution.',
          'Tracked project dependencies and implementation progress, proposing immediate corrective actions when needed.',
          'Supported planning activities and strategic coordination across the organization.',
        ],
        achievements: [
          
        ],
        technologies: ['Strategic Management Tools', 'Executive Reporting Frameworks'],
        methodologies: ['Project Governance', 'Risk Management', 'Public Sector Alignment'],
        reference: {
          name: 'Ricardo Martínez Ferrer',
          role: 'Deputy Director of Infrastructure',
          phone: '+52 (55) 3749-1854',
        },
      },
      {
        id: 'citi',
        company: 'Citibank',
        role: 'Business Support Coordinator',
        location: 'Barcelona, Spain',
        period: 'Oct 2004 – Feb 2006',
        startDate: '2004-10',
        endDate: '2006-02',
        sector: 'Banking',
        summary:
          'Primary operational contact for debit card services across Spain and test team coordinator during the bank’s major Core Banking platform migration.',
        responsibilities: [
          'Served as the primary operational contact for debit card services, supporting branch offices across Spain and resolving complex operational issues.',
          'Participated in the planning and execution of credit card marketing campaigns to support product growth and customer acquisition.',
          'Coordinated a team of 20 testers during migration to the bank’s new HTML-based core banking platform, ensuring testing activities were completed on time and according to quality standards.',
          'Resolved operational issues and removed blockers affecting the testing team, enabling continuous progress and minimizing project delays.',
          'Consolidated testing results, tracked defects, and prepared executive status reports for the project manager.',
          'Collaborated with Business, Operations, and Technology teams to ensure successful delivery of strategic technology initiatives.',
        ],
        achievements: [
          
        ],
        technologies: ['HTML-based Core Banking System', 'Debit Card Operational Systems', 'Defect Tracking Tools'],
        methodologies: ['UAT Testing Coordination', 'Operational Support', 'Incident Resolution', 'Defect Management'],
        scopeAndTeam: 'Direct coordination of 20 testers during the Core Banking migration project.',
      },
    ],
    projects: [
      {
        id: 'proj-azteca-retention',
        title: '“Azteca Creciente” Capital Retention Strategy',
        company: 'Banco Azteca',
        sector: 'Banking & Capital Retention',
        tagline: 'Reducing weekly investment account outflows by 60% within three weeks, with no additional investment.',
        problem:
          'Following an interest-rate change, the investment account saw weekly outflows of approximately MXN 50M.',
        solution:
          'Participated in product improvements and testing for Inversion Azteca Creciente.',
        roleContribution:
          'Participated in product requirements validation and testing, monitored performance, and presented recommendations.',
        technologies: ['Investment Platform', 'Debit Card Issuing', 'Branch Systems'],
        methodologies: ['Field Research', 'Product Enhancement', 'Crisis Management', 'Executive Alignment'],
        results:
          'Weekly outflows fell from MXN 50M to MXN 20M within three weeks, a 60% reduction with no additional investment.',
        metrics: {
          label: 'Weekly Outflow Reduction',
          value: '-60%',
        },
      },
      {
        id: 'proj-compartamos-products',
        title: 'Savings and Investment Product Development',
        company: 'Compartamos Banco',
        sector: 'Multiple Banking & Financial Inclusion',
        tagline: 'Definition, development, and market delivery of a full portfolio of savings, investment, and transactional products.',
        problem:
          'Need to expand the bank’s portfolio by introducing formal savings, investment, and transactional products for microfinance and mass-market clients.',
        solution:
          'Contributed to product strategy, requirements, design, development, UAT, and implementation activities.',
        roleContribution:
          'Coordinated with Business, Technology, Operations, Legal, Compliance, Risk, Finance, and Marketing.',
        technologies: ['Core Banking Engine', 'Savings & Investment Systems', 'Transactional Platform', 'UAT Tracking'],
        methodologies: ['Product Development', 'Implementation Coordination', 'User Acceptance Testing'],
        results:
          'Savings and investment products were developed and implemented, with post-launch follow-up.',
        metrics: {
          label: 'Product scope',
          value: 'Savings & Investment',
        },
      },
      {
        id: 'proj-wwb-consulting',
        title: 'Business Development & Opportunity Expansion in Latin America',
        company: 'Women’s World Banking',
        sector: 'Strategic Consulting & FinTech',
        tagline: 'Prospecting, opportunity identification, and consultative proposals for financial institutions across Latin America.',
        problem:
          'Financial institutions and fintechs needed to identify market needs and turn business opportunities into digital product and service initiatives.',
        solution:
          'Contributed to opening and developing opportunities through prospecting, client meetings, needs assessment, proposal development, and commercial follow-up. Complemented this work with customer research, product discovery, Design Sprints, and prototype validation.',
        roleContribution:
          'Business Development Specialist: presented proposals and recommendations to clients and executive leadership and coordinated initiatives from discovery through pilots and rollout with Product, Operations, Technology, and Marketing teams.',
        technologies: ['Financial Services', 'Digital Banking', 'Salesforce', 'HIVE'],
        methodologies: ['Women-Centered Design', 'Design Sprints', 'Customer Research', 'Co-creation Workshops', 'Prototype Validation', 'Qualitative & Quantitative Research'],
        results:
          'Consulting engagements for Banco Azteca, Santander, Mercado Pago, and Banorte covered UX, digital products, and business opportunities, including credit adoption and mobile app experience analysis.',
        metrics: {
          label: 'Client Institutions',
          value: '4 in LATAM',
        },
      },
      {
        id: 'proj-azteca-chambeador',
        title: 'Chambeador: Improvements for SuperAPP BAZ',
        company: 'Banco Azteca',
        sector: 'Digital Banking & UX',
        tagline: 'Identified improvement opportunities in Chambeador, most of which were carried into SuperAPP BAZ.',
        problem:
          'The project aimed to identify opportunities to improve Chambeador’s digital experience and functionality.',
        solution:
          'Contributed to product analysis and identified more than 100 improvement opportunities.',
        roleContribution:
          'Participated in analyzing and documenting opportunities so most could be carried into SuperAPP BAZ.',
        technologies: ['Digital Banking', 'SuperAPP BAZ'],
        methodologies: ['Product Analysis', 'Opportunity Identification'],
        results:
          'More than 100 improvement opportunities were identified; most were carried into the SuperAPP BAZ app.',
        metrics: { label: 'Improvements identified', value: '100+' },
      },
      {
        id: 'proj-banorte-app-adoption',
        title: 'Mobile App Adoption and Usage',
        company: 'Banorte',
        sector: 'Digital Banking & UX',
        tagline: 'Engagement focused on increasing user adoption and usage of the mobile app.',
        problem:
          'The project aimed to encourage more users to adopt and use Banorte’s mobile app.',
        solution:
          'Analyzed opportunities related to the app experience and adoption of its features.',
        roleContribution:
          'Contributed to identifying opportunities to encourage greater app adoption and usage.',
        technologies: ['Mobile App', 'Digital Banking'],
        methodologies: ['UX Analysis', 'Digital Adoption'],
        results: 'Work focused on increasing app adoption and usage among users.',
      },
      {
        id: 'proj-santander-app-ux',
        title: 'Mobile App UX Improvement Opportunities',
        company: 'Santander',
        sector: 'Digital Banking & UX',
        tagline: 'Identified opportunities to improve the user experience of the mobile app.',
        problem:
          'The project required understanding where Santander app users’ experience could be improved.',
        solution:
          'Reviewed the app experience to identify improvement opportunities from the user perspective.',
        roleContribution:
          'Contributed to identifying UX improvement opportunities for the mobile app.',
        technologies: ['Mobile App', 'Digital Banking'],
        methodologies: ['UX Evaluation', 'Experience Analysis'],
        results: 'Identified opportunities to improve the app’s UX.',
      },
      {
        id: 'proj-mercadopago-pos-credit',
        title: 'Business Credit Adoption through POS',
        company: 'Mercado Pago',
        sector: 'FinTech & Payments',
        tagline: 'Opportunities to increase credit adoption among businesses using Mercado Pago POS.',
        problem:
          'Mercado Pago aimed to increase adoption of its business credit among merchants using its POS terminal.',
        solution:
          'Analyzed adoption opportunities and supported a communication strategy and calendar to raise awareness of the credit offer.',
        roleContribution:
          'Contributed to identifying opportunities to connect Mercado Pago credit with businesses using POS.',
        technologies: ['Mercado Pago', 'POS', 'Business Credit'],
        methodologies: ['Adoption Analysis', 'Communication Strategy'],
        results: 'Engagement focused on increasing credit adoption among businesses using POS.',
      },
      {
        id: 'proj-citi-migration',
        title: 'Core Banking Platform Migration',
        company: 'Citibank Spain',
        sector: 'International Banking & IT',
        tagline: 'Testing coordination and quality assurance during the transition to an HTML-based core banking platform.',
        problem:
          'Citibank’s migration to a new core banking platform required coordinated testing across teams.',
        solution:
          'Coordinated a team of 20 testers, resolved operational bottlenecks in real time, tracked defect resolution, and delivered executive status dashboards.',
        roleContribution:
          'Test Team Coordinator and primary operational liaison for card services.',
        technologies: ['HTML Core Banking Platform', 'Defect Tracking Tools', 'Debit Card Systems'],
        methodologies: ['UAT Coordination', 'Defect Management', 'Incident Resolution'],
        results:
          'Coordinated 20 testers and tracked issues and test progress during the migration.',
        metrics: {
          label: 'Testing Team',
          value: '20 Testers',
        },
      },
    ],
    skillGroups: [
    {
        "category": "B2B Business Development",
        "highlight": true,
        "skills": [
            "B2B Business Development",
            "Prospecting & Opportunity Identification",
            "Consultative Selling",
            "Client Relationship Management",
            "Client Meetings & Needs Assessment",
            "Proposal Development & Presentation",
            "Commercial Opportunity Follow-up",
            "Salesforce",
            "HIVE"
        ]
    },
    {
        "category": "Product Development & Go-to-Market",
        "skills": [
            "Product Development",
            "End-to-End Product Development",
            "Product Strategy",
            "Business Case Development",
            "Product Roadmap",
            "Go-to-Market",
            "User Acceptance Testing (UAT)"
        ]
    },
    {
        "category": "Leadership, Analysis & Execution",
        "skills": [
            "Stakeholder Management",
            "Cross-functional Leadership",
            "Agile (Scrum)",
            "Market Analysis",
            "Customer Research",
            "Product Discovery",
            "Cross-functional Coordination",
            "Core Banking Migration"
        ]
    },
    {
        "category": "Financial Services & Banking",
        "skills": [
            "Financial Services",
            "Banking",
            "Consumer Payments",
            "Digital Banking",
            "Credit Product Adoption",
            "Savings & Investment Products"
        ]
    }
],
    industries: [
      {
        name: 'Commercial & Retail Banking',
        institutions: ['Citibank', 'Compartamos Banco', 'Banco Azteca', 'Bansefi', 'Santander', 'Banorte'],
        description: 'Savings, investment, credit products, and core banking system rollouts.',
      },
      {
        name: 'Payments & Card Schemes',
        institutions: ['Visa', 'Citibank', 'Banco Azteca'],
        description: 'Strategic consumer payment initiatives, debit issuance, and value-added payment features.',
      },
      {
        name: 'Financial Inclusion & Strategic Consulting',
        institutions: ['Women’s World Banking', 'Mercado Pago', 'Santander', 'Banorte'],
        description: 'Business development, customer research, digital banking, and credit adoption opportunities.',
      },
      {
        name: 'Public Sector & Governance',
        institutions: ['Ministry of Communications and Transportation (SCT)'],
        description: 'Inter-agency coordination, strategic risk monitoring, and executive governance.',
      },
    ],
    education: [
      {
        degree: 'AI & Digital Business Development',
        institution: 'Pau Martí | Skool',
        location: 'Executive Specialization',
        year: 'Jul 2026',
        
      },
      {
        degree: 'International Business - BA (Hons.)',
        institution: 'Nottingham Trent University',
        location: 'Nottingham, United Kingdom',
        year: 'Jul 2007',
        honors: 'Honours Degree (International Business)',
      },
    ],
    languages: [
      { language: 'Spanish' },
      { language: 'English' },
      { language: 'German' },
    ],
    recruiterSummary: {
    "title": "Recruiter Profile",
    "keyHighlights": [
         "17+ years across banking and financial services, with B2B business development and opportunity expansion experience.",
         "Prospecting, needs assessment, consultative proposals, and commercial follow-up with financial institutions.",
         "At Women’s World Banking, contributed to opening and developing opportunities in Latin America and coordinated initiatives with multidisciplinary teams.",
        "Reduced weekly outflows from an investment account by 60% in three weeks at Banco Azteca, with no additional investment.",
        "Proficient in Salesforce and HIVE; coordinated 20 testers during a core banking migration."
    ],
    "targetRoles": [
        "Senior Business Development Manager",
        "B2B Business Development in banking or fintech",
        "Financial Services Client Relationships",
        "Financial Services Consulting"
    ]
},
    ui: {
      nav: {
        about: 'Profile',
        snapshot: 'Snapshot',
        whyMe: 'Why Me',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        industries: 'Industries',
        education: 'Education',
        contact: 'Contact',
        recruiterMode: 'Recruiter Mode',
        recruiterModeShort: 'Recruiter',
        downloadCv: 'Download CV',
      },
      hero: {
        badge: 'Business Development | Financial Services',
        ctaContact: 'Get in Touch',
        ctaDownload: 'Download CV (PDF)',
        viewExperience: 'Explore Career',
        experienceBadge: 'Years of Experience',
      },
      snapshot: {
        title: 'Professional Snapshot',
        subtitle: 'Key career metrics backed by 17+ years of real-world impact',
      },
      whyMe: {
        title: 'Why Gerardo Pedroza?',
        subtitle: 'B2B business development, client relationships, and financial services experience',
      },
      experience: {
        title: 'Professional Experience',
        subtitle: 'Leadership across global financial institutions, multiple banking, and innovation consulting',
        expandDetails: 'View details & impact',
        collapseDetails: 'Hide details',
        responsibilitiesTitle: 'Key Responsibilities',
        achievementsTitle: 'Key Achievements & Outcomes',
        technologiesTitle: 'Technologies & Systems',
        methodologiesTitle: 'Methodologies & Leadership',
        clientsTitle: 'Consulting Clients',
        referenceTitle: 'CV Reference Contact',
        transitionTitle: 'Reason for transition',
      },
      projects: {
        title: 'Featured Business Cases',
        subtitle: 'Contributions to business, financial product, and digital banking initiatives',
        viewProject: 'View Business Case',
        closeModal: 'Close Detail',
        problemTitle: 'The Challenge / Problem',
        solutionTitle: 'The Strategic Solution',
        roleTitle: 'My Role & Leadership',
        resultsTitle: 'Results & Key Metrics',
      },
      skills: {
        title: 'Skills & Capabilities',
        subtitle: 'Categorized by domain without arbitrary subjective percentages',
      },
      industries: {
        title: 'Industry Expertise',
        subtitle: 'Proven track record across banking, payments, consulting, and public governance',
      },
      education: {
        title: 'Education & Languages',
        subtitle: 'International academic background and language proficiencies',
        educationSection: 'University Degree',
        languagesSection: 'Languages',
      },
      recruiter: {
        badge: 'Fast Screening Mode (30-Second Review)',
        heading: 'Executive Summary for Hiring Managers',
        subheading: 'High-density view optimized for fast candidate evaluation',
        yearsBadge: '17+ Years of Experience',
        contactFast: 'Direct Contact',
        copyEmail: 'Copy Email',
        copied: 'Copied!',
        closeBanner: 'Return to Full View',
      },
      contact: {
        title: 'Let’s Connect',
        subtitle: 'Business development and financial services experience',
        emailLabel: 'Email Address',
        phoneLabel: 'Direct Phone',
        locationLabel: 'Location',
        linkedinLabel: 'LinkedIn Profile',
        sendEmail: 'Send an Email',
        callDirect: 'Call Directly',
        viewLinkedin: 'View LinkedIn Profile',
        downloadCvPrompt: 'Prefer the traditional format?',
        downloadCvBtn: 'Download Official CV in PDF',
      },
      footer: {
        rights: 'All rights reserved. Information derived strictly from the official CV.',
        top: 'Back to top',
      },
    },
  },
};

export type Language = 'es' | 'en';

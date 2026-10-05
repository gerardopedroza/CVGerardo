export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
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
  level: string;
  proficiencyScore: string;
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
    headline: 'Líder en Desarrollo de Productos Financieros, Pagos y Transformación Digital',
    subheadline: '17+ años transformando problemas de negocio y cliente en productos bancarios escalables, estrategias comerciales y soluciones digitales de alto impacto.',
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
        number: '17+',
        label: 'Años de Experiencia',
        description: 'En banca, medios de pago, inclusión financiera y desarrollo de productos.',
      },
      {
        number: '60%',
        label: 'Reducción de Fuga Semanal',
        description: 'De MXN $50M a $20M en Banco Azteca con estrategia de débito para inversión.',
      },
      {
        number: '4',
        label: 'Productos Bancarios Lanzados',
        description: 'Como Product Owner end-to-end (ahorro, inversión y transaccionales) en Compartamos.',
      },
      {
        number: '20',
        label: 'Testers Coordinados',
        description: 'En la migración a la nueva plataforma de Core Banking en Citibank España.',
      },
      {
        number: '8+',
        label: 'Grandes Instituciones',
        description: 'Citi, Visa, Compartamos, Azteca, Bansefi + Consultorías con Santander, Mercado Pago, Banorte.',
      },
    ],
    executiveSummary:
      'Profesional de Desarrollo de Negocios y Servicios Financieros con más de 17 años de experiencia liderando el diseño, desarrollo e implementación de productos financieros e iniciativas digitales en banca, pagos y organizaciones de inclusión financiera. Experto en identificar problemas de clientes y de negocio, coordinar equipos multidisciplinarios (Negocio, Tecnología, Operaciones, Legal, Riesgo, Compliance y Finanzas), definir estrategias de producto y liderar lanzamientos end-to-end con metodologías ágiles. Actualmente especializándose en Inteligencia Artificial para potenciar la intersección entre estrategia de negocio, tecnología, datos e IA.',
    aiFocusStatement:
      'Especializándose activamente en Inteligencia Artificial para fortalecer la intersección de negocio, tecnología, datos e IA aplicada a servicios financieros.',
    whyMe: [
      {
        title: 'Liderazgo de Producto End-to-End Comprobado',
        description: 'Supervisión completa del ciclo de vida del producto: desde customer research, business cases y comités de gobierno hasta UAT, go-to-market y optimización post-lanzamiento.',
        evidence: 'Product Owner de 4 productos bancarios en Compartamos y coordinación de iniciativas clave en Visa y Banco Azteca.',
        badge: 'Product Lifecycle',
      },
      {
        title: 'Impacto Cuantitativo en Retención y Rentabilidad',
        description: 'Capacidad analítica para diagnosticar anomalías de negocio y diseñar soluciones tácticas de rápida implementación sin requerir presupuestos adicionales.',
        evidence: 'Reducción de fuga de capital en un 60% (salvando ~MXN $30M semanales) para la cuenta Azteca Creciente.',
        badge: 'ROI & Resultados',
      },
      {
        title: 'Visión Multi-Institucional y de Consultoría de Alto Nivel',
        description: 'Experiencia directa en gigantes globales y bancos líderes, sumada a consultorías estratégicas con líderes fintech y banca tradicional.',
        evidence: 'Colaboración con Visa, Citi, Santander, Mercado Pago, Banorte, Compartamos Banco y Bansefi.',
        badge: 'Ecosistema Financiero',
      },
      {
        title: 'Innovación Centrada en el Usuario & Design Sprints',
        description: 'Facilitación de workshops de co-creación, prototipado rápido y validación con usuarios utilizando metodologías Women-Centered Design y Agile.',
        evidence: '5 años liderando proyectos de innovación e investigación en Women’s World Banking en toda América Latina.',
        badge: 'User Research & Innovation',
      },
      {
        title: 'Alineación Ejecutiva y Gobernanza Transversal',
        description: 'Liderazgo natural de mesas multidisciplinarias y comités ejecutivos, alineando prioridades técnicas, comerciales, legales y regulatorias.',
        evidence: 'Presentaciones periódicas a comités directivos y equipos C-Level en México y LATAM.',
        badge: 'Executive Stakeholder Mgmt',
      },
      {
        title: 'Visión Tecnológica Futura: Estrategia + Datos + IA',
        description: 'Enfoque continuo en modernización tecnológica, desde migraciones de Core Banking hasta la integración de Inteligencia Artificial en productos financieros.',
        evidence: 'Formación internacional en Reino Unido (BA Hons) y especialización continua en IA aplicada a negocio.',
        badge: 'AI & Modern Tech',
      },
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
          'Lideró proyectos de investigación de clientes, product discovery e innovación para instituciones financieras en América Latina aplicando la metodología Women-Centered Design.',
        responsibilities: [
          'Facilitó Design Sprints, talleres de co-creación y sesiones de validación de prototipos con equipos multidisciplinarios.',
          'Coordinó iniciativas de desarrollo de producto end-to-end desde el customer research hasta la implementación piloto y despliegue masivo (rollout).',
          'Condujo investigación cualitativa y cuantitativa para identificar oportunidades de mercado y necesidades insatisfechas de los usuarios.',
          'Desarrolló recomendaciones estratégicas fundamentadas en insights de clientes, análisis competitivo y prioridades de negocio.',
          'Presentó hallazgos, roadmaps y recomendaciones de producto al liderazgo ejecutivo de bancos y organizaciones cliente.',
          'Trabajó estrechamente con áreas de Producto, Operaciones, Tecnología, Marketing y stakeholders ejecutivos para asegurar la viabilidad de implementación.',
        ],
        achievements: [
          'Ejecutó proyectos de consultoría estratégica para clientes de primer nivel: Santander, Mercado Pago, Banorte y Banco Azteca enfocados en experiencia de cliente (CX), productos digitales y oportunidades de negocio.',
          'Diseñó e implementó soluciones financieras centradas en el usuario que impulsaron la inclusión y adopción digital en la región.',
        ],
        technologies: ['Design Sprints', 'Women-Centered Design', 'Customer Discovery Frameworks', 'Qualitative & Quantitative Analytics'],
        methodologies: ['Agile / Scrum', 'Design Thinking', 'Co-creation Workshops', 'Prototype Validation'],
        consultingClients: ['Santander', 'Mercado Pago', 'Banorte', 'Banco Azteca'],
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
        achievements: [
          'Alineación y habilitación de nuevos casos de uso y valor añadido en el portafolio de medios de pago para emisores bancarios clave en México.',
        ],
        technologies: ['Payment Schemes', 'Consumer Cards', 'Issuing Platforms'],
        methodologies: ['Stakeholder Alignment', 'Cross-functional Coordination', 'Business Case Validation'],
        reference: {
          name: 'Erika Granados',
          role: 'Business Development - Payments',
          phone: '+52 (55) 2962-5761',
        },
      },
      {
        id: 'compartamos',
        company: 'Compartamos Banco S.A. Institución de Banca Múltiple',
        role: 'Product Development Manager',
        location: 'Ciudad de México, México',
        period: 'Feb 2015 – Jun 2019',
        startDate: '2015-02',
        endDate: '2019-06',
        sector: 'Banking',
        summary:
          'Actuó como Product Owner para cuatro productos bancarios, dirigiendo el desarrollo end-to-end de productos financieros de ahorro, inversión y transaccionales desde el concepto hasta el mercado.',
        responsibilities: [
          'Definió la estrategia de producto, propuesta de valor, requerimientos de negocio, business cases, evaluaciones de viabilidad y planes de implementación.',
          'Lideró equipos multidisciplinarios a través de Negocio, Tecnología, Operaciones, Legal, Compliance, Riesgo, Finanzas y Marketing.',
          'Gestionó directamente un equipo de 2–3 personas mientras coordinaba grupos transversales extensos en toda la institución.',
          'Coordinó el diseño de soluciones, desarrollo tecnológico, Pruebas de Aceptación de Usuario (UAT), preparación para producción y actividades de go-to-market.',
          'Lideró comités ejecutivos y reuniones de gobierno para gestionar prioridades, mitigar riesgos y asegurar la alineación de dependencias.',
          'Aseguró que todos los productos cumplieran con los rigurosos estándares regulatorios, operativos y de gobernanza interna antes de su liberación al mercado.',
          'Monitoreó el desempeño post-lanzamiento, KPIs de negocio y retroalimentación de clientes para aplicar mejoras continuas.',
        ],
        achievements: [
          'Lanzamiento exitoso al mercado de 4 productos bancarios (ahorro, inversión y transaccionales) cumpliendo al 100% las normativas financieras y los objetivos comerciales de captación.',
          'Establecimiento de un marco de gobernanza y UAT robusto para acelerar el ciclo de desarrollo sin comprometer la seguridad ni el cumplimiento.',
        ],
        technologies: ['Core Banking Systems', 'Transactional Platforms', 'Savings & Investment Engines', 'UAT Management Tools'],
        methodologies: ['Agile / Scrum', 'Product Ownership', 'Executive Governance', 'Regulatory Compliance'],
        scopeAndTeam: 'Gestión directa de 2-3 colaboradores y liderazgo de equipos transversales multifuncionales.',
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
        startDate: '2013-06',
        endDate: '2015-02',
        sector: 'Banking',
        summary:
          'Lideró la gestión y optimización de productos financieros, destacando el rescate de flujos de capital masivos ante fluctuaciones en tasas de interés.',
        responsibilities: [
          'Gestionó el rendimiento de productos financieros y definió estrategias de atracción y retención de clientes.',
          'Lideró investigación de clientes, análisis competitivo y validación de producto para identificar oportunidades de mercado y mejorar la experiencia del usuario.',
          'Definió estrategia de producto, propuesta de valor, especificaciones funcionales y planes de implementación.',
          'Coordinó comités multidisciplinarios (Negocio, Tecnología, Operaciones, Legal, Riesgo y Marketing) a lo largo del ciclo de vida del producto.',
          'Coordinó pruebas UAT, preparación para producción y estrategias de go-to-market.',
        ],
        achievements: [
          'Ante un cambio de tasas de interés que generó una fuga semanal de ~MXN $50M en productos de inversión, ejecutó investigación en sucursales sin presupuesto adicional y diseñó una estrategia de upgrade a tarjeta de débito para la cuenta de inversión "Azteca Creciente".',
          'La estrategia redujo las salidas semanales de ~MXN $50M a MXN $20M, logrando una reducción del 60% en la pérdida semanal de capital.',
          'Presentó los resultados e implicaciones de negocio a comités directivos ejecutivos y coordinó la ejecución transversal inmediata.',
        ],
        technologies: ['Branch POS & Systems', 'Debit Card Issuing', 'Investment Accounts Platform', 'Retention Analytics'],
        methodologies: ['Customer Research', 'Root-Cause Analysis', 'Cross-functional Execution', 'Product Enhancement'],
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
          'Impulso significativo en la adopción de productos de ahorro y servicios financieros en sectores populares y red de sucursales en México.',
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
          'Alineación y cumplimiento en tiempo de hitos e iniciativas estratégicas del sector infraestructura y comunicaciones.',
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
        methodologies: ['Investigación en Campo', 'Product Enhancement', 'Gestión de Crisis', 'Alineación Ejecutiva'],
        results:
          'Reducción de las fugas semanales de MXN $50M a MXN $20M, logrando un 60% de reducción en la pérdida semanal de capital (~MXN $30M semanales salvados para el banco).',
        metrics: {
          label: 'Reducción de Fuga Semanal',
          value: '-60%',
        },
      },
      {
        id: 'proj-compartamos-products',
        title: 'Lanzamiento End-to-End de 4 Productos Bancarios',
        company: 'Compartamos Banco',
        sector: 'Banca Múltiple e Inclusión',
        tagline: 'Definición, desarrollo y puesta en producción de un portafolio de ahorro, inversión y transaccionales.',
        problem:
          'Necesidad de diversificar la oferta financiera de la institución mediante productos estructurados de ahorro, inversión y transaccionales para segmentos masivos y de inclusión.',
        solution:
          'Como Product Owner, dirigió todo el ciclo de vida de los 4 productos: desde la formulación de business cases, propuesta de valor y requerimientos funcionales, hasta la dirección de comités de gobernanza, pruebas UAT y preparación operativa.',
        roleContribution:
          'Product Owner integral: gestión directa de 2-3 colaboradores, liderazgo de mesas con Negocio, IT, Operaciones, Legal, Cumplimiento, Riesgos y Finanzas, asegurando aprobación regulatoria y lanzamiento comercial.',
        technologies: ['Core Bancario', 'Motores de Ahorro e Inversión', 'Sistemas Transaccionales', 'Herramientas UAT'],
        methodologies: ['Agile / Scrum', 'Gobernanza Ejecutiva', 'Gestión de Riesgos y Compliance', 'Go-to-Market'],
        results:
          '4 productos bancarios operativos y lanzados exitosamente con cumplimiento normativo total y altos estándares de adopción.',
        metrics: {
          label: 'Productos Lanzados',
          value: '4 Productos',
        },
      },
      {
        id: 'proj-wwb-consulting',
        title: 'Innovación y Discovery de Productos en LATAM',
        company: 'Women’s World Banking',
        sector: 'Consultoría Estratégica & Fintech',
        tagline: 'Proyectos de investigación centrada en el usuario y Design Sprints para Santander, Mercado Pago, Banorte y Azteca.',
        problem:
          'Bancos y fintechs líderes en América Latina requerían diseñar o mejorar productos digitales para incrementar la inclusión, adquisición y retención de segmentos clave.',
        solution:
          'Facilitación de Design Sprints, talleres de co-creación y sesiones de validación de prototipos con equipos multidisciplinarios basados en la metodología Women-Centered Design.',
        roleContribution:
          'Especialista en Business Development: conducción de investigación cualitativa y cuantitativa, articulación de recomendaciones estratégicas y presentación de soluciones a directivos de alto nivel.',
        technologies: ['Women-Centered Design Framework', 'Herramientas de Co-Creación', 'Modelos de Validación Rápida'],
        methodologies: ['Design Sprints', 'Customer Research', 'Consultoría Estratégica', 'Prototipado Ágil'],
        results:
          'Recomendaciones estratégicas y hojas de ruta adoptadas por entidades como Santander, Mercado Pago, Banorte y Banco Azteca para el despliegue de soluciones digitales.',
        metrics: {
          label: 'Clientes Clave en LATAM',
          value: '4 Gigantes',
        },
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
        category: 'Desarrollo de Producto & Estrategia',
        highlight: true,
        skills: [
          'End-to-End Product Development',
          'Product Strategy',
          'Product Discovery',
          'Business Case Development',
          'Product Roadmap',
          'Go-to-Market (GTM)',
          'Agile (Scrum)',
          'User Acceptance Testing (UAT)',
          'Value Proposition Design',
          'Design Sprints',
          'Customer Journey Mapping',
        ],
      },
      {
        category: 'Liderazgo & Desarrollo de Negocios',
        skills: [
          'Business Development',
          'Consultative Selling',
          'Executive Stakeholder Management',
          'Cross-functional Leadership',
          'Commercial Strategy',
          'Incentive Programs & Sales Campaigns',
          'Executive Committees & Governance',
          'Client Presentation & Negotiation',
        ],
      },
      {
        category: 'Dominio Financiero & Bancario',
        skills: [
          'Financial Services',
          'Banking Operations',
          'Payment Schemes & Methods',
          'Debit & Credit Cards',
          'Savings & Investment Products',
          'Financial Inclusion',
          'Regulatory Compliance & Risk',
          'Transactional Systems',
        ],
      },
      {
        category: 'Innovación, Datos & IA',
        skills: [
          'Artificial Intelligence & Emerging Tech',
          'Data-Driven Decision Making',
          'Core Banking Migration',
          'Market Analysis & Research',
          'KPI Reporting & Dashboards',
          'Women-Centered Design',
          'Digital Transformation',
        ],
      },
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
        description: 'Customer discovery, design sprints e innovación para ampliar el acceso a servicios financieros.',
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
        location: 'Online / Especialización Ejecutiva',
        year: '2026 – En curso (Jul 2027)',
        honors: 'Especialización Avanzada en Inteligencia Artificial y Negocios Digitales',
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
      {
        language: 'Español',
        level: 'Nativo',
        proficiencyScore: 'Native',
      },
      {
        language: 'Inglés',
        level: 'B2 (Competencia Profesional)',
        proficiencyScore: 'B2 Level',
      },
      {
        language: 'Alemán',
        level: 'A2 (Básico / Elemental)',
        proficiencyScore: 'A2 Level',
      },
    ],
    recruiterSummary: {
      title: 'Perfil Ejecutivo Resumido (Screening en 30s)',
      keyHighlights: [
        '17+ años de trayectoria en Banca, Medios de Pago e Inclusión Financiera.',
        'Experiencia directa comprobada en Visa, Citi, Compartamos, Azteca, Bansefi y consultoría con Santander, Mercado Pago y Banorte.',
        'Historial de resultados medibles: -60% en fuga de capital (~MXN $30M/sem salvados) y 4 productos bancarios lanzados como Product Owner.',
        'Especialización actual en Inteligencia Artificial para la intersección de negocio, tecnología y finanzas.',
        'Educación internacional en el Reino Unido (BA Hons. en International Business en Nottingham Trent University).',
      ],
      targetRoles: [
        'Head of Product / Director de Producto',
        'VP / Senior Manager de Desarrollo de Negocios FinTech / Banca',
        'Principal Product Manager - Pagos / Banking',
        'Líder de Transformación Digital e Innovación Financiera',
      ],
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
        badge: 'Disponible para Liderazgo en Producto & FinTech',
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
        subtitle: 'Propuesta de valor ejecutiva fundamentada en trayectoria comprobada y resultados reales',
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
      },
      projects: {
        title: 'Proyectos Destacados',
        subtitle: 'Iniciativas reales con impacto en negocio, retención y transformación tecnológica',
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
        subtitle: 'Disponible para oportunidades de liderazgo en Producto, FinTech, Pagos y Transformación Digital',
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
    headline: 'Financial Products, Payments & Digital Transformation Leader',
    subheadline: '17+ years turning customer and business problems into scalable banking products, commercial strategies, and high-impact digital initiatives.',
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
        number: '17+',
        label: 'Years of Experience',
        description: 'Across banking, payments, financial inclusion, and product development.',
      },
      {
        number: '60%',
        label: 'Outflow Loss Reduction',
        description: 'From ~MXN $50M to $20M weekly loss at Banco Azteca via debit card upgrade.',
      },
      {
        number: '4',
        label: 'Banking Products Launched',
        description: 'As end-to-end Product Owner (savings, investments, transactional) at Compartamos.',
      },
      {
        number: '20',
        label: 'Testers Coordinated',
        description: 'During Core Banking platform migration at Citibank Spain.',
      },
      {
        number: '8+',
        label: 'Top Financial Institutions',
        description: 'Citi, Visa, Compartamos, Azteca, Bansefi + Consulting with Santander, Mercado Pago, Banorte.',
      },
    ],
    executiveSummary:
      'Product Development and Financial Services professional with 17+ years of experience leading the design, development, and implementation of financial products and digital initiatives across banking, payments, and financial inclusion organizations. Experienced identifying customer and business problems, coordinating cross-functional teams (Business, Tech, Operations, Legal, Risk, Compliance, and Finance), defining product strategy, managing executive stakeholders, and delivering end-to-end product launches using agile methodologies. Currently specializing in Artificial Intelligence to strengthen the intersection of business strategy, technology, data, and AI.',
    aiFocusStatement:
      'Currently specializing in Artificial Intelligence to connect business strategy, technology, data, and AI applied to financial services.',
    whyMe: [
      {
        title: 'Proven End-to-End Product Leadership',
        description: 'Full oversight of the product lifecycle: from customer research, business cases, and governance committees to UAT, go-to-market, and post-launch optimization.',
        evidence: 'Product Owner for 4 banking products at Compartamos Banco and key initiatives at Visa and Banco Azteca.',
        badge: 'Product Lifecycle',
      },
      {
        title: 'Measurable Financial & Retention Impact',
        description: 'Analytical mindset able to pinpoint business leakages and implement immediate tactical product solutions without requiring dedicated marketing budgets.',
        evidence: 'Reduced weekly capital outflows by 60% (saving ~MXN $30M/week) for the Azteca Creciente investment account.',
        badge: 'ROI & Metrics',
      },
      {
        title: 'Multi-Institutional & Top-Tier Consulting Pedigree',
        description: 'Direct corporate experience in global giants and leading banks, complemented by strategic consulting for major regional FinTech and banking leaders.',
        evidence: 'Engagements with Visa, Citi, Santander, Mercado Pago, Banorte, Compartamos Banco, and Bansefi.',
        badge: 'Financial Ecosystem',
      },
      {
        title: 'Human-Centered Innovation & Design Sprints',
        description: 'Facilitating co-creation workshops, rapid prototyping, and customer validation sessions using Women-Centered Design and Agile methodologies.',
        evidence: '5 years directing innovation and research initiatives across Latin America at Women’s World Banking.',
        badge: 'User Research & Innovation',
      },
      {
        title: 'Executive Governance & Cross-Functional Alignment',
        description: 'Natural bridge between C-Suite committees and multidisciplinary teams, aligning technical, commercial, risk, and regulatory priorities.',
        evidence: 'Regularly presents findings and strategic roadmaps to executive leadership across Latin America.',
        badge: 'Executive Stakeholder Mgmt',
      },
      {
        title: 'Future-Proof Tech Vision: Strategy + Data + AI',
        description: 'Continuous dedication to technology modernization, from Core Banking migrations to the integration of Artificial Intelligence into financial services.',
        evidence: 'International education in the UK (BA Hons) and ongoing specialization in AI applied to business.',
        badge: 'AI & Modern Tech',
      },
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
          'Led customer research, product discovery, and innovation projects for financial institutions across Latin America using Women-Centered Design methodology.',
        responsibilities: [
          'Facilitated Design Sprints, co-creation workshops, and prototype validation sessions with multidisciplinary teams.',
          'Coordinated end-to-end product development initiatives from customer research through pilot implementation and rollout.',
          'Conducted qualitative and quantitative research to identify market opportunities and unmet customer needs.',
          'Developed strategic recommendations based on customer insights, market analysis, and business priorities.',
          'Presented findings and product recommendations to executive leadership and client organizations.',
          'Worked closely with Product, Operations, Technology, Marketing, and Executive stakeholders to ensure successful implementation.',
        ],
        achievements: [
          'Consulting engagements included Santander, Mercado Pago, Banorte, and Banco Azteca, focused on customer experience, digital products, and business opportunities.',
          'Delivered actionable product roadmaps driving digital adoption and financial inclusion across Latin American markets.',
        ],
        technologies: ['Design Sprints', 'Women-Centered Design', 'Customer Discovery Frameworks', 'Qualitative & Quantitative Analytics'],
        methodologies: ['Agile / Scrum', 'Design Thinking', 'Co-creation Workshops', 'Prototype Validation'],
        consultingClients: ['Santander', 'Mercado Pago', 'Banorte', 'Banco Azteca'],
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
        achievements: [
          'Strengthened issuer alignment and enabled expanded consumer payment use cases across key financial partners in Mexico.',
        ],
        technologies: ['Payment Schemes', 'Consumer Cards', 'Issuing Platforms'],
        methodologies: ['Stakeholder Alignment', 'Cross-functional Coordination', 'Business Case Validation'],
        reference: {
          name: 'Erika Granados',
          role: 'Business Development - Payments',
          phone: '+52 (55) 2962-5761',
        },
      },
      {
        id: 'compartamos',
        company: 'Compartamos Banco S.A. Institución de Banca Múltiple',
        role: 'Product Development Manager',
        location: 'Mexico City, Mexico',
        period: 'Feb 2015 – Jun 2019',
        startDate: '2015-02',
        endDate: '2019-06',
        sector: 'Banking',
        summary:
          'Acted as Product Owner for four banking products, defining, coordinating, and supervising the full product-development lifecycle from concept through implementation, launch, and follow-up.',
        responsibilities: [
          'Led the end-to-end development of savings, investment, and transactional financial products from concept definition through market launch.',
          'Defined product strategy, value proposition, business requirements, business cases, feasibility assessments, and implementation plans.',
          'Led multidisciplinary teams across Business, Technology, Operations, Legal, Compliance, Risk, Finance, and Marketing.',
          'Directly managed teams of 2–3 people while coordinating larger cross-functional groups across the bank.',
          'Coordinated solution design, technology development, User Acceptance Testing (UAT), production readiness, and go-to-market activities.',
          'Led governance meetings and executive committees, managing priorities, risks, dependencies, and stakeholder alignment.',
          'Ensured products complied with regulatory, operational, and internal governance requirements before market release.',
          'Monitored post-launch performance, business KPIs, and customer feedback, driving continuous product improvements.',
        ],
        achievements: [
          'Successfully brought 4 banking products to market (savings, investments, transactional) with 100% regulatory compliance and strong deposit growth.',
          'Established robust UAT and governance workflows that accelerated time-to-market without compromising operational security.',
        ],
        technologies: ['Core Banking Systems', 'Transactional Platforms', 'Savings & Investment Engines', 'UAT Management Tools'],
        methodologies: ['Agile / Scrum', 'Product Ownership', 'Executive Governance', 'Regulatory Compliance'],
        scopeAndTeam: 'Direct management of 2–3 team members and leadership over large cross-functional groups.',
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
        startDate: '2013-06',
        endDate: '2015-02',
        sector: 'Banking',
        summary:
          'Managed financial-product performance and customer retention, spearheading high-impact capital loss prevention under zero-budget constraints.',
        responsibilities: [
          'Managed financial-product performance and follow-up, identifying strategies to attract and retain customers.',
          'Led customer research, competitive analysis, and product validation to identify market opportunities and improve customer experience.',
          'Defined product strategy, value proposition, functional specifications, and implementation plans.',
          'Coordinated cross-functional teams across Business, Technology, Operations, Legal, Risk, and Marketing throughout the product lifecycle.',
          'Coordinated User Acceptance Testing (UAT), production readiness, and go-to-market rollouts.',
        ],
        achievements: [
          'Following an interest-rate change in investment products, identified approximately MXN 50M in weekly outflows. With no dedicated budget, conducted branch-level customer research and developed a debit-card upgrade strategy for the Azteca Creciente investment account.',
          'The strategy reduced weekly outflows from ~MXN 50M to MXN 20M, achieving a 60% reduction in weekly capital loss (~MXN 30M/week saved).',
          'Presented findings, product recommendations, and business implications to executive stakeholders and coordinated implementation with multidisciplinary teams.',
        ],
        technologies: ['Branch POS & Systems', 'Debit Card Issuing', 'Investment Accounts Platform', 'Retention Analytics'],
        methodologies: ['Customer Research', 'Root-Cause Analysis', 'Cross-functional Execution', 'Product Enhancement'],
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
          'Drove substantial gains in savings product adoption across underserved segments through nationwide branch network campaigns.',
          'Delivered executive performance dashboards unifying commercial visibility for top leadership.',
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
          'Ensured on-time milestone delivery and regulatory adherence across key infrastructure and communications projects.',
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
          'Flawless cutover to the new HTML-based Core Banking platform with 20 testers managed and zero operational disruption.',
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
        tagline: 'Mitigating massive weekly capital outflows post-rate shift through agile debit-card product enhancement.',
        problem:
          'Following an interest-rate change in investment products, the bank suffered massive weekly outflows of ~MXN $50 Million, threatening core deposits.',
        solution:
          'With no marketing budget, conducted branch-level customer research to uncover user intent. Designed and launched a debit-card upgrade strategy for the Azteca Creciente investment account, providing liquidity and immediate transaction value.',
        roleContribution:
          'Led root-cause diagnosis, in-branch research, product solution design, executive presentation to leadership, and cross-functional implementation rollout.',
        technologies: ['Investment Platform', 'Debit Card Issuing', 'Branch Systems'],
        methodologies: ['Field Research', 'Product Enhancement', 'Crisis Management', 'Executive Alignment'],
        results:
          'Reduced weekly outflows from ~MXN $50M to MXN $20M, securing a 60% reduction in weekly capital losses (~MXN $30M saved per week).',
        metrics: {
          label: 'Weekly Outflow Reduction',
          value: '-60%',
        },
      },
      {
        id: 'proj-compartamos-products',
        title: 'End-to-End Launch of 4 Banking Products',
        company: 'Compartamos Banco',
        sector: 'Multiple Banking & Financial Inclusion',
        tagline: 'Definition, development, and market delivery of a full portfolio of savings, investment, and transactional products.',
        problem:
          'Need to expand the bank’s portfolio by introducing formal savings, investment, and transactional products for microfinance and mass-market clients.',
        solution:
          'Served as dedicated Product Owner for the entire lifecycle of 4 products: defining value propositions, business cases, functional specs, leading governance committees, and supervising UAT and market rollout.',
        roleContribution:
          'Product Owner: managed 2-3 direct reports, led cross-functional tables (Business, IT, Operations, Legal, Risk, Compliance, Finance), ensuring regulatory approval.',
        technologies: ['Core Banking Engine', 'Savings & Investment Systems', 'Transactional Platform', 'UAT Tracking'],
        methodologies: ['Agile / Scrum', 'Executive Governance', 'Risk & Compliance Management', 'Go-to-Market'],
        results:
          '4 banking products successfully released to production with 100% regulatory compliance and high customer adoption.',
        metrics: {
          label: 'Products Launched',
          value: '4 Products',
        },
      },
      {
        id: 'proj-wwb-consulting',
        title: 'FinTech & Banking Product Innovation across LATAM',
        company: 'Women’s World Banking',
        sector: 'Strategic Consulting & FinTech',
        tagline: 'Customer-centered discovery and Design Sprints for Santander, Mercado Pago, Banorte, and Azteca.',
        problem:
          'Leading financial institutions and fintechs across Latin America sought to redesign digital products to accelerate financial inclusion, customer acquisition, and retention.',
        solution:
          'Facilitated Design Sprints, co-creation workshops, and rapid prototype validation sessions using Women-Centered Design frameworks.',
        roleContribution:
          'Business Development Specialist: conducted field research, articulated strategic recommendations, and pitched roadmaps to executive leadership.',
        technologies: ['Women-Centered Design Framework', 'Co-Creation Tooling', 'Rapid Validation Models'],
        methodologies: ['Design Sprints', 'Customer Research', 'Strategic Consulting', 'Agile Prototyping'],
        results:
          'Delivered strategic roadmaps and actionable product specifications adopted by top institutions including Santander, Mercado Pago, Banorte, and Azteca.',
        metrics: {
          label: 'Top LATAM Clients',
          value: '4 Giants',
        },
      },
      {
        id: 'proj-citi-migration',
        title: 'Core Banking Platform Migration',
        company: 'Citibank Spain',
        sector: 'International Banking & IT',
        tagline: 'Testing coordination and quality assurance during the transition to an HTML-based core banking platform.',
        problem:
          'Critical migration of Citibank’s core banking architecture across Spain requiring zero downtime and strict adherence to quality benchmarks.',
        solution:
          'Coordinated a team of 20 testers, resolved operational bottlenecks in real time, tracked defect resolution, and delivered executive status dashboards.',
        roleContribution:
          'Test Team Coordinator and primary operational liaison for card services.',
        technologies: ['HTML Core Banking Platform', 'Defect Tracking Tools', 'Debit Card Systems'],
        methodologies: ['UAT Coordination', 'Defect Management', 'Incident Resolution'],
        results:
          'Flawless system migration delivered on schedule with no disruption to daily branch banking operations.',
        metrics: {
          label: 'Testing Team',
          value: '20 Testers',
        },
      },
    ],
    skillGroups: [
      {
        category: 'Product Development & Strategy',
        highlight: true,
        skills: [
          'End-to-End Product Development',
          'Product Strategy',
          'Product Discovery',
          'Business Case Development',
          'Product Roadmap',
          'Go-to-Market (GTM)',
          'Agile (Scrum)',
          'User Acceptance Testing (UAT)',
          'Value Proposition Design',
          'Design Sprints',
          'Customer Journey Mapping',
        ],
      },
      {
        category: 'Leadership & Business Development',
        skills: [
          'Business Development',
          'Consultative Selling',
          'Executive Stakeholder Management',
          'Cross-functional Leadership',
          'Commercial Strategy',
          'Incentive Programs & Sales Campaigns',
          'Executive Committees & Governance',
          'Client Presentation & Negotiation',
        ],
      },
      {
        category: 'Banking & Financial Domain',
        skills: [
          'Financial Services',
          'Banking Operations',
          'Payment Schemes & Methods',
          'Debit & Credit Cards',
          'Savings & Investment Products',
          'Financial Inclusion',
          'Regulatory Compliance & Risk',
          'Transactional Systems',
        ],
      },
      {
        category: 'Innovation, Data & AI',
        skills: [
          'Artificial Intelligence & Emerging Tech',
          'Data-Driven Decision Making',
          'Core Banking Migration',
          'Market Analysis & Research',
          'KPI Reporting & Dashboards',
          'Women-Centered Design',
          'Digital Transformation',
        ],
      },
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
        description: 'Customer discovery, design sprints, and digital solutions to widen access to financial services.',
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
        year: '2026 – Ongoing (Jul 2027)',
        honors: 'Advanced Specialization in Artificial Intelligence & Digital Business',
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
      {
        language: 'Spanish',
        level: 'Native',
        proficiencyScore: 'Native',
      },
      {
        language: 'English',
        level: 'B2 (Professional Working)',
        proficiencyScore: 'B2 Level',
      },
      {
        language: 'German',
        level: 'A2 (Elementary)',
        proficiencyScore: 'A2 Level',
      },
    ],
    recruiterSummary: {
      title: 'Executive Screening Profile (30s Review)',
      keyHighlights: [
        '17+ years leading Product Development, Banking, and Payments.',
        'Direct track record with Visa, Citi, Compartamos, Azteca, Bansefi + consulting for Santander, Mercado Pago, and Banorte.',
        'Quantifiable impact: -60% weekly capital outflow loss (~MXN $30M/week saved) and 4 banking products launched as Product Owner.',
        'Actively specializing in Artificial Intelligence to drive AI-powered financial products.',
        'International degree from the UK: BA (Hons.) in International Business from Nottingham Trent University.',
      ],
      targetRoles: [
        'Head of Product / VP of Product',
        'Director / Senior Manager of Business Development (FinTech / Banking)',
        'Principal Product Manager - Payments / Core Banking',
        'Digital Transformation & Financial Innovation Leader',
      ],
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
        badge: 'Available for Product Leadership & FinTech Roles',
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
        subtitle: 'Executive value proposition backed by verifiable results and cross-sector leadership',
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
      },
      projects: {
        title: 'Featured Business Cases',
        subtitle: 'High-impact initiatives driving retention, new product lines, and digital innovation',
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
        subtitle: 'Open to discussions for leadership roles in Product, FinTech, Payments, and Digital Transformation',
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

const mongoose = require("mongoose");
const JobModel = require("../models/jobs");

const jobs = [
  {
    title: {
      en: "Data Scientist",
      es: "Científico de Datos",
      fr: "Scientifique des Données",
      hi: "डेटा वैज्ञानिक",
    },
    company: "672d071752286b45289b5db0",
    location: {
      city: "San Francisco",
      state: "California",
      stateCode: "CA",
      country: "United States",
      coordinates: {
        lat: 37.774929,
        lng: -122.419416,
      },
    },
    salary: {
      currency: "USD",
      min: 120000,
      max: 150000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "Remote",
        es: "Remoto",
        fr: "À distance",
        hi: "दूरस्थ",
      },
    ],
    workingSchedule: "672d071652286b45289b5dab",
    employmentType: "672bad34293e39d4be531a42",
    jobDescription: [
      {
        en: "Analyze large datasets to extract insights and inform business decisions.",
        es: "Analizar grandes conjuntos de datos para extraer información y orientar decisiones empresariales.",
        fr: "Analyser de grands ensembles de données pour extraire des informations et éclairer les décisions commerciales.",
        hi: "बड़े डेटा सेट का विश्लेषण करके अंतर्दृष्टि निकालें और व्यावसायिक निर्णयों को सूचित करें।",
      },
      {
        en: "Develop predictive models and machine learning algorithms.",
        es: "Desarrollar modelos predictivos y algoritmos de aprendizaje automático.",
        fr: "Développer des modèles prédictifs et des algorithmes d'apprentissage automatique.",
        hi: "पूर्वानुमान मॉडल और मशीन लर्निंग एल्गोरिदम विकसित करें।",
      },
      {
        en: "Collaborate with cross-functional teams to implement data-driven solutions.",
        es: "Colaborar con equipos multifuncionales para implementar soluciones basadas en datos.",
        fr: "Collaborer avec des équipes transversales pour mettre en œuvre des solutions axées sur les données.",
        hi: "डेटा-चालित समाधानों को लागू करने के लिए क्रॉस-फ़ंक्शनल टीमों के साथ सहयोग करें।",
      },
    ],
    requirements: [
      {
        en: "Master's degree in Data Science, Statistics, or related field.",
        es: "Maestría en Ciencia de Datos, Estadística o campo relacionado.",
        fr: "Master en science des données, statistiques ou domaine connexe.",
        hi: "डेटा साइंस, सांख्यिकी या संबंधित क्षेत्र में मास्टर डिग्री।",
      },
      {
        en: "3+ years of experience in data analysis and modeling.",
        es: "Más de 3 años de experiencia en análisis y modelado de datos.",
        fr: "Plus de 3 ans d'expérience en analyse et modélisation de données.",
        hi: "डेटा विश्लेषण और मॉडलिंग में 3+ वर्ष का अनुभव।",
      },
      {
        en: "Proficiency in Python, R, and SQL.",
        es: "Dominio de Python, R y SQL.",
        fr: "Maîtrise de Python, R et SQL.",
        hi: "Python, R, और SQL में प्रवीणता।",
      },
    ],
  },
  {
    title: {
      en: "Marketing Manager",
      es: "Gerente de Marketing",
      fr: "Responsable Marketing",
      hi: "मार्केटिंग प्रबंधक",
    },
    company: "672d071752286b45289b5db1",
    location: {
      city: "London",
      state: "England",
      stateCode: "ENG",
      country: "United Kingdom",
      coordinates: {
        lat: 51.507351,
        lng: -0.127758,
      },
    },
    salary: {
      currency: "GBP",
      min: 50000,
      max: 70000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "On Site",
        es: "En sitio",
        fr: "Sur site",
        hi: "स्थल पर",
      },
    ],
    workingSchedule: "672d071652286b45289b5dac",
    employmentType: "672bad34293e39d4be531a41",
    jobDescription: [
      {
        en: "Develop and implement marketing strategies to increase brand awareness.",
        es: "Desarrollar e implementar estrategias de marketing para aumentar el reconocimiento de la marca.",
        fr: "Développer et mettre en œuvre des stratégies marketing pour accroître la notoriété de la marque.",
        hi: "ब्रांड जागरूकता बढ़ाने के लिए विपणन रणनीतियों का विकास और कार्यान्वयन करें।",
      },
      {
        en: "Manage social media campaigns and digital marketing efforts.",
        es: "Gestionar campañas de redes sociales y esfuerzos de marketing digital.",
        fr: "Gérer les campagnes sur les réseaux sociaux et les efforts de marketing numérique.",
        hi: "सोशल मीडिया अभियानों और डिजिटल मार्केटिंग प्रयासों का प्रबंधन करें।",
      },
      {
        en: "Conduct market research to identify new opportunities.",
        es: "Realizar investigación de mercado para identificar nuevas oportunidades.",
        fr: "Mener des études de marché pour identifier de nouvelles opportunités.",
        hi: "नई अवसरों की पहचान करने के लिए बाजार अनुसंधान करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Marketing or Business Administration.",
        es: "Licenciatura en Marketing o Administración de Empresas.",
        fr: "Licence en marketing ou administration des affaires.",
        hi: "मार्केटिंग या बिजनेस एडमिनिस्ट्रेशन में स्नातक डिग्री।",
      },
      {
        en: "5+ years of experience in marketing roles.",
        es: "Más de 5 años de experiencia en roles de marketing.",
        fr: "Plus de 5 ans d'expérience dans des rôles marketing.",
        hi: "मार्केटिंग भूमिकाओं में 5+ वर्ष का अनुभव।",
      },
      {
        en: "Strong understanding of digital marketing tools and analytics.",
        es: "Fuerte comprensión de herramientas de marketing digital y analítica.",
        fr: "Solide compréhension des outils de marketing numérique et de l'analytique.",
        hi: "डिजिटल मार्केटिंग टूल्स और एनालिटिक्स की मजबूत समझ।",
      },
    ],
  },
  {
    title: {
      en: "Product Designer",
      es: "Diseñador de Producto",
      fr: "Designer Produit",
      hi: "उत्पाद डिजाइनर",
    },
    company: "672d071752286b45289b5db2",
    location: {
      city: "Berlin",
      state: "Berlin",
      stateCode: "BE",
      country: "Germany",
      coordinates: {
        lat: 52.520008,
        lng: 13.404954,
      },
    },
    salary: {
      currency: "EUR",
      min: 60000,
      max: 80000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "Hybrid",
        es: "Híbrido",
        fr: "Hybride",
        hi: "हाइब्रिड",
      },
    ],
    workingSchedule: "672d071652286b45289b5dad",
    employmentType: "672bad34293e39d4be531a43",
    jobDescription: [
      {
        en: "Create user-centered designs by understanding business requirements.",
        es: "Crear diseños centrados en el usuario comprendiendo los requisitos comerciales.",
        fr: "Créer des designs centrés sur l'utilisateur en comprenant les exigences commerciales.",
        hi: "व्यावसायिक आवश्यकताओं को समझकर उपयोगकर्ता-केंद्रित डिज़ाइन बनाएं।",
      },
      {
        en: "Develop wireframes and prototypes to effectively communicate design ideas.",
        es: "Desarrollar wireframes y prototipos para comunicar efectivamente ideas de diseño.",
        fr: "Développer des wireframes et des prototypes pour communiquer efficacement les idées de conception.",
        hi: "डिज़ाइन विचारों को प्रभावी ढंग से संप्रेषित करने के लिए वायरफ्रेम और प्रोटोटाइप विकसित करें।",
      },
      {
        en: "Collaborate with product managers and engineers to implement designs.",
        es: "Colaborar con gerentes de producto e ingenieros para implementar diseños.",
        fr: "Collaborer avec les chefs de produit et les ingénieurs pour mettre en œuvre les designs.",
        hi: "डिज़ाइन लागू करने के लिए उत्पाद प्रबंधकों और इंजीनियरों के साथ सहयोग करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Design or related field.",
        es: "Licenciatura en Diseño o campo relacionado.",
        fr: "Licence en design ou domaine connexe.",
        hi: "डिज़ाइन या संबंधित क्षेत्र में स्नातक डिग्री।",
      },
      {
        en: "Portfolio demonstrating design skills.",
        es: "Portafolio que demuestre habilidades de diseño.",
        fr: "Portfolio démontrant les compétences en design.",
        hi: "डिज़ाइन कौशल का प्रदर्शन करने वाला पोर्टफोलियो।",
      },
      {
        en: "Proficiency with design tools like Sketch, Figma, or Adobe XD.",
        es: "Dominio de herramientas de diseño como Sketch, Figma o Adobe XD.",
        fr: "Maîtrise des outils de conception comme Sketch, Figma ou Adobe XD.",
        hi: "स्केच, फिग्मा या एडोब एक्सडी जैसे डिज़ाइन टूल्स में प्रवीणता।",
      },
    ],
  },
  {
    title: {
      en: "Sales Representative",
      es: "Representante de Ventas",
      fr: "Représentant des Ventes",
      hi: "सेल्स प्रतिनिधि",
    },
    company: "672d071752286b45289b5db3",
    location: {
      city: "Toronto",
      state: "Ontario",
      stateCode: "ON",
      country: "Canada",
      coordinates: {
        lat: 43.653226,
        lng: -79.383184,
      },
    },
    salary: {
      currency: "CAD",
      min: 50000,
      max: 70000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "On Site",
        es: "En sitio",
        fr: "Sur site",
        hi: "स्थल पर",
      },
    ],
    workingSchedule: "672d071652286b45289b5dae",
    employmentType: "672bad34293e39d4be531a42",
    jobDescription: [
      {
        en: "Identify and develop new business opportunities.",
        es: "Identificar y desarrollar nuevas oportunidades de negocio.",
        fr: "Identifier et développer de nouvelles opportunités commerciales.",
        hi: "नई व्यावसायिक अवसरों की पहचान करें और विकसित करें।",
      },
      {
        en: "Maintain relationships with existing clients.",
        es: "Mantener relaciones con clientes existentes.",
        fr: "Maintenir des relations avec les clients existants.",
        hi: "मौजूदा ग्राहकों के साथ संबंध बनाए रखें।",
      },
      {
        en: "Achieve sales targets and report on performance.",
        es: "Alcanzar objetivos de ventas y reportar sobre el desempeño.",
        fr: "Atteindre les objectifs de vente et rendre compte des performances.",
        hi: "बिक्री लक्ष्यों को प्राप्त करें और प्रदर्शन पर रिपोर्ट करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Business or related field.",
        es: "Licenciatura en Negocios o campo relacionado.",
        fr: "Licence en commerce ou domaine connexe.",
        hi: "व्यवसाय या संबंधित क्षेत्र में स्नातक डिग्री।",
      },
      {
        en: "2+ years of sales experience.",
        es: "Más de 2 años de experiencia en ventas.",
        fr: "Plus de 2 ans d'expérience en vente.",
        hi: "बिक्री में 2+ वर्ष का अनुभव।",
      },
      {
        en: "Excellent communication and negotiation skills.",
        es: "Excelentes habilidades de comunicación y negociación.",
        fr: "Excellentes compétences en communication et en négociation.",
        hi: "उत्कृष्ट संचार और वार्ता कौशल।",
      },
    ],
  },
  {
    title: {
      en: "HR Coordinator",
      es: "Coordinador de Recursos Humanos",
      fr: "Coordinateur RH",
      hi: "एचआर समन्वयक",
    },
    company: "672d071752286b45289b5db4",
    location: {
      city: "Sydney",
      state: "New South Wales",
      stateCode: "NSW",
      country: "Australia",
      coordinates: {
        lat: -33.86882,
        lng: 151.209296,
      },
    },
    salary: {
      currency: "AUD",
      min: 60000,
      max: 80000,
    },
    tags: [
      {
        en: "Part Time",
        es: "Medio tiempo",
        fr: "Temps partiel",
        hi: "आंशिक समय",
      },
      {
        en: "On Site",
        es: "En sitio",
        fr: "Sur site",
        hi: "स्थल पर",
      },
    ],
    workingSchedule: "672d071652286b45289b5daa",
    employmentType: "672bad34293e39d4be531a43",
    jobDescription: [
      {
        en: "Assist in recruitment processes and onboarding of new employees.",
        es: "Asistir en procesos de reclutamiento y incorporación de nuevos empleados.",
        fr: "Assister dans les processus de recrutement et l'intégration des nouveaux employés.",
        hi: "नए कर्मचारियों की भर्ती प्रक्रियाओं और ऑनबोर्डिंग में सहायता करें।",
      },
      {
        en: "Maintain employee records and HR databases.",
        es: "Mantener registros de empleados y bases de datos de RRHH.",
        fr: "Maintenir les dossiers des employés et les bases de données RH.",
        hi: "कर्मचारी रिकॉर्ड और एचआर डेटाबेस बनाए रखें।",
      },
      {
        en: "Coordinate training sessions and workshops.",
        es: "Coordinar sesiones de capacitación y talleres.",
        fr: "Coordonner les sessions de formation et les ateliers.",
        hi: "प्रशिक्षण सत्रों और कार्यशालाओं का समन्वय करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Human Resources or related field.",
        es: "Licenciatura en Recursos Humanos o campo relacionado.",
        fr: "Licence en ressources humaines ou domaine connexe.",
        hi: "मानव संसाधन या संबंधित क्षेत्र में स्नातक डिग्री।",
      },
      {
        en: "1+ years of experience in HR roles.",
        es: "Más de 1 año de experiencia en roles de RRHH.",
        fr: "Plus de 1 an d'expérience dans des rôles RH.",
        hi: "एचआर भूमिकाओं में 1+ वर्ष का अनुभव।",
      },
      {
        en: "Strong organizational and interpersonal skills.",
        es: "Fuertes habilidades organizativas e interpersonales.",
        fr: "Solides compétences organisationnelles et interpersonnelles.",
        hi: "मजबूत संगठनात्मक और अंतरव्यक्तिगत कौशल।",
      },
    ],
  },
  {
    title: {
      en: "Financial Analyst",
      es: "Analista Financiero",
      fr: "Analyste Financier",
      hi: "वित्तीय विश्लेषक",
    },
    company: "672d071752286b45289b5db5",
    location: {
      city: "New York",
      state: "New York",
      stateCode: "NY",
      country: "United States",
      coordinates: {
        lat: 40.712776,
        lng: -74.005974,
      },
    },
    salary: {
      currency: "USD",
      min: 80000,
      max: 100000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "Hybrid",
        es: "Híbrido",
        fr: "Hybride",
        hi: "हाइब्रिड",
      },
    ],
    workingSchedule: "672d071652286b45289b5dab",
    employmentType: "672bad34293e39d4be531a41",
    jobDescription: [
      {
        en: "Analyze financial data and create financial models for decision support.",
        es: "Analizar datos financieros y crear modelos financieros para apoyar decisiones.",
        fr: "Analyser les données financières et créer des modèles financiers pour soutenir la prise de décision.",
        hi: "वित्तीय डेटा का विश्लेषण करें और निर्णय समर्थन के लिए वित्तीय मॉडल बनाएं।",
      },
      {
        en: "Report on financial performance and prepare for regular leadership reviews.",
        es: "Informar sobre el desempeño financiero y prepararse para revisiones regulares de liderazgo.",
        fr: "Rapporter sur la performance financière et préparer des revues régulières de la direction.",
        hi: "वित्तीय प्रदर्शन पर रिपोर्ट करें और नियमित नेतृत्व समीक्षा के लिए तैयारी करें।",
      },
      {
        en: "Identify trends and recommend actions to management.",
        es: "Identificar tendencias y recomendar acciones a la gerencia.",
        fr: "Identifier les tendances et recommander des actions à la direction.",
        hi: "प्रवृत्तियों की पहचान करें और प्रबंधन को कार्रवाई की सिफारिश करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Finance, Economics, or related field.",
        es: "Licenciatura en Finanzas, Economía o campo relacionado.",
        fr: "Licence en finance, économie ou domaine connexe.",
        hi: "वित्त, अर्थशास्त्र या संबंधित क्षेत्र में स्नातक डिग्री।",
      },
      {
        en: "3+ years of business finance or other relevant experience.",
        es: "Más de 3 años de experiencia en finanzas empresariales u otra experiencia relevante.",
        fr: "Plus de 3 ans d'expérience en finance d'entreprise ou autre expérience pertinente.",
        hi: "व्यवसाय वित्त या अन्य प्रासंगिक अनुभव में 3+ वर्ष का अनुभव।",
      },
      {
        en: "Advanced knowledge of Excel and financial modeling.",
        es: "Conocimiento avanzado de Excel y modelado financiero.",
        fr: "Connaissance avancée d'Excel et de la modélisation financière.",
        hi: "एक्सेल और वित्तीय मॉडलिंग का उन्नत ज्ञान।",
      },
    ],
  },
  // Continuing the jobs array
  {
    title: {
      en: "Software Engineer",
      es: "Ingeniero de Software",
      fr: "Ingénieur Logiciel",
      hi: "सॉफ्टवेयर इंजीनियर",
    },
    company: "672d071752286b45289b5db6",
    location: {
      city: "Berlin",
      state: "Berlin",
      stateCode: "BE",
      country: "Germany",
      coordinates: {
        lat: 52.520008,
        lng: 13.404954,
      },
    },
    salary: {
      currency: "EUR",
      min: 55000,
      max: 75000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "Remote",
        es: "Remoto",
        fr: "À distance",
        hi: "दूरस्थ",
      },
    ],
    workingSchedule: "672d071652286b45289b5dac",
    employmentType: "672bad34293e39d4be531a42",
    jobDescription: [
      {
        en: "Design, develop, and maintain software applications.",
        es: "Diseñar, desarrollar y mantener aplicaciones de software.",
        fr: "Concevoir, développer et maintenir des applications logicielles.",
        hi: "सॉफ्टवेयर अनुप्रयोगों को डिजाइन, विकसित और बनाए रखें।",
      },
      {
        en: "Collaborate with team members to determine best practices.",
        es: "Colaborar con los miembros del equipo para determinar las mejores prácticas.",
        fr: "Collaborer avec les membres de l'équipe pour déterminer les meilleures pratiques.",
        hi: "सर्वोत्तम प्रथाओं को निर्धारित करने के लिए टीम के सदस्यों के साथ सहयोग करें।",
      },
      {
        en: "Troubleshoot and debug applications.",
        es: "Solucionar problemas y depurar aplicaciones.",
        fr: "Dépanner et déboguer les applications.",
        hi: "एप्लिकेशन की समस्या निवारण और डिबग करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Computer Science or related field.",
        es: "Licenciatura en Ciencias de la Computación o campo relacionado.",
        fr: "Licence en informatique ou domaine connexe.",
        hi: "कंप्यूटर विज्ञान या संबंधित क्षेत्र में स्नातक डिग्री।",
      },
      {
        en: "3+ years of experience in software development.",
        es: "Más de 3 años de experiencia en desarrollo de software.",
        fr: "Plus de 3 ans d'expérience en développement logiciel.",
        hi: "सॉफ्टवेयर विकास में 3+ वर्ष का अनुभव।",
      },
      {
        en: "Experience with JavaScript and Node.js.",
        es: "Experiencia con JavaScript y Node.js.",
        fr: "Expérience avec JavaScript et Node.js.",
        hi: "जावास्क्रिप्ट और Node.js का अनुभव।",
      },
    ],
  },
  {
    title: {
      en: "Graphic Designer",
      es: "Diseñador Gráfico",
      fr: "Designer Graphique",
      hi: "ग्राफिक डिजाइनर",
    },
    company: "672d071752286b45289b5db7",
    location: {
      city: "Paris",
      state: "Île-de-France",
      stateCode: "IDF",
      country: "France",
      coordinates: {
        lat: 48.856614,
        lng: 2.352222,
      },
    },
    salary: {
      currency: "EUR",
      min: 40000,
      max: 55000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "On Site",
        es: "En sitio",
        fr: "Sur site",
        hi: "स्थल पर",
      },
    ],
    workingSchedule: "672d071652286b45289b5dad",
    employmentType: "672bad34293e39d4be531a43",
    jobDescription: [
      {
        en: "Create visual concepts to communicate ideas.",
        es: "Crear conceptos visuales para comunicar ideas.",
        fr: "Créer des concepts visuels pour communiquer des idées.",
        hi: "विचारों को संप्रेषित करने के लिए दृश्य अवधारणाएँ बनाएं।",
      },
      {
        en: "Develop graphics for product illustrations and websites.",
        es: "Desarrollar gráficos para ilustraciones de productos y sitios web.",
        fr: "Développer des graphiques pour les illustrations de produits et les sites Web.",
        hi: "उत्पाद चित्रण और वेबसाइटों के लिए ग्राफिक्स विकसित करें।",
      },
      {
        en: "Collaborate with marketing team to produce final designs.",
        es: "Colaborar con el equipo de marketing para producir diseños finales.",
        fr: "Collaborer avec l'équipe marketing pour produire des designs finaux.",
        hi: "अंतिम डिज़ाइन बनाने के लिए मार्केटिंग टीम के साथ सहयोग करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Graphic Design or related field.",
        es: "Licenciatura en Diseño Gráfico o campo relacionado.",
        fr: "Licence en design graphique ou domaine connexe.",
        hi: "ग्राफिक डिजाइन या संबंधित क्षेत्र में स्नातक डिग्री।",
      },
      {
        en: "Proficiency with Adobe Creative Suite.",
        es: "Dominio de Adobe Creative Suite.",
        fr: "Maîtrise d'Adobe Creative Suite.",
        hi: "एडोब क्रिएटिव सूट में प्रवीणता।",
      },
      {
        en: "Strong portfolio showcasing design skills.",
        es: "Sólido portafolio que muestre habilidades de diseño.",
        fr: "Solide portfolio présentant les compétences en design.",
        hi: "डिज़ाइन कौशल का प्रदर्शन करने वाला मजबूत पोर्टफोलियो।",
      },
    ],
  },
  {
    title: {
      en: "Customer Support Specialist",
      es: "Especialista en Soporte al Cliente",
      fr: "Spécialiste du Support Client",
      hi: "ग्राहक समर्थन विशेषज्ञ",
    },
    company: "672d071752286b45289b5db8",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      stateCode: "MH",
      country: "India",
      coordinates: {
        lat: 19.07609,
        lng: 72.877426,
      },
    },
    salary: {
      currency: "INR",
      min: 400000,
      max: 600000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "On Site",
        es: "En sitio",
        fr: "Sur site",
        hi: "स्थल पर",
      },
    ],
    workingSchedule: "672d071652286b45289b5daa",
    employmentType: "672bad34293e39d4be531a41",
    jobDescription: [
      {
        en: "Provide prompt and accurate customer support.",
        es: "Proporcionar soporte al cliente rápido y preciso.",
        fr: "Fournir un support client rapide et précis.",
        hi: "त्वरित और सटीक ग्राहक समर्थन प्रदान करें।",
      },
      {
        en: "Resolve customer inquiries via phone, email, and chat.",
        es: "Resolver consultas de clientes por teléfono, correo electrónico y chat.",
        fr: "Résoudre les demandes des clients par téléphone, e-mail et chat.",
        hi: "फोन, ईमेल और चैट के माध्यम से ग्राहक प्रश्नों को हल करें।",
      },
      {
        en: "Document customer interactions and follow up accordingly.",
        es: "Documentar interacciones con clientes y realizar seguimiento en consecuencia.",
        fr: "Documenter les interactions avec les clients et assurer le suivi en conséquence.",
        hi: "ग्राहक इंटरैक्शन को दस्तावेज़ित करें और तदनुसार अनुवर्ती करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree preferred.",
        es: "Se prefiere licenciatura.",
        fr: "Licence préférée.",
        hi: "स्नातक डिग्री वरीयता।",
      },
      {
        en: "Excellent communication skills.",
        es: "Excelentes habilidades de comunicación.",
        fr: "Excellentes compétences en communication.",
        hi: "उत्कृष्ट संचार कौशल।",
      },
      {
        en: "Experience in customer service roles.",
        es: "Experiencia en roles de servicio al cliente.",
        fr: "Expérience dans les rôles de service client.",
        hi: "ग्राहक सेवा भूमिकाओं में अनुभव।",
      },
    ],
  },
  {
    title: {
      en: "Data Analyst",
      es: "Analista de Datos",
      fr: "Analyste de Données",
      hi: "डेटा विश्लेषक",
    },
    company: "672d071752286b45289b5db9",
    location: {
      city: "Singapore",
      state: "Central Region",
      stateCode: "SG",
      country: "Singapore",
      coordinates: {
        lat: 1.352083,
        lng: 103.819836,
      },
    },
    salary: {
      currency: "SGD",
      min: 70000,
      max: 90000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "Remote",
        es: "Remoto",
        fr: "À distance",
        hi: "दूरस्थ",
      },
    ],
    workingSchedule: "672d071652286b45289b5dab",
    employmentType: "672bad34293e39d4be531a42",
    jobDescription: [
      {
        en: "Collect and analyze data to identify trends.",
        es: "Recolectar y analizar datos para identificar tendencias.",
        fr: "Collecter et analyser des données pour identifier les tendances.",
        hi: "प्रवृत्तियों की पहचान करने के लिए डेटा एकत्रित और विश्लेषण करें।",
      },
      {
        en: "Prepare reports for management stating trends and patterns.",
        es: "Preparar informes para la gerencia indicando tendencias y patrones.",
        fr: "Préparer des rapports pour la direction indiquant les tendances et les modèles.",
        hi: "प्रबंधन के लिए रुझान और पैटर्न बताते हुए रिपोर्ट तैयार करें।",
      },
      {
        en: "Work with teams to implement data-driven strategies.",
        es: "Trabajar con equipos para implementar estrategias basadas en datos.",
        fr: "Travailler avec les équipes pour mettre en œuvre des stratégies axées sur les données.",
        hi: "डेटा-चालित रणनीतियों को लागू करने के लिए टीमों के साथ काम करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Statistics, Mathematics, or related field.",
        es: "Licenciatura en Estadística, Matemáticas o campo relacionado.",
        fr: "Licence en statistiques, mathématiques ou domaine connexe.",
        hi: "सांख्यिकी, गणित या संबंधित क्षेत्र में स्नातक डिग्री।",
      },
      {
        en: "Strong analytical skills.",
        es: "Fuertes habilidades analíticas.",
        fr: "Solides compétences analytiques.",
        hi: "मजबूत विश्लेषणात्मक कौशल।",
      },
      {
        en: "Experience with data visualization tools like Tableau.",
        es: "Experiencia con herramientas de visualización de datos como Tableau.",
        fr: "Expérience avec des outils de visualisation de données comme Tableau.",
        hi: "टेबल्यू जैसे डेटा विज़ुअलाइज़ेशन टूल्स का अनुभव।",
      },
    ],
  },
  {
    title: {
      en: "Operations Manager",
      es: "Gerente de Operaciones",
      fr: "Responsable des Opérations",
      hi: "ऑपरेशंस मैनेजर",
    },
    company: "672d071752286b45289b5dba",
    location: {
      city: "Dubai",
      state: "Dubai",
      stateCode: "DU",
      country: "United Arab Emirates",
      coordinates: {
        lat: 25.204849,
        lng: 55.270783,
      },
    },
    salary: {
      currency: "AED",
      min: 200000,
      max: 250000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "On Site",
        es: "En sitio",
        fr: "Sur site",
        hi: "स्थल पर",
      },
    ],
    workingSchedule: "672d071652286b45289b5dae",
    employmentType: "672bad34293e39d4be531a41",
    jobDescription: [
      {
        en: "Oversee daily operations of the company.",
        es: "Supervisar las operaciones diarias de la empresa.",
        fr: "Superviser les opérations quotidiennes de l'entreprise.",
        hi: "कंपनी के दैनिक संचालन की देखरेख करें।",
      },
      {
        en: "Manage operational budgets and forecasts.",
        es: "Gestionar presupuestos operativos y pronósticos.",
        fr: "Gérer les budgets opérationnels et les prévisions.",
        hi: "संचालन बजट और पूर्वानुमानों का प्रबंधन करें।",
      },
      {
        en: "Implement policies and procedures to improve efficiency.",
        es: "Implementar políticas y procedimientos para mejorar la eficiencia.",
        fr: "Mettre en œuvre des politiques et des procédures pour améliorer l'efficacité.",
        hi: "दक्षता में सुधार के लिए नीतियों और प्रक्रियाओं को लागू करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Business Administration.",
        es: "Licenciatura en Administración de Empresas.",
        fr: "Licence en administration des affaires.",
        hi: "बिजनेस एडमिनिस्ट्रेशन में स्नातक डिग्री।",
      },
      {
        en: "5+ years of experience in operations management.",
        es: "Más de 5 años de experiencia en gestión de operaciones.",
        fr: "Plus de 5 ans d'expérience en gestion des opérations.",
        hi: "ऑपरेशंस प्रबंधन में 5+ वर्ष का अनुभव।",
      },
      {
        en: "Strong leadership and organizational skills.",
        es: "Fuertes habilidades de liderazgo y organización.",
        fr: "Solides compétences en leadership et en organisation.",
        hi: "मजबूत नेतृत्व और संगठनात्मक कौशल।",
      },
    ],
  },
  {
    title: {
      en: "Mechanical Engineer",
      es: "Ingeniero Mecánico",
      fr: "Ingénieur Mécanique",
      hi: "यांत्रिक अभियंता",
    },
    company: "672d071752286b45289b5dbb",
    location: {
      city: "Tokyo",
      state: "Tokyo",
      stateCode: "TYO",
      country: "Japan",
      coordinates: {
        lat: 35.689487,
        lng: 139.691706,
      },
    },
    salary: {
      currency: "JPY",
      min: 6000000,
      max: 8000000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "On Site",
        es: "En sitio",
        fr: "Sur site",
        hi: "स्थल पर",
      },
    ],
    workingSchedule: "672d071652286b45289b5dac",
    employmentType: "672bad34293e39d4be531a41",
    jobDescription: [
      {
        en: "Design mechanical devices and equipment.",
        es: "Diseñar dispositivos y equipos mecánicos.",
        fr: "Concevoir des dispositifs et équipements mécaniques.",
        hi: "यांत्रिक उपकरणों और उपकरणों को डिजाइन करें।",
      },
      {
        en: "Develop and test prototypes.",
        es: "Desarrollar y probar prototipos.",
        fr: "Développer et tester des prototypes.",
        hi: "प्रोटोटाइप विकसित करें और परीक्षण करें।",
      },
      {
        en: "Collaborate with cross-functional teams.",
        es: "Colaborar con equipos multifuncionales.",
        fr: "Collaborer avec des équipes interfonctionnelles.",
        hi: "क्रॉस-फ़ंक्शनल टीमों के साथ सहयोग करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Mechanical Engineering.",
        es: "Licenciatura en Ingeniería Mecánica.",
        fr: "Licence en génie mécanique.",
        hi: "यांत्रिक इंजीनियरिंग में स्नातक डिग्री।",
      },
      {
        en: "Experience with CAD software.",
        es: "Experiencia con software CAD.",
        fr: "Expérience avec les logiciels CAO.",
        hi: "CAD सॉफ्टवेयर का अनुभव।",
      },
      {
        en: "Strong problem-solving skills.",
        es: "Fuertes habilidades para resolver problemas.",
        fr: "Solides compétences en résolution de problèmes.",
        hi: "मजबूत समस्या-समाधान कौशल।",
      },
    ],
  },
  {
    title: {
      en: "Content Writer",
      es: "Escritor de Contenido",
      fr: "Rédacteur de Contenu",
      hi: "सामग्री लेखक",
    },
    company: "672d071752286b45289b5dbc",
    location: {
      city: "Cape Town",
      state: "Western Cape",
      stateCode: "WC",
      country: "South Africa",
      coordinates: {
        lat: -33.924869,
        lng: 18.424055,
      },
    },
    salary: {
      currency: "ZAR",
      min: 300000,
      max: 400000,
    },
    tags: [
      {
        en: "Part Time",
        es: "Medio tiempo",
        fr: "Temps partiel",
        hi: "आंशिक समय",
      },
      {
        en: "Remote",
        es: "Remoto",
        fr: "À distance",
        hi: "दूरस्थ",
      },
    ],
    workingSchedule: "672d071652286b45289b5dad",
    employmentType: "672bad34293e39d4be531a43",
    jobDescription: [
      {
        en: "Write clear and engaging content for various platforms.",
        es: "Escribir contenido claro y atractivo para varias plataformas.",
        fr: "Rédiger un contenu clair et engageant pour diverses plateformes.",
        hi: "विभिन्न प्लेटफार्मों के लिए स्पष्ट और आकर्षक सामग्री लिखें।",
      },
      {
        en: "Research industry-related topics.",
        es: "Investigar temas relacionados con la industria.",
        fr: "Rechercher des sujets liés à l'industrie.",
        hi: "उद्योग से संबंधित विषयों पर शोध करें।",
      },
      {
        en: "Collaborate with marketing team to develop content strategies.",
        es: "Colaborar con el equipo de marketing para desarrollar estrategias de contenido.",
        fr: "Collaborer avec l'équipe marketing pour développer des stratégies de contenu.",
        hi: "सामग्री रणनीतियों को विकसित करने के लिए मार्केटिंग टीम के साथ सहयोग करें।",
      },
    ],
    requirements: [
      {
        en: "Proven work experience as a Content Writer.",
        es: "Experiencia laboral demostrable como Escritor de Contenido.",
        fr: "Expérience de travail avérée en tant que Rédacteur de Contenu.",
        hi: "सामग्री लेखक के रूप में सिद्ध कार्य अनुभव।",
      },
      {
        en: "Excellent writing and editing skills.",
        es: "Excelentes habilidades de escritura y edición.",
        fr: "Excellentes compétences en rédaction et en édition.",
        hi: "उत्कृष्ट लेखन और संपादन कौशल।",
      },
      {
        en: "Ability to meet deadlines.",
        es: "Capacidad para cumplir con los plazos.",
        fr: "Capacité à respecter les délais.",
        hi: "समय सीमाओं को पूरा करने की क्षमता।",
      },
    ],
  },
  {
    title: {
      en: "Project Manager",
      es: "Gerente de Proyectos",
      fr: "Chef de Projet",
      hi: "परियोजना प्रबंधक",
    },
    company: "672d071752286b45289b5dbd",
    location: {
      city: "Seoul",
      state: "Seoul",
      stateCode: "SEO",
      country: "South Korea",
      coordinates: {
        lat: 37.566535,
        lng: 126.977969,
      },
    },
    salary: {
      currency: "KRW",
      min: 50000000,
      max: 70000000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "On Site",
        es: "En sitio",
        fr: "Sur site",
        hi: "स्थल पर",
      },
    ],
    workingSchedule: "672d071652286b45289b5dae",
    employmentType: "672bad34293e39d4be531a41",
    jobDescription: [
      {
        en: "Plan and oversee projects to ensure timely completion.",
        es: "Planificar y supervisar proyectos para garantizar la finalización oportuna.",
        fr: "Planifier et superviser les projets pour assurer une réalisation en temps voulu.",
        hi: "समय पर पूर्णता सुनिश्चित करने के लिए परियोजनाओं की योजना बनाएं और निगरानी करें।",
      },
      {
        en: "Coordinate with team members and stakeholders.",
        es: "Coordinar con miembros del equipo y partes interesadas.",
        fr: "Coordonner avec les membres de l'équipe et les parties prenantes.",
        hi: "टीम के सदस्यों और हितधारकों के साथ समन्वय करें।",
      },
      {
        en: "Manage project budgets and resources.",
        es: "Gestionar presupuestos y recursos del proyecto.",
        fr: "Gérer les budgets et les ressources du projet.",
        hi: "परियोजना बजट और संसाधनों का प्रबंधन करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Management or related field.",
        es: "Licenciatura en Gestión o campo relacionado.",
        fr: "Licence en gestion ou domaine connexe.",
        hi: "प्रबंधन या संबंधित क्षेत्र में स्नातक डिग्री।",
      },
      {
        en: "PMP certification preferred.",
        es: "Certificación PMP preferida.",
        fr: "Certification PMP préférée.",
        hi: "पीएमपी प्रमाणन वरीयता।",
      },
      {
        en: "Strong leadership and communication skills.",
        es: "Fuertes habilidades de liderazgo y comunicación.",
        fr: "Solides compétences en leadership et en communication.",
        hi: "मजबूत नेतृत्व और संचार कौशल।",
      },
    ],
  },
  {
    title: {
      en: "Electrical Engineer",
      es: "Ingeniero Eléctrico",
      fr: "Ingénieur Électrique",
      hi: "विद्युत अभियंता",
    },
    company: "672d071752286b45289b5dbe",
    location: {
      city: "São Paulo",
      state: "São Paulo",
      stateCode: "SP",
      country: "Brazil",
      coordinates: {
        lat: -23.55052,
        lng: -46.633308,
      },
    },
    salary: {
      currency: "BRL",
      min: 80000,
      max: 100000,
    },
    tags: [
      {
        en: "Full Time",
        es: "Tiempo completo",
        fr: "Temps plein",
        hi: "पूर्ण समय",
      },
      {
        en: "On Site",
        es: "En sitio",
        fr: "Sur site",
        hi: "स्थल पर",
      },
    ],
    workingSchedule: "672d071652286b45289b5daa",
    employmentType: "672bad34293e39d4be531a42",
    jobDescription: [
      {
        en: "Design electrical systems and components.",
        es: "Diseñar sistemas y componentes eléctricos.",
        fr: "Concevoir des systèmes et composants électriques.",
        hi: "विद्युत प्रणालियों और घटकों को डिजाइन करें।",
      },
      {
        en: "Conduct tests and simulations.",
        es: "Realizar pruebas y simulaciones.",
        fr: "Effectuer des tests et des simulations.",
        hi: "परीक्षण और सिमुलेशन करें।",
      },
      {
        en: "Ensure compliance with safety standards.",
        es: "Garantizar el cumplimiento de las normas de seguridad.",
        fr: "Assurer la conformité aux normes de sécurité.",
        hi: "सुरक्षा मानकों का अनुपालन सुनिश्चित करें।",
      },
    ],
    requirements: [
      {
        en: "Bachelor's degree in Electrical Engineering.",
        es: "Licenciatura en Ingeniería Eléctrica.",
        fr: "Licence en génie électrique.",
        hi: "विद्युत इंजीनियरिंग में स्नातक डिग्री।",
      },
      {
        en: "Experience with electrical design software.",
        es: "Experiencia con software de diseño eléctrico.",
        fr: "Expérience avec les logiciels de conception électrique.",
        hi: "विद्युत डिजाइन सॉफ्टवेयर का अनुभव।",
      },
      {
        en: "Knowledge of electrical codes and regulations.",
        es: "Conocimiento de códigos y regulaciones eléctricas.",
        fr: "Connaissance des codes et règlements électriques.",
        hi: "विद्युत कोड और विनियमों का ज्ञान।",
      },
    ],
  },
];

const insertJobs = async () => {
  try {
    await mongoose.connection.db.dropCollection("jobs");
    await JobModel.insertMany(jobs);
    console.log("Jobs inserted successfully");
  } catch (error) {
    console.log("Error inserting Jobs:", error.message);
  }
};

module.exports = { insertJobs };

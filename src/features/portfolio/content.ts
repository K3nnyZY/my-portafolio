import type { Locale, PortfolioContent } from "@/types/portfolio";

const english: PortfolioContent = {
  locale: "en",
  meta: {
    title: "Kenny Zhu | Data, AI & Software",
    description:
      "Kenny Zhu's portfolio. Data engineering, AI research, and collaborative software. Explore projects, experience, and education.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Let's talk",
    menu: "Open menu",
    close: "Close menu",
    label: "Main navigation",
    lightMode: "Switch to white mode",
    darkMode: "Switch to black mode",
  },
  hero: {
    eyebrow: "DATA   · AI · SOFTWARE",
    greeting: "Hi, I'm Kenny Zhu",
    title: "Turning complexity",
    accent: "into possibility",
    description:
      "I connect data, intelligence, and thoughtful engineering to build software that makes a difference.",
    projects: "Explore my work",
    contact: "Get in touch",
    location: "Colombia",
    scroll: "A little more about me",
    portraitLabel: "Portrait of Kenny Zhu",
    annotation: "Curiosity in. Possibility out.",
    visual: {
      label: "Explore my engineering toolkit",
      title: "MY ENGINEERING TOOLKIT",
      data: "Reliable data",
      ai: "Applied intelligence",
      aiStack: "LLMs / RAG / n8n",
      software: "Useful software",
      dataDetail:
        "Python and SQL pipelines, trusted data models, and dashboards that turn operations into decisions.",
      dataFocus: {
        title: "Data engineering & analytics",
        items: [
          {
            title: "ETL / ELT pipelines",
            description:
              "Python and SQL workflows to bring sales, inventory, and supplier data together.",
          },
          {
            title: "Data modeling",
            description:
              "Dimensional models and star schemas that make business data easier to query and analyze.",
          },
          {
            title: "Quality & integration",
            description:
              "API connectors, automated validation, and alerts to keep information consistent across systems.",
          },
        ],
      },
      aiDetail:
        "Deep learning, RAG, AI agents, and n8n automation to connect knowledge with workflows.",
      aiFocus: {
        title: "Applied AI & automation",
        items: [
          {
            title: "Deep learning",
            description:
              "Neural networks for EEG signal analysis and pattern recognition.",
          },
          {
            title: "RAG & AI agents",
            description:
              "LLMs, retrieval, and vector search to connect AI agents with relevant information.",
          },
          {
            title: "n8n & automated systems",
            description:
              "n8n workflows and API integrations to connect systems, process data, and automate repetitive tasks.",
          },
          {
            title: "Evaluation & MLOps",
            description:
              "Model evaluation, RLHF, and MLOps practices focused on quality and reliability.",
          },
        ],
      },
      softwareDetail:
        "Interactive web experiences, real-time collaboration, and integrations built around practical needs.",
      softwareFocus: {
        title: "Software & connected experiences",
        items: [
          {
            title: "Web development",
            description:
              "Interfaces built with TypeScript, React, and Next.js, with reusable components, responsive layouts, and accessibility in mind.",
          },
          {
            title: "Real-time collaboration",
            description:
              "WebSockets and Socket.io to synchronize whiteboards, code, and chat in shared workspaces like Calcium.",
          },
          {
            title: "APIs & integrations",
            description:
              "Connections between applications, data sources, and AI services to turn separate tools into useful workflows.",
          },
        ],
      },
      pauseMotion: "Pause animation",
      resumeMotion: "Resume animation",
    },
  },
  stats: [
    { value: "4.63", label: "GPA/ 5.00 UNINORTE" },
    { value: "3.72", label: "GPA / 4.00 · USF" },
    { value: "2nd", label: "Barranqui-IA Hackathon 2024" },
  ],
  about: {
    eyebrow: "01 / A LITTLE CONTEXT",
    title: "Curious by nature.\nAn engineer by practice.",
    description:
      "I'm Kenny Dong Jie Zhu Ye, with a background in Computer Science and Systems Engineering. My work spans data pipelines, AI models, and interactive software — connected by a curiosity about how things work and how to make them better.",
    skillsTitle: "What I work with",
    skills: [
      {
        title: "Languages",
        items: [
          "Python",
          "SQL",
          "TypeScript",
          "JavaScript",
          "R",
          "Java",
          "C++",
          "Go",
          "COBOL",
          "HTML",
        ],
      },
      {
        title: "Data & AI",
        items: [
          "ETL / ELT",
          "PySpark",
          "Machine Learning",
          "Deep Learning",
          "RAG",
          "AI Agents",
          "Vector Databases",
          "MLOps",
          "RLHF",
          "Databricks",
        ],
      },
      {
        title: "Cloud & tools",
        items: [
          "AWS",
          "Azure",
          "BigQuery",
          "Docker",
          "Git",
          "Linux",
          "Power BI",
          "Tableau",
          "Jupyter",
          "n8n",
        ],
      },
    ],
    educationTitle: "Education",
    education: [
      {
        school: "University of South Florida",
        degree: "B.S. in Computer Science",
        location: "Tampa, Florida",
        dates: "Aug 2025 — May 2026",
        gpa: "3.72 / 4.00",
      },
      {
        school: "Universidad del Norte",
        degree: "Systems Engineering",
        location: "Barranquilla, Colombia",
        dates: "Feb 2021 — May 2026",
        gpa: "4.63 / 5.00",
      },
    ],
  },
  experience: {
    eyebrow: "02 / PUTTING IT INTO PRACTICE",
    title: "Real problems.\nMeasurable impact.",
    description:
      "Building reliable data systems, evaluating AI, and helping students understand complex mathematical concepts.",
    items: [
      {
        company: "Outlier",
        role: "RLHF · AI Model Evaluation",
        dates: "Jan 2025 — Feb 2026",
        location: "Remote",
        description:
          "Evaluated large language models through reinforcement learning from human feedback.",
        points: [
          "Reviewed model-generated solutions for correctness, efficiency, edge cases, and instruction following.",
          "Contributed human feedback to improve the reliability of AI-generated responses.",
        ],
        tags: ["RLHF", "LLMs", "Model evaluation"],
      },
      {
        company: "Restaurante Chi Kon",
        role: "Data Engineer",
        dates: "Feb 2024 — Jul 2025",
        location: "Barranquilla, Colombia",
        description:
          "Turned sales, inventory, and supplier data into a centralized analytics foundation.",
        points: [
          "Built Python and SQL ETL/ELT pipelines, API connectors, data quality checks, and automated alerts.",
          "Designed star schema models and Power BI / Tableau dashboards for sales, costs, inventory, and profitability.",
          "Reduced manual reporting time by more than 40%.",
        ],
        tags: ["Python", "SQL", "ETL / ELT", "Power BI", "Tableau"],
      },
      {
        company: "Universidad del Norte",
        role: "Teaching Assistant · Numerical Methods & Calculus",
        dates: "Jan 2022 — Jan 2024",
        location: "Barranquilla, Colombia",
        description:
          "Supported faculty in Numerical Methods, Calculus I, and Calculus II through tutoring and interactive learning resources.",
        points: [
          "Led tutoring and problem-solving sessions for more than 40 students.",
          "Developed interactive Python and Jupyter Notebook resources to visualize interpolation, Newton–Raphson, Runge–Kutta, and numerical error analysis.",
        ],
        tags: ["Python", "Jupyter Notebook", "Numerical methods", "Calculus"],
      },
    ],
  },
  projects: {
    eyebrow: "03 / SELECTED WORK",
    title: "Ideas, brought to life.",
    description:
      "A selection of projects exploring how we collaborate, understand data, and connect with AI.",
    all: "All projects",
    ai: "AI & research",
    software: "Software",
    details: "Explore the project",
    github: "More on GitHub",
    visuals: {
      conversation: "A space to be heard",
      question: "Where can I find support?",
      answer: "Let's explore some helpful resources together.",
      collaborative: "One canvas. Many minds.",
      connected: "Connected",
      research: "From signals to insight",
      signal: "EEG · SIGNAL ANALYSIS",
    },
    list: [
      {
        id: "autism-insight",
        name: "AutismInsight",
        category: "ai",
        label: "CONVERSATIONAL AI",
        description:
          "A conversational chatbot offering emotional support and autism-related resources through language models and rule-based logic.",
        tags: ["LLMs", "GPT API", "Rule-based logic"],
        details: [
          "Combined GPT-3/4 APIs with rule-based conversational logic.",
          "Designed conversations around emotional support and access to autism-related resources.",
        ],
        visual: "chat",
      },
      {
        id: "calcium",
        name: "Calcium",
        category: "software",
        label: "REAL-TIME COLLABORATION",
        description:
          "A shared workspace that brings a collaborative whiteboard, editable code, drawing tools, and chat into one experience.",
        tags: ["WebSockets", "Socket.io", "Python", "JavaScript"],
        details: [
          "Synchronized drawings, editable code snippets, and chat in real time with WebSockets / Socket.io.",
          "Added syntax highlighting and live Python and JavaScript execution in an isolated environment.",
        ],
        visual: "editor",
      },
      {
        id: "eeg-research",
        name: "EEG & Alzheimer's Research",
        category: "ai",
        label: "SIGNAL PROCESSING & AI",
        description:
          "Research software combining EEG signal analysis, neural networks, and visual explanations to explore Alzheimer's biomarkers.",
        tags: ["FFT", "Wavelets", "CNNs", "LLMs"],
        details: [
          "Applied FFT and wavelet processing with CNN models to classify EEG biomarkers.",
          "Integrated LLM explanations, anomaly heatmaps, confidence metrics, and model interpretations into a graphical interface.",
          "A research project exploring biomarker classification; no clinical validation is claimed.",
        ],
        visual: "signal",
      },
    ],
  },
  achievements: {
    eyebrow: "04 / BEYOND THE CODE",
    title: "Learning. Building. Contributing.",
    items: [
      {
        title: "2nd place",
        label: "BARRANQUI-IA HACKATHON · 2024",
        description:
          "Built an AI predictive model and a working MVP during a 48-hour challenge.",
      },
      {
        title: "AI research",
        label: "UNDERGRADUATE RESEARCH GROUP",
        description:
          "Contributed to machine learning and EEG signal analysis projects exploring Alzheimer's detection.",
      },
    ],
  },
  contact: {
    eyebrow: "05 / WHAT'S NEXT?",
    title: "My next challenge starts",
    accent: "with a conversation.",
    description:
      "I'm looking for career opportunities in data, AI, and software development where I can contribute and grow. If you're hiring, have a project in mind, or would like to collaborate, let's talk.",
    email: "Send me an email",
    copy: "Copy email",
    copied: "Email copied",
    copyFailed: "Please select and copy the email address.",
    resume: "Download résumé",
    resumeNote: "PDF · English",
    links: "Find me elsewhere",
  },
  footer: {
    description: "Built with curiosity & intention.",
    rights: "All rights reserved.",
    top: "Back to top",
  },
};

const spanish: PortfolioContent = {
  locale: "es",
  meta: {
    title: "Kenny Zhu | Datos, IA y Software",
    description:
      "Portafolio de Kenny Zhu. Ingeniería de datos, investigación en IA y software colaborativo. Conoce mis proyectos, experiencia y formación.",
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Hablemos",
    menu: "Abrir menú",
    close: "Cerrar menú",
    label: "Navegación principal",
    lightMode: "Cambiar a modo blanco",
    darkMode: "Cambiar a modo negro",
  },
  hero: {
    eyebrow: "DATOS · IA · SOFTWARE",
    greeting: "Hola, soy Kenny Zhu",
    title: "Transformo complejidad",
    accent: "en posibilidades",
    description:
      "Conecto datos, inteligencia e ingeniería para crear software que marca la diferencia.",
    projects: "Explora mi trabajo",
    contact: "Hablemos",
    location: "Colombia",
    scroll: "Un poco más sobre mí",
    portraitLabel: "Retrato de Kenny Zhu",
    annotation: "La curiosidad abre posibilidades.",
    visual: {
      label: "Explora mis herramientas de ingeniería",
      title: "MIS HERRAMIENTAS DE INGENIERÍA",
      data: "Datos confiables",
      ai: "Inteligencia aplicada",
      aiStack: "LLMs / RAG / n8n",
      software: "Software útil",
      dataDetail:
        "Pipelines con Python y SQL, modelos confiables y dashboards para convertir la operación en decisiones.",
      dataFocus: {
        title: "Ingeniería de datos y analítica",
        items: [
          {
            title: "Pipelines ETL / ELT",
            description:
              "Flujos con Python y SQL para integrar datos de ventas, inventario y proveedores.",
          },
          {
            title: "Modelado de datos",
            description:
              "Modelos dimensionales y esquemas estrella que facilitan consultar y analizar la información del negocio.",
          },
          {
            title: "Calidad e integración",
            description:
              "Conectores de APIs, validaciones automáticas y alertas para mantener información consistente entre sistemas.",
          },
        ],
      },
      aiDetail:
        "Deep learning, RAG, agentes de IA y automatización con n8n para conectar conocimiento y procesos.",
      aiFocus: {
        title: "IA aplicada y automatización",
        items: [
          {
            title: "Deep learning",
            description:
              "Redes neuronales para analizar señales EEG y reconocer patrones.",
          },
          {
            title: "RAG y agentes de IA",
            description:
              "LLMs, recuperación de información y búsqueda vectorial para conectar agentes con conocimiento relevante.",
          },
          {
            title: "n8n y sistemas automatizados",
            description:
              "Flujos con n8n e integración de APIs para conectar sistemas, procesar datos y automatizar tareas repetitivas.",
          },
          {
            title: "Evaluación y MLOps",
            description:
              "Evaluación de modelos, RLHF y prácticas de MLOps orientadas a la calidad y la confiabilidad.",
          },
        ],
      },
      softwareDetail:
        "Experiencias web interactivas, colaboración en tiempo real e integraciones que resuelven necesidades concretas.",
      softwareFocus: {
        title: "Software y experiencias conectadas",
        items: [
          {
            title: "Desarrollo web",
            description:
              "Interfaces con TypeScript, React y Next.js, componentes reutilizables, diseños adaptables y atención a la accesibilidad.",
          },
          {
            title: "Colaboración en tiempo real",
            description:
              "WebSockets y Socket.io para sincronizar pizarras, código y chat en espacios compartidos como Calcium.",
          },
          {
            title: "APIs e integraciones",
            description:
              "Conexiones entre aplicaciones, fuentes de datos y servicios de IA para convertir herramientas independientes en flujos útiles.",
          },
        ],
      },
      pauseMotion: "Pausar animación",
      resumeMotion: "Reanudar animación",
    },
  },
  stats: [
    { value: "4.63", label: "GPA/ 5.00 UNINORTE" },
    { value: "3.72", label: "GPA / 4.00 · USF" },
    { value: "2nd", label: "Barranqui-IA Hackathon 2024" },
  ],
  about: {
    eyebrow: "01 / UN POCO DE CONTEXTO",
    title: "Curioso por naturaleza.\nIngeniero en la práctica.",
    description:
      "Soy Kenny Dong Jie Zhu Ye, con formación en Ciencias de la Computación e Ingeniería de Sistemas. Mi trabajo abarca pipelines de datos, modelos de IA y software interactivo, conectado por la curiosidad de entender cómo funcionan las cosas y cómo mejorarlas.",
    skillsTitle: "Mis herramientas",
    skills: [
      { title: "Lenguajes", items: english.about.skills[0].items },
      {
        title: "Datos e IA",
        items: [
          "ETL / ELT",
          "PySpark",
          "Machine Learning",
          "Deep Learning",
          "RAG",
          "Agentes de IA",
          "Bases de datos vectoriales",
          "MLOps",
          "RLHF",
          "Databricks",
        ],
      },
      { title: "Nube y herramientas", items: english.about.skills[2].items },
    ],
    educationTitle: "Formación",
    education: [
      {
        school: "University of South Florida",
        degree: "Licenciatura en Ciencias de la Computación",
        location: "Tampa, Florida",
        dates: "Ago. 2025 — May. 2026",
        gpa: "3.72 / 4.00",
      },
      {
        school: "Universidad del Norte",
        degree: "Ingeniería de Sistemas",
        location: "Barranquilla, Colombia",
        dates: "Feb. 2021 — May. 2026",
        gpa: "4.63 / 5.00",
      },
    ],
  },
  experience: {
    eyebrow: "02 / DE LA IDEA A LA PRÁCTICA",
    title: "Problemas reales.\nImpacto medible.",
    description:
      "Construyendo sistemas de datos confiables, evaluando IA y ayudando a estudiantes a comprender conceptos matemáticos complejos.",
    items: [
      {
        company: "Outlier",
        role: "RLHF · Evaluación de modelos de IA",
        dates: "Ene. 2025 — Feb. 2026",
        location: "Remoto",
        description:
          "Evalué modelos de lenguaje mediante aprendizaje por refuerzo con retroalimentación humana.",
        points: [
          "Analicé soluciones generadas por modelos para evaluar su corrección, eficiencia, casos límite y cumplimiento de instrucciones.",
          "Contribuí con retroalimentación humana para mejorar la confiabilidad de las respuestas generadas por IA.",
        ],
        tags: ["RLHF", "LLMs", "Evaluación de modelos"],
      },
      {
        company: "Restaurante Chi Kon",
        role: "Ingeniero de Datos",
        dates: "Feb. 2024 — Jul. 2025",
        location: "Barranquilla, Colombia",
        description:
          "Integré los datos de ventas, inventario y proveedores en una base analítica centralizada.",
        points: [
          "Desarrollé pipelines ETL/ELT con Python y SQL, conectores API, validaciones de calidad de datos y alertas automatizadas.",
          "Diseñé modelos dimensionales Star Schema y dashboards en Power BI y Tableau para analizar ventas, costos, inventario y rentabilidad.",
          "Reduje el tiempo de reportes manuales en más de un 40%.",
        ],
        tags: ["Python", "SQL", "ETL / ELT", "Power BI", "Tableau"],
      },
      {
        company: "Universidad del Norte",
        role: "Asistente de docencia · Métodos Numéricos y Cálculo",
        dates: "Ene. 2022 — Ene. 2024",
        location: "Barranquilla, Colombia",
        description:
          "Apoyé a profesores de Métodos Numéricos, Cálculo I y Cálculo II con tutorías y recursos de aprendizaje interactivos.",
        points: [
          "Realicé tutorías y sesiones de resolución de problemas para más de 40 estudiantes.",
          "Desarrollé recursos interactivos en Python y Jupyter Notebook para visualizar interpolación, Newton–Raphson, Runge–Kutta y análisis de error numérico.",
        ],
        tags: ["Python", "Jupyter Notebook", "Métodos numéricos", "Cálculo"],
      },
    ],
  },
  projects: {
    eyebrow: "03 / PROYECTOS DESTACADOS",
    title: "Ideas que toman forma.",
    description:
      "Una selección de proyectos sobre cómo colaboramos, entendemos los datos y nos conectamos con la IA.",
    all: "Todos",
    ai: "IA e investigación",
    software: "Software",
    details: "Explora el proyecto",
    github: "Más en GitHub",
    visuals: {
      conversation: "Un espacio para escucharte",
      question: "¿Dónde puedo encontrar apoyo?",
      answer: "Exploremos juntos algunos recursos útiles.",
      collaborative: "Un lienzo. Muchas ideas.",
      connected: "Conectados",
      research: "De señales a conocimiento",
      signal: "EEG · ANÁLISIS DE SEÑALES",
    },
    list: [
      {
        id: "autism-insight",
        name: "AutismInsight",
        category: "ai",
        label: "IA CONVERSACIONAL",
        description:
          "Un chatbot conversacional que ofrece apoyo emocional y recursos relacionados con el autismo mediante modelos de lenguaje y lógica basada en reglas.",
        tags: ["LLMs", "API de GPT", "Lógica basada en reglas"],
        details: [
          "Combiné las APIs de GPT-3/4 con lógica conversacional basada en reglas.",
          "Diseñé conversaciones orientadas al apoyo emocional y al acceso a recursos sobre autismo.",
        ],
        visual: "chat",
      },
      {
        id: "calcium",
        name: "Calcium",
        category: "software",
        label: "COLABORACIÓN EN TIEMPO REAL",
        description:
          "Un espacio compartido que reúne una pizarra colaborativa, código editable, herramientas de dibujo y chat en una sola experiencia.",
        tags: ["WebSockets", "Socket.io", "Python", "JavaScript"],
        details: [
          "Sincronicé dibujos, fragmentos de código editables y chat en tiempo real con WebSockets / Socket.io.",
          "Incorporé resaltado de sintaxis y ejecución de Python y JavaScript en un entorno aislado.",
        ],
        visual: "editor",
      },
      {
        id: "eeg-research",
        name: "EEG e investigación de Alzheimer",
        category: "ai",
        label: "PROCESAMIENTO DE SEÑALES E IA",
        description:
          "Software de investigación que combina análisis de señales EEG, redes neuronales y explicaciones visuales para explorar biomarcadores de Alzheimer.",
        tags: ["FFT", "Wavelets", "CNNs", "LLMs"],
        details: [
          "Apliqué procesamiento FFT y wavelets con modelos CNN para clasificar biomarcadores EEG.",
          "Integré explicaciones con LLMs, mapas de calor de anomalías, métricas de confianza e interpretaciones en una interfaz gráfica.",
          "Proyecto de investigación sobre clasificación de biomarcadores; no se afirma validación clínica.",
        ],
        visual: "signal",
      },
    ],
  },
  achievements: {
    eyebrow: "04 / MÁS ALLÁ DEL CÓDIGO",
    title: "Aprender. Crear. Contribuir.",
    items: [
      {
        title: "2.º lugar",
        label: "HACKATHON BARRANQUI-IA · 2024",
        description:
          "Desarrollé un modelo predictivo con IA y un MVP durante un reto de 48 horas.",
      },
      {
        title: "Investigación en IA",
        label: "SEMILLERO DE INVESTIGACIÓN",
        description:
          "Contribuí a proyectos de aprendizaje automático y análisis de señales EEG para explorar la detección de Alzheimer.",
      },
    ],
  },
  contact: {
    eyebrow: "05 / ¿QUÉ SIGUE?",
    title: "Mi próximo reto empieza",
    accent: "con una conversación.",
    description:
      "Busco oportunidades laborales en datos, IA y desarrollo de software donde pueda aportar y seguir creciendo. Si estás contratando, tienes un proyecto en mente o quieres colaborar, hablemos.",
    email: "Escríbeme",
    copy: "Copiar correo",
    copied: "Correo copiado",
    copyFailed: "Selecciona y copia la dirección de correo.",
    resume: "Descargar CV",
    resumeNote: "PDF · Español",
    links: "También me encuentras en",
  },
  footer: {
    description: "Hecho con curiosidad e intención.",
    rights: "Todos los derechos reservados.",
    top: "Volver arriba",
  },
};

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "es";
}

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return locale === "es" ? spanish : english;
}

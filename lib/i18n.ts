export type Language = "pt" | "en";

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  person: {
    name: string;
  };
  nav: {
    home: string;
    story: string;
    projects: string;
    process: string;
    highlights: string;
    contact: string;
    languageAria: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaProjects: string;
    ctaProfile: string;
    ctaProjectsAria: string;
    ctaProfileAria: string;
    scrollHint: string;
    scrollHintAria: string;
  };
  sectionLabel: string;
  sections: {
    story: {
      title: string;
      description: string;
      cards: Array<{ title: string; text: string }>;
    };
    projects: {
      title: string;
      description: string;
      caseStudy: string;
      caseStudyAria: string;
      github: string;
      githubAria: string;
      privateStatus: string;
      viewAll: string;
    };
    process: {
      title: string;
      description: string;
      stepLabel: string;
      steps: string[];
    };
    highlights: {
      title: string;
      description: string;
      metricsTitle: string;
      metrics: Array<{ value: string; label: string }>;
      bullets: string[];
    };
  };
  footer: {
    label: string;
    title: string;
    emailAria: string;
    github: string;
    linkedin: string;
    githubAria: string;
    linkedinAria: string;
    copy: string;
  };
  progress: {
    label: string;
  };
  caseStudy: {
    overviewLabel: string;
    problemLabel: string;
    solutionLabel: string;
    challengesLabel: string;
    architectureLabel: string;
    resultsLabel: string;
    learningsLabel: string;
    linksLabel: string;
    backLabel: string;
    backHomeLabel: string;
    caseListTitle: string;
    caseListDescription: string;
    privateCodeLabel: string;
    liveLabel: string;
    repoLabel: string;
    docsLabel: string;
    pipelineLabel: string;
    navLabel: string;
    requestCodeLabel: string;
    topLabel: string;
    productViewLabel: string;
    galleryLabel: string;
    openImageLabel: string;
    closeImageLabel: string;
  };
};

export const content: Record<Language, SiteContent> = {
  pt: {
    meta: {
      title: "Vítor Martins | Portfolio Fullstack",
      description: "Portfólio de ítor Martins, desenvolvedor fullstack focado em produtos digitais."
    },
    person: {
      name: "Vítor Martins"
    },
    nav: {
      home: "Início",
      story: "História",
      projects: "Projetos",
      process: "Processo",
      highlights: "Destaques",
      contact: "Contato",
      languageAria: "Trocar idioma para inglês"
    },
    hero: {
      eyebrow: "Vítor Martins",
      title: "Onde ideias viram produto.",
      subtitle: "Desenvolvimento de produtos digitais em Mobile, Web e SaaS.",
      ctaProjects: "Ver projetos",
      ctaProfile: "GitHub / LinkedIn",
      ctaProjectsAria: "Ir para a seção de projetos",
      ctaProfileAria: "Abrir perfil do GitHub ou LinkedIn",
      scrollHint: "Role",
      scrollHintAria: "Rolar para a próxima seção"
    },
    sectionLabel: "Cena",
    sections: {
      story: {
        title: "Minha história",
        description:
          "Construo produtos digitais com visão de negocio e engenharia sólida, mantendo velocidade sem perder clareza arquitetural.",
        cards: [
          {
            title: "Base em produto e UX",
            text: "Aprendi a construir conectando experiência do usuário com viabilidade tecnica e impacto de negocio."
          },
          {
            title: "De freela a construtor de sistemas",
            text: "Saí de entregas pontuais para produtos completos com dados estruturados, fluxos operacionais e automacoes."
          },
          {
            title: "Foco atual: SaaS escalável",
            text: "Projeto arquiteturas para crescimento, performance e manutencao no longo prazo."
          }
        ]
      },
      projects: {
        title: "Projetos",
        description: "Produtos em mobile, web, educação, e-commerce e SaaS B2B.",
        caseStudy: "Estudo de caso",
        caseStudyAria: "Abrir estudo de caso",
        github: "GitHub",
        githubAria: "Abrir repositório no GitHub",
        privateStatus: "Projeto privado",
        viewAll: "Ver todos os projetos"
      },
      process: {
        title: "Como eu construo",
        description: "Produto e processo. Iteração rápida, decisões técnicas claras e foco no que gera impacto.",
        stepLabel: "Etapa",
        steps: [
          "Discovery e mapeamento de restrições",
          "Arquitetura de UX e validação técnica rápida",
          "Construção iterativa com instrumentação e métricas",
          "Lançamento, monitoramento e melhoria contínua"
        ]
      },
      highlights: {
        title: "Destaques técnicos",
        description: "Arquiteturas para manter velocidade com segurança e previsibilidade operacional.",
        metricsTitle: "Indicadores",
        metrics: [
          { value: "10+", label: "Produtos desenvolvidos" },
          { value: "4", label: "Domínios de produto" },
          { value: "B2B", label: "Foco em SaaS" },
          { value: "UX", label: "Engenharia orientada a produto" }
        ],
        bullets: [
          "Arquitetura multi-tenant com isolamento claro",
          "Políticas RLS para controle seguro de acesso",
          "Fluxos offline-first para uso em campo",
          "Dashboards com métricas de produto e operação",
          "Automações para reduzir tarefas manuais"
        ]
      }
    },
    footer: {
      label: "Contato",
      title: "Vamos construir algo?",
      emailAria: "Enviar e-mail para Vítor Martins",
      github: "GitHub",
      linkedin: "LinkedIn",
      githubAria: "Abrir perfil do GitHub",
      linkedinAria: "Abrir perfil do LinkedIn",
      copy: "Vítor Martins (c) 2026"
    },
    progress: {
      label: "CENA"
    },
    caseStudy: {
      overviewLabel: "Visão geral",
      problemLabel: "Problema",
      solutionLabel: "Solução",
      challengesLabel: "Desafios técnicos",
      architectureLabel: "Arquitetura",
      resultsLabel: "Resultados",
      learningsLabel: "Aprendizados",
      linksLabel: "Links",
      backLabel: "Voltar para projetos",
      backHomeLabel: "Voltar para a pagina inicial",
      caseListTitle: "Estudos de caso",
      caseListDescription: "Uma visão direta do problema, solucao e arquitetura de cada projeto.",
      privateCodeLabel: "Código disponível sob solicitação",
      liveLabel: "Projeto online",
      repoLabel: "GitHub",
      docsLabel: "Documentação",
      pipelineLabel: "Arquitetura técnica",
      navLabel: "Índice",
      requestCodeLabel: "Disponível sob solicitação",
      topLabel: "Topo",
      productViewLabel: "Interface principal do produto",
      galleryLabel: "Galeria",
      openImageLabel: "Abrir imagem",
      closeImageLabel: "Fechar imagem"
    }
  },
  en: {
    meta: {
      title: "Vitor Martins | Fullstack Portfolio",
      description: "Cinematic portfolio for Vitor Martins, fullstack engineer."
    },
    person: {
      name: "Vitor Martins"
    },
    nav: {
      home: "Home",
      story: "Story",
      projects: "Projects",
      process: "Process",
      highlights: "Highlights",
      contact: "Contact",
      languageAria: "Switch language to Portuguese"
    },
    hero: {
      eyebrow: "Vitor Martins",
      title: "I build real products from idea to production.",
      subtitle: "Mobile + Web. UX-first. Scalable systems.",
      ctaProjects: "View projects",
      ctaProfile: "GitHub / LinkedIn",
      ctaProjectsAria: "Navigate to projects section",
      ctaProfileAria: "Open GitHub or LinkedIn profile",
      scrollHint: "Scroll",
      scrollHintAria: "Scroll to the next section"
    },
    sectionLabel: "Scene",
    sections: {
      story: {
        title: "My story",
        description:
          "I build with product context first and execute with robust engineering to sustain speed and scale.",
        cards: [
          {
            title: "Product and UX foundation",
            text: "I learned to ship by linking UX decisions to technical feasibility and business outcomes."
          },
          {
            title: "From freelance to systems builder",
            text: "I moved from isolated projects to complete products with data layers, workflows, and automation."
          },
          {
            title: "Current focus: scalable SaaS",
            text: "I design resilient architectures built for growth, performance, and maintainability."
          }
        ]
      },
      projects: {
        title: "Projects",
        description: "Selected work across mobile, web, education, e-commerce, and B2B SaaS.",
        caseStudy: "Case Study",
        caseStudyAria: "Open case study",
        github: "GitHub",
        githubAria: "Open GitHub repository",
        privateStatus: "Private",
        viewAll: "View all case studies"
      },
      process: {
        title: "How I build",
        description: "Delivery is a system. Lean process, fast loops, and business-driven execution.",
        stepLabel: "Step",
        steps: [
          "Discovery and constraints mapping",
          "Rapid UX architecture and technical spike",
          "Iterative build with instrumentation",
          "Launch, monitor, and optimize loops"
        ]
      },
      highlights: {
        title: "Technical highlights",
        description: "Architecture that keeps velocity high without compromising safety or operational clarity.",
        metricsTitle: "Delivery metrics",
        metrics: [
          { value: "10+", label: "Products shipped" },
          { value: "4", label: "Core domains" },
          { value: "B2B", label: "SaaS focus" },
          { value: "UX", label: "Driven engineering" }
        ],
        bullets: [
          "Multi-tenant architecture with explicit isolation boundaries",
          "RLS policies and secure data access patterns",
          "Offline-first workflows for field reliability",
          "Dashboards with product and operations KPIs",
          "Automation pipelines to reduce manual operations"
        ]
      }
    },
    footer: {
      label: "Contact",
      title: "Let's build something real.",
      emailAria: "Send email to Vitor Martins",
      github: "GitHub",
      linkedin: "LinkedIn",
      githubAria: "Open GitHub profile",
      linkedinAria: "Open LinkedIn profile",
      copy: "Vitor Martins (c) 2026"
    },
    progress: {
      label: "SCENE"
    },
    caseStudy: {
      overviewLabel: "Overview",
      problemLabel: "Problem",
      solutionLabel: "Solution",
      challengesLabel: "Technical challenges",
      architectureLabel: "Architecture",
      resultsLabel: "Results",
      learningsLabel: "Learnings",
      linksLabel: "Links",
      backLabel: "Back to projects",
      backHomeLabel: "Back to home",
      caseListTitle: "Case studies",
      caseListDescription: "A direct breakdown of problem, solution, and architecture for each project.",
      privateCodeLabel: "Code available upon request",
      liveLabel: "Live",
      repoLabel: "GitHub",
      docsLabel: "Docs",
      pipelineLabel: "Technical pipeline",
      navLabel: "Index",
      requestCodeLabel: "Available upon request",
      topLabel: "Top",
      productViewLabel: "Main product interface",
      galleryLabel: "Gallery",
      openImageLabel: "Open image",
      closeImageLabel: "Close image"
    }
  }
};

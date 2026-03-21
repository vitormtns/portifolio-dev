export type CaseStudySlug =
  | "nexus-backend"
  | "nexus-frontend"
  | "fogacas-lanchonete"
  | "bovnex"
  | "beta-for-business"
  | "dolmini"
  | "beta-for-teams";

export type CaseStudyStatus = "private" | "public" | "partial";

type LocalizedText = {
  pt: string;
  en: string;
};

type LocalizedSection = {
  pt: {
    paragraph: string;
    bullets: string[];
  };
  en: {
    paragraph: string;
    bullets: string[];
  };
};

type LocalizedBullets = {
  pt: string[];
  en: string[];
};

type PipelineDiagram = {
  nodes: LocalizedText[];
  edges: Array<[number, number]>;
};

export type CaseStudy = {
  slug: CaseStudySlug;
  featured: boolean;
  title: LocalizedText;
  tagline: LocalizedText;
  status: CaseStudyStatus;
  stackBadges: string[];
  heroTheme: {
    from: string;
    to: string;
    accent: string;
  };
  overview: LocalizedText;
  sections: {
    problem: LocalizedSection;
    solution: LocalizedBullets;
    challenges: LocalizedBullets;
    architecture: {
      bullets: LocalizedBullets;
      pipeline: PipelineDiagram;
    };
    results: LocalizedBullets;
    learnings: LocalizedBullets;
  };
  links: {
    live?: string;
    repo?: string;
    docs?: string;
  };
  media?: {
    cover?: boolean;
    gallery?: number;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "nexus-backend",
    featured: true,
    title: { pt: "Nexus Backend Test", en: "Nexus Backend Test" },
    tagline: {
      pt: "API backend para operações financeiras com autenticação, transações e integração externa.",
      en: "A backend API for financial operations with authentication, transactions, and external integration."
    },
    status: "partial",
    stackBadges: ["Node.js", "TypeScript", "API REST", "PostgreSQL", "Auth", "Financial Logic", "External API"],
    heroTheme: { from: "#0B1320", to: "#182335", accent: "rgba(94, 155, 255, 0.26)" },
    overview: {
      pt: "Teste técnico backend focado em construir uma API funcional para operações financeiras, com autenticação, controle de saldo, transações e integração com serviço externo de cotação.",
      en: "Backend technical test focused on building a functional API for financial operations, including authentication, balance control, transactions, and external quotation service integration."
    },
    sections: {
      problem: {
        pt: {
          paragraph:
            "O desafio era estruturar uma API clara e confiável para simular operações financeiras, mantendo regras de negócio consistentes e boa organização da aplicação.",
          bullets: [
            "Necessidade de autenticação e controle de acesso",
            "Operações financeiras com validação de saldo",
            "Integração com cotação externa para conversão de ativos",
            "Estrutura organizada para teste técnico e deploy"
          ]
        },
        en: {
          paragraph:
            "The challenge was to structure a clear and reliable API to simulate financial operations while keeping the business rules consistent and the application well organized.",
          bullets: [
            "Authentication and access control requirements",
            "Financial operations with balance validation",
            "External quotation integration for asset conversion",
            "An organized structure for the technical test and deployment"
          ]
        }
      },
      solution: {
        pt: [
          "API com autenticação e rotas protegidas",
          "Operações de depósito, saque e conversão de ativos",
          "Histórico de transações com leitura clara dos dados",
          "Deploy funcional para demonstração em produção"
        ],
        en: [
          "API with authentication and protected routes",
          "Deposit, withdrawal, and asset conversion operations",
          "Transaction history with clear data visibility",
          "A working production deployment for demonstration"
        ]
      },
      challenges: {
        pt: [
          "Garantir consistência nas regras de saldo e transação",
          "Integrar serviço externo sem comprometer a estrutura da aplicação",
          "Manter o projeto legível para avaliação técnica",
          "Equilibrar velocidade de entrega com organização de código"
        ],
        en: [
          "Keeping balance and transaction rules consistent",
          "Integrating an external service without weakening the application structure",
          "Keeping the project readable for technical evaluation",
          "Balancing delivery speed with code organization"
        ]
      },
      architecture: {
        bullets: {
          pt: [
            "Camada de API organizada por responsabilidades",
            "Persistência de dados com banco relacional",
            "Integração externa encapsulada para cotações",
            "Fluxo de autenticação desacoplado da lógica financeira"
          ],
          en: [
            "API layer organized by responsibility",
            "Relational database persistence",
            "Encapsulated external integration for quotations",
            "Authentication flow decoupled from the financial logic"
          ]
        },
        pipeline: {
          nodes: [
            { pt: "API", en: "API" },
            { pt: "Serviços", en: "Services" },
            { pt: "Banco de dados", en: "Database" },
            { pt: "API externa de cotações", en: "External Quotes API" }
          ],
          edges: [
            [0, 1],
            [1, 2],
            [1, 3]
          ]
        }
      },
      results: {
        pt: [
          "API funcional com autenticação e operações principais implementadas",
          "Deploy em produção para avaliação técnica",
          "Base consistente para demonstrar lógica backend"
        ],
        en: [
          "Working API with authentication and core operations implemented",
          "Production deployment for technical evaluation",
          "A consistent base to demonstrate backend logic"
        ]
      },
      learnings: {
        pt: [
          "Testes técnicos também exigem boa comunicação de arquitetura",
          "Organização da regra de negócio pesa tanto quanto a funcionalidade",
          "Deploy funcional aumenta muito a percepção de entrega"
        ],
        en: [
          "Technical tests also demand clear architectural communication",
          "Business rule organization matters as much as functionality",
          "A working deployment strongly improves delivery perception"
        ]
      }
    },
    links: {
      repo: "https://github.com/vitormtns/testenexus_backend",
      live: "https://testenexus-backend.vercel.app/",
      docs: "#"
    },
    media: { cover: true, gallery: 2 }
  },
  {
    slug: "nexus-frontend",
    featured: true,
    title: { pt: "Nexus Frontend Test", en: "Nexus Frontend Test" },
    tagline: {
      pt: "Dashboard frontend para operações financeiras com foco em clareza visual e integração com API.",
      en: "A frontend dashboard for financial operations focused on visual clarity and API integration."
    },
    status: "partial",
    stackBadges: ["React", "TypeScript", "Vite", "TailwindCSS", "Dashboard UI", "API Integration", "Responsive Design"],
    heroTheme: { from: "#12182C", to: "#241B3A", accent: "rgba(126, 115, 255, 0.22)" },
    overview: {
      pt: "Teste técnico frontend voltado para construir uma interface clara e responsiva para operações financeiras, com foco em experiência de uso e integração com dados reais.",
      en: "Frontend technical test focused on building a clear and responsive interface for financial operations, with emphasis on usability and real API integration."
    },
    sections: {
      problem: {
        pt: {
          paragraph:
            "O objetivo era transformar fluxos financeiros em uma interface simples de navegar, mantendo feedback visual claro e boa leitura dos dados.",
          bullets: [
            "Dashboard precisava ser direto e compreensível",
            "Integração com API para exibir dados e operações",
            "Fluxos de depósito, saque e histórico em uma interface coesa",
            "Necessidade de responsividade e boa experiência visual"
          ]
        },
        en: {
          paragraph:
            "The goal was to turn financial flows into an interface that felt easy to navigate while keeping visual feedback clear and the data easy to read.",
          bullets: [
            "The dashboard needed to feel direct and understandable",
            "API integration to display data and operations",
            "Deposit, withdrawal, and history flows in one cohesive interface",
            "Responsiveness and strong visual usability were required"
          ]
        }
      },
      solution: {
        pt: [
          "Dashboard com indicadores, saldos e operações centralizadas",
          "Integração com API para cotações e transações",
          "Histórico de transações com leitura amigável",
          "Layout responsivo com foco em clareza"
        ],
        en: [
          "Dashboard with centralized indicators, balances, and operations",
          "API integration for quotations and transactions",
          "Transaction history with user-friendly readability",
          "Responsive layout focused on clarity"
        ]
      },
      challenges: {
        pt: [
          "Traduzir fluxos financeiros em UX simples",
          "Manter consistência visual entre telas e estados",
          "Exibir feedback de erro, sucesso e carregamento com clareza",
          "Organizar a interface para avaliação técnica rápida"
        ],
        en: [
          "Translating financial flows into simple UX",
          "Maintaining visual consistency across screens and states",
          "Showing error, success, and loading feedback clearly",
          "Organizing the interface for quick technical evaluation"
        ]
      },
      architecture: {
        bullets: {
          pt: [
            "Frontend em componentes reutilizáveis",
            "Camada de integração com API separada da apresentação",
            "Gerenciamento de estado focado em simplicidade",
            "Estrutura responsiva orientada a dashboard"
          ],
          en: [
            "Frontend built with reusable components",
            "API integration layer separated from presentation",
            "State management focused on simplicity",
            "Responsive structure tailored to dashboard usage"
          ]
        },
        pipeline: {
          nodes: [
            { pt: "UI", en: "UI" },
            { pt: "Componentes", en: "Components" },
            { pt: "Camada de API", en: "API Layer" },
            { pt: "Backend API", en: "Backend API" }
          ],
          edges: [
            [0, 1],
            [1, 2],
            [2, 3]
          ]
        }
      },
      results: {
        pt: [
          "Dashboard funcional e integrado com API",
          "Interface clara para demonstrar raciocínio de front-end",
          "Projeto pronto para deploy e avaliação"
        ],
        en: [
          "Working dashboard integrated with the API",
          "Clear interface to demonstrate front-end thinking",
          "Project ready for deployment and evaluation"
        ]
      },
      learnings: {
        pt: [
          "Boa UI em teste técnico depende mais de clareza do que de excesso visual",
          "Integração real com API eleva bastante a qualidade percebida",
          "Responsividade bem resolvida faz diferença na apresentação"
        ],
        en: [
          "Good UI in a technical test depends more on clarity than visual excess",
          "Real API integration raises perceived quality significantly",
          "Well-resolved responsiveness improves the presentation"
        ]
      }
    },
    links: {
      repo: "https://github.com/vitormtns/testenexus_frontend",
      live: "https://testenexus-frontend.vercel.app/home",
      docs: "#"
    },
    media: { cover: true, gallery: 2 }
  },
  {
    slug: "fogacas-lanchonete",
    featured: true,
    title: { pt: "Sistema de Lanchonete do Fogaça’s", en: "Fogaça’s Snack Bar System" },
    tagline: {
      pt: "Sistema para gestão de pedidos, produtos e operação de lanchonete com foco em uso real.",
      en: "A system for managing orders, products, and snack bar operations with a focus on real-world usage."
    },
    status: "private",
    stackBadges: ["React", "TypeScript", "PostgreSQL", "Order Management", "Product Catalog", "Real Workflow", "Admin Interface"],
    heroTheme: { from: "#181412", to: "#2A2526", accent: "rgba(255, 167, 93, 0.18)" },
    overview: {
      pt: "Sistema desenvolvido para atender uma necessidade real de operação em lanchonete, estruturando produtos, variações e fluxo de pedidos de forma mais prática.",
      en: "A system built to support a real snack bar operation, structuring products, variations, and the ordering flow in a more practical way."
    },
    sections: {
      problem: {
        pt: {
          paragraph:
            "A operação precisava de mais organização para lidar com produtos, categorias, variações e pedidos sem depender de processos manuais desestruturados.",
          bullets: [
            "Cadastro de categorias e produtos com organização clara",
            "Necessidade de lidar com variações e opções de pedido",
            "Fluxo de operação mais prático para uso no dia a dia",
            "Estrutura pensada para crescer sem virar bagunça"
          ]
        },
        en: {
          paragraph:
            "The operation needed more structure to handle products, categories, variations, and orders without relying on messy manual processes.",
          bullets: [
            "Clear organization for categories and product registration",
            "Need to handle variations and order options",
            "A more practical day-to-day operational flow",
            "A structure designed to grow without becoming chaotic"
          ]
        }
      },
      solution: {
        pt: [
          "Sistema com cadastro de produtos, categorias e variações",
          "Base para pedidos com snapshot das opções escolhidas",
          "Modelagem pensada para começar simples e crescer depois",
          "Interface voltada para operação mais rápida"
        ],
        en: [
          "System with products, categories, and variation management",
          "Order foundation with snapshots of selected options",
          "Data modeling designed to start simple and grow later",
          "Interface focused on faster operations"
        ]
      },
      challenges: {
        pt: [
          "Modelar variações de produto de forma simples no MVP",
          "Evitar complexidade excessiva logo na primeira versão",
          "Manter clareza de uso para operação real",
          "Pensar a estrutura já pronta para expansão futura"
        ],
        en: [
          "Modeling product variations simply in the MVP",
          "Avoiding excessive complexity in the first version",
          "Keeping the product clear enough for real operation",
          "Designing the structure with future expansion in mind"
        ]
      },
      architecture: {
        bullets: {
          pt: [
            "Catálogo de produtos como base central",
            "Camada de variações desacoplada e escalável",
            "Estrutura preparada para persistir escolhas do pedido",
            "Modelagem orientada a MVP com espaço para evolução"
          ],
          en: [
            "Product catalog as the central foundation",
            "Decoupled and scalable variations layer",
            "Structure prepared to persist order choices",
            "MVP-oriented modeling with room to evolve"
          ]
        },
        pipeline: {
          nodes: [
            { pt: "Admin UI", en: "Admin UI" },
            { pt: "Catálogo de produtos", en: "Product Catalog" },
            { pt: "Camada de variações", en: "Variations Layer" },
            { pt: "Pedidos", en: "Orders" }
          ],
          edges: [
            [0, 1],
            [1, 2],
            [2, 3]
          ]
        }
      },
      results: {
        pt: [
          "Estrutura inicial pronta para operação e expansão",
          "Modelagem clara para produtos com variações",
          "Projeto com aderência a uma necessidade real"
        ],
        en: [
          "Initial structure ready for operation and expansion",
          "Clear modeling for products with variations",
          "Project aligned with a real operational need"
        ]
      },
      learnings: {
        pt: [
          "Projetos reais exigem equilíbrio entre simplicidade e crescimento futuro",
          "MVP bom não é o que faz tudo, é o que resolve o essencial com clareza",
          "Modelagem inicial bem feita economiza retrabalho"
        ],
        en: [
          "Real projects require balance between simplicity and future growth",
          "A good MVP is not the one that does everything, but the one that solves the essential clearly",
          "A solid initial model reduces rework later"
        ]
      }
    },
    links: {
      repo: "https://github.com/vitormtns/fogacaslanchonete",
      live: "https://fogacaslanchonete.vercel.app/",
      docs: "#"
    },
    media: { cover: true, gallery: 2 }
  },
  {
    slug: "bovnex",
    featured: true,
    title: { pt: "BovNex", en: "BovNex" },
    tagline: {
      pt: "SaaS mobile-first para gestão de rebanho e rotina de campo.",
      en: "A mobile-first SaaS for livestock management and field routines."
    },
    status: "private",
    stackBadges: ["Flutter", "Dart", "Supabase", "PostgreSQL", "RLS", "Sync-ready", "UX Premium"],
    heroTheme: { from: "#092124", to: "#0F2F35", accent: "rgba(242,192,74,0.28)" },
    overview: {
      pt: "Plataforma focada em operação rural com experiência clara para registrar eventos e acompanhar o rebanho com consistência.",
      en: "A platform focused on rural operations with clear UX for recording events and tracking livestock with consistency."
    },
    sections: {
      problem: {
        pt: {
          paragraph:
            "A rotina do produtor precisava ser mais confiável, sem depender de anotações soltas ou planilhas fragmentadas.",
          bullets: [
            "Dependência de anotações e planilhas para eventos do rebanho",
            "Histórico inconsistente em sanidade, reprodução e manejo",
            "Necessidade de velocidade em campo mesmo com muitos animais"
          ]
        },
        en: {
          paragraph:
            "Producers needed a more reliable daily flow, without relying on scattered notes and fragmented spreadsheets.",
          bullets: [
            "Dependence on notes and spreadsheets for livestock events",
            "Inconsistent historical records for health, breeding, and handling",
            "Field routines required speed even with large herds"
          ]
        }
      },
      solution: {
        pt: [
          "Aplicativo com cadastro de animais, eventos e painéis de acompanhamento",
          "Jornada diária com pendências e próximos passos como núcleo da experiência",
          "Base preparada para relatórios e automações futuras"
        ],
        en: [
          "App with animal records, event tracking, and clear operational dashboards",
          "A daily journey with pending tasks and next steps as the UX core",
          "Foundation prepared for future reports and automations"
        ]
      },
      challenges: {
        pt: [
          "Modelagem para grandes rebanhos sem sobrecarregar a interface",
          "Isolamento e segurança de dados para múltiplas fazendas e perfis",
          "Arquitetura preparada para comportamento offline e latência rural"
        ],
        en: [
          "Data modeling for large herds without overwhelming the interface",
          "Secure data isolation for multi-farm setups and role profiles",
          "Architecture ready for offline behavior and rural latency"
        ]
      },
      architecture: {
        bullets: {
          pt: [
            "Flutter no front-end com camada de dados desacoplada",
            "Supabase/Postgres para persistência e segurança com RLS",
            "Regras de negócio preparadas para eventos, relatórios e alertas"
          ],
          en: [
            "Flutter front-end with a decoupled data layer",
            "Supabase/Postgres persistence secured with RLS",
            "Business rules structured for events, reports, and alerts"
          ]
        },
        pipeline: {
          nodes: [
            { pt: "Flutter UI", en: "Flutter UI" },
            { pt: "Camada de dados", en: "Data layer" },
            { pt: "Supabase API", en: "Supabase API" },
            { pt: "PostgreSQL + RLS", en: "PostgreSQL + RLS" }
          ],
          edges: [
            [0, 1],
            [1, 2],
            [2, 3]
          ]
        }
      },
      results: {
        pt: [
          "Protótipo funcional com consistência entre UX e dados",
          "Base pronta para piloto e validação com produtores"
        ],
        en: [
          "A functional prototype with consistent UX and data flows",
          "Foundation ready for pilot validation with producers"
        ]
      },
      learnings: {
        pt: [
          "UX para operação em massa exige hierarquia visual rigorosa",
          "Modelagem orientada a produto acelera a evolução das regras"
        ],
        en: [
          "Mass-operation UX demands strict visual hierarchy",
          "Product-oriented data modeling accelerates rule evolution"
        ]
      }
    },
    links: {},
    media: { cover: true, gallery: 6 }
  },
  {
    slug: "beta-for-business",
    featured: false,
    title: { pt: "Beta for Business", en: "Beta for Business" },
    tagline: {
      pt: "Plataforma de atividades e listening para ensino de inglês com painel do aluno e da professora.",
      en: "An English learning platform with activities, listening, and teacher/student dashboards."
    },
    status: "partial",
    stackBadges: ["WordPress", "PHP", "Shortcodes", "H5P", "MySQL", "Front-end custom", "UX"],
    heroTheme: { from: "#1A1327", to: "#1A1F34", accent: "rgba(167,139,250,0.32)" },
    overview: {
      pt: "Produto educacional com trilhas por nível e painéis dedicados para aluno e professora em uma experiência direta e objetiva.",
      en: "An education product with level-based learning paths and dedicated student/teacher dashboards."
    },
    sections: {
      problem: {
        pt: {
          paragraph:
            "Era necessário estruturar conteúdo didático, feedback e progresso em uma experiência simples para uso recorrente.",
          bullets: [
            "Organização de atividades por nível (basic, intermediate, advanced)",
            "Necessidade de correção, feedback e acompanhamento de progresso",
            "Listening com áudio, script e navegação clara",
            "Login e administração com segurança e UX melhores"
          ]
        },
        en: {
          paragraph: "The platform needed to structure content, feedback, and progress tracking in a simple recurring experience.",
          bullets: [
            "Activity organization by level (basic, intermediate, advanced)",
            "Need for correction workflows, feedback, and progress tracking",
            "Listening required audio, script, and clear navigation",
            "Login and admin required stronger security and UX"
          ]
        }
      },
      solution: {
        pt: [
          "Painel do aluno com progresso, desempenho e continuidade",
          "Painel da professora para tarefas e gestão de atividades",
          "Taxonomias por nível e tipo com renderização customizada",
          "Dark/light mode e ajustes de layout para mobile e desktop",
          "Controle de aceite de termos e versões"
        ],
        en: [
          "Student dashboard with progress, performance, and continuity",
          "Teacher dashboard for task creation and homework management",
          "Taxonomy-based organization with custom rendering",
          "Dark/light theme and responsive layout tuning",
          "Terms acceptance and version handling"
        ]
      },
      challenges: {
        pt: [
          "Usar WordPress como backend mantendo um front-end moderno",
          "Superfície grande de shortcodes e manutenção organizada no functions.php",
          "Consistência de renderização entre páginas e estados diferentes"
        ],
        en: [
          "Using WordPress as backend while keeping a modern front-end",
          "Large shortcode surface and maintainability in functions.php",
          "Consistent rendering across different pages and states"
        ]
      },
      architecture: {
        bullets: {
          pt: [
            "WordPress com users, posts, metas e taxonomias",
            "Camada de shortcodes PHP para componentes e fluxos",
            "Integração com atividades H5P e armazenamento de progresso"
          ],
          en: [
            "WordPress with users, posts, metas, and taxonomies",
            "PHP shortcode layer for UI components and flows",
            "H5P activity integration with progress storage"
          ]
        },
        pipeline: {
          nodes: [
            { pt: "UI custom", en: "Custom UI" },
            { pt: "Shortcodes PHP", en: "PHP shortcodes" },
            { pt: "WP Core + H5P", en: "WP Core + H5P" },
            { pt: "MySQL", en: "MySQL" }
          ],
          edges: [
            [0, 1],
            [1, 2],
            [2, 3]
          ]
        }
      },
      results: {
        pt: ["Plataforma utilizável com trilhas por nível e painel prático"],
        en: ["Usable platform with level-based learning paths and practical dashboards"]
      },
      learnings: {
        pt: ["Engenharia pragmática em WordPress com foco em segurança, performance e manutenção"],
        en: ["Pragmatic WordPress engineering with security, performance, and maintainability in focus"]
      }
    },
    links: {},
    media: { cover: true, gallery: 6 }
  },
  {
    slug: "dolmini",
    featured: false,
    title: { pt: "Dolmini", en: "Dolmini" },
    tagline: {
      pt: "E-commerce WooCommerce com componentes premium e painel administrativo no front-end para cadastro em escala.",
      en: "A WooCommerce store with premium UI components and a front-end admin panel for scale."
    },
    status: "partial",
    stackBadges: ["WordPress", "WooCommerce", "PHP", "CSS", "Shortcodes", "UX", "Performance"],
    heroTheme: { from: "#1C1411", to: "#262020", accent: "rgba(56,189,248,0.24)" },
    overview: {
      pt: "Projeto de e-commerce com foco em visual premium, consistência de templates e operação eficiente para catálogos amplos.",
      en: "An e-commerce project focused on premium visuals, template consistency, and efficient large-catalog operations."
    },
    sections: {
      problem: {
        pt: {
          paragraph:
            "A loja precisava crescer em volume de produtos sem perder qualidade visual, velocidade de operação e estabilidade.",
          bullets: [
            "UI premium sem depender de Elementor Pro",
            "Cadastro massivo de mais de 200 produtos com fluxo simples",
            "Melhorias de UX em produto, carrinho e avaliações",
            "Bugs de cache/login e inconsistências entre header e páginas"
          ]
        },
        en: {
          paragraph:
            "The store needed to scale product volume without losing visual quality, speed, and operational stability.",
          bullets: [
            "Premium UI without relying on Elementor Pro",
            "Mass product registration flow for 200+ items",
            "UX refinements for product, cart, and reviews",
            "Cache/login bugs and header/page inconsistencies"
          ]
        }
      },
      solution: {
        pt: [
          "Shortcodes premium reutilizáveis para hero banners, conta e navegação",
          "Painel administrativo no front-end com permissões para admin e gerente",
          "CSS e HTML controlados para consistência e carregamento rápido"
        ],
        en: [
          "Reusable premium shortcodes for hero banners, account, and navigation",
          "Front-end admin panel with role-based permissions",
          "Controlled CSS/HTML layer for consistency and speed"
        ]
      },
      challenges: {
        pt: [
          "Conflitos entre tema e plugins",
          "Consistência entre templates do WooCommerce",
          "Equilibrar cache e performance sem quebrar sessões"
        ],
        en: [
          "Theme and plugin conflicts",
          "Consistency across WooCommerce templates",
          "Balancing cache and performance without breaking sessions"
        ]
      },
      architecture: {
        bullets: {
          pt: [
            "WordPress + WooCommerce com camada de shortcodes",
            "Permissões por role com checagens server-side",
            "CSS adicional padronizado para componentes principais"
          ],
          en: [
            "WordPress + WooCommerce with a shortcode layer",
            "Role-based permissions with server-side checks",
            "Standardized CSS layer for key components"
          ]
        },
        pipeline: {
          nodes: [
            { pt: "Front-end premium", en: "Premium front-end" },
            { pt: "Shortcodes", en: "Shortcodes" },
            { pt: "WooCommerce", en: "WooCommerce" },
            { pt: "WP + MySQL", en: "WP + MySQL" }
          ],
          edges: [
            [0, 1],
            [1, 2],
            [2, 3]
          ]
        }
      },
      results: {
        pt: ["Componentes prontos para escalar o catálogo mantendo visual premium"],
        en: ["Components ready to scale catalog operations while preserving premium visuals"]
      },
      learnings: {
        pt: ["UX e performance em WooCommerce sem dependência de builders Pro"],
        en: ["UX and performance optimization in WooCommerce without Pro builders"]
      }
    },
    links: {},
    media: { cover: true, gallery: 6 }
  },
  {
    slug: "beta-for-teams",
    featured: false,
    title: { pt: "Beta for Teams / DISC for Teams", en: "Beta for Teams / DISC for Teams" },
    tagline: {
      pt: "SaaS B2B multi-tenant para diagnóstico comportamental e planos de ação em equipes.",
      en: "A multi-tenant B2B SaaS for team behavioral insights and action plans."
    },
    status: "private",
    stackBadges: ["Next.js", "TypeScript", "Prisma", "Supabase", "PostgreSQL", "RLS", "Multi-tenant", "RBAC"],
    heroTheme: { from: "#12182A", to: "#1B233A", accent: "rgba(52,211,153,0.28)" },
    overview: {
      pt: "Plataforma B2B desenhada para transformar diagnóstico em ação com segurança multi-tenant e fluxos claros de uso.",
      en: "A B2B platform designed to turn diagnosis into action with secure multi-tenant flows."
    },
    sections: {
      problem: {
        pt: {
          paragraph:
            "As empresas precisavam conectar diagnósticos comportamentais a planos práticos com governança e isolamento por tenant.",
          bullets: [
            "Converter diagnóstico em planos de ação acompanháveis",
            "Exigência de isolamento forte em contexto B2B multi-tenant",
            "Jornadas claras para dashboard, relatórios e execução de planos"
          ]
        },
        en: {
          paragraph:
            "Companies needed to connect behavioral diagnosis to practical action plans with strict tenant-level governance.",
          bullets: [
            "Turn diagnostic insights into actionable plans",
            "Strong isolation requirements for B2B multi-tenant context",
            "Clear journeys for dashboards, reports, and plan execution"
          ]
        }
      },
      solution: {
        pt: [
          "Modelo multi-tenant com memberships por tenant",
          "RBAC claro com rotas protegidas",
          "Estrutura preparada para relatórios e evolução do produto"
        ],
        en: [
          "Multi-tenant model with tenant memberships",
          "Clear RBAC model with protected routes",
          "Structure ready for reports and product evolution"
        ]
      },
      challenges: {
        pt: [
          "RLS e helpers para evitar recursão e reforçar segurança",
          "Modelagem de memberships como fonte de verdade",
          "Progressão de fluxos com contexto de tenant consistente"
        ],
        en: [
          "RLS and helper patterns to avoid recursion and strengthen security",
          "Membership modeling as the source of truth",
          "Flow progression with consistent tenant context resolution"
        ]
      },
      architecture: {
        bullets: {
          pt: [
            "Next.js App Router no front-end e camada de aplicação",
            "Prisma para modelagem e acesso tipado",
            "Supabase/Postgres com RLS e contexto por tenant_memberships"
          ],
          en: [
            "Next.js App Router for front-end and application layer",
            "Prisma for typed modeling and data access",
            "Supabase/Postgres with RLS and tenant_memberships context"
          ]
        },
        pipeline: {
          nodes: [
            { pt: "Next.js UI", en: "Next.js UI" },
            { pt: "Serviços da aplicação", en: "App services" },
            { pt: "Prisma", en: "Prisma" },
            { pt: "Supabase/Postgres + RLS", en: "Supabase/Postgres + RLS" }
          ],
          edges: [
            [0, 1],
            [1, 2],
            [2, 3]
          ]
        }
      },
      results: {
        pt: ["Base sólida de autorização multi-tenant e rotas alinhadas ao progresso de uso"],
        en: ["Solid foundation for multi-tenant authorization and progress-aligned routing"]
      },
      learnings: {
        pt: ["Segurança e modelagem como alavancas de escala em SaaS B2B"],
        en: ["Security and modeling are core levers for scalable B2B SaaS"]
      }
    },
    links: {},
    media: { cover: true, gallery: 6 }
  }
];

export const featuredCaseStudies = caseStudies.filter((caseStudy) => caseStudy.featured);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getAllCaseStudySlugs(): CaseStudySlug[] {
  return caseStudies.map((caseStudy) => caseStudy.slug);
}

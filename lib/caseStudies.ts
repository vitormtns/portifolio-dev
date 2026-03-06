export type CaseStudySlug = "bovnex" | "beta-for-business" | "dolmini" | "beta-for-teams";

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
    slug: "bovnex",
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

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getAllCaseStudySlugs(): CaseStudySlug[] {
  return caseStudies.map((caseStudy) => caseStudy.slug);
}

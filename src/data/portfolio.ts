export type ProjectStatus =
    "production" | "maintained" | "wip" | "sunset" | "go_live";

export type DiffLine = {
    type: "add" | "rem";
    text: string;
};

export type ProjectSystem = {
    name: string;
    summary: string;
    repo?: string;
};

export type ProjectDiagram = {
    src: string;
    alt: string;
    caption?: string;
};

export type Project = {
    id: string;
    fileName: string;
    name: string;
    status: ProjectStatus;
    statusLabel: string;
    summary: string;
    description: string;
    role: string;
    stack: string;
    flagship?: boolean;
    repo?: string;
    site?: string;
    companySite?: string;
    diagram?: ProjectDiagram;
    systems?: ProjectSystem[];
    diff?: DiffLine[];
};

export type NavItem = {
    id: string;
    label: string;
    href: string;
    kind: "file" | "dir";
    indent?: boolean;
    hint?: string;
};

export type PrimaryNavItem = {
    id: string;
    label: string;
    href: string;
    sectionIds: readonly string[];
};

export type SocialLink = {
    label: string;
    href: string;
};

export type Action = SocialLink & {
    primary?: boolean;
};

export type Highlight = {
    value: string;
    label: string;
};

export type Experience = {
    id: string;
    role: string;
    org: string;
    orgHref?: string;
    employmentType?: string;
    period: string;
    summary: string;
    bullets?: readonly string[];
    projectIds?: readonly string[];
};

export type SkillGroup = {
    label: string;
    items: readonly string[];
};

export type Education = {
    id: string;
    degree: string;
    institution: string;
    institutionHref?: string;
    period: string;
    location: string;
};

export const portfolio = {
    meta: {
        title: "Edwin Beshel Ayabie | Python Backend Engineer for Fintech, Payments, and AI Platforms",
        description:
            "Edwin Beshel Ayabie is a Python backend engineer and Technical Lead at AET Technologies (VAS and mobile-network direct carrier billing), also building fintech and AI systems out of Abuja, Nigeria: bill-payment and crypto on/off-ramp platforms, FastAPI/Django services, Celery task pipelines, and RAG-based AI products across 10+ production systems since 2022.",
    },
    site: {
        url: "https://beshel.dev",
        name: "Edwin Beshel Ayabie",
        locale: "en_NG",
        twitter: "@1madvirus",
        ogImage: "/og.jpg",
        updated: "2026-09-13",
        keywords: [
            "Edwin Beshel Ayabie",
            "Edwin Ayabie",
            "madvirus",
            "1madvirus",
            "Python backend engineer",
            "senior backend engineer",
            "technical lead",
            "FastAPI engineer",
            "Django engineer",
            "Celery engineer",
            "backend engineer Nigeria",
            "backend engineer Abuja",
            "remote Python engineer",
            "fintech backend engineer",
            "payments backend engineer",
            "VAS integration engineer",
            "bill payment platform engineer",
            "crypto on ramp off ramp engineer",
            "virtual card issuance backend",
            "RAG pipeline engineer",
            "LLM integration engineer",
            "AI backend engineer",
            "PostgreSQL engineer",
            "Redis caching engineer",
            "RabbitMQ Celery engineer",
            "Kafka engineer",
            "ETL pipeline engineer",
            "microservices engineer",
            "distributed systems engineer",
            "Technical Lead AET Technologies",
            "VAS engineer",
            "mobile network DCB engineer",
            "direct carrier billing engineer",
            "USSD SMS gateway engineer",
            "telecom billing engineer Nigeria",
            "AWS backend engineer",
            "CI/CD engineer",
            "GitHub Actions engineer",
        ].join(", "),
        skills: [
            "Python",
            "FastAPI",
            "Django",
            "Celery",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "Kafka",
            "GraphQL",
            "RAG pipelines",
            "LLM integration",
            "VAS",
            "mobile network DCB",
            "USSD gateways",
            "SMS gateways",
            "bill payments",
            "crypto on/off-ramp",
            "virtual card issuance",
            "real-time card authorization",
            "idempotent billing",
            "ETL pipelines",
            "microservices",
            "end-to-end deployment",
            "AWS",
            "CI/CD",
            "GitHub Actions",
            "Nginx",
            "fintech",
            "distributed systems",
        ],
    },
    handle: "madvirus",
    headline: "Edwin Beshel Ayabie",
    title: "Python Backend Engineer · Fintech · Payments · AI Platforms",
    punch: "Technical Lead at AET Technologies · backend engineer across fintech, payments, and AI products",
    valueProp:
        "I build backend systems for fintech, payments, and AI products, where transaction correctness, concurrency, and reliability under load all matter.",
    lede: "Backend engineer across 10+ production systems since 2022: VAS and mobile-network DCB (direct carrier billing) platforms, fintech bill-payment and crypto on/off-ramp apps, a food-delivery platform handling 10,000+ daily orders, and an AI mental-health companion built on a RAG pipeline. I own deployment end-to-end on everything I build, from database setup through to production. Currently Technical Lead at AET Technologies, where I built the backend behind a nationwide airtime-based rewards platform: consent and fraud checks on every entry, running at thousands of subscriptions a minute for 5M+ users served and still growing. I now lead engineering across it.",
    availability:
        "Open to senior backend and technical-lead roles · remote-first · Abuja, Nigeria (WAT, UTC+1)",
    tags: [
        "Backend architecture · fintech & payments",
        "VAS · USSD · mobile network DCB",
        "AI pipelines · RAG · LLM integration",
        "Crypto on/off-ramp · virtual cards · wallets",
        "Reliability · queues · concurrent transactions",
        "Python · FastAPI · Django · Celery",
    ],
    highlights: [
        { value: "10+", label: "production backend systems shipped since 2022" },
        {
            value: "80%+",
            label: "API response-time improvement on a national health coverage tool",
        },
        {
            value: "100,000+",
            label: "monthly transactions on idempotent billing pipelines",
        },
        {
            value: "25%+",
            label: "latency cut via Redis caching for 10,000+ daily orders",
        },
        {
            value: "40%",
            label: "engagement lift from an AI emotional-support pipeline",
        },
        {
            value: "5M+",
            label: "users served on an airtime-based rewards platform, still growing",
        },
    ] satisfies Highlight[],
    actions: [
        {
            label: "email me",
            href: "mailto:hi@beshel.dev",
            primary: true,
        },
        { label: "linkedin", href: "https://linkedin.com/in/madvirus" },
        { label: "resume", href: "/resume" },
    ] satisfies Action[],
    location: "Abuja, Nigeria · Open to remote",
    phone: {
        label: "+234 907 007 3152",
        href: "tel:+2349070073152",
    },
    contact: {
        heading: "Let's talk",
        body: "Hiring for backend engineering across VAS/telecom, fintech, or AI-driven products? I build systems where transaction integrity, concurrency, and reliability under load matter: Python/FastAPI/Django backends, Celery task pipelines, and LLM-backed features. I'm remote-first out of Abuja (WAT, UTC+1). Email is the fastest way to reach me.",
        email: "hi@beshel.dev",
        links: [
            { label: "mail", href: "mailto:hi@beshel.dev" },
            { label: "github", href: "https://github.com/madvirus-ops" },
            { label: "linkedin", href: "https://linkedin.com/in/madvirus" },
            { label: "x", href: "https://x.com/1madvirus" },
        ] satisfies SocialLink[],
    },
    // Periods are drafted from the CV/LinkedIn writeups. Correct them here and
    // the timeline, resume, and llms corpus follow.
    experience: [
        {
            id: "synterra-digital",
            role: "Back End Developer & Data Scientist",
            org: "Synterra Digital",
            orgHref: "https://synterradigital.ai",
            employmentType: "Contract",
            period: "Jul 2026 - present",
            summary:
                "Dual backend and data role at an early-stage AI company, building the data and API layer behind its product ahead of public launch.",
            bullets: [
                "Building the data and API layer for an early-stage AI product ahead of public launch.",
                "Operating in a dual backend engineering and data science capacity.",
            ],
        },
        {
            id: "scidar",
            role: "Backend Engineer",
            org: "SCIDaR",
            orgHref: "https://scidar.org",
            employmentType: "Contract",
            period: "Feb 2026 - Jul 2026",
            summary:
                "Contract backend engineer at Solina Centre for International Development and Research (SCIDaR), a Nigerian health and development research organization that has run 15+ transformation programs across 15+ states since 2017. Rebuilt the API layer behind an internal program-coverage tool, cutting response times by over 80% to consistently under 100ms, and built an ETL pipeline feeding downstream program analysis.",
            bullets: [
                "Rebuilt the API layer behind an internal program-coverage tool, cutting response times by 80%+ to consistently under 100ms.",
                "Built an ETL pipeline feeding downstream program analysis for a research organization running 15+ transformation programs across 15+ states.",
            ],
        },
        {
            id: "auvraai",
            role: "Backend Engineer",
            org: "AuvraAI",
            employmentType: "Contract",
            period: "Nov 2025 - Aug 2026",
            summary:
                "Built backend pipelines and pathway logic for an AI voice-call and customer-support platform, powering virtual agents that handle live calls.",
            bullets: [
                "Built backend pipelines and pathway logic for an AI voice-call and customer-support platform.",
                "Powered virtual agents handling live customer calls.",
            ],
            projectIds: ["auvraai"],
        },
        {
            id: "ashinity-moodcraft",
            role: "Backend Developer",
            org: "Ashinity Synergy",
            employmentType: "Contract",
            period: "Jul 2025 - Sep 2025",
            summary:
                "Backend for Moodcraft, an AI mental-health companion app. Engineered and maintained a RAG pipeline and LLM integration for mood classification and personalized response generation, plus secure ingestion pipelines for sensitive user data and the FastAPI inference services behind the app, alongside a reported 40% lift in user engagement.",
            bullets: [
                "Engineered and maintained a RAG pipeline and LLM integration for mood classification and personalized response generation.",
                "Built secure data-ingestion pipelines for sensitive user data.",
                "Developed FastAPI inference services powering the app, contributing to a reported 40% lift in user engagement.",
            ],
            projectIds: ["moodcraft"],
        },
        {
            id: "tiango-yumbarn",
            role: "Lead Backend Engineer",
            org: "Tiango Logistics (Yumbarn)",
            employmentType: "Contract",
            period: "May 2025 - Dec 2025",
            summary:
                "Backend lead for Yumbarn, Tiango Logistics' food ordering and delivery platform. Architected and deployed the core REST API serving the customer, vendor, and rider apps, built real-time order fulfillment with geolocation-based rider assignment and payment processing, and introduced Redis caching that cut API latency by over 25% at 10,000+ daily orders.",
            bullets: [
                "Architected and deployed the core REST API serving the customer, vendor, and rider apps.",
                "Built real-time order fulfillment with geolocation-based rider assignment and payment processing.",
                "Introduced Redis caching that cut API latency by 25%+ at 10,000+ daily orders.",
            ],
            projectIds: ["yumbarn"],
        },
        {
            id: "aet-lead",
            role: "Technical Lead",
            org: "AET Technologies",
            employmentType: "Full-time",
            period: "Mar 2025 - present",
            summary:
                "I built the backend behind AET's nationwide airtime-based rewards platform: consent and fraud checks on every entry, holding up at thousands of subscriptions a minute across 5M+ users served. Now leading engineering across it — reviewing architecture and performance decisions, mentoring 10+ junior developers in Python, JavaScript, and distributed systems (a reported 30% productivity lift on critical projects), resolving production incidents in background task execution, API failures, and database performance, and communicating technical risk to senior stakeholders.",
            bullets: [
                "Built the backend behind a nationwide airtime-based rewards platform, including consent and fraud checks on every entry.",
                "Scaled the platform to hold up at thousands of subscriptions a minute across 5M+ users served.",
                "Lead architecture and performance decisions across the engineering team.",
                "Mentor 10+ junior developers in Python, JavaScript, and distributed systems (a reported 30% productivity lift on critical projects).",
                "Resolve production incidents in background task execution, API failures, and database performance; communicate technical risk to senior stakeholders.",
            ],
        },
        {
            id: "techmakeeasy",
            role: "Backend Engineer",
            org: "Techmakeeasy (NectaBills / NectaSwap)",
            employmentType: "Contract",
            period: "Jan 2025 - Apr 2026",
            summary:
                "Backend engineer at Techmakeeasy on two products: NectaBills (bills, airtime, eSIM, transfers, savings) and NectaSwap (crypto-to-Naira swap plus NGN/USD virtual cards), sharing the same wallet and transaction infrastructure. Implemented idempotent billing and transaction workflows preventing duplicate charges across 100,000+ monthly transactions, built async payment pipelines on Celery and RabbitMQ for execution, retries, and reconciliation, real-time card authorization, and integrated multiple VAS aggregators and payment providers over REST and SOAP.",
            bullets: [
                "Built backend for two products, NectaBills and NectaSwap, sharing wallet and transaction infrastructure.",
                "Implemented idempotent billing workflows preventing duplicate charges across 100,000+ monthly transactions.",
                "Built async payment pipelines on Celery and RabbitMQ for execution, retries, and reconciliation.",
                "Built real-time card authorization for NGN/USD virtual cards.",
                "Integrated multiple VAS aggregators and payment providers over REST and SOAP.",
            ],
            projectIds: ["nectabills", "nectaswap"],
        },
        {
            id: "aet-backend",
            role: "Backend Developer",
            org: "AET Technologies",
            employmentType: "Full-time",
            period: "Apr 2024 - Feb 2025",
            summary:
                "Designed and built USSD, SMS, and web APIs for AET's airtime-based rewards platform, including the consent and fraud-check gateways users pass through before entry, mobile-network DCB (direct carrier billing) integrations, external aggregator and ISP integrations over REST and SOAP/XML, and the billing logic behind those workflows.",
            bullets: [
                "Designed and built USSD, SMS, and web APIs for an airtime-based rewards platform.",
                "Built the consent and fraud-check gateways users pass through before entry.",
                "Integrated mobile-network DCB (direct carrier billing), external aggregators, and ISPs over REST and SOAP/XML.",
                "Built the billing logic behind these workflows.",
            ],
        },
        {
            id: "sefy-paysefy",
            role: "Lead Backend Developer",
            org: "Sefy Technologies (Paysefy)",
            employmentType: "Full-time",
            period: "Feb 2024 - Nov 2024",
            summary:
                "Built the backend end-to-end for Paysefy, a fintech bills-payment platform: architecture, implementation, and technical documentation covering system design and backend standards, working closely with the frontend team on API integration.",
            bullets: [
                "Built the backend end-to-end for Paysefy, a fintech bills-payment platform: architecture through implementation.",
                "Authored technical documentation covering system design and backend standards.",
                "Worked closely with the frontend team on API integration.",
            ],
            projectIds: ["paysefy"],
        },
        {
            id: "zeelpay",
            role: "Lead Backend Developer",
            org: "Zeelpay",
            orgHref: "https://zeelpay.com",
            employmentType: "Full-time",
            period: "Feb 2024 - Jan 2025",
            summary:
                "Backend for Zeelpay, a hybrid Web2/Web3 fintech app for bill payments, airtime/data top-up, gift-card trading, and Bitcoin/USDT trading with NGN/USD virtual cards on real-time authorization. Designed the services supporting both the cryptocurrency and bills-payment sides of the product and enforced code quality through automated testing and review.",
            bullets: [
                "Designed backend services supporting both the cryptocurrency and bills-payment sides of a hybrid Web2/Web3 fintech app.",
                "Built NGN/USD virtual cards with real-time authorization.",
                "Enforced code quality through automated testing and review.",
            ],
            projectIds: ["zeelpay"],
        },
        {
            id: "gexipay",
            role: "Backend Developer",
            org: "Gexipay Technologies",
            employmentType: "Full-time",
            period: "Nov 2023 - Jan 2025",
            summary:
                "Built the full backend for Gexipay, a consumer fintech app for bill payments, bank transfers, crypto and gift-card trading, virtual cards with real-time authorization, and betting-wallet funding. Implemented secure, compliant transaction-processing workflows, optimized database performance through indexing and query refactoring, and integrated third-party services over JSON and XML APIs.",
            bullets: [
                "Built the full backend for Gexipay: bill payments, bank transfers, crypto/gift-card trading, virtual cards, betting-wallet funding.",
                "Implemented secure, compliant transaction-processing workflows and real-time card authorization.",
                "Optimized database performance through indexing and query refactoring.",
                "Integrated third-party services over JSON and XML APIs.",
            ],
            projectIds: ["gexipay"],
        },
        {
            id: "tobopay",
            role: "Backend Developer",
            org: "Tobopay",
            employmentType: "Contract",
            period: "Nov 2023 - Dec 2024",
            summary:
                "Built the backend for Tobopay, a Nigerian payments app, end-to-end and solo: wallet and ledger, bills, airtime-to-cash, Tcash vouchers, and NGN/USD virtual cards with real-time POS/ATM authorization, plus the infrastructure and deployment pipeline underneath it.",
            bullets: [
                "Built the backend for Tobopay end-to-end and solo: wallet and ledger, bills, and airtime-to-cash conversion.",
                "Built Tcash, a voucher-style cash-equivalent product.",
                "Built NGN/USD virtual cards with real-time POS/ATM authorization.",
                "Owned the infrastructure and deployment pipeline solo.",
            ],
            projectIds: ["tobopay"],
        },
        {
            id: "shazzy",
            role: "Backend Developer",
            org: "Shazz Tech (Shazzy)",
            employmentType: "Contract",
            period: "May 2023 - Mar 2025",
            summary:
                "Backend for Shazzy, a crypto wallet app for buying/selling tokens and spending directly via card. Built the crypto wallet and card functionality, including real-time card authorization, and improved database performance through query optimization.",
            bullets: [
                "Built the crypto wallet and card functionality for Shazzy, including real-time card authorization.",
                "Improved database performance through query optimization.",
            ],
            projectIds: ["shazzy"],
        },
        {
            id: "zappy-global",
            role: "Backend Developer",
            org: "Zappy Global Technology",
            orgHref: "https://zappy.ng",
            employmentType: "Full-time",
            period: "May 2023 - Jan 2025",
            summary:
                "Backend engineer on Zappy, a Nigerian payments app for instant bank transfers and a dual NGN/USD wallet with real-time FX conversion and airtime-to-cash.",
            bullets: [
                "Built backend for instant Nigerian bank transfers.",
                "Built a dual NGN/USD wallet with real-time FX conversion and airtime-to-cash.",
            ],
            projectIds: ["zappy"],
        },
        {
            id: "early-career",
            role: "Backend & Web Developer · early career",
            org: "Various — internships & freelance",
            period: "2020 - 2023",
            summary:
                "Started in freelance web design and blogging before moving into Python backend development through internships and small teams: HNG Internship, KodeCamp, Zuri Team, Sidehustle, and Workshopapps, plus early freelance backend work for Naijabase Media.",
            bullets: [
                "Started in freelance web design and blogging.",
                "Moved into Python backend development through internships: HNG Internship, KodeCamp, Zuri Team, Sidehustle, and Workshopapps.",
                "Took on early freelance backend work for Naijabase Media.",
            ],
        },
    ] satisfies Experience[],
    skillGroups: [
        {
            label: "Languages",
            items: ["Python", "JavaScript", "SQL"],
        },
        {
            label: "Backend & data",
            items: [
                "FastAPI",
                "Django",
                "Celery",
                "PostgreSQL",
                "Redis",
                "RabbitMQ",
                "Kafka",
                "GraphQL",
                "pySpark",
                "Microservices",
                "WebSockets",
                "REST · SOAP · XML · JSON",
            ],
        },
        {
            label: "Telecom & VAS",
            items: [
                "VAS (Value-Added Services)",
                "Mobile network DCB (direct carrier billing)",
                "USSD gateways",
                "SMS gateways",
                "SOAP/XML aggregator integration",
            ],
        },
        {
            label: "Payments & fintech",
            items: [
                "Bill payments & VAS aggregators",
                "Crypto on/off-ramp (BTC · USDT)",
                "Virtual card issuance (NGN · USD)",
                "P2P transfers & FX conversion",
                "Idempotent billing & reconciliation",
                "Payment gateway integrations",
                "Gift-card & betting-wallet rails",
            ],
        },
        {
            label: "AI & data",
            items: [
                "RAG pipelines",
                "LLM integration & tool use",
                "Mood / intent classification",
                "Secure data-ingestion pipelines",
                "Voice-agent pipelines",
                "ETL & analysis pipelines",
            ],
        },
        {
            label: "Reliability & infra",
            items: [
                "End-to-end deployment ownership (DB setup → production)",
                "AWS (EC2 · S3 · RDS · Lambda)",
                "GitHub Actions · CI/CD pipelines",
                "Nginx",
                "Docker",
                "Linux",
                "Git",
                "Database indexing & query optimization",
                "Redis caching",
                "Background task reliability (Celery retries)",
            ],
        },
    ] satisfies SkillGroup[],
    education: [
        {
            id: "msc-ejust",
            degree: "Master of Science (MSc), Space Environment",
            institution: "Egypt-Japan University of Science and Technology",
            period: "Expected Aug 2027",
            location: "Alexandria, Egypt",
        },
        {
            id: "bsc-afit",
            degree: "Bachelor of Science (BSc), Physics",
            institution: "Air Force Institute of Technology",
            period: "2019 - 2023",
            location: "Kaduna, Nigeria",
        },
    ] satisfies Education[],
    sidebarLinks: [
        {
            label: "github.com/madvirus-ops",
            href: "https://github.com/madvirus-ops",
        },
        {
            label: "linkedin.com/in/madvirus",
            href: "https://linkedin.com/in/madvirus",
        },
        { label: "x.com/1madvirus", href: "https://x.com/1madvirus" },
        {
            label: "hi@beshel.dev",
            href: "mailto:hi@beshel.dev",
        },
    ] satisfies SocialLink[],
    nav: [
        {
            id: "about",
            label: "about.md",
            href: "#about",
            kind: "file",
            hint: "intro",
        },
        {
            id: "projects",
            label: "projects/",
            href: "#yumbarn",
            kind: "dir",
        },
        {
            id: "yumbarn",
            label: "yumbarn.md",
            href: "#yumbarn",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "nectabills",
            label: "nectabills.md",
            href: "#nectabills",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "nectaswap",
            label: "nectaswap.md",
            href: "#nectaswap",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "moodcraft",
            label: "moodcraft.md",
            href: "#moodcraft",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "zeelpay",
            label: "zeelpay.md",
            href: "#zeelpay",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "shazzy",
            label: "shazzy.md",
            href: "#shazzy",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "gexipay",
            label: "gexipay.md",
            href: "#gexipay",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "paysefy",
            label: "paysefy.md",
            href: "#paysefy",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "tobopay",
            label: "tobopay.md",
            href: "#tobopay",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "waitstream",
            label: "waitstream.md",
            href: "#waitstream",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "gxpanse",
            label: "gxpanse.md",
            href: "#gxpanse",
            kind: "file",
            indent: true,
            hint: "case study",
        },
        {
            id: "more-work",
            label: "more-work.md",
            href: "#more-work",
            kind: "file",
            indent: true,
            hint: "2 more systems",
        },
        {
            id: "experience",
            label: "experience.md",
            href: "#experience",
            kind: "file",
            hint: "timeline",
        },
        {
            id: "skills",
            label: "skills.md",
            href: "#skills",
            kind: "file",
            hint: "stack",
        },
        {
            id: "contact",
            label: "contact.md",
            href: "#contact",
            kind: "file",
            hint: "reach out",
        },
        {
            id: "resume",
            label: "resume.pdf",
            href: "/resume",
            kind: "file",
            hint: "print view",
        },
    ] satisfies NavItem[],
    primaryNav: [
        { id: "about", label: "about", href: "#about", sectionIds: ["about"] },
        {
            id: "work",
            label: "work",
            href: "#yumbarn",
            sectionIds: [
                "yumbarn",
                "nectabills",
                "nectaswap",
                "moodcraft",
                "zeelpay",
                "shazzy",
                "gexipay",
                "paysefy",
                "tobopay",
                "waitstream",
                "gxpanse",
                "more-work",
            ],
        },
        {
            id: "experience",
            label: "experience",
            href: "#experience",
            sectionIds: ["experience"],
        },
        {
            id: "skills",
            label: "skills",
            href: "#skills",
            sectionIds: ["skills"],
        },
        {
            id: "contact",
            label: "contact",
            href: "#contact",
            sectionIds: ["contact"],
        },
    ] satisfies PrimaryNavItem[],
    projects: [
        {
            id: "yumbarn",
            fileName: "yumbarn.md",
            name: "Yumbarn",
            status: "maintained",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Food ordering and delivery platform: core REST API, geolocation rider assignment, and Redis-cached endpoints handling 10,000+ daily orders.",
            description:
                "Yumbarn is Tiango Logistics' food ordering and delivery platform connecting customers, vendors, and riders. As lead backend engineer I architected and deployed the core REST API serving all three client apps, built real-time order-fulfillment workflows including geolocation-based rider assignment and payment processing, and designed high-availability database schemas to keep order and payment state consistent under concurrent load. Introduced a Redis caching layer on hot read paths that cut API latency by more than 25% while the platform was handling 10,000+ orders a day.",
            role: "lead backend engineer",
            stack: "python · fastapi · postgresql · redis · celery",
            site: "https://yumbarn.com",
            systems: [
                {
                    name: "Core order API",
                    summary:
                        "REST API serving the customer, vendor, and rider apps: catalog, ordering, and order-state transitions.",
                },
                {
                    name: "Rider assignment & fulfillment",
                    summary:
                        "Real-time, geolocation-based rider matching and order-fulfillment tracking from placement to delivery.",
                },
                {
                    name: "Payment processing",
                    summary:
                        "Secure payment capture and confirmation wired into the order lifecycle.",
                },
                {
                    name: "Redis caching layer",
                    summary:
                        "Caching on hot read paths cut API latency by 25%+ at 10,000+ orders/day without a database upgrade.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- uncached reads on every order/catalog request under peak load",
                },
                {
                    type: "add",
                    text: "+ Redis caching layer: 25%+ latency cut at 10,000+ daily orders",
                },
                {
                    type: "rem",
                    text: "- ad hoc rider dispatch",
                },
                {
                    type: "add",
                    text: "+ geolocation-based rider assignment + real-time fulfillment tracking",
                },
                {
                    type: "add",
                    text: "+ high-availability schemas for transactional consistency under load",
                },
            ],
        },
        {
            id: "nectabills",
            fileName: "nectabills.md",
            name: "NectaBills",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Fintech app for bills, airtime, eSIMs, and savings: idempotent billing across 100,000+ monthly transactions on Celery/RabbitMQ pipelines.",
            description:
                "NectaBills is Techmakeeasy's fintech app for bill payments, airtime and data top-up, airtime-to-cash conversion, eSIM management, transfers, and interest-earning savings. I implemented the core billing and transaction workflows with idempotent processing to prevent duplicate charges across 100,000+ transactions a month, built asynchronous background pipelines on Celery and RabbitMQ for payment execution, retries, and reconciliation, integrated multiple third-party payment providers and VAS aggregators over REST and SOAP, and optimized database queries and task throughput for reliability under concurrent transaction load.",
            role: "backend engineer",
            stack: "python · fastapi · celery · rabbitmq · postgresql · redis",
            site: "https://nectabills.com",
            systems: [
                {
                    name: "Idempotent billing engine",
                    summary:
                        "Transaction workflows built to reject duplicate charges by construction, holding up across 100,000+ transactions a month.",
                },
                {
                    name: "Async payment pipeline",
                    summary:
                        "Celery + RabbitMQ workers handling payment execution, retries, and reconciliation off the request path.",
                },
                {
                    name: "VAS & provider integrations",
                    summary:
                        "Multiple third-party payment providers and VAS aggregators integrated over REST and SOAP for airtime, data, eSIMs, and bill payments.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- naive charge-and-retry, risk of duplicate billing on network failure",
                },
                {
                    type: "add",
                    text: "+ idempotent transaction workflows across 100,000+ monthly charges",
                },
                {
                    type: "add",
                    text: "+ Celery/RabbitMQ pipeline for async execution, retries, and reconciliation",
                },
            ],
        },
        {
            id: "nectaswap",
            fileName: "nectaswap.md",
            name: "NectaSwap",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Crypto-to-Naira swap app from Techmakeeasy with NGN/USD virtual cards for global spending, on shared wallet and transaction infrastructure with NectaBills.",
            description:
                "NectaSwap is Techmakeeasy's crypto companion app: swap crypto for Naira, plus NectaSwap Cards for spending globally and virtually. I built the crypto buy/sell flows and real-time authorization for the virtual cards, layered onto the same wallet and transaction infrastructure as NectaBills, reusing the same idempotent transaction processing and reconciliation pipeline.",
            role: "backend engineer",
            stack: "python · fastapi · celery · rabbitmq · postgresql · redis",
            site: "https://nectaswap.com",
            systems: [
                {
                    name: "Crypto-to-Naira swap",
                    summary:
                        "Crypto buy/sell flows layered onto the same wallet and transaction infrastructure as NectaBills.",
                },
                {
                    name: "Real-time card authorization",
                    summary:
                        "NGN/USD virtual cards with live balance control: POS/ATM transaction requests are routed to the backend for real-time approval or decline against the card's available balance.",
                },
            ],
            diff: [
                {
                    type: "add",
                    text: "+ crypto-to-Naira swap on the same wallet rails as NectaBills",
                },
                {
                    type: "add",
                    text: "+ NGN/USD virtual cards with real-time POS/ATM authorization",
                },
            ],
        },
        {
            id: "moodcraft",
            fileName: "moodcraft.md",
            name: "Moodcraft",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "AI mental-health companion: RAG pipeline and LLM integration for mood classification and personalized emotional support.",
            description:
                "Moodcraft is Ashinity Synergy's AI mental-health companion app: mood and emotion logging, trigger tracking, guided journaling, and creative tools (poetry, drawing, music) for emotional processing. I engineered and maintained a Retrieval-Augmented Generation pipeline for personalized, context-aware support, integrated and tuned LLMs for mood classification and response generation, built secure data-ingestion pipelines for sensitive user data, and developed the FastAPI services handling inference requests and continuous data capture. Shipped alongside a reported 40% lift in user engagement.",
            role: "backend developer",
            stack: "python · fastapi · rag · llm integration · postgresql",
            site: "https://moodcraft.org",
            systems: [
                {
                    name: "RAG pipeline",
                    summary:
                        "Retrieval-augmented generation for personalized, context-aware emotional-support responses.",
                },
                {
                    name: "Mood classification",
                    summary:
                        "LLM integration for classifying user mood/emotion from journaling and check-in input.",
                },
                {
                    name: "Secure data ingestion",
                    summary:
                        "Ingestion and processing pipelines built for sensitive user data with privacy in mind.",
                },
                {
                    name: "Inference API",
                    summary:
                        "FastAPI services handling live inference requests and continuous data capture from the app.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- generic, non-personalized emotional-support responses",
                },
                {
                    type: "add",
                    text: "+ RAG pipeline + tuned LLM mood classification: 40% engagement lift",
                },
                {
                    type: "add",
                    text: "+ secure ingestion pipeline for sensitive user data",
                },
            ],
        },
        {
            id: "zeelpay",
            fileName: "zeelpay.md",
            name: "Zeelpay",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Hybrid Web2/Web3 fintech app: bills, airtime, gift-card trading, and BTC/USDT trading with NGN/USD virtual cards.",
            description:
                "Zeelpay is a hybrid Web2/Web3 consumer fintech app: bill payments, airtime/data top-up, airtime-to-cash conversion, gift-card trading, Bitcoin/USDT trading, and NGN/USD virtual cards, alongside P2P transfers. I designed backend services supporting both the cryptocurrency and bills-payment sides of the product and enforced code quality through automated testing and review practices.",
            role: "lead backend developer",
            stack: "python · fastapi · postgresql · redis",
            site: "https://zeelpay.com",
            systems: [
                {
                    name: "Bills & VAS services",
                    summary:
                        "Bill payments, airtime/data top-up, and airtime-to-cash conversion backed by aggregator integrations.",
                },
                {
                    name: "Crypto trading & virtual cards",
                    summary:
                        "Bitcoin/USDT trading and gift-card trading alongside NGN/USD virtual card issuance on shared wallet infrastructure.",
                },
                {
                    name: "Real-time card authorization",
                    summary:
                        "NGN/USD cards with live balance control: POS/ATM transaction requests are routed to the backend for real-time approval or decline against the card's available balance.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- separate fiat bills-payment and crypto-trading flows",
                },
                {
                    type: "add",
                    text: "+ unified wallet backend: bills, airtime, gift cards, and BTC/USDT trading",
                },
                {
                    type: "add",
                    text: "+ NGN/USD virtual card issuance on the same rails",
                },
            ],
        },
        {
            id: "shazzy",
            fileName: "shazzy.md",
            name: "Shazzy",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Crypto wallet app: buy/sell tokens and spend directly via card, in-store and online.",
            description:
                "Shazzy is Shazz Tech's crypto wallet app: buy and sell tokens like BTC in your local currency, then spend directly using a Shazzy card in stores and online. I built the crypto wallet and card functionality, including real-time card authorization, and improved database performance through query optimization.",
            role: "backend developer",
            stack: "python · fastapi · postgresql",
            site: "https://shazzy.app",
            systems: [
                {
                    name: "Crypto wallet",
                    summary:
                        "Buy/sell flows for tokens like BTC in the user's local currency.",
                },
                {
                    name: "Card spending",
                    summary:
                        "Card issuance with real-time authorization: transaction requests are routed to the backend for real-time approval or decline against the card's live balance.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- slow database reads on wallet/transaction history endpoints",
                },
                {
                    type: "add",
                    text: "+ query optimization across wallet and crypto-trading paths",
                },
            ],
        },
        {
            id: "gexipay",
            fileName: "gexipay.md",
            name: "Gexipay",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Consumer fintech app: bill payments, bank transfers, airtime-to-cash, crypto and gift-card trading, virtual cards, and betting-wallet funding.",
            description:
                "Gexipay is a consumer fintech app for paying Nigerian bills, transferring money to bank accounts, converting airtime to cash, trading crypto and gift cards, issuing virtual cards, and funding betting wallets. I built the full backend: secure and compliant transaction-processing workflows, database performance work through indexing and query refactoring, third-party integrations over JSON and XML APIs, and real-time authorization for the virtual cards.",
            role: "backend developer · freelance",
            stack: "python · fastapi · postgresql",
            site: "https://gexipay.com",
            systems: [
                {
                    name: "Real-time card authorization",
                    summary:
                        "Virtual cards with live balance control: POS/ATM transaction requests are routed to the backend for real-time approval or decline against the card's available balance.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- unindexed transaction tables under growing load",
                },
                {
                    type: "add",
                    text: "+ indexing + query refactor across the transaction-processing path",
                },
                {
                    type: "add",
                    text: "+ compliant transaction workflows for bills, transfers, crypto, gift cards, and betting-wallet funding",
                },
            ],
        },
        {
            id: "auvraai",
            fileName: "auvraai.md",
            name: "AuvraAI",
            status: "maintained",
            statusLabel: "● maintained",
            summary:
                "AI voice-call and customer-support platform: pipeline and pathway logic for virtual agents.",
            description:
                "Built backend pipelines and pathway logic for AuvraAI's virtual agents, which handle live voice calls and customer support.",
            role: "backend engineer",
            stack: "python · fastapi",
        },
        {
            id: "paysefy",
            fileName: "paysefy.md",
            name: "Paysefy",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Fintech bills-payment platform; built the backend end-to-end as lead backend developer.",
            description:
                "Paysefy is Sefy Technologies' fintech bills-payment platform. I built the backend end-to-end: architecture, implementation, and technical documentation covering system design and backend standards, working closely with the frontend team on API integration.",
            role: "lead backend developer",
            stack: "python · postgresql",
            systems: [
                {
                    name: "Backend architecture & implementation",
                    summary:
                        "Owned the platform end-to-end, from architecture decisions through implementation.",
                },
                {
                    name: "Technical documentation",
                    summary:
                        "Authored system design and backend-standards documentation for the platform.",
                },
                {
                    name: "Frontend integration",
                    summary:
                        "Worked closely with the frontend team on API contracts and integration.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- no documented backend architecture or engineering standards",
                },
                {
                    type: "add",
                    text: "+ backend built end-to-end with documented system design and backend standards",
                },
            ],
        },
        {
            id: "tobopay",
            fileName: "tobopay.md",
            name: "Tobopay",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "Nigerian payments app: wallet, bills, airtime-to-cash, Tcash vouchers, and NGN/USD cards with real-time authorization, built end-to-end solo.",
            description:
                "Tobopay is a Nigerian payments app: a wallet backed by a proper ledger, bill payments, airtime-to-cash conversion, and Tcash, a voucher-style cash-equivalent product. I built it end-to-end and solo, with nothing handed to me to maintain: wallet and ledger logic, bills and airtime-to-cash flows, Tcash vouchers, and NGN/USD virtual cards with real-time authorization — POS and ATM transaction requests routed to the backend for approval against the card's live balance — plus the infrastructure and deployment pipeline underneath all of it.",
            role: "backend developer",
            stack: "python",
            site: "https://tobopay.co",
            systems: [
                {
                    name: "Wallet & ledger",
                    summary:
                        "Core wallet balance and ledger system tracking every user's money movement.",
                },
                {
                    name: "Bills & airtime-to-cash",
                    summary:
                        "Bill payments and airtime-to-cash conversion on top of the wallet.",
                },
                {
                    name: "Tcash vouchers",
                    summary:
                        "Voucher-style cash-equivalent product built on the wallet and ledger.",
                },
                {
                    name: "Real-time card authorization",
                    summary:
                        "NGN/USD virtual cards with live balance control: POS/ATM transaction requests are routed to the backend for real-time approval or decline against the card's available balance.",
                },
                {
                    name: "Infrastructure & deployments",
                    summary:
                        "Owned the deployment pipeline and backend infrastructure end-to-end, solo.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- no backend to speak of, product built from a blank slate",
                },
                {
                    type: "add",
                    text: "+ wallet, ledger, bills, airtime-to-cash, and Tcash vouchers built and deployed solo",
                },
                {
                    type: "add",
                    text: "+ NGN/USD virtual cards with real-time POS/ATM authorization against live balance",
                },
            ],
        },
        {
            id: "zappy",
            fileName: "zappy.md",
            name: "Zappy",
            status: "production",
            statusLabel: "● in production",
            summary:
                "Payments app: instant Nigerian bank transfers and a dual NGN/USD wallet with real-time FX conversion.",
            description:
                "Zappy is Zappy Global's payments app: instant transfers to any Nigerian bank account, a dual NGN/USD wallet with real-time FX conversion, and airtime-to-cash conversion.",
            role: "backend developer",
            stack: "python · postgresql",
            site: "https://zappy.ng",
            systems: [
                {
                    name: "Bank transfer rail",
                    summary:
                        "Instant transfers to any Nigerian bank account.",
                },
                {
                    name: "Dual-currency wallet",
                    summary:
                        "NGN/USD wallet with real-time FX conversion and airtime-to-cash.",
                },
            ],
        },
        {
            id: "waitstream",
            fileName: "waitstream.md",
            name: "Waitstream",
            status: "production",
            statusLabel: "● in production",
            flagship: true,
            summary:
                "AI-powered waitlist-management platform for streamlining bookings and reducing no-shows, built solo freelance.",
            description:
                "Waitstream replaces the walk-in clipboard with a live digital waitlist for service businesses: customers join a queue or book a slot, get automated status updates as their turn approaches, and the business gets AI-assisted signal on who's likely to no-show so they can overbook safely instead of losing revenue to empty slots. I designed, built, and deployed the entire backend solo: the waitlist and booking engine, the customer notification pipeline, and the no-show prediction logic underneath it.",
            role: "backend developer · freelance",
            stack: "python · fastapi · postgresql",
            site: "https://waitstream.com",
            systems: [
                {
                    name: "Waitlist & booking core",
                    summary:
                        "Real-time queue and booking engine tracking each customer's position and slot end-to-end.",
                },
                {
                    name: "Customer notifications",
                    summary:
                        "Automated status updates keeping customers informed as their turn approaches, cutting drop-off.",
                },
                {
                    name: "No-show prediction",
                    summary:
                        "AI-assisted scoring that flags likely no-shows so businesses can overbook safely instead of losing revenue to empty slots.",
                },
                {
                    name: "Solo backend ownership",
                    summary:
                        "Entire backend designed, built, and deployed independently as the sole engineer.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- walk-in waitlists on paper, no visibility into no-show risk",
                },
                {
                    type: "add",
                    text: "+ live digital waitlist with automated status updates and AI-assisted no-show prediction",
                },
                {
                    type: "add",
                    text: "+ entire backend designed, built, and deployed solo",
                },
            ],
        },
        {
            id: "gxpanse",
            fileName: "gxpanse.md",
            name: "Gxpanse",
            status: "wip",
            statusLabel: "● in progress",
            flagship: true,
            summary:
                "A social media and marketplace platform merged into one product; built the backend freelance.",
            description:
                "Gxpanse merges a social feed with large-scale online shopping into one product: people browse and buy the way they'd scroll a timeline, with commerce and social sharing the same backend instead of being bolted together as separate apps. As freelance backend engineer I'm building the core services behind both sides: the social layer (profiles, feed, posts, engagement) and the marketplace layer (product catalog and the transaction flow behind it), on shared infrastructure.",
            role: "backend developer · freelance",
            stack: "python",
            systems: [
                {
                    name: "Social feed & profiles",
                    summary:
                        "User profiles, posts, feed, and engagement (likes, comments, follows).",
                },
                {
                    name: "Marketplace & catalog",
                    summary:
                        "Product listings and the marketplace transaction flow behind them.",
                },
                {
                    name: "Unified backend",
                    summary:
                        "Social and commerce sharing one backend rather than two bolted-together systems.",
                },
            ],
            diff: [
                {
                    type: "rem",
                    text: "- no unified backend for social feed + marketplace in one product",
                },
                {
                    type: "add",
                    text: "+ core services backend for a combined social + marketplace platform, in progress",
                },
            ],
        },
    ] satisfies Project[],
    statusBar: {
        branch: "main",
        signal: "open to remote",
        timezone: "Africa/Lagos",
        timezoneLabel: "Abuja",
        timezoneSuffix: "WAT",
        tickMs: 30_000,
    },
} as const;

export const sectionIds = portfolio.nav
    .filter((item) => item.kind === "file" && item.href.startsWith("#"))
    .map((item) => item.id);

export const featuredProjects = portfolio.projects.filter(
    (project) => project.flagship,
);

export const moreProjects = portfolio.projects.filter(
    (project) => !project.flagship,
);

export const systemsInProduction = portfolio.projects.filter(
    (project) =>
        project.status === "production" || project.status === "maintained",
).length;

export function primaryNavIdFor(sectionId: string) {
    return (
        portfolio.primaryNav.find((item) => item.sectionIds.includes(sectionId))
            ?.id ?? portfolio.primaryNav[0].id
    );
}

export function isExternalHref(href: string) {
    return /^https?:\/\//.test(href);
}

export const consoleEasterEgg =
    "%cif you're reading this from devtools, we'd probably get along.";

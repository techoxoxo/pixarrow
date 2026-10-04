export interface IndustryDetail {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroDescription: string;
  industryMetrics: { label: string; value: string; desc: string }[];
  challengesSolved: { challenge: string; solution: string }[];
  keyCapabilities: { title: string; desc: string; iconName: string }[];
  featuredCaseStudySlug: string;
  complianceStandards: string[];
  faqs: { question: string; answer: string }[];
}

export const industriesData: Record<string, IndustryDetail> = {
  "fintech": {
    slug: "fintech",
    title: "FinTech & Digital Banking Software Engineering",
    subtitle: "Bank-grade, PCI-DSS compliant financial technology systems built for high-frequency transactions and zero downtime.",
    badge: "FinTech • Lending • Payments • Open Banking",
    heroDescription: "We engineer secure loan origination platforms, payment gateways, wealth management portals, and multi-tenant ledger architectures. Built with microservices, automated fraud detection, and instant bank aggregator integrations.",
    industryMetrics: [
      { label: "Loan Volume Processed", value: "$40M+", desc: "Across aggregated lender networks" },
      { label: "Average Approval Time", value: "< 3 Mins", desc: "Automated underwriting engine" },
      { label: "Transaction Latency", value: "< 120ms", desc: "High-throughput payment routing" },
      { label: "Security Compliance", value: "100%", desc: "PCI-DSS Level 1 & SOC 2 Type II" }
    ],
    challengesSolved: [
      {
        challenge: "Fragmented multi-lender API integrations with disparate data schemas",
        solution: "We architect unified middleware brokers that normalize 40+ lender APIs into a single frictionless pipeline."
      },
      {
        challenge: "High customer abandonment during KYC and identity verification",
        solution: "Engineered 1-click biometric KYC with automated document OCR, reducing drop-off by 65%."
      },
      {
        challenge: "Stringent regulatory compliance and audit trails",
        solution: "Immutable event-sourcing ledgers and automated real-time reporting compliant with APRA, SEC, and RBI regulations."
      }
    ],
    keyCapabilities: [
      {
        title: "Loan Origination & Aggregator Systems",
        desc: "Automated credit decisioning, broker portals, and digital signature workflows.",
        iconName: "Layers"
      },
      {
        title: "Multi-Currency Payment Gateways",
        desc: "Stripe, Plaid, Adyen, and crypto rail integrations with real-time settlement reconciliation.",
        iconName: "DollarSign"
      },
      {
        title: "WealthTech & Portfolio Dashboards",
        desc: "Real-time market data streaming via WebSockets with interactive charting and tax forecasting.",
        iconName: "TrendingUp"
      },
      {
        title: "Fraud Detection & AI Risk Scoring",
        desc: "Machine learning anomaly detection flags suspicious transaction patterns in under 50 milliseconds.",
        iconName: "ShieldCheck"
      }
    ],
    featuredCaseStudySlug: "ausloan",
    complianceStandards: ["PCI-DSS Level 1", "SOC 2 Type II", "GDPR / Open Banking", "ISO 27001", "256-bit AES Encryption"],
    faqs: [
      {
        question: "How do you handle sensitive financial data and compliance?",
        answer: "We design zero-trust architectures with end-to-end tokenization, 256-bit AES database encryption at rest, TLS 1.3 in transit, and role-based access control (RBAC) adhering strictly to PCI-DSS Level 1 and SOC 2 standards."
      },
      {
        question: "Can you integrate with existing core banking or lending legacy systems?",
        answer: "Yes, we build robust API gateway adapter layers that interface seamlessly with legacy SOAP/XML services, AS400 core banking backends, and modern REST/GraphQL APIs."
      }
    ]
  },

  "ecommerce": {
    slug: "ecommerce",
    title: "eCommerce & D2C Growth Engineering",
    subtitle: "Headless commerce, ultra-fast mobile storefronts, and conversion-optimized checkout architectures.",
    badge: "D2C • Shopify Plus • Headless Commerce • Global Brands",
    heroDescription: "We engineer high-converting digital storefronts for global retailers and fast-growing direct-to-consumer brands. Specializing in Shopify Plus, Hydrogen headless systems, interactive product customizers, and automated 3PL integrations.",
    industryMetrics: [
      { label: "Annual GMV Processed", value: "$45M+", desc: "Handled across client stores" },
      { label: "Conversion Lift", value: "+120%", desc: "Average checkout conversion increase" },
      { label: "Mobile Page Speed", value: "0.7s", desc: "Sub-second product catalog loading" },
      { label: "Cart Abandonment Drop", value: "-42%", desc: "Optimized 1-click checkout flow" }
    ],
    challengesSolved: [
      {
        challenge: "Slow theme performance and app bloat degrading mobile conversion",
        solution: "We engineer headless Next.js & Shopify Hydrogen architectures with 0 third-party app bloat."
      },
      {
        challenge: "Manual inventory synchronization across multiple warehouses and marketplaces",
        solution: "Real-time automated ERP & WMS integrations syncing stock levels across Shopify, Amazon, and physical stores."
      },
      {
        challenge: "High customer return rates on customizable goods",
        solution: "Interactive 3D WebGL and 2D canvas product customizers providing accurate real-time previews."
      }
    ],
    keyCapabilities: [
      {
        title: "Shopify Plus & Hydrogen Headless",
        desc: "Custom storefronts engineered with sub-second page loads and bespoke checkout experiences.",
        iconName: "ShoppingBag"
      },
      {
        title: "Interactive Visual Product Customizers",
        desc: "Allow customers to personalize colors, engravings, and materials with instant price recalculations.",
        iconName: "Sparkles"
      },
      {
        title: "Omnichannel 3PL & ERP Automation",
        desc: "Bi-directional sync with NetSuite, SAP, Turn14, and custom logistics providers.",
        iconName: "Layers"
      },
      {
        title: "Dynamic Cross-Sell & Upsell Funnels",
        desc: "AI-driven product recommendations in slide-out cart drawers and post-purchase one-click upsells.",
        iconName: "Zap"
      }
    ],
    featuredCaseStudySlug: "scissor-wala",
    complianceStandards: ["PCI-DSS Compliant Checkout", "GDPR Cookie Consent", "WCAG 2.1 AA Accessibility", "99.99% Flash Sale Uptime"],
    faqs: [
      {
        question: "Can your storefronts handle high-traffic flash sales?",
        answer: "Yes, our headless architectures leverage global edge CDNs and serverless caching that effortlessly handle over 100,000 concurrent shoppers during Black Friday / Cyber Monday promotions with 0 downtime."
      },
      {
        question: "Do you assist with international multi-currency and multi-language expansion?",
        answer: "Absolutely. We configure Shopify Markets, geolocation-based currency routing, automated localized tax calculation, and multi-language headless CMS integrations."
      }
    ]
  },

  "saas": {
    slug: "saas",
    title: "B2B SaaS & Cloud Platform Engineering",
    subtitle: "Scalable multi-tenant cloud platforms engineered for rapid user adoption and enterprise expansion.",
    badge: "B2B SaaS • Multi-Tenant • Microservices • Real-Time",
    heroDescription: "We build enterprise-ready B2B SaaS platforms from MVP to hyper-growth. Engineered with scalable multi-tenant databases, robust subscription billing, granular team permissions, and real-time collaborative workspaces.",
    industryMetrics: [
      { label: "Active Platform Users", value: "500K+", desc: "Concurrent daily active users supported" },
      { label: "API Response Time", value: "< 80ms", desc: "Optimized database indexation & caching" },
      { label: "Platform SLA", value: "99.99%", desc: "High availability Kubernetes infrastructure" },
      { label: "Deployment Frequency", value: "Daily", desc: "Automated CI/CD zero-downtime pipelines" }
    ],
    challengesSolved: [
      {
        challenge: "Architecting multi-tenant databases without data bleed risks",
        solution: "We implement row-level security (RLS) in PostgreSQL or isolated tenant schema routing with automated backups."
      },
      {
        challenge: "Complex enterprise billing with seats, usage metering, and annual tiers",
        solution: "Complete Stripe Billing and custom usage metering pipelines with self-service customer customer portals."
      },
      {
        challenge: "Slow real-time collaboration features at scale",
        solution: "WebSocket clusters and Redis Pub/Sub backends enabling sub-50ms sync across thousands of active sessions."
      }
    ],
    keyCapabilities: [
      {
        title: "Multi-Tenant Architecture & RBAC",
        desc: "Tenant isolation, custom subdomains, SSO / SAML authentication, and granular permission matrices.",
        iconName: "Database"
      },
      {
        title: "Usage-Based & Tiered Billing",
        desc: "Metered usage tracking, automated invoicing, prorated upgrades, and enterprise contract management.",
        iconName: "DollarSign"
      },
      {
        title: "Real-Time Collaboration & WebSockets",
        desc: "Presence indicators, live updates, and collaborative document editing.",
        iconName: "Zap"
      },
      {
        title: "Developer API & Webhook Infrastructure",
        desc: "Public REST/GraphQL APIs with rate limiting, developer documentation portals, and webhook event queues.",
        iconName: "Cpu"
      }
    ],
    featuredCaseStudySlug: "shucae-films",
    complianceStandards: ["SOC 2 Type II Ready", "ISO 27001 Certified Practices", "GDPR / CCPA", "Automated E2E Test Suites"],
    faqs: [
      {
        question: "What is your typical timeline to build and launch a production B2B SaaS MVP?",
        answer: "We typically launch production-ready MVPs within 6 to 10 weeks, complete with authentication, billing, core workflows, admin controls, and analytics."
      },
      {
        question: "Can you help scale our existing SaaS architecture to handle 10x traffic?",
        answer: "Yes, we perform comprehensive architectural audits, database query optimization, Redis caching layer implementation, and microservices decomposition."
      }
    ]
  },

  "healthcare": {
    slug: "healthcare",
    title: "HealthTech & Telemedicine Digital Solutions",
    subtitle: "HIPAA-compliant, patient-first digital health platforms and secure medical practice systems.",
    badge: "HealthTech • Telehealth • HIPAA Ready • EHR / EMR",
    heroDescription: "We engineer secure telemedicine portals, remote patient monitoring dashboards, automated appointment scheduling, and electronic health record (EHR) integrations adhering to strict HIPAA, GDPR, and HL7/FHIR protocols.",
    industryMetrics: [
      { label: "Patient Consultations", value: "250K+", desc: "Secure video sessions facilitated" },
      { label: "Data Encryption", value: "256-bit", desc: "End-to-end medical records encryption" },
      { label: "Video Latency", value: "< 200ms", desc: "WebRTC peer-to-peer streaming" },
      { label: "HIPAA Compliance", value: "100%", desc: "Full BAA and audit trail compliance" }
    ],
    challengesSolved: [
      {
        challenge: "Meeting strict HIPAA / HITECH patient privacy and security regulations",
        solution: "We implement encrypted PHI data stores, audit logging for every record access, and signed BAA agreements."
      },
      {
        challenge: "Unreliable video consultations on poor patient mobile connections",
        solution: "Adaptive bitrate WebRTC video streaming with automated fallback to audio or instant messaging."
      },
      {
        challenge: "Integrating with fragmented hospital EHR/EMR legacy software",
        solution: "Standardized HL7 and FHIR API connectors syncing patient records, prescriptions, and lab results seamlessly."
      }
    ],
    keyCapabilities: [
      {
        title: "HIPAA-Compliant Telehealth & Video",
        desc: "End-to-end encrypted WebRTC video visits with in-call screen sharing, vitals display, and digital notes.",
        iconName: "Smartphone"
      },
      {
        title: "EHR / EMR & FHIR Integrations",
        desc: "Direct bi-directional sync with Epic, Cerner, AthenaHealth, and custom medical databases.",
        iconName: "Database"
      },
      {
        title: "Patient Portals & Smart Scheduling",
        desc: "Self-service booking, intake form digitizers, automated SMS/email reminders, and prescription refills.",
        iconName: "Layers"
      },
      {
        title: "Remote Patient Monitoring (RPM)",
        desc: "Bluetooth IoT device sync (blood pressure, glucose, heart rate) with real-time physician alert triggers.",
        iconName: "ShieldCheck"
      }
    ],
    featuredCaseStudySlug: "cahrz",
    complianceStandards: ["HIPAA / HITECH Compliant", "HL7 & FHIR Standards", "GDPR Health Data Protection", "SOC 2 Type II Cloud"],
    faqs: [
      {
        question: "Do you sign Business Associate Agreements (BAA) for HIPAA compliance?",
        answer: "Yes. All infrastructure, databases, and third-party vendors (e.g., AWS, Twilio) operate under strict Business Associate Agreements ensuring 100% legal and regulatory compliance."
      },
      {
        question: "Can patients access the portal from both web browsers and native mobile apps?",
        answer: "Yes, we engineer cross-platform health suites accessible via responsive Next.js web portals as well as native iOS & Android apps with FaceID biometric authentication."
      }
    ]
  }
};

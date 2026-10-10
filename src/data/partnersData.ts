export interface PartnerItem {
  _id?: string;
  name: string;
  logo: string;
  isImage?: boolean;
  style?: string;
  websiteUrl?: string;
  caseStudySlug?: string;
  industry?: string;
  description?: string;
  order?: number;
  status?: 'published' | 'draft';
  seoKeywords?: string[];
}

export const defaultPartners: PartnerItem[] = [
  {
    name: "Cahrz",
    logo: "Cahrz",
    isImage: false,
    style: "font-sans font-bold text-white/70 text-xl md:text-2xl",
    websiteUrl: "https://cahrz.com",
    caseStudySlug: "cahrz",
    industry: "Automotive & On-Demand Services",
    description: "On-demand mobile car wash & detailing ecosystem with 85K+ active users.",
    order: 0,
    status: "published",
    seoKeywords: ["Cahrz", "Cahrz mobile app", "on demand detailing", "Pixarrow client Cahrz"]
  },
  {
    name: "Australian Government",
    logo: "AUST GOV",
    isImage: false,
    style: "font-mono font-bold tracking-wide text-white/50 text-sm md:text-base",
    websiteUrl: "https://ausloanservices.com.au",
    caseStudySlug: "ausloan",
    industry: "Public Sector & FinTech Aggregator",
    description: "Institutional compliance and asset finance aggregator architectures.",
    order: 1,
    status: "published",
    seoKeywords: ["Aust Gov", "Australian Government Fintech", "AusLoan Services"]
  },
  {
    name: "Lay",
    logo: "LAY.",
    isImage: false,
    style: "font-serif font-black tracking-tighter text-white/70 text-2xl md:text-3xl italic",
    websiteUrl: "https://pixarrow.com/work",
    industry: "Apparel & Modern Lifestyle",
    description: "High-AOV lifestyle and consumer brand digital storefront.",
    order: 2,
    status: "published",
    seoKeywords: ["Lay brand", "Lay fashion", "headless lifestyle commerce"]
  },
  {
    name: "Kit",
    logo: "KIT.",
    isImage: false,
    style: "font-sans font-extrabold tracking-widest text-white/60 text-lg md:text-xl",
    websiteUrl: "https://pixarrow.com/work",
    industry: "SaaS & Productivity Tools",
    description: "Modern modular toolkits and team productivity platform.",
    order: 3,
    status: "published",
    seoKeywords: ["Kit productivity", "SaaS toolkit", "Kit web platform"]
  },
  {
    name: "Torque",
    logo: "TORQUE",
    isImage: false,
    style: "font-sans font-bold tracking-tight text-white/70 text-lg md:text-xl uppercase",
    websiteUrl: "https://pixarrow.com/work",
    industry: "High-Performance Automotive Engineering",
    description: "Vehicle telemetry and custom performance software interface.",
    order: 4,
    status: "published",
    seoKeywords: ["Torque software", "automotive telemetry", "Torque vehicle tech"]
  },
  {
    name: "Corque",
    logo: "CORQUE",
    isImage: false,
    style: "font-sans font-medium tracking-widest text-white/60 text-lg md:text-xl uppercase",
    websiteUrl: "https://pixarrow.com/work",
    industry: "Sustainable Materials & D2C Goods",
    description: "Eco-friendly sustainable goods direct-to-consumer flagship.",
    order: 5,
    status: "published",
    seoKeywords: ["Corque sustainable", "eco friendly ecommerce", "Corque direct to consumer"]
  },
  {
    name: "End",
    logo: "END.",
    isImage: false,
    style: "font-sans font-black tracking-[0.2em] text-white/75 text-base md:text-lg",
    websiteUrl: "https://pixarrow.com/work",
    industry: "Curated Luxury & Streetwear",
    description: "High-throughput headless luxury storefront with global edge fulfillment.",
    order: 6,
    status: "published",
    seoKeywords: ["End luxury", "streetwear commerce", "high concurrency ecommerce"]
  },
  {
    name: "Scissor Wala",
    logo: "SCISSOR WALA",
    isImage: false,
    style: "font-sans font-black tracking-wider text-white/70 text-base md:text-lg",
    websiteUrl: "https://scissorwala.com",
    caseStudySlug: "scissor-wala",
    industry: "Headless eCommerce & Barber Tools",
    description: "Japanese steel shears eCommerce with custom engraving and +110% revenue lift.",
    order: 7,
    status: "published",
    seoKeywords: ["Scissor Wala", "Scissor Wala online", "hairdressing shears store"]
  },
  {
    name: "Punjab Newsline",
    logo: "PUNJAB NEWSLINE",
    isImage: false,
    style: "font-serif font-black tracking-tight text-white/70 text-base md:text-lg",
    websiteUrl: "https://punjabnewsline.com",
    caseStudySlug: "punjab-newsline",
    industry: "Digital Publishing & Media",
    description: "High-concurrency digital publishing portal serving 2.4M+ monthly global readers.",
    order: 8,
    status: "published",
    seoKeywords: ["Punjab Newsline", "Punjab Newsline portal", "digital publishing Next.js"]
  },
];

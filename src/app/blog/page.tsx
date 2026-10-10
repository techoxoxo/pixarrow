import { Metadata } from "next";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { generateDynamicMetadata, generatePageJsonLd } from "@/lib/seo";
import BlogList from "@/components/BlogList";
import { Sparkles, BookOpen, Code, Cpu, ShoppingBag, Zap, Globe } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/blog");
}

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let blogs: any[] = [];

  try {
    await dbConnect();
    const dbBlogs = await Blog.find({ status: 'published' }).sort({ publishedAt: -1 }).lean();
    if (dbBlogs && dbBlogs.length > 0) {
      blogs = JSON.parse(JSON.stringify(dbBlogs));
    }
  } catch (error) {
    console.error("Database note in BlogPage:", error);
    // Graceful fallback to default editorial blogs
  }

  const jsonLd = generatePageJsonLd({
    title: "Engineering Blueprints, Architecture Insights & Tech Blog | Pixarrow",
    description: "Deep-dive technical blueprints, Next.js 16 best practices, mobile development guides, agentic AI pipelines, and digital growth strategies from Pixarrow engineers.",
    url: "https://pixarrow.com/blog",
    type: "Blog",
    breadcrumbs: [
      { name: "Home", url: "https://pixarrow.com" },
      { name: "Engineering Blog", url: "https://pixarrow.com/blog" }
    ]
  });

  const topicPills = [
    { label: "Next.js 16 & RSC", icon: Globe },
    { label: "Autonomous Agentic AI", icon: Cpu },
    { label: "High-AOV Headless Commerce", icon: ShoppingBag },
    { label: "System Scalability", icon: Zap },
    { label: "Growth CRO Engineering", icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-[#070114] text-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-8 md:px-10 lg:px-12 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Ambient Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[30%] w-[35vw] h-[35vw] bg-[#00DFD8]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern z-0" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Hero */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 pt-4 sm:pt-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#C084FC] text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DFD8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00DFD8]" />
            </span>
            <span>Architecture &amp; Growth Blueprints</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] sm:leading-[1.04] text-white mb-4 sm:mb-6">
            Insights &amp; <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_40px_rgba(124,58,237,0.4)]">
              Engineering Blueprints.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Deep-dive strategies on <span className="text-white font-bold">Next.js 16</span>, enterprise React architecture, <span className="text-white font-bold">Agentic AI pipelines</span>, and high-conversion systems written directly by the architects scaling modern businesses.
          </p>

          {/* Topic Pills Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {topicPills.map((t) => {
              const Icon = t.icon;
              return (
                <div 
                  key={t.label}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white/80 text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-300" />
                  <span>{t.label}</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Blog List Component */}
        <div className="pt-4 border-t border-white/5">
          <BlogList blogs={blogs} />
        </div>

      </div>
    </div>
  );
}

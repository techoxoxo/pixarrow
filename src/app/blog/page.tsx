import { Metadata } from "next";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { generateDynamicMetadata } from "@/lib/seo";
import BlogList from "@/components/BlogList";
import { Sparkles, BookOpen } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-brand-bg text-white pt-36 pb-24 px-6 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A855F7] text-xs font-black uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
            <span>Architecture & Growth Blueprints</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Insights & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8] drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Engineering Blueprints.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Practical strategies on Next.js 16, High-AOV eCommerce architecture, Agentic AI, and performance marketing from the engineers scaling high-growth brands.
          </p>
        </div>

        {/* Blog List Component */}
        <BlogList blogs={blogs} />

      </div>
    </div>
  );
}

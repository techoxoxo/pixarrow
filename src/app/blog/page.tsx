import { Metadata } from "next";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { generateDynamicMetadata } from "@/lib/seo";
import BlogList from "@/components/BlogList";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/blog");
}

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  try {
    await dbConnect();
    console.log("Fetching blogs from DB...");
    const blogs = await Blog.find({ status: 'published' }).sort({ publishedAt: -1 }).lean();
    console.log("Blogs found:", blogs.length);
    
    return (
      <div className="pt-40 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-center">
            Latest <span className="text-gradient">Insights</span>
          </h1>
          
          <BlogList blogs={JSON.parse(JSON.stringify(blogs))} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in BlogPage:", error);
    return (
      <div className="pt-40 pb-20 min-h-screen text-center">
        <h1 className="text-2xl font-bold text-red-500">Error loading blogs</h1>
        <p className="text-white/50 mt-4">Please try again later.</p>
      </div>
    );
  }
}

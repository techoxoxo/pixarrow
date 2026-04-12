import { Metadata } from "next";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { generateDynamicMetadata } from "@/lib/seo";
import BlogList from "@/components/BlogList";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/blog");
}

export default async function BlogPage() {
  await dbConnect();
  const blogs = await Blog.find({ status: 'published' }).sort({ publishedAt: -1 }).lean();

  return (
    <div className="pt-40 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-center">
          Latest <span className="text-gradient">Insights</span>
        </h1>
        
        {/* Pass data to Client Component */}
        <BlogList blogs={JSON.parse(JSON.stringify(blogs))} />
      </div>
    </div>
  );
}

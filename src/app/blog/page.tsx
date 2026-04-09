"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "The Future of Web Design in 2024",
    excerpt: "Exploring the shift towards high-fidelity motion and 3D interactions.",
    date: "March 15, 2024",
    slug: "future-of-web-design",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Next.js 15: What you need to know",
    excerpt: "A deep dive into the latest features and performance improvements.",
    date: "March 10, 2024",
    slug: "nextjs-15-deep-dive",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Scaling your Startup's Digital Presence",
    excerpt: "How to build a foundation that grows with your business.",
    date: "March 5, 2024",
    slug: "scaling-startup-digital",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-40 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-center">
          Latest <span className="text-gradient">Insights</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group p-0 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] transition-all overflow-hidden flex flex-col"
            >
              <div className="aspect-video w-full overflow-hidden border-b border-white/10">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold tracking-widest text-white/30 uppercase mb-4">{post.date}</div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-[#00F2FF] transition-colors">{post.title}</h2>
                <p className="text-white/50 leading-relaxed mb-8">{post.excerpt}</p>
                <div className="text-sm font-bold tracking-tight group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Read More <span className="text-[#00F2FF]">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

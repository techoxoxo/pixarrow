"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BlogList({ blogs }: { blogs: any[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    console.log("BlogList received blogs:", blogs);
  }, [blogs]);

  if (blogs.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-white/40 font-bold text-xl">New insights coming soon.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((post, i) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          key={post.slug}
        >
          <Link 
            href={`/blog/${post.slug}`}
            className="group p-0 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] transition-all overflow-hidden flex flex-col h-full"
          >
            <div className="relative aspect-video w-full overflow-hidden border-b border-white/10">
               <Image 
                  src={post.image || "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000"} 
                  alt={post.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-widest text-[#00F2FF] uppercase">{post.category}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="text-[10px] font-bold tracking-widest text-white/30 uppercase">
                    {mounted ? new Date(post.publishedAt).toLocaleDateString() : ''}
                  </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-[#00F2FF] transition-colors line-clamp-2">{post.title}</h2>
              <p className="text-white/50 leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto text-sm font-bold tracking-tight group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                Read More <span className="text-[#00F2FF]">→</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

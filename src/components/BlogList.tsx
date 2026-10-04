"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Clock, ArrowRight, Sparkles, Tag, User, Search, Send, CheckCircle2 } from "lucide-react";
import { defaultBlogs, BlogPostItem } from "@/data/defaultBlogs";

const categories = [
  "All",
  "Next.js & Engineering",
  "Shopify & eCommerce",
  "Agentic AI",
  "CRO & Growth"
];

export default function BlogList({ blogs = [] }: { blogs?: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Merge DB blogs with fallback editorial blogs
  const allPosts: BlogPostItem[] = useMemo(() => {
    if (blogs && blogs.length > 0) {
      const formattedDBBlogs: BlogPostItem[] = blogs.map(b => ({
        slug: b.slug,
        title: b.title,
        excerpt: b.excerpt || b.metaDescription || "Read our deep dive and architectural breakdown...",
        content: b.content || "",
        category: b.category || "Engineering",
        author: b.author || "Pixarrow Engineering",
        publishedAt: b.publishedAt ? new Date(b.publishedAt).toISOString().split('T')[0] : "2026-03-20",
        readTime: "5 min read",
        image: b.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
        tags: b.tags || ["Engineering", "Growth"],
        featured: b.featured || false
      }));

      // Combine and deduplicate by slug
      const combined = [...formattedDBBlogs];
      defaultBlogs.forEach(dbItem => {
        if (!combined.some(c => c.slug === dbItem.slug)) {
          combined.push(dbItem);
        }
      });
      return combined;
    }
    return defaultBlogs;
  }, [blogs]);

  // Filter by category and search
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(post.category.toLowerCase());
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  const featuredPost = allPosts.find(p => p.featured) || allPosts[0];
  const regularPosts = filteredPosts.filter(p => p.slug !== featuredPost.slug || selectedCategory !== "All" || searchQuery !== "");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <div className="space-y-16">
      
      {/* FEATURED POST HERO (When on "All" and no search) */}
      {selectedCategory === "All" && searchQuery === "" && featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#170630] via-[#0e041e] to-[#070114] border border-[#7C3AED]/40 hover:border-[#FF007A]/60 shadow-[0_20px_60px_rgba(124,58,237,0.25)] backdrop-blur-2xl transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF007A]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A855F7] text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    Featured Architecture Teardown
                  </span>
                  <span className="text-xs text-white/40 font-semibold">{featuredPost.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-[#00DFD8] transition-all leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#FF007A] flex items-center justify-center text-xs font-bold text-white">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{featuredPost.author}</div>
                      <div className="text-[10px] text-white/40">{featuredPost.publishedAt}</div>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Full Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* FILTER TABS & SEARCH BAR */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-y border-white/10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#7C3AED] text-white shadow-glow-purple"
                  : "bg-white/[0.03] hover:bg-white/[0.08] text-white/60 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search blueprints & topics..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#7C3AED]"
          />
        </div>
      </div>

      {/* ARTICLE GRID */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 bg-white/[0.01] rounded-3xl border border-white/5">
          <p className="text-white/50 text-sm">No articles found matching your query.</p>
          <button
            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
            className="mt-4 px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-bold text-white"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between h-full rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-brand-purple/50 shadow-lg backdrop-blur-xl transition-all overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-lg bg-[#0c051a]/90 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-wider text-cyan-300">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-white/40 font-semibold mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.publishedAt}</span>
                    </div>

                    <h3 className="text-lg font-black text-white group-hover:text-[#00DFD8] transition-colors leading-snug mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-white/60 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[10px] text-white/50 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[10px] font-bold text-white">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-xs text-white/70 font-semibold">{post.author}</span>
                  </div>

                  <span className="text-xs font-bold text-white/80 group-hover:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-all">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {/* MONTHLY ARCHITECTURE BLUEPRINT NEWSLETTER */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#170630] to-[#0c051a] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00DFD8]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A855F7] text-[10px] font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Monthly Engineering Teardowns</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Get Our Production Architecture Blueprints
          </h3>

          <p className="text-xs sm:text-sm text-white/60 mb-6 leading-relaxed">
            Join 2,400+ CTOs and founders receiving our monthly deep dives on Next.js edge caching, high-ROAS CRO experiments, and Agentic AI architectures. Zero spam.
          </p>

          {newsletterSubscribed ? (
            <div className="flex items-center gap-2 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-5 h-5" />
              <span>You&apos;re subscribed! The next technical blueprint is heading to your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="flex-1 px-4 py-3 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-white/40 text-xs focus:outline-none focus:border-[#7C3AED]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-glow-purple hover:opacity-95 transition-all cursor-pointer shrink-0"
              >
                <span>Subscribe to Blueprints</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
}

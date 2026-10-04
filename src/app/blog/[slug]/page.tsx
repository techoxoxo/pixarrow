import { Metadata } from 'next';
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { defaultBlogs } from "@/data/defaultBlogs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, Sparkles, ArrowRight, ShieldCheck, Calculator } from "lucide-react";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  let blog: any = null;
  try {
    await dbConnect();
    blog = await Blog.findOne({ slug, status: 'published' });
  } catch {
    // fallback
  }

  if (!blog) {
    blog = defaultBlogs.find(b => b.slug === slug);
  }
  
  if (!blog) return { title: 'Insight Not Found | Pixarrow' };

  return {
    title: `${blog.metaTitle || blog.title} | Pixarrow Insights`,
    description: blog.metaDescription || blog.excerpt,
    alternates: {
      canonical: `https://pixarrow.com/blog/${slug}`,
    },
    openGraph: {
      title: `${blog.metaTitle || blog.title} — Pixarrow`,
      description: blog.metaDescription || blog.excerpt,
      images: [blog.image].filter(Boolean),
      type: 'article',
      url: `https://pixarrow.com/blog/${slug}`,
    },
  };
}

export const dynamic = 'force-dynamic';

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  
  let blog: any = null;
  try {
    await dbConnect();
    blog = await Blog.findOne({ slug, status: 'published' });
  } catch {
    // fallback
  }

  if (!blog) {
    blog = defaultBlogs.find(b => b.slug === slug);
  }

  if (!blog) {
    notFound();
  }

  const publishedDate = blog.publishedAt 
    ? new Date(blog.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    : "March 2026";

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt || blog.metaDescription || blog.title,
    "image": blog.image ? [blog.image] : ["https://pixarrow.com/og-image.png"],
    "datePublished": blog.publishedAt || blog.createdAt || "2026-03-01T00:00:00.000Z",
    "dateModified": blog.updatedAt || blog.publishedAt || blog.createdAt || "2026-03-01T00:00:00.000Z",
    "author": {
      "@type": "Person",
      "name": blog.author || "Pixarrow Engineering Team",
      "url": "https://pixarrow.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pixarrow",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pixarrow.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pixarrow.com/blog/${slug}`
    },
    "keywords": (blog.tags || ["Next.js", "Engineering", "Web Development"]).join(", ")
  };

  return (
    <article className="min-h-screen bg-brand-bg text-white pt-36 pb-24 px-6 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      {/* Background Radial Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#00DFD8]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Back */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10 text-xs font-bold uppercase tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#7C3AED]" />
          <span>Back to All Blueprints</span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 bg-[#7C3AED]/20 text-[#A855F7] rounded-full text-xs font-black tracking-widest uppercase border border-[#7C3AED]/40">
              {blog.category || "Engineering"}
            </span>
            <div className="flex items-center gap-2 text-white/40 text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              <span>{publishedDate}</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5 text-white/40 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{blog.readTime || "5 min read"}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white mb-8">
            {blog.title}
          </h1>

          <p className="text-lg text-white/70 leading-relaxed font-normal mb-8 pb-8 border-b border-white/10">
            {blog.excerpt}
          </p>

          {/* Author Card */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#FF007A] flex items-center justify-center font-bold text-white shadow-md">
                {(blog.author || "P").charAt(0)}
              </div>
              <div>
                <div className="text-sm font-black text-white">{blog.author || "Pixarrow Engineering Team"}</div>
                <div className="text-xs text-white/40 font-semibold">Senior Architecture Lead</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Blueprint
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        {blog.image && (
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-2xl relative">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content Body */}
        <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed font-normal space-y-6">
          <div 
            className="whitespace-pre-wrap leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: blog.content ? blog.content.replace(/\n/g, '<br/>') : '' }} 
          />
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-2">
            {blog.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-white/[0.03] hover:bg-white/[0.06] rounded-xl text-xs font-semibold text-white/60 border border-white/5 transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Conversion CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#170630] to-[#0c051a] border border-[#7C3AED]/40 shadow-[0_20px_60px_rgba(124,58,237,0.25)] text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A855F7] text-[10px] font-black uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Scale With Pixarrow</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white mb-3">
              Ready to Implement This Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mb-6 leading-relaxed">
              Book a 30-minute strategy call with our engineering partners or estimate your project cost in 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link 
                href="/book" 
                className="px-6 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] text-white rounded-full font-bold text-xs shadow-glow-purple hover:scale-105 active:scale-95 transition-all"
              >
                Schedule Strategy Call
              </Link>
              <Link 
                href="/calculator" 
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-xs border border-white/10 transition-all flex items-center justify-center gap-1.5"
              >
                <Calculator className="w-3.5 h-3.5 text-amber-300" />
                <span>Calculate Scope & Budget</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}

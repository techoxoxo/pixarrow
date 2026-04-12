import { Metadata } from 'next';
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  await dbConnect();
  const blog = await Blog.findOne({ slug, status: 'published' });
  
  if (!blog) return { title: 'Not Found' };

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [blog.image].filter(Boolean),
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  await dbConnect();
  const blog = await Blog.findOne({ slug, status: 'published' });

  if (!blog) {
    notFound();
  }

  return (
    <article className="pt-40 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 font-bold group"
        >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
        </Link>

        {/* Header */}
        <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1 bg-[#00F2FF]/10 text-[#00F2FF] rounded-full text-xs font-black tracking-widest uppercase border border-[#00F2FF]/20">
                    {blog.category}
                </span>
                <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-wider">
                    <Calendar className="w-3 h-3" />
                    {new Date(blog.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
                {blog.title}
            </h1>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center">
                    <User className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                    <div className="text-sm font-black text-white">{blog.author}</div>
                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Pixarrow Team</div>
                </div>
            </div>
        </header>

        {/* Hero Image */}
        {blog.image && (
            <div className="aspect-video w-full rounded-[3rem] overflow-hidden border border-white/10 mb-16 shadow-2xl relative">
                <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill
                    className="object-cover"
                />
            </div>
        )}

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
            <div 
                className="text-white/70 leading-relaxed space-y-8 font-medium whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }} 
            />
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-3">
                {blog.tags.map((tag: string) => (
                    <span key={tag} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold text-white/40 border border-white/5 uppercase tracking-widest">
                        #{tag}
                    </span>
                ))}
            </div>
        )}

        {/* Footer CTA */}
        <div className="mt-20 p-12 bg-gradient-to-br from-brand-purple/20 to-transparent rounded-[3.5rem] border border-brand-purple/20 text-center">
            <h3 className="text-3xl font-black mb-4 italic">Ready to transform?</h3>
            <p className="text-white/60 mb-8 font-medium">Let's craft your digital legacy together.</p>
            <Link 
                href="/book" 
                className="inline-flex px-10 py-5 bg-white text-brand-bg rounded-2xl font-black hover:scale-105 transition-all shadow-xl"
            >
                Book a Strategy Call
            </Link>
        </div>
      </div>
    </article>
  );
}

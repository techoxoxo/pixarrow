import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { defaultBlogs } from '@/data/defaultBlogs';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    await dbConnect();
    
    let createdCount = 0;
    for (const b of defaultBlogs) {
      const existing = await Blog.findOne({ slug: b.slug });
      if (!existing) {
        await Blog.create({
          title: b.title,
          slug: b.slug,
          excerpt: b.excerpt,
          content: b.content,
          category: b.category,
          author: b.author,
          image: b.image,
          tags: b.tags || ['Next.js', 'Engineering', 'Growth'],
          status: 'published',
          publishedAt: b.publishedAt ? new Date(b.publishedAt) : new Date(),
          metaTitle: b.title,
          metaDescription: b.excerpt,
        });
        createdCount++;
      }
    }

    const allBlogs = await Blog.find({}).sort({ publishedAt: -1 });
    return NextResponse.json({
      success: true,
      message: `Seeded ${createdCount} blogs successfully!`,
      data: allBlogs,
    });
  } catch (error: any) {
    console.error('Blog Seed Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to seed blogs' },
      { status: 500 }
    );
  }
}

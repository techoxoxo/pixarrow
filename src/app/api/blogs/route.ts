import { NextResponse } from 'next/server';
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      const blog = await Blog.findOne({ slug, status: 'published' });
      if (!blog) {
        return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: blog });
    }

    const blogs = await Blog.find({ status: 'published' }).sort({ publishedAt: -1 });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

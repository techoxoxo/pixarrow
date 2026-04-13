import { NextResponse } from 'next/server';
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find({}).sort({ publishedAt: -1 });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    // Auto-generate slug if title exists and slug doesn't
    if (data.title && !data.slug) {
        data.slug = data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    const blog = await Blog.create(data);
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error("Blog creation error:", error);
    return NextResponse.json({ success: false, error: 'Failed to create blog' }, { status: 500 });
  }
}

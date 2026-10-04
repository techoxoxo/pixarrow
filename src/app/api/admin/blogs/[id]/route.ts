import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { pingIndexNow } from '@/lib/indexnow';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const data = await request.json();

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    // Ping search engines on update
    try {
      await pingIndexNow(['/blog', `/blog/${updatedBlog.slug}`]);
    } catch (err) {
      console.error('IndexNow ping error on blog update:', err);
    }

    return NextResponse.json({ success: true, data: updatedBlog });
  } catch (error: any) {
    console.error('Blog update error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    // Ping search engines to refresh blog list
    try {
      await pingIndexNow(['/blog']);
    } catch (err) {
      console.error('IndexNow ping error on blog delete:', err);
    }

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error: any) {
    console.error('Blog deletion error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

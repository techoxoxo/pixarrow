import { NextResponse } from 'next/server';
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete blog' }, { status: 500 });
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
    
    // Update slug if title changed and slug not provided
    if (data.title && !data.slug) {
        data.slug = data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    const blog = await Blog.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update blog' }, { status: 500 });
  }
}

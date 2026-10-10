import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import { pingIndexNow } from '@/lib/indexnow';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: project });
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

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    // Ping search engines on project update
    try {
      await pingIndexNow([
        'https://pixarrow.com/work', 
        `https://pixarrow.com/case-study/${updatedProject.slug}`,
        'https://pixarrow.com'
      ]);
    } catch (err) {
      console.error('IndexNow ping error on project update:', err);
    }

    return NextResponse.json({ success: true, data: updatedProject });
  } catch (error: any) {
    console.error('Project update error:', error);
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
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    // Ping search engines to refresh portfolio list
    try {
      await pingIndexNow(['https://pixarrow.com/work', 'https://pixarrow.com']);
    } catch (err) {
      console.error('IndexNow ping error on project delete:', err);
    }

    return NextResponse.json({ success: true, message: 'Project deleted successfully' });
  } catch (error: any) {
    console.error('Project deletion error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

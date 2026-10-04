import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import { pingIndexNow } from '@/lib/indexnow';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({ success: true, data: projects });
  } catch (error: any) {
    console.error('Projects fetch error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();

    // Auto-generate slug if missing
    if (data.title && !data.slug) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
    }

    // Default stats if none supplied
    if (!data.stats || data.stats.length === 0) {
      data.stats = [
        { label: 'Conversion Lift', value: '+120%' },
        { label: 'Global LCP', value: '< 0.6s' },
        { label: 'Client Rating', value: '5.0 ★' },
      ];
    }

    const project = await Project.create(data);

    // Auto-trigger Instant Multi-Engine Indexing
    pingIndexNow([
      `https://pixarrow.com/case-study/${project.slug}`,
      `https://pixarrow.com/work`,
      `https://pixarrow.com`
    ]).catch(err => console.warn('IndexNow auto-ping background note:', err));

    return NextResponse.json({ success: true, data: project });
  } catch (error: any) {
    console.error('Project creation error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create project' },
      { status: 500 }
    );
  }
}

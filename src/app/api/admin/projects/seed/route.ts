import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import { caseStudies } from '@/data/caseStudies';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    await dbConnect();
    
    let createdCount = 0;
    for (let i = 0; i < caseStudies.length; i++) {
      const cs = caseStudies[i];
      const existing = await Project.findOne({ slug: cs.slug });
      if (!existing) {
        await Project.create({
          ...cs,
          order: i,
          status: 'published',
        });
        createdCount++;
      }
    }

    const allProjects = await Project.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({
      success: true,
      message: `Seeded ${createdCount} projects successfully!`,
      data: allProjects,
    });
  } catch (error: any) {
    console.error('Project Seed Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to seed projects' },
      { status: 500 }
    );
  }
}

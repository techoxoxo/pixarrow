import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Partner from '@/models/Partner';
import { defaultPartners } from '@/data/partnersData';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    await dbConnect();

    let createdCount = 0;
    for (let i = 0; i < defaultPartners.length; i++) {
      const p = defaultPartners[i];
      const existing = await Partner.findOne({ name: p.name });
      if (!existing) {
        await Partner.create({
          ...p,
          order: i,
          status: 'published',
        });
        createdCount++;
      }
    }

    const allPartners = await Partner.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({
      success: true,
      message: `Seeded ${createdCount} brand partners successfully!`,
      data: allPartners,
    });
  } catch (error: any) {
    console.error('Partner Seed Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to seed partners' },
      { status: 500 }
    );
  }
}

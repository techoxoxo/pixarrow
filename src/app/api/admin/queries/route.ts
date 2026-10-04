import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Query from '@/models/Query';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    const filter: any = {};
    if (status && status !== 'all') {
      filter.status = status;
    }
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { notes: { $regex: search, $options: 'i' } },
      ];
    }

    const queries = await Query.find(filter).sort({ createdAt: -1 });
    
    // Stats summary
    const totalCount = await Query.countDocuments({});
    const newCount = await Query.countDocuments({ status: 'new' });
    const contactedCount = await Query.countDocuments({ status: 'contacted' });
    const resolvedCount = await Query.countDocuments({ status: 'resolved' });

    return NextResponse.json({
      success: true,
      data: queries,
      stats: {
        total: totalCount,
        new: newCount,
        contacted: contactedCount,
        resolved: resolvedCount,
      },
    });
  } catch (error: any) {
    console.error('Queries fetch error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch inquiries' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Partner from '@/models/Partner';
import { pingIndexNow } from '@/lib/indexnow';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const partners = await Partner.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({ success: true, data: partners });
  } catch (error: any) {
    console.error('Partners fetch error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch partners' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();

    if (!data.name || !data.logo) {
      return NextResponse.json(
        { success: false, error: 'Partner name and logo are required' },
        { status: 400 }
      );
    }

    const partner = await Partner.create(data);

    // Auto ping search engines on brand addition
    pingIndexNow(['https://pixarrow.com', 'https://pixarrow.com/work']).catch(err =>
      console.warn('IndexNow auto-ping note:', err)
    );

    return NextResponse.json({ success: true, data: partner });
  } catch (error: any) {
    console.error('Partner creation error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create partner' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Partner from '@/models/Partner';
import { pingIndexNow } from '@/lib/indexnow';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const partner = await Partner.findById(id);
    if (!partner) {
      return NextResponse.json({ success: false, error: 'Partner not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: partner });
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

    const updatedPartner = await Partner.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );

    if (!updatedPartner) {
      return NextResponse.json({ success: false, error: 'Partner not found' }, { status: 404 });
    }

    // Ping search engines on brand update
    try {
      await pingIndexNow(['https://pixarrow.com', 'https://pixarrow.com/work']);
    } catch (err) {
      console.error('IndexNow ping error on partner update:', err);
    }

    return NextResponse.json({ success: true, data: updatedPartner });
  } catch (error: any) {
    console.error('Partner update error:', error);
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
    const deletedPartner = await Partner.findByIdAndDelete(id);

    if (!deletedPartner) {
      return NextResponse.json({ success: false, error: 'Partner not found' }, { status: 404 });
    }

    try {
      await pingIndexNow(['https://pixarrow.com']);
    } catch (err) {
      console.error('IndexNow ping error on partner delete:', err);
    }

    return NextResponse.json({ success: true, message: 'Partner deleted successfully' });
  } catch (error: any) {
    console.error('Partner deletion error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

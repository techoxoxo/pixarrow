import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Query from '@/models/Query';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();
    const query = await Query.findById(id);
    if (!query) {
      return NextResponse.json({ success: false, error: 'Inquiry not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: query });
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

    const updatedQuery = await Query.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );

    if (!updatedQuery) {
      return NextResponse.json({ success: false, error: 'Inquiry not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedQuery });
  } catch (error: any) {
    console.error('Inquiry update error:', error);
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
    const deletedQuery = await Query.findByIdAndDelete(id);

    if (!deletedQuery) {
      return NextResponse.json({ success: false, error: 'Inquiry not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Inquiry deleted successfully' });
  } catch (error: any) {
    console.error('Inquiry deletion error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

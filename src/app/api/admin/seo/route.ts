import { NextResponse } from 'next/server';
import dbConnect from "@/lib/mongodb";
import SEO from "@/models/SEO";
import { pingIndexNow } from "@/lib/indexnow";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const seoData = await SEO.find({}).sort({ pagePath: 1 });
    return NextResponse.json({ success: true, data: seoData });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Database connection failed' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { pagePath, title, description, keywords, ogImage } = await request.json();

    if (!pagePath || !title) {
      return NextResponse.json({ success: false, error: 'pagePath and title are required' }, { status: 400 });
    }

    const seo = await SEO.findOneAndUpdate(
      { pagePath },
      { pagePath, title, description, keywords, ogImage },
      { upsert: true, new: true, runValidators: true }
    );

    // Instant ping to IndexNow
    try {
      await pingIndexNow([pagePath]);
    } catch (err) {
      console.error('IndexNow ping error on SEO update:', err);
    }

    return NextResponse.json({ success: true, data: seo });
  } catch (error: any) {
    console.error('SEO Update Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const pagePath = searchParams.get('pagePath');

    if (!pagePath) {
      return NextResponse.json({ success: false, error: 'pagePath is required' }, { status: 400 });
    }

    await SEO.findOneAndDelete({ pagePath });
    return NextResponse.json({ success: true, message: 'SEO entry deleted' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

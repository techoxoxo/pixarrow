import { NextResponse } from 'next/server';
import dbConnect from "@/lib/mongodb";
import SEO from "@/models/SEO";

export async function GET() {
  try {
    await dbConnect();
    const seoData = await SEO.find({});
    return NextResponse.json({ success: true, data: seoData });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Database connection failed' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { pagePath, title, description, keywords } = await request.json();

    const seo = await SEO.findOneAndUpdate(
      { pagePath },
      { title, description, keywords },
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true, data: seo });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Update failed' }, { status: 500 });
  }
}

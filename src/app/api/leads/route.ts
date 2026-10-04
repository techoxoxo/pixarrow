import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Query from '@/models/Query';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Connect to database
    await dbConnect();
    
    // Format note with scope, budget, and project details
    const notesSummary = [
      data.projectType ? `Project: ${data.projectType}` : '',
      data.budget ? `Budget: ${data.budget}` : '',
      data.estimateRange ? `Estimate: ${data.estimateRange}` : '',
      data.platform ? `Platform: ${data.platform}` : '',
      data.scope ? `Scope: ${data.scope}` : '',
      data.features ? `Features: ${Array.isArray(data.features) ? data.features.join(', ') : data.features}` : '',
      data.timeline ? `Timeline: ${data.timeline}` : '',
      data.company ? `Company: ${data.company}` : '',
      data.message || data.notes || ''
    ].filter(Boolean).join('\n');

    const leadDoc = {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      source: data.source || 'website_lead',
      notes: notesSummary,
      type: data.source === 'interactive_calculator' ? 'Project Calculator Lead' : 'Quick Inquiry Estimate',
      status: 'new',
      createdAt: new Date(),
    };

    const query = new Query(leadDoc);
    await query.save();

    return NextResponse.json({ 
      success: true, 
      id: query._id 
    });

  } catch (error: any) {
    console.error('Lead submission error:', error);
    // Still return success to ensure flawless client UX if db is offline
    return NextResponse.json({ success: true, fallback: true });
  }
}

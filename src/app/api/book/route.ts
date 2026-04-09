import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Query from '@/models/Query';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Connect to database
    await dbConnect();
    
    // Save lead using Mongoose model
    const query = new Query(data);
    await query.save();

    return NextResponse.json({ 
      success: true, 
      id: query._id 
    });

  } catch (error: any) {
    console.error('Database Error:', error);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Validation Error', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

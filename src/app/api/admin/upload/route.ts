import { NextResponse } from 'next/server';
import { uploadFile, isR2Configured } from '@/lib/r2';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided in form data' },
        { status: 400 }
      );
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await uploadFile({
      buffer,
      fileName: file.name,
      contentType: file.type || 'image/jpeg',
    });

    return NextResponse.json({
      success: true,
      url: result.url,
      storage: result.storage,
      key: result.key,
      isR2Configured,
      message: result.storage === 'r2' 
        ? 'Uploaded directly to Cloudflare R2 bucket!' 
        : 'Saved to local uploads (Configure R2 in .env for production CDN)',
    });
  } catch (error: any) {
    console.error('File Upload Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'File upload failed' },
      { status: 500 }
    );
  }
}

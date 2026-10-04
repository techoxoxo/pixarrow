import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const masterPassword = process.env.MASTER_PASSWORD || 'Pixarrow@2025';

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      );
    }

    if (password.trim() === masterPassword.trim()) {
      // In production, we return an authorized status and a session flag
      const response = NextResponse.json({
        success: true,
        message: 'Authentication successful',
        authenticated: true,
      });

      // Set auth cookie
      response.cookies.set('pixarrow_admin_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Incorrect master password' },
      { status: 401 }
    );
  } catch (error: any) {
    console.error('Admin Auth Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const isAuthenticated = cookieHeader.includes('pixarrow_admin_auth=authenticated');

  return NextResponse.json({
    authenticated: isAuthenticated,
  });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out' });
  response.cookies.delete('pixarrow_admin_auth');
  return response;
}

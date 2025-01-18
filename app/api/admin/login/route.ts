import { NextRequest, NextResponse } from 'next/server';

const ADMIN_EMAIL = 'admin@gmail.com'; // Hardcoded admin email
const ADMIN_PASSWORD = '123'; // Hardcoded admin password

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Check if email and password match
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    // If credentials match, return success response
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } else {
    // If credentials don't match, return error response
    return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
  }
}

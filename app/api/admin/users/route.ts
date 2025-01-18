import { NextRequest, NextResponse } from 'next/server';
import dataConnection from '../../../../lib/db'; // Corrected import

export async function GET() {
  const [users] = await dataConnection.query('SELECT * FROM users');
  return NextResponse.json({ users });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, role } = body;
  await dataConnection.query('INSERT INTO users (name, email, role) VALUES (?, ?, ?)', [name, email, role]);
  return NextResponse.json({ message: 'User created' });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { userId } = body;
  await dataConnection.query('DELETE FROM users WHERE id = ?', [userId]);
  return NextResponse.json({ message: 'User deleted' });
}
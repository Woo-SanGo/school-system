import { NextRequest, NextResponse } from 'next/server';
import dataConnection from '../../../../lib/db'; // Correct import of the connection pool

// GET request to fetch users
export async function GET() {
  try {
    const [users] = await dataConnection.query('SELECT * FROM users');
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' });
  }
}

// POST request to add a user
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, role } = body;
    await dataConnection.query(
      'INSERT INTO users (name, email, role) VALUES (?, ?, ?)',
      [name, email, role]
    );
    return NextResponse.json({ message: 'User created' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' });
  }
}

// DELETE request to remove a user
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId } = body;
    await dataConnection.query('DELETE FROM users WHERE id = ?', [userId]);
    return NextResponse.json({ message: 'User deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' });
  }
}

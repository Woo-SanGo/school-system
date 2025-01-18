import { NextRequest, NextResponse } from 'next/server';
import createDatabaseConnection from '../../../lib/db';

export async function GET() {
  try {
    const connection = await createDatabaseConnection();
    const [rows] = await connection.execute('SELECT * FROM notifications');
    await connection.end(); // Close connection
    return NextResponse.json({ notifications: rows });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, recipientId } = body;

    const connection = await createDatabaseConnection();
    await connection.execute(
      'INSERT INTO notifications (message, recipient_id) VALUES (?, ?)',
      [message, recipientId]
    );
    await connection.end(); // Close connection
    return NextResponse.json({ message: 'Notification sent' });
  } catch (error) {
    console.error('Error inserting notification:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}

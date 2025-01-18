import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Create a single connection 
const dataConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rupp2357!',
  database: 'school_management',
});

export async function GET() {
  try {
    // Await the connection before using it
    const connection = await dataConnection; // Await the Promise<Connection>
    
    // Execute query on the resolved connection
    const [notifications] = await connection.query('SELECT * FROM notifications');
    
    return NextResponse.json({ notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, recipientId } = body;

    if (!message || !recipientId) {
      return NextResponse.json({ error: 'Message and recipientId are required' }, { status: 400 });
    }

    // Await the connection before using it
    const connection = await dataConnection; // Await the Promise<Connection>

    // Insert new notification using the resolved connection
    await connection.execute(
      'INSERT INTO notifications (message, recipient_id) VALUES (?, ?)',
      [message, recipientId]
    );

    return NextResponse.json({ message: 'Notification sent' });
  } catch (error) {
    console.error('Error sending notification:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}

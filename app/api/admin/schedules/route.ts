import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Create a single connection (you should await it when needed)
const dataConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rupp2357!',
  database: 'school_management',
});

export async function GET() {
  try {
    // Await the connection promise before using it
    const connection = await dataConnection;
    
    // Execute the query on the connection
    const [schedules] = await connection.query('SELECT * FROM schedules');
    
    return NextResponse.json({ schedules });
  } catch (error) {
    console.error('Error fetching schedules:', error);
    return NextResponse.json({ error: 'Failed to fetch schedules' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { shift, startTime, endTime, teacherId } = body;

    // Validate input
    if (!shift || !startTime || !endTime || !teacherId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Await the connection promise before executing the query
    const connection = await dataConnection;

    // Insert the new schedule into the database
    await connection.execute(
      'INSERT INTO schedules (shift, start_time, end_time, teacher_id) VALUES (?, ?, ?, ?)',
      [shift, startTime, endTime, teacherId]
    );

    return NextResponse.json({ message: 'Schedule created' });
  } catch (error) {
    console.error('Error creating schedule:', error);
    return NextResponse.json({ error: 'Failed to create schedule' }, { status: 500 });
  }
}

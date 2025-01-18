import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Create a single connection (await it when needed)
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
    
    // Execute the query on the resolved connection
    const [subjects] = await connection.query('SELECT * FROM subjects');
    
    return NextResponse.json({ subjects });
  } catch (error) {
    console.error('Error fetching subjects:', error);
    return NextResponse.json({ error: 'Failed to fetch subjects' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, departmentId } = body;

    // Validate input
    if (!name || !departmentId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Await the connection promise before executing the query
    const connection = await dataConnection;

    // Insert the new subject into the database
    await connection.execute(
      'INSERT INTO subjects (name, department_id) VALUES (?, ?)',
      [name, departmentId]
    );

    return NextResponse.json({ message: 'Subject created' });
  } catch (error) {
    console.error('Error creating subject:', error);
    return NextResponse.json({ error: 'Failed to create subject' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Create a connection pool (for future scalability, you can use pool instead of a single connection)
const dataConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Rupp2357!',
  database: 'school_management',
});

export async function GET() {
  try {
    // Get a connection from the pool
    const connection = await dataConnection.getConnection();
    
    // Execute the query on the resolved connection
    const [posts] = await connection.execute('SELECT * FROM teachers');
    
    // Release the connection back to the pool
    connection.release();

    return NextResponse.json({ teachers: posts });
  } catch (error) {
    console.error('Error fetching teachers:', error);
    return NextResponse.json({ error: 'Failed to fetch teachers' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, departmentId } = body;

    // Validate input
    if (!name || !email || !departmentId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get a connection from the pool
    const connection = await dataConnection.getConnection();

    // Insert the new teacher into the database
    await connection.execute(
      'INSERT INTO teachers (name, email, department_id) VALUES (?, ?, ?)',
      [name, email, departmentId]
    );

    // Release the connection back to the pool
    connection.release();

    return NextResponse.json({ message: 'Teacher added' });
  } catch (error) {
    console.error('Error adding teacher:', error);
    return NextResponse.json({ error: 'Failed to add teacher' }, { status: 500 });
  }
}

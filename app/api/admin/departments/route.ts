// app/api/departments/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dataConnection from '../../../../lib/db'; // Corrected import

export async function GET() {
  try {
    const [departments] = await dataConnection.execute('SELECT * FROM departments');
    return NextResponse.json({ departments });
  } catch (error) {
    console.error('Error fetching departments:', error);
    return NextResponse.json(
      { message: 'Error fetching departments', error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, academyId } = body;

    if (!name || !academyId) {
      return NextResponse.json(
        { message: 'Name and academyId are required' },
        { status: 400 }
      );
    }

    await dataConnection.execute(
      'INSERT INTO departments (name, academy_id) VALUES (?, ?)',
      [name, academyId]
    );
    return NextResponse.json({ message: 'Department created' });
  } catch (error) {
    console.error('Error creating department:', error);
    return NextResponse.json(
      { message: 'Error creating department', error },
      { status: 500 }
    );
  }
}

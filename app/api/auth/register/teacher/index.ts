import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../db';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
    const { email, password, first_name, last_name } = await req.json();

    if (!email || !password || !first_name || !last_name) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await db.query(
            'INSERT INTO users (email, password, role, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
            [email, hashedPassword, 'teacher', first_name, last_name]
        );
        return NextResponse.json({ message: 'Teacher registration successful' });
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

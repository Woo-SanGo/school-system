import { NextRequest, NextResponse } from 'next/server';
// Correct the import statement
import dataConnection from '../../../../../lib/db';

export async function POST(req: NextRequest) {
    const { email, additional_info } = await req.json();

    if (!email || !additional_info) {
        return NextResponse.json({ error: 'Email and additional info are required' }, { status: 400 });
    }

    try {
        // Use dataConnection instead of db
        await dataConnection.execute(
            'UPDATE users SET additional_info = ? WHERE email = ? AND role = "student"',
            [JSON.stringify(additional_info), email]
        );
        return NextResponse.json({ message: 'Student registration completed' });
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

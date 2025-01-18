import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise'; // Install mysql2 package if not already installed

// Database connection setup
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'school_management',
});

// POST handler to register a student
export async function POST(request: Request) {
  const data = await request.json();
  
  // Extract form data
  const {
    degree,
    college,
    major,
    batch,
    academicYear,
    class,
    shift,
    familyNameKhmer,
    givenNameKhmer,
    familyNameEnglish,
    givenNameEnglish,
    gender,
    birthDate,
    phoneNumber,
    userId
  } = data;

  try {
    // Insert data into the 'students' table
    await db.execute(
      `INSERT INTO students (user_id, degree, college, major, batch, academic_year, class, shift, family_name_khmer, given_name_khmer, family_name_english, given_name_english, gender, birth_date, phone_number)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId, degree, college, major, batch, academicYear, class, shift,
        familyNameKhmer, givenNameKhmer, familyNameEnglish, givenNameEnglish, 
        gender, birthDate, phoneNumber
      ]
    );

    return NextResponse.json({ message: 'Student registered successfully!' });
  } catch (error) {
    console.error('Error inserting student data:', error);
    return NextResponse.json({ message: 'Error registering student.' }, { status: 500 });
  }
}

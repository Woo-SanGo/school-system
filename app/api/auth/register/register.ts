// /app/api/auth/register.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma"; // Import Prisma

const isValidSchoolEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@school\.edu$/;
  return emailRegex.test(email);
};

export async function POST(req: NextRequest) {
  const { email, password, userType } = await req.json();

  // Validate school email format
  if (!isValidSchoolEmail(email)) {
    return NextResponse.json({ error: "Invalid school email" }, { status: 400 });
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user in the database
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      userType, // student or teacher
    },
  });

  return NextResponse.json({ message: "User registered successfully", user });
}

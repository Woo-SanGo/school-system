// /pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  // Check if JWT_SECRET is available
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: 'JWT_SECRET is not defined in environment' });
  }

  try {
    // Signing the JWT token with email and JWT_SECRET
    const token = jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error signing JWT token' });
  }
}

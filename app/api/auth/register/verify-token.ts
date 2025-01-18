import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const token = req.headers.authorization?.split(" ")[1];  // Get the token from Authorization header

    if (!token) {
      return res.status(401).json({ error: "Token not found" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json({ message: "Token is valid", user: decoded });
    } catch (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

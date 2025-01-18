import { NextApiRequest, NextApiResponse } from 'next';
import createDatabaseConnection from '@/lib/db'; // Adjust path to your DB utility

type Post = {
  id?: number;
  subject: string;
  score: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    const connection = await createDatabaseConnection();

    switch (method) {
      case 'GET':
        // Fetch all posts from the posts table
        const [posts] = await connection.execute('SELECT * FROM posts'); // Ensure you're querying the correct table
        res.status(200).json(posts);
        break;

      case 'POST':
        const { subject, score }: Post = req.body;

        if (!subject || !score) {
          res.status(400).json({ message: 'Subject and score are required' });
          return;
        }

        // Insert a new post into the posts table
        await connection.execute(
          'INSERT INTO posts (subject, score) VALUES (?, ?)', // Ensure you're inserting into the correct table
          [subject, score]
        );
        res.status(201).json({ message: 'Post created successfully' });
        break;

      case 'PUT':
        const { id, updatedSubject, updatedScore }: { id: number; updatedSubject: string; updatedScore: number } =
          req.body;

        if (!id || !updatedSubject || !updatedScore) {
          res.status(400).json({ message: 'ID, subject, and score are required' });
          return;
        }

        // Update a post in the posts table
        await connection.execute(
          'UPDATE posts SET subject = ?, score = ? WHERE id = ?',
          [updatedSubject, updatedScore, id]
        );
        res.status(200).json({ message: 'Post updated successfully' });
        break;

      case 'DELETE':
        const { postId }: { postId: number } = req.body;

        if (!postId) {
          res.status(400).json({ message: 'Post ID is required' });
          return;
        }

        // Delete a post from the posts table
        await connection.execute('DELETE FROM posts WHERE id = ?', [postId]);
        res.status(200).json({ message: 'Post deleted successfully' });
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).json({ message: `Method ${method} Not Allowed` });
        break;
    }

    // Close the connection
    await connection.end();
  } catch (error) {
    console.error('Database operation failed:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}

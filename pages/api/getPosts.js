// pages/api/getPosts.js

import { connectToDatabase } from '../../config/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Connect to MongoDB using the promise-based function
    const client = await connectToDatabase();

    // Access the collection
    const collection = client.db('Cluster0').collection('posts');

    // Fetch posts from MongoDB
    const posts = await collection.find().toArray();

        // Close the MongoDB client
        await client.close();

     // Return the fetched posts as JSON in the response
     res.status(200).json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  }
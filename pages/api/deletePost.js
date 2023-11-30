// api/createPost.js

import { connectToDatabase } from '../../config/mongodb';
import { ObjectId } from 'mongodb'; // Import ObjectId for working with MongoDB IDs

export default async function handler(req, res) {
  let client; // Define client in the outer scope

  try {
    // Connect to MongoDB using the promise-based function
    client = await connectToDatabase();

    // Access the collection
    const collection = client.db('Cluster0').collection('posts');

    // Extract the post ID from the request body
    const postId = req.body._id;

    // Convert the postId to ObjectId
    const objectId = new ObjectId(postId);

    // Delete the post based on the provided ID
    const result = await collection.deleteOne({ _id: objectId });

    // Respond with a success message or other relevant information
    res.status(200).json({ message: 'Post deleted successfully', result });
  } catch (error) {
    console.error('Error deleting a post:', error);
    // Respond with an error status and message
    res.status(500).json({ error: 'Failed to delete a post' });
  } finally {
    if (client) {
      // Ensure that the client will close when you finish/error
      await client.close();
    }
  }
}

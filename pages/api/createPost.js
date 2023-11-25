// api/createPost.js

import { connectToDatabase } from '../../config/mongodb';


export default async function handler(req, res) {
  let client; // Define client in the outer scope

  try {
    // Connect to MongoDB using the promise-based function
    client = await connectToDatabase();

    // Access the collection
    const collection = client.db('Cluster0').collection('posts');


    
    // Insert a new document
    const result = await collection.insertOne({
      title: req.body.title,
      date: req.body.date,
      content: req.body.content,
    });



     


    // Respond with a success message or other relevant information
    res.status(200).json({ message: 'Post created successfully', result });
  } catch (error) {
    console.error('Error creating a new post:', error);
    // Respond with an error status and message
    res.status(500).json({ error: 'Failed to create a new post' });
  } finally {
    if (client) {
      // Ensure that the client will close when you finish/error
      await client.close();
    }
  }
}

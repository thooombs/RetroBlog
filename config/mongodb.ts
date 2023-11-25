// config/mongodb.ts

import { MongoClient, ServerApiVersion } from 'mongodb';

// Replace the placeholder with your Atlas connection string
let uri = process.env.MONGODB_URI || '';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectToDatabase() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db('Cluster0').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');

    return client; // Optionally, you can return the client for external use
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Export the MongoDB client instance
export { client };

// Run the connection on module load
connectToDatabase().catch(console.dir);
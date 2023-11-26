import { connectToDatabase } from "../config/mongodb";
import mongoose from "mongoose";

type Items = {
  [key: string]: string
}



const items: Items = {};

export async function getPostBySlug(slug: string) {
  try {
    await connectToDatabase();

    const database = mongoose.connection.db;
    const collection = database.collection('posts');

    const post = await collection.findOne({ slug });

    return post;
  } finally {
    mongoose.connection.close();
  }
}
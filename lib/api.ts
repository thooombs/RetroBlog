import connectMongoDB from "./mongodb";
import mongoose from "mongoose";

type Items = {
  [key: string]: string
}



const items: Items = {};

export async function getPostBySlug(slug: string) {
  try {
    await connectMongoDB();

    const database = mongoose.connection.db;
    const collection = database.collection('posts');

    const post = await collection.findOne({ slug });

    return post;
  } finally {
    mongoose.connection.close();
  }
}
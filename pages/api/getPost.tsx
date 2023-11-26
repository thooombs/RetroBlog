import { GetStaticProps, NextApiRequest, NextApiResponse } from "next";
import { ObjectId, Db} from "mongodb";
import Post from "../../models/post";
import clientPromise from "../../config/promise";

import { ParsedUrlQuery } from 'querystring';

export type Order = {
    description: string;
    price: { $numberDecimal: string };
    _id: ObjectId;
};

export type Post = {
    _id?: ObjectId;
    date: string;
    content: string;
    title: string;
    orders?: Order[];
    slug: string;
};


export const getPost = async (slug: string | ObjectId): Promise<Post | null> => {
    slug = typeof slug === 'string' ? new ObjectId(slug) : slug;
    const mongoClient = await clientPromise;
  
    const data = (await mongoClient
      .db('Cluster0')
      .collection('posts')
      .findOne({ _id: slug })) as Post;
      
    return data || null; // Return null if data is falsy (not found)
  };



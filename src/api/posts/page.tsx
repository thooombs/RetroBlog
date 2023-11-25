import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';
import { Posts, getPosts } from '@/app/components/PostList';
import NextCors from 'nextjs-cors';

type Return = {
    posts: Posts[];
};

export const getposts = async (): Promise<Posts[]> => {
    const mongoClient = await clientPromise;

    const data = (await mongoClient
        .db()
        .collection('posts')
        .find()
        .toArray()) as Posts[];

    return JSON.parse(JSON.stringify(data));
};

export const addPost = async (post: Posts): Promise<ObjectId> => {
    const mongoClient = await clientPromise;

    const response = await mongoClient
        .db()
        .collection('posts')
        .insertOne(post);

    return response.insertedId;
};

export default async (
    req: NextApiRequest,
    res: NextApiResponse<Return | ObjectId | { error: string }>
) => {
    await NextCors(req, res, {
        methods: ['GET', 'POST'],
        origin: [
            'http://localhost:3000',
            'http://localhost:3001',
            'http://localhost:3002',
        ],
        optionsSuccessStatus: 200,
    });
    if (req.method === 'GET') {
        const data = await getPosts();
        res.status(200).json({ posts: data });
    } else if (req.method === 'POST') {
        if (req.body.name && req.body.industry) {
            const post: Posts = {
                name: req.body.name,
                industry: req.body.industry,
                orders: req.body.orders.map((order: any) => {
                    return { ...order, _id: new ObjectId() };
                }),
            };

            const insertedId = await addPost(post);
            res.revalidate('/posts');
            res.revalidate('/posts/' + insertedId);
            res.status(200).json(insertedId);
        } else {
            res.status(400).json({ error: 'name and industry are required.' });
        }
    }
};
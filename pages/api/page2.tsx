
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
    name: string;
    industry: string;
    orders?: Order[];
};


export const getPost = async (id: string | ObjectId): Promise<Post> => {
    id = typeof id === 'string' ? new ObjectId(id) : id;
    const mongoClient = await clientPromise;

    const data = (await mongoClient
        .db()
        .collection('posts')
        .findOne({ _id: id })) as Post;

    return data;
};




export default async (
    req: NextApiRequest,
    res: NextApiResponse<
        | { modifiedCount: number }
        | { customer: Post }
        | { error: string }
        | { deletedCount: number }
    >
) => {
    const id = req.query._id!;

    if (req.method === 'GET') {
        const data = await getPost(id as string);

        if (!data) {
            res.status(404).json({ error: 'Customer not found' });
        }

        res.status(200).json({ customer: data });
    } 
};




interface Params extends ParsedUrlQuery {
    id: string;
}

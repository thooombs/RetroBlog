'use client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { ParsedUrlQuery } from 'querystring';
import { ObjectId } from 'mongodb';
import { getPost } from '@/api/posts/[id]';
import { Order, Post } from '@/api/posts/[id]';

import { connectToDatabase } from '../../../../config/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getposts } from '@/api/posts/page';


type Props = {
    post?: Post;
};

interface Params extends ParsedUrlQuery {
    id: string;
}



const Post = ({ post }: Props) => {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
      return <ErrorPage statusCode={404} />;
    }


const posts =  getposts
const selected = posts.find( (post) => post.slug === slug)
const { data } = useFetch(`/api/page-views?id=${post.slug}`);




export default async (req: NextApiRequest, res: NextApiResponse) => {
  
    const slug = req.query.id; 
    
    if(!slug) return res.json("Página não encontrada!")
  
    const { db, client } = await connectToDatabase();
  
    if(client.isConnected()) {
      const pageViewBySlug = await db
      .collection("pageviews")
      .findOne({ slug })
  
    let total = 0;
    if(pageViewBySlug) {
      total = pageViewBySlug.total;
    }
     
    return res.status(200).json({ total })
      
    }
  
    return res.status(500).json({ error: 'client DB is not connected' })
  
  }

  

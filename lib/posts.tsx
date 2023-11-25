import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import { connectToDatabase } from '../config/mongodb';
import { remark } from 'remark'
import html from 'remark-html'

const uri = process.env.MONGODB_URI || '';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const postsCollectionName = 'posts';


export async function getAllPosts() {
  const database = client.db('Cluster0');
  const collection = database.collection(postsCollectionName);
  const posts = await collection.find().toArray();
  return posts;
}

export async function getPostById(id: any) {
  const database = client.db('Cluster0');
  const collection = database.collection(postsCollectionName);
  const post = await collection.findOne({ _id: new ObjectId(id as string) });
  return post;
}

export async function getSortedPostsData() {
  await connectToDatabase();
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post._id.toString(),
    title: post.title,
    date: post.date,
  })).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(client: MongoClient, id: string) {
  await connectToDatabase();
  const post = await getPostById(id);

  if (!post) {
    // If post is not found, return null or handle the case accordingly
    return null;
  }
  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML = {
    id: post._id.toString(),
    title: post.title,
    date: post.date,
    contentHtml,
  };

  return blogPostWithHTML;
}

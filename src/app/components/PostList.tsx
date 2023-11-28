

import ListItem from "./ListItem"
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../config/mongodb";


const get = async () => {
  
  try {
    let client
    const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";
    client = await connectToDatabase();
    const res = await fetch(`${SERVER_ENDPOINT}/api/getPosts`, {
      cache: "force-cache",
    });
     

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
   
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


export type Post = {
  _id?: ObjectId;
  name: string;
  content: string;
};

// RETORNANDO OS POSTS


export default async function PostList() {
    // const [posts, setPosts] = useState<BlogPost[]>([]);
    const posts = await get();
  
    return (
        <section className="mt-6 max-w-2xl ml-5 ">
            {/* <h2 className=" font-bold dark:text-white/90">Blog</h2> */}
            <ul className="flex flex-col" >

              <ListItem posts={posts} />
         
                {/* {posts.map((post: any) => (
                    <ListItem  key={post._id} post={post} />
                ))} */}
            </ul>
        </section>
    )
}





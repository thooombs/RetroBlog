

import ListItem from "./ListItem"
import { ObjectId } from "mongodb";
import connectMongoDB from "../../../lib/mongodb";


export const getPosts = async () => {
  try {
    let client
    client = await connectMongoDB();
    const res = await fetch("http://localhost:3000/api/getPosts", {
      cache: "no-store",
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


export default async function Posts() {
    // const [posts, setPosts] = useState<BlogPost[]>([]);
    const posts = await getPosts();
 
  
    return (
        <section className="mt-6 max-w-2xl ml-5 ">
            {/* <h2 className=" font-bold dark:text-white/90">Blog</h2> */}
            <ul className="flex flex-col">

              <ListItem posts={posts}/>
         
                {/* {posts.map((post: any) => (
                    <ListItem  key={post._id} post={post} />
                ))} */}
            </ul>
        </section>
    )
}





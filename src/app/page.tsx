import Image from "next/image";
import vercel from "../../public/vercel.svg";
import PostList from "./components/PostList";
import { connectToDatabase } from "../../config/mongodb";



const getPosts = async () => {
  try {
    const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";
    let client
    client = await connectToDatabase();
    const res = await fetch(`${SERVER_ENDPOINT}/api/getPosts`);
    
      

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
   
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};



export default function Home({ posts }: any) {
  const nada = getPosts()
  return (
    <main className="">
      <div className="flex flex-row border-b pb-5">
        <Image
          src={vercel}
          width={100}
          height={100}
          alt="Picture of the author"
          className="mr-5"
        ></Image>
        <div>
          <h2 className="text-blue-700 underline">Test Link for Article</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipnseamus fermentum quis
            ante interdum posuere. Sed sagittis ipsum ac felis consectetur
            sollicitudin. Donec volutpat ut justo id condimentum. Vestibulum
            lacus magna, auctor quis purus eget, ultricies condimentum justo.
            Nam porta purus sit amet sodales vestibulum. Morbi pellentesque
            dapibus ipsum ac rhoncus.
          </p>
        </div>

       


      </div>


      
      <PostList  />
     
      

    </main>
  );
}


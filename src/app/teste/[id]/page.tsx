import Link from "next/link";
import { connectToDatabase } from "../../../../config/mongodb";

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
  


interface IDParams {
    params: {
        id: string
    }
}

export default async function Teste({ params }: IDParams){
    const data = await getPosts()
    console.log(data)


    const uniqueProduct = data.find((post: BlogPost) => post._id === params.id)
    console.log("uniqueProduct", uniqueProduct)

   console.log("params", params.id)
 
   return (
    <div>
         <Link className="bg-blue-500 text-white" href="/" > GO BACK</Link>
        {uniqueProduct && (
      <div>
        <h2>{uniqueProduct.title}</h2>
        <p>{uniqueProduct.content}</p>
        <p>{uniqueProduct.date}</p>
       
      </div>

    )}
   
    </div>
    
   )
}


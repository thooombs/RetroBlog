import Link from "next/link";
import { connectToDatabase } from "../../../../config/mongodb";
import { useRouter } from "next/navigation";
import RemoveBtn from "@/app/components/Removebutton";


 

  const get = async () => {
  
    try {
      let client
      const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";
      client = await connectToDatabase();
      const res = await fetch(`${SERVER_ENDPOINT}/api/getPosts`, {
        cache: "no-cache",
      });
       
  
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
    const data = await get()
    console.log('DATA', data)

    
    const uniqueProduct = await data.find((post: BlogPost) => post._id === params.id)
    console.log("uniqueProduct", uniqueProduct)

   console.log("params", params.id)
 

   const paragraphs = uniqueProduct.content.split('\n');
  


   return (
   
    <div>
         <Link className="bg-blue-500 text-white  " href="/" > ← Go Back </Link>
       
         
        {uniqueProduct && (
      <div className="my-2">
        <h2 className="text-lg mb-1">{uniqueProduct.title}</h2>
        <p className="mb-5 ">{uniqueProduct.content}</p>
        
        <p className="font-light">{uniqueProduct.date}</p>

       
        <RemoveBtn id={uniqueProduct._id} />
      </div>
   

    )}
    
    </div>
   )
}


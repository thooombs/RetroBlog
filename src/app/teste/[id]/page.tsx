import Link from "next/link";
import connectMongoDB from "../../../../lib/mongodb";

 const getPosts = async () => {
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

 // CALMA CALMCA CALMA CALMCA LAMCA // VOU COMENTAR RAPIDAO OQ TU TA FAZENDO RAPIDO



// type Props = {
//     post: BlogPost
//     morePosts: BlogPost[]
//     preview?: boolean
//   }
  
  
//   interface TesteProps {
//     params: {
//       id: string
//     }
//   }
  
  
//   export async function getslug({params}: TesteProps){
  
//     const staticData = await fetch(`https://api.github.com/users/tt`, { cache: 'force-cache' })
//     console.log(staticData)
//     console.log(params.slug)
//     //  es
   
//     //poise, sera q ta certo esse sllug aqui, nos docs tava assim
      
//   console.log("staticData", staticData)
//   // ... acho q ta errada
//     return (
//      {staticData} 
//     )
//   }
  
  
  
  
  
//   export default async function Post({ post }: Props, {params}: Params) {
//     const router = useRouter()
//     const response = await getslug()
   
   
    
//     console.log("aaaaaaa", response)
//     const title = `${post.title} | Next.js Blog Example with `
//     if (!router.isFallback && !post?.slug) {
//       return <ErrorPage statusCode={404} />
//     }
//     return (
      
//             <>
//               <article className="mb-32">
                
//                   <title>{title}</title>
//                <p>
               
//                {params.slug}
//                   title={post.title}
//                   date={post.date}
//                   content={post.content}
//                   </p>
                
//               </article>
//             </>
        
//     )
//   }
  
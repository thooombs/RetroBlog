export default async function Page({ params }: { params: { slug: string } }) {
  const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";
  const staticData = await fetch(`${SERVER_ENDPOINT}/api/getPosts`)
   
  

 
 
  
    return <div>My Post: {params.slug}</div>
  }


export default async function Page({ params }: { params: { slug: string } }) {
  
  const staticData = await fetch(`/api/posts/getpost`, { cache: 'force-cache' })
 
  
    return <div>My Post: {params.slug}</div>
  }


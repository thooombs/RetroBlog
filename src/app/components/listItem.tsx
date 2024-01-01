import Link from "next/link"
import RemoveBtn from "./Removebutton"
// import getFormattedDate from "../../../lib/getFormattedDate"

interface a {
    _id: string
    title: string
    date: string
    content: string
    time: string
}



type Props = {
    posts: BlogPost[] 
}

export default function listItem({ posts }: Props) {
    
    
    if (!posts) {
        return null; 
    }



     // Sort posts by date in descending order
  const sortedPosts = [...posts].sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());


    return (
        <ul>
            {sortedPosts.map(post => (
                <li className="mt-4 list-[square] font-medium dark:text-white/90" key={post._id}>
                    <Link className="underline text-blue-600 hover:text-black/90 dark:hover:text-white" href={`/teste/${post._id}`}>
                        {post.title} 
                    </Link>
                    
                </li>
            ))}
        </ul>

          
       
    )}
    


 
import Link from "next/link"
// import getFormattedDate from "../../../lib/getFormattedDate"

interface a {
    _id: string
    title: string
    date: string
    content: string
}



type Props = {
    posts: BlogPost[] 
}

export default function listItem({ posts }: Props) {
    
    
    if (!posts) {
        return null; 
    }
    return (
        <ul>
            {posts.map(post => (
                <li className="mt-4 list-[square] font-medium dark:text-white/90" key={post._id}>
                    <Link className="underline text-blue-500 hover:text-black/90 dark:hover:text-white" href={`/teste/${post._id}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>

          
       
    )}
    


 
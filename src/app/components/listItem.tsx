import Link from "next/link"
// import getFormattedDate from "../../../lib/getFormattedDate"

interface a {
    _id: string
    title: string
    date: string
    content: string
}



type Props = {
    posts: BlogPost[] | null
}

export default function ListItem({ posts }: Props) {
    
    
    // const { title, date } = posts
    //  console.log('data ', date)
    // const formattedDate = getFormattedDate(date)
    if (!posts) {
        return null; // Or some fallback behavior for when posts is null
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
    


 